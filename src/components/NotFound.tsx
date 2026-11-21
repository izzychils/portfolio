import { ArrowUpRight } from 'lucide-react'
import { SectionLink } from '../router'

export function NotFound() {
  const path = decodeURI(window.location.pathname)

  return (
    <section className="relative flex min-h-[85svh] items-center overflow-hidden bg-ice pt-28 pb-16">
      <span
        aria-hidden="true"
        className="display pointer-events-none absolute -right-4 top-10 select-none text-[42vw] leading-none text-ink/[0.06] sm:text-[26rem]"
      >
        404
      </span>

      <div className="shell relative">
        <p className="eyebrow flex items-center gap-2 text-[9.5px] text-ink/55">
          <span className="h-1.5 w-1.5 rounded-full bg-ink" />
          ( 404 ) NOT FOUND
        </p>
        <h1 className="display mt-6 max-w-2xl text-[clamp(2.6rem,8vw,5rem)]">
          <span className="line">
            <span>That page does</span>
          </span>
          <span className="line">
            <span>not exist.</span>
          </span>
        </h1>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/70">
          There is nothing at <span className="font-mono text-ink">{path}</span>. The site has one
          page per section: work, about, experience, stack and contact.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <SectionLink
            to="top"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-[13.5px] font-medium text-chalk transition hover:bg-ink-raise"
          >
            Back home
            <ArrowUpRight
              size={16}
              strokeWidth={2.4}
              className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </SectionLink>
          <SectionLink
            to="work"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-ink px-6 text-[13.5px] font-medium text-ink transition hover:bg-ink hover:text-chalk"
          >
            See my work
          </SectionLink>
        </div>
      </div>
    </section>
  )
}
