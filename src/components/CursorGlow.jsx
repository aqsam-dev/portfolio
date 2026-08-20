import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const move = (e) => {
      el.style.left = `${e.clientX}px`
      el.style.top = `${e.clientY}px`
    }
    const leave = () => (el.style.opacity = '0')
    const enter = () => (el.style.opacity = '1')

    window.addEventListener('pointermove', move)
    window.addEventListener('pointerleave', leave)
    window.addEventListener('pointerenter', enter)
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerleave', leave)
      window.removeEventListener('pointerenter', enter)
    }
  }, [])

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />
}
