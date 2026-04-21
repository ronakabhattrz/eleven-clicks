import AnimatedSection from "@/components/AnimatedSection";
import { Rocket, Shield, Clock, Users, Code2, Lightbulb } from "lucide-react";

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
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-[#8B5CF6] uppercase tracking-widest mb-3">
            Why ElevenClicks
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            The Team That <span className="text-gradient">Gets It Done</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Ontario-based, globally capable. We bring enterprise-grade quality to
            businesses of every size.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <AnimatedSection key={r.title} delay={i * 0.08}>
                <div className="group glass rounded-2xl p-6 border border-white/6 hover:border-white/12 transition-all duration-300 h-full">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${r.color}18` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: r.color }} />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{r.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{r.desc}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
