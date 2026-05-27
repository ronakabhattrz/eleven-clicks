import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import {
  Rocket,
  Shield,
  Clock,
  Users,
  Code2,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    color: "#4F8EF7",
    title: "Fast Delivery",
    desc: "We move fast without cutting corners. Agile sprints and clear milestones keep every project on track.",
  },
  {
    icon: Shield,
    color: "#06B6D4",
    title: "Security-First",
    desc: "Best practices baked in from day one — secure code, encrypted data, and regular audits.",
  },
  {
    icon: Code2,
    color: "#8B5CF6",
    title: "Expert Team",
    desc: "Senior engineers and designers who have shipped production software for clients across North America.",
  },
  {
    icon: Users,
    color: "#EC4899",
    title: "Dedicated Support",
    desc: "Real people, real responses. Our team is always available to answer questions and resolve issues.",
  },
  {
    icon: Clock,
    color: "#F59E0B",
    title: "On-Time, On-Budget",
    desc: "Transparent pricing and honest timelines. No surprise bills, no scope creep without your approval.",
  },
  {
    icon: Lightbulb,
    color: "#10B981",
    title: "Innovation Driven",
    desc: "We stay ahead of the curve — leveraging the latest frameworks, AI tools, and cloud infrastructure.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient accent */}
      <div
        className="absolute top-20 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.3), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* ---------- LEFT: Sticky anchor column ---------- */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#8B5CF6] mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
                  Why ElevenClicks
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
                  The Team That{" "}
                  <span className="text-gradient">Gets It Done</span>
                </h2>
                <p className="text-white/55 text-base leading-relaxed mb-8">
                  Ontario-based, globally capable. We bring enterprise-grade
                  quality to businesses of every size — with senior engineers
                  who own the outcome, not just the deliverable.
                </p>

                {/* Highlight card */}
                <div
                  className="relative rounded-2xl p-6 border glass mb-6 overflow-hidden"
                  style={{ borderColor: "rgba(139,92,246,0.25)" }}
                >
                  <div
                    className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-40 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(139,92,246,0.5), transparent 70%)",
                    }}
                  />
                  <div className="relative">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-bold text-gradient leading-none">
                        100%
                      </span>
                      <span className="text-xs font-mono uppercase tracking-widest text-white/40">
                        Satisfaction
                      </span>
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed">
                      Across 50+ projects and 19+ five-star reviews — we don&apos;t ship until you&apos;re genuinely happy.
                    </p>
                  </div>
                </div>

                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors"
                >
                  <span className="border-b border-white/20 group-hover:border-white pb-0.5 transition-colors">
                    Learn more about our team
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </AnimatedSection>
            </div>
          </div>

          {/* ---------- RIGHT: Reasons list ---------- */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {reasons.map((r, i) => {
                const Icon = r.icon;
                return (
                  <AnimatedSection key={r.title} delay={i * 0.06}>
                    <div
                      className="group relative h-full p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300 overflow-hidden"
                    >
                      {/* Left accent bar */}
                      <span
                        className="absolute left-0 top-4 bottom-4 w-0.5 rounded-r-full opacity-60 group-hover:opacity-100 transition-opacity"
                        style={{ background: r.color }}
                      />
                      {/* Corner index */}
                      <span
                        className="absolute top-3 right-4 text-[10px] font-mono font-bold tracking-widest uppercase opacity-30 group-hover:opacity-100 transition-opacity"
                        style={{ color: r.color }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <div className="relative pl-2">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 border"
                          style={{
                            background: `${r.color}12`,
                            borderColor: `${r.color}25`,
                          }}
                        >
                          <Icon
                            className="w-4 h-4"
                            style={{ color: r.color }}
                          />
                        </div>
                        <h3 className="text-sm font-semibold text-white mb-1.5">
                          {r.title}
                        </h3>
                        <p className="text-xs text-white/50 leading-relaxed">
                          {r.desc}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
