# Portfolio — Dev Pratap Singh

Static Next.js 16 (App Router) + React 19 + TypeScript (strict) + Tailwind CSS 3. No backend. See `AGENTS.md`: this Next.js has breaking changes, so check `node_modules/next/dist/docs/` before using Next APIs.

## Commands
- `npm run dev` — http://localhost:3000 (use `localhost`; other hosts need `allowedDevOrigins` in `next.config.mjs`, otherwise scripts are blocked and animated sections stay invisible)
- `npm run lint`, `npm run build` — run both before finishing a change
- If dev behaves oddly after moving files, stop the server and delete `.next`

## Layout
- `src/data/portfolio.ts` — the only place content lives; site and terminal both read it
- `src/components/{layout,sections,terminal,theme,ui}` — presentation
- `src/app` — layout (Geist fonts, pre-paint theme script, metadata), `page.tsx` (server component), `globals.css` (CSS-variable themes)
- `public/assets/resume.pdf`, `public/assets/profile.jpg` — fixed filenames; swap files, no code change. `page.tsx` checks they exist and the UI falls back (initials avatar, hidden resume button)

## Rules
- Content must come from the resume. Never invent skills, metrics, links, or availability. Omit what the resume doesn't state.
- Keep Server Components by default; `"use client"` only for header, terminal, theme toggle, `Reveal`.
- Colors come from CSS variables (`:root` / `.dark`); terminal panel is intentionally always dark.
- Respect `prefers-reduced-motion`; animate only transform/opacity.
- Terminal is simulated: commands map to static output, never execute input.
- Don't add dependencies for a few lines of code.
