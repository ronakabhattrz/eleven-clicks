import Link from "next/link";
import { Zap, MapPin, Mail, Phone } from "lucide-react";

const services = [
  { label: "Web Development", href: "/services#web" },
  { label: "Website Maintenance", href: "/services#maintenance" },
  { label: "Android Mobile Apps", href: "/services#mobile" },
  { label: "AI Solutions", href: "/services#ai" },
];

const company = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050510]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4F8EF7] to-[#8B5CF6] flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-lg tracking-tight">
                Eleven<span className="text-gradient">Clicks</span>
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-6">
              London, Ontario&apos;s trusted IT partner — delivering web, mobile,
              and AI solutions that move your business forward.
            </p>
            <div className="flex flex-col gap-2 text-sm text-white/40">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0 text-[#4F8EF7]" />
                London, Ontario, Canada
              </span>
              <a
                href="mailto:hello@elevenclicks.com"
                className="flex items-center gap-2 hover:text-white/70 transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0 text-[#8B5CF6]" />
                hello@elevenclicks.com
              </a>
              <a
                href="tel:+15191234567"
                className="flex items-center gap-2 hover:text-white/70 transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0 text-[#06B6D4]" />
                +1 (519) 123-4567
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Services</h3>
            <ul className="flex flex-col gap-3">
              {services.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="flex flex-col gap-3">
              {company.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA block */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Ready to build?
            </h3>
            <p className="text-sm text-white/50 leading-relaxed mb-6">
              Let&apos;s discuss your project and craft the perfect solution for
              your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-5 py-2.5 rounded-full bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Start a Project
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} ElevenClicks. All rights reserved.
            London, Ontario, Canada.
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
