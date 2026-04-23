import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  alternates: { canonical: "https://elevenclicks.com/terms" },
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-24 mx-auto max-w-3xl px-6">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="text-white/55 leading-relaxed mb-4">
        By engaging ElevenClicks for services, you agree to these terms. All
        project deliverables are provided under a statement of work agreed upon
        before work begins. Payment terms, revision limits, and timelines are
        outlined in individual project agreements.
      </p>
      <p className="text-white/55 leading-relaxed mb-4">
        ElevenClicks retains the right to display completed work in our
        portfolio unless otherwise specified in writing. Client owns all
        deliverable source code and assets upon final payment.
      </p>
      <p className="text-white/55 leading-relaxed">
        For questions, contact us at{" "}
        <a href="mailto:info@elevenclicks.com" className="text-[#4F8EF7] hover:underline">
          info@elevenclicks.com
        </a>
        .
      </p>
    </section>
  );
}
