# Daniel Philipov — Portfolio

Personal portfolio website for Daniel Philipov, a Junior at UIUC studying Computer Science and Physics. Built with [Astro](https://astro.build) and deployed via GitHub Pages.

**Live site:** [dandandooo.github.io](https://dandandooo.github.io)

## Pages

- **Home** — Intro, bio, and tech stack
- **Projects** — Hackathon wins, coursework, and personal projects
- **Research** — Academic research work
- **Photography** — Photo gallery
- **Swimming** — Competitive swimming
- **Resume** — Embedded resume

## Tech Stack

- [Astro](https://astro.build) — Static site framework
- [astro-icon](https://github.com/natemoo-re/astro-icon) + [Catppuccin icons](https://github.com/catppuccin/icons) — Icon system
- [Bun](https://bun.sh) — Package manager & runtime
- GitHub Actions — CI/CD deploy pipeline

## Project Structure

```
/
├── public/               # Static assets (favicons, PDFs, etc.)
├── src/
│   ├── assets/           # Images and other imported assets
│   ├── components/       # Reusable Astro components (Navbar, InfoCard, etc.)
│   ├── data/             # Content data (projects.jsonc, research entries, etc.)
│   ├── layouts/          # Page layout wrappers
│   ├── pages/            # One file per route
│   └── styles/           # Global CSS
├── astro.config.mjs
└── package.json
```

## Commands

All commands are run from the project root:

| Command            | Action                                      |
| :----------------- | :------------------------------------------ |
| `bun install`      | Install dependencies                        |
| `bun run dev`      | Start local dev server at `localhost:4321`  |
| `bun run build`    | Build production site to `./dist/`          |
| `bun run preview`  | Preview production build locally            |
