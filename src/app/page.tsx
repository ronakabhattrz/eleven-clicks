import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import Stats from "@/components/home/Stats";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "ElevenClicks | Web, Mobile & AI Solutions — Ontario",
  description:
    "ElevenClicks is an Ontario IT company building high-performance websites, Android apps, and custom AI solutions for Canadian businesses. Get a free quote today.",
  alternates: {
    canonical: "https://elevenclicks.com",
  },
  openGraph: {
    url: "https://elevenclicks.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ElevenClicks",
  description:
    "Ontario IT company delivering web development, Android mobile apps, website maintenance, and AI solutions for Canadian businesses.",
  url: "https://elevenclicks.com",
  email: "info@elevenclicks.com",
  foundingDate: "2019",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Ontario",
    addressCountry: "CA",
  },
  areaServed: [
    { "@type": "Country", name: "Canada" },
    { "@type": "AdministrativeArea", name: "Ontario" },
  ],
  serviceType: [
    "Web Development",
    "Android App Development",
    "Website Maintenance",
    "AI Solutions",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "Android Development",
    "Kotlin",
    "AI Integration",
    "OpenAI",
    "Claude",
    "Web Performance",
  ],
  sameAs: [],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ServicesPreview />
      <Stats />
      <WhyUs />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
