# Fredrose Security Services — Website

React + TypeScript + Vite build of the Fredrose Security Services site.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Project structure

```
src/
  assets/images/    real image files (logo, team photo, service photos, etc.)
  components/       one component per site section
  data/             typed content — services, solutions, nav links, diagram hotspots
  hooks/            useActiveSection (scroll-spy for the nav)
  App.tsx           assembles all sections
  index.css         full design system (CSS variables, all component styles)
```

## Notes

- The contact form validates client-side but does not submit anywhere yet —
  wire it up to your backend/email service of choice in `src/components/Contact.tsx`.
- The prototype's "device preview toolbar" (desktop/tablet/mobile switcher) was a
  demo-only tool and was not carried over — a real browser already does that.
- Developed by Hlavutelo Maluleke.
