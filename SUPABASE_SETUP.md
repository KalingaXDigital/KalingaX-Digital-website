# Supabase setup for KalingaX Digital

The website form writes to the existing Supabase project `hyiyqbouakbccmhrhsno` and the `public.customer_inquiries` table. The project URL and publishable browser key are kept in `supabase-config.js`; a publishable key is intended for browser use. Never put a Supabase secret or service-role key in this website.

## Create or configure the table

1. Open the Supabase dashboard for project `hyiyqbouakbccmhrhsno`.
2. Open **SQL Editor** and run [`supabase/setup.sql`](supabase/setup.sql). The script creates the table if it is missing, enables row-level security, and grants anonymous visitors insert-only access.
3. In **Table Editor**, confirm `customer_inquiries` has these columns: `id`, `name`, `phone`, `email`, `service`, `message`, and `created_at`.
4. Submit a test inquiry through the site and check the new row in Table Editor. Do not add a public SELECT policy: visitors should not be able to read customer inquiries.

If a table with this name already exists but has different columns or types, review its existing data before changing the schema; `CREATE TABLE IF NOT EXISTS` does not alter an existing table.

## Website configuration

`supabase-config.js` contains only the project URL and publishable key used by `script.js`. If the project changes, replace both values with that project's URL and publishable key. Do not use a secret/service-role key in a static website.

The frontend sends `name`, `phone`, `email`, `service`, and `message` to `/rest/v1/customer_inquiries`. The database sets `id` and `created_at`. RLS allows the `anon` role to insert submissions and does not allow public reads, updates, or deletes.

## Project region

The website uses the already-created project. Its region is managed in Supabase project settings and does not need to be specified in these website files. Keep the existing India region if that is where the project was provisioned.
