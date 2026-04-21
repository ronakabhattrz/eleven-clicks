import AnimatedSection from "@/components/AnimatedSection";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, Maple & Co.",
    avatar: "SM",
    text: "ElevenClicks rebuilt our e-commerce platform from scratch. Load times dropped by 60% and sales increased by 40% in the first month. Phenomenal team.",
  },
  {
    name: "David Chen",
    role: "Founder, TechNorth",
    avatar: "DC",
    text: "They delivered our Android app in 8 weeks — on budget and exactly to spec. The UX is polished and our users love it. Will use them again for v2.",
  },
  {
    name: "Priya Sharma",
    role: "Operations Manager, LogiCore",
    avatar: "PS",
    text: "The AI automation they built for us saves 20+ hours of manual work every week. The ROI was evident in the first month. Highly recommend.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#8B5CF6]/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-[#06B6D4] uppercase tracking-widest mb-3">
            Client Stories
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Trusted by <span className="text-gradient">Growing Businesses</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="glass border border-white/8 rounded-2xl p-6 h-full flex flex-col">
                <Stars />
                <p className="text-sm text-white/70 leading-relaxed flex-1 mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4F8EF7] to-[#8B5CF6] flex items-center justify-center text-xs font-bold text-white">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/40">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
