import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { getPostBySlug, getPublishedPosts } from "@/lib/posts";

const categorySlug: Record<string, string> = {
  "Web Development":      "web-development",
  "Ruby on Rails":        "ruby-on-rails",
  "AI Solutions":         "ai-solutions",
  "Mobile Development":   "mobile-development",
  "Node.js & Python":     "nodejs-python",
  "IT & Digital Strategy":"it-strategy",
};

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.excerpt,
    alternates: { canonical: post.canonical_url },
    openGraph: {
      url: post.canonical_url,
      title: post.meta_title || post.title,
      description: post.meta_description || post.excerpt,
      type: "article",
      publishedTime: post.published_at,
      authors: ["https://elevenclicks.com"],
      siteName: "ElevenClicks",
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta_title || post.title,
      description: post.meta_description || post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.published_at,
    dateModified: post.updated_at || post.published_at,
    author: {
      "@type": "Organization",
      name: "ElevenClicks",
      url: "https://elevenclicks.com",
    },
    publisher: {
      "@type": "Organization",
      name: "ElevenClicks",
      url: "https://elevenclicks.com",
      logo: {
        "@type": "ImageObject",
        url: "https://elevenclicks.com/logo.png",
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": post.canonical_url },
    articleSection: post.category,
    keywords: `${post.category}, web development, Ontario, Canada, IT company`,
    inLanguage: "en-CA",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://elevenclicks.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://elevenclicks.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: post.canonical_url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050510]" />
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[140px] pointer-events-none opacity-15"
          style={{ background: `radial-gradient(circle, ${post.color} 0%, transparent 70%)` }}
        />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>

          <div className="mb-5">
            <Link
              href={`/blog/categories/${categorySlug[post.category] ?? "web-development"}`}
              className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest hover:opacity-80 transition-opacity"
              style={{
                background: `${post.color}18`,
                color: post.color,
                border: `1px solid ${post.color}30`,
              }}
            >
              {post.category}
            </Link>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-5">
            {post.title}
          </h1>

          <div
            className="h-1 w-16 rounded-full mb-6"
            style={{ background: `linear-gradient(90deg, ${post.color}, transparent)` }}
          />

          <p className="text-lg text-white/55 leading-relaxed mb-8">{post.excerpt}</p>

          <div className="flex flex-wrap items-center gap-5 text-sm text-white/35 pb-8 border-b border-white/8">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.published_at).toLocaleDateString("en-CA", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.read_time}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div
            className="article-prose"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div
            className="mt-16 rounded-3xl glass border overflow-hidden"
            style={{ borderColor: `${post.color}25` }}
          >
            <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${post.color}, transparent 60%)` }} />
            <div className="p-8 text-center">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-5"
                style={{ background: `${post.color}18`, color: post.color, border: `1px solid ${post.color}30` }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: post.color }} />
                Free Consultation
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                Working on something similar?
              </h3>
              <p className="text-white/50 text-sm mb-6 max-w-md mx-auto leading-relaxed">
                ElevenClicks helps Canadian businesses build {post.category.toLowerCase()} solutions that actually work. Book a free 30-minute call — no pitch, just honest advice.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://calendly.com/elevenclicks-info/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:opacity-90"
                  style={{ background: post.color }}
                >
                  Book a Free 30-Min Call
                </a>
                <a
                  href="mailto:info@elevenclicks.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white/60 hover:text-white transition-colors glass border border-white/10"
                >
                  info@elevenclicks.com
                </a>
              </div>
              <p className="text-white/30 text-xs mt-4">Ontario-based · Canadian timezone · No offshore handoffs</p>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
