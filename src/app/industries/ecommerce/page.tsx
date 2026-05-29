import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShoppingBag } from "lucide-react";

export const metadata: Metadata = {
  title: "E-Commerce Web Development Toronto — Custom & Shopify | ElevenClicks",
  description:
    "Custom e-commerce development for Canadian retailers. Shopify customization, Next.js stores, and conversion-optimized online shops. Toronto-based IT company, fixed-price projects.",
  alternates: { canonical: "https://elevenclicks.com/industries/ecommerce" },
  openGraph: {
    url: "https://elevenclicks.com/industries/ecommerce",
    title: "E-Commerce Web Development Toronto | ElevenClicks",
    description: "Custom e-commerce stores for Canadian retailers. Shopify, Next.js, conversion optimization.",
    locale: "en_CA",
  },
};

const solutions = [
  "Custom Next.js e-commerce stores",
  "Shopify theme development",
  "Shopify custom apps & integrations",
  "Product catalogue & search",
  "Stripe & payment gateway setup",
  "Inventory management integrations",
  "Mobile-optimized checkout",
  "Performance & Core Web Vitals",
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "E-Commerce Web Development",
  description: "Custom e-commerce development for Canadian retailers — Shopify, Next.js, and conversion-optimized stores.",
  provider: { "@type": "Organization", name: "ElevenClicks", url: "https://elevenclicks.com" },
  areaServed: [{ "@type": "City", name: "Toronto" }, { "@type": "Country", name: "Canada" }],
  url: "https://elevenclicks.com/industries/ecommerce",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://elevenclicks.com" },
    { "@type": "ListItem", position: 2, name: "E-Commerce", item: "https://elevenclicks.com/industries/ecommerce" },
  ],
};

export default function EcommercePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050510]" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] pointer-events-none opacity-15"
          style={{ background: "radial-gradient(circle, #F59E0B 0%, #EC4899 60%, transparent 70%)" }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F59E0B]/20 bg-[#F59E0B]/5 text-xs font-semibold uppercase tracking-widest text-[#F59E0B] mb-6">
              <ShoppingBag className="w-3.5 h-3.5" /> E-Commerce · Toronto, Ontario
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              E-Commerce Development<br /><span className="text-gradient">for Canadian Retailers</span>
            </h1>
            <p className="text-lg text-white/55 leading-relaxed mb-8 max-w-xl">
              Custom online stores and Shopify solutions for Canadian retailers — built to convert, fast on mobile, and optimized for Canadian shoppers from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://calendly.com/elevenclicks-info/30min" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#EC4899] text-white font-semibold hover:opacity-90 transition-opacity">
                Book a Free Call <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/case-studies" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 text-white/70 font-semibold hover:text-white hover:border-white/25 transition-all glass">
                See Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="glass border border-white/8 rounded-3xl p-8 lg:p-10">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#F59E0B] mb-6">What We Build</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {solutions.map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                  <span className="text-sm text-white/65 leading-snug">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">Shopify vs Custom Store</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Shopify Customization", color: "#F59E0B", desc: "Right for most Canadian retailers starting out or scaling. We customize Shopify themes, build custom apps, and integrate your systems. Faster to launch, lower upfront cost.", best: "Best for: retail businesses with standard product catalogues" },
              { name: "Custom Next.js Store", color: "#EC4899", desc: "Right when Shopify&apos;s limitations are holding you back — complex product configurations, unique checkout flows, or when performance is critical for your conversion rate.", best: "Best for: high-volume stores or complex product logic" },
            ].map((p) => (
              <div key={p.name} className="glass border border-white/8 rounded-2xl p-7">
                <p className="font-bold text-white text-lg mb-3" style={{ color: p.color }}>{p.name}</p>
                <p className="text-sm text-white/60 leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: p.desc }} />
                <p className="text-xs text-white/30">{p.best}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Online Store?</h2>
          <p className="text-white/50 mb-8">Book a free 30-minute call. We&apos;ll review your current setup and tell you exactly what would move the needle on conversions.</p>
          <a href="https://calendly.com/elevenclicks-info/30min" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#EC4899] text-white font-semibold hover:opacity-90 transition-opacity">
            Book a Free 30-Min Call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
