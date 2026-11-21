import { useEffect, useRef, useState } from 'react'

/** True when the visitor asked the OS for less motion. */
export function prefersReduced() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function finePointer() {
  return typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches
}

type InViewOptions = {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

/** Adds `inView` once an element crosses the viewport. */
export function useInView<T extends HTMLElement>(options: InViewOptions = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -8% 0px', once = true } = options
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          setInView(true)
          if (once) observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, inView }
}

/**
 * Leans an element towards the pointer and publishes `--tilt-x`, `--tilt-y`,
 * `--glow-x` and `--glow-y` so children can react to the same position.
 */
export function useTilt<T extends HTMLElement>(strength = 7) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node || prefersReduced() || !finePointer()) return

    let frame = 0
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const render = () => {
      currentX += (targetX - currentX) * 0.12
      currentY += (targetY - currentY) * 0.12
      node.style.setProperty('--tilt-x', `${(-currentY * strength).toFixed(2)}deg`)
      node.style.setProperty('--tilt-y', `${(currentX * strength).toFixed(2)}deg`)
      node.style.setProperty('--glow-x', `${(50 + currentX * 42).toFixed(1)}%`)
      node.style.setProperty('--glow-y', `${(50 + currentY * 42).toFixed(1)}%`)
      const settled = Math.abs(targetX - currentX) < 0.001 && Math.abs(targetY - currentY) < 0.001
      frame = settled ? 0 : requestAnimationFrame(render)
    }

    const kick = () => {
      if (!frame) frame = requestAnimationFrame(render)
    }

    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect()
      targetX = clamp(((event.clientX - rect.left) / rect.width) * 2 - 1, -1, 1)
      targetY = clamp(((event.clientY - rect.top) / rect.height) * 2 - 1, -1, 1)
      kick()
    }

    const onLeave = () => {
      targetX = 0
      targetY = 0
      kick()
    }

    node.addEventListener('pointermove', onMove)
    node.addEventListener('pointerleave', onLeave)
    return () => {
      node.removeEventListener('pointermove', onMove)
      node.removeEventListener('pointerleave', onLeave)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [strength])

  return ref
}

/** Pulls an element a few pixels towards the pointer, like a magnet. */
export function useMagnetic<T extends HTMLElement>(strength = 0.22, max = 10) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node || prefersReduced() || !finePointer()) return

    let frame = 0
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const render = () => {
      currentX += (targetX - currentX) * 0.18
      currentY += (targetY - currentY) * 0.18
      node.style.setProperty('--mag-x', `${currentX.toFixed(2)}px`)
      node.style.setProperty('--mag-y', `${currentY.toFixed(2)}px`)
      const settled = Math.abs(targetX - currentX) < 0.05 && Math.abs(targetY - currentY) < 0.05
      frame = settled ? 0 : requestAnimationFrame(render)
    }

    const kick = () => {
      if (!frame) frame = requestAnimationFrame(render)
    }

    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect()
      targetX = clamp((event.clientX - (rect.left + rect.width / 2)) * strength, -max, max)
      targetY = clamp((event.clientY - (rect.top + rect.height / 2)) * strength, -max, max)
      kick()
    }

    const onLeave = () => {
      targetX = 0
      targetY = 0
      kick()
    }

    node.addEventListener('pointermove', onMove)
    node.addEventListener('pointerleave', onLeave)
    return () => {
      node.removeEventListener('pointermove', onMove)
      node.removeEventListener('pointerleave', onLeave)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [strength, max])

  return ref
}

/** Counts from zero to `target` once `start` flips true. */
export function useCountUp(target: number, start: boolean, duration = 1300) {
  const [value, setValue] = useState(() => (prefersReduced() ? target : 0))

  useEffect(() => {
    if (!start || prefersReduced()) return

    let frame = 0
    const began = performance.now()

    const tick = (now: number) => {
      const progress = clamp((now - began) / duration, 0, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setValue(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, start, duration])

  return value
}

/** Which section currently sits under the reading line. */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    const onScroll = () => {
      const probe = window.innerHeight * 0.38
      let current = ids[0] ?? ''
      for (const id of ids) {
        const node = document.getElementById(id)
        if (node && node.getBoundingClientRect().top <= probe) current = id
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids])

  return active
}

/** Drifts an element slightly against the scroll for depth. */
export function useParallax<T extends HTMLElement>(amount = 0.12) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node || prefersReduced()) return

    let frame = 0
    const update = () => {
      frame = 0
      const rect = node.getBoundingClientRect()
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * amount
      node.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [amount])

  return ref
}
