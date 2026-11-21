import type { CSSProperties } from 'react'
import { Reveal } from './Reveal'

const principles = [
  {
    title: 'End to end ownership',
    body: 'I take features from an empty repo to a live deployment: routing, state, auth, API integration and the CSS in between.',
  },
  {
    title: 'Interfaces that feel fast',
    body: 'Virtualised tables, motion with a purpose, and PWA shells that survive a weak connection.',
  },
  {
    title: 'Data you can trust',
    body: 'Normalised schemas, typed contracts and predictable backend behaviour over clever shortcuts.',
  },
]

const facts = [
  { label: 'Based in', value: 'Uyo, Nigeria' },
  { label: 'Working style', value: 'Remote friendly' },
  { label: 'Focus', value: 'Full stack product work' },
  { label: 'Education', value: 'BSc Software Engineering' },
]

const lineDelay = (ms: number) => ({ '--line-delay': `${ms}ms` }) as CSSProperties

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 border-t border-ink/10 bg-ice py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <p className="eyebrow flex items-center gap-2 text-[9.5px] text-ink/55">
            <span className="h-1.5 w-1.5 rounded-full bg-ink" />
            ( 02 ) About
          </p>
        </Reveal>

        <div className="mt-5 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-14">
          <Reveal>
            <h2 className="display text-[clamp(2.4rem,6.6vw,4.5rem)]">
              <span className="line">
                <span>I care about</span>
              </span>
              <span className="line" style={lineDelay(90)}>
                <span>the whole pipeline.</span>
              </span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-[14.5px] leading-relaxed text-ink/70">
              I studied Software Engineering at Babcock University, and I now work as a Technology
              and Systems Associate at People Growth Africa, building the web applications, APIs and
              internal tools the company runs on.
            </p>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink/70">
              What keeps me interested is the seam between layers: the interface someone actually
              enjoys using, the API contract behind it, the schema that keeps it honest, and the
              deploy that puts it in front of people.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {principles.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <div className="group h-full rounded-[18px] border border-ink bg-paper p-5 transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--color-ink)]">
                <p className="eyebrow text-[9px] text-ink/45">
                  {String(index + 1).padStart(2, '0')} · PRINCIPLE
                </p>
                <h3 className="display mt-5 text-[1.3rem] leading-tight">{item.title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-mist">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-ink/25 pt-7 sm:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="eyebrow text-[8.5px] text-ink/45">{fact.label}</dt>
                <dd className="mt-2 text-[13.5px] leading-snug text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
