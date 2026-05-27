import { NextRequest, NextResponse } from "next/server";
import { getAllPosts, createPost } from "@/lib/posts";
import { slugify } from "@/lib/utils";

export async function GET() {
  const posts = await getAllPosts();
  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const slug = body.slug || slugify(body.title);
  const post = await createPost({
    title: body.title,
    slug,
    excerpt: body.excerpt ?? "",
    content: body.content,
    category: body.category ?? "Technology",
    color: body.color ?? "#4F8EF7",
    meta_title: body.meta_title ?? body.title,
    meta_description: body.meta_description ?? body.excerpt ?? "",
    canonical_url: body.canonical_url ?? `https://elevenclicks.com/blog/${slug}`,
    status: body.status ?? "published",
    published_at: body.published_at ?? new Date().toISOString(),
    read_time: body.read_time ?? "5 min read",
    author: body.author ?? "ElevenClicks Team",
  });
  if (!post) return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  return NextResponse.json(post, { status: 201 });
}
