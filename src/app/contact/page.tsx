import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { MapPin, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Quote",
  description:
    "Start your next project with ElevenClicks. Get a free quote for web development, Android apps, website maintenance, or AI solutions. We respond within 1 business day.",
  alternates: {
    canonical: "https://elevenclicks.com/contact",
  },
  openGraph: {
    url: "https://elevenclicks.com/contact",
    title: "Contact ElevenClicks — Get a Free Quote",
    description:
      "Reach out to Ontario's trusted IT team. Free quotes for web, mobile, and AI projects. We respond within 1 business day.",
  },
};

const info = [
  {
    icon: MapPin,
    color: "#4F8EF7",
    label: "Location",
    value: "Ontario, Canada",
    href: null,
  },
  {
    icon: Mail,
    color: "#8B5CF6",
    label: "Email",
    value: "info@elevenclicks.com",
    href: "mailto:info@elevenclicks.com",
  },
  {
    icon: Clock,
    color: "#10B981",
    label: "Business Hours",
    value: "Mon–Fri, 9am–6pm EST",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050510]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-sm font-semibold text-[#4F8EF7] uppercase tracking-widest mb-3">
              Contact Us
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Let&apos;s Build Something{" "}
              <span className="text-gradient">Great Together</span>
            </h1>
            <p className="text-lg text-white/55 max-w-2xl mx-auto">
              Have a project in mind? Ready to modernize your digital presence?
              We respond to all inquiries within 1 business day.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Sidebar info */}
            <AnimatedSection direction="left" className="lg:col-span-2">
              <div className="flex flex-col gap-6">
                {/* Info cards */}
                {info.map(({ icon: Icon, color, label, value, href }) => (
                  <div
                    key={label}
                    className="glass border border-white/8 rounded-2xl p-5 flex items-start gap-4"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${color}18` }}
                    >
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 mb-0.5">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm font-medium text-white hover:text-[#4F8EF7] transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-white">{value}</p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Quick response badge */}
                <div className="glass border border-[#10B981]/20 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    <span className="text-sm font-semibold text-[#10B981]">
                      Fast Response Guarantee
                    </span>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">
                    Every inquiry is reviewed by a real team member. We respond
                    within 24 business hours — no automated replies, no
                    runaround.
                  </p>
                </div>

                {/* Services quick-pick */}
                <div className="glass border border-white/8 rounded-2xl p-5">
                  <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">
                    Popular starting points
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "New Website",
                      "Mobile App",
                      "AI Chatbot",
                      "Site Revamp",
                      "Maintenance Plan",
                      "Free Consultation",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full text-xs glass border border-white/10 text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="right" className="lg:col-span-3">
              <div className="glass border border-white/8 rounded-3xl p-8">
                <h2 className="text-xl font-bold text-white mb-2">
                  Send Us a Message
                </h2>
                <p className="text-sm text-white/45 mb-8">
                  Fill in the details below and we&apos;ll be in touch shortly.
                </p>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
