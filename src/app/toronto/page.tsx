import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  Brain,
  Wrench,
  ArrowRight,
  ChevronDown,
  MapPin,
  Clock,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Company Toronto | ElevenClicks — Ontario IT Team",
  description:
    "Toronto web development, mobile app, and AI solutions from ElevenClicks. Ontario-based team serving Toronto businesses — get a free quote in 24 hours.",
  keywords: [
    "web development company Toronto",
    "web developer Toronto",
    "IT company Toronto",
    "app development Toronto",
    "Ruby on Rails developer Toronto",
    "AI solutions Toronto",
    "website development Toronto",
    "mobile app developer Toronto",
    "software company Toronto",
    "Next.js developer Toronto",
  ],
  alternates: {
    canonical: "https://elevenclicks.com/toronto",
  },
  openGraph: {
    url: "https://elevenclicks.com/toronto",
    title: "Web Development Company Toronto | ElevenClicks — Ontario IT Team",
    description:
      "Toronto web development, mobile app, and AI solutions from ElevenClicks. Ontario-based team serving Toronto businesses — get a free quote in 24 hours.",
  },
};

const services = [
  {
    id: "web",
    icon: Globe,
    color: "#4F8EF7",
    bg: "rgba(79,142,247,0.08)",
    border: "rgba(79,142,247,0.2)",
    title: "Web Development",
    desc: "Next.js, React, Ruby on Rails. From marketing sites to full SaaS platforms.",
    href: "/services#web",
  },
  {
    id: "mobile",
    icon: Smartphone,
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.2)",
    title: "Mobile App Development",
    desc: "Native Android (Kotlin), iOS (Swift), and Flutter cross-platform apps.",
    href: "/services#mobile",
  },
  {
    id: "ai",
    icon: Brain,
    color: "#EC4899",
    bg: "rgba(236,72,153,0.08)",
    border: "rgba(236,72,153,0.2)",
    title: "AI Solutions",
    desc: "Custom chatbots, automation, and RAG pipelines using GPT-4o, Claude, and Gemini.",
    href: "/services#ai",
  },
  {
    id: "maintenance",
    icon: Wrench,
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.08)",
    border: "rgba(6,182,212,0.2)",
    title: "Website Maintenance",
    desc: "Care plans for Toronto businesses: updates, backups, security, uptime monitoring.",
    href: "/services#maintenance",
  },
];

const faqs = [
  {
    q: "Do you serve Toronto businesses?",
    a: "Yes — ElevenClicks serves Toronto and the Greater Toronto Area (GTA). As an Ontario-based team, we work with Toronto businesses in person or remotely across the GTA.",
  },
  {
    q: "What web development services do you offer in Toronto?",
    a: "We offer full web development (Next.js, React, Ruby on Rails), Android and iOS mobile app development, website maintenance plans, and custom AI solutions for Toronto businesses.",
  },
  {
    q: "How much does web development cost for a Toronto business?",
    a: "Pricing depends on scope. A marketing website starts around $2,500; custom web apps start at $10,000. We provide a fixed-price proposal within 48 hours of a free discovery call.",
  },
  {
    q: "How quickly can ElevenClicks start a project for a Toronto business?",
    a: "We can typically start a new project within 1–2 weeks of proposal acceptance. Most websites are delivered in 3–6 weeks; web apps in 8–16 weeks.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://elevenclicks.com/#organization",
  name: "ElevenClicks",
  description:
    "Web development, mobile app, and AI solutions for Toronto and Ontario businesses.",
  url: "https://elevenclicks.com",
  email: "info@elevenclicks.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "Ontario",
    addressCountry: "CA",
  },
  areaServed: [
    { "@type": "City", name: "Toronto" },
    { "@type": "AdministrativeArea", name: "Ontario" },
    { "@type": "Country", name: "Canada" },
  ],
  priceRange: "$$",
  openingHours: "Mo-Fr 09:00-18:00",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function TorontoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050510]" />
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(79,142,247,0.5) 0%, rgba(139,92,246,0.3) 40%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-semibold uppercase tracking-widest text-[#4F8EF7] mb-5">
              <MapPin className="w-3.5 h-3.5" />
              Serving Toronto &amp; the GTA
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Web Development Company{" "}
              <span className="text-gradient">Serving Toronto, Ontario</span>
            </h1>
            <p className="text-lg text-white/55 max-w-2xl mx-auto mb-10">
              ElevenClicks is Ontario&apos;s trusted IT team — building fast
              websites, mobile apps, and AI solutions for Toronto businesses
              that want real results.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass border border-white/10 text-white/80 font-semibold hover:border-white/20 transition-colors"
              >
                View Services
              </Link>
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { icon: MapPin, label: "Ontario-Based Team", color: "#4F8EF7" },
                { icon: Star, label: "19+ Five-Star Reviews", color: "#EC4899" },
                { icon: Clock, label: "24hr Response", color: "#06B6D4" },
              ].map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/8 text-xs font-medium text-white/60"
                >
                  <Icon className="w-3.5 h-3.5" style={{ color }} />
                  {label}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-semibold uppercase tracking-widest text-[#4F8EF7] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7]" />
              Our Services
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              What We Build for{" "}
              <span className="text-gradient">Toronto Businesses</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <AnimatedSection key={s.id} delay={i * 0.08}>
                  <Link
                    href={s.href}
                    className="group glass border rounded-2xl p-6 flex flex-col gap-4 h-full hover:-translate-y-1 transition-all duration-200"
                    style={{ borderColor: s.border }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center border shrink-0"
                      style={{
                        background: s.bg,
                        borderColor: s.border,
                        boxShadow: `0 0 20px ${s.color}33`,
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: s.color }} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1.5">
                        {s.title}
                      </h3>
                      <p className="text-sm text-white/55 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center gap-1.5 text-xs font-medium" style={{ color: s.color }}>
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="glass border border-white/8 rounded-2xl p-8 grid grid-cols-3 divide-x divide-white/8">
              {[
                { value: "48 hrs", label: "Proposal turnaround" },
                { value: "Ontario-based", label: "Local team, no timezone gap" },
                { value: "5+ years", label: "Building for Canadian businesses" },
              ].map((stat) => (
                <div key={stat.label} className="text-center px-4 first:pl-0 last:pr-0">
                  <p className="text-2xl font-bold text-gradient mb-1">{stat.value}</p>
                  <p className="text-xs text-white/40 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Local paragraph */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">
              Based in Ontario,{" "}
              <span className="text-gradient">Built for Toronto</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              We understand the Ontario business environment. ElevenClicks has
              worked with Toronto startups, independent retailers, professional
              services firms, and SaaS founders across the GTA. We know what it
              takes to compete in a city as dynamic as Toronto — and we build
              digital products that are fast, reliable, and ready to scale.
            </p>
            <p className="text-white/60 leading-relaxed">
              No offshore handoffs, no timezone gaps. When you work with
              ElevenClicks you get direct access to the developer building your
              product — not a project manager relaying messages across oceans.
              That means faster decisions, tighter feedback loops, and a finished
              product that actually reflects your vision.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-semibold uppercase tracking-widest text-[#8B5CF6] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
              FAQ
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Toronto Clients Ask
            </h2>
          </AnimatedSection>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <details className="group glass border border-white/8 rounded-2xl overflow-hidden hover:border-white/15 transition-colors">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-white font-medium text-sm hover:text-white/90 transition-colors">
                    <span className="flex items-center gap-4">
                      <span className="text-[11px] font-mono text-white/30 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {faq.q}
                    </span>
                    <ChevronDown className="w-4 h-4 text-white/40 shrink-0 group-open:rotate-180 transition-transform duration-200" />
                  </summary>
                  <div className="px-6 pb-5 text-sm text-white/55 leading-relaxed border-t border-white/5 pt-4 pl-14">
                    {faq.a}
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(79,142,247,0.15), transparent 60%)",
          }}
        />
        <AnimatedSection className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Build? Let&apos;s Talk.
          </h2>
          <p className="text-white/55 mb-8 text-lg">
            Book a free discovery call with our Ontario-based team and get a
            fixed-price proposal within 48 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Book a Free Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
