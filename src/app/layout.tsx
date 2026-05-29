import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elevenclicks.com"),
  title: {
    default: "ElevenClicks | Ruby on Rails, Node.js, Web & AI Solutions — Ontario",
    template: "%s | ElevenClicks",
  },
  description:
    "ElevenClicks is an Ontario IT company delivering Ruby on Rails apps, Node.js & Python backends, React web development, Android mobile apps, and custom AI solutions for Canadian businesses.",
  authors: [{ name: "ElevenClicks", url: "https://elevenclicks.com" }],
  creator: "ElevenClicks",
  publisher: "ElevenClicks",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://elevenclicks.com",
    siteName: "ElevenClicks",
    title: "ElevenClicks | Ruby on Rails, Node.js, Web & AI Solutions — Ontario",
    description:
      "Ontario IT company delivering Ruby on Rails, Node.js, Python, React web apps, Android mobile apps, and AI solutions for Canadian businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ElevenClicks | Ruby on Rails, Node.js, Web & AI Solutions — Ontario",
    description:
      "Ontario IT company delivering Ruby on Rails, Node.js, Python, React web apps, Android mobile apps, and AI solutions for Canadian businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": "https://elevenclicks.com/#organization",
  name: "ElevenClicks",
  url: "https://elevenclicks.com",
  logo: "https://elevenclicks.com/menu-logo.png",
  email: "info@elevenclicks.com",
  foundingDate: "2019",
  description: "Ontario IT company building custom web apps, Ruby on Rails platforms, mobile apps, and AI automation for Canadian small businesses.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: [
    { "@type": "City", name: "Toronto" },
    { "@type": "AdministrativeArea", name: "Ontario" },
    { "@type": "Country", name: "Canada" },
  ],
  sameAs: [
    "https://www.linkedin.com/company/elevenclicks",
    "https://clutch.co/profile/elevenclicks",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA" className={inter.variable}>
      <body className="bg-[#050510] text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        {/* Google Analytics — elevenclicks.com */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GFTHP8H0R6"
          strategy="afterInteractive"
        />
        {/* Google Analytics — elevenclicks.ca */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VTPHHRWZQR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GFTHP8H0R6');
            gtag('config', 'G-VTPHHRWZQR');
          `}
        </Script>
      </body>
    </html>
  );
}
