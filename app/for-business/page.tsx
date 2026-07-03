import Link from "next/link";
import Image from "next/image";
import { Building2, Shield, Lock, Server, CheckCircle, ArrowRight, AlertTriangle, FileText, Users } from "lucide-react";

export const metadata = {
  title: "Cybersecurity for Small Businesses | BV Cyber Guardian",
  description: "BV Cyber Guardian protects NY & NJ small businesses from ransomware, phishing, and data breaches. 24/7 managed security without the enterprise price tag.",
};

const risks = [
  { icon: AlertTriangle, title: "Ransomware", desc: "Attackers encrypt your files and demand payment — average ransom now exceeds $200K for small businesses." },
  { icon: Users, title: "Employee Phishing", desc: "91% of cyberattacks start with a phishing email. One click by one employee can bring down your entire operation." },
  { icon: FileText, title: "Compliance Violations", desc: "HIPAA, PCI-DSS, and state data laws carry heavy fines. Non-compliance can cost more than the breach itself." },
  { icon: Lock, title: "Data Breaches", desc: "Customer and employee data is a prime target. A breach destroys trust and can trigger lawsuits." },
  { icon: Server, title: "Business Downtime", desc: "The average SMB loses $8,500 per hour during a cyberattack. Can your business survive days offline?" },
  { icon: Shield, title: "Third-Party Risk", desc: "Vendors and partners can be entry points. We assess your entire supply chain for vulnerabilities." },
];

const protections = [
  "24/7 threat monitoring and alerting",
  "Ransomware detection and rollback",
  "Employee security awareness training",
  "Email filtering and phishing defense",
  "HIPAA / PCI-DSS compliance support",
  "Patch management and vulnerability scanning",
  "Incident response and recovery",
  "Monthly security reporting",
];

export default function ForBusinessPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero image banner */}
      <div className="relative h-64 md:h-80 overflow-hidden mb-12">
        <Image
          src="/images/audience-business-team.jpg"
          alt="Small business team around laptops"
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-5">
            <Building2 className="w-4 h-4" />
            Small &amp; Mid-Sized Businesses
          </div>
          <h1 className="text-4xl font-extrabold text-white mb-5">
            One Breach Can <span className="gradient-text">Close Your Doors</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            60% of small businesses shut down within 6 months of a cyberattack. BV Cyber Guardian gives you the same enterprise-grade protection used by Fortune 500 companies — at a price built for SMBs.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
          {[
            { value: "43%", label: "of attacks target small businesses" },
            { value: "60%", label: "of breached SMBs close within 6 months" },
            { value: "$200K+", label: "average ransom demand in 2024" },
            { value: "287", label: "average days to detect a breach" },
          ].map((s) => (
            <div key={s.value} className="card-cyber rounded-xl p-5 text-center">
              <div className="text-2xl font-extrabold gradient-text mb-1">{s.value}</div>
              <div className="text-slate-400 text-xs leading-snug">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Risks */}
        <div className="mb-20">
          <h2 className="text-3xl font-extrabold text-white text-center mb-10">
            The Threats Targeting Your Business <span className="gradient-text">Right Now</span>
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
              What BV Cyber Guardian <span className="gradient-text">Does for You</span>
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              We act as your dedicated security team — monitoring, defending, and responding around the clock so you can focus on running your business instead of worrying about what might be lurking in your network.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {protections.map((p) => (
                <li key={p} className="flex items-start gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#00c8e0] shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-cyber rounded-3xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-3">Get a free security assessment</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              We&apos;ll review your current setup, identify your biggest exposures, and recommend the right coverage — no commitment required.
            </p>
            <Link href="/contact" className="block text-center px-6 py-3.5 rounded-xl bg-[#00c8e0] hover:bg-[#00b5cc] text-[#0a1628] font-bold transition-all mb-3">
              Book My Free Assessment →
            </Link>
            <p className="text-xs text-slate-500 text-center">Serving NY &amp; NJ · <a href="tel:3475156775" className="hover:text-[#00c8e0] transition-colors">(347) 515-6775</a></p>
          </div>
        </div>

      </div>
    </div>
  );
}
