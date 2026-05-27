import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="bg-[#4F46E5] py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-4xl font-bold text-white">Ready to build something?</h2>
        <p className="text-indigo-200 mt-4 text-lg">Tell us what you need. We&apos;ll send a proposal within 48 hours.</p>
        <Link href="/contact" className="inline-block mt-10 bg-white text-[#4F46E5] px-8 py-4 rounded-xl font-bold text-sm hover:bg-indigo-50 transition-colors">
          Start a Project →
        </Link>
        <p className="mt-5 text-indigo-300 text-sm">
          or email us at{" "}
          <a href="mailto:info@elevenclicks.com" className="text-white hover:underline">info@elevenclicks.com</a>
        </p>
      </div>
    </section>
  );
}
