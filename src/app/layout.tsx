import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  keywords: [
    "Ruby on Rails developer Ontario",
    "Ruby on Rails development Canada",
    "Node.js developer Ontario",
    "Python developer Canada",
    "web development Ontario",
    "Android app development Canada",
    "AI solutions Ontario",
    "IT company Ontario Canada",
    "website maintenance Canada",
    "React Next.js developer Ontario",
    "custom software development Ontario",
    "mobile app development Ontario",
    "AI chatbot development Canada",
    "ElevenClicks",
  ],
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
    title: "ElevenClicks | Web, Mobile & AI Solutions",
    description:
      "Ontario IT company delivering web development, Android apps, and AI solutions for Canadian businesses.",
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
