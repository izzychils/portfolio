import { socials } from '../data'

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="shell flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/12 bg-white/5 font-display text-[11px] font-bold">
            <span className="text-gradient">II</span>
          </span>
          <div>
            <p className="text-sm text-chalk">Israel Iraoya</p>
            <p className="font-mono text-[10.5px] text-mist/70">Full stack engineer, Uyo, Nigeria</p>
          </div>
        </div>

        <div className="flex items-center gap-5 text-[12.5px] text-mist">
          <a href="#work" className="transition hover:text-chalk">
            Work
          </a>
          <a href="#about" className="transition hover:text-chalk">
            About
          </a>
          <a href={`mailto:${socials.email}`} className="transition hover:text-chalk">
            Email
          </a>
          <span className="font-mono text-[10.5px] text-mist/50">2026</span>
        </div>
      </div>
    </footer>
  )
}
