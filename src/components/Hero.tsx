import type { CSSProperties } from 'react'
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { socials } from '../data'
import { SectionLink } from '../router'
import { Reveal } from './Reveal'
import { useMagnetic, useTilt } from '../lib/motion'

const tones: Record<string, string> = {
  plain: 'text-chalk/45',
  key: 'text-fog',
  value: 'text-ice-deep',
  accent: 'text-ice',
}

const code: Array<Array<{ text: string; tone?: keyof typeof tones }>> = [
  [{ text: 'const ' }, { text: 'engineer', tone: 'accent' }, { text: ' = {' }],
  [{ text: '  name', tone: 'key' }, { text: ': ' }, { text: '"Israel Iraoya"', tone: 'value' }, { text: ',' }],
  [{ text: '  base', tone: 'key' }, { text: ': ' }, { text: '"Uyo, Nigeria"', tone: 'value' }, { text: ',' }],
  [
    { text: '  stack', tone: 'key' },
    { text: ': [' },
    { text: '"React"', tone: 'value' },
    { text: ', ' },
    { text: '"TypeScript"', tone: 'value' },
    { text: ', ' },
    { text: '"Node"', tone: 'value' },
    { text: ', ' },
    { text: '"Python"', tone: 'value' },
    { text: '],' },
  ],
  [
    { text: '  shipping', tone: 'key' },
    { text: ': ' },
    { text: '"systems @ People Growth Africa"', tone: 'value' },
    { text: ',' },
  ],
  [
    { text: '  openTo', tone: 'key' },
    { text: ': ' },
    { text: '"full stack roles"', tone: 'value' },
    { text: ',' },
  ],
  [{ text: '}' }],
]

const lineDelay = (ms: number) => ({ '--line-delay': `${ms}ms` }) as CSSProperties

export function Hero() {
  const tiltRef = useTilt<HTMLDivElement>(7)
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.22, 9)

  return (
    <section id="top" className="relative overflow-hidden bg-ice pt-28 pb-14 sm:pt-32 sm:pb-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-24 -top-24 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.85),transparent_68%)] sm:h-[38rem] sm:w-[38rem]" />
        <div className="absolute -right-10 top-24 hidden h-[30rem] w-[30rem] rounded-full border border-ink/10 lg:block" />
        <div className="absolute right-16 top-40 hidden h-[22rem] w-[22rem] rounded-full border border-ink/[0.07] lg:block" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-paper/0 to-transparent" />
      </div>

      <div className="shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="min-w-0">
            <Reveal variant="fade">
              <p className="eyebrow flex items-start gap-2.5 text-[9.5px] leading-[1.7] text-ink/65">
                <span className="relative mt-[5px] flex h-1.5 w-1.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                <span>
                  Full stack engineer
                  <span className="hidden sm:inline"> — React · TypeScript · Node · SQL</span>
                </span>
              </p>
            </Reveal>

            <h1 className="lines-boot display mt-5 text-[clamp(2.45rem,9.6vw,6.2rem)]">
              <span className="line" style={lineDelay(80)}>
                <span>Interfaces</span>
              </span>
              <span className="line" style={lineDelay(170)}>
                <span>that actually</span>
              </span>
              <span className="relative inline-block pr-[0.04em]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 120"
                  preserveAspectRatio="none"
                  fill="none"
                  className="pointer-events-none absolute left-[-11%] top-[-17%] h-[134%] w-[122%] text-ink"
                >
                  <path
                    className="draw"
                    pathLength={1}
                    vectorEffect="non-scaling-stroke"
                    d="M161 10C96 3 33 19 21 47c-12 29 49 58 131 62 76 4 136-18 137-49 1-31-63-55-137-49-15 1-29 3-42 7"
                    stroke="currentColor"
                    strokeWidth={2.4}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="line" style={lineDelay(260)}>
                  <span>ship.</span>
                </span>
              </span>
            </h1>

            <Reveal delay={120}>
              <p className="mt-7 max-w-md text-[15px] leading-relaxed text-ink/70 sm:text-base">
                I build React and TypeScript interfaces, Node and Python APIs, and the SQL
                underneath them. Right now I&apos;m building the systems and internal tools that
                keep People Growth Africa running.
              </p>
            </Reveal>

            <Reveal delay={200} className="mt-8 flex flex-wrap items-center gap-3">
              <SectionLink
                to="work"
                ref={ctaRef}
                data-magnetic=""
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-[13.5px] font-medium text-chalk transition-colors hover:bg-ink-raise"
              >
                See selected work
                <ArrowUpRight
                  size={16}
                  strokeWidth={2.4}
                  className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </SectionLink>
              <a
                href={`mailto:${socials.email}`}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-ink px-6 text-[13.5px] font-medium text-ink transition hover:bg-ink hover:text-chalk"
              >
                Email me
              </a>
            </Reveal>

            <Reveal delay={280} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <span className="eyebrow inline-flex items-center gap-2 text-[9.5px] text-ink/55">
                <MapPin size={13} />
                Uyo, Nigeria
              </span>
              <span className="hidden h-4 w-px bg-ink/20 sm:block" />
              <a
                href={socials.github}
                className="eyebrow link-line inline-flex items-center gap-2 text-[9.5px] text-ink/55 transition hover:text-ink"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon size={13} />
                izzychils
              </a>
              <span className="hidden h-4 w-px bg-ink/20 sm:block" />
              <a
                href={socials.linkedin}
                className="eyebrow link-line inline-flex items-center gap-2 text-[9.5px] text-ink/55 transition hover:text-ink"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinIcon size={13} />
                LinkedIn
              </a>
            </Reveal>
          </div>

          <Reveal variant="scale" delay={240} className="min-w-0">
            <div className="animate-bob relative">
              <div
                ref={tiltRef}
                data-tilt=""
                className="relative overflow-hidden rounded-[20px] border border-ink bg-ink text-chalk shadow-[10px_10px_0_0_rgba(9,10,10,0.1)]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(52% 52% at var(--glow-x, 50%) var(--glow-y, 50%), rgba(166,216,243,0.22), transparent 72%)',
                  }}
                />
                <div className="relative flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <span className="h-2 w-2 rounded-full bg-rose-400/80" />
                  <span className="h-2 w-2 rounded-full bg-amber-300/70" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
                  <span className="ml-2 font-mono text-[10.5px] text-fog">israel.ts</span>
                  <span className="ml-auto rounded border border-white/15 px-1.5 py-0.5 font-mono text-[9px] text-fog">
                    TS
                  </span>
                </div>
                <pre className="relative overflow-x-auto px-4 py-5 font-mono text-[11px] leading-[1.85] sm:px-5 sm:text-[12.5px]">
                  <code>
                    {code.map((tokens, index) => (
                      <div key={index} className="whitespace-pre-wrap break-words sm:whitespace-pre">
                        <span className="mr-3 inline-block w-3 select-none text-right text-white/20">
                          {index + 1}
                        </span>
                        {tokens.map((token, tokenIndex) => (
                          <span key={tokenIndex} className={token.tone ? tones[token.tone] : undefined}>
                            {token.text}
                          </span>
                        ))}
                      </div>
                    ))}
                    <div>
                      <span className="mr-3 inline-block w-3 select-none text-right text-white/20">
                        {code.length + 1}
                      </span>
                      <span className="inline-block h-3.5 w-[7px] translate-y-0.5 animate-pulse bg-ice" />
                    </div>
                  </code>
                </pre>
                <div className="relative flex items-center justify-between border-t border-white/10 px-4 py-2.5 font-mono text-[9.5px] text-fog sm:px-5">
                  <span>main</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    deploy ready
                  </span>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.18em] text-ink/45">
                <span>Fig. 01 — what I do all day</span>
                <span className="hidden sm:inline">Uyo · NG</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={360} variant="fade" className="mt-14 flex items-center justify-between gap-4">
          <span className="eyebrow flex items-center gap-2 text-[9px] text-ink/40">
            <ArrowDown size={12} className="animate-bounce" />
            Scroll
          </span>
          <span className="eyebrow text-[9px] text-ink/40">01 / 05</span>
        </Reveal>
      </div>
    </section>
  )
}
