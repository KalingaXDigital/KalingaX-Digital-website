# KalingaX Digital website

Static website for KalingaX Digital with a responsive landing page, individual service pages and a Supabase consultation inquiry form.

## Files

- `index.html` — homepage content, metadata, and organization structured data
- `*-bhubaneswar.html` — individual service landing pages
- `styles.css` — responsive design and hero styling
- `script.js` — mobile navigation, section reveals, and form submission
- `robots.txt` and `sitemap.xml` — search engine crawling and page discovery
- `supabase-config.js` — public Supabase project URL and publishable key
- `assets/` — brand logo
- `supabase/setup.sql` — table, grants, and insert-only RLS policy
- `SUPABASE_SETUP.md` — database setup and deployment notes
- `SEO_SETUP.md` — Search Console and local business profile follow-up steps

## Run locally

Serve the folder over HTTP instead of opening `index.html` as a `file://` URL. For example, from this folder run `python -m http.server 8000`, then open `http://localhost:8000`. The inquiry form requires network access to the configured Supabase project and the SQL setup in `supabase/setup.sql`. For production, open the deployed HTTPS domain.
