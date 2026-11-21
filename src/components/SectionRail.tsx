import { useActiveSection } from '../lib/motion'
import { SectionLink } from '../router'
import { sections, type SectionId } from '../routes'

const labels: Record<SectionId, string> = {
  top: 'Intro',
  work: 'Work',
  about: 'About',
  experience: 'Track record',
  stack: 'Toolkit',
  contact: 'Contact',
}

export function SectionRail() {
  const active = useActiveSection(sections)

  return (
    <nav
      aria-label="Section progress"
      className="pointer-events-none fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ul className="pointer-events-auto flex flex-col items-end gap-3.5">
        {sections.map((id) => {
          const isActive = active === id
          return (
            <li key={id}>
              <SectionLink
                to={id}
                aria-current={isActive ? 'true' : undefined}
                className="group flex items-center justify-end gap-3"
              >
                <span className="eyebrow translate-x-1 text-[9px] text-white opacity-0 mix-blend-difference transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  {labels[id]}
                </span>
                <span
                  className={`block h-1.5 rounded-full bg-white mix-blend-difference transition-all duration-500 ${
                    isActive ? 'w-6 opacity-100' : 'w-1.5 opacity-40 group-hover:opacity-80'
                  }`}
                />
              </SectionLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
