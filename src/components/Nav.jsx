const links = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav({ theme, toggleTheme }) {
  const handleClick = (event, href) => {
    event.preventDefault()

    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <nav className="sticky top-0 z-[100] border-b border-light-border bg-light-bg/90 px-5 py-5 backdrop-blur-md transition-colors dark:border-dark-border dark:bg-dark-bg/[0.86] sm:px-8 md:px-10">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <a
          href="#home"
          onClick={(event) => handleClick(event, '#home')}
          aria-label="Aqsam Shahid — Home"
          className="inline-flex items-center transition-opacity hover:opacity-75"
        >
          {/* Dark logo: visible in light theme */}
          <img
            src="/brand/aqsam-logo-dark.png"
            alt="Aqsam"
            className="h-7 w-auto dark:hidden sm:h-8"
          />

          {/* White logo: visible in dark theme */}
          <img
            src="/brand/aqsam-logo-light.png"
            alt="Aqsam"
            className="hidden h-7 w-auto dark:block sm:h-8"
          />
        </a>

        <ul className="hidden list-none gap-10 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(event) => handleClick(event, link.href)}
                className="relative text-sm font-medium text-light-subtle transition-opacity after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-accent-light after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full dark:text-dark-muted dark:after:bg-accent-soft"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="flex size-10 items-center justify-center rounded-md border border-accent-soft text-accent-light transition hover:opacity-70 dark:border-accent-soft/50 dark:text-accent-soft"
        >
          <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'} />
        </button>
      </div>
    </nav>
  )
}