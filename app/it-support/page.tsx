import Link from "next/link";
import { Wrench, Monitor, Phone, HardDrive, Clock, Users, CheckCircle, ArrowRight, Headphones, Wifi, Settings, RefreshCw } from "lucide-react";

export const metadata = {
  title: "IT Support | BV CyberGuardian",
  description: "Responsive IT support for businesses, creators, and home users across NY & NJ. Remote and on-site help desk, hardware, software, and device support.",
};

const services = [
  {
    icon: Monitor,
    title: "Remote Support",
    desc: "Fast remote access to diagnose and fix issues without waiting for a technician to arrive — most problems resolved in under an hour.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Wrench,
    title: "On-Site Visits",
    desc: "Hands-on support when remote access isn't enough. We come to your home or office across the NY/NJ metro area.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: HardDrive,
    title: "Hardware & Software",
    desc: "Troubleshooting, repairs, upgrades, and replacements for computers, printers, peripherals, and all business software.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: Wifi,
    title: "Network & Connectivity",
    desc: "Wi-Fi drops, slow internet, router configuration, VPN setup — we get your network running reliably and securely.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Settings,
    title: "Device Setup & Configuration",
    desc: "New laptop, phone, or tablet? We set it up securely — accounts, email, apps, backups, and security settings all configured right from the start.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: RefreshCw,
    title: "Data Backup & Recovery",
    desc: "Prevent data loss with automated backups, and recover files quickly when the unexpected happens.",
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    icon: Users,
    title: "User Account Management",
    desc: "Password resets, account access, permissions, and onboarding/offboarding support for your team.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Headphones,
    title: "Ongoing Help Desk Access",
    desc: "MSP clients get a dedicated help desk line — call or submit a ticket and we respond within 2 business hours.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
];

const audiences = [
  { label: "Small Businesses", href: "/for-business", desc: "Keep your team productive with fast, reliable IT support that doesn't break the budget.", color: "text-cyan-400", border: "border-cyan-500/20" },
  { label: "Content Creators", href: "/for-creators", desc: "Gear issues, software crashes, storage problems — get back to creating without lost time.", color: "text-violet-400", border: "border-violet-500/20" },
  { label: "Entrepreneurs", href: "/for-entrepreneurs", desc: "Solo or small team? We're your on-call IT department so you can focus on your business.", color: "text-amber-400", border: "border-amber-500/20" },
  { label: "Home Users", href: "/for-home", desc: "Simple, patient support for everyday tech problems — no jargon, just solutions.", color: "text-emerald-400", border: "border-emerald-500/20" },
];

export default function ITSupportPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-5">
            <Headphones className="w-4 h-4" />
            IT Support
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-5 leading-tight">
            Tech Problems <span className="gradient-text">Solved Fast</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            From a frozen laptop to a full office network outage — BV CyberGuardian provides responsive, no-nonsense IT support for businesses, creators, entrepreneurs, and families across NY &amp; NJ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg transition-all hover:scale-105"
            >
              Get Support Now <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:3475156775"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-lg transition-all"
            >
              <Phone className="w-5 h-5 text-cyan-400" />
              (347) 515-6775
            </a>
          </div>
        </div>

        {/* Response time callout */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
            <Clock className="w-5 h-5 text-cyan-400 shrink-0" />
            <span className="text-white font-semibold text-sm">Response within 2 business hours</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
            <Monitor className="w-5 h-5 text-blue-400 shrink-0" />
            <span className="text-white font-semibold text-sm">Remote &amp; on-site available</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-5 py-3 rounded-xl bg-violet-500/10 border border-violet-500/20">
            <Users className="w-5 h-5 text-violet-400 shrink-0" />
            <span className="text-white font-semibold text-sm">NY &amp; NJ metro service area</span>
          </div>
        </div>

        {/* Services grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-extrabold text-white text-center mb-10">
            What We <span className="gradient-text">Support</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div key={s.title} className="card-cyber rounded-2xl p-6">
                <div className={`inline-flex p-3 rounded-xl ${s.bg} mb-4`}>
                  <s.icon className={`w-6 h-6 ${s.color}`} />
                </div>
                <h3 className="text-white font-bold mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who we help */}
        <div className="mb-20">
          <h2 className="text-3xl font-extrabold text-white text-center mb-10">
            Who We <span className="gradient-text">Help</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {audiences.map((a) => (
              <Link key={a.label} href={a.href} className={`card-cyber rounded-2xl p-6 border ${a.border} block hover:bg-white/5 transition-colors`}>
                <h3 className={`font-bold mb-2 ${a.color}`}>{a.label} →</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{a.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="card-cyber rounded-3xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-extrabold text-white text-center mb-10">
            How It <span className="gradient-text">Works</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Contact Us", desc: "Call, email, or submit a ticket — describe the issue and we'll get back to you within 2 hours." },
              { step: "2", title: "Quick Diagnosis", desc: "We assess the problem remotely first. Most issues are resolved without an on-site visit." },
              { step: "3", title: "Fix It", desc: "We fix the issue remotely or schedule an on-site visit for hands-on repairs." },
              { step: "4", title: "Verify & Follow Up", desc: "We confirm everything is working and document the resolution for future reference." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-cyan-400 font-extrabold text-lg">{s.step}</span>
                </div>
                <h3 className="text-white font-bold mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* MSP upsell */}
        <div className="card-cyber rounded-2xl p-8 border border-cyan-500/20 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
                Save more with MSP
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Need ongoing support?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our Managed IT (MSP) plans include unlimited help desk support, proactive monitoring, and cybersecurity protection — all for a predictable monthly fee. Better value than pay-per-incident.
              </p>
            </div>
            <Link
              href="/msp"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-all"
            >
              View MSP Info <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Having a tech issue <span className="gradient-text">right now?</span>
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Don&apos;t let a tech problem slow you down. Contact us and we&apos;ll get it resolved fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg transition-all"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:3475156775"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-lg transition-all"
            >
              <Phone className="w-5 h-5 text-cyan-400" />
              Call (347) 515-6775
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
