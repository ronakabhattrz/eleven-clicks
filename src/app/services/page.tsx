import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import {
  Globe,
  Wrench,
  Smartphone,
  Brain,
  Code2,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Ruby on Rails, Node.js, Python, Web & Mobile Apps",
  description:
    "Ruby on Rails development, Node.js & Python backends, React web apps, Android & iOS mobile apps, Flutter development, website maintenance, and custom AI solutions — ElevenClicks, Ontario's full-service IT team.",
  keywords: [
    "web development Ontario",
    "Android app development Ontario",
    "iOS app development Ontario",
    "Flutter app development Canada",
    "website maintenance Canada",
    "AI solutions Canada",
    "Next.js development",
    "Kotlin Android apps",
    "Swift iOS development",
    "AI chatbot development",
    "custom software Ontario",
    "Ruby on Rails development",
    "Rails developer Canada",
    "Ruby on Rails developer Ontario",
  ],
  alternates: {
    canonical: "https://elevenclicks.com/services",
  },
  openGraph: {
    url: "https://elevenclicks.com/services",
    title: "Services — Ruby on Rails, Node.js, Python, Web & Mobile | ElevenClicks",
    description:
      "Ruby on Rails, Node.js, Python, React web apps, Android & iOS mobile apps, Flutter development, and AI solutions for Canadian businesses. End-to-end digital services from Ontario's trusted IT team.",
  },
};

const services = [
  {
    id: "web",
    icon: Globe,
    color: "#4F8EF7",
    bg: "rgba(79,142,247,0.08)",
    border: "rgba(79,142,247,0.2)",
    tag: "Web Development",
    title: "High-Performance Websites & Web Apps",
    desc: "From marketing sites to complex SaaS platforms — we design and build web experiences that are fast, accessible, and conversion-focused. Every project is built with modern technologies and SEO best practices from day one.",
    features: [
      "Next.js / React / Vue web applications",
      "E-commerce stores (Shopify, custom)",
      "CMS integrations (WordPress, Sanity, Contentful)",
      "RESTful & GraphQL API development",
      "Performance optimization & Core Web Vitals",
      "Responsive design for all devices",
    ],
  },
  {
    id: "maintenance",
    icon: Wrench,
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.08)",
    border: "rgba(6,182,212,0.2)",
    tag: "Website Maintenance",
    title: "Proactive Care Plans — Always Up-to-Date",
    desc: "Your website is a living asset that needs ongoing care. Our maintenance plans keep it fast, secure, and reliably running — so you can focus on your business, not your server uptime.",
    features: [
      "Plugin & CMS updates",
      "Daily automated backups",
      "Security monitoring & malware removal",
      "Uptime monitoring with instant alerts",
      "Performance audits & speed optimization",
      "Priority support with real humans",
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.2)",
    tag: "Mobile App Development",
    title: "Android, iOS & Flutter Applications",
    desc: "We build beautiful, performant mobile apps across Android, iOS, and Flutter. Whether it's a companion app for your service or a standalone product, we handle everything from architecture to app store submission.",
    features: [
      "Native Android (Kotlin / Jetpack Compose)",
      "Native iOS (Swift / SwiftUI)",
      "Cross-platform Flutter (Android + iOS)",
      "Google Play Store & Apple App Store submission",
      "Push notifications & offline support",
      "Firebase & cloud backend integrations",
    ],
  },
  {
    id: "ai",
    icon: Brain,
    color: "#EC4899",
    bg: "rgba(236,72,153,0.08)",
    border: "rgba(236,72,153,0.2)",
    tag: "AI Solutions",
    title: "Custom AI That Works for Your Business",
    desc: "We integrate cutting-edge AI into your existing workflows — automating repetitive tasks, surfacing insights from your data, and creating intelligent customer experiences that scale without adding headcount.",
    features: [
      "Custom AI chatbots & virtual assistants",
      "LLM integrations (OpenAI, Claude, Gemini)",
      "Document & data extraction pipelines",
      "Workflow automation with AI decision-making",
      "RAG-based knowledge bases",
      "AI-powered analytics dashboards",
    ],
  },
  {
    id: "rails",
    icon: Code2,
    color: "#E53E3E",
    bg: "rgba(229,62,62,0.08)",
    border: "rgba(229,62,62,0.2)",
    tag: "Ruby on Rails",
    title: "Battle-Tested Ruby on Rails Development",
    desc: "With years of hands-on Rails experience across CMS platforms, SaaS products, and APIs, we build robust, maintainable backends that scale. From greenfield apps to legacy Rails upgrades — we know Rails inside and out.",
    features: [
      "Full-stack Rails applications (Rails 6, 7, 8)",
      "RESTful & JSON:API backend development",
      "ActiveRecord, Sidekiq & background jobs",
      "Devise, Pundit & authentication flows",
      "Stripe, AWS S3 & third-party integrations",
      "Legacy Rails upgrades & refactors",
    ],
  },
  {
    id: "nodejs",
    icon: Code2,
    color: "#68A063",
    bg: "rgba(104,160,99,0.08)",
    border: "rgba(104,160,99,0.2)",
    tag: "Node.js Development",
    title: "Fast, Scalable Backends with Node.js & TypeScript",
    desc: "We build high-throughput APIs, real-time services, and microservices with Node.js and TypeScript. Whether you need a lightweight Express API or a full event-driven architecture, we deliver clean, maintainable server-side JavaScript that scales under load.",
    features: [
      "REST & GraphQL APIs (Express, Fastify, Hono)",
      "Real-time apps with Socket.io & WebSockets",
      "Microservices & event-driven architecture",
      "TypeScript-first development",
      "PostgreSQL, MongoDB & Redis integrations",
      "Deployment on AWS, Railway & Vercel",
    ],
  },
  {
    id: "python",
    icon: Code2,
    color: "#3776AB",
    bg: "rgba(55,118,171,0.08)",
    border: "rgba(55,118,171,0.2)",
    tag: "Python Development",
    title: "Python for Web, Automation & Data Pipelines",
    desc: "From Django and FastAPI web apps to data engineering scripts and automation workflows — Python is one of our core languages. We use it to build reliable backends, process large datasets, and connect business systems that previously needed manual effort.",
    features: [
      "Web apps & APIs (Django, FastAPI, Flask)",
      "Data pipelines & ETL automation",
      "Web scraping & data extraction",
      "Script automation & task scheduling",
      "PostgreSQL, MySQL & cloud DB integrations",
      "Deployment on AWS, GCP & Heroku",
    ],
  },
];

const faqs = [
  {
    q: "How long does a typical website project take?",
    a: "Most marketing websites and landing pages are delivered in 2–4 weeks. Larger web apps or e-commerce platforms typically take 6–12 weeks depending on scope. We'll give you a firm timeline in our proposal before any work begins.",
  },
  {
    q: "Do you work with small businesses and startups?",
    a: "Absolutely. Many of our best clients are early-stage startups and small businesses. We tailor scope and pricing to match your stage and budget — no enterprise bloat.",
  },
  {
    q: "What's included in a website maintenance plan?",
    a: "Our maintenance plans cover plugin and CMS updates, daily automated backups, security monitoring, uptime checks, and priority support. You can add on performance audits and content updates as needed.",
  },
  {
    q: "Can you build for both Android and iOS?",
    a: "Yes. We build native Android apps with Kotlin/Jetpack Compose and cross-platform apps with Flutter or React Native that cover both Android and iOS from a single codebase.",
  },
  {
    q: "What AI technologies do you work with?",
    a: "We integrate with OpenAI (GPT-4o), Anthropic Claude, Google Gemini, and open-source models. We build custom RAG pipelines, fine-tune smaller models, and connect AI to your existing data and tools.",
  },
  {
    q: "Do you offer Ruby on Rails development?",
    a: "Yes — Ruby on Rails is one of our core specialties. We've shipped Rails apps ranging from custom CMS platforms and SaaS products to REST APIs and Stripe-integrated marketplaces. We work with Rails 6, 7, and 8, and can help with new builds, legacy upgrades, or ongoing feature development.",
  },
  {
    q: "How do I get started?",
    a: "Just reach out via our contact page. We'll schedule a free 30-minute discovery call, learn about your project, and send you a detailed proposal with scope and pricing within 48 hours.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://elevenclicks.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://elevenclicks.com/services" },
  ],
};

export default function ServicesPage() {
  const total = services.length;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7] animate-pulse" />
              Our Services · {total} Specialties
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Ruby on Rails, Node.js, Web &{" "}
              <span className="text-gradient">Mobile App Solutions</span>
            </h1>
            <p className="text-lg text-white/55 max-w-2xl mx-auto mb-10">
              Full-stack Ruby on Rails, Node.js, Python, React, Android, iOS & Flutter apps — end-to-end digital services built for Canadian businesses ready to grow.
            </p>
          </AnimatedSection>

          {/* Service Index Chips */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: s.bg,
                      borderColor: s.border,
                      color: s.color,
                    }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {s.tag}
                  </a>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services — Timeline / Spine Layout */}
      <section className="pb-24 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative">
            {/* Central spine line (mobile: left, desktop: center) */}
            <div
              className="absolute top-0 bottom-0 w-px left-6 lg:left-1/2 lg:-translate-x-1/2 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, transparent 0%, rgba(79,142,247,0.4) 10%, rgba(139,92,246,0.4) 35%, rgba(236,72,153,0.4) 60%, rgba(6,182,212,0.4) 85%, transparent 100%)",
              }}
            />

            <div className="flex flex-col gap-16 lg:gap-24">
              {services.map((s, i) => {
                const Icon = s.icon;
                const index = String(i + 1).padStart(2, "0");
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={s.id}
                    id={s.id}
                    className="relative scroll-mt-24"
                  >
                    {/* Spine node (pulsing dot) */}
                    <div className="absolute left-6 lg:left-1/2 top-6 -translate-x-1/2 z-20">
                      <div className="relative">
                        <div
                          className="absolute inset-0 rounded-full blur-md animate-pulse"
                          style={{ background: s.color, opacity: 0.6 }}
                        />
                        <div
                          className="relative w-4 h-4 rounded-full border-2 border-[#050510]"
                          style={{
                            background: s.color,
                            boxShadow: `0 0 20px ${s.color}, 0 0 40px ${s.color}66`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Index label on spine (desktop only, positioned above node) */}
                    <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 -top-4 z-10">
                      <span
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold tracking-widest border"
                        style={{
                          background: "#050510",
                          color: s.color,
                          borderColor: s.border,
                        }}
                      >
                        {index}
                      </span>
                    </div>

                    {/* Card wrapper — alternating sides on desktop */}
                    <div
                      className={`pl-16 lg:pl-0 lg:w-1/2 ${
                        isLeft ? "lg:pr-14" : "lg:ml-auto lg:pl-14"
                      }`}
                    >
                      {/* Connector arm from spine to card (desktop only) */}
                      <div
                        className={`hidden lg:block absolute top-8 h-px w-12 ${
                          isLeft ? "right-1/2 mr-2" : "left-1/2 ml-2"
                        }`}
                        style={{
                          background: `linear-gradient(${isLeft ? "270deg" : "90deg"}, ${s.color}, transparent)`,
                        }}
                      />

                      <AnimatedSection delay={0.05}>
                        <article
                          className="group relative glass rounded-3xl border overflow-hidden transition-all duration-300 hover:-translate-y-1"
                          style={{ borderColor: s.border }}
                        >
                          {/* Top gradient accent */}
                          <div
                            className="absolute top-0 left-0 right-0 h-0.5"
                            style={{
                              background: `linear-gradient(90deg, ${s.color}, transparent 70%)`,
                            }}
                          />

                          {/* Giant number watermark */}
                          <div
                            aria-hidden
                            className="pointer-events-none absolute -top-2 -right-2 text-[9rem] font-black leading-none select-none"
                            style={{ color: s.color, opacity: 0.07 }}
                          >
                            {index}
                          </div>

                          {/* Corner glow */}
                          <div
                            className="pointer-events-none absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-30 transition-opacity duration-500 group-hover:opacity-60"
                            style={{
                              background: `radial-gradient(circle, ${s.color}, transparent 70%)`,
                            }}
                          />

                          {/* Vertical tag strip on outer edge (desktop) */}
                          <div
                            className={`hidden lg:flex absolute top-6 ${
                              isLeft ? "left-0" : "right-0"
                            } items-center justify-center`}
                          >
                            <div
                              className={`px-2 py-3 ${
                                isLeft ? "rounded-r-md" : "rounded-l-md"
                              }`}
                              style={{
                                background: s.bg,
                                borderTop: `1px solid ${s.border}`,
                                borderBottom: `1px solid ${s.border}`,
                                borderRight: isLeft ? `1px solid ${s.border}` : "none",
                                borderLeft: !isLeft ? `1px solid ${s.border}` : "none",
                              }}
                            >
                              <span
                                className="block text-[10px] font-mono font-bold tracking-[0.3em] uppercase"
                                style={{
                                  color: s.color,
                                  writingMode: "vertical-rl",
                                  transform: isLeft ? "rotate(180deg)" : "none",
                                }}
                              >
                                {s.tag}
                              </span>
                            </div>
                          </div>

                          <div className="relative p-7 lg:p-8 lg:px-12">
                            {/* Header: Icon + mobile tag */}
                            <div className="flex items-center gap-4 mb-6">
                              <div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center border shrink-0"
                                style={{
                                  background: s.bg,
                                  borderColor: s.border,
                                  boxShadow: `0 0 30px ${s.color}40`,
                                }}
                              >
                                <Icon
                                  className="w-6 h-6"
                                  style={{ color: s.color }}
                                />
                              </div>
                              <div className="flex flex-col gap-0.5 lg:hidden">
                                <span
                                  className="text-[10px] font-mono font-bold tracking-widest uppercase"
                                  style={{ color: s.color }}
                                >
                                  {index} · {s.tag}
                                </span>
                              </div>
                            </div>

                            {/* Title */}
                            <h2 className="text-2xl lg:text-[1.65rem] font-bold text-white mb-3 leading-tight">
                              {s.title}
                            </h2>
                            <div
                              className="h-0.5 w-10 rounded-full mb-4"
                              style={{ background: s.color }}
                            />

                            {/* Description */}
                            <p className="text-white/55 leading-relaxed text-sm mb-6">
                              {s.desc}
                            </p>

                            {/* Features — compact 2-col grid */}
                            <div className="flex items-center gap-3 mb-3">
                              <span
                                className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em]"
                                style={{ color: s.color }}
                              >
                                Included
                              </span>
                              <div className="flex-1 h-px bg-white/5" />
                            </div>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-7">
                              {s.features.map((f) => (
                                <li
                                  key={f}
                                  className="flex items-start gap-2 text-xs text-white/70 leading-snug"
                                >
                                  <CheckCircle2
                                    className="w-3.5 h-3.5 mt-0.5 shrink-0"
                                    style={{ color: s.color }}
                                  />
                                  <span>{f}</span>
                                </li>
                              ))}
                            </ul>

                            {/* Footer: CTA + meta */}
                            <div className="flex items-center justify-between gap-4 pt-5 border-t border-white/5">
                              <Link
                                href="/contact"
                                className="group/cta inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200"
                                style={{
                                  background: s.bg,
                                  color: s.color,
                                  border: `1px solid ${s.border}`,
                                }}
                              >
                                Start a project
                                <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-1 transition-transform" />
                              </Link>
                              <span
                                className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/30"
                              >
                                {index} / {String(total).padStart(2, "0")}
                              </span>
                            </div>
                          </div>
                        </article>
                      </AnimatedSection>
                    </div>
                  </div>
                );
              })}

              {/* End cap on spine */}
              <div className="relative">
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 -top-8">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#4F8EF7] to-[#8B5CF6] shadow-[0_0_20px_rgba(139,92,246,0.6)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-semibold uppercase tracking-widest text-[#8B5CF6] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
              FAQ
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Common Questions
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
            Not Sure What You Need?
          </h2>
          <p className="text-white/55 mb-8 text-lg">
            Book a free 30-minute discovery call and we&apos;ll help you figure
            out the right solution for your goals and budget.
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
