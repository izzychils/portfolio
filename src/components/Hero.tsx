import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { socials } from '../data'
import { SectionLink } from '../router'

const codeLines: Array<Array<{ text: string; tone?: 'key' | 'value' | 'muted' | 'accent' }>> = [
  [{ text: 'const ', tone: 'muted' }, { text: 'engineer', tone: 'accent' }, { text: ' = {' }],
  [
    { text: '  name' },
    { text: ': ' },
    { text: '"Israel Iraoya"', tone: 'value' },
    { text: ',' },
  ],
  [{ text: '  base' }, { text: ': ' }, { text: '"Uyo, Nigeria"', tone: 'value' }, { text: ',' }],
  [
    { text: '  stack' },
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
    { text: '  shipping' },
    { text: ': ' },
    { text: '"systems @ People Growth Africa"', tone: 'value' },
    { text: ',' },
  ],
  [{ text: '  openTo' }, { text: ': ' }, { text: '"full stack roles"', tone: 'value' }, { text: ',' }],
  [{ text: '}' }],
]

const toneClass: Record<string, string> = {
  key: 'text-neon',
  value: 'text-emerald-300',
  muted: 'text-violet-300',
  accent: 'text-neon',
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* ambient light */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-lines" />
        <div className="animate-drift absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.16),transparent_62%)] blur-2xl" />
        <div className="absolute -right-32 top-24 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.16),transparent_65%)] blur-2xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="shell relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-mist">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Open to full stack roles
            </div>

            <h1 className="mt-6 font-display text-[2.65rem] leading-[1.03] font-semibold tracking-tight text-chalk sm:text-6xl lg:text-[4.1rem]">
              Full stack engineer
              <br />
              who <span className="text-gradient">ships</span>.
            </h1>

            <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-mist sm:text-lg">
              I build React and TypeScript interfaces, Node and Python APIs, and the SQL underneath
              them. Right now I&apos;m building the systems and internal tools that keep People
              Growth Africa running.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <SectionLink
                to="work"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon to-violet px-5 py-3 text-sm font-semibold text-ink transition hover:brightness-110"
              >
                See selected work
                <ArrowRight size={16} strokeWidth={2.6} className="transition group-hover:translate-x-0.5" />
              </SectionLink>
              <a
                href={`mailto:${socials.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-medium text-chalk transition hover:border-white/25 hover:bg-white/10"
              >
                Email me
                <ArrowUpRight size={16} strokeWidth={2.4} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-mist">
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} className="text-neon" />
                Uyo, Nigeria
              </span>
              <span className="hidden h-4 w-px bg-white/10 sm:block" />
              <a
                href={socials.github}
                className="inline-flex items-center gap-2 transition hover:text-chalk"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon size={14} />
                izzychils
              </a>
              <span className="hidden h-4 w-px bg-white/10 sm:block" />
              <a
                href={socials.linkedin}
                className="inline-flex items-center gap-2 transition hover:text-chalk"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinIcon size={14} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* code panel */}
          <div className="relative min-w-0">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2rem] bg-[conic-gradient(from_120deg,rgba(34,211,238,0.18),rgba(167,139,250,0.16),rgba(255,45,135,0.14),rgba(34,211,238,0.18))] opacity-60 blur-2xl"
            />
            <div className="animate-float relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0d15]/90 shadow-[0_30px_80px_-40px_rgba(34,211,238,0.5)] backdrop-blur">
              <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-rose/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                <span className="ml-2 font-mono text-[11px] text-mist">israel.ts</span>
                <span className="ml-auto rounded border border-white/10 px-1.5 py-0.5 font-mono text-[10px] text-mist">
                  TS
                </span>
              </div>
              <pre className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-7 text-slate-300 sm:text-[13px]">
                <code>
                  {codeLines.map((line, index) => (
                    <div key={index} className="whitespace-pre">
                      <span className="mr-4 inline-block w-3 select-none text-right text-white/20">
                        {index + 1}
                      </span>
                      {line.map((token, tokenIndex) => (
                        <span key={tokenIndex} className={token.tone ? toneClass[token.tone] : undefined}>
                          {token.text}
                        </span>
                      ))}
                    </div>
                  ))}
                  <div className="whitespace-pre">
                    <span className="mr-4 inline-block w-3 select-none text-right text-white/20">
                      {codeLines.length + 1}
                    </span>
                    <span className="inline-block h-4 w-2 animate-blink translate-y-0.5 bg-neon/80" />
                  </div>
                </code>
              </pre>
              <div className="flex items-center justify-between border-t border-white/5 px-4 py-2.5 font-mono text-[10px] text-mist">
                <span>main</span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  deploy ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
