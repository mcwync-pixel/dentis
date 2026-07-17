import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

const isValidUrl = (url: string | undefined): boolean => {
  if (!url) return false;
  try {
    new URL(url);
    return url.startsWith('http://') || url.startsWith('https://');
  } catch {
    return false;
  }
};

const createMockSupabase = () => {
  console.warn(
    'Supabase URL or Anon Key is missing or invalid. Fallback mock client is active.'
  );
  return {
    from: (table: string) => ({
      insert: async (data: any) => {
        console.log(`[Mock Supabase] Inserting into ${table}:`, data);
        try {
          const key = `mock_${table}`;
          const existing = localStorage.getItem(key);
          const list = existing ? JSON.parse(existing) : [];
          const record = {
            id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2),
            status: 'pending',
            created_at: new Date().toISOString(),
            ...data,
          };
          list.push(record);
          localStorage.setItem(key, JSON.stringify(list));
          return { data: record, error: null };
        } catch (e) {
          return { data: null, error: e instanceof Error ? e : new Error(String(e)) };
        }
      },
      select: () => {
        try {
          const key = `mock_${table}`;
          const existing = localStorage.getItem(key);
          const list = existing ? JSON.parse(existing) : [];
          return {
            data: list,
            error: null,
            order: function () { return this; },
            limit: function () { return this; },
          };
        } catch (e) {
          return { data: null, error: e instanceof Error ? e : new Error(String(e)) };
        }
      },
    }),
  } as any;
};

export const supabase = isValidUrl(supabaseUrl) && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: false },
    })
  : createMockSupabase();

export type Appointment = {
  id?: string;
  full_name: string;
  email: string;
  phone: string;
  service: string;
  preferred_date: string;
  preferred_time: string;
  message?: string | null;
  status?: string;
  created_at?: string;
};

