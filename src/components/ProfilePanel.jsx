import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

function ProfilePanel() {
  const [activeLink, setActiveLink] = useState("About");

  return (
    <aside className="relative z-20 bg-transparent lg:sticky lg:top-0 lg:h-screen">
      <div className="flex min-h-[70vh] max-w-xl flex-col justify-center px-8 py-16 sm:px-12 lg:mx-auto lg:min-h-screen lg:px-14 xl:px-20">
        <p className="mb-8 flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider text-accent">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Full-Stack Developer — Pakistan
        </p>

        <h1 className="font-serif text-5xl font-semibold leading-none tracking-tight text-ink xl:text-6xl">
          Hey, I&apos;m Aqsam
          <span className="ml-1 inline-block h-10 w-1.5 animate-blink bg-accent align-middle xl:h-12" />
        </h1>

        <p className="mt-7 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
          I build scalable and secure full-stack software for real-world
          problems — crafting beautiful interfaces with powerful backends.
        </p>

        <nav className="mt-14 flex flex-col gap-5">
          {navLinks.map((link) => {
            const isActive = activeLink === link.label;

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`font-mono text-xs font-semibold uppercase tracking-[0.18em] transition ${
                  isActive
                    ? "text-ink"
                    : "text-ink-soft hover:text-accent"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="mt-12 flex items-center gap-5 text-2xl text-ink">
          <a
            href="https://github.com/aqsam-dev"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="transition hover:text-accent"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/aqsam-shahid"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="transition hover:text-accent"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </aside>
  );
}

export default ProfilePanel;