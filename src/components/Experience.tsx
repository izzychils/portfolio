import { experience } from '../data'
import { Reveal } from './Reveal'

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 bg-paper py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <p className="eyebrow flex items-center gap-2 text-[9.5px] text-ink/55">
            <span className="h-1.5 w-1.5 rounded-full bg-ink" />
            ( 03 ) Track record
          </p>
          <h2 className="display mt-5 text-[clamp(2.4rem,6.6vw,4.5rem)]">
            <span className="line">
              <span>Where I&apos;ve worked.</span>
            </span>
          </h2>
        </Reveal>

        <ol className="mt-12 border-t border-ink/20">
          {experience.map((item, index) => (
            <Reveal key={item.role} as="li" delay={index * 70}>
              <article className="group grid gap-3 rounded-xl px-2 py-7 transition-colors hover:bg-ice sm:-mx-3 sm:grid-cols-[2.5rem_1fr_auto] sm:gap-6 sm:px-3 sm:py-8">
                <span className="eyebrow pt-1 text-[9px] text-ink/40">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="display text-[1.35rem] leading-tight sm:text-[1.55rem]">
                    {item.role}
                    <span className="text-ink/45"> at </span>
                    <span className="squiggle">{item.org}</span>
                  </h3>
                  <p className="eyebrow mt-2 text-[8.5px] text-ink/45">{item.place}</p>
                  <ul className="mt-4 space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-[13.5px] leading-relaxed text-mist">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-ink/35" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="eyebrow whitespace-nowrap pt-1 text-[8.5px] text-ink/45 sm:text-right">
                  {item.period}
                </span>
              </article>
              <div className="h-px bg-ink/15" />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
