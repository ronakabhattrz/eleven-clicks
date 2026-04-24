import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Globe,
  Wrench,
  Smartphone,
  Brain,
  Code2,
  Terminal,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

type Service = {
  icon: typeof Globe;
  color: string;
  bg: string;
  title: string;
  desc: string;
  href: string;
  highlights?: string[];
  span: string;
  featured?: boolean;
};

const services: Service[] = [
  {
    icon: Globe,
    color: "#4F8EF7",
    bg: "rgba(79,142,247,0.08)",
    title: "Web Development",
    desc: "High-performance websites and full-stack SaaS platforms built with Next.js, React, and modern infrastructure.",
    href: "/services#web",
    highlights: ["Next.js / React", "E-commerce", "Core Web Vitals"],
    span: "lg:col-span-2",
    featured: true,
  },
  {
    icon: Code2,
    color: "#E53E3E",
    bg: "rgba(229,62,62,0.08)",
    title: "Ruby on Rails",
    desc: "Battle-tested Rails apps — CMS, APIs, SaaS. Rails 6, 7 & 8.",
    href: "/services#rails",
    span: "lg:col-span-1",
  },
  {
    icon: Terminal,
    color: "#68A063",
    bg: "rgba(104,160,99,0.08)",
    title: "Node.js & Python",
    desc: "Scalable backends, REST & GraphQL APIs, data pipelines.",
    href: "/services#nodejs",
    span: "lg:col-span-1",
  },
  {
    icon: Smartphone,
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
    title: "Android Mobile Apps",
    desc: "Native and cross-platform apps with polished UI and rock-solid performance.",
    href: "/services#mobile",
    span: "lg:col-span-1",
  },
  {
    icon: Brain,
    color: "#EC4899",
    bg: "rgba(236,72,153,0.08)",
    title: "AI Solutions",
    desc: "Custom AI integrations — chatbots, automation, and intelligent workflows that save time and reduce costs.",
    href: "/services#ai",
    highlights: ["OpenAI · Claude", "RAG", "Automation"],
    span: "lg:col-span-2",
    featured: true,
  },
  {
    icon: Wrench,
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.08)",
    title: "Website Maintenance",
    desc: "Proactive maintenance — updates, backups, monitoring, and priority support.",
    href: "/services#maintenance",
    span: "lg:col-span-1",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(79,142,247,0.1), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Asymmetric header: left title, right description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-end">
          <AnimatedSection className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#4F8EF7] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7] animate-pulse" />
              What We Do
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
              Ruby on Rails, Node.js, Web &{" "}
              <span className="text-gradient">Mobile App Services</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection className="lg:col-span-5" delay={0.1}>
            <p className="text-white/50 text-base leading-relaxed border-l-2 border-white/10 pl-5">
              Full-stack Ruby on Rails, Node.js, Python, React, and Android solutions — from idea to launch and beyond. Six specialties, one accountable team.
            </p>
          </AnimatedSection>
        </div>

        {/* Bento grid: 3-col on desktop, featured cards span 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <AnimatedSection key={s.title} delay={i * 0.08} className={s.span}>
                <Link
                  href={s.href}
                  className={`group block relative h-full rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 ${
                    s.featured ? "p-8" : "p-6"
                  }`}
                  style={{
                    background: s.featured
                      ? `linear-gradient(135deg, ${s.bg}, rgba(13,13,26,0.6))`
                      : "rgba(13,13,26,0.6)",
                    borderColor: s.featured
                      ? `${s.color}40`
                      : "rgba(255,255,255,0.06)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  {/* Top accent line for featured */}
                  {s.featured && (
                    <div
                      className="absolute top-0 left-0 right-0 h-0.5"
                      style={{
                        background: `linear-gradient(90deg, ${s.color}, transparent)`,
                      }}
                    />
                  )}

                  {/* Corner glow for featured */}
                  {s.featured && (
                    <div
                      className="pointer-events-none absolute -bottom-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-30 transition-opacity duration-500 group-hover:opacity-60"
                      style={{
                        background: `radial-gradient(circle, ${s.color}, transparent 70%)`,
                      }}
                    />
                  )}

                  <div className="relative flex flex-col h-full">
                    {/* Icon + arrow */}
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className={`${
                          s.featured ? "w-14 h-14 rounded-2xl" : "w-11 h-11 rounded-xl"
                        } flex items-center justify-center border`}
                        style={{
                          background: s.bg,
                          borderColor: `${s.color}30`,
                          boxShadow: s.featured
                            ? `0 0 30px ${s.color}30`
                            : "none",
                        }}
                      >
                        <Icon
                          className={s.featured ? "w-6 h-6" : "w-5 h-5"}
                          style={{ color: s.color }}
                        />
                      </div>
                      <ArrowUpRight
                        className="w-4 h-4 text-white/30 group-hover:text-white/80 group-hover:rotate-12 transition-all"
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className={`font-bold text-white mb-2 leading-tight ${
                        s.featured ? "text-xl lg:text-2xl" : "text-base"
                      }`}
                    >
                      {s.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-white/55 leading-relaxed mb-4 flex-1 ${
                        s.featured ? "text-sm" : "text-xs"
                      }`}
                    >
                      {s.desc}
                    </p>

                    {/* Highlights for featured */}
                    {s.highlights && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {s.highlights.map((h) => (
                          <span
                            key={h}
                            className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium border"
                            style={{
                              background: s.bg,
                              borderColor: `${s.color}30`,
                              color: s.color,
                            }}
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Bottom meta bar */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/5">
                      <span
                        className="text-[10px] font-mono font-bold uppercase tracking-[0.2em]"
                        style={{ color: s.color }}
                      >
                        {String(i + 1).padStart(2, "0")} / 06
                      </span>
                      <span
                        className="inline-flex items-center gap-1 text-[11px] font-medium"
                        style={{ color: s.color }}
                      >
                        Learn more
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
