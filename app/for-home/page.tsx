import Link from "next/link";
import Image from "next/image";
import { Home, Shield, Lock, AlertTriangle, CheckCircle, Eye, Wifi, CreditCard, Baby } from "lucide-react";

export const metadata = {
  title: "Home Cybersecurity | BV Cyber Guardian",
  description: "Protect your family, identity, finances, and smart home from cyber threats. BV Cyber Guardian provides personal cybersecurity for home users in NY & NJ.",
};

const risks = [
  { icon: CreditCard, title: "Identity Theft", desc: "Criminals steal your Social Security number, open credit cards, drain bank accounts, and file taxes in your name." },
  { icon: Wifi, title: "Smart Home Hacking", desc: "Your Ring camera, smart TV, thermostat, and router can be hijacked — giving attackers eyes and ears inside your home." },
  { icon: Baby, title: "Kids' Online Safety", desc: "Children are targeted by predators, cyberbullies, and apps that harvest their personal data without parental awareness." },
  { icon: AlertTriangle, title: "Phishing Scams", desc: "Fake IRS emails, bank alerts, and delivery notifications trick you into handing over credentials or money." },
  { icon: Lock, title: "Password Breaches", desc: "Your email, bank, or streaming accounts get breached in bulk data leaks — often without you knowing for months." },
  { icon: Eye, title: "Stalkerware & Spyware", desc: "Apps that secretly track your location, read your messages, and monitor your activity — often installed by someone you know." },
];

const protections = [
  "Home network security setup",
  "Smart device (IoT) hardening",
  "Identity theft monitoring",
  "Password manager setup and training",
  "Parental controls and kids' device setup",
  "Phishing awareness training for the family",
  "Dark web monitoring for your accounts",
  "VPN setup for private browsing",
];

export default function ForHomePage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero image banner */}
      <div className="relative h-64 md:h-80 overflow-hidden mb-12">
        <Image
          src="/images/audience-home.jpg"
          alt="Family with laptop on couch"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0a1628]/65" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-5">
            <Home className="w-4 h-4" />
            Home Users &amp; Families
          </div>
          <h1 className="text-4xl font-extrabold text-white mb-5">
            Your Family Deserves <span className="gradient-text">Real Protection</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Cybercriminals don&apos;t only target businesses. Your identity, your bank accounts, your kids, and your home network are all valuable targets. BV Cyber Guardian brings professional-grade security to your household — in plain language, no tech degree required.
          </p>
        </div>

        {/* Callout */}
        <div className="card-cyber rounded-2xl p-6 border border-emerald-500/20 mb-16 text-center max-w-2xl mx-auto">
          <p className="text-slate-300 text-lg leading-relaxed">
            <span className="text-emerald-400 font-bold">Over 15 million Americans have their identity stolen every year.</span> Most don&apos;t find out until the damage is already done.
          </p>
        </div>

        {/* Risks */}
        <div className="mb-20">
          <h2 className="text-3xl font-extrabold text-white text-center mb-10">
            Threats Targeting <span className="gradient-text">You and Your Family</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {risks.map((r) => (
              <div key={r.title} className="card-cyber rounded-xl p-5 flex gap-4">
                <div className="p-2.5 rounded-lg bg-red-500/10 shrink-0 h-fit">
                  <r.icon className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{r.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What we do */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-5">
              We Protect <span className="gradient-text">Your Whole Household</span>
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              We come to you, set everything up, explain it in plain English, and make sure every device, account, and family member is protected. No confusing tech — just peace of mind.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {protections.map((p) => (
                <li key={p} className="flex items-start gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-cyber rounded-3xl p-8 border border-emerald-500/20">
            <h3 className="text-2xl font-bold text-white mb-3">Protect your family today</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              We&apos;ll assess your home network and devices, identify the gaps, and put the right protections in place — in one visit.
            </p>
            <Link href="/contact" className="block text-center px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#0a1628] font-bold transition-all mb-3">
              Protect My Family →
            </Link>
            <p className="text-xs text-slate-500 text-center"><a href="tel:3475156775" className="hover:text-[#00c8e0] transition-colors">(347) 515-6775</a> · info@bvcyberguardian.com</p>
          </div>
        </div>

      </div>
    </div>
  );
}
