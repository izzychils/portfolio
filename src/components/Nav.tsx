import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { socials } from '../data'
import { SectionLink } from '../router'
import type { SectionId } from '../routes'

const links: Array<{ label: string; to: SectionId }> = [
  { label: 'Work', to: 'work' },
  { label: 'About', to: 'about' },
  { label: 'Stack', to: 'stack' },
  { label: 'Contact', to: 'contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    // Browsers restore scroll after mount, so re-check once the page settles.
    const raf = requestAnimationFrame(onScroll)
    const timer = window.setTimeout(onScroll, 250)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-white/10 bg-ink/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="shell flex h-16 items-center justify-between gap-6" aria-label="Main">
        <SectionLink to="top" className="group flex items-center gap-3">
          <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl border border-white/15 bg-ink-raise">
            <span className="absolute inset-0 bg-gradient-to-br from-neon/25 via-violet/15 to-rose/20" />
            <span className="relative font-display text-[13px] font-bold tracking-[0.12em] text-chalk">II</span>
            <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 transition group-hover:ring-neon/40" />
          </span>
          <span className="hidden text-sm font-medium text-chalk sm:block">Israel Iraoya</span>
        </SectionLink>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <SectionLink
              key={link.to}
              to={link.to}
              className="rounded-full px-4 py-2 text-sm text-mist transition hover:bg-white/5 hover:text-chalk"
            >
              {link.label}
            </SectionLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${socials.email}`}
            className="hidden items-center gap-1.5 rounded-full bg-chalk px-4 py-2 text-sm font-medium text-ink transition hover:bg-white sm:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRight size={15} strokeWidth={2.4} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-chalk md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-ink/95 px-6 pb-8 pt-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <SectionLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 font-display text-lg text-chalk"
              >
                {link.label}
              </SectionLink>
            ))}
          </div>
          <a
            href={`mailto:${socials.email}`}
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-chalk px-5 py-2.5 text-sm font-medium text-ink"
          >
            Let&apos;s talk
            <ArrowUpRight size={15} strokeWidth={2.4} />
          </a>
        </div>
      ) : null}
    </header>
  )
}
