import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { Globe, Wrench, Smartphone, Brain, Code2, Terminal, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    color: "#4F8EF7",
    bg: "rgba(79,142,247,0.1)",
    title: "Web Development",
    desc: "High-performance websites and web apps built with the latest stack. From landing pages to full-stack SaaS platforms.",
    href: "/services#web",
  },
  {
    icon: Code2,
    color: "#E53E3E",
    bg: "rgba(229,62,62,0.1)",
    title: "Ruby on Rails",
    desc: "Battle-tested Rails apps, APIs, and CMS platforms. Rails 6, 7 & 8 — from greenfield builds to legacy upgrades.",
    href: "/services#rails",
  },
  {
    icon: Terminal,
    color: "#68A063",
    bg: "rgba(104,160,99,0.1)",
    title: "Node.js & Python",
    desc: "Scalable backends, REST & GraphQL APIs, data pipelines, and automation scripts using Node.js, Python, Django, and FastAPI.",
    href: "/services#nodejs",
  },
  {
    icon: Smartphone,
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.1)",
    title: "Android Mobile Apps",
    desc: "Native and cross-platform Android applications with polished UIs and rock-solid performance.",
    href: "/services#mobile",
  },
  {
    icon: Brain,
    color: "#EC4899",
    bg: "rgba(236,72,153,0.1)",
    title: "AI Solutions",
    desc: "Custom AI integrations — chatbots, automation, data analysis, and intelligent workflows that save time and reduce costs.",
    href: "/services#ai",
  },
  {
    icon: Wrench,
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.1)",
    title: "Website Maintenance",
    desc: "Keep your site fast, secure, and up-to-date with our proactive maintenance plans. We handle updates, backups, and support.",
    href: "/services#maintenance",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-[#4F8EF7] uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Services Built for{" "}
            <span className="text-gradient">Modern Business</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            End-to-end digital solutions — from idea to launch and beyond.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <Link
                  href={s.href}
                  className="group block h-full glass rounded-2xl p-6 border border-white/6 hover:border-white/15 transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: s.bg }}
                  >
                    <Icon className="w-6 h-6" style={{ color: s.color }} />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-4">
                    {s.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-medium" style={{ color: s.color }}>
                    Learn more
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
