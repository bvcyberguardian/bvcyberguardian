"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown, Building2, Camera, Lightbulb, Home } from "lucide-react";
import BVLogo from "@/components/BVLogo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/msp", label: "MSP" },
  { href: "/it-consulting", label: "IT Consulting" },
  { href: "/cybernews", label: "CyberNews" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/helpdesk", label: "Help Desk" },
];

const whoWeHelp = [
  { href: "/for-business", label: "Small Businesses", icon: Building2, color: "text-cyan-400" },
  { href: "/for-creators", label: "Content Creators", icon: Camera, color: "text-violet-400" },
  { href: "/for-entrepreneurs", label: "Entrepreneurs", icon: Lightbulb, color: "text-amber-400" },
  { href: "/for-home", label: "Home Users", icon: Home, color: "text-emerald-400" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isWhoActive = whoWeHelp.some((l) => pathname === l.href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/90 backdrop-blur-md border-b border-[#00c8e0]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <BVLogo variant="compact" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                  pathname === link.href
                    ? "text-[#00c8e0] bg-[#00c8e0]/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Who We Help dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                  isWhoActive
                    ? "text-[#00c8e0] bg-[#00c8e0]/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                Who We Help
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-[#0d1f3c] border border-[#00c8e0]/15 rounded-xl shadow-2xl py-2 z-50">
                  {whoWeHelp.map(({ href, label, icon: Icon, color }) => (
                    <Link
                      key={href}
                      href={href}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/5 transition-colors"
                    >
                      <Icon className={`w-4 h-4 ${color} shrink-0`} />
                      <span className="text-slate-300 text-sm hover:text-white">{label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:6463025562"
              className="flex items-center gap-1.5 text-sm text-slate-300 hover:text-[#00c8e0] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              (646) 302-5562
            </a>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-lg bg-[#00c8e0] hover:bg-[#00b5cc] text-[#0a1628] font-semibold text-sm transition-all"
            >
              Get Protected
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0d1f3c] border-t border-[#00c8e0]/10 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-all ${
                pathname === link.href
                  ? "text-[#00c8e0] bg-[#00c8e0]/10"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-white/5">
            <p className="px-3 py-1.5 text-xs text-slate-500 uppercase tracking-wider font-semibold">Who We Help</p>
            {whoWeHelp.map(({ href, label, icon: Icon, color }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-slate-300 hover:text-white hover:bg-white/5"
              >
                <Icon className={`w-4 h-4 ${color}`} />
                {label}
              </Link>
            ))}
          </div>
          <div className="pt-2 pb-1 border-t border-white/5 flex flex-col gap-2">
            <a href="tel:6463025562" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-300">
              <Phone className="w-4 h-4 text-[#00c8e0]" /> (646) 302-5562
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block text-center px-4 py-2 rounded-lg bg-[#00c8e0] text-[#0a1628] font-semibold text-sm"
            >
              Get Protected
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
