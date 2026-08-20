import Reveal from './Reveal'

const items = [
  {
    date: 'May 2025 — June 2025',
    title: 'Web Developer Intern',
    org: 'Devingdom Technologies (SMC-PVT) LTD',
    location: 'Rawalpindi, Pakistan',
    body: 'Built responsive UI components with React and Tailwind CSS. Collaborated with senior engineers on real-world development workflows, code reviews, and debugging production issues. Gained hands-on experience with Git version control and team-based development.',
  },
  {
    date: 'Nov 2022 — Aug 2026',
    title: 'Bachelor of Science, Computer Science',
    org: 'University of the Punjab',
    location: 'Lahore, Pakistan',
    body: 'Completed comprehensive CS curriculum with focus on full-stack development. Shipped multiple production applications, maintained 3.3 CGPA. Specialized coursework in databases, algorithms, and software enginnering.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 pt-10 pb-4 md:pt-16 md:pb-6 border-t border-light-border dark:border-dark-border">
      <Reveal as="h2" title className="text-4xl md:text-5xl font-bold leading-[1.3] mb-5 md:mb-10 tracking-[-0.5px] text-center text-light-text dark:text-dark-heading">
        Experience
      </Reveal>

      {items.map((item, i) => (
        <Reveal
          key={item.title}
          delay={1}
          className={`grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-10 pb-10 mb-10 ${
            i !== items.length - 1 ? 'border-b border-light-border dark:border-dark-border' : ''
          }`}
        >
          <div className="text-[13px] font-semibold text-accent-light dark:text-dark-subtle">{item.date}</div>
          <div>
            <h3 className="text-lg font-bold mb-2 text-light-text dark:text-dark-heading">{item.title}</h3>
            <p className="text-[15px] leading-[1.8] text-light-muted dark:text-dark-muted">
              <strong className="font-bold text-light-subtle dark:text-dark-text">{item.org}</strong> — {item.location}
              <br />
              <br />
              {item.body}
            </p>
          </div>
        </Reveal>
      ))}
    </section>
  )
}
