import { Metadata } from "next";
import NewsletterSignup from "@/components/NewsletterSignup";
import BriefingsClient from "./BriefingsClient";

export const metadata: Metadata = {
  title: "Weekly Briefings Archive | BV CyberGuardian",
  description:
    "Full weekly cybersecurity briefings from BV CyberGuardian — plain-English threat intelligence for businesses and families.",
};

export default function BriefingsPage() {
  return (
    <>
      <div className="pt-24">
        <div className="max-w-4xl mx-auto px-4">
          <NewsletterSignup />
        </div>
      </div>
      <BriefingsClient />
    </>
  );
}
