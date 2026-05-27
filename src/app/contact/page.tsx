import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { MapPin, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Quote",
  description:
    "Start your next project with ElevenClicks. Get a free quote for Ruby on Rails, Node.js, Python, React web apps, Android mobile apps, or AI solutions. We respond within 1 business day.",
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
    color: "#4F46E5",
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
      <section className="bg-white pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
            Contact Us
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-[#0f0f0f] mb-5">
            Let&apos;s Build Something{" "}
            <span className="text-[#4F46E5]">Great Together</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Have a project in mind? Ready to modernize your digital presence?
            We respond to all inquiries within 1 business day.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-gray-50 py-12 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Sidebar info */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {info.map(({ icon: Icon, color, label, value, href }) => (
                <div
                  key={label}
                  className="bg-white border border-gray-100 shadow-sm rounded-2xl p-5 flex items-start gap-4"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${color}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium text-[#0f0f0f] hover:text-[#4F46E5] transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-[#0f0f0f]">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Response badge */}
              <div className="bg-white border border-emerald-100 shadow-sm rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="text-sm font-semibold text-[#10B981]">
                    Fast Response Guarantee
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Every inquiry is reviewed by a real team member. We respond
                  within 24 business hours — no automated replies, no runaround.
                </p>
              </div>

              {/* Quick picks */}
              <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-5">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
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
                      className="px-3 py-1.5 rounded-full text-xs bg-gray-50 border border-gray-100 text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 bg-white border border-gray-100 shadow-sm rounded-3xl p-8">
              <h2 className="text-xl font-bold text-[#0f0f0f] mb-2">
                Send Us a Message
              </h2>
              <p className="text-sm text-gray-400 mb-8">
                Fill in the details below and we&apos;ll be in touch shortly.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
