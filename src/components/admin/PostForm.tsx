"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Post } from "@/lib/supabase";

type PostFormData = Omit<Post, "id" | "created_at" | "updated_at">;

const CATEGORY_OPTIONS = [
  { label: "Web Development", color: "#4F8EF7" },
  { label: "Ruby on Rails", color: "#E53E3E" },
  { label: "AI Solutions", color: "#EC4899" },
  { label: "Mobile Development", color: "#8B5CF6" },
  { label: "Node.js & Python", color: "#68A063" },
  { label: "IT & Digital Strategy", color: "#06B6D4" },
  { label: "Backend Development", color: "#E53E3E" },
  { label: "Technology", color: "#4F8EF7" },
];

const DEFAULT_FORM: PostFormData = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  category: "Web Development",
  color: "#4F8EF7",
  meta_title: "",
  meta_description: "",
  canonical_url: "",
  status: "published",
  published_at: new Date().toISOString().slice(0, 10),
  read_time: "5 min read",
  author: "ElevenClicks Team",
};

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").slice(0, 80);
}

export default function PostForm({ initial, postId }: { initial?: Partial<Post>; postId?: string }) {
  const router = useRouter();
  const [form, setForm] = useState<PostFormData>({ ...DEFAULT_FORM, ...initial });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function set(field: keyof PostFormData, value: string) {
    setForm((f) => {
      const updated = { ...f, [field]: value };
      if (field === "title" && !postId) {
        updated.slug = slugify(value);
        updated.meta_title = value.slice(0, 60);
        updated.canonical_url = `https://elevenclicks.com/blog/${slugify(value)}`;
      }
      if (field === "excerpt" && !postId) {
        updated.meta_description = value.slice(0, 155);
      }
      if (field === "category") {
        const found = CATEGORY_OPTIONS.find((c) => c.label === value);
        if (found) updated.color = found.color;
      }
      return updated;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const payload = { ...form, published_at: new Date(form.published_at).toISOString() };
      const res = postId
        ? await fetch(`/api/posts/${postId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          })
        : await fetch("/api/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
      if (!res.ok) throw new Error(await res.text());
      router.push("/admin");
      router.refresh();
    } catch (err) {
      setError(String(err));
    } finally {
      setSaving(false);
    }
  }

  const inputClass =
    "w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#4F8EF7]/60";
  const labelClass = "block text-xs font-semibold text-white/50 uppercase tracking-widest mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Title */}
      <div>
        <label className={labelClass}>Title *</label>
        <input className={inputClass} value={form.title} onChange={(e) => set("title", e.target.value)} required placeholder="Article title" />
      </div>

      {/* Slug + Category row */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Slug *</label>
          <input className={inputClass} value={form.slug} onChange={(e) => set("slug", e.target.value)} required placeholder="url-slug" />
        </div>
        <div>
          <label className={labelClass}>Category *</label>
          <select
            className={inputClass}
            value={form.category}
            onChange={(e) => set("category", e.target.value)}
          >
            {CATEGORY_OPTIONS.map((c) => (
              <option key={c.label} value={c.label}>{c.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Excerpt */}
      <div>
        <label className={labelClass}>Excerpt *</label>
        <textarea className={inputClass} rows={2} value={form.excerpt} onChange={(e) => set("excerpt", e.target.value)} required placeholder="2-sentence description" />
      </div>

      {/* Content */}
      <div>
        <label className={labelClass}>Content (HTML) *</label>
        <textarea
          className={`${inputClass} font-mono text-xs`}
          rows={14}
          value={form.content}
          onChange={(e) => set("content", e.target.value)}
          required
          placeholder="<p>Article HTML...</p>"
        />
      </div>

      {/* SEO row */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Meta Title (max 60)</label>
          <input className={inputClass} value={form.meta_title} onChange={(e) => set("meta_title", e.target.value)} placeholder="SEO title" maxLength={60} />
        </div>
        <div>
          <label className={labelClass}>Canonical URL</label>
          <input className={inputClass} value={form.canonical_url} onChange={(e) => set("canonical_url", e.target.value)} placeholder="https://elevenclicks.com/blog/..." />
        </div>
      </div>

      <div>
        <label className={labelClass}>Meta Description (max 155)</label>
        <textarea className={inputClass} rows={2} value={form.meta_description} onChange={(e) => set("meta_description", e.target.value)} placeholder="SEO meta description" maxLength={155} />
      </div>

      {/* Bottom row */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label className={labelClass}>Published At</label>
          <input type="date" className={inputClass} value={form.published_at.slice(0, 10)} onChange={(e) => set("published_at", e.target.value)} />
        </div>
        <div>
          <label className={labelClass}>Read Time</label>
          <input className={inputClass} value={form.read_time} onChange={(e) => set("read_time", e.target.value)} placeholder="5 min read" />
        </div>
        <div>
          <label className={labelClass}>Status</label>
          <select className={inputClass} value={form.status} onChange={(e) => set("status", e.target.value as "draft" | "published")}>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </div>

      {error && <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">{error}</p>}

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="px-6 py-2.5 rounded-xl bg-[#4F8EF7] text-white font-semibold text-sm hover:bg-[#4F8EF7]/80 transition disabled:opacity-50"
        >
          {saving ? "Saving…" : postId ? "Update post" : "Create post"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin")}
          className="px-6 py-2.5 rounded-xl glass border border-white/10 text-white/50 text-sm hover:text-white transition"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
