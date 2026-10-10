# Ashutosh Srivastava — Portfolio

Single-page portfolio built with React, Vite, TypeScript, Tailwind CSS v4 and Framer Motion.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
npm run lint
```

## Edit content

All content lives in `src/data/` — no component changes needed:

- `profile.ts` — name, title, summary, email, LinkedIn, metrics, clients, languages
- `skills.ts` — skill groups
- `experience.ts` — employers and client engagements
- `education.ts` — education and certifications

The downloadable resume is `public/Ashutosh_Srivastava_Resume.pdf`; replace the file to update it.

## Deploy

The build uses relative paths (`base: './'`), so `dist/` works on any static host.

- **Vercel / Netlify:** import the repo, build command `npm run build`, output directory `dist`. If the repo root is the parent folder, set the root directory to `portfolio`.
- **GitHub Pages:** run `npm run build` and publish `dist/` (e.g. with the `actions/deploy-pages` workflow or the `gh-pages` package: `npx gh-pages -d dist`).
