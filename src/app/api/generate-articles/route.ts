import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { createPost, getPublishedPosts } from "@/lib/posts";
import { slugify, estimateReadTime } from "@/lib/utils";

export const maxDuration = 300; // 5 min — works on Vercel Pro

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const CATEGORY_TOPICS: Record<string, { color: string; topics: string[] }> = {
  "Web Development": {
    color: "#4F8EF7",
    topics: [
      "Next.js 15 App Router: what changed and how to migrate your project",
      "React 19 new features: Actions, useOptimistic, and the compiler",
      "Tailwind CSS v4: the new engine and what it means for your workflow",
      "Core Web Vitals in 2026: what Google is actually measuring now",
      "Bun vs Node.js in production: an honest benchmark for 2026",
      "Edge rendering vs server rendering: when each approach wins",
      "TypeScript 5.x features every web developer should know",
      "Building performant e-commerce sites with Next.js and Supabase",
      "Web Components in 2026: are they finally worth using?",
      "Progressive Web Apps vs native apps: the 2026 decision guide",
      "Vite 6 and the future of frontend build tools",
      "Server-sent events vs WebSockets: choosing real-time for your app",
      "Accessibility in 2026: WCAG 3.0 and what Canadian businesses must do",
      "API design best practices for modern Next.js applications",
      "Monorepos with Turborepo: when they make sense for growing teams",
    ],
  },
  "Ruby on Rails": {
    color: "#E53E3E",
    topics: [
      "Rails 8 release: Solid Queue, Solid Cache, and Kamal 2 explained",
      "Hotwire and Turbo 8 in 2026: building fast SPAs without JavaScript frameworks",
      "Kamal 2 deployment: self-hosting Rails apps on a $5 VPS in 2026",
      "Solid Queue vs Sidekiq: background job processing in Rails 8",
      "Rails authentication with Devise vs the new built-in generator",
      "Active Record performance: eliminating N+1 queries at scale",
      "Building a multi-tenant SaaS with Ruby on Rails in 2026",
      "Rails API mode with Next.js frontend: the modern full-stack setup",
      "Testing Rails apps in 2026: RSpec, factory_bot, and system tests",
      "Scaling Rails: from a startup to 100k users without rewriting",
      "ActionCable and Turbo Streams: real-time features the Rails way",
      "Ruby 3.4 performance improvements every Rails developer should know",
      "From Rails 7 to Rails 8: a practical upgrade guide",
      "Stimulus 3: progressive JavaScript enhancement for Rails views",
      "Deploying Rails 8 with Docker and Kamal on DigitalOcean",
    ],
  },
  "AI Solutions": {
    color: "#EC4899",
    topics: [
      "Claude 3.7 vs GPT-4.5 in 2026: which AI is right for your business app",
      "Building a RAG chatbot with your company's documents in 2026",
      "MCP (Model Context Protocol): what it is and why developers care",
      "AI agents in production: what actually works for small business in 2026",
      "PIPEDA and AI compliance: what Canadian businesses must know in 2026",
      "Reducing customer support costs 80% with AI — a real case study",
      "Fine-tuning vs RAG vs prompting: choosing the right AI strategy",
      "AI document processing: extracting data from invoices and PDFs automatically",
      "Building an AI-powered internal knowledge base for your team",
      "Voice AI for business: call handling and booking automation in 2026",
      "AI code review tools in 2026: GitHub Copilot, Cursor, and Claude compared",
      "Anthropic Claude API: a practical getting-started guide for developers",
      "The true cost of AI automation for a 10-person Ontario business",
      "AI search optimization (GEO): getting your content found by ChatGPT and Perplexity",
      "Agentic workflows: how to automate multi-step business processes with AI",
    ],
  },
  "Mobile Development": {
    color: "#8B5CF6",
    topics: [
      "Expo SDK 52 in 2026: the easiest way to build React Native apps",
      "React Native New Architecture: what changed and how to upgrade",
      "Flutter 3.27 vs React Native in 2026: the honest comparison",
      "App Store Optimization in 2026: getting discovered on iOS and Android",
      "Building offline-first mobile apps with WatermelonDB and SQLite",
      "Push notification best practices that actually improve engagement in 2026",
      "Mobile app security: protecting user data in iOS and Android apps",
      "Monetizing your mobile app in Canada: subscriptions vs one-time purchase",
      "Deep linking and universal links: connecting web and mobile in 2026",
      "React Native performance optimization: tips from real production apps",
      "SwiftUI vs UIKit in 2026: which to use for new iOS projects",
      "Kotlin Jetpack Compose: building modern Android UIs in 2026",
      "Cross-platform vs native: making the right choice for your app budget",
      "In-app purchases with RevenueCat: the fastest way to monetize mobile",
      "TestFlight and Firebase App Distribution: mobile beta testing in 2026",
    ],
  },
  "Node.js & Python": {
    color: "#68A063",
    topics: [
      "Node.js 22 LTS: new features and what to use in production today",
      "Bun 1.x in 2026: is it ready to replace Node.js for your backend?",
      "FastAPI vs Django REST Framework: choosing the right Python backend in 2026",
      "Deno 2 for backend development: a practical assessment for 2026",
      "Building a REST API with Hono.js and TypeScript on Cloudflare Workers",
      "uv: the Python package manager that makes pip feel ancient",
      "tRPC in 2026: end-to-end type safety for Next.js and Node backends",
      "Python async with asyncio: writing high-performance backend services",
      "Prisma ORM vs Drizzle ORM: the 2026 comparison for TypeScript developers",
      "WebSockets with Node.js and Socket.io: building real-time features in 2026",
      "Serverless Node.js on Vercel vs AWS Lambda: costs and trade-offs",
      "SQLAlchemy 2.0 patterns for clean, maintainable Python backends",
      "Building a type-safe full-stack app with T3 Stack in 2026",
      "Python data pipelines: automating ETL with Prefect and Polars",
      "Microservices with Node.js: when to break up the monolith",
    ],
  },
  "IT & Digital Strategy": {
    color: "#06B6D4",
    topics: [
      "Digital transformation roadmap for Ontario businesses in 2026",
      "Cloud costs in 2026: how Canadian SMBs are cutting AWS and Azure bills",
      "Cybersecurity basics every Ontario business owner needs in 2026",
      "SaaS vs custom software in 2026: making the right $50k decision",
      "When to hire an IT agency vs build an in-house dev team in Canada",
      "IT budget planning for Canadian businesses: what to spend in 2026",
      "The real cost of a slow website: data from 2025 Canadian studies",
      "How North American small businesses are competing with AI tools",
      "Website accessibility compliance in Canada: AODA and WCAG 2.2",
      "Zero-trust security for small businesses: practical steps for 2026",
      "ERP vs custom software: a decision guide for growing Canadian companies",
      "Data privacy in Canada: what PIPEDA means for your customer data",
      "How to brief an IT agency and actually get what you want",
      "Website maintenance plans: what happens when you skip them",
      "Building a tech stack for a Canadian SaaS startup in 2026",
    ],
  },
};

async function generateArticle(topic: string, category: string): Promise<{
  title: string; slug: string; excerpt: string; content: string;
  meta_title: string; meta_description: string; read_time: string;
}> {
  const msg = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 2500,
    messages: [{
      role: "user",
      content: `You are a senior technical writer for ElevenClicks, an Ontario-based IT company serving businesses across Canada and North America.

Write a practical blog article on this exact topic for 2026:
"${topic}"

Category: ${category}

Requirements:
- 800-1000 words of genuinely useful, current content — no fluff, no padding
- Reference real tools, versions, and technologies relevant to 2026
- Target Canadian and North American businesses and developers
- Use H2 and H3 headings to structure the article clearly
- Include at least one practical bulleted or numbered list
- End with a short CTA paragraph mentioning ElevenClicks can help
- Write naturally and with authority, not like a generic template

Output ONLY a valid JSON object — no markdown fences, no extra text before or after:
{
  "title": "specific engaging title for this article",
  "excerpt": "2 compelling sentences, max 155 chars total",
  "content": "full HTML using only <p><h2><h3><ul><ol><li><strong><em> tags",
  "meta_title": "SEO title max 60 chars with primary keyword",
  "meta_description": "SEO meta description max 155 chars",
  "read_time": "X min read"
}`,
    }],
  });

  const raw = (msg.content[0] as { type: string; text: string }).text.trim();
  const cleaned = raw.replace(/^```json\s*/i, "").replace(/\s*```$/i, "").trim();
  return JSON.parse(cleaned);
}

export async function POST(req: NextRequest) {
  const session = req.cookies.get("admin_session");
  if (!session || session.value !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const categoryName = body.category as string | undefined;

  // Validate category
  const catData = categoryName ? CATEGORY_TOPICS[categoryName] : null;
  if (!catData) {
    return NextResponse.json(
      { error: "Invalid category", valid: Object.keys(CATEGORY_TOPICS) },
      { status: 400 }
    );
  }

  // Get existing slugs to avoid duplicates
  const existing = await getPublishedPosts();
  const existingSlugs = new Set(existing.map((p) => p.slug));

  // Shuffle topics and pick 10
  const shuffled = [...catData.topics].sort(() => Math.random() - 0.5).slice(0, 10);

  // Generate all 10 articles for this category concurrently
  const results = await Promise.allSettled(
    shuffled.map(async (topic) => {
      const parsed = await generateArticle(topic, categoryName!);
      let slug = slugify(parsed.title);
      if (existingSlugs.has(slug)) slug = `${slug}-2026`;
      existingSlugs.add(slug); // track in-flight slugs too

      const readTime = parsed.read_time || estimateReadTime(parsed.content);
      const post = await createPost({
        title: parsed.title,
        slug,
        excerpt: parsed.excerpt,
        content: parsed.content,
        category: categoryName!,
        color: catData.color,
        meta_title: parsed.meta_title || parsed.title.slice(0, 60),
        meta_description: parsed.meta_description || parsed.excerpt.slice(0, 155),
        canonical_url: `https://elevenclicks.com/blog/${slug}`,
        status: "published",
        published_at: new Date().toISOString(),
        read_time: readTime,
        author: "ElevenClicks Team",
      });
      return { topic, title: parsed.title, ok: !!post };
    })
  );

  const articles = results.map((r) =>
    r.status === "fulfilled" ? r.value : { topic: "unknown", title: "error", ok: false }
  );
  const created = articles.filter((a) => a.ok).length;

  return NextResponse.json({ category: categoryName, created, total: shuffled.length, articles });
}
