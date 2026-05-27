import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import { getPublishedPosts } from "@/lib/posts";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog — Web Dev, AI & Mobile Insights | ElevenClicks",
  description:
    "Practical guides on web development, Ruby on Rails, AI automation, and mobile apps for Canadian and North American businesses.",
  alternates: { canonical: "https://elevenclicks.com/blog" },
  openGraph: {
    url: "https://elevenclicks.com/blog",
    title: "Blog — Web Dev, AI & Mobile Insights | ElevenClicks",
    description:
      "Practical guides on web development, Ruby on Rails, AI automation, and mobile apps for Canadian and North American businesses.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://elevenclicks.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://elevenclicks.com/blog" },
  ],
};

const POSTS_PER_PAGE = 9;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const allPosts = await getPublishedPosts();
  const page = Math.max(1, parseInt(searchParams.page ?? "1", 10));
  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const posts = allPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050510]" />
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] pointer-events-none opacity-15"
          style={{ background: "radial-gradient(circle, #8B5CF6 0%, #4F8EF7 50%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-semibold uppercase tracking-widest text-[#8B5CF6] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
            Blog &middot; Insights &amp; Guides
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-5">
            Practical Guides for{" "}
            <span className="text-gradient">North American Businesses</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Honest advice on web development, AI automation, mobile apps, and technology strategy — written by the ElevenClicks team.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-24 text-white/30">No posts yet — check back soon.</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group relative glass border border-white/8 rounded-3xl overflow-hidden flex flex-col hover:border-white/18 hover:-translate-y-1 transition-all duration-300 card-shine"
                >
                  <div
                    className="h-0.5 w-full shrink-0"
                    style={{ background: `linear-gradient(90deg, ${post.color}, transparent 70%)` }}
                  />
                  <div
                    className="pointer-events-none absolute -bottom-20 -right-20 w-56 h-56 rounded-full blur-3xl opacity-0 group-hover:opacity-25 transition-opacity duration-500"
                    style={{ background: post.color }}
                  />
                  <div className="relative flex flex-col flex-1 p-7">
                    <div className="mb-4">
                      <span
                        className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest"
                        style={{
                          background: `${post.color}18`,
                          color: post.color,
                          border: `1px solid ${post.color}30`,
                        }}
                      >
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-[1.05rem] font-bold text-white leading-snug mb-3">
                      {post.title}
                    </h2>
                    <div className="h-px w-8 rounded-full mb-4 shrink-0" style={{ background: post.color }} />
                    <p className="text-sm text-white/50 leading-relaxed flex-1 mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/5">
                      <div className="flex items-center gap-3 text-xs text-white/30">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.published_at).toLocaleDateString("en-CA", {
                            year: "numeric", month: "short", day: "numeric",
                          })}
                        </span>
                        <span className="w-px h-3 bg-white/10" />
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3 h-3" />
                          {post.read_time}
                        </span>
                      </div>
                      <span
                        className="inline-flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all duration-200"
                        style={{ color: post.color }}
                      >
                        Read <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-14">
              {currentPage > 1 ? (
                <Link
                  href={`/blog?page=${currentPage - 1}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/10 text-sm text-white/60 hover:text-white transition"
                >
                  <ArrowLeft className="w-4 h-4" /> Previous
                </Link>
              ) : (
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/5 text-sm text-white/20 cursor-not-allowed">
                  <ArrowLeft className="w-4 h-4" /> Previous
                </span>
              )}

              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <Link
                    key={p}
                    href={`/blog?page=${p}`}
                    className={`w-9 h-9 rounded-lg text-sm font-semibold flex items-center justify-center transition ${
                      p === currentPage
                        ? "bg-[#4F8EF7] text-white"
                        : "glass border border-white/8 text-white/40 hover:text-white"
                    }`}
                  >
                    {p}
                  </Link>
                ))}
              </div>

              {currentPage < totalPages ? (
                <Link
                  href={`/blog?page=${currentPage + 1}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/10 text-sm text-white/60 hover:text-white transition"
                >
                  Next <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/5 text-sm text-white/20 cursor-not-allowed">
                  Next <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
