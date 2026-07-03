import Link from "next/link";
import Image from "next/image";
import { Lightbulb, Shield, Lock, AlertTriangle, CheckCircle, DollarSign, FileText, Mail, Server } from "lucide-react";

export const metadata = {
  title: "Cybersecurity for Entrepreneurs | BV Cyber Guardian",
  description: "Protect your startup, freelance business, or venture from cyber threats. BV Cyber Guardian secures your IP, client data, and payments so you can grow with confidence.",
};

const risks = [
  { icon: Mail, title: "Business Email Compromise", desc: "Hackers impersonate you or your clients via email to reroute payments. BEC scams cost businesses $2.9B in 2023 alone." },
  { icon: FileText, title: "IP & Trade Secret Theft", desc: "Your product ideas, contracts, pricing, and client lists are valuable. Competitors and criminals want them." },
  { icon: DollarSign, title: "Invoice & Payment Fraud", desc: "Fraudulent invoices and altered bank details intercept payments you're owed — or trick you into sending funds to criminals." },
  { icon: Lock, title: "Client Data Liability", desc: "If you store client info and it leaks, you face lawsuits, broken trust, and potential regulatory penalties." },
  { icon: AlertTriangle, title: "SaaS Account Hijacking", desc: "Your Stripe, QuickBooks, Notion, or Slack account compromised can expose your entire operation instantly." },
  { icon: Server, title: "Unprotected Cloud Storage", desc: "Misconfigured Google Drive, Dropbox, or AWS buckets are found and exploited by automated scanners daily." },
];

const protections = [
  "Business email authentication (SPF, DKIM, DMARC)",
  "Cloud storage security audit",
  "SaaS account hardening and MFA",
  "Client data encryption guidance",
  "Payment workflow security review",
  "Secure file sharing setup",
  "Vendor and contractor access controls",
  "Ongoing monitoring and alerts",
];

export default function ForEntrepreneursPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero image banner */}
      <div className="relative h-72 md:h-96 overflow-hidden mb-12">
        <Image
          src="/images/audience-entrepreneurs-relaxed.jpg"
          alt="Entrepreneur relaxed at work"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0a1628]/65" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-5">
            <Lightbulb className="w-4 h-4" />
            Entrepreneurs &amp; Freelancers
          </div>
          <h1 className="text-4xl font-extrabold text-white mb-5">
            Your IP and Clients <span className="gradient-text">Are on the Line</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            When you&apos;re building something, every client relationship and every idea is precious. BV Cyber Guardian makes sure a cyberattack doesn&apos;t become the thing that derails your venture.
          </p>
        </div>

        {/* Callout */}
        <div className="card-cyber rounded-2xl p-6 border border-amber-500/20 mb-16 text-center max-w-2xl mx-auto">
          <p className="text-slate-300 text-lg leading-relaxed">
            <span className="text-amber-400 font-bold">Solo operators and small teams are prime targets</span> — attackers know you don&apos;t have an IT department watching your back.
          </p>
        </div>

        {/* Risks */}
        <div className="mb-20">
          <h2 className="text-3xl font-extrabold text-white text-center mb-10">
            Threats That Hit <span className="gradient-text">Entrepreneurs Hardest</span>
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
              Built for <span className="gradient-text">Lean Teams</span>
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              You don&apos;t need a full IT department. You need the right safeguards in place so you can take on clients, send invoices, and grow your business without security being a constant worry.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {protections.map((p) => (
                <li key={p} className="flex items-start gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-cyber rounded-3xl p-8 border border-amber-500/20">
            <h3 className="text-2xl font-bold text-white mb-3">Secure your venture</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              We&apos;ll identify your biggest exposures and put the right protections in place — without disrupting how you work.
            </p>
            <Link href="/contact" className="block text-center px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0a1628] font-bold transition-all mb-3">
              Secure My Business →
            </Link>
            <p className="text-xs text-slate-500 text-center"><a href="tel:3475156775" className="hover:text-[#00c8e0] transition-colors">(347) 515-6775</a> · info@bvcyberguardian.com</p>
          </div>
        </div>

      </div>
    </div>
  );
}
