import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Web Dev, AI & Mobile Insights | ElevenClicks",
  description:
    "Practical guides on web development costs, Ruby on Rails, AI automation, and mobile app development for Canadian businesses.",
  alternates: {
    canonical: "https://elevenclicks.com/blog",
  },
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

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://elevenclicks.com/blog",
  url: "https://elevenclicks.com/blog",
  name: "Blog — Web Dev, AI & Mobile Insights | ElevenClicks",
  description:
    "Practical guides on web development costs, Ruby on Rails, AI automation, and mobile app development for Canadian businesses.",
  isPartOf: { "@id": "https://elevenclicks.com/#website" },
  breadcrumb: { "@id": "https://elevenclicks.com/blog#breadcrumb" },
  inLanguage: "en-CA",
};

const posts = [
  {
    slug: "website-cost-canada-2025",
    title: "How Much Does a Website Cost in Canada? (2025 Pricing Guide)",
    excerpt:
      "A clear breakdown of website development costs — from $1,500 landing pages to $40,000+ custom web apps. What drives price and how to get value for your budget.",
    date: "March 15, 2025",
    readTime: "8 min read",
    category: "Web Development",
    color: "#4F8EF7",
  },
  {
    slug: "ruby-on-rails-vs-nodejs-2025",
    title: "Ruby on Rails vs Node.js in 2025: Which Backend for Your Project?",
    excerpt:
      "An honest comparison of Ruby on Rails and Node.js — when to use each, trade-offs in developer hiring, performance, and long-term cost of ownership.",
    date: "February 20, 2025",
    readTime: "10 min read",
    category: "Backend Development",
    color: "#E53E3E",
  },
  {
    slug: "ai-automation-small-business-canada",
    title: "AI Automation for Canadian Small Businesses: A 2025 Practical Guide",
    excerpt:
      "Practical AI automation that actually works for small businesses in Canada — real use cases, honest costs, and how to get started without wasting money.",
    date: "April 1, 2025",
    readTime: "9 min read",
    category: "AI Solutions",
    color: "#EC4899",
  },
];

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050510]" />
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(79,142,247,0.3) 40%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-semibold uppercase tracking-widest text-[#8B5CF6] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
              Blog &middot; Insights &amp; Guides
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Practical Guides for{" "}
              <span className="text-gradient">Canadian Businesses</span>
            </h1>
            <p className="text-lg text-white/55 max-w-2xl mx-auto">
              Honest advice on web development costs, technology choices, AI
              automation, and mobile apps — written by the team at ElevenClicks.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Post Grid */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.08}>
                <article className="group glass border border-white/8 rounded-3xl overflow-hidden flex flex-col h-full hover:border-white/15 transition-colors duration-300 hover:-translate-y-1 card-shine">
                  {/* Top accent line */}
                  <div
                    className="h-0.5 w-full shrink-0"
                    style={{
                      background: `linear-gradient(90deg, ${post.color}, transparent 70%)`,
                    }}
                  />

                  {/* Corner glow */}
                  <div
                    className="pointer-events-none absolute -bottom-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-20 transition-opacity duration-500 group-hover:opacity-40"
                    style={{
                      background: `radial-gradient(circle, ${post.color}, transparent 70%)`,
                    }}
                  />

                  <div className="relative flex flex-col flex-1 p-7">
                    {/* Category badge */}
                    <div className="mb-4">
                      <span
                        className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider"
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
                    <h2 className="text-lg font-bold text-white leading-snug mb-3 group-hover:text-white/90 transition-colors">
                      {post.title}
                    </h2>

                    {/* Divider */}
                    <div
                      className="h-px w-8 rounded-full mb-4 shrink-0"
                      style={{ background: post.color }}
                    />

                    {/* Excerpt */}
                    <p className="text-sm text-white/55 leading-relaxed flex-1 mb-6">
                      {post.excerpt}
                    </p>

                    {/* Footer: meta + CTA */}
                    <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/5">
                      <div className="flex items-center gap-3 text-xs text-white/35">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                        <span className="w-px h-3 bg-white/15" />
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group-hover:gap-2.5"
                        style={{ color: post.color }}
                        aria-label={`Read ${post.title}`}
                      >
                        Read Article
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
