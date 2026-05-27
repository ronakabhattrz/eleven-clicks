const items = [
  "Next.js", "React", "Ruby on Rails", "Node.js", "Python", "Flutter",
  "React Native", "TypeScript", "PostgreSQL", "AWS", "Supabase",
  "Stripe", "OpenAI", "Anthropic Claude", "Tailwind CSS", "Docker",
];

export default function TechStack() {
  const doubled = [...items, ...items];
  return (
    <section className="bg-white py-14 border-y border-gray-100 overflow-hidden">
      <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-8">Technologies We Work With</p>
      <div className="relative">
        <div className="marquee-track">
          {doubled.map((item, i) => (
            <span key={i} className="text-sm text-gray-400 font-medium px-8 whitespace-nowrap">
              {item}
              <span className="ml-8 text-gray-200">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
