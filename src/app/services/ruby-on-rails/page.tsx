import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Ruby on Rails Development Company Toronto | ElevenClicks",
  description:
    "Experienced Ruby on Rails developer in Toronto, Ontario. Custom Rails apps, SaaS platforms, REST APIs, and legacy upgrades. Fixed-price projects for Canadian businesses.",
  alternates: { canonical: "https://elevenclicks.com/services/ruby-on-rails" },
  openGraph: {
    url: "https://elevenclicks.com/services/ruby-on-rails",
    title: "Ruby on Rails Development Company Toronto | ElevenClicks",
    description: "Custom Ruby on Rails apps, SaaS platforms, and APIs for Canadian businesses. Ontario-based, fixed-price.",
    locale: "en_CA",
  },
};

const features = [
  "Full-stack Rails applications (Rails 6, 7 & 8)",
  "SaaS platform development",
  "REST & JSON:API backend development",
  "ActiveRecord, Sidekiq & background jobs",
  "Devise, Pundit & authentication flows",
  "Stripe, AWS S3 & third-party integrations",
  "Legacy Rails upgrades & refactors",
  "Hotwire, Turbo & Stimulus frontends",
];

const faqs = [
  {
    q: "Why choose Ruby on Rails for my project in 2026?",
    a: "Rails remains one of the fastest frameworks for shipping production-quality web apps. It has mature tooling, a strong ecosystem, and a convention-over-configuration philosophy that reduces decision fatigue. For Canadian startups and SMBs building SaaS products or content platforms, Rails is often the right choice.",
  },
  {
    q: "How much does a Ruby on Rails project cost?",
    a: "Most Rails projects start at $8,000–$15,000 CAD for a focused API or web app. Larger SaaS platforms typically run $25,000–$75,000 CAD. We quote fixed prices after a discovery call — no hourly billing surprises.",
  },
  {
    q: "Can you upgrade our existing Rails app?",
    a: "Yes. We've upgraded Rails apps from version 4 through 8. We start with a technical audit, identify breaking changes, and migrate incrementally so your app stays live throughout.",
  },
  {
    q: "Do you work with Rails-only backends or full-stack?",
    a: "Both. We build full-stack Rails apps using Hotwire/Turbo for a fast, modern feel without a separate frontend framework. We also build Rails API backends paired with React or Next.js frontends.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ruby on Rails Development",
  description: "Custom Ruby on Rails web applications, SaaS platforms, and REST APIs for Canadian businesses.",
  provider: { "@type": "Organization", name: "ElevenClicks", url: "https://elevenclicks.com" },
  areaServed: [{ "@type": "City", name: "Toronto" }, { "@type": "Country", name: "Canada" }],
  url: "https://elevenclicks.com/services/ruby-on-rails",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://elevenclicks.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://elevenclicks.com/services" },
    { "@type": "ListItem", position: 3, name: "Ruby on Rails", item: "https://elevenclicks.com/services/ruby-on-rails" },
  ],
};

export default function RubyOnRailsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050510]" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] pointer-events-none opacity-15"
          style={{ background: "radial-gradient(circle, #E53E3E 0%, #8B5CF6 60%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E53E3E]/20 bg-[#E53E3E]/5 text-xs font-semibold uppercase tracking-widest text-[#E53E3E] mb-6">
              <Code2 className="w-3.5 h-3.5" />
              Ruby on Rails · Toronto, Ontario
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              Ruby on Rails Development<br />
              <span className="text-gradient">for Canadian Businesses</span>
            </h1>
            <p className="text-lg text-white/55 leading-relaxed mb-8 max-w-xl">
              We build robust Ruby on Rails applications for Canadian startups and SMBs — from SaaS platforms to REST APIs. Senior developers, fixed prices, Ontario-based.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/elevenclicks-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#E53E3E] to-[#8B5CF6] text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Book a Free Call <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/services" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 text-white/70 font-semibold hover:text-white hover:border-white/25 transition-all glass">
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="glass border border-white/8 rounded-3xl p-8 lg:p-10">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#E53E3E] mb-6">What We Deliver</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E53E3E] shrink-0 mt-0.5" />
                  <span className="text-sm text-white/65 leading-snug">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Rails */}
      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Ruby on Rails for Your Canadian Business?</h2>
              <div className="space-y-4 text-white/60 text-sm leading-relaxed">
                <p>Rails has been the backbone of thousands of successful SaaS products — Shopify, GitHub, and Basecamp were all built on it. It&apos;s not a new framework chasing trends; it&apos;s a proven, mature platform optimised for shipping real products quickly.</p>
                <p>For Canadian SMBs and startups, Rails offers a major advantage: you get to production faster than almost any other framework. Convention over configuration means less time debating architecture and more time shipping features your customers care about.</p>
                <p>At ElevenClicks, our lead developers have been building Rails applications since Rails 4. We know the framework deeply — including where the sharp edges are and how to avoid them.</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Typical Rails project timeline", value: "6–14 weeks" },
                { label: "Starting price (fixed)", value: "$8,000 CAD" },
                { label: "Rails versions we support", value: "6, 7 & 8" },
                { label: "Projects delivered", value: "50+" },
              ].map((s) => (
                <div key={s.label} className="glass border border-white/8 rounded-2xl px-6 py-4 flex items-center justify-between">
                  <span className="text-sm text-white/45">{s.label}</span>
                  <span className="text-sm font-bold text-white">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group glass border border-white/8 rounded-2xl overflow-hidden hover:border-white/15 transition-colors">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-white font-medium text-sm">
                  {faq.q}
                  <span className="text-white/30 group-open:rotate-45 transition-transform text-lg shrink-0">+</span>
                </summary>
                <div className="px-6 pb-5 pt-2 text-sm text-white/50 leading-relaxed border-t border-white/5">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Rails Application?</h2>
          <p className="text-white/50 mb-8">Book a free 30-minute call. We&apos;ll scope your project, give you an honest timeline, and send a fixed-price proposal within 48 hours.</p>
          <a
            href="https://calendly.com/elevenclicks-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#E53E3E] to-[#8B5CF6] text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Book a Free 30-Min Call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
