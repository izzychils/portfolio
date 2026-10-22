import { useEffect, useRef, useState, type AnchorHTMLAttributes, type MouseEvent } from 'react'
import { pathFor, routeFor, type Route, type SectionId } from './routes'

const ROUTE_EVENT = 'portfolio:routechange'

export function readRoute(): Route {
  return routeFor(window.location.pathname, window.location.hash)
}

function scrollBehavior(): ScrollBehavior {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
}

export function scrollToSection(section: SectionId, behavior: ScrollBehavior = scrollBehavior()) {
  if (section === 'top') {
    window.scrollTo({ top: 0, behavior })
    return
  }
  const element = document.getElementById(section)
  if (element) element.scrollIntoView({ behavior, block: 'start' })
}

/** Drop fragments and trailing segments so old links become a single clean path. */
function cleanLocation() {
  const { pathname, hash } = window.location
  if (!hash) return
  const route = routeFor(pathname, hash)
  window.history.replaceState(null, '', route === 'not-found' ? pathname : pathFor(route))
}

export function navigate(section: SectionId) {
  const path = pathFor(section)
  if (window.location.pathname !== path || window.location.hash) {
    window.history.pushState({ section }, '', path)
  }
  window.dispatchEvent(new Event(ROUTE_EVENT))
}

type SectionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { to: SectionId }

/** Anchor that keeps middle-click and modifier-click working as real links. */
export function SectionLink({ to, onClick, ...rest }: SectionLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    if (event.defaultPrevented) return
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    navigate(to)
  }

  return <a href={pathFor(to)} onClick={handleClick} {...rest} />
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(readRoute)
  const [request, setRequest] = useState(0)
  const behavior = useRef<ScrollBehavior>('instant')

  useEffect(() => {
    // The browser would otherwise restore the previous offset and fight the router.
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
    cleanLocation()

    const sync = () => {
      behavior.current = 'instant'
      setRoute(readRoute())
      setRequest((value) => value + 1)
    }
    const onRouteChange = () => {
      behavior.current = scrollBehavior()
      setRoute(readRoute())
      setRequest((value) => value + 1)
    }

    window.addEventListener('popstate', sync)
    window.addEventListener(ROUTE_EVENT, onRouteChange)
    return () => {
      window.removeEventListener('popstate', sync)
      window.removeEventListener(ROUTE_EVENT, onRouteChange)
    }
  }, [])

  // Runs after commit, so the section for the new route is already mounted.
  useEffect(() => {
    if (route === 'not-found') {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }
    scrollToSection(route, behavior.current)
  }, [route, request])

  return route
}
