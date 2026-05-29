import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile App Development Toronto — iOS, Android & Flutter",
  description:
    "iOS and Android mobile app development in Toronto. Native Swift, Kotlin, and Flutter apps for Canadian businesses. Fixed-price, App Store to launch. Free consultation.",
  alternates: { canonical: "https://elevenclicks.com/services/mobile-app-development" },
  openGraph: {
    url: "https://elevenclicks.com/services/mobile-app-development",
    title: "Mobile App Development Toronto — iOS, Android & Flutter | ElevenClicks",
    description: "Native iOS, Android, and Flutter apps for Canadian businesses. Ontario-based, fixed-price.",
    locale: "en_CA",
  },
};

const features = [
  "Native iOS (Swift / SwiftUI)",
  "Native Android (Kotlin / Jetpack Compose)",
  "Cross-platform Flutter apps",
  "App Store & Google Play submission",
  "Push notifications & offline support",
  "Firebase & cloud backend integrations",
  "In-app purchases & subscriptions",
  "PIPEDA-compliant data handling",
];

const faqs = [
  { q: "How much does a mobile app cost in Canada?", a: "Most mobile app projects start at $12,000–$20,000 CAD for a focused iOS or Android app. Cross-platform Flutter apps covering both platforms start around $15,000 CAD. Complex apps with custom backends run $30,000–$80,000 CAD. We quote fixed prices." },
  { q: "How long does it take to build a mobile app?", a: "A focused app with clear scope takes 8–14 weeks from start to App Store submission. Apps with complex backends or multiple integrations take 14–24 weeks. We give you a firm timeline before you commit." },
  { q: "Should I build for iOS, Android, or both?", a: "For most Canadian businesses, iOS first — iPhone penetration in Canada is around 55%. If your audience skews younger or working-class, Android first. Flutter lets us cover both from one codebase, which reduces cost significantly." },
  { q: "Do you handle App Store submission?", a: "Yes. We handle the full submission process for both the Apple App Store and Google Play Store, including screenshots, descriptions, age ratings, and the review process. We stay on until your app is live." },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mobile App Development",
  description: "iOS, Android, and Flutter mobile app development for Canadian businesses — from design to App Store launch.",
  provider: { "@type": "Organization", name: "ElevenClicks", url: "https://elevenclicks.com" },
  areaServed: [{ "@type": "City", name: "Toronto" }, { "@type": "Country", name: "Canada" }],
  url: "https://elevenclicks.com/services/mobile-app-development",
  offers: { "@type": "Offer", price: "12000", priceCurrency: "CAD", description: "Starting price for mobile app projects" },
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
    { "@type": "ListItem", position: 3, name: "Mobile App Development", item: "https://elevenclicks.com/services/mobile-app-development" },
  ],
};

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050510]" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] pointer-events-none opacity-15"
          style={{ background: "radial-gradient(circle, #8B5CF6 0%, #EC4899 60%, transparent 70%)" }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#8B5CF6]/20 bg-[#8B5CF6]/5 text-xs font-semibold uppercase tracking-widest text-[#8B5CF6] mb-6">
              <Smartphone className="w-3.5 h-3.5" /> Mobile Apps · Toronto, Ontario
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              iOS &amp; Android App Development<br /><span className="text-gradient">for Canadian Businesses</span>
            </h1>
            <p className="text-lg text-white/55 leading-relaxed mb-8 max-w-xl">
              We build native iOS, Android, and Flutter apps for Canadian businesses — from concept to App Store launch. Fixed prices, Ontario-based team, full submission support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://calendly.com/elevenclicks-info/30min" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white font-semibold hover:opacity-90 transition-opacity">
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
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#8B5CF6] mb-6">What We Build</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                  <span className="text-sm text-white/65 leading-snug">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">iOS vs Android vs Flutter</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "Native iOS", color: "#8B5CF6", tech: "Swift / SwiftUI", best: "Best performance, best design. Right when your audience is primarily iPhone users (55%+ of Canadians).", price: "From $12,000 CAD" },
              { name: "Native Android", color: "#EC4899", tech: "Kotlin / Jetpack Compose", best: "Right for businesses targeting a broader Canadian demographic or enterprise Android deployments.", price: "From $12,000 CAD" },
              { name: "Flutter", color: "#06B6D4", tech: "Single codebase, both platforms", best: "Best value when you need iOS and Android. One codebase, both stores, lower ongoing maintenance cost.", price: "From $15,000 CAD" },
            ].map((p) => (
              <div key={p.name} className="glass border border-white/8 rounded-2xl p-7 hover:border-white/15 transition-colors">
                <p className="text-xs font-mono font-bold uppercase tracking-widest mb-2" style={{ color: p.color }}>{p.name}</p>
                <p className="text-[11px] text-white/30 mb-3">{p.tech}</p>
                <p className="text-sm text-white/60 leading-relaxed mb-4">{p.best}</p>
                <p className="text-sm font-bold text-white">{p.price}</p>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your App?</h2>
          <p className="text-white/50 mb-8">Book a free 30-minute call. We&apos;ll discuss your idea, recommend the right platform, and send a fixed-price proposal within 48 hours.</p>
          <a href="https://calendly.com/elevenclicks-info/30min" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white font-semibold hover:opacity-90 transition-opacity">
            Book a Free 30-Min Call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
