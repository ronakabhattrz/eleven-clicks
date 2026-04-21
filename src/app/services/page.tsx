import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import {
  Globe,
  Wrench,
  Smartphone,
  Brain,
  CheckCircle2,
  ArrowRight,
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
];

export default function ServicesPage() {
  return (
    <>
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
