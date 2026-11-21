import { useEffect, useState, type CSSProperties } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { socials } from '../data'
import { SectionLink } from '../router'
import type { SectionId } from '../routes'

const links: Array<{ label: string; to: SectionId; index: string }> = [
  { label: 'Work', to: 'work', index: '01' },
  { label: 'About', to: 'about', index: '02' },
  { label: 'Track record', to: 'experience', index: '03' },
  { label: 'Toolkit', to: 'stack', index: '04' },
  { label: 'Contact', to: 'contact', index: '05' },
]

const delay = (index: number) => ({ '--i': index }) as CSSProperties

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

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? 'border-b border-ink/10 bg-paper/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="shell flex h-[68px] items-center justify-between gap-4" aria-label="Main">
        <SectionLink to="top" className="group flex items-baseline gap-1" aria-label="Israel Iraoya, home">
          <span className="display text-[15px] font-semibold tracking-[-0.02em]">israeliraoya</span>
          <span className="text-[13px] font-semibold text-ink/60 transition group-hover:text-ink">*</span>
        </SectionLink>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <SectionLink
              key={link.to}
              to={link.to}
              className="eyebrow link-line text-[10px] text-ink/70 transition hover:text-ink"
            >
              {link.label}
            </SectionLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${socials.email}`}
            className="group hidden h-9 items-center gap-1.5 rounded-full bg-ink px-4 text-[12px] font-medium text-chalk transition hover:bg-ink-raise sm:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRight
              size={14}
              strokeWidth={2.4}
              className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink bg-transparent text-ink transition hover:bg-ink hover:text-chalk lg:hidden"
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </nav>
    </header>

    {/* Kept outside the header: its backdrop-filter would become the containing block. */}
    {open ? (
        <div
          id="mobile-menu"
          data-menu="open"
          className="fixed inset-x-0 bottom-0 top-[68px] z-40 overflow-y-auto bg-ice px-5 pb-10 pt-8 sm:px-8 lg:hidden"
        >
          <p className="eyebrow m-link text-[9.5px] text-ink/45" style={delay(0)}>
            ( MENU )
          </p>
          <ul className="mt-5">
            {links.map((link, index) => (
              <li key={link.to} className="m-link border-b border-ink/15" style={delay(index + 1)}>
                <SectionLink
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between gap-4 py-4"
                >
                  <span className="display text-[2rem] leading-none">{link.label}</span>
                  <span className="eyebrow text-[9px] text-ink/45">{link.index}</span>
                </SectionLink>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${socials.email}`}
            onClick={() => setOpen(false)}
            className="m-link mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-sm font-medium text-chalk"
            style={delay(links.length + 1)}
          >
            {socials.email}
            <ArrowUpRight size={15} strokeWidth={2.4} />
          </a>
          <p className="eyebrow m-link mt-6 text-[9px] text-ink/45" style={delay(links.length + 2)}>
            UYO, NIGERIA · REMOTE FRIENDLY
          </p>
        </div>
      ) : null}
    </>
  )
}
