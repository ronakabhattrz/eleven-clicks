import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Shield, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "PIPEDA Compliance Checklist for Canadian Small Businesses (2026)",
  description:
    "Free PIPEDA compliance checklist for Ontario and Canadian small businesses. 10-point checklist covering consent, data storage, breach response, and website requirements.",
  alternates: { canonical: "https://elevenclicks.com/resources/pipeda-checklist" },
  openGraph: {
    url: "https://elevenclicks.com/resources/pipeda-checklist",
    title: "PIPEDA Compliance Checklist for Canadian Small Businesses (2026)",
    description: "Free 10-point PIPEDA checklist for Canadian SMBs. Covers consent, data storage, breach response, and website requirements.",
    locale: "en_CA",
    type: "article",
  },
};

const checks = [
  {
    n: "01",
    title: "Designate a Privacy Officer",
    required: true,
    desc: "PIPEDA requires every organization to designate an individual responsible for privacy compliance. This can be the owner in a small business. Their name and contact info must be available to anyone who asks.",
    action: "Name a privacy contact and add them (or a privacy email) to your website's Privacy Policy page.",
  },
  {
    n: "02",
    title: "Publish a Privacy Policy on Your Website",
    required: true,
    desc: "Every Canadian business website that collects personal information must have a publicly accessible Privacy Policy. It must explain what data you collect, why, how it's used, and how users can access or delete their information.",
    action: "Create a Privacy Policy page at yourdomain.com/privacy. Update it whenever your data practices change.",
  },
  {
    n: "03",
    title: "Obtain Meaningful Consent Before Collecting Data",
    required: true,
    desc: "You must get clear consent before collecting personal information. Pre-checked boxes do not count. For sensitive data (health, financial), express consent (opt-in) is required. For less sensitive data, implied consent may suffice in some cases.",
    action: "Audit every form on your website. Ensure users actively opt in to marketing. Remove pre-checked consent boxes.",
  },
  {
    n: "04",
    title: "Only Collect What You Actually Need",
    required: true,
    desc: "PIPEDA's principle of data minimisation means you can only collect personal information that is necessary for the identified purpose. Collecting data 'just in case' is non-compliant.",
    action: "Review your contact forms, intake forms, and sign-up flows. Remove any fields you don't actively use.",
  },
  {
    n: "05",
    title: "Secure Personal Data Against Breach",
    required: true,
    desc: "You must protect personal information with security safeguards appropriate to its sensitivity. This includes encryption at rest and in transit, access controls, and regular security reviews.",
    action: "Ensure your website uses HTTPS. If you store customer data, verify it's encrypted and access is role-restricted.",
  },
  {
    n: "06",
    title: "Report Breaches to the OPC",
    required: true,
    desc: "Since November 2018, PIPEDA requires mandatory breach reporting. If a breach poses a 'real risk of significant harm' to individuals, you must notify the Office of the Privacy Commissioner (OPC) and affected individuals as soon as feasible.",
    action: "Create a breach response plan. Know who to contact at the OPC (priv.gc.ca). Train anyone with access to customer data.",
  },
  {
    n: "07",
    title: "Maintain a Record of Breaches",
    required: true,
    desc: "You must keep a record of every breach involving personal information — even if it doesn't meet the reporting threshold. The OPC can request this record at any time.",
    action: "Create a simple breach log (even a spreadsheet) and record any incidents involving personal data.",
  },
  {
    n: "08",
    title: "Allow Customers to Access Their Data",
    required: true,
    desc: "Individuals have the right to know what personal information you hold about them and to request corrections. You have 30 days to respond to access requests.",
    action: "Add a process for data access requests to your Privacy Policy. Designate who handles these requests.",
  },
  {
    n: "09",
    title: "Use Canadian-Region Servers for Sensitive Data",
    required: false,
    desc: "PIPEDA doesn't prohibit storing data outside Canada, but you must inform users when their data is processed in another country and ensure equivalent protection. Using Canadian-region cloud infrastructure simplifies compliance significantly — especially in healthcare and legal.",
    action: "If you store health, financial, or legal data, use AWS ca-central-1, Azure Canada Central, or GCP northamerica-northeast1.",
  },
  {
    n: "10",
    title: "Include a Cookie Consent Notice",
    required: false,
    desc: "Canada's Anti-Spam Legislation (CASL) and PIPEDA together require transparency about tracking. If your website uses cookies that collect personal data (analytics, advertising), you should inform users and, for non-essential cookies, obtain consent.",
    action: "Add a cookie notice to your website. Tools like CookieYes or Cookiebot handle this automatically.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://elevenclicks.com" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://elevenclicks.com/resources/pipeda-checklist" },
    { "@type": "ListItem", position: 3, name: "PIPEDA Checklist", item: "https://elevenclicks.com/resources/pipeda-checklist" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does PIPEDA apply to small businesses in Canada?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. PIPEDA applies to all private sector organizations in Canada that collect, use, or disclose personal information in the course of commercial activity — regardless of size. There are some exemptions for personal, journalistic, or artistic purposes, but most small businesses collecting customer data are covered." },
    },
    {
      "@type": "Question",
      name: "What is the penalty for PIPEDA non-compliance?",
      acceptedAnswer: { "@type": "Answer", text: "Organizations can face fines up to $100,000 CAD for knowingly violating PIPEDA. More practically, the OPC can investigate complaints, issue findings, and publish reports that damage your reputation. Certain provinces (Quebec, Alberta, BC) have their own substantially similar privacy laws with additional penalties." },
    },
    {
      "@type": "Question",
      name: "Does Quebec have different privacy rules?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Quebec's Law 25 (Act respecting the protection of personal information in the private sector) came into full effect in September 2023 and is stricter than PIPEDA in several areas — including mandatory privacy impact assessments for high-risk projects, stricter consent requirements, and higher fines (up to $25 million CAD or 4% of worldwide turnover)." },
    },
  ],
};

export default function PIPEDAChecklistPage() {
  const required = checks.filter((c) => c.required);
  const recommended = checks.filter((c) => !c.required);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050510]" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] pointer-events-none opacity-10"
          style={{ background: "radial-gradient(circle, #10B981 0%, #4F8EF7 60%, transparent 70%)" }} />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#10B981]/20 bg-[#10B981]/5 text-xs font-semibold uppercase tracking-widest text-[#10B981] mb-6">
            <Shield className="w-3.5 h-3.5" /> Free Resource · Updated 2026
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-5">
            PIPEDA Compliance Checklist<br />
            <span className="text-gradient">for Canadian Small Businesses</span>
          </h1>
          <p className="text-lg text-white/55 leading-relaxed mb-6 max-w-2xl">
            A plain-English 10-point checklist covering everything a Canadian small business needs to comply with PIPEDA — Canada&apos;s federal private sector privacy law.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-white/40">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#10B981]" /> Free to use and share</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#10B981]" /> Updated for 2026</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#10B981]" /> Covers all provinces</span>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-8">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-start gap-3 p-5 rounded-2xl bg-[#F59E0B]/5 border border-[#F59E0B]/20">
            <AlertTriangle className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
            <p className="text-sm text-white/50 leading-relaxed">
              <strong className="text-white/70">Not legal advice.</strong> This checklist is for general educational purposes. For specific legal guidance on your business&apos;s privacy obligations, consult a Canadian privacy lawyer or the{" "}
              <a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer" className="text-[#4F8EF7] hover:underline">Office of the Privacy Commissioner of Canada</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Required checks */}
      <section className="pb-10">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#E53E3E]" />
            Required by PIPEDA ({required.length} items)
          </h2>
          <div className="flex flex-col gap-4">
            {required.map((c) => (
              <div key={c.n} className="glass border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="text-xs font-mono font-bold text-white/20 mt-1 shrink-0">{c.n}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-white text-sm">{c.title}</h3>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E53E3E]/10 text-[#E53E3E] border border-[#E53E3E]/20 font-semibold uppercase tracking-wide">Required</span>
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed mb-3">{c.desc}</p>
                    <div className="flex items-start gap-2 text-sm text-[#10B981]">
                      <ArrowRight className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{c.action}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended checks */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
            Strongly Recommended ({recommended.length} items)
          </h2>
          <div className="flex flex-col gap-4">
            {recommended.map((c) => (
              <div key={c.n} className="glass border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="text-xs font-mono font-bold text-white/20 mt-1 shrink-0">{c.n}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-white text-sm">{c.title}</h3>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20 font-semibold uppercase tracking-wide">Recommended</span>
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed mb-3">{c.desc}</p>
                    <div className="flex items-start gap-2 text-sm text-[#10B981]">
                      <ArrowRight className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{c.action}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-3">
            {[
              { q: "Does PIPEDA apply to small businesses in Canada?", a: "Yes. PIPEDA applies to all private sector organizations in Canada that collect, use, or disclose personal information in the course of commercial activity — regardless of size. Most small businesses collecting customer data are covered." },
              { q: "What is the penalty for PIPEDA non-compliance?", a: "Organizations can face fines up to $100,000 CAD for knowingly violating PIPEDA. More practically, the OPC can investigate complaints, issue findings, and publish reports that damage your reputation." },
              { q: "Does Quebec have different privacy rules?", a: "Yes. Quebec's Law 25 came into full effect in September 2023 and is stricter than PIPEDA — including mandatory privacy impact assessments, stricter consent requirements, and higher fines (up to $25 million CAD or 4% of worldwide turnover)." },
            ].map((faq, i) => (
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

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="glass border border-[#10B981]/20 rounded-3xl p-10">
            <h2 className="text-2xl font-bold mb-3">Need a PIPEDA-Compliant Software System?</h2>
            <p className="text-white/50 mb-6 text-sm leading-relaxed max-w-lg mx-auto">
              ElevenClicks builds web apps, mobile apps, and AI systems for Canadian businesses with PIPEDA compliance built in from day one — Canadian-region hosting, encrypted storage, role-based access controls.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="https://calendly.com/elevenclicks-info/30min" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#10B981] to-[#4F8EF7] text-white font-semibold hover:opacity-90 transition-opacity text-sm">
                Book a Free Call <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/industries/healthcare" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white/60 font-semibold hover:text-white transition-colors text-sm glass">
                Healthcare Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
