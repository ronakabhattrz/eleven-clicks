import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { MapPin, ArrowRight, Target, Heart, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Ontario's IT Team",
  description:
    "ElevenClicks is an Ontario-based IT company building web, mobile, and AI products for Canadian businesses since 2019. Learn about our story, values, and approach.",
  keywords: [
    "ElevenClicks team",
    "Ontario IT company",
    "Canadian web development team",
    "software engineers Ontario",
  ],
  alternates: {
    canonical: "https://elevenclicks.com/about",
  },
  openGraph: {
    url: "https://elevenclicks.com/about",
    title: "About ElevenClicks — Ontario's IT Team",
    description:
      "Ontario-based engineers, designers, and strategists building web, mobile, and AI products for Canadian businesses since 2019.",
  },
};

const values = [
  {
    icon: Target,
    color: "#4F8EF7",
    title: "Results Over Output",
    desc: "We measure success by what your business achieves — not lines of code or features shipped.",
  },
  {
    icon: Heart,
    color: "#EC4899",
    title: "Honest Partnership",
    desc: "Transparent timelines, fair pricing, and straight talk. We treat your budget like our own.",
  },
  {
    icon: TrendingUp,
    color: "#10B981",
    title: "Continuous Learning",
    desc: "Technology never stops evolving and neither do we. We invest in staying ahead so you benefit.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050510]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#4F8EF7]/8 rounded-full blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-sm font-semibold text-[#4F8EF7] uppercase tracking-widest mb-3">
              About Us
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Real People.{" "}
              <span className="text-gradient">Real Results.</span>
            </h1>
            <p className="text-lg text-white/55 max-w-2xl mx-auto">
              We&apos;re a tight-knit team of engineers, designers, and
              strategists based in Ontario — dedicated to building
              digital products that actually move the needle for our clients.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm text-white/60">
              <MapPin className="w-4 h-4 text-[#4F8EF7]" />
              Ontario, Canada
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Built in Ontario,{" "}
                <span className="text-gradient">Serving Canada</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-4">
                ElevenClicks was founded with a simple belief: small and
                mid-sized businesses deserve the same quality of digital work
                that large enterprises get — without the agency overhead and
                slow turnarounds.
              </p>
              <p className="text-white/60 leading-relaxed mb-4">
                We started as a small web shop in Ontario and grew by doing great
                work and earning referrals. Today we have a full team of
                specialists covering web, mobile, AI, design, and
                infrastructure.
              </p>
              <p className="text-white/60 leading-relaxed">
                Whether you&apos;re a local Ontario business or a startup scaling
                across Canada, we bring the same energy and expertise to every
                engagement.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="glass border border-white/8 rounded-3xl p-8 grid grid-cols-2 gap-6">
                {[
                  { value: "2019", label: "Founded" },
                  { value: "50+", label: "Projects" },
                  { value: "6", label: "Team Members" },
                  { value: "🍁", label: "Ontario, Canada" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <p className="text-3xl font-bold text-gradient mb-1">
                      {item.value}
                    </p>
                    <p className="text-sm text-white/40">{item.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">
              What We Stand For
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <AnimatedSection key={v.title} delay={i * 0.1}>
                  <div className="glass border border-white/8 rounded-2xl p-6 text-center h-full">
                    <div
                      className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                      style={{ background: `${v.color}18` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: v.color }} />
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2">
                      {v.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <AnimatedSection className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Work With Our Team
          </h2>
          <p className="text-white/55 text-lg mb-8">
            We&apos;re always looking for great clients with interesting problems.
            Let&apos;s talk about yours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
