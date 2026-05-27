import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  { n: "01", color: "#4F46E5", title: "Web Development",     desc: "Next.js, React, Ruby on Rails — fast, scalable web apps and e-commerce." },
  { n: "02", color: "#8B5CF6", title: "Mobile Apps",         desc: "iOS and Android apps built native with Swift, Kotlin, and Flutter." },
  { n: "03", color: "#EC4899", title: "AI Solutions",        desc: "Chatbots, automation, and RAG pipelines using Claude and GPT." },
  { n: "04", color: "#10B981", title: "Backend APIs",        desc: "Node.js, Python — REST and GraphQL APIs built to scale." },
  { n: "05", color: "#06B6D4", title: "Website Maintenance", desc: "Ongoing performance, updates, and security for your existing site." },
  { n: "06", color: "#F59E0B", title: "Digital Strategy",    desc: "Tech roadmaps, vendor selection, and IT planning for growing companies." },
];

export default function ServicesPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <p className="section-label mb-4">WHAT WE BUILD</p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <h2 className="text-4xl font-bold text-[#0f0f0f] leading-tight max-w-md">
            Six ways we help your business grow.
          </h2>
          <Link href="/services" className="text-sm font-semibold text-[#4F46E5] hover:text-[#4338CA] flex items-center gap-1 shrink-0">
            See all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="border-t border-gray-100">
          {services.map((s) => (
            <Link
              key={s.n}
              href="/services"
              className="grid grid-cols-[52px_1fr_28px] items-center gap-6 py-5 px-2 border-b border-gray-100 hover:bg-gray-50 group transition-colors"
            >
              <span className="text-2xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors select-none tabular-nums">
                {s.n}
              </span>
              <div className="flex items-center gap-3">
                <div
                  className="w-1 h-8 rounded-full shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: s.color }}
                />
                <div>
                  <p className="font-semibold text-gray-900 text-[0.95rem]">{s.title}</p>
                  <p className="text-sm text-gray-500 mt-0.5 leading-snug">{s.desc}</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-200 group-hover:text-[#4F46E5] group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
