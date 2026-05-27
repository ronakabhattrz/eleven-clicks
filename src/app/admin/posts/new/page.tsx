import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PostForm from "@/components/admin/PostForm";

export default function NewPostPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="mx-auto max-w-3xl">
        <Link href="/admin" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to posts
        </Link>
        <h1 className="text-2xl font-bold text-white mb-8">New Post</h1>
        <PostForm />
      </div>
    </div>
  );
}
