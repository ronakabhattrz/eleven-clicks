import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import AdminPostRow from "@/components/admin/AdminPostRow";
import LogoutButton from "@/components/admin/LogoutButton";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Blog CMS</h1>
            <p className="text-sm text-white/40 mt-1">{posts.length} posts total</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/admin/posts/new"
              className="px-4 py-2 rounded-xl bg-[#4F8EF7] text-white text-sm font-semibold hover:bg-[#4F8EF7]/80 transition"
            >
              + New Post
            </Link>
            <LogoutButton />
          </div>
        </div>

        {/* Table */}
        <div className="glass border border-white/8 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-[1fr_140px_120px_100px_100px] gap-4 px-5 py-3 border-b border-white/8 text-xs font-semibold uppercase tracking-widest text-white/30">
            <span>Title</span>
            <span>Category</span>
            <span>Date</span>
            <span>Status</span>
            <span className="text-right">Actions</span>
          </div>
          {posts.length === 0 ? (
            <div className="px-5 py-12 text-center text-white/30 text-sm">
              No posts yet. Click &quot;New Post&quot; or wait for the AI agent to run.
            </div>
          ) : (
            posts.map((post) => <AdminPostRow key={post.id} post={post} />)
          )}
        </div>
      </div>
    </div>
  );
}
