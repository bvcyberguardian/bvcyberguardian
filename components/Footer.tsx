import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import BVLogo from "@/components/BVLogo";

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
  { href: "https://linkedin.com", label: "LinkedIn", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
  { href: "https://instagram.com", label: "Instagram", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
  { href: "https://x.com", label: "X / Twitter", path: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" },
];

export default function Footer() {
  return (
    <footer className="bg-[#060e1f] border-t border-[#00c8e0]/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-5 hover:opacity-90 transition-opacity">
              <BVLogo variant="full" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-5">
              Protecting businesses, creators, entrepreneurs, and families with 25+ years of enterprise cybersecurity expertise.
            </p>
            <div className="space-y-2 mb-5">
              <a href="tel:6463025562" className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#00c8e0] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#00c8e0]" />
                (646) 302-5562
              </a>
              <a href="mailto:info@bvcyberguardian.com" className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#00c8e0] transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#00c8e0]" />
                info@bvcyberguardian.com
              </a>
            </div>
            <div className="flex gap-3">
              {socialLinks.map(({ href, label, path }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-[#00c8e0]/20 text-slate-400 hover:text-[#00c8e0] transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {[
                { href: "/msp", label: "Managed Security" },
                { href: "/it-consulting", label: "IT Consulting" },
                { href: "/helpdesk", label: "Help Desk" },
                { href: "/services", label: "All Services" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-slate-400 hover:text-[#00c8e0] text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Who We Protect</h3>
            <ul className="space-y-2">
              {[
                { href: "/for-business", label: "Small Businesses" },
                { href: "/for-creators", label: "Content Creators" },
                { href: "/for-entrepreneurs", label: "Entrepreneurs" },
                { href: "/for-home", label: "Home Users" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-slate-400 hover:text-[#00c8e0] text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              {[
                { href: "/cybernews", label: "CyberNews" },
                { href: "/newsletter", label: "Newsletter" },
                { href: "/contact", label: "Contact Us" },
                { href: "/privacy-policy", label: "Privacy Policy" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-slate-400 hover:text-[#00c8e0] text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} BV Cyber Guardian. All rights reserved.</p>
          <p>Serving the NY &amp; NJ Metro Region</p>
        </div>
      </div>
    </footer>
  );
}
