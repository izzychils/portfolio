import { experience } from '../data'
import { Reveal } from './Reveal'

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 border-t border-white/5 py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.22em] text-neon">03 / TRACK RECORD</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-chalk sm:text-4xl">
            Where I have worked
          </h2>
        </Reveal>

        <ol className="mt-12 relative border-l border-white/10 pl-6 sm:pl-8">
          {experience.map((item, index) => (
            <Reveal key={item.role} delay={index * 70} as="li" className="relative pb-10 last:pb-0">
              <span className="absolute -left-[31px] top-1.5 grid h-3 w-3 place-items-center rounded-full border border-neon/50 bg-ink sm:-left-[39px]">
                <span className="h-1.5 w-1.5 rounded-full bg-neon" />
              </span>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="font-display text-lg font-semibold text-chalk">
                  {item.role}
                  <span className="text-mist/70"> at </span>
                  <span className="text-neon">{item.org}</span>
                </h3>
                <span className="shrink-0 font-mono text-[11px] uppercase tracking-wider text-mist/70">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 font-mono text-[11px] text-mist/60">{item.place}</p>
              <ul className="mt-3 space-y-1.5">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm leading-relaxed text-mist">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/25" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
