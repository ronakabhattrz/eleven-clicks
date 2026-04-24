"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Star,
  CheckCircle2,
  Globe,
  Brain,
  Smartphone,
  Code2,
  Sparkles,
} from "lucide-react";

const WORDS = ["Web Apps", "Mobile Apps", "AI Solutions", "Digital Growth"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050510]/60 to-[#050510]" />

      {/* Glow orbs */}
      <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-[#4F8EF7]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-[500px] h-[500px] bg-[#8B5CF6]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ---------- LEFT: Content ---------- */}
          <div className="lg:col-span-7 text-left">
            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2 mb-8"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/10 text-xs text-white/65">
                <MapPin className="w-3 h-3 text-[#4F8EF7]" />
                Ontario, Canada
                <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-white/10 text-xs text-white/65">
                <Star className="w-3 h-3 text-[#F59E0B] fill-[#F59E0B]" />
                19+ Five-Star Reviews
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-white/10 text-xs text-white/65">
                <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
                Trusted Since 2019
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
            >
              We Build{" "}
              <span className="inline-block relative align-baseline">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={WORDS[wordIndex]}
                    className="text-gradient inline-block"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    {WORDS[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <br />
              That Drive Results
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-white/60 max-w-xl mb-10 leading-relaxed"
            >
              Ontario&apos;s trusted IT company — building Ruby on Rails apps, Node.js &amp; Python backends, React websites, Android mobile apps, and custom AI solutions that drive real business results.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10"
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

            {/* Inline stat strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center gap-6 text-sm text-white/50"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-gradient">50+</span>
                <span className="text-xs">Projects</span>
              </div>
              <div className="w-px h-6 bg-white/10" />
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-gradient">5+</span>
                <span className="text-xs">Years</span>
              </div>
              <div className="w-px h-6 bg-white/10" />
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-gradient">100%</span>
                <span className="text-xs">Satisfaction</span>
              </div>
            </motion.div>
          </div>

          {/* ---------- RIGHT: Stacked Project Cards ---------- */}
          <div className="lg:col-span-5 relative min-h-[460px] lg:min-h-[520px]">
            {/* Ambient orb behind stack */}
            <div
              className="absolute inset-10 rounded-full blur-3xl opacity-40 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(79,142,247,0.2) 40%, transparent 70%)",
              }}
            />

            {/* Floating "Live" badge — top-right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-2 right-2 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-[#10B981]/30 bg-[#10B981]/10"
            >
              <span className="relative flex">
                <span className="absolute inline-flex w-2 h-2 rounded-full bg-[#10B981] animate-ping opacity-75" />
                <span className="relative w-2 h-2 rounded-full bg-[#10B981]" />
              </span>
              <span className="text-[10px] font-mono font-semibold tracking-wider uppercase text-[#10B981]">
                Shipping Now
              </span>
            </motion.div>

            {/* Back card — Rails project */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -12 }}
              animate={{ opacity: 1, y: 0, rotate: -8 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-12 left-2 right-20 z-10 glass rounded-2xl border border-[#E53E3E]/25 p-5 shadow-2xl"
              style={{ boxShadow: "0 20px 60px rgba(229,62,62,0.15)" }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#E53E3E]/15 border border-[#E53E3E]/25">
                    <Code2 className="w-4 h-4 text-[#E53E3E]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#E53E3E]">
                      Ruby on Rails
                    </p>
                    <p className="text-xs font-semibold text-white/90">
                      CMS Platform · API
                    </p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                </div>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-white/40 font-mono">
                <span className="px-1.5 py-0.5 rounded bg-white/5">Rails 8</span>
                <span className="px-1.5 py-0.5 rounded bg-white/5">Sidekiq</span>
                <span className="px-1.5 py-0.5 rounded bg-white/5">PG</span>
              </div>
            </motion.div>

            {/* Middle card — AI project (largest, featured) */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 8 }}
              animate={{ opacity: 1, y: 0, rotate: 4 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-36 left-6 right-6 z-20 glass rounded-2xl border border-[#EC4899]/30 p-6 shadow-2xl"
              style={{ boxShadow: "0 25px 70px rgba(236,72,153,0.2)" }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#EC4899]/15 border border-[#EC4899]/25">
                    <Brain className="w-5 h-5 text-[#EC4899]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#EC4899]">
                      AI Integration
                    </p>
                    <p className="text-sm font-semibold text-white">
                      Smart Automation
                    </p>
                  </div>
                </div>
                <Sparkles className="w-4 h-4 text-[#EC4899]" />
              </div>

              {/* Mock code snippet */}
              <div className="rounded-lg bg-black/30 border border-white/5 p-3 mb-3 font-mono text-[10px] leading-relaxed">
                <p className="text-white/40">
                  <span className="text-[#8B5CF6]">const</span>{" "}
                  <span className="text-[#06B6D4]">response</span> ={" "}
                  <span className="text-[#4F8EF7]">await</span>
                </p>
                <p className="text-white/40 pl-3">
                  claude.<span className="text-[#EC4899]">generate</span>
                  (prompt);
                </p>
                <p className="text-[#10B981]">✓ 20 hours/week saved</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#4F8EF7] to-[#8B5CF6] border-2 border-[#050510]" />
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#EC4899] to-[#F59E0B] border-2 border-[#050510] -ml-2" />
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#10B981] to-[#06B6D4] border-2 border-[#050510] -ml-2" />
                </div>
                <span className="text-[10px] font-mono text-white/40">
                  ROI 340%
                </span>
              </div>
            </motion.div>

            {/* Front card — Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -6 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute bottom-8 left-16 right-2 z-30 glass rounded-2xl border border-[#8B5CF6]/30 p-5 shadow-2xl"
              style={{ boxShadow: "0 25px 70px rgba(139,92,246,0.25)" }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#8B5CF6]/15 border border-[#8B5CF6]/25">
                    <Smartphone className="w-4 h-4 text-[#8B5CF6]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#8B5CF6]">
                      Mobile App
                    </p>
                    <p className="text-xs font-semibold text-white/90">
                      Android + iOS
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-[#F59E0B] fill-[#F59E0B]" />
                  <span className="text-xs font-bold text-white">4.9</span>
                </div>
              </div>
              {/* Progress bar */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-white/50">Release 2.4.0</span>
                  <span className="text-[#10B981]">Live</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating mini Web tag — bottom-left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="absolute -bottom-2 -left-2 z-40 glass rounded-full border border-[#4F8EF7]/25 px-3 py-1.5 flex items-center gap-2"
            >
              <Globe className="w-3.5 h-3.5 text-[#4F8EF7]" />
              <span className="text-[10px] font-mono font-bold text-white/80">
                web.next
              </span>
            </motion.div>
          </div>
        </div>

        {/* Bottom tech pill marquee-style row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 lg:mt-20 pt-8 border-t border-white/5"
        >
          <p className="text-[10px] font-mono font-semibold tracking-[0.3em] uppercase text-white/30 mb-4 text-center">
            Technologies we work with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Next.js / React",
              "Ruby on Rails",
              "Node.js",
              "Python / Django",
              "Android Apps",
              "AI Integration",
              "Website Maintenance",
              "UI/UX Design",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-[11px] font-medium glass border border-white/8 text-white/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
