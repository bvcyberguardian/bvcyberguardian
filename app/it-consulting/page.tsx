import Link from "next/link";
import { Server, Shield, CheckCircle, ArrowRight, Target, FileText, Cloud } from "lucide-react";

export const metadata = {
  title: "IT Consulting | BV CyberGuardian",
  description: "Strategic IT and cybersecurity consulting for NY & NJ businesses. Security architecture, compliance, disaster recovery, and cloud strategy.",
};

const offerings = [
  { icon: Shield, title: "Security Architecture", desc: "Design and build a layered security posture — firewalls, segmentation, zero-trust policies, and identity management." },
  { icon: FileText, title: "Compliance Guidance", desc: "Navigate HIPAA, PCI-DSS, SOC 2, and NIST frameworks. We prepare you for audits and ongoing compliance." },
  { icon: Target, title: "Risk Assessment", desc: "Identify vulnerabilities, quantify business risk, and build a prioritized remediation roadmap." },
  { icon: Server, title: "Disaster Recovery Planning", desc: "Business continuity planning, backup strategies, and tested recovery procedures so you bounce back fast." },
  { icon: Cloud, title: "Cloud Strategy", desc: "Secure cloud migrations, architecture reviews, and cost optimization for AWS, Azure, and Microsoft 365." },
  { icon: CheckCircle, title: "Vendor Management", desc: "Evaluate third-party vendors for security risk and help negotiate contracts that protect your business." },
];

export default function ITConsultingPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-5">
            <Server className="w-4 h-4" />
            IT Consulting
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-4">
            Strategy Meets <span className="gradient-text">Security</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Technology decisions are business decisions. With 25+ years of enterprise experience, BV CyberGuardian brings C-suite-level IT strategy to your small business — without the Fortune 500 price tag.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {offerings.map((o) => (
            <div key={o.title} className="card-cyber rounded-2xl p-6">
              <div className="inline-flex p-3 rounded-xl bg-blue-500/10 mb-4">
                <o.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{o.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>

        <div className="card-cyber rounded-3xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready for a strategic IT review?</h2>
          <p className="text-slate-400 max-w-lg mx-auto mb-8">
            We start with a no-obligation consultation to understand your goals, challenges, and current environment.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold text-lg transition-all"
          >
            Book a Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
