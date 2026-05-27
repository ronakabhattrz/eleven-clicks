import { CheckCircle, Clock, Shield } from "lucide-react";

const points = [
  { icon: CheckCircle, title: "Fixed-price quotes", desc: "You know the exact cost before we start. No surprises, no scope-creep billing." },
  { icon: Clock, title: "Weekly progress updates", desc: "Every Friday you get a written update on what was built, what's next, and any blockers." },
  { icon: Shield, title: "60-day post-launch support", desc: "We stay on after launch to fix anything that comes up — at no extra charge." },
];

export default function WhyUs() {
  return (
    <section className="bg-[#f9fafb] py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-start">
          <div>
            <p className="section-label mb-4">WHY ELEVENCLICKS</p>
            <h2 className="text-4xl font-bold text-[#0f0f0f] leading-tight">
              No retainers for work<br />we haven&apos;t started.
            </h2>
            <p className="text-gray-500 mt-6 leading-relaxed">
              We&apos;ve seen agencies that bill you before a single line of code is written. We don&apos;t. Every project starts with a clear scope, a fixed price, and a timeline you can hold us to.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 space-y-8">
            {points.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#4F46E5]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{title}</p>
                  <p className="text-gray-500 text-sm mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
