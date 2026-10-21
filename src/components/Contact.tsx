import { ArrowUpRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { socials } from '../data'
import { Reveal } from './Reveal'

const channels = [
  { label: 'Email', value: socials.email, href: `mailto:${socials.email}`, icon: Mail },
  { label: 'GitHub', value: 'github.com/izzychils', href: socials.github, icon: GithubIcon },
  { label: 'LinkedIn', value: 'in/israel-iraoya', href: socials.linkedin, icon: LinkedinIcon },
]

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 border-t border-white/5 py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-10 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_65%)] blur-2xl" />
      </div>

      <div className="shell relative">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] px-6 py-12 text-center sm:px-12 sm:py-16">
            <p className="font-mono text-xs tracking-[0.22em] text-neon">05 / CONTACT</p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-chalk sm:text-[2.6rem] sm:leading-[1.1]">
              Got something worth <span className="text-gradient">building</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-mist">
              I am open to full stack engineering roles, remote or in Nigeria. Send me the problem
              you are trying to solve and I will tell you how I would approach it.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${socials.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon to-violet px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-110"
              >
                <Mail size={16} strokeWidth={2.2} />
                {socials.email}
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-medium text-chalk transition hover:border-white/25 hover:bg-white/10"
              >
                Connect on LinkedIn
                <ArrowUpRight size={16} strokeWidth={2.4} />
              </a>
            </div>

            <div className="mx-auto mt-12 grid max-w-2xl gap-3 sm:grid-cols-3">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-white/8 bg-ink-soft/60 px-4 py-3 text-left transition hover:border-neon/30 hover:bg-ink-raise/70"
                >
                  <channel.icon size={16} className="shrink-0 text-mist transition group-hover:text-neon" />
                  <span className="min-w-0">
                    <span className="block font-mono text-[9.5px] uppercase tracking-[0.16em] text-mist/60">
                      {channel.label}
                    </span>
                    <span className="block truncate text-[12.5px] text-chalk">{channel.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
