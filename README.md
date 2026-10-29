# Abhishek Jan — Portfolio

Personal portfolio for senior frontend roles. Built with **React 18 + TypeScript + Mantine 7**, bundled with **Webpack 5**, deployable on **Vercel**.

## Scripts

```bash
npm install        # install dependencies
npm start          # dev server on http://localhost:3000 (HMR)
npm run typecheck  # tsc --noEmit
npm run build      # production build into dist/
```

## Editing content

All content lives in [`src/data/resume.ts`](src/data/resume.ts). Components only render that data, so updating the resume means editing one file.

## Project structure

```
public/            index.html template + favicon
src/
  data/resume.ts   all portfolio content (typed)
  components/      Header, Hero, Metrics, Highlights, Experience, Skills, Education, Contact
  theme.ts         Mantine theme
  styles.css       global styles + reveal animation
  App.tsx          page layout; below-the-fold sections are lazy-loaded
  index.tsx        entry point
webpack.config.js  dev/prod config (content hashing, vendor/react split, CSS extraction + minification)
vercel.json        build settings, SPA rewrite, immutable caching for hashed assets
```

## Frontend practices on show

- **Performance:** route-free code splitting (`React.lazy` for Skills / Education / Contact), a separate `react` vendor chunk, content-hashed assets with 1-year immutable caching, and per-component Mantine CSS imports (68 KB instead of ~190 KB). First load is about 115 KB gzipped.
- **Accessibility:** skip link, landmark elements, labelled sections, `aria-current` on the active nav item, keyboard-friendly controls, and `prefers-reduced-motion` support.
- **Theming:** light/dark mode follows the system setting, can be switched by hand, and has no flash on load (set in the HTML `<head>`).
- **Type safety:** strict TypeScript with typed content models.

## Deploy to Vercel

**Option A — Git (recommended)**
1. Push this folder to a GitHub repository.
2. On vercel.com, choose **Add New → Project** and import the repo.
3. Vercel reads `vercel.json` (`npm run build` → `dist/`). Click **Deploy**.

**Option B — CLI**
```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production URL to share
```
