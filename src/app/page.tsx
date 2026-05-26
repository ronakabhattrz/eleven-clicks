import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import Stats from "@/components/home/Stats";
import TechStack from "@/components/home/TechStack";
import WhyUs from "@/components/home/WhyUs";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "ElevenClicks | Ruby on Rails, Node.js, Web & AI Solutions — Ontario",
  description:
    "ElevenClicks builds Ruby on Rails apps, Node.js & Python backends, React websites, Android mobile apps, and AI solutions for Canadian businesses. Get a free quote today.",
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
    reviewCount: "19",
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
    "Next.js", "React", "TypeScript",
    "Ruby on Rails", "Node.js", "Python", "Django", "FastAPI",
    "Android Development", "Kotlin", "Flutter", "React Native",
    "AI Integration", "OpenAI", "Claude", "Gemini",
    "PostgreSQL", "AWS", "Stripe", "GraphQL",
    "Web Performance", "UI/UX Design",
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

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Start a Project with ElevenClicks",
  description: "A clear four-step process to launch your web, mobile, or AI project with ElevenClicks.",
  totalTime: "PT2D",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Discovery Call",
      text: "Book a free 30-minute call to discuss your goals, timeline, and budget. No sales pitch — just honest conversation.",
      url: "https://elevenclicks.com/contact",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Proposal & Plan",
      text: "Receive a detailed scope, transparent pricing, and a clear project timeline within 48 hours. No hidden fees.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Design & Build",
      text: "Agile sprints with weekly check-ins so you see real progress every week.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Launch & Support",
      text: "We handle deployment, testing, and handover. Post-launch support and iterations included.",
    },
  ],
};

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does ElevenClicks offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ElevenClicks offers web development (Next.js, React, Ruby on Rails, Node.js, Python), Android and iOS mobile app development, website maintenance plans, and custom AI solutions for Canadian businesses.",
      },
    },
    {
      "@type": "Question",
      name: "Where is ElevenClicks located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ElevenClicks is based in Ontario, Canada, and serves businesses across Canada remotely.",
      },
    },
    {
      "@type": "Question",
      name: "How much does web development cost at ElevenClicks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing depends on scope. We provide a detailed proposal with transparent pricing within 48 hours of your discovery call. We work with startups and small businesses and match scope to budget.",
      },
    },
    {
      "@type": "Question",
      name: "Does ElevenClicks do Ruby on Rails development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Ruby on Rails is one of ElevenClicks' core specialties. We build new Rails apps, maintain and upgrade legacy Rails applications, and develop SaaS products, APIs, and Stripe-integrated marketplaces with Rails 6, 7, and 8.",
      },
    },
    {
      "@type": "Question",
      name: "Can ElevenClicks build AI solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ElevenClicks integrates OpenAI GPT-4o, Anthropic Claude, and Google Gemini into custom applications. We build RAG pipelines, AI chatbots, and automation workflows connected to your existing data and tools.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get a quote from ElevenClicks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit https://elevenclicks.com/contact to book a free 30-minute discovery call. A detailed proposal with scope and pricing arrives within 48 hours.",
      },
    },
  ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <Hero />
      <ServicesPreview />
      <Stats />
      <TechStack />
      <WhyUs />
      <Process />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
