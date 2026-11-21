type MarqueeProps = {
  items: string[]
  /** Seconds for one full pass. */
  duration?: number
}

export function Marquee({ items, duration = 38 }: MarqueeProps) {
  return (
    <div
      className="marquee relative overflow-hidden border-y border-ink bg-ink py-3 text-ice sm:py-4"
      aria-hidden="true"
    >
      <div className="marquee-track" style={{ animationDuration: `${duration}s` }}>
        {[0, 1].map((pass) => (
          <div key={pass} className="flex items-center">
            {items.map((item) => (
              <span
                key={`${pass}-${item}`}
                className="flex items-center gap-6 whitespace-nowrap px-6 text-[clamp(0.95rem,2.1vw,1.6rem)] font-medium tracking-[-0.01em] sm:gap-8 sm:px-8"
              >
                {item}
                <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0" fill="currentColor">
                  <path d="M12 0l2.9 9.1L24 12l-9.1 2.9L12 24l-2.9-9.1L0 12l9.1-2.9z" />
                </svg>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
