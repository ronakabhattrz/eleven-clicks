import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ElevenClicks | Web, Mobile & AI Solutions — Ontario",
    template: "%s | ElevenClicks",
  },
  description:
    "ElevenClicks is a Ontario IT company delivering cutting-edge web development, Android mobile apps, website maintenance, and AI solutions for businesses across Canada.",
  keywords: [
    "web development Ontario",
    "Android app development Canada",
    "AI solutions Ontario",
    "IT company Ontario Canada",
    "website maintenance Canada",
    "ElevenClicks",
  ],
  authors: [{ name: "ElevenClicks" }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "ElevenClicks",
    title: "ElevenClicks | Web, Mobile & AI Solutions",
    description:
      "Ontario IT company delivering web, mobile, and AI solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ElevenClicks | Web, Mobile & AI Solutions",
    description:
      "Ontario IT company delivering web, mobile, and AI solutions.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#050510] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
