const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "7 yrs", label: "In Business" },
  { value: "6", label: "Specializations" },
  { value: "CA + US", label: "Coverage" },
];

export default function Stats() {
  return (
    <section className="bg-[#0f0f0f] py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-5xl font-bold text-white">{s.value}</p>
              <div className="w-8 h-0.5 bg-indigo-600 mt-3 mb-2 rounded-full" />
              <p className="text-sm text-gray-500 uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
