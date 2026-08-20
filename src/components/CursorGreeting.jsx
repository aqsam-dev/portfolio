import { useEffect, useState } from 'react'

export default function CursorGreeting() {
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
    visible: false,
  })

  useEffect(() => {
    const moveCursor = (event) => {
      const target = event.target.closest('[data-cursor-text]')

      if (target) {
        setCursor({
          x: event.clientX,
          y: event.clientY,
          visible: true,
        })
      } else {
        setCursor((current) => ({
          ...current,
          visible: false,
        }))
      }
    }

    window.addEventListener('pointermove', moveCursor)

    return () => {
      window.removeEventListener('pointermove', moveCursor)
    }
  }, [])

  if (!cursor.visible) return null

  return (
    <div
      className="fixed z-[999] pointer-events-none hidden md:grid place-items-center
      -translate-x-1/2 -translate-y-1/2
      size-14 rounded-full bg-accent text-white
      text-xs font-bold tracking-wider shadow-xl shadow-accent/30"
      style={{
        left: cursor.x,
        top: cursor.y,
      }}
    >
      HI!
    </div>
  )
}