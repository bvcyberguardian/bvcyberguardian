import Link from "next/link";
import Image from "next/image";
import { Camera, Shield, Lock, AlertTriangle, CheckCircle, ArrowRight, Eye, DollarSign, UserX } from "lucide-react";

export const metadata = {
  title: "Cybersecurity for Content Creators | BV Cyber Guardian",
  description: "Protect your YouTube, Instagram, TikTok, and brand accounts from hackers. BV Cyber Guardian helps content creators keep their accounts, income, and audience safe.",
};

const risks = [
  { icon: Lock, title: "Account Takeover", desc: "Hackers steal your YouTube, Instagram, or TikTok account — often while you sleep. Recovery can take weeks or never happen." },
  { icon: UserX, title: "Brand Impersonation", desc: "Fake accounts copy your identity to scam your followers, damage your reputation, and steal brand deals." },
  { icon: Eye, title: "Doxxing & Harassment", desc: "Your real name, address, and personal info can be exposed and weaponized by bad actors targeting creators." },
  { icon: DollarSign, title: "Payment & Sponsorship Fraud", desc: "Fake brand emails, invoice scams, and payment interception target creators who transact via email." },
  { icon: AlertTriangle, title: "Content Theft", desc: "Your videos, photos, and original content stolen and re-monetized on other platforms without your consent." },
  { icon: Shield, title: "Device Compromise", desc: "Malware on your editing machine can expose unreleased content, private messages, and login credentials." },
];

const protections = [
  "Social media account security audit",
  "Multi-factor authentication setup",
  "Phishing email defense",
  "Brand monitoring and impersonation alerts",
  "Device security for all your gear",
  "Secure password management setup",
  "VPN and network security",
  "Identity theft monitoring",
];

export default function ForCreatorsPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero image banner */}
      <div className="relative h-64 md:h-80 overflow-hidden mb-12">
        <Image
          src="/images/audience-creators.jpg"
          alt="Creator studio setup"
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-5">
            <Camera className="w-4 h-4" />
            Content Creators &amp; Influencers
          </div>
          <h1 className="text-4xl font-extrabold text-white mb-5">
            Your Accounts Are <span className="gradient-text">Your Income</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            You&apos;ve spent years building your audience. One hacked account, one doxxing incident, or one impersonation scam can wipe it out overnight. BV Cyber Guardian protects the digital assets your livelihood depends on.
          </p>
        </div>

        {/* Callout */}
        <div className="card-cyber rounded-2xl p-6 border border-violet-500/20 mb-16 text-center max-w-2xl mx-auto">
          <p className="text-slate-300 text-lg leading-relaxed">
            <span className="text-violet-400 font-bold">Account takeovers are rising 45% year over year</span> — and creators are the #1 target because your accounts have large audiences, brand deals, and monetization attached.
          </p>
        </div>

        {/* Risks */}
        <div className="mb-20">
          <h2 className="text-3xl font-extrabold text-white text-center mb-10">
            What Hackers <span className="gradient-text">Are After</span>
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
              How We Protect <span className="gradient-text">Your Brand</span>
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              We harden every account, device, and workflow you use to create — so you can focus on your content while we handle your security. No tech degree required.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {protections.map((p) => (
                <li key={p} className="flex items-start gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-cyber rounded-3xl p-8 border border-violet-500/20">
            <h3 className="text-2xl font-bold text-white mb-3">Protect your accounts today</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              We&apos;ll audit your current security setup and show you exactly where you&apos;re exposed — in plain language, not tech jargon.
            </p>
            <Link href="/contact" className="block text-center px-6 py-3.5 rounded-xl bg-violet-500 hover:bg-violet-400 text-white font-bold transition-all mb-3">
              Get My Creator Security Audit →
            </Link>
            <p className="text-xs text-slate-500 text-center"><a href="tel:3475156775" className="hover:text-[#00c8e0] transition-colors">(347) 515-6775</a> · info@bvcyberguardian.com</p>
          </div>
        </div>

      </div>
    </div>
  );
}
