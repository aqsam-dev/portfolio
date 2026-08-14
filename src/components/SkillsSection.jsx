function SkillsSection() {
  return (
    <section id="skills" className="px-8 py-24 sm:px-12 lg:px-16">
      <p className="font-mono text-xs uppercase tracking-wider text-accent">
        03 / Skills
      </p>

      <div className="mt-8 grid max-w-3xl gap-x-14 gap-y-9 sm:grid-cols-2">
        <div>
          <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-ink">
            Frontend
          </h3>
          <p className="mt-3 leading-relaxed text-ink-soft">
            React, JavaScript, Tailwind CSS, HTML, CSS
          </p>
        </div>

        <div>
          <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-ink">
            Backend
          </h3>
          <p className="mt-3 leading-relaxed text-ink-soft">
            Node.js, Express.js, REST APIs, JWT Authentication
          </p>
        </div>

        <div>
          <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-ink">
            Database
          </h3>
          <p className="mt-3 leading-relaxed text-ink-soft">
            PostgreSQL, MongoDB
          </p>
        </div>

        <div>
          <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-ink">
            Tools
          </h3>
          <p className="mt-3 leading-relaxed text-ink-soft">
            Git, GitHub, Vercel, Postman, Docker fundamentals
          </p>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;