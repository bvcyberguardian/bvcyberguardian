"use client";
import { useState } from "react";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Could not connect. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section className="bg-[#060e1f] border-y border-[#00c8e0]/10 py-16">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <CheckCircle className="w-7 h-7 text-emerald-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">You&apos;re in!</h3>
          <p className="text-slate-400">Your weekly cyber briefing will arrive in your inbox every Monday.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#060e1f] border-y border-[#00c8e0]/10 py-16">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 mb-5">
          <Mail className="w-6 h-6 text-[#00c8e0]" />
        </div>
        <h2 className="text-3xl font-extrabold text-white mb-3">
          Weekly Cyber <span className="gradient-text">Briefings</span>
        </h2>
        <p className="text-slate-400 mb-8 leading-relaxed">
          Every Monday, get a plain-English breakdown of the week&apos;s biggest threats, scams, and security tips — curated and written by our team using real intelligence, not hype.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#00c8e0]/50 focus:ring-1 focus:ring-[#00c8e0]/30 text-sm"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#00c8e0] hover:bg-[#00b5cc] text-[#0a1628] font-bold text-sm transition-all disabled:opacity-60"
          >
            {status === "loading" ? "Subscribing…" : (<>Subscribe <ArrowRight className="w-4 h-4" /></>)}
          </button>
        </form>

        {status === "error" && (
          <p className="text-red-400 text-sm mt-3">{errorMsg}</p>
        )}

        <p className="text-slate-600 text-xs mt-4">No spam. Unsubscribe anytime. We never share your email.</p>
      </div>
    </section>
  );
}
