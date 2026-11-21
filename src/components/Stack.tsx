import type { CSSProperties } from 'react'
import { stack } from '../data'
import { Reveal } from './Reveal'

const tiltFor = (index: number) => `${(((index * 37) % 5) - 2) * 0.8}deg`
const toolCount = stack.reduce((total, group) => total + group.items.length, 0)

export function StackSection() {
  return (
    <section id="stack" className="relative scroll-mt-24 bg-ice py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <p className="eyebrow flex items-center gap-2 text-[9.5px] text-ink/55">
            <span className="h-1.5 w-1.5 rounded-full bg-ink" />
            ( 04 ) Toolkit
          </p>
        </Reveal>

        <div className="mt-5 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <Reveal>
            <h2 className="display text-[clamp(2.4rem,6.6vw,4.5rem)]">
              <span className="line">
                <span>What I build with.</span>
              </span>
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="max-w-sm text-sm leading-relaxed text-ink/70 lg:ml-auto">
              I pick the boring, well understood tool when it is the right one, and reach for
              something newer only when it earns its place.
            </p>
          </Reveal>
        </div>

        <Reveal delay={60} variant="scale" className="mt-10">
          <div className="rounded-[22px] border border-ink bg-ink p-6 text-chalk sm:p-9">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/12 pb-4">
              <p className="eyebrow text-[9px] text-fog">( THE TOOLKIT )</p>
              <p className="eyebrow text-[9px] text-fog">{toolCount} tools, in production</p>
            </div>

            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stack.map((group) => (
                <div key={group.group}>
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="eyebrow text-[9px] text-ice">{group.group}</p>
                    <span className="font-mono text-[9px] text-white/30">{group.items.length}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item, index) => (
                      <span
                        key={item}
                        className="chip"
                        style={{ '--r': tiltFor(index) } as CSSProperties}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="eyebrow mt-9 border-t border-white/12 pt-4 text-[8.5px] text-white/30">
              Hover a tag — every one of these runs in something I shipped
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
