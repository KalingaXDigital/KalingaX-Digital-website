# KalingaX Digital website

A Vite-powered vanilla JavaScript website for KalingaX Digital. The existing responsive design, brand colours, hero visuals, portfolio interactions, navigation, inquiry form, and Supabase submission are preserved. No React or other UI framework is used.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Start locally

```sh
npm install
cp .env.example .env
npm run dev
```

On Windows PowerShell, copy the environment template with `Copy-Item .env.example .env`. The public Supabase URL and publishable key in the template point to the configured project. They can be overridden through `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`. Never place a Supabase secret or service-role key in a `VITE_*` variable.

## Production build

```sh
npm run build
npm run preview
```

Vite writes the deployable static site to `dist/`. The relative base path in `vite.config.js` supports GitHub Pages project URLs as well as a custom domain.

## Supabase

Form data is submitted to the configured project's `public.customer_inquiries` table. See [SUPABASE_SETUP.md](SUPABASE_SETUP.md) and [`supabase/setup.sql`](supabase/setup.sql) for the table schema and insert-only RLS policy.
