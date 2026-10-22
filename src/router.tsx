import { useEffect, useState, type AnchorHTMLAttributes, type MouseEvent } from 'react'
import { pathFor, routeFor, type Route, type SectionId } from './routes'

const ROUTE_EVENT = 'portfolio:routechange'

export function readRoute(): Route {
  return routeFor(window.location.pathname, window.location.hash)
}

function scrollBehavior(): ScrollBehavior {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
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

  useEffect(() => {
    // The browser would otherwise restore the previous offset and fight the router.
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
    cleanLocation()
    setRoute(readRoute())

    let userScrolled = false
    const markScrolled = () => {
      userScrolled = true
    }
    window.addEventListener('scroll', markScrolled, { passive: true, once: true })

    const initial = readRoute()
    if (initial !== 'not-found') {
      requestAnimationFrame(() => scrollToSection(initial, 'instant'))
      document.fonts?.ready.then(() => {
        if (!userScrolled) scrollToSection(initial, 'instant')
      })
    }

    const sync = () => {
      const next = readRoute()
      setRoute(next)
      if (next === 'not-found') {
        window.scrollTo({ top: 0, behavior: 'instant' })
      } else {
        scrollToSection(next, 'instant')
      }
    }
    const onRouteChange = () => {
      const next = readRoute()
      setRoute(next)
      // Scroll once the new route is on screen: a section may only mount now.
      requestAnimationFrame(() => {
        if (next === 'not-found') window.scrollTo({ top: 0, behavior: 'instant' })
        else scrollToSection(next)
      })
    }

    window.addEventListener('popstate', sync)
    window.addEventListener(ROUTE_EVENT, onRouteChange)
    return () => {
      window.removeEventListener('scroll', markScrolled)
      window.removeEventListener('popstate', sync)
      window.removeEventListener(ROUTE_EVENT, onRouteChange)
    }
  }, [])

  return route
}
