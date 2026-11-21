import { ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { socials } from '../data'
import { SectionLink } from '../router'

export function Footer() {
  return (
    <footer className="on-ink relative overflow-hidden bg-ink pt-12 text-chalk">
      <div className="shell">
        <div className="flex flex-col gap-7 border-b border-white/12 pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="eyebrow text-[9.5px] text-chalk">ISRAEL IRAOYA</p>
            <p className="eyebrow mt-2 text-[8.5px] text-white/35">
              FULL STACK ENGINEER · UYO, NIGERIA
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="eyebrow inline-flex items-center gap-1.5 text-[8.5px] text-fog transition hover:text-ice"
            >
              <GithubIcon size={12} />
              GITHUB
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="eyebrow inline-flex items-center gap-1.5 text-[8.5px] text-fog transition hover:text-ice"
            >
              <LinkedinIcon size={12} />
              LINKEDIN
            </a>
            <a
              href={`mailto:${socials.email}`}
              className="eyebrow text-[8.5px] text-fog transition hover:text-ice"
            >
              EMAIL
            </a>
            <SectionLink
              to="top"
              className="eyebrow inline-flex h-8 items-center gap-1.5 rounded-full border border-white/25 px-3 text-[8.5px] text-chalk transition hover:border-ice hover:text-ice"
            >
              TOP
              <ArrowUp size={11} />
            </SectionLink>
          </div>
        </div>
      </div>

      <div className="mt-10 overflow-hidden px-2">
        <p className="display whitespace-nowrap text-[12.7vw] leading-[0.78] tracking-[-0.05em] stroke-type select-none">
          israeliraoya*
        </p>
      </div>

      <div className="shell">
        <div className="mt-7 flex flex-col gap-2 border-t border-white/12 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow text-[8.5px] text-white/30">© 2026 — ALL RIGHTS RESERVED</p>
          <p className="eyebrow text-[8.5px] text-white/30">BUILT WITH REACT · TYPESCRIPT · TAILWIND</p>
          <p className="eyebrow text-[8.5px] text-white/30">100 / 100</p>
        </div>
      </div>
    </footer>
  )
}
