function AboutSection() {
  return (
    <section id="about" className="px-8 py-24 sm:px-12 lg:px-16">
      <p className="font-mono text-xs uppercase tracking-wider text-accent">
        01 / About
      </p>

      <h2 className="mt-5 max-w-xl font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">
        Building practical software, end to end.
      </h2>

      <p className="mt-7 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
        I am a full-stack developer focused on building reliable applications
        with React, Node.js, Express, and PostgreSQL. I enjoy working across
        interfaces, APIs, databases, authentication, and deployment to turn
        real ideas into useful software.
      </p>
    </section>
  );
}

export default AboutSection;