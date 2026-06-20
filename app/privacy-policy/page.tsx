import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | BV CyberGuardian",
  description: "Privacy Policy for BV Cyber Guardian — how we collect, use, and protect your information.",
};

const LAST_UPDATED = "June 20, 2026";
const COMPANY = "BV Cyber Guardian";
const EMAIL = "info@bvcyberguardian.com";
const ADDRESS = "New York & New Jersey Metro Region";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-white mb-3">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-slate-400 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="prose-cyber space-y-10">

          <Section title="1. Who We Are">
            <p>
              {COMPANY} ("we," "us," or "our") is a cybersecurity and managed IT services company
              serving individuals, content creators, entrepreneurs, and businesses in the New York and
              New Jersey metro region and remotely across the United States. Our website is located at{" "}
              <a href="https://www.bvcyberguardian.com" className="text-cyan-400 hover:text-cyan-300">
                www.bvcyberguardian.com
              </a>
              .
            </p>
            <p>
              We are committed to protecting your privacy. This policy explains what information we
              collect, how we use it, and what rights you have over it.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We collect information in the following ways:</p>
            <SubList items={[
              { label: "Information you provide directly", text: "When you fill out our contact form, subscribe to our newsletter, or communicate with us — including your name, email address, phone number, company name, and the content of your message." },
              { label: "Automatically collected data", text: "When you visit our website we may collect technical data such as your IP address, browser type, pages visited, and referring URL. This is collected through standard web server logs and analytics tools." },
              { label: "Cookies", text: "We use cookies and similar technologies to understand how visitors interact with our site and to improve your experience. You can control cookie preferences through your browser settings." },
            ]} />
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <List items={[
              "Respond to your inquiries and service requests",
              "Send our weekly Cyber Briefing newsletter (only if you subscribed)",
              "Provide, maintain, and improve our services",
              "Analyze website traffic to understand how visitors use our site",
              "Comply with legal obligations",
              "Protect against fraud, abuse, and security threats",
            ]} />
            <p>
              We do <strong className="text-white">not</strong> sell, rent, or share your personal
              information with third parties for their marketing purposes.
            </p>
          </Section>

          <Section title="4. Email Communications">
            <p>
              If you subscribe to our newsletter, we will send you our weekly Cyber Briefing. You can
              unsubscribe at any time by clicking the unsubscribe link in any email or by contacting us
              at <a href={`mailto:${EMAIL}`} className="text-cyan-400 hover:text-cyan-300">{EMAIL}</a>.
            </p>
            <p>
              We will also email you in response to contact form submissions. These transactional
              communications are not marketing and cannot be opted out of while we are actively
              servicing your inquiry.
            </p>
          </Section>

          <Section title="5. Data Retention">
            <p>
              We retain contact form submissions and correspondence for up to 3 years for business
              record-keeping purposes. Newsletter subscriber records are retained until you unsubscribe.
              Analytics data is retained in aggregate form indefinitely but is not tied to personally
              identifiable information.
            </p>
          </Section>

          <Section title="6. Data Security">
            <p>
              We take data security seriously — it is our business. We use industry-standard
              safeguards including encrypted connections (HTTPS), access controls, and regular security
              reviews to protect the information we hold. However, no method of transmission over the
              internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="7. Third-Party Services">
            <p>Our website and operations may use the following third-party services:</p>
            <List items={[
              "Analytics providers (e.g., Google Analytics) to understand site usage",
              "Email delivery services to send newsletter and transactional emails",
              "Hosting infrastructure providers",
            ]} />
            <p>
              These providers have their own privacy policies governing how they handle data on our
              behalf. We only share the minimum data necessary for them to perform their functions.
            </p>
          </Section>

          <Section title="8. Your Rights">
            <p>Depending on your location, you may have the right to:</p>
            <List items={[
              "Access the personal information we hold about you",
              "Request correction of inaccurate data",
              "Request deletion of your data",
              "Opt out of marketing communications at any time",
              "File a complaint with a data protection authority",
            ]} />
            <p>
              To exercise any of these rights, contact us at{" "}
              <a href={`mailto:${EMAIL}`} className="text-cyan-400 hover:text-cyan-300">{EMAIL}</a>.
              We will respond within 30 days.
            </p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>
              Our services are not directed to children under 13. We do not knowingly collect personal
              information from children. If you believe we have inadvertently collected information
              from a child, please contact us immediately and we will delete it.
            </p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When we do, we will update the
              "Last updated" date at the top of this page. We encourage you to review this policy
              periodically. Continued use of our website after changes constitutes acceptance of the
              updated policy.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>
              If you have any questions about this Privacy Policy or how we handle your data, please
              reach out:
            </p>
            <div className="card-cyber rounded-xl p-5 mt-4 space-y-1 text-sm">
              <p className="text-white font-semibold">{COMPANY}</p>
              <p className="text-slate-400">{ADDRESS}</p>
              <a href={`mailto:${EMAIL}`} className="text-cyan-400 hover:text-cyan-300 block">{EMAIL}</a>
              <a href="tel:6463025562" className="text-cyan-400 hover:text-cyan-300 block">(646) 302-5562</a>
            </div>
          </Section>

        </div>

        <div className="mt-14 pt-8 border-t border-white/5 text-center">
          <Link href="/" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-3">{title}</h2>
      <div className="space-y-3 text-slate-400 leading-relaxed text-sm">{children}</div>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 ml-1">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="text-cyan-400 shrink-0 mt-0.5">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SubList({ items }: { items: { label: string; text: string }[] }) {
  return (
    <ul className="space-y-3 ml-1">
      {items.map((item) => (
        <li key={item.label} className="flex gap-2">
          <span className="text-cyan-400 shrink-0 mt-0.5">•</span>
          <span><strong className="text-slate-300">{item.label}:</strong> {item.text}</span>
        </li>
      ))}
    </ul>
  );
}
