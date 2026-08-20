import { useState } from 'react'
import Reveal from './Reveal'

export default function Hero() {
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
    text: '',
    visible: false,
  })

  const handleCursorMove = (event, text) => {
    setCursor({
      x: event.clientX,
      y: event.clientY,
      text,
      visible: true,
    })
  }

  const hideCursor = () => {
    setCursor((current) => ({
      ...current,
      visible: false,
    }))
  }

  const scrollToSection = (sectionId) => {
    document.querySelector(sectionId)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <section
      id="home"
      className="hero-grid relative isolate max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 py-24 md:py-36 min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <span
        className="aurora aurora-one animate-aurora-drift"
        aria-hidden="true"
      />

      <span
        className="aurora aurora-two animate-aurora-drift-slow"
        aria-hidden="true"
      />

      {cursor.visible && (
        <div
          className="
            pointer-events-none fixed z-[999] hidden md:grid
            size-14 place-items-center rounded-full
            -translate-x-1/2 -translate-y-1/2
            bg-accent text-xs font-bold tracking-wider text-white
            shadow-xl shadow-accent/30
          "
          style={{
            left: cursor.x,
            top: cursor.y,
          }}
        >
          {cursor.text}
        </div>
      )}

      <Reveal className="inline-flex items-center gap-2.5 py-2 px-3.5 rounded-full border w-fit mb-6 text-[11px] font-semibold tracking-[0.06em] uppercase bg-light-chip border-accent-soft/60 text-accent-light dark:bg-accent/10 dark:border-accent-soft/40 dark:text-accent-softer">
        <span className="w-[7px] h-[7px] rounded-full bg-accent-light dark:bg-accent-soft shadow-[0_0_10px_rgba(109,40,217,.55)] dark:shadow-[0_0_12px_rgba(196,181,253,.7)]" />
        Open to opportunities
      </Reveal>

      <Reveal
        as="p"
        delay={1}
        className="text-base sm:text-xl md:text-2xl font-normal tracking-[0.08em] uppercase mb-4 font-mono text-accent-light dark:text-accent-soft"
      >
        Hi, my name is Aqsam Shahid.
      </Reveal>

      <Reveal
        as="h1"
        delay={1}
        className="text-5xl sm:text-7xl md:text-[92px] font-bold leading-[1.12] mb-8 md:mb-10 tracking-tightest2 text-light-text dark:text-dark-heading"
      >
        Full stack engineer
        <br />
        building AI automation systems.
      </Reveal>

      <Reveal
        as="p"
        delay={2}
        className="text-base sm:text-lg md:text-2xl max-w-3xl leading-[1.7] mb-10 md:mb-14 text-light-muted dark:text-dark-muted"
      >
        Fresh Computer Science graduate who builds and ships reliable web
        products end to end—React on the front, Node.js and
        PostgreSQL underneath—and is now wiring that foundation into AI-driven
        automation, from OCR pipelines to LLM-powered workflows.
      </Reveal>

      <Reveal delay={2} className="flex flex-col sm:flex-row gap-4">
        <a
          href="#work"
          onClick={(event) => {
            event.preventDefault()
            scrollToSection('#work')
          }}
          onPointerEnter={(event) => handleCursorMove(event, 'VIEW')}
          onPointerMove={(event) => handleCursorMove(event, 'VIEW')}
          onPointerLeave={hideCursor}
          className="cursor-none py-4 px-9 rounded-md text-center text-base font-semibold border transition-transform hover:-translate-y-0.5 hover:shadow-xl bg-accent-light border-accent-light text-white dark:bg-accent dark:border-accent"
        >
          View my work
        </a>

        <a
          href="#contact"
          onClick={(event) => {
            event.preventDefault()
            scrollToSection('#contact')
          }}
          onPointerEnter={(event) => handleCursorMove(event, 'SAY HI!')}
          onPointerMove={(event) => handleCursorMove(event, 'SAY HI!')}
          onPointerLeave={hideCursor}
          className="cursor-none py-4 px-9 rounded-md text-center text-base font-semibold border transition-transform hover:-translate-y-0.5 hover:shadow-xl bg-transparent border-accent-light text-accent-light dark:border-accent-soft dark:text-accent-soft"
        >
          Get in touch
        </a>
      </Reveal>

      <Reveal
        delay={2}
        as="div"
        className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-12 md:mt-14 text-xs font-mono text-light-subtle dark:text-dark-subtle"
      >
        <span className="before:content-['↗'] before:text-accent-light dark:before:text-accent-soft before:mr-[7px]">
          React / Node.js / PostgreSQL
        </span>

        <span className="before:content-['↗'] before:text-accent-light dark:before:text-accent-soft before:mr-[7px]">
          Based in Pakistan
        </span>
      </Reveal>
    </section>
  )
}