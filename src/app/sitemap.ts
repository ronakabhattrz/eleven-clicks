import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/posts";

const BASE_URL = "https://elevenclicks.com";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPublishedPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL,                          lastModified: new Date("2026-05-28"), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/services`,            lastModified: new Date("2026-05-28"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/toronto`,             lastModified: new Date("2026-05-28"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/case-studies`,        lastModified: new Date("2026-05-28"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/maintenance`,                    lastModified: new Date("2026-05-28"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services/ruby-on-rails`,             lastModified: new Date("2026-05-28"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services/ai-automation`,             lastModified: new Date("2026-05-28"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services/web-app-development`,       lastModified: new Date("2026-05-28"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services/mobile-app-development`,    lastModified: new Date("2026-05-28"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services/nodejs-python`,             lastModified: new Date("2026-05-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/industries/healthcare`,              lastModified: new Date("2026-05-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/industries/ecommerce`,               lastModified: new Date("2026-05-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog/categories/web-development`,    lastModified: new Date("2026-05-28"), changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/categories/ai-solutions`,       lastModified: new Date("2026-05-28"), changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/categories/mobile-development`, lastModified: new Date("2026-05-28"), changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/categories/ruby-on-rails`,      lastModified: new Date("2026-05-28"), changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/categories/it-strategy`,              lastModified: new Date("2026-05-28"), changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE_URL}/resources/pipeda-checklist`,               lastModified: new Date("2026-05-28"), changeFrequency: "yearly",   priority: 0.8 },
    { url: `${BASE_URL}/about`,               lastModified: new Date("2026-05-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`,                lastModified: new Date("2026-05-28"), changeFrequency: "daily",   priority: 0.8 },
    { url: `${BASE_URL}/contact`,             lastModified: new Date("2026-05-28"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/privacy`,             lastModified: new Date("2026-05-28"), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE_URL}/terms`,               lastModified: new Date("2026-05-28"), changeFrequency: "yearly",  priority: 0.3 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updated_at || post.published_at),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
