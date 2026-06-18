import Link from "next/link";
import { Shield, Server, Phone, Eye, ArrowRight, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Services | BV CyberGuardian",
  description: "Managed security, IT consulting, help desk, and cybernews — complete cybersecurity coverage for NY & NJ small businesses.",
};

const services = [
  {
    icon: Shield,
    title: "Managed Security (MSP)",
    href: "/msp",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    description: "End-to-end managed security for your business. We monitor, detect, and respond to threats 24/7 so you never have to worry.",
    features: [
      "24/7 threat monitoring & alerting",
      "Endpoint detection and response (EDR)",
      "Network traffic analysis",
      "Patch management",
      "Incident response",
      "Monthly security reporting",
    ],
  },
  {
    icon: Server,
    title: "IT Consulting",
    href: "/it-consulting",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    description: "Strategic technology guidance to align your IT infrastructure with business goals and compliance requirements.",
    features: [
      "Security architecture design",
      "Compliance readiness (HIPAA, PCI, SOC2)",
      "Disaster recovery planning",
      "Cloud migration strategy",
      "Vendor evaluation & management",
      "Risk assessments",
    ],
  },
  {
    icon: Phone,
    title: "Help Desk Support",
    href: "/helpdesk",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    description: "Friendly, fast technical support for your employees — remote and on-site — keeping your team productive.",
    features: [
      "Remote desktop support",
      "On-site visits (NY/NJ metro)",
      "Password & account management",
      "Software troubleshooting",
      "Hardware setup & support",
      "Employee security training",
    ],
  },
  {
    icon: Eye,
    title: "CyberNews Intelligence",
    href: "/cybernews",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    description: "Stay informed with real-time cybersecurity news aggregated from the industry's most trusted sources.",
    features: [
      "Live RSS feeds from top sources",
      "Threat intelligence updates",
      "Breach notifications",
      "Vulnerability disclosures",
      "Best practice advisories",
      "Updated every 30 minutes",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white mb-4">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Comprehensive cybersecurity and IT services designed for small and mid-sized businesses in the NY/NJ metro region.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((svc) => (
            <div key={svc.href} className={`card-cyber rounded-2xl p-8 border ${svc.border}`}>
              <div className={`inline-flex p-3 rounded-xl ${svc.bg} mb-5`}>
                <svc.icon className={`w-7 h-7 ${svc.color}`} />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">{svc.title}</h2>
              <p className="text-slate-400 mb-6">{svc.description}</p>
              <ul className="space-y-2 mb-6">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle className={`w-4 h-4 shrink-0 ${svc.color}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={svc.href}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl ${svc.bg} ${svc.color} font-semibold text-sm border ${svc.border} hover:opacity-80 transition-all`}
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center card-cyber rounded-2xl py-12 px-6">
          <h3 className="text-2xl font-bold text-white mb-3">Not sure what you need?</h3>
          <p className="text-slate-400 mb-6">
            We&apos;ll assess your current security posture for free and recommend the right coverage for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-all"
          >
            Get a Free Assessment <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
