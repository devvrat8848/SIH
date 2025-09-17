import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL as string | undefined)
  || (typeof window !== 'undefined' && (window as any).__SUPABASE_URL__);
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined)
  || (import.meta.env.VITE_SUPABASE_KEY as string | undefined)
  || (typeof window !== 'undefined' && (window as any).__SUPABASE_ANON_KEY__);

const isValidUrl = supabaseUrl && (supabaseUrl.startsWith('http://') || supabaseUrl.startsWith('https://'));

if (!isValidUrl || !supabaseAnonKey) {
  console.warn('[Supabase] Missing or invalid VITE_SUPABASE_URL and/or VITE_SUPABASE_ANON_KEY. Supabase client not initialized.');
}

export const supabase: SupabaseClient | null = (isValidUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export const CLAIMS_TABLE = 'claims';
export const ATTACHMENTS_BUCKET = 'claims-attachments';


