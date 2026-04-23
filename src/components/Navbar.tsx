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
          ? "glass border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/menu-logo.png"
            alt="ElevenClicks"
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
                    ? "text-white"
                    : "text-white/50 hover:text-white"
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
            className="relative px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white hover:opacity-90 transition-opacity duration-200"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg text-white/70 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                "text-base font-medium py-1",
                pathname === href ? "text-white" : "text-white/60 hover:text-white"
              )}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 text-center px-5 py-2.5 rounded-full bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white text-sm font-semibold"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
