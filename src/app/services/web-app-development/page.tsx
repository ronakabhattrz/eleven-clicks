import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Web App Development Toronto | Next.js & React",
  description:
    "Custom web application development in Toronto. Next.js, React, and full-stack web apps for Canadian small businesses. Fixed-price, Ontario-based senior developers.",
  alternates: { canonical: "https://elevenclicks.com/services/web-app-development" },
  openGraph: {
    url: "https://elevenclicks.com/services/web-app-development",
    title: "Custom Web App Development Toronto | ElevenClicks",
    description: "Next.js, React, and full-stack web apps for Canadian businesses. Fixed-price, Ontario-based.",
    locale: "en_CA",
  },
};

const features = [
  "Next.js & React web applications",
  "E-commerce stores (Shopify, custom)",
  "SaaS platform development",
  "CMS integrations (WordPress, Sanity)",
  "RESTful & GraphQL API development",
  "Performance & Core Web Vitals",
  "SEO-ready from day one",
  "Responsive design for all devices",
];

const projects = [
  { title: "SaaS Platform", desc: "Multi-tenant subscription platform built with Next.js and Stripe, serving 500+ Canadian businesses." },
  { title: "E-commerce Rebuild", desc: "Custom Next.js store replacing Shopify. PageSpeed jumped from 32 to 96. Conversions up 3×." },
  { title: "Booking Web App", desc: "Full-stack booking system for an Ontario service chain, replacing phone-based scheduling." },
];

const faqs = [
  { q: "How much does a custom web app cost in Canada?", a: "Most web app projects start at $5,000–$8,000 CAD for a focused build (landing pages, forms, CMS). A full SaaS platform or e-commerce system typically runs $15,000–$60,000 CAD. We give you a fixed price after a discovery call — no hourly billing." },
  { q: "How long does a web app take to build?", a: "A focused marketing site or web app takes 3–6 weeks. A full SaaS platform or multi-feature web app takes 8–16 weeks. We give you a firm timeline in the proposal before you commit." },
  { q: "Do you build with WordPress or custom code?", a: "Both. For content-heavy sites and blogs, WordPress is often the right choice. For SaaS apps, booking platforms, and anything with custom logic, we build with Next.js and React for better performance and flexibility." },
  { q: "Will my website rank on Google?", a: "Yes — we build with SEO best practices from day one. Every project includes proper meta tags, structured data (JSON-LD), fast page load times, and mobile-responsive design. We also offer ongoing SEO support." },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Web App Development",
  description: "Next.js and React web application development for Canadian businesses — SaaS platforms, e-commerce, and custom web apps.",
  provider: { "@type": "Organization", name: "ElevenClicks", url: "https://elevenclicks.com" },
  areaServed: [{ "@type": "City", name: "Toronto" }, { "@type": "Country", name: "Canada" }],
  url: "https://elevenclicks.com/services/web-app-development",
  offers: { "@type": "Offer", price: "5000", priceCurrency: "CAD", description: "Starting price for web app projects" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://elevenclicks.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://elevenclicks.com/services" },
    { "@type": "ListItem", position: 3, name: "Web App Development", item: "https://elevenclicks.com/services/web-app-development" },
  ],
};

export default function WebAppDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050510]" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] pointer-events-none opacity-15"
          style={{ background: "radial-gradient(circle, #4F8EF7 0%, #8B5CF6 60%, transparent 70%)" }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4F8EF7]/20 bg-[#4F8EF7]/5 text-xs font-semibold uppercase tracking-widest text-[#4F8EF7] mb-6">
              <Globe className="w-3.5 h-3.5" /> Web App Development · Toronto, Ontario
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              Custom Web Application<br /><span className="text-gradient">Development for Canada</span>
            </h1>
            <p className="text-lg text-white/55 leading-relaxed mb-8 max-w-xl">
              We build fast, scalable web apps for Canadian businesses — from marketing sites to full SaaS platforms. Next.js, React, and custom backends. Fixed-price, Ontario-based.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://calendly.com/elevenclicks-info/30min" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white font-semibold hover:opacity-90 transition-opacity">
                Book a Free Call <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/services" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 text-white/70 font-semibold hover:text-white hover:border-white/25 transition-all glass">
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="glass border border-white/8 rounded-3xl p-8 lg:p-10">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#4F8EF7] mb-6">What We Build</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4F8EF7] shrink-0 mt-0.5" />
                  <span className="text-sm text-white/65 leading-snug">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Recent Projects</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {projects.map((p) => (
              <div key={p.title} className="glass border border-white/8 rounded-2xl p-7 hover:border-[#4F8EF7]/20 transition-colors">
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#4F8EF7] mb-3">{p.title}</p>
                <p className="text-sm text-white/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">Common Questions</h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group glass border border-white/8 rounded-2xl overflow-hidden hover:border-white/15 transition-colors">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-white font-medium text-sm">
                  {faq.q}<span className="text-white/30 group-open:rotate-45 transition-transform text-lg shrink-0">+</span>
                </summary>
                <div className="px-6 pb-5 pt-2 text-sm text-white/50 leading-relaxed border-t border-white/5">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Web App?</h2>
          <p className="text-white/50 mb-8">Book a free 30-minute call. We&apos;ll scope your project and send a fixed-price proposal within 48 hours.</p>
          <a href="https://calendly.com/elevenclicks-info/30min" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white font-semibold hover:opacity-90 transition-opacity">
            Book a Free 30-Min Call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
