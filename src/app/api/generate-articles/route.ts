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
      "How much does a custom website cost in Canada in 2026? A complete guide for small businesses",
      "WordPress vs custom web development: which is right for your Canadian business?",
      "5 signs your business website is losing you customers (and how to fix them)",
      "How to choose a web development agency in Ontario: 8 questions to ask first",
      "Shopify vs custom e-commerce: making the right choice for your Canadian store",
      "What does a web development project actually look like? A timeline for business owners",
      "How a fast website increases revenue: what the data says for Canadian SMBs",
      "What is a web app and does your business need one? A plain-English guide",
      "The hidden costs of a cheap website: what Ontario businesses learn the hard way",
      "How long does it take to build a website? A realistic timeline for Canadian businesses",
      "Website redesign vs rebuild: which does your business actually need?",
      "Core Web Vitals in 2026: why Google penalizes slow Canadian websites and how to fix it",
      "React vs WordPress for your business: an honest comparison for non-technical founders",
      "How much does website maintenance cost in Canada? What you should expect to pay",
      "SEO-ready website development: what it means and why it matters from day one",
    ],
  },
  "Ruby on Rails": {
    color: "#E53E3E",
    topics: [
      "What is Ruby on Rails and why do successful startups choose it?",
      "Ruby on Rails vs Node.js: which backend is right for your Canadian startup in 2026?",
      "How much does a custom Rails application cost to build in Canada?",
      "When to choose Ruby on Rails for your SaaS product: a founder's guide",
      "Upgrading a legacy Rails application: costs, timelines, and what to expect",
      "Ruby on Rails for e-commerce: building custom stores that outperform Shopify",
      "How ElevenClicks builds multi-tenant SaaS platforms with Ruby on Rails",
      "Rails vs Django: which framework should your Canadian business choose?",
      "What is a Rails API and why does your mobile app need one?",
      "Building a marketplace platform on Rails: lessons from real projects",
      "Rails 8 for business owners: what the new version means for your project",
      "How to hire a Ruby on Rails developer in Canada: what to look for",
      "Ruby on Rails security: what your developer should be doing to protect your data",
      "Custom CMS vs WordPress: why growing Canadian businesses choose Rails",
      "From idea to launched Rails app: a realistic project guide for non-technical founders",
    ],
  },
  "AI Solutions": {
    color: "#EC4899",
    topics: [
      "AI chatbots for Canadian small businesses: costs, benefits, and what to expect in 2026",
      "How to reduce customer support costs by 60% with AI automation",
      "PIPEDA and AI compliance: what Canadian businesses must know before deploying AI",
      "The true cost of AI automation for a 10-person Ontario business",
      "5 business processes every Canadian SMB should automate with AI in 2026",
      "AI for Canadian restaurants: automating bookings, orders, and customer service",
      "How to add an AI chatbot to your website without a tech team",
      "AI vs hiring: when automation makes more financial sense for Canadian businesses",
      "What is a RAG chatbot and how can it answer questions about your business?",
      "AI document processing: how Ontario businesses are eliminating manual data entry",
      "Voice AI for Canadian businesses: automating phone calls and appointment booking",
      "How ElevenClicks cut a client's support tickets by 80% with a custom AI solution",
      "ChatGPT vs Claude for business: which AI is right for your company in 2026?",
      "AI for Canadian law firms: document review, client intake, and research automation",
      "Getting started with AI automation: a no-jargon guide for Canadian business owners",
    ],
  },
  "Mobile Development": {
    color: "#8B5CF6",
    topics: [
      "How much does a mobile app cost in Canada in 2026? A complete pricing guide",
      "Android vs iOS: which platform should your business launch on first?",
      "Flutter vs native development: what is the right choice for your app budget?",
      "5 signs your business is ready for a mobile app",
      "How to brief a mobile app developer: what information you need before the first call",
      "Mobile app vs mobile website: which does your Canadian business actually need?",
      "How long does it take to build a mobile app in Canada? A realistic timeline",
      "In-app purchases vs subscription models: what works best for Canadian app businesses",
      "App Store vs Google Play: submission requirements every Canadian business owner should know",
      "How to get your mobile app noticed: ASO basics for Canadian businesses in 2026",
      "Cross-platform vs native app development: cost comparison for Canadian SMBs",
      "What is a Flutter app and why are Canadian businesses choosing it in 2026?",
      "Push notifications that actually work: what increases engagement vs what annoys users",
      "How ElevenClicks builds mobile apps: our process from discovery to App Store launch",
      "Mobile app maintenance: what ongoing costs should Canadian businesses budget for?",
    ],
  },
  "Node.js & Python": {
    color: "#68A063",
    topics: [
      "What is a backend API and why does your business application need one?",
      "Python automation for small business: 10 tasks you can automate this month",
      "When does your business need a custom API vs an off-the-shelf integration?",
      "How much does custom backend development cost for Canadian businesses in 2026?",
      "What is Node.js and why do high-traffic Canadian businesses choose it?",
      "Python vs Node.js for your business backend: an honest non-technical comparison",
      "How to automate your business data reports with Python: a beginner's guide",
      "What is a microservice and when does your growing business need one?",
      "Real-time features for your web app: what they cost and when they are worth it",
      "Database design mistakes that slow down growing Canadian businesses",
      "How ElevenClicks automated a client's monthly reporting with Python (saving 20hrs/month)",
      "Web scraping for competitive intelligence: what Canadian businesses need to know",
      "Third-party integrations: how to connect your business tools without custom code",
      "Building a custom admin dashboard: when spreadsheets stop being enough",
      "Serverless vs traditional hosting: what makes sense for Canadian business applications?",
    ],
  },
  "IT & Digital Strategy": {
    color: "#06B6D4",
    topics: [
      "Digital transformation for Ontario small businesses: where to start in 2026",
      "SaaS vs custom software: how Canadian businesses make the $50k decision",
      "When to hire an IT agency vs build an in-house dev team in Canada",
      "IT budget planning for Canadian SMBs: what to spend and where in 2026",
      "The real cost of a slow website for Canadian e-commerce businesses",
      "Cybersecurity basics every Ontario business owner needs to implement in 2026",
      "How North American small businesses are gaining competitive advantage with AI tools",
      "Website accessibility in Canada: AODA compliance and what it means for your business",
      "Data privacy for Canadian businesses: what PIPEDA requires and how to comply",
      "How to brief an IT agency and get exactly what you paid for",
      "What happens when you skip website maintenance: real consequences for Ontario businesses",
      "ERP vs custom software: a buying guide for growing Canadian companies",
      "Cloud costs in 2026: how Canadian SMBs are cutting their AWS and Azure bills",
      "How to evaluate a software development agency: 10 red flags to watch for",
      "Building a digital presence from scratch: a prioritized roadmap for Canadian startups",
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
      content: `You are a content strategist for ElevenClicks, an Ontario-based IT company serving Canadian and North American small and mid-sized businesses.

Write a practical, decision-maker-focused blog article on this exact topic for 2026:
"${topic}"

Category: ${category}

Audience: Canadian business owners, founders, operations managers, and executives — NOT developers. Write for someone who runs a business and needs clear, honest advice to make a decision. No jargon without explanation.

Requirements:
- 900-1100 words of genuinely useful, specific content — no fluff
- Include real Canadian context: CAD pricing, Ontario/Canada references, PIPEDA where relevant
- Use H2 and H3 headings to structure clearly
- Include at least one practical list (checklist, comparison, or step-by-step)
- Use concrete examples and realistic numbers (e.g. "a 10-person Ontario retailer")
- Avoid buzzwords: no "leverage", "synergy", "robust", "seamlessly"
- End with a 2-sentence CTA mentioning ElevenClicks and linking to a free 30-minute consultation
- Write like a knowledgeable friend giving honest advice, not a salesperson

SEO: Naturally include the primary keyword phrase from the title within the first paragraph and at least 2 more times throughout.

Output ONLY a valid JSON object — no markdown fences, no extra text before or after:
{
  "title": "specific engaging title matching the topic exactly",
  "excerpt": "2 compelling sentences written for a business owner, max 155 chars total",
  "content": "full HTML using only <p><h2><h3><ul><ol><li><strong><em> tags",
  "meta_title": "SEO title max 60 chars — include Canada or Ontario if natural",
  "meta_description": "SEO meta description max 155 chars — include a benefit and Canada/Ontario",
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
