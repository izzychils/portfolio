import type { CSSProperties } from 'react'
import { ArrowUpRight, Lock } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import { extras, projects } from '../data'
import { Reveal } from './Reveal'

const pad = (value: number) => String(value).padStart(2, '0')

export function Work() {
  return (
    <section id="work" className="relative scroll-mt-24 bg-paper py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <p className="eyebrow flex items-center gap-2 text-[9.5px] text-ink/55">
            <span className="h-1.5 w-1.5 rounded-full bg-ink" />
            ( 01 ) Selected work
          </p>
        </Reveal>

        <div className="mt-5 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <Reveal>
            <h2 className="display text-[clamp(2.6rem,7.4vw,5rem)]">
              <span className="line">
                <span>Work that</span>
              </span>
              <span className="line" style={{ '--line-delay': '90ms' } as CSSProperties}>
                <span>ships.</span>
              </span>
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="max-w-sm text-sm leading-relaxed text-mist lg:ml-auto">
              Four products I built end to end. Each card links to a live deployment, so you can
              click through instead of taking my word for it.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 sm:gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 60}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-ink bg-paper transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:shadow-[8px_8px_0_0_var(--color-ink)]">
                <a
                  href={project.live ?? project.code ?? '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="relative block overflow-hidden bg-ink-soft"
                  aria-label={`Open ${project.name}`}
                >
                  <div className="aspect-[16/10] w-full">
                    <img
                      src={project.image}
                      alt={`${project.name} homepage`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-1.5 py-0.5 font-mono text-[10px] tracking-[0.2em] text-chalk backdrop-blur-sm">
                    {pad(index + 1)}
                  </span>
                  <span className="absolute right-3 top-3 rounded-full bg-ice px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-ink">
                    {project.kind}
                  </span>
                </a>

                <div className="flex flex-1 flex-col gap-4 border-t border-ink p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="display text-[1.55rem] leading-none">{project.name}</h3>
                    <div className="flex items-center gap-3 text-ink/45">
                      {project.code ? (
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.name} source code`}
                          className="transition hover:-translate-y-0.5 hover:text-ink"
                        >
                          <GithubIcon size={15} />
                        </a>
                      ) : null}
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.name} live site`}
                          className="transition hover:-translate-y-0.5 hover:text-ink"
                        >
                          <ArrowUpRight size={17} />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <p className="text-[13.5px] leading-relaxed text-mist">{project.summary}</p>

                  <div className="mt-auto flex flex-wrap items-center gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-ink/20 px-2.5 py-1 font-mono text-[10px] text-ink/65"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.note ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/20 px-2.5 py-1 font-mono text-[10px] text-ink/65">
                        <Lock size={10} />
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
          <div className="flex items-end justify-between gap-4 border-b border-ink pb-3">
            <h3 className="display text-[1.6rem] leading-none">Also in the lab</h3>
            <span className="eyebrow text-[9px] text-ink/45">{extras.length} builds</span>
          </div>
          <ul>
            {extras.map((extra, index) => (
              <li key={extra.name} className="border-b border-ink/15">
                <a
                  href={extra.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid gap-2 rounded-lg px-2 py-4 transition-colors hover:bg-ice sm:-mx-2 sm:grid-cols-[2rem_1fr_auto_1.25rem] sm:items-center sm:gap-5 sm:px-2"
                >
                  <span className="font-mono text-[10px] text-ink/40">{pad(index + 1)}</span>
                  <div className="min-w-0">
                    <p className="display text-[1.1rem] leading-tight">{extra.name}</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-mist">{extra.line}</p>
                  </div>
                  <span className="font-mono text-[10px] text-ink/45">{extra.stack}</span>
                  <ArrowUpRight
                    size={15}
                    className="text-ink/45 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
