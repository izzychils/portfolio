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
  { label: 'Education', value: 'BSc Software Engineering, Babcock University' },
]

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 border-t border-white/5 py-20 sm:py-28">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.22em] text-neon">02 / ABOUT</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-chalk sm:text-4xl">
              I care about the whole pipeline.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-mist">
              I studied Software Engineering at Babcock University, and I now work as a Technology
              and Systems Associate at People Growth Africa, building the web applications, APIs and
              internal tools the company runs on.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-mist">
              What keeps me interested is the seam between layers: the interface someone actually
              enjoys using, the API contract behind it, the schema that keeps it honest, and the
              deploy that puts it in front of people.
            </p>

            <dl className="mt-9 grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {facts.map((fact) => (
                <div key={fact.label} className="border-l border-white/10 pl-4">
                  <dt className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-mist/70">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm text-chalk">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="grid gap-4 self-start">
            {principles.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-neon/30 hover:bg-white/[0.04]">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-ink-raise font-mono text-xs text-neon">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-chalk">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-mist">{item.body}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
