# Dev Pratap Singh — Portfolio

Next.js (App Router), TypeScript, Tailwind CSS 3, Motion, Lucide icons. Static, no backend.

```
src/app/        layout (fonts, theme script, metadata), page, globals.css
src/components/ layout, sections, terminal, theme, ui
src/data/portfolio.ts  all content (site + terminal read from here) and asset paths
public/assets/  resume.pdf and profile.jpg (you provide these)
```

## Replace the resume or photo

Put your files in `public/assets/` with exactly these names — no code changes:

- `resume.pdf`
- `profile.jpg`

If a file is missing, the site shows an initials avatar / hides the resume button
and the terminal `resume` command says it is unavailable. Files are checked when
the page is rendered, so rebuild/redeploy after swapping them in production.

## Edit content

Everything shown comes from [`src/data/portfolio.ts`](./src/data/portfolio.ts).

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build && npm run start
```
