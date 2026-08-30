import Reveal from './Reveal'

const projects = [
  {
    title: 'MedSpot',
    subtitle: 'Healthcare Platform — Real-time Prescription Management & Multi-Portal System',
    year: '2026',
    description:
      'Full-stack healthcare ecosystem connecting patients with nearby pharmacies for real-time medicine availability, OCR-assisted prescription handling, and reservations — spanning a patient mobile app, pharmacy web portal, admin dashboard, and POS system. Led a team of 3 as team lead, building an end-to-end academic product with production-style architecture.',
    highlights: [
      'Designed and tested 30+ REST API endpoints with JWT authentication, role-based access control, and Google OAuth 2.0 for secure mobile login',
      'Engineered real-time reservation updates using Socket.io, with time-bound, fair-use reservation flows',
      'Built a dedicated OCR microservice (Python/FastAPI + EasyOCR) to auto-extract medicine names and dosage from prescription images',
      'Integrated Cloudinary for prescription image storage and Google Maps API for live pharmacy directions',
      'Developed a Flutter companion app for patients, plus separate React.js web portals for pharmacy staff and platform admins',
    ],
    tags: [
      'React.js',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Socket.io',
      'EasyOCR',
      'Flutter',
      'FastAPI',
      'Google OAuth',
      'Cloudinary',
      'Google Maps API',
    ],
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
    <section id="work" className="scroll-mt-24 max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 pt-10 pb-4 md:pt-16 md:pb-6 border-t border-light-border dark:border-dark-border">
      <Reveal as="h2" title className="text-4xl md:text-5xl font-bold leading-[1.3] mb-8 md:mb-10 tracking-[-0.5px] text-center text-light-text dark:text-dark-heading">
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