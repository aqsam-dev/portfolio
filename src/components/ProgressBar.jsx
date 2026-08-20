import { useEffect, useState } from 'react'

export default function ProgressBar() {
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setPercent(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 h-[3px] z-[200] bg-gradient-to-r from-accent to-accent-soft"
      style={{ width: `${percent}%` }}
    />
  )
}
