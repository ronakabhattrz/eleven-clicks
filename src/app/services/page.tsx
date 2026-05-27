import type { Metadata } from "next";
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

const serviceListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "IT Services — ElevenClicks",
  description: "Custom software development services offered by ElevenClicks in Ontario, Canada.",
  url: "https://elevenclicks.com/services",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Web Development",
        description: "Next.js, React, Ruby on Rails, Node.js, and Python web applications and SaaS platforms for Canadian businesses.",
        provider: { "@id": "https://elevenclicks.com/#organization" },
        areaServed: { "@type": "Country", name: "Canada" },
        url: "https://elevenclicks.com/services#web",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Website Maintenance",
        description: "Ongoing care plans covering plugin updates, daily backups, security monitoring, uptime checks, and priority support.",
        provider: { "@id": "https://elevenclicks.com/#organization" },
        areaServed: { "@type": "Country", name: "Canada" },
        url: "https://elevenclicks.com/services#maintenance",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Mobile App Development",
        description: "Native Android (Kotlin), native iOS (Swift), and cross-platform Flutter applications from idea to App Store submission.",
        provider: { "@id": "https://elevenclicks.com/#organization" },
        areaServed: { "@type": "Country", name: "Canada" },
        url: "https://elevenclicks.com/services#mobile",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "AI Solutions",
        description: "Custom AI integrations using OpenAI GPT-4o, Anthropic Claude, and Google Gemini — chatbots, RAG pipelines, and workflow automation.",
        provider: { "@id": "https://elevenclicks.com/#organization" },
        areaServed: { "@type": "Country", name: "Canada" },
        url: "https://elevenclicks.com/services#ai",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Ruby on Rails Development",
        description: "Full-stack Rails applications, SaaS products, REST APIs, Stripe integrations, and legacy Rails upgrades for Rails 6, 7, and 8.",
        provider: { "@id": "https://elevenclicks.com/#organization" },
        areaServed: { "@type": "Country", name: "Canada" },
        url: "https://elevenclicks.com/services#rails",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Service",
        name: "Node.js Development",
        description: "High-throughput REST and GraphQL APIs, real-time services, and TypeScript-first backends with Node.js.",
        provider: { "@id": "https://elevenclicks.com/#organization" },
        areaServed: { "@type": "Country", name: "Canada" },
        url: "https://elevenclicks.com/services#nodejs",
      },
    },
    {
      "@type": "ListItem",
      position: 7,
      item: {
        "@type": "Service",
        name: "Python Development",
        description: "Django, FastAPI, and Flask web apps; data pipelines; ETL automation; and script automation for Canadian businesses.",
        provider: { "@id": "https://elevenclicks.com/#organization" },
        areaServed: { "@type": "Country", name: "Canada" },
        url: "https://elevenclicks.com/services#python",
      },
    },
  ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-white pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
            Our Services &middot; {total} Specialties
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-[#0f0f0f] mb-5">
            Ruby on Rails, Node.js,{" "}
            <span className="text-[#4F46E5]">Web &amp; Mobile</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
            Full-stack Ruby on Rails, Node.js, Python, React, Android, iOS &amp; Flutter apps — end-to-end digital services built for Canadian businesses ready to grow.
          </p>
          {/* Service anchor chips */}
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium border border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-all duration-200 bg-white"
                >
                  <Icon className="w-3.5 h-3.5" style={{ color: s.color }} />
                  {s.tag}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {services.map((s, i) => {
              const Icon = s.icon;
              const index = String(i + 1).padStart(2, "0");
              return (
                <article
                  key={s.id}
                  id={s.id}
                  className="scroll-mt-24 bg-white border border-gray-100 shadow-sm rounded-3xl overflow-hidden"
                >
                  <div
                    className="h-0.5 w-full"
                    style={{ background: `linear-gradient(90deg, ${s.color}, transparent 60%)` }}
                  />
                  <div className="p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
                      {/* Left: header */}
                      <div className="lg:w-80 shrink-0 mb-6 lg:mb-0">
                        <div className="flex items-center gap-4 mb-4">
                          <div
                            className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                            style={{ background: `${s.color}15` }}
                          >
                            <Icon className="w-5 h-5" style={{ color: s.color }} />
                          </div>
                          <span
                            className="text-[10px] font-mono font-bold tracking-widest uppercase"
                            style={{ color: s.color }}
                          >
                            {index} · {s.tag}
                          </span>
                        </div>
                        <h2 className="text-xl font-bold text-[#0f0f0f] leading-tight mb-3">
                          {s.title}
                        </h2>
                        <div
                          className="h-0.5 w-8 rounded-full mb-4"
                          style={{ background: s.color }}
                        />
                        <p className="text-sm text-gray-500 leading-relaxed mb-6">
                          {s.desc}
                        </p>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors text-white"
                          style={{ background: s.color }}
                        >
                          Start a project
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      {/* Right: features */}
                      <div className="flex-1">
                        <p className="text-[10px] font-mono font-semibold uppercase tracking-widest text-gray-400 mb-4">
                          What&apos;s included
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {s.features.map((f) => (
                            <li
                              key={f}
                              className="flex items-start gap-2.5 text-sm text-gray-600 leading-snug"
                            >
                              <CheckCircle2
                                className="w-4 h-4 mt-0.5 shrink-0"
                                style={{ color: s.color }}
                              />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 pt-5 border-t border-gray-100 flex justify-end">
                          <span className="text-[10px] font-mono tracking-widest text-gray-300">
                            {index} / {String(total).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />
              FAQ
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0f0f0f]">
              Common Questions
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden hover:border-gray-200 transition-colors"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-[#0f0f0f] font-medium text-sm hover:text-gray-700 transition-colors">
                  <span className="flex items-center gap-4">
                    <span className="text-[11px] font-mono text-gray-300 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {faq.q}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-400 shrink-0 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4 pl-14">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#4F46E5] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-indigo-200 mb-8 text-lg">
            Book a free 30-minute discovery call and we&apos;ll help you figure
            out the right solution for your goals and budget.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#4F46E5] font-semibold hover:bg-indigo-50 transition-colors"
          >
            Book a Free Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
