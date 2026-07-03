import Link from "next/link";
import { Shield, Server, Brain, Wrench, ArrowRight, CheckCircle, Layers } from "lucide-react";

export const metadata = {
  title: "Services | BV CyberGuardian",
  description: "Managed security, IT consulting, AI services, and cybernews — complete cybersecurity coverage for NY & NJ businesses, creators, and families.",
};

const services = [
  {
    icon: Shield,
    title: "Managed IT (MSP)",
    href: "/msp",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    description: "End-to-end managed IT and security for your business. We monitor, detect, and respond to threats 24/7 — including a full help desk so your team always has support.",
    features: [
      "24/7 threat monitoring & alerting",
      "Endpoint detection and response (EDR)",
      "Network traffic analysis",
      "Patch management & incident response",
      "Help desk — remote & on-site support",
      "Monthly security reporting",
    ],
  },
  {
    icon: Wrench,
    title: "IT Support",
    href: "/it-support",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    description: "Responsive remote and on-site tech support for businesses, creators, and home users — hardware, software, network, and device issues resolved fast.",
    features: [
      "Remote support — most issues resolved same day",
      "On-site visits across NY & NJ metro",
      "Hardware, software & network troubleshooting",
      "Device setup & configuration",
      "Data backup & recovery",
      "Response within 2 business hours",
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
    icon: Brain,
    title: "AI Services",
    href: "/ai-services",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    description: "From your first AI tool setup to enterprise AI security — we help businesses, creators, and families get the benefits of AI without the risks.",
    features: [
      "AI strategy consulting & tool setup",
      "Workflow automation with AI",
      "AI security assessments",
      "AI governance & use policies",
      "AI threat protection (deepfakes, phishing)",
      "AI security awareness training",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-5">
            <Layers className="w-4 h-4" />
            Everything We Offer
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-4">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Comprehensive cybersecurity and IT services for businesses, creators, entrepreneurs, and families across the NY/NJ metro region.
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
            We&apos;ll assess your current security posture for free and recommend the right coverage for your situation.
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
