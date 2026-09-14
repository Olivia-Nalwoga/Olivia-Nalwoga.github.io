# Olivia Nalwoga | Data Analyst & Data Science Portfolio

A professional portfolio highlighting Python, SQL, statistics, relational database design, and experience working with organizational data. Applied research adds depth through model selection and validation.

[Live portfolio](https://olivia-nalwoga.github.io/) · [LinkedIn](https://www.linkedin.com/in/olivia-nalwoga-a3ab10382/) · [GitHub](https://github.com/Olivia-Nalwoga)

## Featured work

- [High-Dimensional Variable Selection in NHANES](https://github.com/Olivia-Nalwoga/UST-631-high-dimensional-variable-selection): LASSO selected 8 of 14 candidate predictors; full and reduced linear regression models had similar held-out test error.
- [Relational Job Market Analytics Database](https://github.com/Olivia-Nalwoga/job-market-salary-analytics): an eight-table Oracle schema with constraints, trigger definitions, views, and analytical SQL using **synthetic data**.

Professional experience, technical skills, research methods and limitations, education, and contact information are visible without selector tabs. The resume PDF is preserved.

## Development

Use Node.js 24 (matching the GitHub Actions workflow).

```sh
npm ci
npm run dev
npm run lint
npm run build
npx tsc --noEmit
```

Next.js 16.3.5 App Router with React 19 and Tailwind CSS 4. Read the installed Next.js guides in `node_modules/next/dist/docs/` before changing framework behavior.

- `app/page.tsx`: static homepage sections.
- `app/content.ts`: verified links, experience, and skills.
- `app/components/`: navigation and project evidence visuals; only `mobile-nav.tsx` is a client component.
- `app/globals.css`: light purple/white design, Geist typography, responsive and accessibility rules.
- `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`: metadata and structured data.
- `scripts/generate-social-assets.mjs`: regenerate the committed Open Graph image and favicon using `node scripts/generate-social-assets.mjs` after `npm ci`.

## Deployment

The existing GitHub Actions workflow builds and deploys `out/` on pushes to `master`. `next.config.ts` retains `output: "export"`; the site requires no running Next.js server. Project images are local, and Next Image is explicitly unoptimized for static hosting. Robots and sitemap routes use `force-static`.

To inspect the actual export locally after a build:

```sh
python3 -m http.server 4173 --directory out --bind 127.0.0.1
```

## Content maintenance

See [verified sources and content follow-ups](docs/content-sources.md) and [validation report](docs/validation.md). Update documented role/course dates when Olivia supplies changes. Do not alter `public/resume.pdf` without an editable source and authorization.
