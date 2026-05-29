import type { Metadata } from "next";
import {
  CheckCircle2, ArrowRight, Shield, Clock, Zap,
  RefreshCw, Bell, HeadphonesIcon, BarChart3, FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Website Maintenance Plans — $299/month",
  description:
    "Keep your website fast, secure, and up-to-date with ElevenClicks' monthly maintenance plan. $299 CAD/month. Ontario-based team, same-day response, cancel anytime.",
  alternates: { canonical: "https://elevenclicks.com/maintenance" },
  openGraph: {
    url: "https://elevenclicks.com/maintenance",
    title: "Website Maintenance Plans — $299/month | ElevenClicks",
    description:
      "Keep your website fast, secure, and up-to-date. $299 CAD/month. Ontario-based team, cancel anytime.",
  },
};

const included = [
  { icon: RefreshCw,       color: "#4F8EF7", title: "Plugin & CMS Updates",       desc: "All plugins, themes, and CMS core updated monthly — tested before deployment." },
  { icon: Shield,          color: "#10B981", title: "Security Monitoring",          desc: "Daily malware scans, firewall checks, and immediate alerts if anything looks wrong." },
  { icon: Zap,             color: "#F59E0B", title: "Daily Automated Backups",      desc: "Full site backup every 24 hours. 30-day backup retention. Restore in minutes." },
  { icon: Bell,            color: "#EC4899", title: "Uptime Monitoring",            desc: "Your site is checked every 5 minutes. You're notified the moment it goes down." },
  { icon: BarChart3,       color: "#8B5CF6", title: "Monthly Performance Report",   desc: "A plain-English report covering speed, uptime, security, and any issues fixed." },
  { icon: HeadphonesIcon,  color: "#06B6D4", title: "Priority Email Support",       desc: "Emails from maintenance clients go to the front of the queue. Same-day response." },
  { icon: FileText,        color: "#4F8EF7", title: "1 Hour Content Updates/Month", desc: "Text changes, image swaps, new pages — one hour of hands-on updates included." },
  { icon: Clock,           color: "#10B981", title: "Cancel Anytime",               desc: "No contracts, no lock-in. Cancel with 30 days notice. No questions asked." },
];

const faqs = [
  {
    q: "What kinds of websites do you maintain?",
    a: "WordPress, Shopify, custom Next.js/React sites, and most CMS platforms. If you're not sure, just book a call and we'll tell you within 5 minutes.",
  },
  {
    q: "What if something breaks outside the monthly updates?",
    a: "Priority support means we respond same-day. Minor fixes related to our updates are covered at no extra charge. Larger changes are quoted separately.",
  },
  {
    q: "Do you maintain sites you didn't build?",
    a: "Yes. We do a quick audit before starting to make sure the site is in good shape. If there are issues, we'll tell you what they are before you commit.",
  },
  {
    q: "What does the 1 hour of content updates include?",
    a: "Text changes, image replacements, adding a new team member, updating your hours or pricing — anything that doesn't require new development work.",
  },
  {
    q: "Is there a setup fee?",
    a: "No setup fee. First month is prorated from when you start. Cancel anytime with 30 days notice.",
  },
  {
    q: "How do I send you update requests?",
    a: "Email us at info@elevenclicks.com or use the client portal we set up for you on day one. No tickets, no complicated systems.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://elevenclicks.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://elevenclicks.com/services" },
    { "@type": "ListItem", position: 3, name: "Website Maintenance", item: "https://elevenclicks.com/maintenance" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Maintenance Plan",
  description: "Monthly website maintenance covering updates, backups, security monitoring, uptime checks, and priority support for Canadian businesses.",
  provider: { "@type": "Organization", name: "ElevenClicks", url: "https://elevenclicks.com" },
  areaServed: { "@type": "Country", name: "Canada" },
  offers: {
    "@type": "Offer",
    price: "299",
    priceCurrency: "CAD",
    priceSpecification: { "@type": "UnitPriceSpecification", billingDuration: "P1M" },
  },
};

export default function MaintenancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050510]" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] pointer-events-none opacity-15"
          style={{ background: "radial-gradient(circle, #10B981 0%, #4F8EF7 50%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-semibold uppercase tracking-widest text-[#10B981] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              Website Maintenance · Ontario, Canada
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              Website Maintenance<br />
              <span className="text-gradient">Plans for Canadian SMBs</span>
            </h1>
            <p className="text-lg text-white/55 leading-relaxed mb-8 max-w-xl">
              One flat monthly fee. No surprises. We handle the updates, backups, security, and support so you never have to think about your website going down.
            </p>

            {/* Price block */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10">
              <div className="glass border border-[#10B981]/30 rounded-2xl px-7 py-5 inline-flex items-baseline gap-2">
                <span className="text-5xl font-bold text-white">$299</span>
                <span className="text-white/40 text-base">CAD / month</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="flex items-center gap-2 text-sm text-white/60">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" /> No setup fee
                </span>
                <span className="flex items-center gap-2 text-sm text-white/60">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" /> No contracts
                </span>
                <span className="flex items-center gap-2 text-sm text-white/60">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" /> Cancel anytime
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/elevenclicks-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#10B981] to-[#4F8EF7] text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Get Started — Book a Call <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@elevenclicks.com"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/10 text-white/70 font-semibold hover:text-white hover:border-white/25 transition-all glass"
              >
                Email Us First
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#10B981] uppercase tracking-widest mb-3">Everything Included</p>
            <h2 className="text-3xl lg:text-4xl font-bold">What You Get Every Month</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {included.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="glass border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-colors">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}>
                    <Icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-2">{item.title}</h3>
                  <p className="text-white/45 text-xs leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What happens without maintenance */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E53E3E]/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-[#E53E3E] uppercase tracking-widest mb-3">The Risk of Doing Nothing</p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Happens When You Skip Maintenance</h2>
              <div className="space-y-4">
                {[
                  { risk: "Outdated plugins become the #1 way WordPress sites get hacked." },
                  { risk: "A hacked site costs $3,000–$15,000 CAD to clean up — if it can be recovered." },
                  { risk: "Sites with no backups lose everything when hosting fails." },
                  { risk: "Slow, outdated sites lose Google rankings every month." },
                  { risk: "One day of downtime costs the average Canadian SMB $1,200+ in lost leads." },
                ].map((r, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E53E3E] shrink-0 mt-2" />
                    <p className="text-white/60 text-sm leading-relaxed">{r.risk}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass border border-[#10B981]/20 rounded-3xl p-8">
              <p className="text-sm font-semibold text-[#10B981] uppercase tracking-widest mb-4">With ElevenClicks Maintenance</p>
              <div className="space-y-4">
                {[
                  "Plugins updated and tested before they can cause problems",
                  "Daily backups mean restoration takes minutes, not weeks",
                  "Security monitoring catches threats before they become breaches",
                  "Performance audits keep your Google rankings protected",
                  "One point of contact — a real Canadian team you can reach",
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <p className="text-white/65 text-sm leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/8">
                <p className="text-white/40 text-xs">
                  $299/month is less than 2 hours of emergency developer time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group glass border border-white/8 rounded-2xl overflow-hidden hover:border-white/15 transition-colors">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-white font-medium text-sm">
                  <span className="flex items-center gap-4">
                    <span className="text-[11px] font-mono text-white/25 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    {faq.q}
                  </span>
                  <span className="text-white/30 group-open:rotate-45 transition-transform text-lg shrink-0">+</span>
                </summary>
                <div className="px-6 pb-5 pt-2 text-sm text-white/50 leading-relaxed border-t border-white/5 pl-14">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="glass border border-[#10B981]/20 rounded-3xl p-10">
            <div className="w-10 h-0.5 rounded-full mx-auto mb-6 bg-gradient-to-r from-[#10B981] to-[#4F8EF7]" />
            <h2 className="text-3xl font-bold mb-3">Ready to Stop Worrying About Your Website?</h2>
            <p className="text-white/50 mb-8 max-w-md mx-auto">
              Book a free 15-minute call. We&apos;ll look at your site, confirm it&apos;s a good fit, and get you set up the same week.
            </p>
            <a
              href="https://calendly.com/elevenclicks-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#10B981] to-[#4F8EF7] text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Book a Free Call <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-white/25 text-xs mt-5">$299 CAD/month · No contracts · Cancel anytime</p>
          </div>
        </div>
      </section>
    </>
  );
}
