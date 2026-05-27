import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[92vh] flex items-center bg-white pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="lg:grid lg:grid-cols-[1fr_440px] lg:gap-20 items-center py-20">

          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
              Ontario IT Company · Serving North America
            </div>

            <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight text-[#0f0f0f]">
              We Build<br />
              Software<br />
              <span className="text-[#4F46E5]">That Ships.</span>
            </h1>

            <p className="text-xl text-gray-500 mt-6 max-w-lg leading-relaxed">
              Web apps, mobile, and AI solutions — built for North American businesses that need things done right, on time, on budget.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-10">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#4F46E5] text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-[#4338CA] transition-colors">
                Start a Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 text-gray-700 px-7 py-3.5 rounded-xl font-semibold text-sm border border-gray-200 hover:bg-gray-50 transition-colors">
                See Our Services
              </Link>
            </div>

            <p className="text-sm text-gray-400 mt-8">
              ★★★★★ &nbsp; Trusted by 50+ businesses across Canada &amp; the US
            </p>
          </div>

          {/* RIGHT: stacked cards */}
          <div className="hidden lg:block relative h-[480px]">
            {/* Back card */}
            <div className="absolute inset-0 top-8 left-8 bg-indigo-50 rounded-2xl p-7 rotate-[-5deg] border border-indigo-100">
              <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">Web Development</p>
              <p className="text-xl font-bold text-indigo-900">Next.js · Rails · React</p>
              <div className="mt-5 space-y-2">
                {["Landing pages", "SaaS platforms", "E-commerce stores"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-xs text-indigo-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-300 shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Mid card */}
            <div className="absolute inset-0 top-4 left-4 bg-white rounded-2xl p-7 rotate-[-2deg] border border-gray-200 shadow-md">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Mobile Apps</p>
              <p className="text-xl font-bold text-gray-900">iOS · Android · Flutter</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Swift", "Kotlin", "Flutter"].map((t) => (
                  <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">{t}</span>
                ))}
              </div>
            </div>

            {/* Front card */}
            <div className="absolute inset-0 bg-[#4F46E5] rounded-2xl p-7 shadow-2xl text-white">
              <p className="text-xs font-semibold text-indigo-200 uppercase tracking-widest mb-3">AI Solutions</p>
              <p className="text-xl font-bold">Claude · GPT · RAG</p>
              <p className="text-sm text-indigo-200 mt-2 leading-relaxed">
                Chatbots, automation &amp;<br />data pipelines that scale.
              </p>
              <div className="mt-8 pt-5 border-t border-white/20">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Available now
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
