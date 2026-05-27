"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Sparkles, Loader2 } from "lucide-react";
import type { Post } from "@/lib/supabase";
import LogoutButton from "@/components/admin/LogoutButton";

export default function AdminPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [genResult, setGenResult] = useState<{ created: number; total: number } | null>(null);

  async function loadPosts() {
    setLoading(true);
    const res = await fetch("/api/posts", { cache: "no-store" });
    if (res.ok) setPosts(await res.json());
    setLoading(false);
  }

  useEffect(() => { loadPosts(); }, []);

  async function handleDelete(id: string, title: string) {
    if (!confirm(`Delete "${title}"?`)) return;
    await fetch(`/api/posts/${id}`, { method: "DELETE" });
    loadPosts();
  }

  async function toggleStatus(id: string, current: string) {
    const newStatus = current === "published" ? "draft" : "published";
    await fetch(`/api/posts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });
    loadPosts();
  }

  async function handleGenerate() {
    if (!confirm("Generate 1 article per category (6 total)? This takes ~30 seconds.")) return;
    setGenerating(true);
    setGenResult(null);
    try {
      const res = await fetch("/api/generate-articles", { method: "POST" });
      const data = await res.json();
      setGenResult({ created: data.created, total: data.total });
      loadPosts();
    } catch {
      setGenResult({ created: 0, total: 6 });
    } finally {
      setGenerating(false);
    }
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-2xl font-bold text-white">Blog CMS</h1>
            <p className="text-sm text-white/40 mt-1">
              {loading ? "Loading…" : `${posts.length} posts total`}
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap justify-end">
            <button
              onClick={handleGenerate}
              disabled={generating}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#EC4899]/40 bg-[#EC4899]/10 text-[#EC4899] text-sm font-semibold hover:bg-[#EC4899]/20 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {generating ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Generating…</>
              ) : (
                <><Sparkles className="w-4 h-4" /> Generate Articles</>
              )}
            </button>
            <Link
              href="/admin/posts/new"
              className="px-4 py-2 rounded-xl bg-[#4F8EF7] text-white text-sm font-semibold hover:bg-[#4F8EF7]/80 transition"
            >
              + New Post
            </Link>
            <LogoutButton />
          </div>
        </div>

        {/* Generation result banner */}
        {genResult && (
          <div className={`mb-6 px-5 py-3 rounded-xl text-sm font-medium flex items-center justify-between ${
            genResult.created === genResult.total
              ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
              : "bg-amber-500/10 border border-amber-500/20 text-amber-400"
          }`}>
            <span>
              {genResult.created === genResult.total
                ? `✓ All ${genResult.created} articles generated and published successfully.`
                : `${genResult.created} of ${genResult.total} articles created. Some may have failed — check Supabase.`}
            </span>
            <button onClick={() => setGenResult(null)} className="text-white/30 hover:text-white ml-4">✕</button>
          </div>
        )}

        {/* Table */}
        <div className="glass border border-white/8 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-[1fr_140px_120px_100px_120px] gap-4 px-5 py-3 border-b border-white/8 text-xs font-semibold uppercase tracking-widest text-white/30">
            <span>Title</span>
            <span>Category</span>
            <span>Date</span>
            <span>Status</span>
            <span className="text-right">Actions</span>
          </div>

          {loading ? (
            <div className="px-5 py-12 text-center text-white/30 text-sm">Loading posts…</div>
          ) : posts.length === 0 ? (
            <div className="px-5 py-12 text-center text-white/30 text-sm">
              No posts yet. Click &quot;+ New Post&quot; or &quot;Generate Articles&quot;.
            </div>
          ) : (
            posts.map((post) => (
              <div
                key={post.id}
                className="grid grid-cols-[1fr_140px_120px_100px_120px] gap-4 px-5 py-4 border-b border-white/5 last:border-0 items-center hover:bg-white/[0.02] transition"
              >
                <div className="min-w-0">
                  <p className="text-sm font-medium text-white truncate">{post.title}</p>
                  <p className="text-xs text-white/30 truncate mt-0.5">/blog/{post.slug}</p>
                </div>
                <span className="text-xs text-white/50 truncate">{post.category}</span>
                <span className="text-xs text-white/40">
                  {new Date(post.published_at).toLocaleDateString("en-CA", {
                    month: "short", day: "numeric", year: "2-digit",
                  })}
                </span>
                <button
                  onClick={() => toggleStatus(post.id, post.status)}
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full transition w-fit ${
                    post.status === "published"
                      ? "bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25"
                      : "bg-white/8 text-white/40 hover:bg-white/12"
                  }`}
                >
                  {post.status}
                </button>
                <div className="flex items-center justify-end gap-3">
                  <Link href={`/admin/posts/${post.id}/edit`} className="text-xs text-[#4F8EF7] hover:underline">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(post.id, post.title)}
                    className="text-xs text-red-400/70 hover:text-red-400 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
