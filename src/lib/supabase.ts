import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
const service = process.env.SUPABASE_SERVICE_ROLE_KEY ?? anon;

// Pass no-store fetch so Next.js doesn't cache Supabase responses in server components
const fetchNoStore = (input: RequestInfo | URL, init?: RequestInit) =>
  fetch(input, { ...init, cache: "no-store" });

export const supabase = createClient(url, anon, {
  global: { fetch: fetchNoStore },
});

export const supabaseAdmin = createClient(url, service, {
  global: { fetch: fetchNoStore },
});

export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  color: string;
  meta_title: string;
  meta_description: string;
  canonical_url: string;
  status: "draft" | "published";
  published_at: string;
  created_at: string;
  updated_at: string;
  read_time: string;
  author: string;
};
