import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import Stats from "@/components/home/Stats";
import WhyUs from "@/components/home/WhyUs";
import Process from "@/components/home/Process";
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": "https://elevenclicks.com/#organization",
  name: "ElevenClicks",
  legalName: "ElevenClicks",
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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Android App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Maintenance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Solutions" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "3",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sarah Mitchell" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "ElevenClicks rebuilt our e-commerce platform from scratch. Load times dropped by 60% and sales increased by 40% in the first month.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "David Chen" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "They delivered our Android app in 8 weeks — on budget and exactly to spec. The UX is polished and our users love it.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Priya Sharma" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "The AI automation they built saves 20+ hours of manual work every week. The ROI was evident in the first month.",
    },
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

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://elevenclicks.com/#website",
  url: "https://elevenclicks.com",
  name: "ElevenClicks",
  description: "Web, Mobile & AI Solutions for Canadian Businesses",
  publisher: { "@id": "https://elevenclicks.com/#organization" },
  inLanguage: "en-CA",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <Hero />
      <ServicesPreview />
      <Stats />
      <WhyUs />
      <Process />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
