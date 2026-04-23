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
  title: "Services — Web, Mobile & AI Development",
  description:
    "Web development, Android apps, website maintenance, and custom AI solutions from ElevenClicks — Ontario's full-service IT team. Explore what we build and how we can help your business grow.",
  keywords: [
    "web development Ontario",
    "Android app development Ontario",
    "website maintenance Canada",
    "AI solutions Canada",
    "Next.js development",
    "Kotlin Android apps",
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
    title: "Services — Web, Mobile & AI Development | ElevenClicks",
    description:
      "Web development, Android apps, website maintenance, and AI solutions for Canadian businesses. End-to-end digital services from Ontario's trusted IT team.",
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
    tag: "Android Mobile Apps",
    title: "Native & Cross-Platform Android Applications",
    desc: "We build beautiful, performant Android apps that users actually enjoy using. Whether it's a companion app for your service or a standalone product, we handle everything from architecture to Play Store submission.",
    features: [
      "Native Android (Kotlin / Jetpack Compose)",
      "Cross-platform with Flutter / React Native",
      "Google Play Store submission & ASO",
      "Push notifications & offline support",
      "Firebase & cloud backend integrations",
      "Ongoing app maintenance & updates",
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
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050510]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-sm font-semibold text-[#4F8EF7] uppercase tracking-widest mb-3">
              Our Services
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Everything You Need to{" "}
              <span className="text-gradient">Succeed Online</span>
            </h1>
            <p className="text-lg text-white/55 max-w-2xl mx-auto">
              End-to-end digital services designed for Canadian businesses ready
              to grow — delivered by a team that cares about your results.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-12">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isEven = i % 2 === 0;
            return (
              <AnimatedSection key={s.id} delay={0.1}>
                <div
                  id={s.id}
                  className="scroll-mt-24 glass rounded-3xl border p-8 lg:p-12"
                  style={{ borderColor: s.border }}
                >
                  <div
                    className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-start`}
                  >
                    {/* Left/Right text */}
                    <div className="flex-1 min-w-0">
                      <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
                        style={{ background: s.bg, color: s.color }}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {s.tag}
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-snug">
                        {s.title}
                      </h2>
                      <p className="text-white/55 leading-relaxed mb-8">
                        {s.desc}
                      </p>
                      <Link
                        href="/contact"
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-200"
                        style={{
                          background: `linear-gradient(135deg, ${s.color}cc, ${s.color}88)`,
                        }}
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    {/* Features list */}
                    <div
                      className="flex-1 rounded-2xl p-6"
                      style={{ background: s.bg }}
                    >
                      <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: s.color }}>
                        What&apos;s Included
                      </p>
                      <ul className="flex flex-col gap-3">
                        {s.features.map((f) => (
                          <li key={f} className="flex items-start gap-3 text-sm text-white/70">
                            <CheckCircle2
                              className="w-4 h-4 mt-0.5 shrink-0"
                              style={{ color: s.color }}
                            />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sm font-semibold text-[#8B5CF6] uppercase tracking-widest mb-3">
              FAQ
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Common Questions
            </h2>
          </AnimatedSection>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <details className="group glass border border-white/8 rounded-2xl overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-white font-medium text-sm hover:text-white/90 transition-colors">
                    {faq.q}
                    <ChevronDown className="w-4 h-4 text-white/40 shrink-0 group-open:rotate-180 transition-transform duration-200" />
                  </summary>
                  <div className="px-6 pb-5 text-sm text-white/55 leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24">
        <AnimatedSection className="mx-auto max-w-3xl px-6 text-center">
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
