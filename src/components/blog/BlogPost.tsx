import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";

interface BlogPostProps {
  category: string;
  color: string;
  title: string;
  titleAccent?: string;
  date: string;
  readTime: string;
  children: React.ReactNode;
}

export default function BlogPost({
  category,
  color,
  title,
  titleAccent,
  date,
  readTime,
  children,
}: BlogPostProps) {
  return (
    <div className="relative">
      {/* Fixed background glow */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-[0.07] blur-[120px] pointer-events-none z-0"
        style={{ background: color }}
      />

      {/* Article hero */}
      <section className="relative pt-28 pb-14 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050510]" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-[100px] pointer-events-none opacity-20"
          style={{ background: color }}
        />

        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            All Articles
          </Link>

          {/* Category badge */}
          <div className="mb-5">
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest"
              style={{
                background: `${color}18`,
                color,
                border: `1px solid ${color}35`,
              }}
            >
              {category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl lg:text-[2.6rem] font-bold text-white leading-tight mb-5">
            {title}
            {titleAccent && (
              <span className="text-gradient"> {titleAccent}</span>
            )}
          </h1>

          {/* Accent line */}
          <div
            className="h-0.5 w-16 rounded-full mb-6"
            style={{
              background: `linear-gradient(90deg, ${color}, transparent)`,
            }}
          />

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-[13px] text-white/40">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {date}
            </span>
            <span className="w-px h-3.5 bg-white/10" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {readTime}
            </span>
            <span className="w-px h-3.5 bg-white/10" />
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              ElevenClicks Team
            </span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <div className="relative mx-auto max-w-3xl px-6 lg:px-8 pb-6">
        <div className="article-prose">{children}</div>
      </div>

      {/* Bottom CTA */}
      <div className="relative mx-auto max-w-3xl px-6 lg:px-8 pb-24 mt-10">
        <div className="relative glass border border-white/8 rounded-3xl p-8 lg:p-10 text-center overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at center, ${color}, transparent 70%)`,
            }}
          />
          <div className="relative">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
              style={{
                background: `${color}18`,
                color,
                border: `1px solid ${color}30`,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: color }}
              />
              Free Consultation
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to start your project?
            </h3>
            <p className="text-white/50 mb-7 max-w-md mx-auto text-sm leading-relaxed">
              Book a free 30-minute discovery call. We&apos;ll scope your
              project and send a fixed-price proposal within 48 hours — no
              obligation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white font-semibold hover:opacity-90 transition-opacity text-sm"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/35 hover:text-white/60 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            More articles
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ── Shared article sub-components ───────────────────── */

export function PricingTable({
  rows,
  headers = ["Type", "Price Range (CAD)", "Timeline"],
  color = "#4F8EF7",
}: {
  rows: string[][];
  headers?: string[];
  color?: string;
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/8 my-8">
      <table className="w-full text-sm">
        <thead>
          <tr style={{ background: `${color}12` }}>
            {headers.map((h) => (
              <th
                key={h}
                className="text-left px-5 py-3.5 font-semibold text-white text-[13px] border-b border-white/8"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-white/5 last:border-0"
              style={{
                background:
                  i % 2 === 0
                    ? "rgba(255,255,255,0.01)"
                    : "rgba(255,255,255,0.03)",
              }}
            >
              <td className="px-5 py-3.5 text-white/80 font-medium">
                {row[0]}
              </td>
              <td
                className="px-5 py-3.5 font-semibold"
                style={{ color }}
              >
                {row[1]}
              </td>
              {row[2] && (
                <td className="px-5 py-3.5 text-white/50">{row[2]}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Callout({
  title,
  children,
  color = "#4F8EF7",
}: {
  title?: string;
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <div
      className="my-8 rounded-2xl p-6 border"
      style={{
        background: `${color}0d`,
        borderColor: `${color}28`,
      }}
    >
      {title && (
        <p
          className="text-xs font-bold uppercase tracking-widest mb-3"
          style={{ color }}
        >
          {title}
        </p>
      )}
      <div className="text-white/75 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export function ArticleFAQ({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  return (
    <div className="my-8 space-y-3">
      {items.map((item, i) => (
        <details
          key={i}
          className="group glass border border-white/8 rounded-2xl overflow-hidden hover:border-white/15 transition-colors"
        >
          <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-white font-medium text-sm hover:text-white/90 transition-colors">
            <span className="flex items-center gap-4">
              <span className="text-[11px] font-mono text-white/30 tabular-nums shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.q}
            </span>
            <svg
              className="w-4 h-4 text-white/40 shrink-0 group-open:rotate-180 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <div className="px-6 pb-5 text-sm text-white/55 leading-relaxed border-t border-white/5 pt-4 pl-14">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );
}
