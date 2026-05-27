const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "5 yrs", label: "In Business" },
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
              <p className="text-sm text-gray-500 mt-2 uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
