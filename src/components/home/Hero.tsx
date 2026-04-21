"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const WORDS = ["Web Apps", "Mobile Apps", "AI Solutions", "Digital Growth"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050510]/60 to-[#050510]" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4F8EF7]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-sm text-white/70 mb-8"
          >
            <MapPin className="w-3.5 h-3.5 text-[#4F8EF7]" />
            London, Ontario, Canada
            <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            We Build{" "}
            <span className="text-gradient">
              {WORDS[0]}
            </span>
            <br />
            That Drive Results
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            ElevenClicks is London&apos;s premier IT company. From blazing-fast
            websites and Android apps to intelligent AI solutions — we turn your
            vision into powerful digital products.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white font-semibold text-base hover:opacity-90 transition-all duration-200 glow-blue"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 text-white/80 font-semibold text-base hover:border-white/30 hover:text-white transition-all duration-200 glass"
            >
              View Our Services
            </Link>
          </motion.div>

          {/* Service pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-3"
          >
            {[
              "Web Development",
              "Website Maintenance",
              "Android Apps",
              "AI Solutions",
              "UI/UX Design",
              "API Integrations",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-xs font-medium glass border border-white/8 text-white/50"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Floating cards */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 glass border border-white/8 rounded-2xl p-4 w-52"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-[#4F8EF7]/20 flex items-center justify-center text-[#4F8EF7] text-lg">
              🌐
            </div>
            <span className="text-xs font-semibold text-white/80">Web Dev</span>
          </div>
          <p className="text-xs text-white/40 leading-relaxed">
            Modern, fast, and scalable websites built for conversion.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 glass border border-white/8 rounded-2xl p-4 w-52"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] text-lg">
              🤖
            </div>
            <span className="text-xs font-semibold text-white/80">AI Solutions</span>
          </div>
          <p className="text-xs text-white/40 leading-relaxed">
            Custom AI integrations that automate and accelerate your workflows.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
