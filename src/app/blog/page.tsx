import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { getPublishedPosts } from "@/lib/posts";

export const revalidate = 3600; // revalidate every hour

export const metadata: Metadata = {
  title: "Blog — Web Dev, AI & Mobile Insights | ElevenClicks",
  description:
    "Practical guides on web development costs, Ruby on Rails, AI automation, and mobile app development for Canadian businesses.",
  alternates: { canonical: "https://elevenclicks.com/blog" },
  openGraph: {
    url: "https://elevenclicks.com/blog",
    title: "Blog — Web Dev, AI & Mobile Insights | ElevenClicks",
    description:
      "Practical guides on web development costs, Ruby on Rails, AI automation, and mobile app development for Canadian businesses.",
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

export default async function BlogPage() {
  const dbPosts = await getPublishedPosts();

  // Fallback static posts shown when DB is empty (before first AI run)
  const staticPosts = [
    {
      slug: "website-cost-canada-2025",
      title: "How Much Does a Website Cost in Canada? (2025 Pricing Guide)",
      excerpt:
        "A clear breakdown of website development costs — from $1,500 landing pages to $40,000+ custom web apps. What drives price and how to get value for your budget.",
      published_at: "2025-03-15",
      read_time: "8 min read",
      category: "Web Development",
      color: "#4F8EF7",
    },
    {
      slug: "ruby-on-rails-vs-nodejs-2025",
      title: "Ruby on Rails vs Node.js in 2025: Which Backend for Your Project?",
      excerpt:
        "An honest comparison of Ruby on Rails and Node.js — when to use each, trade-offs in developer hiring, performance, and long-term cost of ownership.",
      published_at: "2025-02-20",
      read_time: "10 min read",
      category: "Backend Development",
      color: "#E53E3E",
    },
    {
      slug: "ai-automation-small-business-canada",
      title: "AI Automation for Canadian Small Businesses: A 2025 Practical Guide",
      excerpt:
        "Practical AI automation that actually works for small businesses in Canada — real use cases, honest costs, and how to get started without wasting money.",
      published_at: "2025-04-01",
      read_time: "9 min read",
      category: "AI Solutions",
      color: "#EC4899",
    },
  ];

  const posts = dbPosts.length > 0 ? dbPosts : staticPosts;
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
          style={{
            background:
              "radial-gradient(circle, #8B5CF6 0%, #4F8EF7 50%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-semibold uppercase tracking-widest text-[#8B5CF6] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
            Blog &middot; Insights &amp; Guides
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-5">
            Practical Guides for{" "}
            <span className="text-gradient">Canadian Businesses</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Honest advice on web development costs, technology choices, AI
            automation, and mobile apps — written by the ElevenClicks team.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative glass border border-white/8 rounded-3xl overflow-hidden flex flex-col hover:border-white/18 hover:-translate-y-1 transition-all duration-300 card-shine"
              >
                {/* Top accent */}
                <div
                  className="h-0.5 w-full shrink-0"
                  style={{
                    background: `linear-gradient(90deg, ${post.color}, transparent 70%)`,
                  }}
                />

                {/* Corner glow */}
                <div
                  className="pointer-events-none absolute -bottom-20 -right-20 w-56 h-56 rounded-full blur-3xl opacity-0 group-hover:opacity-25 transition-opacity duration-500"
                  style={{ background: post.color }}
                />

                <div className="relative flex flex-col flex-1 p-7">
                  {/* Category */}
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

                  {/* Title */}
                  <h2 className="text-[1.05rem] font-bold text-white leading-snug mb-3">
                    {post.title}
                  </h2>

                  {/* Divider */}
                  <div
                    className="h-px w-8 rounded-full mb-4 shrink-0"
                    style={{ background: post.color }}
                  />

                  {/* Excerpt */}
                  <p className="text-sm text-white/50 leading-relaxed flex-1 mb-6">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-3 text-xs text-white/30">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.published_at).toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" })}
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
                      Read
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
