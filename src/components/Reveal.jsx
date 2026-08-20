import { useEffect, useRef } from 'react'

/**
 * Wraps children in a div that fades/slides into view the first time it
 * crosses the viewport threshold. Pass `title` for the slightly larger
 * scale-in used on section headings, and `delay` (1 or 2) to stagger groups.
 */
export default function Reveal({ children, as: Tag = 'div', className = '', title = false, delay, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const delayClass = delay === 1 ? 'reveal-delay-1' : delay === 2 ? 'reveal-delay-2' : ''

  return (
    <Tag ref={ref} className={`reveal ${title ? 'reveal-title' : ''} ${delayClass} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
