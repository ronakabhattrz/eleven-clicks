const steps = [
  { n: "01", title: "Discovery Call", desc: "A free 30-min call to understand your goals, timeline, and budget. No pitch, just conversation." },
  { n: "02", title: "Proposal & Scope", desc: "A detailed quote with fixed price, timeline, and full scope arrives within 48 hours." },
  { n: "03", title: "Design & Build", desc: "Agile sprints with weekly updates. You see real progress every week." },
  { n: "04", title: "Launch & Support", desc: "We handle deployment, testing, and handover. 60 days of post-launch support included." },
];

export default function Process() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <p className="section-label mb-4">HOW IT WORKS</p>
        <h2 className="text-4xl font-bold text-[#0f0f0f] mb-16">From idea to launch in four steps.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((s) => (
            <div key={s.n}>
              <p className="text-6xl font-bold text-gray-100 leading-none">{s.n}</p>
              <p className="text-lg font-semibold text-gray-900 mt-3">{s.title}</p>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
