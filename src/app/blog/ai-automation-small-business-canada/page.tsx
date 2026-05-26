import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation for Canadian Small Businesses: A 2025 Practical Guide",
  description:
    "Practical AI automation strategies for Canadian small businesses — real use cases, what it actually costs, and how to start without wasting money.",
  alternates: {
    canonical:
      "https://elevenclicks.com/blog/ai-automation-small-business-canada",
  },
  openGraph: {
    url: "https://elevenclicks.com/blog/ai-automation-small-business-canada",
    title: "AI Automation for Canadian Small Businesses: A 2025 Practical Guide",
    description:
      "Practical AI automation strategies for Canadian small businesses — real use cases, what it actually costs, and how to start without wasting money.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://elevenclicks.com/blog/ai-automation-small-business-canada",
  headline: "AI Automation for Canadian Small Businesses: A 2025 Practical Guide",
  description:
    "Practical AI automation strategies for Canadian small businesses — real use cases, what it actually costs, and how to start without wasting money.",
  url: "https://elevenclicks.com/blog/ai-automation-small-business-canada",
  datePublished: "2025-04-01",
  dateModified: "2025-05-26",
  inLanguage: "en-CA",
  author: {
    "@type": "Organization",
    name: "ElevenClicks",
    url: "https://elevenclicks.com",
  },
  publisher: {
    "@type": "Organization",
    name: "ElevenClicks",
    url: "https://elevenclicks.com",
    logo: {
      "@type": "ImageObject",
      url: "https://elevenclicks.com/icon.png",
    },
  },
  isPartOf: { "@id": "https://elevenclicks.com/#website" },
  mainEntityOfPage:
    "https://elevenclicks.com/blog/ai-automation-small-business-canada",
  keywords: [
    "AI automation small business Canada",
    "AI chatbot for small business Ontario",
    "AI for Canadian businesses 2025",
    "automate business with AI Canada",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does AI automation cost for a small business in Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Basic AI chatbot integrations start around $2,000–$5,000. Custom AI workflows and document automation systems range from $5,000–$20,000. Most small businesses see ROI within 3–6 months.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best AI tool for small business in Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For customer-facing chatbots, GPT-4o (OpenAI) and Claude (Anthropic) are leading choices. For workflow automation, integrating AI with tools you already use (email, CRM, scheduling) gives the fastest ROI.",
      },
    },
    {
      "@type": "Question",
      name: "Can a small business afford AI automation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AI automation is no longer just for enterprise. A small business in Canada can automate customer service, appointment booking, data entry, and document processing for $3,000–$10,000 — costs that typically pay back within a year.",
      },
    },
    {
      "@type": "Question",
      name: "What business tasks can AI automate for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Customer support and FAQ chatbots, appointment scheduling, invoice and document data extraction, lead qualification, email triage, and report generation are the most common and highest-ROI automations for small businesses.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started with AI automation for my business in Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with one bottleneck — typically customer service or data entry. Book a free consultation with an AI solutions provider to scope the problem, get a proposal, and pilot a small automation before committing to a larger investment.",
      },
    },
  ],
};

const faqs = [
  {
    q: "How much does AI automation cost for a small business in Canada?",
    a: "Basic AI chatbot integrations start around $2,000–$5,000. Custom AI workflows and document automation systems range from $5,000–$20,000. Most small businesses see ROI within 3–6 months.",
  },
  {
    q: "What is the best AI tool for small business in Canada?",
    a: "For customer-facing chatbots, GPT-4o (OpenAI) and Claude (Anthropic) are leading choices. For workflow automation, integrating AI with tools you already use (email, CRM, scheduling) gives the fastest ROI.",
  },
  {
    q: "Can a small business afford AI automation?",
    a: "Yes. AI automation is no longer just for enterprise. A small business in Canada can automate customer service, appointment booking, data entry, and document processing for $3,000–$10,000 — costs that typically pay back within a year.",
  },
  {
    q: "What business tasks can AI automate for small businesses?",
    a: "Customer support and FAQ chatbots, appointment scheduling, invoice and document data extraction, lead qualification, email triage, and report generation are the most common and highest-ROI automations for small businesses.",
  },
  {
    q: "How do I get started with AI automation for my business in Canada?",
    a: "Start with one bottleneck — typically customer service or data entry. Book a free consultation with an AI solutions provider to scope the problem, get a proposal, and pilot a small automation before committing to a larger investment.",
  },
];

export default function AiAutomationSmallBusinessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Page wrapper */}
      <div className="relative min-h-screen">
        {/* Subtle background glow */}
        <div
          className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(79,142,247,0.6) 0%, rgba(139,92,246,0.3) 50%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-3xl px-6 lg:px-8 pt-32 pb-24">
          {/* Back link */}
          <div className="mb-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-white/45 hover:text-white/75 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Articles
            </Link>
          </div>

          {/* Article header */}
          <header className="mb-12">
            <div className="mb-4">
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider"
                style={{
                  background: "rgba(79,142,247,0.12)",
                  color: "#4F8EF7",
                  border: "1px solid rgba(79,142,247,0.25)",
                }}
              >
                AI &amp; Automation
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
              AI Automation for Canadian Small Businesses:{" "}
              <span className="text-gradient">A 2025 Practical Guide</span>
            </h1>

            <div
              className="h-0.5 w-12 rounded-full mb-6"
              style={{ background: "#4F8EF7" }}
            />

            <div className="flex flex-wrap items-center gap-5 text-sm text-white/40">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                April 1, 2025
              </span>
              <span className="w-px h-4 bg-white/10" />
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                10 min read
              </span>
              <span className="w-px h-4 bg-white/10" />
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                ElevenClicks Team
              </span>
            </div>
          </header>

          {/* Article body */}
          <article className="space-y-10">

            {/* Opening */}
            <section>
              <p className="text-white/80 leading-relaxed text-base">
                AI isn&apos;t coming — it&apos;s already here. Canadian small businesses that automate even one manual process are saving{" "}
                <strong className="text-white">10–25 hours per week</strong>, reducing errors, and responding to customers faster than competitors who are still handling everything by hand. This isn&apos;t hype. These are concrete results from real deployments with real small businesses.
              </p>
              <p className="text-white/75 leading-relaxed text-base mt-4">
                This guide cuts through the noise. No buzzword soup, no vendor pitches. Just practical information about which automations deliver real ROI, what they actually cost in Canada, and how to avoid the mistakes that sink most AI projects before they produce results.
              </p>
            </section>

            {/* What AI Automation Actually Means */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">
                What AI Automation Actually Means (No Buzzwords)
              </h2>
              <p className="text-white/75 leading-relaxed text-base">
                At its core, AI automation means using AI models to do repetitive, rule-governed work your team currently does manually. It&apos;s not robots. It&apos;s not replacing your staff. It&apos;s software that can read, understand, and respond to text — emails, documents, chat messages, forms — and take action based on what it finds.
              </p>
              <p className="text-white/75 leading-relaxed text-base mt-4">
                Three concrete examples of what this looks like in practice:
              </p>
              <div className="mt-5 space-y-4">
                {[
                  {
                    title: "A property management company",
                    detail:
                      "receives 80 tenant emails per week. Most are requests for maintenance, rent receipts, or lease renewals — questions with standard answers. An AI triage system reads each email, categorizes it, drafts a response, and flags only the 10% that need a human. The office manager spends 45 minutes instead of 6 hours.",
                  },
                  {
                    title: "A dental clinic",
                    detail:
                      "handles appointment booking via phone and email. An AI scheduling assistant handles new booking requests 24/7, checks availability, sends confirmations, and follows up with reminder messages 48 hours before appointments. The front desk staff is freed to focus on patients who are actually in the office.",
                  },
                  {
                    title: "An accounting firm",
                    detail:
                      "processes hundreds of client invoices per month, manually entering data into their system. An AI document processing pipeline extracts invoice data — vendor, amount, date, GST — directly from PDFs and populates the accounting software automatically, with a human review step for exceptions.",
                  },
                ].map((ex, i) => (
                  <div
                    key={i}
                    className="glass border border-white/8 rounded-2xl p-5"
                  >
                    <p className="text-sm text-white/65 leading-relaxed">
                      <strong className="text-white">{ex.title}</strong>{" "}
                      {ex.detail}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-white/75 leading-relaxed text-base mt-5">
                None of these require building a custom AI model from scratch. They use existing AI APIs (OpenAI, Anthropic, Google) connected to your existing tools and workflows. The work is in the integration and the business logic — not in training models.
              </p>
            </section>

            {/* 5 Use Cases */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">
                The 5 Use Cases That Actually Work for Small Business
              </h2>
              <p className="text-white/75 leading-relaxed text-base mb-6">
                Not every AI application makes sense at small-business scale. These five deliver consistent ROI because they tackle high-volume, low-complexity work that consumes disproportionate time.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">
                    1. Customer Support Chatbot
                  </h3>
                  <p className="text-white/75 leading-relaxed text-base">
                    A chatbot trained on your FAQs, product catalog, and policies handles common customer questions around the clock — without a human on duty. Modern AI chatbots (unlike the rule-based bots of five years ago) can handle natural language questions, maintain context across a conversation, and escalate to a human when the question falls outside their scope. Typical implementation cost: <strong className="text-white">$2,000–$6,000</strong>. Time saved: 5–15 hours per week of first-line support volume. A well-built chatbot can handle 60–75% of incoming inquiries without human intervention.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">
                    2. Document &amp; Invoice Processing
                  </h3>
                  <p className="text-white/75 leading-relaxed text-base">
                    If your team manually reads PDFs, invoices, contracts, or forms and enters the data somewhere — this is automatable. AI document processing uses large language models combined with structured extraction prompts to pull specific fields from unstructured documents with high accuracy. It works on scanned PDFs, mixed-format invoices, and handwritten forms with varying quality. Typical cost: <strong className="text-white">$3,000–$8,000</strong> for a custom extraction pipeline integrated with your accounting or ERP system. Time saved: 8–20 hours per week for businesses processing 100+ documents monthly.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">
                    3. Lead Qualification &amp; Email Triage
                  </h3>
                  <p className="text-white/75 leading-relaxed text-base">
                    Your inbox is probably your most valuable business channel and your biggest time sink simultaneously. An AI email triage system reads incoming messages, classifies them (lead inquiry, support request, vendor, spam), extracts key information, drafts a suggested response, and routes to the right person. For businesses with high inquiry volume, this is transformative. Typical cost: <strong className="text-white">$2,500–$5,000</strong> to integrate with your email platform and CRM. Time saved: 3–8 hours per week. The less obvious benefit: response times drop from hours to minutes, which has a measurable impact on lead conversion rates.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">
                    4. Appointment &amp; Booking Automation
                  </h3>
                  <p className="text-white/75 leading-relaxed text-base">
                    For service businesses — clinics, salons, consultants, trades — appointment scheduling is an enormous manual burden. An AI scheduling system connects to your calendar, handles booking requests via email, SMS, or chat, manages rescheduling and cancellations, and sends automated reminders that reduce no-shows by 20–35%. This is one of the highest-ROI automations for small businesses because it has a direct revenue impact (fewer no-shows, more bookings captured outside business hours) alongside the cost savings. Typical cost: <strong className="text-white">$1,500–$4,000</strong> depending on integration complexity.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">
                    5. Internal Knowledge Base (RAG)
                  </h3>
                  <p className="text-white/75 leading-relaxed text-base">
                    Retrieval-Augmented Generation (RAG) is a technique where an AI model answers questions by searching your own documents — employee handbooks, process documentation, product specs, past proposals, legal agreements — rather than relying on its general training. Your employees ask questions in plain language and get accurate answers drawn directly from your internal knowledge, with citations. This is particularly valuable for onboarding new staff, reducing interruptions to senior team members, and standardizing answers to recurring process questions. Typical cost: <strong className="text-white">$4,000–$12,000</strong> depending on document volume and integration requirements.
                  </p>
                </div>
              </div>
            </section>

            {/* Cost Table */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">
                What Does AI Automation Cost in Canada?
              </h2>
              <p className="text-white/75 leading-relaxed text-base mb-5">
                These are realistic ranges for Canadian small business AI projects in 2025 — not offshore quotes, not enterprise budgets.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full text-sm">
                  <thead>
                    <tr
                      className="border-b border-white/10"
                      style={{ background: "rgba(79,142,247,0.08)" }}
                    >
                      <th className="text-left px-5 py-3 text-white font-semibold">
                        Automation Type
                      </th>
                      <th className="text-left px-5 py-3 text-white font-semibold">
                        Cost Range (CAD)
                      </th>
                      <th className="text-left px-5 py-3 text-white font-semibold">
                        Time Saved / Week
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        type: "Customer service chatbot",
                        cost: "$2,000–$6,000",
                        saving: "5–15 hrs",
                      },
                      {
                        type: "Document processing",
                        cost: "$3,000–$8,000",
                        saving: "8–20 hrs",
                      },
                      {
                        type: "Email triage",
                        cost: "$2,500–$5,000",
                        saving: "3–8 hrs",
                      },
                      {
                        type: "Appointment automation",
                        cost: "$1,500–$4,000",
                        saving: "3–10 hrs",
                      },
                      {
                        type: "Internal knowledge base",
                        cost: "$4,000–$12,000",
                        saving: "Variable",
                      },
                    ].map((row, i) => (
                      <tr
                        key={row.type}
                        className="border-b border-white/5 last:border-0"
                        style={{
                          background:
                            i % 2 === 0
                              ? "rgba(255,255,255,0.01)"
                              : "rgba(255,255,255,0.03)",
                        }}
                      >
                        <td className="px-5 py-3.5 text-white/80 font-medium">
                          {row.type}
                        </td>
                        <td className="px-5 py-3.5 text-[#4F8EF7] font-semibold">
                          {row.cost}
                        </td>
                        <td className="px-5 py-3.5 text-white/50">{row.saving}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-white/30 mt-2 pl-1">
                Prices in CAD. Ongoing API costs (typically $50–$300/month) are separate from build costs.
              </p>
              <p className="text-white/75 leading-relaxed text-base mt-5">
                The ongoing cost of running an AI automation is typically the API usage fees — the cost of sending text through OpenAI or Anthropic&apos;s models. For a small business chatbot handling a few hundred conversations per day, this runs $50–$150 per month. Document processing pipelines are similar. These are not large numbers relative to the labour hours they replace.
              </p>
            </section>

            {/* Why Projects Fail */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">
                Why Most AI Projects Fail (And How to Avoid It)
              </h2>
              <p className="text-white/75 leading-relaxed text-base">
                Most small business AI projects that fail do so for the same handful of reasons. Knowing them in advance is most of the protection you need.
              </p>
              <div className="mt-5 space-y-4">
                {[
                  {
                    mistake: "Trying to automate too much at once",
                    fix: "Pick one process. Build it, test it, measure it, refine it. Then expand. The businesses that try to automate five things simultaneously at launch typically end up with five half-working systems and no clear owner for any of them.",
                    color: "#E53E3E",
                  },
                  {
                    mistake: "Choosing the wrong tool",
                    fix: "No-code automation tools (Zapier, Make) are useful for simple rule-based workflows but break down on anything requiring judgment. AI is powerful but expensive at high volume. Match the tool to the problem: rules for deterministic tasks, AI for language understanding tasks.",
                    color: "#EC4899",
                  },
                  {
                    mistake: "No human oversight in the loop",
                    fix: "AI systems make mistakes. An automation that sends incorrect information to customers or misroutes a document with no human review step will cause more damage than it prevents. Build in a human review step for edge cases, especially in the first 60–90 days of any deployment.",
                    color: "#8B5CF6",
                  },
                  {
                    mistake: "Bad input data quality",
                    fix: "AI automation is only as good as the data it processes. If your documents are inconsistently formatted, your email threads are messy, or your knowledge base is outdated — the AI will reflect that mess. Data quality work often needs to happen before automation work.",
                    color: "#4F8EF7",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="glass border border-white/8 rounded-2xl p-5"
                    style={{
                      borderLeft: `2px solid ${item.color}80`,
                    }}
                  >
                    <h3 className="text-sm font-semibold text-white mb-1.5">
                      {item.mistake}
                    </h3>
                    <p className="text-sm text-white/55 leading-relaxed">
                      {item.fix}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* How to Get Started */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">
                How to Get Started: 3 Steps
              </h2>
              <p className="text-white/75 leading-relaxed text-base mb-5">
                The path from &quot;interested in AI automation&quot; to a working system doesn&apos;t have to be complicated. Here&apos;s the sequence that works.
              </p>
              <div className="space-y-4">
                {[
                  {
                    step: "Identify your biggest time drain",
                    detail:
                      "Before calling anyone, spend 30 minutes writing down every manual, repetitive task your team does in a week. Estimate the hours. The task that costs the most time and involves the most text — reading, writing, sorting — is almost certainly your best first automation target. Most businesses land on customer service email or document processing.",
                  },
                  {
                    step: "Scope it with a specialist",
                    detail:
                      "Book a consultation with an AI development firm that has done this before. Bring your list of manual tasks, your rough volume numbers, and any constraints (data privacy concerns, existing software you can't replace). A good consultation results in a clear scope document: what gets automated, what the AI will and won't do, what the integration points are, and a realistic price and timeline.",
                  },
                  {
                    step: "Pilot before scaling",
                    detail:
                      "Don't automate 100% of a process on day one. Run a pilot: automate 20% of the volume or one specific sub-task, measure accuracy and time savings, gather feedback from the people using it, and refine before expanding. This approach catches problems early when they're cheap to fix and builds internal confidence in the system before it handles mission-critical volume.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 leading-relaxed">
                    <div
                      className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                      style={{
                        background: "rgba(79,142,247,0.15)",
                        color: "#4F8EF7",
                      }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1">
                        {item.step}
                      </h3>
                      <p className="text-white/65 text-sm leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Canadian Context */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">
                AI Automation in the Canadian Context
              </h2>
              <p className="text-white/75 leading-relaxed text-base">
                Canadian businesses face specific considerations that most generic AI guides don&apos;t address. Understanding them upfront prevents expensive surprises later.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6 mb-2">
                Privacy law and PIPEDA compliance
              </h3>
              <p className="text-white/75 leading-relaxed text-base">
                Canada&apos;s Personal Information Protection and Electronic Documents Act (PIPEDA) governs how businesses collect, use, and disclose personal information. Any AI automation that processes customer data — emails, names, addresses, health information — must handle that data in compliance with PIPEDA. This has practical implications for which AI providers you can use, how data is stored, and what your privacy policy needs to disclose. Ontario is also in the process of strengthening its provincial privacy legislation. A well-built AI system accounts for this from the start, not as an afterthought.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6 mb-2">
                Data residency
              </h3>
              <p className="text-white/75 leading-relaxed text-base">
                Regulated industries — healthcare, legal, financial services — may have requirements or strong preferences for data that stays within Canadian borders. Not all AI API providers offer Canadian data residency. Microsoft Azure, Google Cloud, and AWS all have Canadian regions; OpenAI and Anthropic process data in the United States. For some use cases this is fine; for others it requires an architecture decision early in the project.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6 mb-2">
                Bilingual requirements
              </h3>
              <p className="text-white/75 leading-relaxed text-base">
                Businesses serving Canadian customers — especially in Quebec or federally regulated industries — may need AI systems that work equally well in English and French. Modern large language models handle French well, but your prompts, training data, and knowledge base content need to be prepared in both languages. Factor this into your scope and budget if it applies to your customer base.
              </p>
              <p className="text-white/75 leading-relaxed text-base mt-4">
                ElevenClicks has built AI automation systems for Ontario businesses across healthcare, professional services, property management, and trades. We understand these constraints not from reading about them but from navigating them on real projects with Canadian clients. When we scope an AI project, compliance and data handling are part of the conversation from the first meeting.
              </p>
            </section>

            {/* FAQ Accordion */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-12 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group glass border border-white/8 rounded-2xl overflow-hidden hover:border-white/15 transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-white font-medium text-sm hover:text-white/90 transition-colors">
                      <span className="flex items-center gap-4">
                        <span className="text-[11px] font-mono text-white/30 tabular-nums shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {faq.q}
                      </span>
                      <svg
                        className="w-4 h-4 text-white/40 shrink-0 transition-transform duration-200 group-open:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="px-6 pb-5 text-sm text-white/55 leading-relaxed border-t border-white/5 pt-4 pl-14">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section>
              <div
                className="glass border border-white/8 rounded-3xl p-8 text-center relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(79,142,247,0.06) 0%, rgba(139,92,246,0.06) 100%)",
                  borderColor: "rgba(79,142,247,0.2)",
                }}
              >
                <div
                  className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, #4F8EF7, #8B5CF6)",
                  }}
                />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs font-semibold uppercase tracking-widest text-[#4F8EF7] mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7] animate-pulse" />
                    Free Consultation
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">
                    Get a Free AI Automation Consultation
                  </h2>
                  <p className="text-white/55 text-sm mb-6 max-w-md mx-auto leading-relaxed">
                    Tell us what&apos;s eating your team&apos;s time. We&apos;ll identify which processes are automation candidates, give you a realistic scope and cost estimate, and explain exactly what you&apos;d be getting — no jargon, no pressure.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    Book Your Free Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </section>

          </article>
        </div>
      </div>
    </>
  );
}
