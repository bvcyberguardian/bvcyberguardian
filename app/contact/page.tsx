import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Shield, Phone, Clock, DollarSign } from "lucide-react";

export const metadata = {
  title: "Contact | BV CyberGuardian",
  description: "Get a free security assessment from BV Cyber Guardian. Serving businesses, creators, entrepreneurs, and families across NY & NJ.",
};

const pricingTiers = [
  {
    label: "Home & Personal",
    range: "Starting at $19/mo",
    desc: "Identity monitoring, device security, family protection",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    label: "Creator / Freelancer",
    range: "Starting at $29/mo",
    desc: "Account protection, reputation monitoring, breach alerts",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    label: "Small Business / MSP",
    range: "Starting at $99/mo",
    desc: "24/7 monitoring, endpoint protection, compliance, help desk",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Let&apos;s <span className="gradient-text">Get You Protected</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Every situation is different — tell us what you&apos;re dealing with and we&apos;ll recommend the right coverage at the right price. No obligation.
          </p>
        </div>

        {/* Pricing signal */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="w-4 h-4 text-cyan-400" />
            <p className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Pricing is always tailored — here&apos;s a general guide</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {pricingTiers.map((t) => (
              <div key={t.label} className={`rounded-xl p-5 border ${t.bg} ${t.border}`}>
                <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${t.color}`}>{t.label}</div>
                <div className="text-white font-bold text-lg mb-1">{t.range}</div>
                <div className="text-slate-400 text-sm">{t.desc}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3 text-center">
            Custom scopes, one-time audits, and enterprise contracts available. Final pricing is quoted after your free assessment.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">

            <div className="card-cyber rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-cyan-500/10">
                  <Clock className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold">Response Time</h3>
              </div>
              <p className="text-cyan-400 font-bold text-sm">Within 2 business hours</p>
              <p className="text-slate-500 text-xs mt-0.5">Urgent security incidents? Call us directly.</p>
            </div>

            <div className="card-cyber rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-cyan-500/10">
                  <Phone className="w-5 h-5 text-[#00c8e0]" />
                </div>
                <h3 className="text-white font-semibold">Call Us</h3>
              </div>
              <a href="tel:3475156775" className="text-[#00c8e0] hover:text-white text-sm font-medium transition-colors">
                (347) 515-6775
              </a>
            </div>

            <div className="card-cyber rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-cyan-500/10">
                  <Mail className="w-5 h-5 text-[#00c8e0]" />
                </div>
                <h3 className="text-white font-semibold">Email Us</h3>
              </div>
              <a href="mailto:info@bvcyberguardian.com" className="text-[#00c8e0] hover:text-white text-sm transition-colors">
                info@bvcyberguardian.com
              </a>
            </div>

            <div className="card-cyber rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold">Service Area</h3>
              </div>
              <p className="text-slate-400 text-sm">New York &amp; New Jersey Metro Region</p>
              <p className="text-slate-500 text-xs mt-1">Remote support available nationwide</p>
            </div>

            <div className="card-cyber rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-violet-500/10">
                  <Shield className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="text-white font-semibold">What Happens Next</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex gap-2"><span className="text-cyan-400 font-bold shrink-0">1.</span> We review your submission</li>
                <li className="flex gap-2"><span className="text-cyan-400 font-bold shrink-0">2.</span> Schedule a free consultation call</li>
                <li className="flex gap-2"><span className="text-cyan-400 font-bold shrink-0">3.</span> Assess your security posture</li>
                <li className="flex gap-2"><span className="text-cyan-400 font-bold shrink-0">4.</span> Provide a custom quote — no pressure</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
