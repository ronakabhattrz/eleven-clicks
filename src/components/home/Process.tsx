import AnimatedSection from "@/components/AnimatedSection";
import { MessageCircle, FileCheck, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    color: "#4F8EF7",
    title: "Discovery Call",
    desc: "Free 30-minute call to understand your goals, timeline, and budget. No sales pitch — just honest conversation.",
    duration: "30 min",
  },
  {
    number: "02",
    icon: FileCheck,
    color: "#8B5CF6",
    title: "Proposal & Plan",
    desc: "Detailed scope, transparent pricing, and a clear project timeline delivered within 48 hours. No hidden fees.",
    duration: "48 hours",
  },
  {
    number: "03",
    icon: Code2,
    color: "#EC4899",
    title: "Design & Build",
    desc: "Agile sprints with weekly check-ins. You see real progress every week — not just a big reveal at the end.",
    duration: "Weekly sprints",
  },
  {
    number: "04",
    icon: Rocket,
    color: "#06B6D4",
    title: "Launch & Support",
    desc: "We handle deployment, testing, and handover. Post-launch, we remain available for support and iterations.",
    duration: "Ongoing",
  },
];

export default function Process() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#4F8EF7]/3 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#4F8EF7] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7] animate-pulse" />
            How It Works
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-4">
            From Idea to Launch —{" "}
            <span className="text-gradient">No Surprises</span>
          </h2>
          <p className="text-white/50 text-base leading-relaxed">
            A clear, proven four-step process that keeps projects on time, on
            budget, and exactly to spec.
          </p>
        </AnimatedSection>

        {/* Horizontal journey rail (desktop) / vertical (mobile) */}
        <div className="relative">
          {/* Connector path — desktop horizontal gradient line */}
          <div className="hidden lg:block absolute top-8 left-[6.25%] right-[6.25%] h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(79,142,247,0.4), rgba(139,92,246,0.4), rgba(236,72,153,0.4), rgba(6,182,212,0.4))",
            }}
          />
          {/* Vertical line for mobile */}
          <div className="lg:hidden absolute top-0 bottom-0 left-8 w-px pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(79,142,247,0.4), rgba(139,92,246,0.4), rgba(236,72,153,0.4), rgba(6,182,212,0.4))",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-4 relative">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.number} delay={i * 0.12}>
                  <div className="relative pl-20 lg:pl-0">
                    {/* Node dot on rail */}
                    <div className="absolute lg:left-1/2 lg:-translate-x-1/2 left-8 -translate-x-1/2 top-6 lg:top-5 z-10">
                      <div className="relative">
                        <div
                          className="absolute inset-0 rounded-full blur-md"
                          style={{ background: step.color, opacity: 0.5 }}
                        />
                        <div
                          className="relative w-6 h-6 rounded-full border-4 border-[#050510] flex items-center justify-center"
                          style={{
                            background: step.color,
                            boxShadow: `0 0 20px ${step.color}`,
                          }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        </div>
                      </div>
                    </div>

                    {/* Step card — pushed below node on desktop */}
                    <div className="lg:pt-20">
                      <div
                        className="group relative glass rounded-2xl border p-6 h-full hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                        style={{ borderColor: `${step.color}25` }}
                      >
                        {/* Top colored strip */}
                        <div
                          className="absolute top-0 left-0 right-0 h-0.5"
                          style={{
                            background: `linear-gradient(90deg, ${step.color}, transparent)`,
                          }}
                        />

                        {/* Big background number */}
                        <span
                          aria-hidden
                          className="absolute -top-2 -right-2 text-7xl font-black leading-none select-none pointer-events-none"
                          style={{ color: step.color, opacity: 0.07 }}
                        >
                          {step.number}
                        </span>

                        {/* Header row */}
                        <div className="flex items-center justify-between mb-4 relative">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center border"
                            style={{
                              background: `${step.color}15`,
                              borderColor: `${step.color}30`,
                            }}
                          >
                            <Icon
                              className="w-5 h-5"
                              style={{ color: step.color }}
                            />
                          </div>
                          <span
                            className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase"
                            style={{ color: step.color }}
                          >
                            Step {step.number}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-white/55 leading-relaxed mb-4">
                          {step.desc}
                        </p>

                        {/* Duration chip */}
                        <div className="pt-3 border-t border-white/5">
                          <span
                            className="inline-flex items-center gap-1.5 text-[11px] font-mono text-white/40"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ background: step.color }}
                            />
                            {step.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
