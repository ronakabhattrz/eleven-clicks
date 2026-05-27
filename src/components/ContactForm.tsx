"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const SERVICES = [
  "Web Development",
  "Website Maintenance",
  "Android Mobile App",
  "AI Solutions",
  "Multiple Services",
  "Other / Not Sure",
];

const BUDGETS = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Ongoing Monthly Retainer",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function update(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const inputClass =
    "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0f0f0f] placeholder-gray-400 focus:outline-none focus:border-[#4F46E5] focus:ring-1 focus:ring-[#4F46E5]/20 transition-all duration-200";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
        <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-[#10B981]" />
        </div>
        <h3 className="text-xl font-bold text-[#0f0f0f]">Message Received!</h3>
        <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
          Thanks for reaching out! We&apos;ll review your message and get back to
          you within 1 business day.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setForm({ name: "", email: "", service: "", budget: "", message: "" });
          }}
          className="mt-2 text-sm text-[#4F46E5] hover:text-[#4338CA] transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-5">
      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">
            Full Name <span className="text-[#4F46E5]">*</span>
          </label>
          <input
            name="name"
            value={form.name}
            onChange={update}
            required
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">
            Email Address <span className="text-[#4F46E5]">*</span>
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={update}
            required
            placeholder="jane@company.com"
            className={inputClass}
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1.5">
          Service Interested In
        </label>
        <select
          name="service"
          value={form.service}
          onChange={update}
          className={`${inputClass} appearance-none`}
        >
          <option value="">Select a service…</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Budget */}
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1.5">
          Project Budget
        </label>
        <select
          name="budget"
          value={form.budget}
          onChange={update}
          className={`${inputClass} appearance-none`}
        >
          <option value="">Select a budget range…</option>
          {BUDGETS.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1.5">
          Tell Us About Your Project <span className="text-[#4F46E5]">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={update}
          required
          rows={5}
          placeholder="Describe your project, goals, timeline, or any questions you have…"
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#4F46E5] text-white font-semibold text-sm hover:bg-[#4338CA] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
}
