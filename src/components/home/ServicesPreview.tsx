import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  { n: "01", title: "Web Development", desc: "Next.js, React, Ruby on Rails — fast, scalable web apps and e-commerce." },
  { n: "02", title: "Mobile Apps", desc: "iOS and Android apps built with React Native and Flutter." },
  { n: "03", title: "AI Solutions", desc: "Chatbots, automation, and RAG pipelines using Claude and GPT." },
  { n: "04", title: "Backend APIs", desc: "Node.js, Python — REST and GraphQL APIs built to scale." },
  { n: "05", title: "Website Maintenance", desc: "Ongoing performance, updates, and security for your existing site." },
  { n: "06", title: "Digital Strategy", desc: "Tech roadmaps, vendor selection, and IT planning for growing companies." },
];

export default function ServicesPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <p className="section-label mb-4">WHAT WE BUILD</p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <h2 className="text-4xl font-bold text-[#0f0f0f] leading-tight max-w-md">Six ways we help your business grow.</h2>
          <Link href="/services" className="text-sm font-semibold text-[#4F46E5] hover:text-[#4338CA] flex items-center gap-1 shrink-0">
            See all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="border-t border-gray-100">
          {services.map((s) => (
            <div key={s.n} className="grid grid-cols-[56px_1fr_32px] items-center gap-6 py-6 px-2 border-b border-gray-100 hover:bg-gray-50 group transition-colors cursor-default">
              <span className="text-3xl font-bold text-gray-100 group-hover:text-indigo-100 transition-colors select-none">{s.n}</span>
              <div>
                <p className="font-semibold text-gray-900 text-base">{s.title}</p>
                <p className="text-sm text-gray-500 mt-0.5">{s.desc}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-200 group-hover:text-[#4F46E5] group-hover:translate-x-1 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
