import Link from "next/link";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#060b17] border-t border-cyan-500/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="bg-white rounded-lg px-3 py-1.5 inline-block hover:opacity-90 transition-opacity">
                <Image
                  src="/logo.png"
                  alt="BV CyberGuardian"
                  width={140}
                  height={56}
                  className="h-10 w-auto"
                />
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Protecting NY &amp; NJ small businesses from cyber threats with over 25 years of enterprise IT and cybersecurity expertise.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { href: "https://facebook.com", label: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { href: "https://instagram.com", label: "Instagram", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
                { href: "https://linkedin.com", label: "LinkedIn", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
                { href: "https://x.com", label: "X / Twitter", path: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" },
              ].map(({ href, label, path }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-400 transition-all"
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
                  <Link href={href} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
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
                { href: "/contact", label: "Contact Us" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="mailto:info@bvcyberguardian.com" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  info@bvcyberguardian.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} BV CyberGuardian. All rights reserved.</p>
          <p>Serving the NY &amp; NJ Metro Region</p>
        </div>
      </div>
    </footer>
  );
}
