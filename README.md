# Structural Portfolio — Er. Biswajit Deb Barman

A professional civil engineering portfolio built with **Next.js 14**, **Three.js / React Three Fiber**, and **Framer Motion**.

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework, routing, SSR |
| React Three Fiber | 3D wireframe building (hero) |
| Three.js | 3D geometry & WebGL |
| Framer Motion | Page animations, transitions |
| CSS Modules | Scoped component styles |

## Project Structure

```
src/
├── app/
│   ├── layout.jsx          # Root layout (Navbar + Footer)
│   ├── page.jsx            # Home page (Hero, Services, Projects, Skills, CTA)
│   ├── page.module.css
│   ├── projects/
│   │   ├── page.jsx        # Timeline project gallery + modal
│   │   └── page.module.css
│   ├── about/
│   │   ├── page.jsx        # Bio, Skills, Education, Contact form
│   │   └── page.module.css
│   └── calculator/
│       ├── page.jsx        # House cost + Slab material calculators
│       └── page.module.css
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx      # Fixed nav with mobile menu
│   │   ├── Navbar.module.css
│   │   ├── Footer.jsx      # 4-column footer
│   │   └── Footer.module.css
│   └── three/
│       ├── HeroScene.jsx   # Rotating wireframe building + particles
│       └── SkillsScene.jsx # Spinning geometric shapes
├── data/
│   ├── index.js            # skills, services, education, siteConfig, constants
│   └── projects.js         # project case studies
└── styles/
    └── globals.css         # Design tokens, reset, utility classes
```

## Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## Build for Production

```bash
npm run build
npm start
```

## Key Fixes Applied

1. **SSR fix** — Three.js Canvas components are imported with `dynamic(..., { ssr: false })` to prevent server-side render crashes.
2. **Path aliases** — `jsconfig.json` configures `@/*` → `./src/*` correctly.
3. **Data imports** — Projects are imported from `@/data/projects`, other data from `@/data/index`.
4. **No unused imports** — Removed `Inter` font, unused `motion`, unused `Suspense`.
5. **Single source of truth** — All site configuration in `src/data/index.js`.

## Pages

| Route | Description |
|---|---|
| `/` | Hero with 3D building model, services, featured projects, skills |
| `/projects` | Timeline layout with filter + case study modals |
| `/about` | Bio, skills grid, education timeline, contact form |
| `/calculator` | House cost estimator (BOQ) + Slab material calculator |

## Customisation

Edit `src/data/index.js` to update:
- `siteConfig` — name, contact, social links, service areas
- `skills` — technical skills with proficiency levels
- `services` — service offerings
- `education` — qualifications and certifications

Edit `src/data/projects.js` to add/update project case studies.
