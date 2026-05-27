import Link from "next/link";
import Image from "next/image";

const company = [
  { label: "Home",    href: "/" },
  { label: "Services",href: "/services" },
  { label: "About",   href: "/about" },
  { label: "Blog",    href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const legal = [
  { label: "Privacy",  href: "/privacy" },
  { label: "Terms",    href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left: brand */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/menu-logo.png"
                alt="ElevenClicks — Ontario IT Company"
                width={140}
                height={35}
                className="object-contain h-9 w-auto brightness-200"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Web, Mobile &amp; AI Solutions for North American businesses.
            </p>
          </div>

          {/* Right: link groups */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Company</h3>
              <ul className="flex flex-col gap-3">
                {company.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Legal</h3>
              <ul className="flex flex-col gap-3">
                {legal.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} ElevenClicks. Ontario, Canada.
          </p>
          <a
            href="mailto:info@elevenclicks.com"
            className="text-xs text-gray-600 hover:text-white transition-colors"
          >
            info@elevenclicks.com
          </a>
        </div>
      </div>
    </footer>
  );
}
