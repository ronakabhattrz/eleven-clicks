import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Healthcare Software Development Canada — PIPEDA Compliant | ElevenClicks",
  description:
    "Custom healthcare software development for Canadian clinics and health businesses. PIPEDA-compliant apps, patient intake systems, and clinic management tools. Ontario-based IT company.",
  alternates: { canonical: "https://elevenclicks.com/industries/healthcare" },
  openGraph: {
    url: "https://elevenclicks.com/industries/healthcare",
    title: "Healthcare Software Development Canada | ElevenClicks",
    description: "PIPEDA-compliant healthcare apps for Canadian clinics. Patient intake, booking, and automation.",
    locale: "en_CA",
  },
};

const solutions = [
  "Patient intake & digital forms",
  "Appointment booking systems",
  "PIPEDA-compliant data storage",
  "Canadian-region cloud hosting",
  "EHR/EMR integrations",
  "Staff-facing admin portals",
  "Automated appointment reminders",
  "Mobile apps for patients & staff",
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Healthcare Software Development",
  description: "PIPEDA-compliant healthcare software for Canadian clinics — patient intake, booking systems, and automation.",
  provider: { "@type": "Organization", name: "ElevenClicks", url: "https://elevenclicks.com" },
  areaServed: { "@type": "Country", name: "Canada" },
  url: "https://elevenclicks.com/industries/healthcare",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://elevenclicks.com" },
    { "@type": "ListItem", position: 2, name: "Industries", item: "https://elevenclicks.com/industries/healthcare" },
    { "@type": "ListItem", position: 3, name: "Healthcare", item: "https://elevenclicks.com/industries/healthcare" },
  ],
};

export default function HealthcarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050510]" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] pointer-events-none opacity-15"
          style={{ background: "radial-gradient(circle, #10B981 0%, #4F8EF7 60%, transparent 70%)" }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#10B981]/20 bg-[#10B981]/5 text-xs font-semibold uppercase tracking-widest text-[#10B981] mb-6">
              <Shield className="w-3.5 h-3.5" /> Healthcare · PIPEDA Compliant · Canada
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              Healthcare Software<br /><span className="text-gradient">for Canadian Clinics</span>
            </h1>
            <p className="text-lg text-white/55 leading-relaxed mb-8 max-w-xl">
              Custom software for Canadian healthcare providers — PIPEDA-compliant, Canadian-region hosted, built by an Ontario team that understands Canadian privacy law.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://calendly.com/elevenclicks-info/30min" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#10B981] to-[#4F8EF7] text-white font-semibold hover:opacity-90 transition-opacity">
                Book a Free Call <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/case-studies" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 text-white/70 font-semibold hover:text-white hover:border-white/25 transition-all glass">
                See Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="glass border border-white/8 rounded-3xl p-8 lg:p-10">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#10B981] mb-6">What We Build for Healthcare</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {solutions.map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span className="text-sm text-white/65 leading-snug">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="glass border border-[#10B981]/20 rounded-3xl p-8 lg:p-10">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#10B981] mb-4">PIPEDA Compliance</p>
            <h2 className="text-2xl font-bold mb-4">Built for Canadian Privacy Law</h2>
            <p className="text-white/60 leading-relaxed mb-4">
              PIPEDA (Personal Information Protection and Electronic Documents Act) governs how Canadian businesses handle patient data. Non-compliance carries real risk — fines, reputational damage, and loss of patient trust.
            </p>
            <p className="text-white/60 leading-relaxed">
              Every healthcare project we build uses Canadian-region cloud infrastructure, encrypted data at rest and in transit, role-based access controls, and audit logging. We build compliance in from day one — not as an afterthought.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Talk About Your Clinic</h2>
          <p className="text-white/50 mb-8">Book a free 30-minute call. We&apos;ll discuss your requirements, confirm PIPEDA compliance needs, and send a fixed-price proposal.</p>
          <a href="https://calendly.com/elevenclicks-info/30min" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#10B981] to-[#4F8EF7] text-white font-semibold hover:opacity-90 transition-opacity">
            Book a Free 30-Min Call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
