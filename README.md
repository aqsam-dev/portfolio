# Aqsam Shahid — Portfolio (React + Vite + Tailwind)

Converted from the original single-file HTML portfolio into a componentized React app.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure

```
index.html
src/
  main.jsx            # React entry point
  App.jsx              # page shell, composes all sections
  index.css            # Tailwind directives + small custom effects layer
  hooks/
    useTheme.js         # dark/light mode toggle, persisted to localStorage
  components/
    Reveal.jsx          # scroll-in fade/slide wrapper (IntersectionObserver)
    ProgressBar.jsx      # top scroll progress bar
    CursorGlow.jsx        # ambient cursor-following glow
    Nav.jsx               # sticky nav + theme toggle button
    Hero.jsx                # intro section with aurora blobs + grid backdrop
    Skills.jsx                # tech stack grid
    Work.jsx                   # project cards with cursor spotlight hover
    Experience.jsx              # work history / education timeline
    Footer.jsx                    # contact links
```

## Notes on the conversion

- The original file contained several layered/overridden color-theme blocks
  (teal, electric-blue, then indigo/violet) due to CSS cascade order — only
  the **last** block for each mode actually took visual effect. This rebuild
  keeps just that final effective palette (indigo/violet, dark navy vs.
  soft violet-tinted light) as Tailwind theme tokens in `tailwind.config.js`.
- Dark mode uses Tailwind's `class` strategy (`dark:` variants) instead of a
  `.dark-mode` class + hand-written overrides.
- Font Awesome and the Google Fonts `Inter` stylesheet are still loaded via
  `<link>` tags in `index.html`, same as the original.
- All content (skills, the MedSpot project, experience/education, links) is
  preserved verbatim and lives as plain data arrays at the top of each
  component file, so it's easy to edit without touching markup.
