import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Brain } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation & Chatbots for Small Business Canada",
  description:
    "Custom AI chatbots, workflow automation, and RAG pipelines for Canadian small businesses. Reduce manual work, cut support costs, and automate repetitive tasks. Ontario-based team.",
  alternates: { canonical: "https://elevenclicks.com/services/ai-automation" },
  openGraph: {
    url: "https://elevenclicks.com/services/ai-automation",
    title: "AI Automation & Chatbots for Small Business Canada | ElevenClicks",
    description: "Custom AI solutions for Canadian SMBs — chatbots, automation, and data pipelines. Ontario-based, fixed-price.",
    locale: "en_CA",
  },
};

const features = [
  "Custom AI chatbots for your website",
  "Workflow automation (email, forms, reports)",
  "RAG-based knowledge base assistants",
  "AI document processing & data extraction",
  "LLM integrations (Claude, GPT-4, Gemini)",
  "Voice AI & phone call automation",
  "PIPEDA-compliant Canadian data handling",
  "Staff-facing internal AI tools",
];

const useCases = [
  {
    industry: "Retail & E-commerce",
    problem: "Staff answering the same customer questions all day",
    solution: "AI chatbot handles order status, returns, and FAQs 24/7",
    result: "80% of support tickets resolved without staff involvement",
  },
  {
    industry: "Healthcare & Clinics",
    problem: "Manual patient intake forms re-entered into software",
    solution: "Automated intake pipeline syncs directly to practice management system",
    result: "75% faster intake, zero data entry errors",
  },
  {
    industry: "Professional Services",
    problem: "Hours spent compiling weekly reports from multiple data sources",
    solution: "Python automation pulls, formats, and emails reports every Friday at 8am",
    result: "25 hours of admin time saved per month",
  },
  {
    industry: "Service Businesses",
    problem: "Leads lost because after-hours form submissions go unresponded",
    solution: "Automated follow-up sent within 2 minutes of any form submission",
    result: "Close rate increased — stopped losing leads to faster competitors",
  },
];

const faqs = [
  {
    q: "How much does AI automation cost for a small business?",
    a: "Most small business AI projects range from $3,000–$15,000 CAD depending on complexity. A simple chatbot with a knowledge base typically starts around $3,500. A full workflow automation replacing several manual processes is usually $8,000–$20,000. We quote fixed prices after a discovery call.",
  },
  {
    q: "Does my business need to be technical to use AI automation?",
    a: "No. We build the AI, integrate it into your existing tools, and train your team on how to use it. You don't need a tech team on staff — that's what we're here for.",
  },
  {
    q: "Is my customer data safe? We're in Canada.",
    a: "Yes. We build AI solutions that comply with PIPEDA (Canada's federal privacy law). Where required, we use Canadian-region cloud infrastructure so your customer data stays in Canada.",
  },
  {
    q: "How long does an AI automation project take?",
    a: "A focused chatbot or single automation typically takes 3–6 weeks from discovery call to go-live. More complex multi-system automations take 6–12 weeks. We'll give you a firm timeline in the proposal.",
  },
  {
    q: "What AI models do you use?",
    a: "We work with Anthropic Claude, OpenAI GPT-4, and Google Gemini depending on the use case. We're model-agnostic — we choose based on what performs best for your specific needs and budget.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Automation & Chatbots for Small Business",
  description: "Custom AI chatbots, workflow automation, and RAG pipelines for Canadian small businesses — PIPEDA-compliant.",
  provider: { "@type": "Organization", name: "ElevenClicks", url: "https://elevenclicks.com" },
  areaServed: [{ "@type": "City", name: "Toronto" }, { "@type": "Country", name: "Canada" }],
  url: "https://elevenclicks.com/services/ai-automation",
  offers: { "@type": "Offer", price: "3500", priceCurrency: "CAD", description: "Starting price for AI chatbot projects" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://elevenclicks.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://elevenclicks.com/services" },
    { "@type": "ListItem", position: 3, name: "AI Automation", item: "https://elevenclicks.com/services/ai-automation" },
  ],
};

export default function AIAutomationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050510]" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] pointer-events-none opacity-15"
          style={{ background: "radial-gradient(circle, #EC4899 0%, #8B5CF6 60%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#EC4899]/20 bg-[#EC4899]/5 text-xs font-semibold uppercase tracking-widest text-[#EC4899] mb-6">
              <Brain className="w-3.5 h-3.5" />
              AI Automation · Canada · PIPEDA Compliant
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              AI Automation Solutions<br />
              <span className="text-gradient">for Canadian Small Businesses</span>
            </h1>
            <p className="text-lg text-white/55 leading-relaxed mb-8 max-w-xl">
              Custom AI chatbots, workflow automation, and data pipelines built for Canadian SMBs. Reduce manual work, cut support costs, and automate the tasks your team does every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/elevenclicks-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Book a Free Call <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/services" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 text-white/70 font-semibold hover:text-white hover:border-white/25 transition-all glass">
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="glass border border-white/8 rounded-3xl p-8 lg:p-10">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#EC4899] mb-6">What We Build</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#EC4899] shrink-0 mt-0.5" />
                  <span className="text-sm text-white/65 leading-snug">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">Real Results for Canadian Businesses</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {useCases.map((u) => (
              <div key={u.industry} className="glass border border-white/8 rounded-2xl p-7 hover:border-[#EC4899]/20 transition-colors">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest bg-[#EC4899]/10 text-[#EC4899] border border-[#EC4899]/20 mb-4">
                  {u.industry}
                </span>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-white/30 text-[10px] font-mono uppercase tracking-widest mb-1">Problem</p>
                    <p className="text-white/60">{u.problem}</p>
                  </div>
                  <div>
                    <p className="text-white/30 text-[10px] font-mono uppercase tracking-widest mb-1">Solution</p>
                    <p className="text-white/60">{u.solution}</p>
                  </div>
                  <div>
                    <p className="text-white/30 text-[10px] font-mono uppercase tracking-widest mb-1">Result</p>
                    <p className="text-[#EC4899] font-semibold">{u.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group glass border border-white/8 rounded-2xl overflow-hidden hover:border-white/15 transition-colors">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-white font-medium text-sm">
                  {faq.q}
                  <span className="text-white/30 group-open:rotate-45 transition-transform text-lg shrink-0">+</span>
                </summary>
                <div className="px-6 pb-5 pt-2 text-sm text-white/50 leading-relaxed border-t border-white/5">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">What Could Your Business Automate?</h2>
          <p className="text-white/50 mb-8">Book a free 30-minute call. We&apos;ll map out exactly what&apos;s automatable in your business, what it would cost, and what you&apos;d save.</p>
          <a
            href="https://calendly.com/elevenclicks-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Book a Free 30-Min Call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
