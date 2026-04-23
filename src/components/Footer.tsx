import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail } from "lucide-react";

const services = [
  { label: "Web Development",    href: "/services#web" },
  { label: "Ruby on Rails",      href: "/services#rails" },
  { label: "Node.js & Python",   href: "/services#nodejs" },
  { label: "Android Mobile Apps",href: "/services#mobile" },
  { label: "AI Solutions",       href: "/services#ai" },
  { label: "Website Maintenance",href: "/services#maintenance" },
];

const company = [
  { label: "Home",    href: "/" },
  { label: "About",   href: "/about" },
  { label: "Services",href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050510]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/menu-logo.png"
                alt="ElevenClicks"
                width={140}
                height={35}
                className="object-contain h-9 w-auto"
              />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-6">
              Ontario&apos;s trusted IT partner — delivering web, mobile,
              and AI solutions that move your business forward.
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-white/40">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0 text-[#4F8EF7]" />
                Ontario, Canada
              </span>
              <a
                href="mailto:info@elevenclicks.com"
                className="flex items-center gap-2 hover:text-white/70 transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0 text-[#8B5CF6]" />
                info@elevenclicks.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5">Services</h3>
            <ul className="flex flex-col gap-3">
              {services.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/45 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5">Company</h3>
            <ul className="flex flex-col gap-3">
              {company.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/45 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA block */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5">
              Ready to build?
            </h3>
            <p className="text-sm text-white/50 leading-relaxed mb-5">
              Let&apos;s discuss your project and craft the perfect solution for
              your business. Free consultation — no commitment.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-5 py-2.5 rounded-full bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Start a Project
            </Link>

            {/* Trust badge */}
            <div className="mt-6 flex items-center gap-2">
              <div className="flex -space-x-1">
                {["PR", "TF", "BO", "MD"].map((initials, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full bg-gradient-to-br from-[#4F8EF7] to-[#8B5CF6] border-2 border-[#050510] flex items-center justify-center text-[9px] font-bold text-white"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/40">
                <span className="text-white/70 font-medium">19+</span> five-star reviews
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} ElevenClicks. All rights reserved. Ontario, Canada.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
