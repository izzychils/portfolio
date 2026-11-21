import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../lib/motion'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
  variant?: 'up' | 'fade' | 'left' | 'scale'
  as?: 'div' | 'li' | 'section' | 'ol' | 'ul' | 'span'
}

export function Reveal({
  children,
  delay = 0,
  className = '',
  variant = 'up',
  as = 'div',
}: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>()
  const Tag = as

  return (
    <Tag
      ref={ref as never}
      data-reveal=""
      data-variant={variant}
      data-in={inView ? '' : undefined}
      className={className}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
