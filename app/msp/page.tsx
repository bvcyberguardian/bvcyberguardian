import Link from "next/link";
import { Shield, Clock, Eye, Lock, Server, CheckCircle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Managed Security Services (MSP) | BV CyberGuardian",
  description: "24/7 managed cybersecurity for NY & NJ small businesses. Threat monitoring, incident response, patch management, and more.",
};

const pillars = [
  { icon: Eye, title: "24/7 Monitoring", desc: "Round-the-clock visibility into your network and endpoints. Threats are detected in minutes, not days." },
  { icon: Shield, title: "Threat Response", desc: "When an incident is detected, our team acts immediately — containing, isolating, and neutralizing threats." },
  { icon: Lock, title: "Endpoint Protection", desc: "EDR agents on every device detect and block malware, ransomware, and suspicious behavior in real time." },
  { icon: Server, title: "Patch Management", desc: "We keep all systems and software up to date, closing vulnerabilities before attackers can exploit them." },
  { icon: Clock, title: "Compliance Support", desc: "HIPAA, PCI-DSS, SOC2 — we help you meet regulatory requirements and pass audits confidently." },
  { icon: CheckCircle, title: "Monthly Reporting", desc: "Clear, readable security reports every month so you always know the state of your protection." },
];

export default function MSPPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-5">
            <Shield className="w-4 h-4" />
            Managed Security Provider
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-4">
            Always-On <span className="gradient-text">Cyber Protection</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Most small businesses can&apos;t afford a full-time security team. BV CyberGuardian gives you enterprise-grade protection at a fraction of the cost — with experts watching your back 24 hours a day, 7 days a week.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {pillars.map((p) => (
            <div key={p.title} className="card-cyber rounded-2xl p-6">
              <div className="inline-flex p-3 rounded-xl bg-cyan-500/10 mb-4">
                <p.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="card-cyber rounded-3xl p-8 lg:p-12 mb-12">
          <h2 className="text-3xl font-extrabold text-white mb-8 text-center">How Our MSP Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Onboard & Assess", desc: "We deploy agents and audit your current infrastructure to establish a security baseline." },
              { step: "02", title: "Monitor & Protect", desc: "Our security operations center watches your environment continuously and acts on every alert." },
              { step: "03", title: "Report & Improve", desc: "Monthly reviews, patching cycles, and strategic recommendations keep your defenses growing." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-4xl font-extrabold gradient-text mb-3">{item.step}</div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg transition-all"
          >
            Start with a Free Assessment <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
