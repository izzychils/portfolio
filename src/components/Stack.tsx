import { stack } from '../data'
import { Reveal } from './Reveal'

const marquee = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'Python',
  'FastAPI',
  'PostgreSQL',
  'MySQL',
  'Redis',
  'Tailwind',
  'Vercel',
  'Docker',
  'Git',
]

export function StackSection() {
  return (
    <section id="stack" className="relative scroll-mt-24 overflow-hidden border-t border-white/5 py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs tracking-[0.22em] text-neon">04 / TOOLKIT</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-chalk sm:text-4xl">
                What I build with
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-mist">
              I pick the boring, well understood tool when it is the right one, and reach for
              something newer only when it earns its place.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {stack.map((group, index) => (
            <Reveal key={group.group} delay={index * 60}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-chalk">
                    {group.group}
                  </h3>
                  <span className="font-mono text-[10px] text-mist/60">{group.items.length}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/8 bg-ink-raise/60 px-2.5 py-1.5 text-[12.5px] text-mist transition hover:border-neon/30 hover:text-chalk"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="relative mt-14 select-none border-y border-white/5 py-4" aria-hidden>
        <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
          {[...marquee, ...marquee].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-8 font-mono text-xs uppercase tracking-[0.18em] text-mist/50">
              {item}
              <span className="h-1 w-1 rounded-full bg-neon/40" />
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
      </div>
    </section>
  )
}
