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
      <section className="bg-white pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
            Blog &middot; Insights &amp; Guides
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-[#0f0f0f] mb-5">
            Practical Guides for North American Businesses
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Honest advice on web development, AI automation, mobile apps, and technology strategy — written by the ElevenClicks team.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-gray-50 pb-20 pt-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-24 text-gray-400">No posts yet — check back soon.</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white border border-gray-100 shadow-sm hover:shadow-md rounded-3xl overflow-hidden flex flex-col hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="h-0.5 w-full shrink-0"
                    style={{ background: `linear-gradient(90deg, ${post.color}, transparent 70%)` }}
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
                    <h2 className="text-[1.05rem] font-bold text-gray-900 leading-snug mb-3">
                      {post.title}
                    </h2>
                    <div className="h-px w-8 rounded-full mb-4 shrink-0" style={{ background: post.color }} />
                    <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between gap-3 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.published_at).toLocaleDateString("en-CA", {
                            year: "numeric", month: "short", day: "numeric",
                          })}
                        </span>
                        <span className="w-px h-3 bg-gray-200" />
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:text-gray-900 hover:border-gray-300 transition"
                >
                  <ArrowLeft className="w-4 h-4" /> Previous
                </Link>
              ) : (
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-100 text-sm text-gray-300 cursor-not-allowed">
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
                        ? "bg-[#4F46E5] text-white"
                        : "border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300"
                    }`}
                  >
                    {p}
                  </Link>
                ))}
              </div>

              {currentPage < totalPages ? (
                <Link
                  href={`/blog?page=${currentPage + 1}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:text-gray-900 hover:border-gray-300 transition"
                >
                  Next <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-100 text-sm text-gray-300 cursor-not-allowed">
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
