import Reveal from './Reveal'

const skillGroups = [
  { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML/CSS'] },
  { category: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS', 'Flutter'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT/OAuth', 'Socket.io'] },
  { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Neon', 'Redis'] },
  { category: 'Cloud & DevOps', items: ['Vercel', 'Netlify', 'Docker', 'Git', 'CI/CD','Cloudinary'] },
  // { category: 'AI & Automation', items: ['EasyOCR', 'LLM Integration', 'Cloudinary', 'n8n'] },
]

export default function Skills() {
  return (
    <section id="skills" className="max-w-[1400px] mx-auto px-10 py-14 md:py-20 border-t border-light-border dark:border-dark-border">
      <Reveal as="h2" title className="text-4xl md:text-5xl font-bold leading-[1.3] mb-5 md:mb-10 tracking-[-0.5px] text-center text-light-text dark:text-dark-heading">
        What I used.
      </Reveal>

      <Reveal delay={1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-lg border p-8 transition-all duration-300 bg-light-card border-light-border hover:border-accent-soft hover:shadow-[0_16px_36px_rgba(109,40,217,0.10)] dark:bg-dark-card dark:border-dark-border dark:hover:border-accent-soft/60 dark:hover:shadow-[0_20px_44px_rgba(2,4,12,0.36)]"
          >
            <div className="text-[13px] font-bold uppercase tracking-[1px] mb-5 text-accent-light dark:text-accent-soft">
              {group.category}
            </div>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="py-2 px-3.5 rounded text-[13px] font-medium transition-colors bg-light-chip text-light-subtle hover:bg-light-chipHover hover:text-accent-light dark:bg-dark-chip dark:text-dark-text dark:hover:bg-dark-chipHover dark:hover:text-accent-softer"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
