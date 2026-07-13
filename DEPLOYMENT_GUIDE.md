# Deployment Guide

This is a fully static site (Vite + React + TypeScript) — no backend, no environment variables, no database. It deploys anywhere that serves static files. Vercel is the easiest option.

## Local commands

```bash
npm install       # install dependencies
npm run dev       # start local dev server with hot reload
npm run typecheck # TypeScript check only, no build output
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build locally
```

## Deploying to Vercel

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Vite: build command `npm run build`, output directory `dist`.

### Option B — Vercel dashboard (recommended if your code is on GitHub)

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Vite**.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click **Deploy**.

No environment variables are required — everything is static content baked into `src/data/birthdayContent.ts` and files in `public/`.

## Before you deploy

- Double-check every photo/audio path referenced in `birthdayContent.ts` has a matching file in `public/`.
- Run `npm run build` locally first and confirm it completes without errors.
- Consider making the deployed URL unlisted/private if you don't want it publicly discoverable — Vercel preview URLs are unguessable by default, but a production domain is public. You can also add basic obscurity by not linking it anywhere public and only sharing the link directly.

## Updating after deployment

Any time you edit `birthdayContent.ts` or add media files, just push to your connected branch (or re-run `vercel`) — Vercel will rebuild and redeploy automatically.
