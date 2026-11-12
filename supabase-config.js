// Vite exposes only VITE_* environment variables to browser code.
// The fallback values below are Supabase publishable client settings, never a secret key.
export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://hyiyqbouakbccmhrhsno.supabase.co';
export const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_7l2G2G6c8Xk_SAzmSb5XzQ_3PZpTIhc';
