import AnimatedSection from "@/components/AnimatedSection";

const row1 = [
  { name: "Next.js",          color: "#ffffff" },
  { name: "React",            color: "#61DAFB" },
  { name: "TypeScript",       color: "#3178C6" },
  { name: "Ruby on Rails",    color: "#CC0000" },
  { name: "Node.js",          color: "#68A063" },
  { name: "Python",           color: "#3776AB" },
  { name: "Django / FastAPI", color: "#44B78B" },
  { name: "Kotlin",           color: "#7F52FF" },
  { name: "Flutter",          color: "#54C5F8" },
  { name: "React Native",     color: "#61DAFB" },
];

const row2 = [
  { name: "OpenAI GPT-4",  color: "#10A37F" },
  { name: "Claude AI",     color: "#CC785C" },
  { name: "PostgreSQL",    color: "#336791" },
  { name: "Redis",         color: "#FF4438" },
  { name: "AWS",           color: "#FF9900" },
  { name: "Vercel",        color: "#ffffff" },
  { name: "Firebase",      color: "#FFCA28" },
  { name: "Stripe",        color: "#635BFF" },
  { name: "GraphQL",       color: "#E10098" },
  { name: "Tailwind CSS",  color: "#38BDF8" },
];

function Ticker({ items, reverse = false }: { items: typeof row1; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className={`flex gap-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {doubled.map((tech, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-4 py-2 glass border border-white/8 rounded-full text-sm font-medium text-white/65 shrink-0 whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full shrink-0" style={{ background: tech.color }} />
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm font-semibold text-[#06B6D4] uppercase tracking-widest mb-3">
            Our Stack
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
            Technologies We <span className="text-gradient">Master</span>
          </h2>
          <p className="text-white/45 text-base mt-3 max-w-xl mx-auto">
            From frontend to AI infrastructure — we work across the full modern stack.
          </p>
        </AnimatedSection>
      </div>

      <div className="flex flex-col gap-3">
        <Ticker items={row1} />
        <Ticker items={row2} reverse />
      </div>
    </section>
  );
}
