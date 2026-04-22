import AnimatedSection from "@/components/AnimatedSection";

const steps = [
  {
    number: "01",
    color: "#4F8EF7",
    title: "Discovery Call",
    desc: "We start with a free 30-minute call to understand your goals, timeline, and budget. No sales pitch — just honest conversation.",
  },
  {
    number: "02",
    color: "#8B5CF6",
    title: "Proposal & Plan",
    desc: "You receive a detailed scope, transparent pricing, and a clear project timeline within 48 hours. No hidden fees, ever.",
  },
  {
    number: "03",
    color: "#EC4899",
    title: "Design & Build",
    desc: "We work in agile sprints with regular check-ins. You see real progress every week — not just a big reveal at the end.",
  },
  {
    number: "04",
    color: "#06B6D4",
    title: "Launch & Support",
    desc: "We handle deployment, testing, and handover. Post-launch, we're available for support, maintenance, and future iterations.",
  },
];

export default function Process() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#4F8EF7]/3 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-[#4F8EF7] uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            From Idea to Launch —{" "}
            <span className="text-gradient">No Surprises</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            A clear, proven process that keeps projects on time, on budget, and
            exactly to spec.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.1}>
              <div className="relative glass border border-white/6 rounded-2xl p-6 hover:border-white/12 transition-all duration-300 h-full">
                {/* Step number circle */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold mb-5 relative z-10"
                  style={{
                    background: `${step.color}18`,
                    border: `1px solid ${step.color}40`,
                    color: step.color,
                  }}
                >
                  {step.number}
                </div>

                <h3 className="text-base font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
