import Link from "next/link";
import { ArrowRight, Building2, Camera, Lightbulb, Home } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    label: "Small Businesses",
    href: "/for-business",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    headline: "One breach can close your doors",
    fears: [
      "Ransomware locking your files",
      "Phishing emails targeting employees",
      "Compliance fines (HIPAA, PCI-DSS)",
      "Customer data theft",
    ],
  },
  {
    icon: Camera,
    label: "Content Creators",
    href: "/for-creators",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    headline: "Your accounts are your income",
    fears: [
      "YouTube / Instagram account takeover",
      "Stolen content and impersonation",
      "Doxxing and online harassment",
      "Sponsorship & payment fraud",
    ],
  },
  {
    icon: Lightbulb,
    label: "Entrepreneurs",
    href: "/for-entrepreneurs",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    headline: "Your IP and clients are on the line",
    fears: [
      "Business email compromise (BEC)",
      "Client data leaks and liability",
      "Intellectual property theft",
      "Payment and invoice fraud",
    ],
  },
  {
    icon: Home,
    label: "Home Users",
    href: "/for-home",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    headline: "Your family deserves real protection",
    fears: [
      "Identity theft and credit fraud",
      "Smart home and IoT hacking",
      "Kids' online safety and privacy",
      "Phishing scams and financial fraud",
    ],
  },
];

export default function WhoWeProtect() {
  return (
    <section className="bg-[#060e1f] border-y border-[#00c8e0]/10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Who We <span className="gradient-text">Protect</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Cyber threats don&apos;t only target corporations. Whether you run a business, build an audience, launch a venture, or just want peace of mind at home — BV Cyber Guardian has you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className={`card-cyber rounded-2xl p-6 flex flex-col group border ${a.border} hover:scale-[1.02]`}
            >
              <div className={`inline-flex p-3 rounded-xl ${a.bg} mb-4 w-fit`}>
                <a.icon className={`w-7 h-7 ${a.color}`} />
              </div>
              <div className={`text-sm font-semibold uppercase tracking-widest ${a.color} mb-1`}>
                {a.label}
              </div>
              <h3 className="text-white font-bold text-lg mb-4 leading-snug group-hover:text-[#00c8e0] transition-colors">
                {a.headline}
              </h3>
              <ul className="space-y-2 flex-1">
                {a.fears.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-slate-400 text-sm">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${a.bg} border ${a.border} shrink-0`} />
                    {f}
                  </li>
                ))}
              </ul>
              <div className={`flex items-center gap-1 mt-5 text-sm font-medium ${a.color}`}>
                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
