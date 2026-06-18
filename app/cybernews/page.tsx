import CyberNewsFeed from "@/components/CyberNewsFeed";
import { Rss, Shield } from "lucide-react";

export const metadata = {
  title: "CyberNews | BV CyberGuardian",
  description: "Live cybersecurity news for NY & NJ small businesses — threats, breaches, and best practices updated daily.",
};

export default function CyberNewsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-5">
            <Rss className="w-4 h-4" />
            Live Feed — Updated Every 30 Minutes
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-4">
            BV <span className="gradient-text">Cyber News</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Real-time cybersecurity intelligence from the industry&apos;s top sources — curated to keep your business one step ahead of attackers.
          </p>
        </div>

        {/* Sources badge row */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            "The Hacker News",
            "Krebs on Security",
            "BleepingComputer",
            "Dark Reading",
          ].map((source) => (
            <span
              key={source}
              className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm"
            >
              {source}
            </span>
          ))}
        </div>

        <CyberNewsFeed />

        {/* Bottom CTA */}
        <div className="mt-16 card-cyber rounded-2xl p-8 text-center">
          <Shield className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">
            Worried about a threat you just read?
          </h3>
          <p className="text-slate-400 mb-6 max-w-md mx-auto">
            Our team is standing by to assess your exposure and recommend immediate steps to protect your business.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-all"
          >
            Talk to an Expert →
          </a>
        </div>
      </div>
    </div>
  );
}
