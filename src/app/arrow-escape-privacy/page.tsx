import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arrow Escape — Privacy Policy",
  description:
    "Privacy policy for Arrow Escape, a puzzle game developed by Ronak Bhatt. Information on data collection, third-party services, and in-app purchases.",
  robots: { index: true, follow: false },
};

export default function ArrowEscapePrivacyPage() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050510]" />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest bg-[#8B5CF6]/15 text-[#8B5CF6] border border-[#8B5CF6]/25 mb-4">
            Mobile App · Privacy Policy
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-3">
            Arrow Escape
          </h1>
          <p className="text-white/40 text-sm">Last updated: May 25, 2026</p>
        </div>

        {/* Content */}
        <div className="prose-dark space-y-10">

          {/* Intro */}
          <p className="text-white/65 leading-relaxed">
            Arrow Escape (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the app&rdquo;) is a puzzle game developed by Ronak Bhatt.
            This Privacy Policy explains how we handle information when you use our app.
          </p>

          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4 pb-3 border-b border-white/8">
              Information We Collect
            </h2>
            <p className="text-white/65 leading-relaxed mb-6">
              We do not collect, store, or share any personal information directly.
            </p>
            <p className="text-white/65 leading-relaxed mb-6">
              However, the following third-party services used by the app may collect data:
            </p>

            <div className="flex flex-col gap-4">
              {[
                {
                  name: "Google AdMob",
                  color: "#4F8EF7",
                  desc: "Used to display banner ads. AdMob may collect device identifiers (IDFA) and usage data for advertising purposes. On iOS 14+, we request your permission before accessing your IDFA via Apple's App Tracking Transparency framework.",
                  link: "https://policies.google.com/privacy",
                  linkLabel: "Google Privacy Policy",
                },
                {
                  name: "RevenueCat",
                  color: "#EC4899",
                  desc: "Used to process in-app purchases. RevenueCat may collect transaction data and device identifiers to manage purchases.",
                  link: "https://www.revenuecat.com/privacy",
                  linkLabel: "RevenueCat Privacy Policy",
                },
                {
                  name: "Apple App Store",
                  color: "#06B6D4",
                  desc: "Apple may collect analytics and crash data as part of the App Store platform.",
                  link: "https://www.apple.com/legal/privacy",
                  linkLabel: "Apple Privacy Policy",
                },
              ].map((s) => (
                <div
                  key={s.name}
                  className="glass border border-white/8 rounded-2xl p-5"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ background: s.color }} />
                    <p className="font-semibold text-white text-sm">{s.name}</p>
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed mb-2">{s.desc}</p>
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-white/40 hover:text-white/70 underline transition-colors"
                  >
                    {s.linkLabel} →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4 pb-3 border-b border-white/8">
              In-App Purchases
            </h2>
            <p className="text-white/65 leading-relaxed mb-4">
              Arrow Escape offers optional in-app purchases:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                { name: "Remove Ads", desc: "A one-time purchase to remove all advertisements." },
                { name: "Hint Pack", desc: "A consumable purchase that adds hints to your balance." },
              ].map((item) => (
                <li key={item.name} className="flex items-start gap-3 text-sm text-white/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] shrink-0 mt-1.5" />
                  <span><strong className="text-white/80">{item.name}</strong> — {item.desc}</span>
                </li>
              ))}
            </ul>
            <p className="text-white/65 leading-relaxed text-sm">
              Purchase history is managed by Apple and RevenueCat. We do not store payment information.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4 pb-3 border-b border-white/8">
              Advertising
            </h2>
            <p className="text-white/65 leading-relaxed">
              The free version of Arrow Escape displays banner ads provided by Google AdMob.
              Ads are not shown after purchasing Remove Ads.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4 pb-3 border-b border-white/8">
              Children&apos;s Privacy
            </h2>
            <p className="text-white/65 leading-relaxed">
              Arrow Escape is rated 4+ and does not knowingly collect personal information
              from children under 13.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4 pb-3 border-b border-white/8">
              Data Retention
            </h2>
            <p className="text-white/65 leading-relaxed">
              We do not store any user data on our servers. Game progress is stored locally
              on your device only.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4 pb-3 border-b border-white/8">
              Changes to This Policy
            </h2>
            <p className="text-white/65 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on
              this page with an updated date.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4 pb-3 border-b border-white/8">
              Contact
            </h2>
            <p className="text-white/65 leading-relaxed mb-2">
              If you have any questions about this Privacy Policy, contact us at:
            </p>
            <a
              href="mailto:ronakabhattrz@gmail.com"
              className="text-[#8B5CF6] hover:text-[#a78bfa] transition-colors font-medium"
            >
              ronakabhattrz@gmail.com
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
