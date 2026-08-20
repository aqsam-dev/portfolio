import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import Reveal from './Reveal'

const contacts = [
  {
    label: 'Email',
    value: 'aforaqsam@gmail.com',
    href: 'mailto:aforaqsam@gmail.com?subject=Portfolio%20Inquiry',
    icon: SiGmail,
  },
  {
    label: 'Phone',
    value: '+92-319-0842381',
    href: 'tel:+923190842381',
    icon: FaPhoneAlt,
  },
  {
    label: 'GitHub',
    value: '@aqsam-dev',
    href: 'https://github.com/aqsam-dev',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    value: 'in/aqsam-shahid',
    href: 'https://linkedin.com/in/aqsam-shahid',
    icon: FaLinkedinIn,
  },
]

export default function Footer() {
  const [emailCopied, setEmailCopied] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [topCursor, setTopCursor] = useState({
    x: 0,
    y: 0,
    visible: false,
  })

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText('aforaqsam@gmail.com')

      setEmailCopied(true)

      setTimeout(() => {
        setEmailCopied(false)
      }, 2000)
    } catch (error) {
      console.error('Could not copy email:', error)
    }
  }

  const scrollToTop = () => {
    document.querySelector('#home')?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  const handleTopCursorMove = (event) => {
    setTopCursor({
      x: event.clientX,
      y: event.clientY,
      visible: true,
    })
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 pt-10 pb-4 md:pt-16 md:pb-6 text-center border-t border-light-border dark:border-dark-border"
    >
      {topCursor.visible && (
        <div
          className="
            pointer-events-none fixed z-[999] hidden md:grid
            size-14 place-items-center rounded-full
            -translate-x-1/2 -translate-y-1/2
            bg-accent text-xs font-bold tracking-wider text-white
            shadow-xl shadow-accent/30
          "
          style={{
            left: topCursor.x,
            top: topCursor.y,
          }}
        >
          TOP
        </div>
      )}

      <Reveal
        as="h2"
        title
        className="text-4xl md:text-5xl font-bold text-light-text dark:text-dark-heading"
      >
        Let&apos;s build something.
      </Reveal>

      <Reveal
        delay={1}
        className="mt-5 max-w-xl mx-auto text-sm md:text-base leading-7 text-light-muted dark:text-dark-subtle"
      >
        Open to junior full-stack opportunities and meaningful product
        collaborations.
      </Reveal>

      <Reveal
        delay={2}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left"
      >
        {contacts.map(({ label, value, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            onClick={label === 'Email' ? handleEmailClick : undefined}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
            className="
              group flex items-center gap-4 rounded-xl border
              border-light-border bg-white p-5
              transition-all duration-300 cursor-pointer
              hover:-translate-y-1 hover:border-accent-light
              hover:shadow-xl hover:shadow-accent-light/10
              dark:bg-dark-card dark:border-dark-border
              dark:hover:border-accent-soft
              dark:hover:shadow-accent-soft/10
            "
          >
            <div
              className="
                grid size-11 shrink-0 place-items-center rounded-lg
                bg-accent-light/10 text-accent-light
                transition-transform duration-300 group-hover:scale-110
                dark:bg-accent-soft/10 dark:text-accent-soft
              "
            >
              <Icon className="text-lg" />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-light-muted dark:text-dark-subtle">
                {label}
              </p>

              <p className="mt-1 truncate text-sm font-semibold text-light-text dark:text-dark-heading">
                {value}
              </p>
            </div>
          </a>
        ))}
      </Reveal>

      <p
        aria-live="polite"
        className={`mt-5 text-sm font-semibold text-accent-light dark:text-accent-soft transition-opacity duration-300 ${emailCopied ? 'opacity-100' : 'opacity-0'
          }`}
      >
        Email copied to clipboard.
      </p>

      <Reveal
        as="p"
        delay={2}
        className="mt-9 text-[13px] text-light-muted dark:text-dark-subtle"
      >
        © 2026 Aqsam Shahid. Designed and built with care.
      </Reveal>

      <button
        type="button"
        onClick={scrollToTop}
        onPointerEnter={handleTopCursorMove}
        onPointerMove={handleTopCursorMove}
        onPointerLeave={() =>
          setTopCursor((current) => ({
            ...current,
            visible: false,
          }))
        }
        aria-label="Back to top"
        className={`
          fixed bottom-5 right-5 z-50
          rounded-full border border-accent-light/50
          bg-white/90 px-5 py-3
          text-sm font-bold text-accent-light shadow-lg backdrop-blur
          transition-all duration-300 cursor-none
          hover:-translate-y-1 hover:bg-accent-light hover:text-white
          dark:border-accent-soft/50 dark:bg-dark-card/90
          dark:text-accent-soft dark:hover:bg-accent dark:hover:text-white
          ${showBackToTop
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-5 opacity-0'
          }
        `}
      >
        Back to top
      </button>
    </section>
  )
}