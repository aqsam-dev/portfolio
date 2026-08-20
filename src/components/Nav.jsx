const links = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav({ theme, toggleTheme }) {
  const handleClick = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="sticky top-0 z-[100] backdrop-blur-md px-10 py-5 border-b bg-light-bg/90 border-light-border dark:bg-dark-bg/[0.86] dark:border-dark-border transition-colors">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <div className="text-base font-bold tracking-[2px] text-accent-light dark:text-accent-soft">AS</div>
        <ul className="hidden md:flex gap-10 list-none">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="relative text-sm font-medium text-light-subtle dark:text-dark-muted transition-opacity after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-accent-light dark:after:bg-accent-soft after:transition-[width] after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="w-10 h-10 rounded-md border flex items-center justify-center text-accent-light dark:text-accent-soft border-accent-soft dark:border-accent-soft/50 hover:opacity-70 transition"
        >
          <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'} />
        </button>
      </div>
    </nav>
  )
}
