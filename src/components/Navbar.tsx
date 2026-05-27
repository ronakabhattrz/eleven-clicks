"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={clsx(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/menu-logo.png"
            alt="ElevenClicks — Ontario IT Company"
            width={160}
            height={40}
            className="object-contain h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={clsx(
                  "text-sm font-medium transition-colors duration-200",
                  pathname === href
                    ? "text-gray-900 font-semibold"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="bg-[#4F46E5] text-white rounded-lg px-5 py-2 text-sm font-semibold hover:bg-[#4338CA] transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                "text-base font-medium py-1",
                pathname === href ? "text-gray-900 font-semibold" : "text-gray-600 hover:text-gray-900"
              )}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 text-center bg-[#4F46E5] text-white rounded-lg px-5 py-2.5 text-sm font-semibold hover:bg-[#4338CA] transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
