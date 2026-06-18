import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Shield } from "lucide-react";

export const metadata = {
  title: "Contact | BV CyberGuardian",
  description: "Get in touch with BV CyberGuardian for a free security assessment. Serving NY & NJ small businesses.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h1 className="text-5xl font-extrabold text-white mb-4">
            Let&apos;s <span className="gradient-text">Get You Protected</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Fill out the form and we&apos;ll get back to you within one business day with a no-obligation security assessment.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card-cyber rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-cyan-500/10">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold">Email Us</h3>
              </div>
              <a href="mailto:info@bvcyberguardian.com" className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors">
                info@bvcyberguardian.com
              </a>
            </div>

            <div className="card-cyber rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold">Service Area</h3>
              </div>
              <p className="text-slate-400 text-sm">New York &amp; New Jersey Metro Region</p>
              <p className="text-slate-500 text-xs mt-1">Remote support available nationwide</p>
            </div>

            <div className="card-cyber rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-violet-500/10">
                  <Shield className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="text-white font-semibold">What Happens Next</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex gap-2"><span className="text-cyan-400 font-bold shrink-0">1.</span> We review your submission</li>
                <li className="flex gap-2"><span className="text-cyan-400 font-bold shrink-0">2.</span> Schedule a free consultation</li>
                <li className="flex gap-2"><span className="text-cyan-400 font-bold shrink-0">3.</span> Assess your security posture</li>
                <li className="flex gap-2"><span className="text-cyan-400 font-bold shrink-0">4.</span> Recommend the right coverage</li>
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
