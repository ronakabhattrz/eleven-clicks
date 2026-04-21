import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elevenclicks.com"),
  title: {
    default: "ElevenClicks | Web, Mobile & AI Solutions — Ontario",
    template: "%s | ElevenClicks",
  },
  description:
    "ElevenClicks is an Ontario IT company delivering web development, Android mobile apps, website maintenance, and AI solutions for businesses across Canada. Based in Ontario — serving clients coast to coast.",
  keywords: [
    "web development Ontario",
    "web development Canada",
    "Android app development Canada",
    "AI solutions Ontario",
    "IT company Ontario Canada",
    "website maintenance Canada",
    "custom software development Ontario",
    "mobile app development Ontario",
    "AI chatbot development Canada",
    "ElevenClicks",
  ],
  authors: [{ name: "ElevenClicks", url: "https://elevenclicks.com" }],
  creator: "ElevenClicks",
  publisher: "ElevenClicks",
  alternates: {
    canonical: "https://elevenclicks.com",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://elevenclicks.com",
    siteName: "ElevenClicks",
    title: "ElevenClicks | Web, Mobile & AI Solutions — Ontario",
    description:
      "Ontario IT company delivering web development, Android apps, and AI solutions for Canadian businesses. Fast, modern, results-focused.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ElevenClicks — Web, Mobile & AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ElevenClicks | Web, Mobile & AI Solutions",
    description:
      "Ontario IT company delivering web development, Android apps, and AI solutions for Canadian businesses.",
    images: ["/og-image.png"],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA" className={inter.variable}>
      <body className="bg-[#050510] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
