import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "BV Cyber Guardian | MSP Cybersecurity for Small Business",
  description:
    "BV Cyber Guardian protects NY & NJ small businesses from cyber threats. Managed security services, IT consulting, help desk, and 24/7 monitoring.",
  keywords: "cybersecurity, MSP, managed service provider, IT consulting, New York, New Jersey, small business",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[#0a1628] text-slate-200 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
