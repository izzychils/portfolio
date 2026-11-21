# Israel Iraoya, portfolio

A single page portfolio for Israel Iraoya, full stack software engineer. Built with React,
TypeScript, Vite and Tailwind CSS.

Deploy the `dist` folder to Vercel, Netlify, GitHub Pages or any static host.

## Stack

- React 19 and TypeScript
- Vite 8
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- lucide-react for icons
- Inter Tight, Inter and JetBrains Mono from Google Fonts

No UI kit, no animation library. Motion is plain CSS plus a few small hooks in `src/lib/motion.ts`
(scroll reveal, pointer tilt, magnetic buttons, counting stats), and everything respects
`prefers-reduced-motion`.

The visual system is an ice-blue and paper pair of surfaces with black rules, big tight display
type, mono labels and black-outlined cards.

## Scripts

```bash
npm install
npm run dev       # local dev server
npm run build     # type check then production build into dist
npm run preview   # serve the production build
```

## Structure

```
src/
  components/
    Nav.tsx          sticky header with full-screen mobile menu
    Hero.tsx         masked headline, drawn ellipse and the code panel
    Marquee.tsx      full-bleed ticker band
    Work.tsx         project cards plus the "also in the lab" list
    Manifesto.tsx    dark promise band with counting stats
    About.tsx        bio, principles and quick facts
    Experience.tsx   role and education rows
    Stack.tsx        black toolkit panel of tilted chips
    Contact.tsx      giant call to action and contact details
    Footer.tsx       outlined wordmark
    NotFound.tsx     standalone view for unknown paths
    SectionRail.tsx  right-side section progress dots
    Reveal.tsx       scroll reveal wrapper
    BrandIcons.tsx   GitHub and LinkedIn marks
  lib/motion.ts      reveal, tilt, magnetic, counter and parallax hooks
  router.tsx         section links, history navigation and scroll handling
  routes.ts          path to section mapping
  data.ts            all content in one place
  index.css          theme tokens, base styles and utilities
public/
  work/              screenshots of shipped projects
  favicon.svg
```

Each section has its own path: `/`, `/work`, `/about`, `/experience`, `/stack` and `/contact`.
No hash fragments. The rewrite in `vercel.json` serves `index.html` for those paths.

## Editing content

Everything a visitor reads lives in `src/data.ts`: projects, extra builds, experience, stack
groups and the contact links. Screenshots go in `public/work/` and are referenced by path.

## Deploying

Any static host works. On Vercel, import the repo, keep the defaults (Vite) and deploy. On GitHub
Pages, set the base in `vite.config.ts` to `/portfolio/` and publish the `dist` folder.
