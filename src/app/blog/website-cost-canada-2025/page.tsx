import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How Much Does a Website Cost in Canada? (2025 Pricing Guide)",
  description:
    "Website costs in Canada range from $1,500 for a landing page to $40,000+ for a custom web app. Here's exactly what you'll pay in 2025 and why.",
  alternates: {
    canonical: "https://elevenclicks.com/blog/website-cost-canada-2025",
  },
  openGraph: {
    url: "https://elevenclicks.com/blog/website-cost-canada-2025",
    title: "How Much Does a Website Cost in Canada? (2025 Pricing Guide)",
    description:
      "Website costs in Canada range from $1,500 for a landing page to $40,000+ for a custom web app. Here's exactly what you'll pay in 2025 and why.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://elevenclicks.com/blog/website-cost-canada-2025",
  headline: "How Much Does a Website Cost in Canada? (2025 Pricing Guide)",
  description:
    "Website costs in Canada range from $1,500 for a landing page to $40,000+ for a custom web app. Here's exactly what you'll pay in 2025 and why.",
  url: "https://elevenclicks.com/blog/website-cost-canada-2025",
  datePublished: "2025-03-15",
  dateModified: "2025-05-26",
  inLanguage: "en-CA",
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
      url: "https://elevenclicks.com/icon.png",
    },
  },
  isPartOf: { "@id": "https://elevenclicks.com/#website" },
  mainEntityOfPage: "https://elevenclicks.com/blog/website-cost-canada-2025",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a basic website cost in Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "$1,500–$5,000 for a marketing or brochure site. Includes homepage, about, services, and contact form on a CMS like WordPress or Next.js.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a custom web app cost in Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "$10,000–$50,000+ depending on features. A SaaS MVP is typically $12,000–$25,000; enterprise platforms cost more.",
      },
    },
    {
      "@type": "Question",
      name: "How much does an e-commerce website cost in Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "$3,000–$20,000. A basic Shopify setup starts around $3,000; a fully custom store with checkout and integrations is $10,000–$20,000.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a website project take in Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Landing pages: 1–2 weeks. Business sites: 3–5 weeks. E-commerce: 4–8 weeks. Custom web apps: 8–20 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "What hidden costs should I expect for a website in Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Domain and hosting ($150–$500/year), SSL, content writing, ongoing maintenance ($100–$500/month), and potential transaction fees for e-commerce.",
      },
    },
  ],
};

const faqs = [
  {
    q: "How much does a basic website cost in Canada?",
    a: "$1,500–$5,000 for a marketing or brochure site. Includes homepage, about, services, and contact form on a CMS like WordPress or Next.js.",
  },
  {
    q: "How much does a custom web app cost in Canada?",
    a: "$10,000–$50,000+ depending on features. A SaaS MVP is typically $12,000–$25,000; enterprise platforms cost more.",
  },
  {
    q: "How much does an e-commerce website cost in Canada?",
    a: "$3,000–$20,000. A basic Shopify setup starts around $3,000; a fully custom store with checkout and integrations is $10,000–$20,000.",
  },
  {
    q: "How long does a website project take in Canada?",
    a: "Landing pages: 1–2 weeks. Business sites: 3–5 weeks. E-commerce: 4–8 weeks. Custom web apps: 8–20 weeks.",
  },
  {
    q: "What hidden costs should I expect for a website in Canada?",
    a: "Domain and hosting ($150–$500/year), SSL, content writing, ongoing maintenance ($100–$500/month), and potential transaction fees for e-commerce.",
  },
];

export default function WebsiteCostCanadaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Page wrapper */}
      <div className="relative min-h-screen">
        {/* Subtle background glow */}
        <div
          className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(79,142,247,0.6) 0%, rgba(139,92,246,0.3) 50%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-3xl px-6 lg:px-8 pt-32 pb-24">
          {/* Back link */}
          <div className="mb-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-white/45 hover:text-white/75 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Articles
            </Link>
          </div>

          {/* Article header */}
          <header className="mb-12">
            <div className="mb-4">
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider"
                style={{
                  background: "rgba(79,142,247,0.12)",
                  color: "#4F8EF7",
                  border: "1px solid rgba(79,142,247,0.25)",
                }}
              >
                Web Development
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
              How Much Does a Website Cost in Canada?{" "}
              <span className="text-gradient">(2025 Pricing Guide)</span>
            </h1>

            <div className="h-0.5 w-12 rounded-full mb-6" style={{ background: "#4F8EF7" }} />

            <div className="flex flex-wrap items-center gap-5 text-sm text-white/40">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                March 15, 2025
              </span>
              <span className="w-px h-4 bg-white/10" />
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                8 min read
              </span>
              <span className="w-px h-4 bg-white/10" />
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                ElevenClicks Team
              </span>
            </div>
          </header>

          {/* Article body */}
          <article className="space-y-10">

            {/* Opening — featured snippet target */}
            <section>
              <p className="text-white/80 leading-relaxed text-base">
                A website in Canada costs between <strong className="text-white">$800 and $50,000+</strong> depending on what you&apos;re building. A simple landing page from a Canadian developer runs $800–$2,500. A professional business or marketing site is typically $2,500–$8,000. E-commerce stores start at $3,000 and scale to $20,000 for fully custom builds. Custom web applications and SaaS products range from $10,000 to $50,000 or more. These are honest market rates for Canada in 2025 — not offshore-outsourced quotes, and not Toronto agency rates with four layers of account managers.
              </p>
            </section>

            {/* Quick Reference Pricing Table */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4">
                Quick Reference: Website Cost in Canada (2025)
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10" style={{ background: "rgba(79,142,247,0.08)" }}>
                      <th className="text-left px-5 py-3 text-white font-semibold">Type</th>
                      <th className="text-left px-5 py-3 text-white font-semibold">Price Range (CAD)</th>
                      <th className="text-left px-5 py-3 text-white font-semibold">Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: "Landing page", price: "$800–$2,500", time: "1–2 weeks" },
                      { type: "Marketing / business site", price: "$2,500–$8,000", time: "3–5 weeks" },
                      { type: "E-commerce store", price: "$3,000–$20,000", time: "4–8 weeks" },
                      { type: "Custom web app / SaaS", price: "$10,000–$50,000+", time: "8–20 weeks" },
                      { type: "WordPress with custom design", price: "$2,000–$6,000", time: "2–4 weeks" },
                    ].map((row, i) => (
                      <tr
                        key={row.type}
                        className="border-b border-white/5 last:border-0"
                        style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "rgba(255,255,255,0.03)" }}
                      >
                        <td className="px-5 py-3.5 text-white/80 font-medium">{row.type}</td>
                        <td className="px-5 py-3.5 text-[#4F8EF7] font-semibold">{row.price}</td>
                        <td className="px-5 py-3.5 text-white/50">{row.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-white/30 mt-2 pl-1">
                All prices in CAD. Rates reflect Canadian market rates for 2025.
              </p>
            </section>

            {/* What Drives Cost */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                What Drives the Cost of a Website in Canada?
              </h2>
              <p className="text-white/70 leading-relaxed mb-5">
                Price isn&apos;t arbitrary — it comes down to five core factors. Understanding them will help you scope your project, write a smarter brief, and avoid wasting money on things you don&apos;t need.
              </p>
              <div className="space-y-5">
                <div className="glass border border-white/8 rounded-2xl p-5">
                  <h3 className="text-base font-semibold text-white mb-2">1. Scope and Feature Count</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Every feature costs time. A contact form, a blog CMS, a booking calendar, a user login system, a payment checkout — each one adds design, development, and testing hours. A simple 5-page site with a contact form takes a fraction of the time that a site with user accounts, a database, and a subscription model requires. The more specific you can be about what you need, the more accurate your quote will be.
                  </p>
                </div>
                <div className="glass border border-white/8 rounded-2xl p-5">
                  <h3 className="text-base font-semibold text-white mb-2">2. Custom Design vs. Template</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    A custom design built from scratch — unique layouts, branded illustrations, original UI patterns — takes a designer 20–60 hours and adds $1,500–$4,000 to your project. A template-based site uses a pre-built theme and swaps in your content and colours. Both can look professional, but only one differentiates your brand. Most Ontario businesses in competitive markets benefit from custom design.
                  </p>
                </div>
                <div className="glass border border-white/8 rounded-2xl p-5">
                  <h3 className="text-base font-semibold text-white mb-2">3. Backend Complexity</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Does your site need to store data, authenticate users, send emails, process payments, or integrate with third-party APIs? Every backend requirement multiplies development time. A static marketing site has essentially no backend cost. A SaaS application with a database, user roles, billing, and an API is a multi-month engineering project.
                  </p>
                </div>
                <div className="glass border border-white/8 rounded-2xl p-5">
                  <h3 className="text-base font-semibold text-white mb-2">4. Content Creation</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Many clients underestimate how much content a website needs — copy for every page, product descriptions, blog posts, team photos, hero images. Developers build the container; content fills it. If your developer has to wait on copy, your timeline stretches. If they have to write it, expect to add $1,000–$3,000 for a typical business site.
                  </p>
                </div>
                <div className="glass border border-white/8 rounded-2xl p-5">
                  <h3 className="text-base font-semibold text-white mb-2">5. Post-Launch Support and Hosting</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    A website is never truly &quot;done.&quot; Plugins need updating, content changes, bugs appear after launch. Factor in at least $100–$300/month for a care plan, or budget for hourly support at $75–$150/hour for ad-hoc requests. Hosting and domain registration add another $150–$500 per year depending on your traffic and infrastructure.
                  </p>
                </div>
              </div>
            </section>

            {/* Breaking Down Each Tier */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Breaking Down Each Tier
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Landing Page: $800–$2,500</h3>
                  <p className="text-white/70 leading-relaxed">
                    A single-page or two-page site built to capture leads, promote an event, or describe one service. These are fast to build — typically 1–2 weeks — and work well for new businesses testing a concept, product launches, or ad campaign destinations. At this price range, expect a clean template-based design with your branding, a contact form, and mobile responsiveness. Don&apos;t expect a CMS, blog, or any backend functionality.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Marketing / Business Site: $2,500–$8,000</h3>
                  <p className="text-white/70 leading-relaxed">
                    The most common website type for Ontario small businesses. Typically 5–10 pages covering your services, about page, team, testimonials, and contact form. At $2,500–$4,000 you&apos;re in template territory with customization. At $5,000–$8,000 you get a fully custom design, a headless CMS so your team can edit content, SEO foundations, and a performance-optimized build. This is the right investment if your website is a primary marketing channel.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">E-Commerce Store: $3,000–$20,000</h3>
                  <p className="text-white/70 leading-relaxed">
                    Shopify handles most of the infrastructure for online retail — payment processing, inventory, shipping — so a well-configured Shopify store with a premium theme and your branding can start around $3,000. A fully custom WooCommerce or headless e-commerce build with unique product configurators, subscription billing, loyalty programs, or multi-vendor support will run $10,000–$20,000. The gap is real, and the right choice depends entirely on your product complexity and long-term growth plans.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Custom Web App / SaaS: $10,000–$50,000+</h3>
                  <p className="text-white/70 leading-relaxed">
                    A software product — not just a website. Think booking platforms, CRM tools, client portals, SaaS dashboards, or workflow automation tools. These require backend architecture, a database, authentication, roles and permissions, API design, and often integrations with third-party services like Stripe, Twilio, or Google Maps. In Ontario, a well-scoped SaaS MVP typically runs $12,000–$25,000 with a Canadian development team. Budget more for complex multi-tenant systems, real-time features, or compliance requirements.
                  </p>
                </div>
              </div>
            </section>

            {/* Hidden Costs */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Hidden Costs Most Clients Don&apos;t Expect
              </h2>
              <p className="text-white/70 leading-relaxed mb-5">
                The quoted project price is rarely the total cost of owning a website. Here&apos;s what catches people off-guard:
              </p>
              <ul className="space-y-3">
                {[
                  {
                    title: "Domain registration",
                    detail: "$15–$50/year. A .ca domain costs slightly more than .com, but it signals Canadian presence to search engines.",
                  },
                  {
                    title: "Hosting",
                    detail: "$100–$400/year for a business site on a managed platform like Vercel, Cloudflare Pages, or a VPS. High-traffic sites or custom servers can cost $400–$1,200/year.",
                  },
                  {
                    title: "SSL certificate",
                    detail: "Free via Let&apos;s Encrypt if your host provides it — but not all hosts do. Paid certificates with higher validation levels run $80–$200/year.",
                  },
                  {
                    title: "Content writing",
                    detail: "If you can&apos;t provide your own copy, professional copywriting runs $80–$200 per page. A 10-page business site could add $800–$2,000 to your budget.",
                  },
                  {
                    title: "Ongoing maintenance",
                    detail: "$100–$500/month for a care plan covering security patches, CMS updates, backups, and support. This is not optional — a site left unmaintained will eventually break, get hacked, or go down.",
                  },
                  {
                    title: "E-commerce transaction fees",
                    detail: "Shopify takes 0.5–2% per transaction unless you use Shopify Payments. Stripe charges 2.9% + $0.30 CAD per transaction. These fees compound quickly at scale.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3 text-sm text-white/65 leading-relaxed">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#4F8EF7] shrink-0" />
                    <span>
                      <strong className="text-white/90">{item.title}:</strong>{" "}
                      {item.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Red Flags */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Red Flags When Getting Website Quotes
              </h2>
              <p className="text-white/70 leading-relaxed mb-5">
                Not every quote is worth taking. Here&apos;s what to watch for when shopping for a web developer or agency in Canada:
              </p>
              <div className="space-y-4">
                {[
                  {
                    flag: "Offshore teams with no local accountability",
                    detail:
                      "Cheap offshore quotes ($500–$1,500 for a full website) typically mean a template-based build with poor communication, no timezone overlap, and zero post-launch support. The \"savings\" often disappear when you&apos;re paying someone else to fix the problems.",
                  },
                  {
                    flag: "Template dressed up as custom work",
                    detail:
                      "Some agencies quote $6,000–$8,000 for work that&apos;s really a $79 ThemeForest template with your logo swapped in. Ask to see the code or the original theme — if the site was built &quot;from scratch,&quot; the developer should be able to explain the stack.",
                  },
                  {
                    flag: "No support plan after launch",
                    detail:
                      "A developer who disappears after handing you login credentials is a liability. Any professional web partner should offer at least a basic maintenance plan — or clearly explain what isn&apos;t included so you can plan accordingly.",
                  },
                  {
                    flag: "Vague fixed-price quotes that balloon",
                    detail:
                      "\"$3,500 for a full website\" sounds good until the scope conversation reveals it&apos;s 3 pages with no CMS and no revisions. Get a written scope document with deliverables before signing anything. A real fixed-price quote should survive scrutiny.",
                  },
                  {
                    flag: "No discovery process",
                    detail:
                      "A developer who quotes you without asking about your goals, your users, your content situation, or your existing tech stack is guessing. Good quotes come from good discovery conversations.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="glass border border-white/8 rounded-2xl p-5"
                    style={{ borderLeft: "2px solid rgba(236,72,153,0.4)" }}
                  >
                    <h3 className="text-sm font-semibold text-white mb-1.5">{item.flag}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* How to Get an Accurate Quote */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                How to Get an Accurate Quote
              </h2>
              <p className="text-white/70 leading-relaxed mb-5">
                The more specific you are, the more accurate — and honest — the quotes you receive will be. Here&apos;s how to set yourself up for a useful conversation:
              </p>
              <div className="space-y-3">
                {[
                  {
                    step: "Be specific about features",
                    detail:
                      "List every feature you want: contact form, CMS, blog, booking calendar, user login, payment processing, search. The more concrete your list, the less ambiguity in the quote.",
                  },
                  {
                    step: "Bring reference sites",
                    detail:
                      "Screenshot or link to 2–3 sites you like. Visual references save hours of back-and-forth and give developers a realistic sense of the design complexity you&apos;re expecting.",
                  },
                  {
                    step: "Know your content situation",
                    detail:
                      "Can you provide all the copy and images, or will you need help? If you need help, say so upfront. A project stalled waiting for content often costs more than the content itself.",
                  },
                  {
                    step: "Ask about ongoing costs explicitly",
                    detail:
                      "Before signing, ask: what will hosting cost? What&apos;s a maintenance plan? What&apos;s your hourly rate for future changes? This eliminates the surprise invoices that frustrate clients most.",
                  },
                  {
                    step: "Ask for a breakdown, not just a total",
                    detail:
                      "A good proposal shows you where the money goes: design, development, testing, deployment, training. A single number without breakdown gives you nothing to evaluate or negotiate against.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 text-sm leading-relaxed">
                    <div
                      className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold mt-0.5"
                      style={{ background: "rgba(79,142,247,0.15)", color: "#4F8EF7" }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <strong className="text-white">{item.step}:</strong>{" "}
                      <span className="text-white/65">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Accordion */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group glass border border-white/8 rounded-2xl overflow-hidden hover:border-white/15 transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-white font-medium text-sm hover:text-white/90 transition-colors">
                      <span className="flex items-center gap-4">
                        <span className="text-[11px] font-mono text-white/30 tabular-nums shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {faq.q}
                      </span>
                      <svg
                        className="w-4 h-4 text-white/40 shrink-0 transition-transform duration-200 group-open:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-5 text-sm text-white/55 leading-relaxed border-t border-white/5 pt-4 pl-14">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section>
              <div
                className="glass border border-white/8 rounded-3xl p-8 text-center relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(79,142,247,0.06) 0%, rgba(139,92,246,0.06) 100%)",
                  borderColor: "rgba(79,142,247,0.2)",
                }}
              >
                <div
                  className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, #4F8EF7, #8B5CF6)",
                  }}
                />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs font-semibold uppercase tracking-widest text-[#4F8EF7] mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7] animate-pulse" />
                    Free Quote
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">
                    Get a Free Quote from ElevenClicks
                  </h2>
                  <p className="text-white/55 text-sm mb-6 max-w-md mx-auto leading-relaxed">
                    We&apos;re an Ontario IT company that builds websites, web apps, and mobile apps for Canadian businesses. Send us your project brief and we&apos;ll respond with a detailed scope and transparent pricing within 48 hours — no sales pressure.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    Get Your Free Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </section>

          </article>
        </div>
      </div>
    </>
  );
}
