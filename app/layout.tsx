import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "BV CyberGuardian | MSP Cybersecurity for Small Business",
  description:
    "BV CyberGuardian protects NY & NJ small businesses from cyber threats. Managed security services, IT consulting, help desk, and 24/7 monitoring.",
  keywords: "cybersecurity, MSP, managed service provider, IT consulting, New York, New Jersey, small business",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0a0f1e] text-slate-200 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
