const items = [
  "Next.js", "React", "Ruby on Rails", "Node.js", "Python", "Flutter",
  "React Native", "TypeScript", "PostgreSQL", "AWS", "Supabase",
  "Stripe", "OpenAI", "Anthropic Claude", "Tailwind CSS", "Docker",
];

export default function TechStack() {
  const doubled = [...items, ...items];
  return (
    <section className="bg-white py-12 border-y border-gray-100 overflow-hidden">
      <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-8">Technologies We Work With</p>
      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, white, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(270deg, white, transparent)" }}
        />
        <div className="marquee-track">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold text-gray-500 bg-gray-50 border border-gray-100 mx-2 whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
