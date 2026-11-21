import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { socials } from '../data'
import { Reveal } from './Reveal'
import { useMagnetic } from '../lib/motion'

const lineDelay = (ms: number) => ({ '--line-delay': `${ms}ms` }) as CSSProperties

export function Contact() {
  const mailRef = useMagnetic<HTMLAnchorElement>(0.2, 8)

  return (
    <section id="contact" className="relative scroll-mt-24 bg-paper py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <p className="eyebrow flex items-center gap-2 text-[9.5px] text-ink/55">
            <span className="h-1.5 w-1.5 rounded-full bg-ink" />
            ( 05 ) Contact
          </p>
        </Reveal>

        <Reveal>
          <h2 className="display mt-6 text-[clamp(2.9rem,9.4vw,6.4rem)]">
            <span className="line">
              <span>Let&apos;s build</span>
            </span>
            <span className="line" style={lineDelay(90)}>
              <span>something.</span>
            </span>
          </h2>
        </Reveal>

        <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal delay={100}>
            <p className="max-w-md text-[15px] leading-relaxed text-mist">
              I am open to full stack engineering roles, remote or in Nigeria. Send me the problem
              you are trying to solve and I will tell you how I would approach it.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <a
              ref={mailRef}
              data-magnetic=""
              href={`mailto:${socials.email}`}
              className="group inline-flex h-14 max-w-full items-center gap-2 rounded-full bg-ink px-7 text-[13.5px] font-medium text-chalk transition-colors hover:bg-ink-raise"
            >
              <span className="truncate">{socials.email}</span>
              <ArrowUpRight
                size={17}
                strokeWidth={2.4}
                className="shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <div className="grid grid-cols-2 gap-x-6 gap-y-7 border-t border-ink/25 pt-7 sm:grid-cols-2 lg:grid-cols-4">
            <div className="col-span-2 sm:col-span-1">
              <p className="eyebrow text-[8.5px] text-ink/45">New projects</p>
              <a
                href={`mailto:${socials.email}`}
                className="link-line mt-2 block break-all text-[13.5px] leading-snug text-ink"
              >
                {socials.email}
              </a>
            </div>
            <div>
              <p className="eyebrow text-[8.5px] text-ink/45">Based in</p>
              <p className="mt-2 text-[13.5px] text-ink">Uyo, Nigeria</p>
            </div>
            <div>
              <p className="eyebrow text-[8.5px] text-ink/45">Working style</p>
              <p className="mt-2 text-[13.5px] text-ink">Remote friendly</p>
            </div>
            <div>
              <p className="eyebrow text-[8.5px] text-ink/45">Elsewhere</p>
              <div className="mt-2 flex items-center gap-3">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-ink/60 transition hover:-translate-y-0.5 hover:text-ink"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-ink/60 transition hover:-translate-y-0.5 hover:text-ink"
                >
                  <LinkedinIcon size={16} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
