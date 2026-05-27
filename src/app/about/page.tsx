import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Target, Heart, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "About ElevenClicks — Ruby on Rails & Web Development Team, Ontario",
  description:
    "ElevenClicks is an Ontario IT company specialising in Ruby on Rails, Node.js, Python, React, and Android app development for Canadian businesses since 2019.",
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
    color: "#4F46E5",
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

const stats = [
  { value: "2019", label: "Founded" },
  { value: "50+", label: "Projects Delivered" },
  { value: "6", label: "Team Members" },
  { value: "🍁", label: "Ontario, Canada" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
            About Us
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-[#0f0f0f] mb-5">
            Real People.{" "}
            <span className="text-[#4F46E5]">Real Results.</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-6">
            We&apos;re a tight-knit team of engineers, designers, and strategists based in Ontario — dedicated to building digital products that actually move the needle for our clients.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-sm text-gray-500">
            <MapPin className="w-4 h-4 text-[#4F46E5]" />
            Ontario, Canada
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0f0f0f] mb-6">
                Built in Ontario,{" "}
                <span className="text-[#4F46E5]">Serving Canada</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                ElevenClicks was founded with a simple belief: small and mid-sized businesses deserve the same quality of digital work that large enterprises get — without the agency overhead and slow turnarounds.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                We started as a small web shop in Ontario and grew by doing great work and earning referrals. Today we have a full team of specialists covering web, mobile, AI, design, and infrastructure.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Whether you&apos;re a local Ontario business or a startup scaling across Canada, we bring the same energy and expertise to every engagement.
              </p>
            </div>

            {/* Stats card */}
            <div className="bg-white border border-gray-100 shadow-sm rounded-3xl p-8 grid grid-cols-2 gap-6">
              {stats.map((item) => (
                <div key={item.label} className="text-center p-4 rounded-2xl bg-gray-50">
                  <p className="text-3xl font-bold text-[#4F46E5] mb-1">
                    {item.value}
                  </p>
                  <p className="text-sm text-gray-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0f0f0f]">
              What We Stand For
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-white border border-gray-100 shadow-sm rounded-2xl p-7 text-center"
                >
                  <div
                    className="w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                    style={{ background: `${v.color}12` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: v.color }} />
                  </div>
                  <div
                    className="h-0.5 w-8 rounded-full mx-auto mb-4"
                    style={{ background: v.color }}
                  />
                  <h3 className="text-base font-bold text-[#0f0f0f] mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#4F46E5] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Work With Our Team
          </h2>
          <p className="text-indigo-200 text-lg mb-8">
            We&apos;re always looking for great clients with interesting problems.
            Let&apos;s talk about yours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#4F46E5] font-semibold hover:bg-indigo-50 transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
