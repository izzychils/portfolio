import { ArrowRight } from 'lucide-react'
import { SectionLink } from '../router'

export function NotFound() {
  const path = decodeURI(window.location.pathname)

  return (
    <section className="relative flex min-h-[70vh] items-center pt-28 pb-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-10 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_65%)] blur-2xl" />
      </div>

      <div className="shell relative">
        <p className="font-mono text-xs tracking-[0.22em] text-neon">404 / NOT FOUND</p>
        <h1 className="mt-4 max-w-2xl font-display text-[2.4rem] leading-[1.05] font-semibold tracking-tight text-chalk sm:text-5xl">
          That page does not exist.
        </h1>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-mist">
          There is nothing at <span className="font-mono text-chalk">{path}</span>. The site has one
          page per section: work, about, experience, stack and contact.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <SectionLink
            to="top"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon to-violet px-5 py-3 text-sm font-semibold text-ink transition hover:brightness-110"
          >
            Back home
            <ArrowRight size={16} strokeWidth={2.6} />
          </SectionLink>
          <SectionLink
            to="work"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-medium text-chalk transition hover:border-white/25 hover:bg-white/10"
          >
            See my work
          </SectionLink>
        </div>
      </div>
    </section>
  )
}
