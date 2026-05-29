import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Node.js & Python Development Company Canada | ElevenClicks",
  description:
    "Node.js and Python backend development for Canadian businesses. REST APIs, automation scripts, data pipelines, and scalable backends. Ontario-based, fixed-price projects.",
  alternates: { canonical: "https://elevenclicks.com/services/nodejs-python" },
  openGraph: {
    url: "https://elevenclicks.com/services/nodejs-python",
    title: "Node.js & Python Development Company Canada | ElevenClicks",
    description: "Node.js APIs, Python automation, and data pipelines for Canadian businesses. Ontario-based, fixed-price.",
    locale: "en_CA",
  },
};

const features = [
  "REST & GraphQL APIs (Express, Fastify)",
  "Python automation scripts",
  "Data pipelines & ETL",
  "Real-time apps with WebSockets",
  "Django, FastAPI & Flask web apps",
  "PostgreSQL, MongoDB & Redis",
  "AWS, Railway & Vercel deployment",
  "TypeScript-first Node.js development",
];

const faqs = [
  { q: "What is a backend API and does my business need one?", a: "A backend API is the server-side code that powers your app — it handles data, business logic, and integrations. If you have a mobile app, a web app with user accounts, or tools that need to talk to each other, you need one. Most custom software projects include a backend API." },
  { q: "When should I choose Python vs Node.js?", a: "Python is better for data processing, automation scripts, AI integrations, and anything involving data pipelines or machine learning. Node.js is better for high-traffic APIs, real-time features (chat, notifications), and when your frontend is also JavaScript/TypeScript." },
  { q: "Can you automate repetitive tasks in my business?", a: "Yes. Python automation is one of the most cost-effective things a small business can invest in. If you have a task that happens the same way every time — report generation, data entry, email sending, file processing — it can almost certainly be automated." },
  { q: "How much does backend development cost?", a: "A focused REST API typically costs $5,000–$15,000 CAD. A Python automation script or data pipeline starts around $2,500 CAD. Complex backends with multiple integrations run $15,000–$50,000 CAD. We quote fixed prices after a discovery call." },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Node.js & Python Development",
  description: "Node.js APIs, Python automation, and data pipelines for Canadian businesses.",
  provider: { "@type": "Organization", name: "ElevenClicks", url: "https://elevenclicks.com" },
  areaServed: [{ "@type": "City", name: "Toronto" }, { "@type": "Country", name: "Canada" }],
  url: "https://elevenclicks.com/services/nodejs-python",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://elevenclicks.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://elevenclicks.com/services" },
    { "@type": "ListItem", position: 3, name: "Node.js & Python", item: "https://elevenclicks.com/services/nodejs-python" },
  ],
};

export default function NodejsPythonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050510]" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] pointer-events-none opacity-15"
          style={{ background: "radial-gradient(circle, #68A063 0%, #3776AB 60%, transparent 70%)" }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#68A063]/20 bg-[#68A063]/5 text-xs font-semibold uppercase tracking-widest text-[#68A063] mb-6">
              <Code2 className="w-3.5 h-3.5" /> Node.js &amp; Python · Canada
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              Node.js &amp; Python Development<br /><span className="text-gradient">for Canadian Companies</span>
            </h1>
            <p className="text-lg text-white/55 leading-relaxed mb-8 max-w-xl">
              Scalable APIs, Python automation, and data pipelines for Canadian businesses. We build the backend that powers your products and eliminates manual work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://calendly.com/elevenclicks-info/30min" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#68A063] to-[#3776AB] text-white font-semibold hover:opacity-90 transition-opacity">
                Book a Free Call <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/services" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 text-white/70 font-semibold hover:text-white hover:border-white/25 transition-all glass">
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="glass border border-white/8 rounded-3xl p-8 lg:p-10">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#68A063] mb-6">What We Build</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#68A063] shrink-0 mt-0.5" />
                  <span className="text-sm text-white/65 leading-snug">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">Common Questions</h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group glass border border-white/8 rounded-2xl overflow-hidden hover:border-white/15 transition-colors">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-white font-medium text-sm">
                  {faq.q}<span className="text-white/30 group-open:rotate-45 transition-transform text-lg shrink-0">+</span>
                </summary>
                <div className="px-6 pb-5 pt-2 text-sm text-white/50 leading-relaxed border-t border-white/5">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Build Your Backend</h2>
          <p className="text-white/50 mb-8">Book a free 30-minute call. We&apos;ll figure out the right stack for your project and send a fixed-price proposal within 48 hours.</p>
          <a href="https://calendly.com/elevenclicks-info/30min" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#68A063] to-[#3776AB] text-white font-semibold hover:opacity-90 transition-opacity">
            Book a Free 30-Min Call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
