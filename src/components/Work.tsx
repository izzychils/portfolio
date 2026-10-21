import { ArrowUpRight, Lock } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import { extras, projects } from '../data'
import { Reveal } from './Reveal'

export function Work() {
  return (
    <section id="work" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs tracking-[0.22em] text-neon">01 / WORK</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-chalk sm:text-4xl">
                Selected work
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-mist">
              Four products I built end to end. Each card links to a live deployment, so you can
              click through instead of taking my word for it.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 70}>
              <article className="card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">
                <a
                  href={project.live ?? project.code ?? '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="relative block overflow-hidden border-b border-white/8"
                  aria-label={`Open ${project.name}`}
                >
                  <div className="aspect-[16/10] w-full overflow-hidden bg-ink-soft">
                    <img
                      src={project.image}
                      alt={`${project.name} homepage`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.035]"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-70" />
                  <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-ink/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-chalk backdrop-blur">
                    {project.kind}
                  </span>
                </a>

                <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold text-chalk">{project.name}</h3>
                    <div className="flex items-center gap-3 text-mist">
                      {project.code ? (
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.name} source code`}
                          className="transition hover:text-chalk"
                        >
                          <GithubIcon size={16} />
                        </a>
                      ) : null}
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.name} live site`}
                          className="transition hover:text-neon"
                        >
                          <ArrowUpRight size={18} />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-mist">{project.summary}</p>

                  <div className="mt-auto flex flex-wrap items-center gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/8 bg-white/[0.03] px-2 py-1 font-mono text-[10.5px] text-mist"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.note ? (
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-white/8 bg-white/[0.03] px-2 py-1 font-mono text-[10.5px] text-mist">
                        <Lock size={11} />
                        {project.note}
                      </span>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="flex items-center justify-between border-b border-white/8 px-5 py-4 sm:px-6">
              <h3 className="font-display text-base font-semibold text-chalk">Also in the lab</h3>
              <span className="font-mono text-[11px] text-mist">{extras.length} more</span>
            </div>
            <ul className="divide-y divide-white/5">
              {extras.map((extra) => (
                <li key={extra.name}>
                  <a
                    href={extra.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col gap-1 px-5 py-4 transition hover:bg-white/[0.03] sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6"
                  >
                    <div className="min-w-0">
                      <p className="flex items-center gap-2 text-sm font-medium text-chalk">
                        {extra.name}
                        <ArrowUpRight
                          size={14}
                          className="text-mist transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neon"
                        />
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-mist">{extra.line}</p>
                    </div>
                    <span className="shrink-0 font-mono text-[11px] text-mist/80">{extra.stack}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
