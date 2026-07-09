import Link from "next/link";
import {
  Shield, Lock, Eye, Wrench, Wifi, AlertTriangle, CheckCircle,
  ArrowRight, Brain, Server, Users, Clock, Star
} from "lucide-react";
import Credentials from "@/components/Credentials";
import WhoWeProtect from "@/components/WhoWeProtect";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reviews from "@/components/Reviews";

const stats = [
  { value: "43%", label: "of cyberattacks target small businesses" },
  { value: "60%", label: "of SMBs close within 6 months of a breach" },
  { value: "$4.5M", label: "average cost of a data breach in 2024" },
  { value: "25+", label: "years of enterprise cybersecurity expertise" },
];

const services = [
  {
    icon: Shield,
    title: "Managed IT (MSP)",
    description: "24/7 proactive monitoring, threat detection, and incident response so threats are neutralized before they reach you.",
    href: "/msp",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Wrench,
    title: "IT Support",
    description: "Fast remote and on-site tech support — hardware, software, network, and device issues resolved for businesses and homes.",
    href: "/it-support",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Server,
    title: "IT Consulting",
    description: "Strategic IT roadmaps, security architecture, compliance guidance, and disaster recovery planning tailored to your business.",
    href: "/it-consulting",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Brain,
    title: "AI Services",
    description: "From AI tool setup and workflow automation to AI security and governance — we help you harness AI safely.",
    href: "/ai-services",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
];

const threats = [
  { icon: AlertTriangle, title: "Phishing Attacks", desc: "Credential-stealing emails that trick employees" },
  { icon: Lock, title: "Ransomware", desc: "File encryption until you pay — WannaCry-style" },
  { icon: Wifi, title: "Public Wi-Fi Exploits", desc: "Man-in-the-middle attacks on unsecured networks" },
  { icon: Users, title: "Social Engineering", desc: "Psychological manipulation of your staff" },
  { icon: Eye, title: "Weak Passwords", desc: "Easily brute-forced credentials and account takeovers" },
  { icon: Server, title: "Unpatched Software", desc: "Exploits targeting known vulnerabilities" },
];

const highlights = [
  { icon: Clock, text: "25+ years of enterprise IT & cybersecurity expertise" },
  { icon: Shield, text: "Proactive monitoring — threats stopped before they hit" },
  { icon: CheckCircle, text: "Compliance, DR planning, and network management" },
  { icon: Star, text: "Serving businesses, creators, entrepreneurs & families across NY & NJ" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden pt-28 pb-20">
        {/* NYC aerial background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/hero-home-nyc.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#0a1628]/45" />
        </div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Serving NY &amp; NJ — Businesses, Creators &amp; Families
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
            Guard What Matters<br />
            <span className="gradient-text">From Cyber Threats</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            25+ years of enterprise security — protecting NY &amp; NJ businesses, creators, entrepreneurs, and families around the clock.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg transition-all hover:scale-105"
            >
              Get Protected Today
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-lg transition-all"
            >
              View Services
            </Link>
          </div>

          {/* Audience chips */}
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { label: "Small Businesses", href: "/for-business", color: "border-cyan-500/30 text-cyan-400" },
              { label: "Content Creators", href: "/for-creators", color: "border-violet-500/30 text-violet-400" },
              { label: "Entrepreneurs", href: "/for-entrepreneurs", color: "border-amber-500/30 text-amber-400" },
              { label: "Home Users", href: "/for-home", color: "border-emerald-500/30 text-emerald-400" },
            ].map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className={`inline-flex items-center gap-1 px-5 py-2 rounded-full bg-white/5 border text-sm font-medium hover:bg-white/10 transition-colors ${a.color}`}
              >
                {a.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-cyan-500/10 bg-[#060b17]">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.value} className="text-center">
              <div className="text-3xl font-extrabold gradient-text mb-1">{s.value}</div>
              <div className="text-slate-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Complete <span className="gradient-text">Cybersecurity Coverage</span>
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto">
            Everything you need to stay protected, compliant, and running — whether you&apos;re a business, a creator, or a family.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => (
            <Link key={svc.href} href={svc.href} className="card-cyber rounded-2xl p-6 group block">
              <div className={`inline-flex p-3 rounded-xl ${svc.bg} mb-5`}>
                <svc.icon className={`w-6 h-6 ${svc.color}`} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                {svc.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">{svc.description}</p>
              <div className={`flex items-center gap-1 mt-4 text-sm font-medium ${svc.color}`}>
                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <Reviews />

      {/* Who We Protect */}
      <WhoWeProtect />

      {/* Threat Awareness */}
      <section className="bg-[#060b17] border-y border-cyan-500/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Know Your <span className="gradient-text">Threat Landscape</span>
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto">
              Cybercriminals don&apos;t take days off. Here are the threats most likely targeting businesses, creators, and individuals right now.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {threats.map((t) => (
              <div key={t.title} className="card-cyber rounded-xl p-5 flex gap-4">
                <div className="p-2.5 rounded-lg bg-red-500/10 shrink-0 h-fit">
                  <t.icon className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{t.title}</h3>
                  <p className="text-slate-300 text-sm">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/cybernews"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-medium transition-all"
            >
              Stay Current — Read CyberNews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why BV CyberGuardian */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-white mb-6">
              Why Choose <span className="gradient-text">BV CyberGuardian?</span>
            </h2>
            <p className="text-slate-300 leading-relaxed mb-8">
              We are not a generic IT company. We are cybersecurity specialists who understand the unique risks facing businesses, creators, entrepreneurs, and families across the NY/NJ metro region — and we have the enterprise-grade expertise to stop them.
            </p>
            <ul className="space-y-4">
              {highlights.map((h) => (
                <li key={h.text} className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-cyan-500/10 shrink-0 mt-0.5">
                    <h.icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-slate-300">{h.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-cyber rounded-3xl p-8 lg:p-10 animate-glow-pulse">
            <h3 className="text-2xl font-bold text-white mb-2">Ready to get protected?</h3>
            <p className="text-slate-400 mb-6 text-sm">
              Tell us about your business and we&apos;ll recommend the right coverage for your needs — no obligation.
            </p>
            <Link
              href="/contact"
              className="block text-center px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-all"
            >
              Book a Free Assessment →
            </Link>
            <p className="text-xs text-slate-500 text-center mt-3">
              Serving NY &amp; NJ · info@bvcyberguardian.com
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <Credentials />

      {/* Newsletter */}
      <NewsletterSignup />

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-violet-600/20 border-y border-cyan-500/20 py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Cyber threats don&apos;t wait. <span className="gradient-text">Neither should you.</span>
          </h2>
          <p className="text-slate-300 mb-8">
            Whether you run a business, build an audience, or just want to protect your family — get a free security assessment today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg transition-all hover:scale-105"
          >
            Get My Free Assessment <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
