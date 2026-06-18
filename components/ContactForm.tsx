"use client";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

const services = [
  "Managed Security (MSP)",
  "IT Consulting",
  "Help Desk Support",
  "CyberNews / Threat Intelligence",
  "General Inquiry",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "", email: "", company: "", phone: "", service: "", message: "",
  });

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card-cyber rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
        <CheckCircle className="w-14 h-14 text-emerald-400 mb-5" />
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-slate-400 mb-6">We&apos;ll be in touch within one business day.</p>
        <button
          onClick={() => { setStatus("idle"); setForm({ name: "", email: "", company: "", phone: "", service: "", message: "" }); }}
          className="px-5 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 font-medium text-sm transition-all"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-cyber rounded-2xl p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">Full Name *</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Jane Smith"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">Email Address *</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="jane@company.com"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">Company</label>
          <input
            type="text"
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            placeholder="Acme Corp"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">Phone</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="(555) 000-0000"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1.5">Service Interested In</label>
        <select
          value={form.service}
          onChange={(e) => update("service", e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all text-sm"
        >
          <option value="" className="bg-[#0d1628]">Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s} className="bg-[#0d1628]">{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1.5">Message *</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us about your business and what you're looking for..."
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all text-sm resize-none"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
          <AlertCircle className="w-4 h-4 shrink-0" />
          Something went wrong. Please email us directly at info@bvcyberguardian.com
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold text-base transition-all"
      >
        {status === "sending" ? (
          <>Sending...</>
        ) : (
          <><Send className="w-4 h-4" /> Send Message</>
        )}
      </button>

      <p className="text-xs text-slate-500 text-center">
        We respond within one business day. No spam, ever.
      </p>
    </form>
  );
}
