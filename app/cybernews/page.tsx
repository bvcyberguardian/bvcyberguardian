import CyberNewsFeed from "@/components/CyberNewsFeed";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Rss, Shield, Mail, Zap, Users, Clock } from "lucide-react";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "CyberNews & Weekly Briefing | BV CyberGuardian",
  description: "Live cybersecurity news plus a free weekly briefing for NY & NJ businesses, creators, and families. Stay one step ahead of attackers.",
};

const briefingFeatures = [
  { icon: Zap, title: "Threat of the Week", desc: "The single biggest emerging attack or vulnerability — explained in plain English." },
  { icon: Shield, title: "Scam Alert", desc: "Real phishing emails, fake texts, and social engineering scripts making the rounds right now." },
  { icon: Users, title: "Who's Being Targeted", desc: "Which industries, regions, and user types are in the crosshairs this week — and why." },
  { icon: Clock, title: "Action Item", desc: "One concrete thing you can do this week to improve your security. No tech degree required." },
];

const sampleIssues = [
  {
    date: "Jun 29, 2026",
    title: "GPT-5.6 Launches as Five Eyes Warn AI Is Being Weaponized Against Businesses",
    summary: "OpenAI launched GPT-5.6 — its most powerful model yet — on the same day the US, UK, Canada, Australia & New Zealand issued a joint urgent warning about AI being used to attack businesses. Also this week: fake OpenAI workspaces stealing company secrets, a Linux root flaw exploited within 24 hours, and new Mac malware designed to fool AI security tools.",
    tags: ["AI Threats", "Critical Alert", "macOS", "Linux"],
  },
  {
    date: "Jun 22, 2026",
    title: "30,000 Business Passwords Stolen & an iPhone Flaw That Can Never Be Fixed",
    summary: "Hackers built a secret database of 30,000 confirmed working passwords for Fortinet networking equipment used in 194 countries. Researchers revealed a hardware flaw in some iPhones and iPads that cannot ever be patched. Plus: malicious fake AI tools stealing developer credentials, and the UK warns AI-written code is creating hidden security disasters.",
    tags: ["Critical Alert", "Credentials", "iPhone", "AI Threats"],
  },
  {
    date: "Jun 15, 2026",
    title: "Biggest Windows Update Ever, World Cup Scams at Full Force & NY Sports Data Stolen",
    summary: "Microsoft released 200 security fixes in a single day — the largest Patch Tuesday in history. Hours later a new unpatched Windows flaw dropped. FIFA World Cup scammers are running at full capacity. ShinyHunters claimed data from Madison Square Garden (Knicks & Rangers). Plus: 152 Chrome extensions caught secretly recording everything you do online.",
    tags: ["Windows", "Phishing", "Data Breach", "Chrome"],
  },
  {
    date: "Jun 8, 2026",
    title: "Seven Cisco Zero-Days, World Cup Phishing & a 150M-Device Smart TV Botnet",
    summary: "A seventh actively exploited Cisco SD-WAN zero-day with no patch available. Over 4,300 fraudulent FIFA domains went live as the World Cup opened. The IronWorm supply chain campaign hit 36 npm packages. A smart TV botnet now spans 150 million home IP addresses. Plus: Belgian courts rule banks must reimburse phishing victims immediately.",
    tags: ["Critical Alert", "Cisco", "Phishing", "Supply Chain"],
  },
];

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
          {["The Hacker News", "Krebs on Security", "BleepingComputer", "Dark Reading"].map((source) => (
            <span key={source} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm">
              {source}
            </span>
          ))}
        </div>

        <CyberNewsFeed />

        {/* Divider into Newsletter section */}
        <div className="mt-20 mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-5">
            <Mail className="w-4 h-4" />
            Free Every Monday
          </div>
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Get the Weekly <span className="gradient-text">Cyber Briefing</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Every Monday morning, BV Cyber Guardian delivers a no-jargon cybersecurity briefing written for real people — businesses, creators, entrepreneurs, and everyday families across NY &amp; NJ.
          </p>
        </div>

        {/* Briefing feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {briefingFeatures.map((f) => (
            <div key={f.title} className="card-cyber rounded-xl p-5">
              <div className="p-2.5 rounded-lg bg-cyan-500/10 w-fit mb-3">
                <f.icon className="w-5 h-5 text-[#00c8e0]" />
              </div>
              <h3 className="text-white font-semibold mb-1 text-sm">{f.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <NewsletterSignup />

        {/* Recent briefings */}
        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-white mb-2 text-center">
            Recent <span className="gradient-text">Briefings</span>
          </h2>
          <p className="text-slate-400 text-center mb-10 text-sm">A taste of what lands in your inbox each week.</p>
          <div className="space-y-5">
            {sampleIssues.map((issue) => (
              <div key={issue.title} className="card-cyber rounded-2xl p-6 flex flex-col gap-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-slate-500 text-xs">{issue.date}</span>
                  <div className="flex gap-2 flex-wrap">
                    {issue.tags.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg leading-snug">{issue.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{issue.summary}</p>
                <div className="text-[#00c8e0] text-sm font-medium flex items-center gap-1 opacity-50 cursor-default">
                  Full issue available to subscribers <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-xs text-center mt-8">Written by BV Cyber Guardian · Powered by AI-assisted threat research · No spam · Unsubscribe anytime</p>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 card-cyber rounded-2xl p-8 text-center">
          <Shield className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">Worried about a threat you just read?</h3>
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
