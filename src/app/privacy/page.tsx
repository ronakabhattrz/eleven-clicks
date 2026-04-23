import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "https://elevenclicks.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-24 mx-auto max-w-3xl px-6">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-white/55 leading-relaxed mb-4">
        ElevenClicks (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is
        committed to protecting the personal information of our clients and
        website visitors. This policy outlines how we collect, use, and
        safeguard your data in accordance with applicable Canadian privacy laws,
        including PIPEDA.
      </p>
      <p className="text-white/55 leading-relaxed mb-4">
        We only collect information you voluntarily provide (e.g., through our
        contact form) and use it solely to respond to your inquiry and deliver
        our services. We do not sell or share your data with third parties
        except as required to fulfill your project (e.g., hosting providers).
      </p>
      <p className="text-white/55 leading-relaxed">
        For questions about this policy, contact us at{" "}
        <a href="mailto:info@elevenclicks.com" className="text-[#4F8EF7] hover:underline">
          info@elevenclicks.com
        </a>
        .
      </p>
    </section>
  );
}
