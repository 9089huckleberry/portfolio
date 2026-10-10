# Dev Pratap Singh — Portfolio

A recruiter-focused, frontend-only portfolio built with Next.js App Router,
TypeScript, Tailwind CSS, Motion, Lucide React, shadcn/ui, and Bklit UI.

## UI setup

The project uses shadcn/ui as its local component foundation and Bklit UI as a
configured component registry:

```json
"registries": {
  "@bklit": "https://ui.bklit.com/r/{name}.json"
}
```

Install additional verified Bklit components with:

```bash
npx shadcn@latest add @bklit/<component-name>
```

The portfolio currently uses Bklit's `ShimmeringText` component for the
availability status in the hero and the local shadcn Button for accessible
primary actions.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The portfolio is intentionally static: there is no backend, database, API route,
authentication flow, or environment variable required to run it. Update the
content in [`lib/portfolio.ts`](./lib/portfolio.ts).

## Production build

```bash
npm run lint
npm run build
npm run start
```

## Deploy to Vercel

### Existing Git repository

```bash
git add .
git commit -m "Build recruiter-focused frontend portfolio"
git push origin main
```

Import the GitHub repository at [vercel.com/new](https://vercel.com/new). Vercel
will detect Next.js automatically. Use the repository root as the project root,
leave environment variables empty, and deploy.

### New GitHub repository

```bash
git init
git add .
git commit -m "Build recruiter-focused frontend portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

Then import the repository into Vercel.

### Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```

After deployment, verify the live URL on desktop and mobile. Check the section
navigation, GitHub/LinkedIn links, resume download, email CTA, responsive menu,
project repository links, and browser console for errors.
