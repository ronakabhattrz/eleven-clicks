import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { getPostBySlug, getPublishedPosts } from "@/lib/posts";

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
      <section className="bg-white pt-32 pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>

          <div className="mb-5">
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

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0f0f0f] leading-tight mb-5">
            {post.title}
          </h1>

          <div
            className="h-1 w-16 rounded-full mb-6"
            style={{ background: `linear-gradient(90deg, ${post.color}, transparent)` }}
          />

          <p className="text-lg text-gray-600 leading-relaxed mb-8">{post.excerpt}</p>

          <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400 pb-8 border-b border-gray-100">
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
      <section className="bg-white pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div
            className="article-prose"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-16 p-8 rounded-3xl bg-[#4F46E5] text-white text-center">
            <div className="w-10 h-0.5 rounded-full mx-auto mb-5 bg-indigo-300" />
            <h3 className="text-xl font-bold mb-3">
              Ready to work with ElevenClicks?
            </h3>
            <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto">
              We help businesses across Canada and North America build websites, apps, and AI solutions that actually work.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-white text-[#4F46E5] hover:bg-indigo-50 transition-colors"
            >
              Get a free consultation
            </Link>
          </div>

          <div className="mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition-colors"
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
