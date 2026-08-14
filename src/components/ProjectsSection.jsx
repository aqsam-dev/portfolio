function ProjectsSection() {
  return (
    <section id="projects" className="px-8 py-24 sm:px-12 lg:px-16">
      <p className="font-mono text-xs uppercase tracking-wider text-accent">
        02 / Projects
      </p>

      <article className="mt-8 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">
          Featured Project
        </p>

        <h2 className="mt-4 font-serif text-4xl font-semibold text-ink sm:text-5xl">
          MedSpot
        </h2>

        <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
          A healthcare platform that helps patients find nearby pharmacies,
          check medicine availability, upload prescriptions, and reserve
          medicines.
        </p>

        <p className="mt-6 font-mono text-xs leading-relaxed text-ink">
          React · Node.js · Express · PostgreSQL · Flutter · FastAPI OCR ·
          Socket.io
        </p>

        <a
          href="https://github.com/aqsam-dev/medspot_platform"
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-block font-mono text-xs font-semibold uppercase tracking-wider text-accent transition hover:text-ink"
        >
          View repository →
        </a>
      </article>
    </section>
  );
}

export default ProjectsSection;