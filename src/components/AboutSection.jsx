function AboutSection() {
  return (
    <section id="about" className="px-8 py-24 sm:px-12 lg:px-16">
      <p className="font-mono text-xs uppercase tracking-wider text-accent">
        01 / About
      </p>

      <h2 className="mt-5 max-w-xl font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">
        Building practical software, end to end.
      </h2>
      <div className="mt-8 max-w-2xl space-y-5 leading-relaxed text-ink-soft">
        <p>
          I’m Aqsam Shahid, a full-stack developer based in Pakistan. I build practical, reliable software from the interface people use to the backend systems that handle data, security, and real-time interactions.
        </p>
        <p>
          My work is centred on React, Node.js, Express, and PostgreSQL/MongoDB. I built MedSpot, a healthcare platform that helps patients connect with nearby pharmacies, with REST APIs, role-based JWT authentication, prescription OCR, real-time Socket.io notifications, and a Flutter patient app. It taught me how to design complete product flows—not just individual screens or endpoints.
        </p>
        <p>
          I care about responsive interfaces, clean architecture, maintainable code, and features that solve real problems. Alongside full-stack development, I’m actively expanding into DevOps practices and AI-powered automation, using projects as the place to learn and apply them.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;