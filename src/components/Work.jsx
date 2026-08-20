import Reveal from './Reveal'

const projects = [
  {
    title: 'MedSpot',
    subtitle: 'Healthcare Platform — Real-time Prescription Management',
    year: '2026',
    description:
      'Full-stack healthcare platform connecting patients with nearby pharmacies for medicine availability, prescription handling, and reservations. Built as an end-to-end academic product with an OCR-assisted prescription workflow.',
    highlights: [
      'Built 20+ REST endpoints with JWT authentication and role-based access control',
      'Engineered real-time reservation updates using Socket.io and time-bound reservation flows',
      'Developed Flutter companion app for patient-side features and searches',
      'Integrated EasyOCR pipeline for automated prescription image extraction',
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Socket.io', 'EasyOCR', 'Flutter'],
    codeUrl: 'https://github.com/aqsam-dev/medspot_platform',
  },
]

function ProjectCard({ project }) {
  const handleMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--spot-x', `${e.clientX - bounds.left}px`)
    e.currentTarget.style.setProperty('--spot-y', `${e.clientY - bounds.top}px`)
  }

  return (
    <div
      onPointerMove={handleMove}
      className="spotlight-card rounded-lg border p-10 mb-7 transition-all duration-300 bg-light-card border-light-border hover:border-accent-soft hover:shadow-[0_16px_36px_rgba(109,40,217,0.10)] dark:bg-dark-card dark:border-dark-border dark:hover:border-accent-soft/60 dark:hover:shadow-[0_20px_44px_rgba(2,4,12,0.36)]"
    >
      <div className="flex justify-between items-start flex-wrap gap-3 mb-5">
        <div>
          <div className="text-2xl font-bold mb-2 text-light-text dark:text-dark-heading">{project.title}</div>
          <p className="text-sm text-light-muted dark:text-dark-subtle">{project.subtitle}</p>
        </div>
        <div className="text-[13px] font-semibold text-accent-light dark:text-dark-subtle">{project.year}</div>
      </div>

      <p className="text-base leading-[1.8] mb-6 text-light-muted dark:text-dark-muted">{project.description}</p>

      <ul className="list-none mb-6">
        {project.highlights.map((point) => (
          <li
            key={point}
            className="text-[15px] mb-3 pl-5 relative text-light-muted dark:text-dark-muted before:content-['→'] before:absolute before:left-0 before:font-bold before:text-accent-light dark:before:text-accent-soft"
          >
            {point}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="py-1.5 px-3 rounded text-xs font-medium bg-light-chip text-accent-light dark:bg-accent/[0.13] dark:text-accent-softer"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-6">
        <a
          href={project.codeUrl}
          className="text-sm font-semibold transition-opacity hover:opacity-60 text-accent-light dark:text-accent-soft"
        >
          View code →
        </a>
      </div>
    </div>
  )
}

export default function Work() {
  return (
    <section id="work" className="max-w-[1400px] mx-auto px-10 py-28 border-t border-light-border dark:border-dark-border">
      <Reveal as="h2" title className="text-4xl md:text-5xl font-bold leading-[1.3] mb-14 tracking-[-0.5px] text-center text-light-text dark:text-dark-heading">
        What I build.
      </Reveal>

      {projects.map((project) => (
        <Reveal key={project.title} delay={1}>
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </section>
  )
}
