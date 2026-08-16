function SkillsSection() {
  return (
    <section id="skills" className="px-8 py-24 sm:px-12 lg:px-16">
      <p className="font-mono text-xs uppercase tracking-wider text-accent">
        03 / Skills
      </p>

      <div className="mt-8 grid max-w-5xl gap-x-12 gap-y-10 md:grid-cols-3">
        <div>
          <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-ink">
            Languages
          </h3>

          <p className="mt-3 leading-relaxed text-ink-soft">
            JavaScript (ES6+), HTML5, CSS3, SQL, Dart
          </p>
        </div>

        <div>
          <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-ink">
            Frameworks
          </h3>

          <p className="mt-3 leading-relaxed text-ink-soft">
            React, Node.js, Express.js, Tailwind CSS, Flutter, Socket.io
          </p>
        </div>

        <div>
          <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-ink">
            Tools &amp; Platforms
          </h3>

          <p className="mt-3 leading-relaxed text-ink-soft">
            PostgreSQL, MongoDB, Git, GitHub, Postman, Vercel, Cloudinary, Docker fundamentals
          </p>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;