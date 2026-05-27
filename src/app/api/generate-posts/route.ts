import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { createPost } from "@/lib/posts";
import { slugify, estimateReadTime } from "@/lib/utils";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const TOPIC_POOL = [
  { category: "Web Development", color: "#4F8EF7", topics: [
    "Next.js 15 features every developer should know",
    "How to improve Core Web Vitals for a Canadian business website",
    "React Server Components explained simply",
    "When to use a SaaS platform vs custom web development",
    "Website performance optimization checklist for 2025",
    "Progressive Web Apps vs native mobile apps",
    "API-first development: why it matters for growing businesses",
    "How to choose the right tech stack for your web project",
    "SEO for developers: technical fundamentals that move rankings",
    "Headless CMS vs traditional CMS: when each makes sense",
  ]},
  { category: "Ruby on Rails", color: "#E53E3E", topics: [
    "Rails 8: what changed and why it matters",
    "Building a SaaS MVP with Ruby on Rails in 2025",
    "Active Record performance: N+1 queries and how to fix them",
    "Solid Queue vs Sidekiq: background jobs in Rails 8",
    "Rails API-only mode vs full stack: choosing the right approach",
    "How Shopify scaled to billions on Ruby on Rails",
    "Deploying a Rails app to Heroku vs Fly.io vs Kamal",
    "Testing strategies for Ruby on Rails applications",
  ]},
  { category: "AI Solutions", color: "#EC4899", topics: [
    "AI chatbots for small business: real ROI in 2025",
    "What is RAG and how can it help your business",
    "OpenAI vs Anthropic Claude: which model is right for your app",
    "How to automate customer support with AI for under $5,000",
    "AI document processing: extracting data from PDFs automatically",
    "Building a custom AI assistant for your internal knowledge base",
    "PIPEDA and AI: what Canadian businesses need to know",
    "AI automation case studies from Ontario small businesses",
    "Prompt engineering best practices for business applications",
    "Reducing manual data entry with AI extraction pipelines",
  ]},
  { category: "Mobile Development", color: "#8B5CF6", topics: [
    "Flutter vs React Native in 2025: the honest comparison",
    "Kotlin Jetpack Compose: building modern Android UIs",
    "How to get your app approved on the App Store the first time",
    "Mobile app performance: tips every developer needs",
    "Push notifications best practices for higher engagement",
    "Building offline-first mobile apps with local storage",
    "Monetization strategies for mobile apps in Canada",
  ]},
  { category: "Node.js & Python", color: "#68A063", topics: [
    "Node.js 22: new features worth using today",
    "FastAPI vs Django REST Framework: picking the right Python backend",
    "Building a REST API with Node.js and TypeScript in 2025",
    "Python automation scripts that save 10+ hours per week",
    "WebSockets with Node.js: real-time features for your app",
    "SQLAlchemy ORM patterns for clean Python backends",
    "Microservices with Node.js: when it's worth the complexity",
  ]},
  { category: "IT & Digital Strategy", color: "#06B6D4", topics: [
    "How Canadian small businesses can compete with AI tools",
    "Digital transformation roadmap for Ontario businesses",
    "When to hire an IT agency vs build an in-house team",
    "Website maintenance: what happens when you ignore it",
    "Cloud migration guide for Canadian small businesses",
    "Cybersecurity basics every Ontario business owner needs to know",
    "How to brief an IT agency for the best results",
    "The real cost of a slow website for Canadian businesses",
    "SaaS vs custom software: making the right choice for your business",
    "IT budget planning for growing Canadian companies",
  ]},
];

async function generatePost(topic: string, category: string) {
  const msg = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 2000,
    messages: [{
      role: "user",
      content: `You are a senior developer and technical writer for ElevenClicks, an Ontario-based IT company specializing in web development, mobile apps, Ruby on Rails, AI solutions, and Node.js/Python for Canadian businesses.

Write a practical, well-researched blog article on this topic:
"${topic}"

Requirements:
- 700-900 words of real, useful content (no fluff)
- Target Canadian businesses and developers
- Category: ${category}
- Natural keyword usage for SEO
- Use H2 and H3 headings
- Include 1-2 practical lists (ul)
- End with a brief CTA mentioning ElevenClicks can help

Output ONLY a JSON object (no markdown, no extra text) with these exact fields:
{
  "title": "exact article title",
  "excerpt": "2-sentence compelling description (for SEO meta description, max 155 chars)",
  "content": "full article HTML using <p>, <h2>, <h3>, <ul>, <li>, <strong> tags only",
  "meta_title": "SEO title (max 60 chars, include a keyword)",
  "meta_description": "SEO meta description (max 155 chars)",
  "read_time": "X min read"
}`
    }],
  });

  const raw = (msg.content[0] as { type: string; text: string }).text.trim();
  const parsed = JSON.parse(raw);
  return parsed;
}

function verifyCronSecret(req: NextRequest): boolean {
  // Vercel cron passes Authorization: Bearer <CRON_SECRET>
  const auth = req.headers.get("authorization");
  if (auth === `Bearer ${process.env.CRON_SECRET}`) return true;
  // Also allow x-cron-secret for manual POST triggers
  const legacy = req.headers.get("x-cron-secret");
  if (legacy === process.env.CRON_SECRET) return true;
  return false;
}

export async function GET(req: NextRequest) {
  return runGeneration(req);
}

export async function POST(req: NextRequest) {
  return runGeneration(req);
}

async function runGeneration(req: NextRequest) {
  if (!verifyCronSecret(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const count = 12; // 12 posts per run
  const results: { title: string; ok: boolean }[] = [];

  // Pick diverse topics across all categories
  const selected: { topic: string; category: string; color: string }[] = [];
  const shuffledPool = [...TOPIC_POOL].sort(() => Math.random() - 0.5);

  for (const bucket of shuffledPool) {
    const shuffledTopics = [...bucket.topics].sort(() => Math.random() - 0.5);
    const pick = Math.ceil(count / TOPIC_POOL.length);
    for (let i = 0; i < pick && selected.length < count; i++) {
      if (shuffledTopics[i]) {
        selected.push({ topic: shuffledTopics[i], category: bucket.category, color: bucket.color });
      }
    }
  }

  for (const { topic, category, color } of selected.slice(0, count)) {
    try {
      const generated = await generatePost(topic, category);
      const slug = slugify(generated.title);
      const readTime = generated.read_time || estimateReadTime(generated.content);

      const post = await createPost({
        title: generated.title,
        slug,
        excerpt: generated.excerpt,
        content: generated.content,
        category,
        color,
        meta_title: generated.meta_title || generated.title.slice(0, 60),
        meta_description: generated.meta_description || generated.excerpt.slice(0, 155),
        canonical_url: `https://elevenclicks.com/blog/${slug}`,
        status: "published",
        published_at: new Date().toISOString(),
        read_time: readTime,
        author: "ElevenClicks Team",
      });

      results.push({ title: generated.title, ok: !!post });
    } catch (err) {
      console.error("Failed to generate post for topic:", topic, err);
      results.push({ title: topic, ok: false });
    }
  }

  const successful = results.filter((r) => r.ok).length;
  return NextResponse.json({ generated: successful, total: count, results });
}
