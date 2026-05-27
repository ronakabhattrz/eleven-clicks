"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Post } from "@/lib/supabase";

export default function AdminPostRow({ post }: { post: Post }) {
  const router = useRouter();

  async function handleDelete() {
    if (!confirm(`Delete "${post.title}"?`)) return;
    await fetch(`/api/posts/${post.id}`, { method: "DELETE" });
    router.refresh();
  }

  async function toggleStatus() {
    const newStatus = post.status === "published" ? "draft" : "published";
    await fetch(`/api/posts/${post.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });
    router.refresh();
  }

  return (
    <div className="grid grid-cols-[1fr_140px_120px_100px_100px] gap-4 px-5 py-4 border-b border-white/5 last:border-0 items-center hover:bg-white/[0.02] transition">
      <div className="min-w-0">
        <p className="text-sm font-medium text-white truncate">{post.title}</p>
        <p className="text-xs text-white/30 truncate mt-0.5">/blog/{post.slug}</p>
      </div>
      <span className="text-xs text-white/50 truncate">{post.category}</span>
      <span className="text-xs text-white/40">
        {new Date(post.published_at).toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "2-digit" })}
      </span>
      <button
        onClick={toggleStatus}
        className={`text-xs font-semibold px-2.5 py-1 rounded-full transition w-fit ${
          post.status === "published"
            ? "bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25"
            : "bg-white/8 text-white/40 hover:bg-white/12"
        }`}
      >
        {post.status}
      </button>
      <div className="flex items-center justify-end gap-2">
        <Link
          href={`/admin/posts/${post.id}/edit`}
          className="text-xs text-[#4F8EF7] hover:underline"
        >
          Edit
        </Link>
        <button onClick={handleDelete} className="text-xs text-red-400/70 hover:text-red-400">
          Del
        </button>
      </div>
    </div>
  );
}
