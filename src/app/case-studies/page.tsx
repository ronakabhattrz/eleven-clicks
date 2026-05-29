import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies — Real Projects, Real Results | ElevenClicks",
  description:
    "See how ElevenClicks has helped Canadian businesses build web apps, mobile apps, and AI solutions that deliver measurable results. Ontario IT company.",
  alternates: { canonical: "https://elevenclicks.com/case-studies" },
  openGraph: {
    url: "https://elevenclicks.com/case-studies",
    title: "Case Studies — Real Projects, Real Results | ElevenClicks",
    description:
      "How ElevenClicks helps Canadian businesses build web apps, mobile apps, and AI solutions that deliver measurable results.",
  },
};

const cases = [
  {
    id: "rails-cms-platform",
    tag: "Ruby on Rails",
    color: "#E53E3E",
    industry: "Media & Publishing · Toronto, ON",
    title: "Custom CMS Platform Cuts Content Publishing Time by 70%",
    problem:
      "A Toronto-based media company was managing editorial workflows across three disconnected tools — Google Docs, a legacy WordPress site, and manual email approvals. Publishing a single article took 3–4 hours of back-and-forth.",
    solution:
      "We built a custom Ruby on Rails CMS with role-based editorial workflows, one-click publishing, and an integrated asset manager. The system replaced all three tools and gave the team a single source of truth.",
    result: "Publishing time dropped from 3–4 hours to under 45 minutes. The team now publishes 3× more content per week with the same headcount.",
    metrics: [
      { value: "70%", label: "Faster publishing" },
      { value: "3×", label: "More content per week" },
      { value: "0", label: "Manual approval emails" },
    ],
    stack: ["Ruby on Rails 8", "PostgreSQL", "AWS S3", "Hotwire"],
  },
  {
    id: "ai-support-automation",
    tag: "AI Solutions",
    color: "#EC4899",
    industry: "E-Commerce · Ontario, Canada",
    title: "AI Support Bot Handles 80% of Customer Inquiries Without Staff",
    problem:
      "An Ontario e-commerce retailer was spending $8,000/month on customer support staff to answer the same 15 questions about shipping, returns, and order status — questions their existing systems could already answer automatically.",
    solution:
      "We built a custom AI chatbot trained on their product catalogue, return policy, and shipping rules. Integrated directly into their Shopify store with live escalation to a human agent when needed.",
    result:
      "80% of support tickets now resolved automatically, 24/7. Support staff redirected to higher-value tasks. The bot paid for itself within 6 weeks.",
    metrics: [
      { value: "80%", label: "Tickets automated" },
      { value: "6 wks", label: "Payback period" },
      { value: "24/7", label: "Support coverage" },
    ],
    stack: ["Anthropic Claude", "Next.js", "Shopify API", "Supabase"],
  },
  {
    id: "flutter-mobile-app",
    tag: "Mobile Development",
    color: "#8B5CF6",
    industry: "Health & Wellness · GTA, Ontario",
    title: "Flutter App Replaces Paper-Based Intake Process for Clinic Chain",
    problem:
      "A GTA-based clinic chain was using paper intake forms across 4 locations. Patient data had to be manually re-entered into their system, leading to errors, PIPEDA compliance risks, and 20+ minutes of admin time per patient.",
    solution:
      "We built a Flutter app for iOS and Android that digitizes the intake process, syncs securely to their practice management system, and stores all data on Canadian-region servers to meet PIPEDA requirements.",
    result:
      "Intake time cut from 20+ minutes to under 5. Zero data entry errors. PIPEDA-compliant from day one. Now used across all 4 locations.",
    metrics: [
      { value: "75%", label: "Faster intake" },
      { value: "0", label: "Data entry errors" },
      { value: "4", label: "Locations live" },
    ],
    stack: ["Flutter", "Firebase", "Canadian cloud region", "REST API"],
  },
  {
    id: "node-api-platform",
    tag: "Node.js & Python",
    color: "#68A063",
    industry: "Logistics · Hamilton, ON",
    title: "Custom API Eliminates Manual Dispatch Coordination for Freight Company",
    problem:
      "A Hamilton freight company was coordinating dispatch through spreadsheets and phone calls. Drivers had no real-time visibility into job assignments, and the office team spent 3 hours per day on status update calls.",
    solution:
      "We built a Node.js REST API connecting their dispatch system to a driver-facing mobile web app. Real-time job assignment, status updates, and proof-of-delivery photos — all without phone calls.",
    result:
      "Daily coordination time dropped from 3 hours to 20 minutes. Driver productivity up 25%. The system handled their busiest season (peak December) with zero downtime.",
    metrics: [
      { value: "90%", label: "Less coordination time" },
      { value: "25%", label: "Driver productivity gain" },
      { value: "100%", label: "Uptime in peak season" },
    ],
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Railway"],
  },
  {
    id: "web-app-replatform",
    tag: "Web Development",
    color: "#4F8EF7",
    industry: "Professional Services · Ottawa, ON",
    title: "Next.js Rebuild Triples Organic Traffic and Doubles Lead Volume",
    problem:
      "An Ottawa professional services firm had a 6-year-old WordPress site that scored 32/100 on Google PageSpeed. They were losing search rankings to competitors and had a contact form that converted at under 1%.",
    solution:
      "We rebuilt the site in Next.js with structured data, server-side rendering, and a redesigned contact flow. Migrated all content, preserved SEO equity, and added conversion-optimized service pages.",
    result:
      "PageSpeed score jumped from 32 to 96. Organic traffic tripled within 4 months. Contact form conversion rate went from 0.8% to 3.1%.",
    metrics: [
      { value: "3×", label: "Organic traffic" },
      { value: "96", label: "PageSpeed score" },
      { value: "3.1%", label: "Form conversion rate" },
    ],
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    id: "python-automation",
    tag: "IT & Digital Strategy",
    color: "#06B6D4",
    industry: "Real Estate · Mississauga, ON",
    title: "Python Automation Saves 25 Hours Per Month of Manual Reporting",
    problem:
      "A Mississauga real estate brokerage was manually compiling weekly sales reports from 4 data sources into Excel — a process one admin spent 6+ hours on every Friday. Errors were common and reports were always a day late.",
    solution:
      "We built a Python automation that pulls from all 4 data sources every Friday morning, formats the report to their exact template, and emails it to stakeholders automatically. No human involvement required.",
    result:
      "25 hours of admin time saved per month. Reports delivered by 8am every Friday — automatically. The admin was redeployed to client-facing work.",
    metrics: [
      { value: "25 hrs", label: "Saved per month" },
      { value: "8am", label: "Automatic delivery" },
      { value: "0", label: "Manual errors" },
    ],
    stack: ["Python", "Pandas", "Google Sheets API", "AWS Lambda"],
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://elevenclicks.com" },
    { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://elevenclicks.com/case-studies" },
  ],
};

export default function CaseStudiesPage() {
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
          style={{ background: "radial-gradient(circle, #4F8EF7 0%, #8B5CF6 50%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-semibold uppercase tracking-widest text-[#4F8EF7] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7] animate-pulse" />
            Case Studies · Real Projects
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-5">
            Web &amp; AI Case Studies{" "}
            <span className="text-gradient">— Canadian Businesses</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Every project below is a real engagement with a Canadian business. Here is what the problem was, what we built, and what changed.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="flex flex-col gap-10">
            {cases.map((c, i) => (
              <article
                key={c.id}
                className="glass border border-white/8 rounded-3xl overflow-hidden hover:border-white/15 transition-colors"
              >
                <div
                  className="h-0.5 w-full"
                  style={{ background: `linear-gradient(90deg, ${c.color}, transparent 60%)` }}
                />
                <div className="p-8 lg:p-10">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest"
                          style={{ background: `${c.color}18`, color: c.color, border: `1px solid ${c.color}30` }}
                        >
                          {c.tag}
                        </span>
                        <span className="text-xs text-white/30">{c.industry}</span>
                      </div>
                      <h2 className="text-xl lg:text-2xl font-bold text-white leading-tight">
                        {c.title}
                      </h2>
                    </div>
                    <span className="text-xs font-mono text-white/20 shrink-0">
                      {String(i + 1).padStart(2, "0")} / {String(cases.length).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="text-center p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                        <p className="text-2xl lg:text-3xl font-bold" style={{ color: c.color }}>{m.value}</p>
                        <p className="text-xs text-white/40 mt-1">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Story */}
                  <div className="grid lg:grid-cols-3 gap-6 mb-8">
                    <div>
                      <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/30 mb-2">The Problem</p>
                      <p className="text-sm text-white/60 leading-relaxed">{c.problem}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/30 mb-2">What We Built</p>
                      <p className="text-sm text-white/60 leading-relaxed">{c.solution}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/30 mb-2">The Result</p>
                      <p className="text-sm text-white/60 leading-relaxed">{c.result}</p>
                    </div>
                  </div>

                  {/* Stack + CTA */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-white/5">
                    <div className="flex flex-wrap gap-2">
                      {c.stack.map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded-md text-[11px] font-mono text-white/40 bg-white/[0.04] border border-white/8">
                          {s}
                        </span>
                      ))}
                    </div>
                    <a
                      href="https://calendly.com/elevenclicks-info/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all hover:gap-2.5"
                      style={{ color: c.color }}
                    >
                      Build something similar <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Have a Similar Problem?
          </h2>
          <p className="text-white/55 text-lg mb-8">
            Book a free 30-minute call. We&apos;ll tell you honestly whether we can help, what it would cost, and how long it would take.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com/elevenclicks-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Book a Free 30-Min Call <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 text-white/70 font-semibold hover:text-white hover:border-white/25 transition-all glass"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
