import type { CSSProperties } from 'react'
import { extras, projects, stack } from '../data'
import { Reveal } from './Reveal'
import { useCountUp, useInView } from '../lib/motion'

const toolCount = stack.reduce((total, group) => total + group.items.length, 0)
const lineDelay = (ms: number) => ({ '--line-delay': `${ms}ms` }) as CSSProperties

function Stat({ value, label, suffix }: { value: number; label: string; suffix?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.35 })
  const count = useCountUp(value, inView)

  return (
    <div ref={ref}>
      <p className="display text-[clamp(2.3rem,5vw,3.6rem)] tabular-nums text-ice">
        {String(count).padStart(2, '0')}
        {suffix}
      </p>
      <p className="eyebrow mt-2 text-[9px] text-fog">{label}</p>
    </div>
  )
}

export function Manifesto() {
  return (
    <section className="on-ink relative overflow-hidden bg-ink py-20 text-chalk sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: 'radial-gradient(circle, #d2ecfd 1px, transparent 1.4px)',
          backgroundSize: '132px 132px',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 70% 40%, #000 20%, transparent 80%)',
          maskImage: 'radial-gradient(ellipse 80% 70% at 70% 40%, #000 20%, transparent 80%)',
        }}
      />

      <div className="shell relative">
        <Reveal>
          <p className="eyebrow flex items-center gap-2 text-[9.5px] text-ice">
            <span className="h-1.5 w-1.5 rounded-full bg-ice" />
            ( HOW I WORK )
          </p>
        </Reveal>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <Reveal>
            <h2 className="display text-[clamp(2.5rem,7.2vw,5rem)] text-ice">
              <span className="line">
                <span>Built to land</span>
              </span>
              <span className="line" style={lineDelay(90)}>
                <span>in production.</span>
              </span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-sm text-sm leading-relaxed text-fog lg:ml-auto">
              Reliability, performance and cost are not add-ons. I build them in from the first
              commit: typed contracts, sensible caching, and a deploy I can watch.
            </p>
            <p className="eyebrow mt-5 text-[9px] text-white/35">
              TypeScript · React · Node · SQL
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-8 border-t border-white/15 pt-8 sm:grid-cols-4 sm:gap-6">
          <Stat value={projects.length} label="Products shipped" />
          <Stat value={extras.length} label="Builds in the lab" />
          <Stat value={toolCount} label="Tools in the stack" />
          <Stat value={2} suffix="+" label="Years shipping" />
        </div>
      </div>
    </section>
  )
}
