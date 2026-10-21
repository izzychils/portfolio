# Israel Iraoya, portfolio

A single page portfolio for Israel Iraoya, full stack software engineer. Built with React,
TypeScript, Vite and Tailwind CSS.

Deploy the `dist` folder to Vercel, Netlify, GitHub Pages or any static host.

## Stack

- React 19 and TypeScript
- Vite 8
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- lucide-react for icons
- Space Grotesk, Inter and JetBrains Mono from Google Fonts

No UI kit, no animation library. Motion is plain CSS with a small IntersectionObserver hook, and
everything respects `prefers-reduced-motion`.

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
    Nav.tsx          sticky header with mobile menu
    Hero.tsx         headline, status pill and the code panel
    Work.tsx         project cards plus the "also in the lab" list
    About.tsx        bio, principles and quick facts
    Experience.tsx   role and education timeline
    Stack.tsx        grouped skills and the marquee strip
    Contact.tsx      call to action and channels
    Footer.tsx
    Reveal.tsx       scroll reveal wrapper
    BrandIcons.tsx   GitHub and LinkedIn marks
  data.ts            all content in one place
  index.css          theme tokens, base styles and utilities
public/
  work/              screenshots of shipped projects
  favicon.svg
```

## Editing content

Everything a visitor reads lives in `src/data.ts`: projects, extra builds, experience, stack
groups and the contact links. Screenshots go in `public/work/` and are referenced by path.

## Deploying

Any static host works. On Vercel, import the repo, keep the defaults (Vite) and deploy. On GitHub
Pages, set the base in `vite.config.ts` to `/portfolio/` and publish the `dist` folder.
