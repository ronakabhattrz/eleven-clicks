import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4F8EF7]/20 via-[#8B5CF6]/20 to-[#06B6D4]/20" />
            <div className="absolute inset-0 glass" />
            <div className="absolute inset-0 border border-white/10 rounded-3xl" />

            {/* Decorative orbs */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#8B5CF6]/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#4F8EF7]/20 rounded-full blur-[80px]" />

            <div className="relative px-8 py-16 text-center">
              <p className="text-sm font-semibold text-[#4F8EF7] uppercase tracking-widest mb-4">
                Let&apos;s Build Together
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Have a Project in Mind?
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
                Whether you need a brand-new website, a mobile app, or AI
                automation — we&apos;d love to hear about it. Get a free
                consultation with our team today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white font-semibold text-base hover:opacity-90 transition-all duration-200"
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white/80 font-semibold text-base hover:border-white/30 hover:text-white transition-all duration-200"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
