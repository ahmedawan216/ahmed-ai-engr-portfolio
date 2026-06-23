# Ahmed Awan — Portfolio

A dark-themed, animated portfolio site built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> First build requires an internet connection — `next/font` fetches the Inter
> font from Google Fonts at build time and self-hosts it from then on.

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx       — root layout, fonts, SEO metadata
  page.tsx          — assembles all sections
  globals.css       — design tokens, gradient text, card glow, nav underline
components/
  Navbar.tsx              — fixed nav, scroll-spy active link, mobile menu
  Hero.tsx                — staggered heading, gradient subheading, stat counters
  About.tsx               — journey timeline (UI/UX → Frontend → AI Engineering)
  Projects.tsx            — project grid
  ProjectCard.tsx         — reusable card (hover lift + glow border)
  Skills.tsx              — categorized skill badges
  Contact.tsx             — gradient heading, social links
  Footer.tsx
  ParticleBackground.tsx  — desktop-only tsparticles field, static gradient on mobile
  MagneticButton.tsx      — desktop-only magnetic hover, plain button on mobile/touch
  useIsMobile.ts          — shared hook gating heavier effects by viewport/touch
```

## Editing content

- **Projects**: edit the `projects` array in `components/Projects.tsx`.
- **Skills**: edit `skillGroups` in `components/Skills.tsx`.
- **Contact links**: edit `socials` in `components/Contact.tsx` and the links in `components/Footer.tsx`.
- **Colors**: all design tokens live in `tailwind.config.js` (`colors.bg`, `colors.accent`, etc.) and as CSS variables in `app/globals.css`.

## Notes on performance

- The particle background and magnetic button effects are disabled on small screens and touch devices (`useIsMobile` hook), falling back to a static gradient and plain buttons.
- `prefers-reduced-motion` is respected globally — animations collapse to near-instant for users who request it.
- Images/heavy components are dynamically imported (`ParticleBackground` uses `next/dynamic` with `ssr: false`).

## Deploying

This is a standard Next.js app — it deploys directly to [Vercel](https://vercel.com) (recommended), Netlify, or any Node hosting that supports Next.js.
