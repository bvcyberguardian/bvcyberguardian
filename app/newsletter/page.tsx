import { Mail, Shield, Zap, Users, ArrowRight, Clock } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata = {
  title: "Cyber Security Weekly Briefing | BV Cyber Guardian",
  description: "Subscribe to BV Cyber Guardian's free weekly cybersecurity briefing. Plain-English threat intelligence, scam alerts, and security tips — every Monday.",
};

const sampleIssues = [
  {
    date: "Jun 16, 2026",
    title: "Fake AI Tools Spreading Malware — Don't Download That Chrome Extension",
    summary: "A wave of browser extensions impersonating popular AI tools (ChatGPT, Gemini, Copilot) are stealing saved passwords and banking credentials. Here's how to spot them and what to do if you already installed one.",
    tags: ["Malware", "Browser Security", "AI Threats"],
  },
  {
    date: "Jun 9, 2026",
    title: "QR Code Phishing Is Surging — Watch Out at Restaurants, Parking Meters & Events",
    summary: "Criminals are placing fake QR code stickers over legitimate ones in public places. When you scan them, you're taken to convincing fake payment pages. Tips to protect yourself every time you scan.",
    tags: ["Phishing", "Mobile Security", "QR Codes"],
  },
  {
    date: "Jun 2, 2026",
    title: "Ransomware Hit 3 NJ Healthcare Clinics Last Week — What SMBs Can Learn",
    summary: "Three New Jersey medical practices were knocked offline by a ransomware attack exploiting unpatched software. We break down the attack chain and the five steps every business should take this week.",
    tags: ["Ransomware", "Healthcare", "SMB"],
  },
  {
    date: "May 26, 2026",
    title: "Your Smart TV Is Watching You Back — How to Lock Down Home Devices",
    summary: "Consumer IoT devices like smart TVs, doorbells, and baby monitors often send data to overseas servers by default. We walk you through the privacy settings that matter and which devices are the biggest risks.",
    tags: ["IoT", "Privacy", "Home Security"],
  },
];

const features = [
  { icon: Zap, title: "Threat of the Week", desc: "The single biggest emerging attack or vulnerability you need to know about — explained in plain English." },
  { icon: Shield, title: "Scam Alert", desc: "Real phishing emails, fake texts, and social engineering scripts making the rounds right now." },
  { icon: Users, title: "Who's Being Targeted", desc: "Which industries, regions, and user types are in the crosshairs this week — and why." },
  { icon: Clock, title: "Action Item", desc: "One concrete thing you can do this week to improve your security. No tech degree required." },
];

export default function NewsletterPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-5">
            <Mail className="w-4 h-4" />
            Free Every Monday
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-5 leading-tight">
            The Cyber Briefing That <span className="gradient-text">Actually Makes Sense</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Every Monday morning, BV Cyber Guardian delivers a no-jargon cybersecurity briefing written for real people — businesses, creators, entrepreneurs, and everyday families across NY &amp; NJ.
          </p>
        </div>

        {/* What's inside */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {features.map((f) => (
            <div key={f.title} className="card-cyber rounded-xl p-5">
              <div className="p-2.5 rounded-lg bg-cyan-500/10 w-fit mb-3">
                <f.icon className="w-5 h-5 text-[#00c8e0]" />
              </div>
              <h3 className="text-white font-semibold mb-1 text-sm">{f.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Sign-up */}
        <NewsletterSignup />

        {/* Past issues */}
        <div className="mt-20">
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
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm mb-1">Written by BV Cyber Guardian · Powered by AI-assisted threat research</p>
          <p className="text-slate-600 text-xs">No spam. No hype. Unsubscribe anytime.</p>
        </div>

      </div>
    </div>
  );
}
