import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { createPost, getPublishedPosts } from "@/lib/posts";
import { slugify, estimateReadTime } from "@/lib/utils";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const CATEGORIES = [
  {
    name: "Web Development",
    color: "#4F8EF7",
    focus: "Next.js, React, Tailwind CSS, Core Web Vitals, performance, modern frontend tooling",
  },
  {
    name: "Ruby on Rails",
    color: "#E53E3E",
    focus: "Rails 8, Hotwire, Turbo, Solid Queue, Kamal deployment, performance patterns",
  },
  {
    name: "AI Solutions",
    color: "#EC4899",
    focus: "LLMs, RAG, AI agents, Claude, GPT, automation, AI for business, PIPEDA compliance",
  },
  {
    name: "Mobile Development",
    color: "#8B5CF6",
    focus: "React Native, Flutter, iOS, Android, app store optimization, mobile UX trends",
  },
  {
    name: "Node.js & Python",
    color: "#68A063",
    focus: "Node.js 22, FastAPI, Django, TypeScript backends, REST APIs, serverless",
  },
  {
    name: "IT & Digital Strategy",
    color: "#06B6D4",
    focus: "cloud migration, cybersecurity, digital transformation, SaaS vs custom software, IT budgeting for Canadian SMBs",
  },
];

async function generateArticle(category: { name: string; color: string; focus: string }, existingSlugs: Set<string>) {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString("en-US", { month: "long" });

  const msg = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 2500,
    messages: [
      {
        role: "user",
        content: `You are a senior technical writer for ElevenClicks, an Ontario-based IT company serving businesses across Canada and North America. We specialize in web development, mobile apps, Ruby on Rails, AI solutions, and Node.js/Python.

Today is ${currentMonth} ${currentYear}. Write a fresh, timely blog article for the category: **${category.name}**

Topic focus areas: ${category.focus}

Instructions:
- Pick ONE specific, trending topic in this category that is highly relevant right now in ${currentYear}
- Write 750-900 words of genuinely useful, practical content — no fluff
- Target North American businesses and developers
- Use real, current technology names, versions, and tools
- Use H2 and H3 headings for structure
- Include at least one practical list (ul or ol)
- Write naturally — not like a template
- End with a short CTA paragraph mentioning ElevenClicks can help

Output ONLY a valid JSON object (no markdown fences, no extra text):
{
  "title": "specific, engaging article title",
  "excerpt": "2 compelling sentences for SEO meta description (max 155 chars total)",
  "content": "full article HTML using only <p>, <h2>, <h3>, <ul>, <ol>, <li>, <strong>, <em>, <img> tags",
  "meta_title": "SEO title max 60 chars with primary keyword",
  "meta_description": "SEO meta description max 155 chars",
  "read_time": "X min read"
}`,
      },
    ],
  });

  const raw = (msg.content[0] as { type: string; text: string }).text.trim();

  // Strip markdown fences if model adds them despite instructions
  const cleaned = raw.replace(/^```json\s*/i, "").replace(/\s*```$/i, "").trim();
  const parsed = JSON.parse(cleaned);

  let slug = slugify(parsed.title);
  // Ensure unique slug
  if (existingSlugs.has(slug)) {
    slug = `${slug}-${currentYear}`;
  }

  return { parsed, slug };
}

export async function POST(req: NextRequest) {
  // Auth: require admin session cookie
  const session = req.cookies.get("admin_session");
  if (!session || session.value !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Get existing slugs to avoid duplicates
  const existing = await getPublishedPosts();
  const existingSlugs = new Set(existing.map((p) => p.slug));

  // Generate all categories concurrently
  const results = await Promise.allSettled(
    CATEGORIES.map(async (cat) => {
      const { parsed, slug } = await generateArticle(cat, existingSlugs);
      const readTime = parsed.read_time || estimateReadTime(parsed.content);
      const post = await createPost({
        title: parsed.title,
        slug,
        excerpt: parsed.excerpt,
        content: parsed.content,
        category: cat.name,
        color: cat.color,
        meta_title: parsed.meta_title || parsed.title.slice(0, 60),
        meta_description: parsed.meta_description || parsed.excerpt.slice(0, 155),
        canonical_url: `https://elevenclicks.com/blog/${slug}`,
        status: "published",
        published_at: new Date().toISOString(),
        read_time: readTime,
        author: "ElevenClicks Team",
      });
      return { category: cat.name, title: parsed.title, ok: !!post };
    })
  );

  const summary = results.map((r) =>
    r.status === "fulfilled"
      ? r.value
      : { category: "unknown", title: "error", ok: false }
  );

  const created = summary.filter((r) => r.ok).length;
  return NextResponse.json({ created, total: CATEGORIES.length, articles: summary });
}
