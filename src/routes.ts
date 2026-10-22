export const sections = ['top', 'work', 'about', 'experience', 'stack', 'contact'] as const

export type SectionId = (typeof sections)[number]
export type Route = SectionId | 'not-found'

export function isSection(value: string): value is SectionId {
  return (sections as readonly string[]).includes(value)
}

/** Reduce a path or fragment to its first meaningful segment. */
function segment(value: string): string {
  return value.replace(/^\/+|\/+$/g, '').split('/')[0].toLowerCase()
}

export function sectionFromSegment(value: string): SectionId | null {
  const name = segment(value)
  if (name === '') return 'top'
  return isSection(name) ? name : null
}

export function pathFor(section: SectionId): string {
  return section === 'top' ? '/' : `/${section}`
}

/**
 * Resolve a location to a route. A legacy fragment wins over the path so
 * old links like /stack#work collapse to /work instead of keeping both.
 */
export function routeFor(pathname: string, hash = ''): Route {
  const fragment = hash.replace(/^#/, '')
  if (fragment !== '') {
    const fromHash = sectionFromSegment(fragment)
    if (fromHash && fromHash !== 'top') return fromHash
  }
  return sectionFromSegment(pathname) ?? 'not-found'
}
