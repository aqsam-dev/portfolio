import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import DeveloperIllustration from "./DeveloperIllustration";

function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <p className="mb-6 flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider text-accent">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Full-Stack Developer — Rawalpindi, Pakistan
        </p>

        <h1 className="mb-6 font-serif text-5xl font-semibold leading-none tracking-tight sm:text-6xl md:text-7xl">
          Hey, I&apos;m Aqsam
          <span className="ml-1 inline-block h-10 w-1.5 animate-blink bg-accent align-middle sm:h-12" />
        </h1>

        <p className="mb-10 max-w-xl text-base leading-relaxed text-ink-soft sm:text-xl">
          I build full-stack software for real-world problems — starting with a
          platform connecting patients to nearby pharmacies. React, Node.js,
          and PostgreSQL, end to end.
        </p>

        <div className="flex gap-3">
          <a
            href="https://github.com/aqsam-dev"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            title="GitHub"
            className="grid h-12 w-12 place-items-center rounded border border-line text-xl transition hover:border-accent hover:bg-accent/10 hover:text-accent"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/aqsam-shahid"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            title="LinkedIn"
            className="grid h-12 w-12 place-items-center rounded border border-line text-xl transition hover:border-accent hover:bg-accent/10 hover:text-accent"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div className="order-first flex justify-center lg:order-last lg:justify-end">
        <DeveloperIllustration />
      </div>
    </section>
  );
}

export default Hero;