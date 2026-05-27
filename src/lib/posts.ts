import { supabase, supabaseAdmin, type Post } from "./supabase";

export async function getPublishedPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false });
  if (error) { console.error(error); return []; }
  return data ?? [];
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .single();
  if (error) return null;
  return data;
}

export async function getAllPosts(): Promise<Post[]> {
  const { data, error } = await supabaseAdmin
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) { console.error(error); return []; }
  return data ?? [];
}

export async function createPost(post: Omit<Post, "id" | "created_at" | "updated_at">): Promise<Post | null> {
  const { data, error } = await supabaseAdmin
    .from("posts")
    .insert(post)
    .select()
    .single();
  if (error) { console.error(error); return null; }
  return data;
}

export async function updatePost(id: string, post: Partial<Post>): Promise<Post | null> {
  const { data, error } = await supabaseAdmin
    .from("posts")
    .update({ ...post, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();
  if (error) { console.error(error); return null; }
  return data;
}

export async function deletePost(id: string): Promise<boolean> {
  const { error } = await supabaseAdmin.from("posts").delete().eq("id", id);
  return !error;
}
