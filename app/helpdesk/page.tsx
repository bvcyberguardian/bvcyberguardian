import Link from "next/link";
import { Phone, Monitor, Users, Wrench, ArrowRight, Clock, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Help Desk | BV CyberGuardian",
  description: "Fast, friendly IT help desk support for NY & NJ businesses. Remote and on-site technical support to keep your team productive.",
};

const supportTypes = [
  { icon: Monitor, title: "Remote Support", desc: "Instant screen-sharing sessions to resolve software issues, configuration problems, and anything else in minutes." },
  { icon: Users, title: "On-Site Visits", desc: "For hardware problems or complex setups, our technicians come to your NY/NJ location personally." },
  { icon: Wrench, title: "Hardware & Software", desc: "Setup, installation, troubleshooting, and repairs for all your business devices and applications." },
  { icon: Clock, title: "Fast Response Times", desc: "We pick up the phone. No ticket queues, no bots — real people who know your environment." },
  { icon: Users, title: "Employee Training", desc: "Security awareness training for your staff to recognize phishing, social engineering, and unsafe behaviors." },
  { icon: CheckCircle, title: "Account Management", desc: "Password resets, user provisioning, MFA setup, and access control — quickly and securely." },
];

export default function HelpDeskPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-5">
            <Phone className="w-4 h-4" />
            Help Desk Support
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-4">
            Real Help, <span className="gradient-text">Real Fast</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            When something breaks, you need answers — not a ticket number. BV CyberGuardian&apos;s help desk connects you with knowledgeable technicians who know your business environment and get you back to work quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {supportTypes.map((s) => (
            <div key={s.title} className="card-cyber rounded-2xl p-6">
              <div className="inline-flex p-3 rounded-xl bg-violet-500/10 mb-4">
                <s.icon className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="card-cyber rounded-3xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Need support right now?</h2>
          <p className="text-slate-400 max-w-md mx-auto mb-8">
            Reach out and we&apos;ll get a technician on your issue immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@bvcyberguardian.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-violet-500 hover:bg-violet-400 text-white font-bold text-lg transition-all"
            >
              Email Support <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
