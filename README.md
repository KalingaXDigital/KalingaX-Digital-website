# KalingaX Digital website

Static website for KalingaX Digital with a responsive landing page, portfolio and consultation inquiry form.

## Files

- `index.html` — page content and semantic markup
- `styles.css` — responsive design and hero styling
- `script.js` — navigation, animations, portfolio controls, and form submission
- `supabase-config.js` — public Supabase project URL and publishable key
- `assets/` — hero background and brand logo
- `supabase/setup.sql` — table, grants, and insert-only RLS policy
- `SUPABASE_SETUP.md` — database setup and deployment notes

## Run locally

Serve the folder over HTTP instead of opening `index.html` as a `file://` URL. For example, from this folder run `python -m http.server 8000`, then open `http://localhost:8000`. The inquiry form requires network access to the configured Supabase project and the SQL setup in `supabase/setup.sql`. For production, open the deployed HTTPS domain.
