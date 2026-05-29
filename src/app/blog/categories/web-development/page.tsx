import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { getPostsByCategory } from "@/lib/posts";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Web Development Articles for Canadian Businesses | ElevenClicks Blog",
  description: "Practical web development guides for Canadian small businesses — website costs, platform comparisons, and how-to guides from the ElevenClicks team in Ontario.",
  alternates: { canonical: "https://elevenclicks.com/blog/categories/web-development" },
};

export default async function WebDevCategoryPage() {
  const posts = await getPostsByCategory("Web Development");
  return (
    <CategoryPage
      category="Web Development"
      color="#4F8EF7"
      description="Practical guides on web development for Canadian small businesses — website costs, platform comparisons, and honest advice from Ontario's IT team."
      posts={posts}
      slug="web-development"
    />
  );
}

function CategoryPage({ category, color, description, posts, slug }: {
  category: string; color: string; description: string;
  posts: Awaited<ReturnType<typeof getPostsByCategory>>; slug: string;
}) {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050510]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ borderColor: `${color}30`, background: `${color}10`, color }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
            {category}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            {category} <span className="text-gradient">Articles</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">{description}</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-24 text-white/30">No posts yet — check back soon.</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}
                  className="group relative glass border border-white/8 rounded-3xl overflow-hidden flex flex-col hover:border-white/18 hover:-translate-y-1 transition-all duration-300">
                  <div className="h-0.5 w-full shrink-0" style={{ background: `linear-gradient(90deg, ${post.color}, transparent 70%)` }} />
                  <div className="flex flex-col flex-1 p-7">
                    <h2 className="text-[1.05rem] font-bold text-white leading-snug mb-3">{post.title}</h2>
                    <div className="h-px w-8 rounded-full mb-4 shrink-0" style={{ background: post.color }} />
                    <p className="text-sm text-white/50 leading-relaxed flex-1 mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/5">
                      <div className="flex items-center gap-3 text-xs text-white/30">
                        <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{new Date(post.published_at).toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" })}</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{post.read_time}</span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all" style={{ color: post.color }}>
                        Read <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          <div className="text-center mt-12">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors">
              ← All articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
