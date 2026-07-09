import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | BV CyberGuardian",
  description: "Privacy Policy for BV CyberGuardian LLC — how we collect, use, and protect your information.",
};

const LAST_UPDATED = "June 20, 2026";
const COMPANY = "BV CyberGuardian LLC";
const EMAIL = "info@bvcyberguardian.com";

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

        <div className="space-y-10 text-sm text-slate-400 leading-relaxed">

          {/* Intro */}
          <div>
            <p className="mb-3">
              This Privacy Notice for <strong className="text-white">{COMPANY}</strong> ("we," "us," or "our") describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
            </p>
            <ul className="space-y-1.5 ml-1 mb-3">
              <li className="flex gap-2"><span className="text-cyan-400 shrink-0">•</span> Visit our website at <a href="https://www.bvcyberguardian.com" className="text-cyan-400 hover:text-cyan-300">www.bvcyberguardian.com</a>, or any website of ours that links to this Privacy Notice</li>
              <li className="flex gap-2"><span className="text-cyan-400 shrink-0">•</span> Engage with us in other related ways, including any marketing or events</li>
            </ul>
            <p>
              <strong className="text-white">Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at{" "}
              <a href={`mailto:${EMAIL}`} className="text-cyan-400 hover:text-cyan-300">{EMAIL}</a>.
            </p>
          </div>

          {/* IMPORTANT: Client Service Data Scope Notice */}
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6">
            <h2 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-3">Important Notice — Scope of This Policy</h2>
            <p className="text-slate-300 leading-relaxed">
              This Privacy Notice applies to information collected through our <strong className="text-white">website and marketing activities only</strong> (website visitors, contact form submissions, newsletter subscribers).
            </p>
            <p className="mt-2 text-slate-400 leading-relaxed">
              If you are a <strong className="text-white">managed services client</strong>, the collection, processing, and handling of data we access while providing cybersecurity and IT services on your behalf — including network data, endpoint data, credentials, logs, and client systems — is governed exclusively by your individual <strong className="text-white">Master Service Agreement (MSA)</strong> and/or <strong className="text-white">Data Processing Agreement (DPA)</strong>, not by this Privacy Notice. Please refer to those agreements for the terms applicable to service-related data. Contact us at <a href={`mailto:${EMAIL}`} className="text-amber-400 hover:text-amber-300">{EMAIL}</a> if you need a copy of your agreements.
            </p>
          </div>

          {/* Summary */}
          <div className="card-cyber rounded-2xl p-6">
            <h2 className="text-base font-bold text-white mb-4 uppercase tracking-wider">Summary of Key Points</h2>
            <div className="space-y-3">
              {[
                { q: "What personal information do we process?", a: "When you visit, use, or navigate our website, we may process personal information depending on how you interact with us, the choices you make, and the products and features you use." },
                { q: "Do we process any sensitive personal information?", a: "We do not process sensitive personal information." },
                { q: "Do we collect any information from third parties?", a: "We do not collect any information from third parties." },
                { q: "How do we process your information?", a: "We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law." },
                { q: "How do we keep your information safe?", a: "We have organizational and technical processes in place to protect your personal information. However, no electronic transmission over the internet can be guaranteed 100% secure." },
                { q: "What are your rights?", a: "Depending on where you are located, you may have certain rights regarding your personal information. See Sections 9 and 11 for details." },
              ].map(({ q, a }) => (
                <div key={q}>
                  <p className="text-slate-300 font-medium">{q}</p>
                  <p className="text-slate-500 mt-0.5">{a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* TOC */}
          <div>
            <h2 className="text-base font-bold text-white mb-4 uppercase tracking-wider">Table of Contents</h2>
            <ol className="space-y-1.5 list-decimal list-inside text-cyan-400">
              {[
                "What Information Do We Collect?",
                "How Do We Process Your Information?",
                "When and With Whom Do We Share Your Personal Information?",
                "Do We Use Cookies and Other Tracking Technologies?",
                "How Do We Handle Your Social Logins?",
                "How Long Do We Keep Your Information?",
                "How Do We Keep Your Information Safe?",
                "Data Breach Notification",
                "Do We Collect Information From Minors?",
                "What Are Your Privacy Rights?",
                "Controls for Do-Not-Track Features",
                "Do United States Residents Have Specific Privacy Rights?",
                "Do We Make Updates to This Notice?",
                "How Can You Contact Us About This Notice?",
                "How Can You Review, Update, or Delete the Data We Collect From You?",
                "Governing Law",
                "Limitation of Liability",
              ].map((title, i) => (
                <li key={i} className="hover:text-cyan-300 transition-colors">{title}</li>
              ))}
            </ol>
          </div>

          <Divider />

          <Section number="1" title="What Information Do We Collect?">
            <InShort>We collect personal information that you provide to us.</InShort>
            <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
            <p><strong className="text-slate-300">Personal Information Provided by You.</strong> The personal information we collect may include: names, phone numbers, and email addresses.</p>
            <p><strong className="text-slate-300">Sensitive Information.</strong> We do not process sensitive information.</p>
            <p><strong className="text-slate-300">Social Media Login Data.</strong> We may provide you with the option to register with us using your existing social media account details (like your Facebook or X account). If you choose to register this way, we will collect certain profile information about you from the social media provider, as described in Section 5 below.</p>
            <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes.</p>

            <SubHeading>Information Automatically Collected</SubHeading>
            <InShort>Some information — such as your IP address and browser/device characteristics — is collected automatically when you visit our Services.</InShort>
            <p>We automatically collect certain information when you visit, use, or navigate the Services. This does not reveal your specific identity but may include device and usage information such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, and location.</p>
            <p>Specifically, we collect:</p>
            <ul className="space-y-2 ml-1">
              <BulletItem label="Log and Usage Data">Service-related, diagnostic, usage, and performance information our servers automatically collect — including IP address, device information, browser type, date/time stamps, pages viewed, and other actions you take.</BulletItem>
              <BulletItem label="Device Data">Information about your computer, phone, tablet, or other device — including IP address, device/application identification numbers, browser type, hardware model, ISP/mobile carrier, and operating system.</BulletItem>
              <BulletItem label="Location Data">Information about your device's location (precise or imprecise) based on IP address and similar technologies. You can opt out by disabling Location settings on your device.</BulletItem>
            </ul>
            <p>Like many businesses, we also collect information through cookies and similar technologies.</p>
          </Section>

          <Divider />

          <Section number="2" title="How Do We Process Your Information?">
            <InShort>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</InShort>
            <p>We process your personal information only when we have a valid legal basis to do so, including: performance of a contract with you, your consent, compliance with legal obligations, or our legitimate business interests (where those interests are not overridden by your rights).</p>
            <p>Specifically, we process your personal information for the following reasons:</p>
            <ul className="space-y-1.5 ml-1">
              <li className="flex gap-2"><span className="text-cyan-400 shrink-0">•</span> To respond to your inquiries and provide support <em className="text-slate-500">(contract performance / legitimate interest)</em></li>
              <li className="flex gap-2"><span className="text-cyan-400 shrink-0">•</span> To send you marketing and promotional communications, if you have opted in — you may opt out at any time <em className="text-slate-500">(consent)</em></li>
              <li className="flex gap-2"><span className="text-cyan-400 shrink-0">•</span> To maintain the security of our Services and prevent fraud <em className="text-slate-500">(legitimate interest)</em></li>
              <li className="flex gap-2"><span className="text-cyan-400 shrink-0">•</span> To comply with legal obligations <em className="text-slate-500">(legal obligation)</em></li>
              <li className="flex gap-2"><span className="text-cyan-400 shrink-0">•</span> For internal analytics and improving our Services <em className="text-slate-500">(legitimate interest)</em></li>
            </ul>
          </Section>

          <Divider />

          <Section number="3" title="When and With Whom Do We Share Your Personal Information?">
            <InShort>We may share information in specific situations described in this section and/or with the following third parties.</InShort>
            <p>We may need to share your personal information in the following situations:</p>
            <ul className="space-y-2 ml-1">
              <BulletItem label="Business Transfers">We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</BulletItem>
              <BulletItem label="Service Providers (Sub-Processors)">We may share your data with third-party vendors and service providers who perform services on our behalf. These sub-processors are contractually required to protect your data and may only use it to perform services for us.</BulletItem>
            </ul>

            <SubHeading>Sub-Processors We Use</SubHeading>
            <p>The following categories of third-party tools and platforms may process website visitor data on our behalf:</p>
            <div className="overflow-x-auto mt-2">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 pr-4 text-slate-300 font-semibold">Category</th>
                    <th className="text-left py-2 pr-4 text-slate-300 font-semibold">Purpose</th>
                    <th className="text-left py-2 text-slate-300 font-semibold">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ["Web Analytics", "Track website usage and performance", "Google Analytics"],
                    ["Email Delivery", "Send transactional and newsletter emails", "Resend / Mailchimp / ConvertKit"],
                    ["Website Hosting", "Host and serve our website", "Vercel"],
                    ["CRM / Ticketing", "Manage client communications and support requests", "ConnectWise / HubSpot"],
                    ["Remote Monitoring & Management", "Deliver managed security services to clients", "Governed by client MSA/DPA"],
                  ].map(([cat, purpose, example]) => (
                    <tr key={cat}>
                      <td className="py-2 pr-4 align-top text-slate-400">{cat}</td>
                      <td className="py-2 pr-4 align-top text-slate-500">{purpose}</td>
                      <td className="py-2 align-top text-slate-500 italic">{example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3">We do <strong className="text-white">not</strong> sell, rent, or share your personal information with third parties for their own marketing purposes.</p>
          </Section>

          <Divider />

          <Section number="4" title="Do We Use Cookies and Other Tracking Technologies?">
            <InShort>We may use cookies and other tracking technologies to collect and store your information.</InShort>
            <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. These help us maintain security, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.</p>
            <p>Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>

            <SubHeading>Google Analytics</SubHeading>
            <p>We may share your information with Google Analytics to track and analyze the use of the Services. The Google Analytics Advertising Features we may use include: Google Display Network Impressions Reporting, Remarketing with Google Analytics, and Google Analytics Demographics and Interests Reporting.</p>
            <ul className="space-y-1.5 ml-1">
              <li className="flex gap-2"><span className="text-cyan-400 shrink-0">•</span> To opt out of being tracked by Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-cyan-400 hover:text-cyan-300" target="_blank" rel="noopener noreferrer">tools.google.com/dlpage/gaoptout</a></li>
              <li className="flex gap-2"><span className="text-cyan-400 shrink-0">•</span> To opt out of Google Analytics Advertising Features: <a href="https://adssettings.google.com" className="text-cyan-400 hover:text-cyan-300" target="_blank" rel="noopener noreferrer">Ads Settings</a></li>
              <li className="flex gap-2"><span className="text-cyan-400 shrink-0">•</span> Additional opt-out: <a href="http://optout.networkadvertising.org/" className="text-cyan-400 hover:text-cyan-300" target="_blank" rel="noopener noreferrer">optout.networkadvertising.org</a></li>
            </ul>
          </Section>

          <Divider />

          <Section number="5" title="How Do We Handle Your Social Logins?">
            <InShort>If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.</InShort>
            <p>Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or X logins). Where you choose to do this, we will receive certain profile information about you from your social media provider — which will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public.</p>
            <p>We will use the information we receive only for the purposes described in this Privacy Notice. We do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend you review their privacy notice to understand how they collect, use, and share your personal information.</p>
          </Section>

          <Divider />

          <Section number="6" title="How Long Do We Keep Your Information?">
            <InShort>We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</InShort>
            <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).</p>
            <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or — if deletion is not possible (e.g., information stored in backup archives) — we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
          </Section>

          <Divider />

          <Section number="7" title="How Do We Keep Your Information Safe?">
            <InShort>We aim to protect your personal information through a system of organizational and technical security measures.</InShort>
            <p>We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security.</p>
            <p>Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>
          </Section>

          <Divider />

          <Section number="8" title="Data Breach Notification">
            <InShort>In the event of a data breach affecting your personal information, we will notify you as required by applicable law.</InShort>
            <p>In the event that {COMPANY} discovers or is notified of a security breach that compromises the confidentiality, integrity, or availability of personal information we hold about website visitors or newsletter subscribers, we will:</p>
            <ul className="space-y-1.5 ml-1">
              <li className="flex gap-2"><span className="text-cyan-400 shrink-0">•</span> <strong className="text-slate-300">Investigate</strong> the breach promptly to determine its scope and impact</li>
              <li className="flex gap-2"><span className="text-cyan-400 shrink-0">•</span> <strong className="text-slate-300">Notify affected individuals</strong> without unreasonable delay and, where required by law, within 72 hours of becoming aware of the breach</li>
              <li className="flex gap-2"><span className="text-cyan-400 shrink-0">•</span> <strong className="text-slate-300">Notify applicable regulatory authorities</strong> (including the New Jersey Division of Consumer Affairs) as required under the New Jersey Identity Theft Prevention Act and other applicable state or federal laws</li>
              <li className="flex gap-2"><span className="text-cyan-400 shrink-0">•</span> <strong className="text-slate-300">Take reasonable steps</strong> to contain the breach, remediate vulnerabilities, and prevent further unauthorized access</li>
            </ul>
            <p className="mt-2">Breach notifications to affected individuals will be sent to the email address on file and will describe: the nature of the breach, the categories of data affected, the likely consequences, and the measures we have taken or propose to take.</p>
            <p><strong className="text-slate-300">Note for managed services clients:</strong> Data breach notification obligations relating to client network, endpoint, or systems data are governed exclusively by your Master Service Agreement and/or Data Processing Agreement with {COMPANY}.</p>
          </Section>

          <Divider />

          <Section number="9" title="Do We Collect Information From Minors?">
            <InShort>We do not knowingly collect data from or market to children under 18 years of age.</InShort>
            <p>We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. Our Services are intended for adults aged 18 and over. By using the Services, you represent that you are at least 18 years of age.</p>
            <p>If we learn that personal information from users less than 18 years of age has been collected, we will take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from individuals under age 18, please contact us at <a href={`mailto:${EMAIL}`} className="text-cyan-400 hover:text-cyan-300">{EMAIL}</a>.</p>
          </Section>

          <Divider />

          <Section number="10" title="What Are Your Privacy Rights?">
            <InShort>You may review, change, or request deletion of your personal information at any time.</InShort>
            <p><strong className="text-slate-300">Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time by contacting us using the details in Section 14. Please note this will not affect the lawfulness of processing before withdrawal.</p>
            <p><strong className="text-slate-300">Opting out of marketing communications:</strong> You can unsubscribe from our marketing and promotional communications at any time by:</p>
            <ul className="space-y-1.5 ml-1">
              <li className="flex gap-2"><span className="text-cyan-400 shrink-0">•</span> Clicking the unsubscribe link in any email we send</li>
              <li className="flex gap-2"><span className="text-cyan-400 shrink-0">•</span> Replying "STOP" or "UNSUBSCRIBE" to any SMS messages we send</li>
              <li className="flex gap-2"><span className="text-cyan-400 shrink-0">•</span> Contacting us using the details in Section 14</li>
            </ul>
            <p className="mt-2">No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with third parties.</p>
            <p><strong className="text-slate-300">Cookies:</strong> Most web browsers are set to accept cookies by default. You can usually choose to set your browser to remove or reject cookies. If you choose to remove or reject cookies, this could affect certain features or services of our Services.</p>
            <p>If you have questions about your privacy rights, you may email us at <a href={`mailto:${EMAIL}`} className="text-cyan-400 hover:text-cyan-300">{EMAIL}</a>.</p>
          </Section>

          <Divider />

          <Section number="11" title="Controls for Do-Not-Track Features">
            <p>Most web browsers and some mobile operating systems include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.</p>
            <p>California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time. If a standard for online tracking is adopted that we must follow in the future, we will inform you in a revised version of this Privacy Notice.</p>
          </Section>

          <Divider />

          <Section number="12" title="Do United States Residents Have Specific Privacy Rights?">
            <InShort>If you are a resident of New Jersey or another US state with applicable privacy laws, you may have the right to request access to, correct, or delete your personal information. We will respond to verified requests within 45 days.</InShort>

            <SubHeading>New Jersey Privacy Act</SubHeading>
            <p>Under the New Jersey Data Privacy Act (P.L. 2023, c. 266, effective January 15, 2025), New Jersey residents have specific rights including the right to opt out of the processing of their personal data for purposes of targeted advertising, sale of personal data, or profiling. To exercise your opt-out rights, contact us at <a href={`mailto:${EMAIL}`} className="text-cyan-400 hover:text-cyan-300">{EMAIL}</a>.</p>
            <p>We apply the following principles when processing personal information of New Jersey residents: <strong className="text-slate-300">data minimization</strong> (we collect only what is necessary for the stated purpose), and <strong className="text-slate-300">purpose limitation</strong> (data collected for one purpose will not be used for an incompatible purpose without your consent).</p>

            <SubHeading>Categories of Personal Information We Collect</SubHeading>
            <p>In the past twelve (12) months, we have collected the following categories of personal information:</p>
            <div className="overflow-x-auto mt-2">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 pr-4 text-slate-300 font-semibold">Category</th>
                    <th className="text-left py-2 pr-4 text-slate-300 font-semibold">Examples</th>
                    <th className="text-left py-2 text-slate-300 font-semibold">Collected</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ["A. Identifiers", "Name, email, phone number, IP address", "YES"],
                    ["B. Protected classification characteristics", "Gender, age, race, national origin", "NO"],
                    ["C. Commercial information", "Transaction history, payment information", "NO"],
                    ["D. Biometric information", "Fingerprints and voiceprints", "NO"],
                    ["E. Internet or network activity", "Browsing history, search history, interactions with our website", "YES"],
                    ["F. Geolocation data", "Device location", "NO"],
                    ["G. Audio, electronic, or similar information", "Images, audio, video recordings", "NO"],
                    ["H. Professional or employment-related information", "Job title, work history", "NO"],
                    ["I. Education information", "Student records", "NO"],
                    ["J. Inferences drawn from personal information", "Profile or preference summaries", "NO"],
                    ["K. Sensitive personal information", "", "NO"],
                  ].map(([cat, ex, col]) => (
                    <tr key={cat}>
                      <td className="py-2 pr-4 align-top text-slate-400">{cat}</td>
                      <td className="py-2 pr-4 align-top text-slate-500">{ex}</td>
                      <td className={`py-2 align-top font-semibold ${col === "YES" ? "text-cyan-400" : "text-slate-600"}`}>{col}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <SubHeading>Your Rights</SubHeading>
            <p>Under certain US state data protection laws, you have the right to:</p>
            <ul className="space-y-1.5 ml-1">
              {[
                "Know whether or not we are processing your personal data",
                "Access your personal data",
                "Correct inaccuracies in your personal data",
                "Request deletion of your personal data",
                "Obtain a copy of the personal data you previously shared with us",
                "Non-discrimination for exercising your rights",
                "Opt out of the processing of your personal data if used for targeted advertising or sale of personal data",
              ].map((r) => (
                <li key={r} className="flex gap-2"><span className="text-cyan-400 shrink-0">•</span>{r}</li>
              ))}
            </ul>

            <SubHeading>How to Exercise Your Rights</SubHeading>
            <p>To exercise these rights, contact us by emailing <a href={`mailto:${EMAIL}`} className="text-cyan-400 hover:text-cyan-300">{EMAIL}</a> or using the contact details in Section 14. We will need to verify your identity before processing your request. We will respond to all verified requests within <strong className="text-white">45 days</strong>. If additional time is needed, we will notify you of the extension and the reason within the initial 45-day period.</p>
            <p>You may also designate an authorized agent to make a request on your behalf, subject to written proof of authorization.</p>

            <SubHeading>Appeals</SubHeading>
            <p>If we decline to take action regarding your request, you may appeal our decision by emailing <a href={`mailto:${EMAIL}`} className="text-cyan-400 hover:text-cyan-300">{EMAIL}</a> with the subject line "Privacy Rights Appeal." We will respond in writing within 45 days of receiving your appeal. If your appeal is denied, you may submit a complaint to your state attorney general.</p>
          </Section>

          <Divider />

          <Section number="13" title="Do We Make Updates to This Notice?">
            <InShort>Yes, we will update this notice as necessary to stay compliant with relevant laws.</InShort>
            <p>We may update this Privacy Notice from time to time. The updated version will be indicated by an updated date at the top of this Privacy Notice. If we make material changes, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to stay informed of how we are protecting your information.</p>
          </Section>

          <Divider />

          <Section number="14" title="How Can You Contact Us About This Notice?">
            <p>If you have questions or comments about this notice, you may contact us at:</p>
            <div className="card-cyber rounded-xl p-5 mt-4 space-y-1">
              <p className="text-white font-semibold">{COMPANY}</p>
              <p className="text-slate-400">500 Hudson Street, Unit 2A</p>
              <p className="text-slate-400">Hoboken, NJ 07030</p>
              <p className="text-slate-400">United States</p>
              <a href={`mailto:${EMAIL}`} className="text-cyan-400 hover:text-cyan-300 block pt-1">{EMAIL}</a>
              <a href="tel:3475156775" className="text-cyan-400 hover:text-cyan-300 block">(347) 515-6775</a>
            </div>
          </Section>

          <Divider />

          <Section number="15" title="How Can You Review, Update, or Delete the Data We Collect From You?">
            <p>Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information.</p>
            <p>These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please contact us at <a href={`mailto:${EMAIL}`} className="text-cyan-400 hover:text-cyan-300">{EMAIL}</a>. We will respond to all verified requests within <strong className="text-white">45 days</strong>.</p>
          </Section>

          <Divider />

          <Section number="16" title="Governing Law">
            <p>This Privacy Notice and any disputes arising out of or relating to it shall be governed by and construed in accordance with the laws of the <strong className="text-white">State of New Jersey, United States</strong>, without regard to its conflict of law provisions.</p>
            <p>Any legal action or proceeding relating to this Privacy Notice shall be brought exclusively in the state or federal courts located in <strong className="text-white">Hudson County, New Jersey</strong>. By using our Services, you consent to the personal jurisdiction and venue of such courts.</p>
            <p>If you are accessing our Services from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States where our servers are located. By using our Services, you consent to this transfer.</p>
          </Section>

          <Divider />

          <Section number="17" title="Limitation of Liability">
            <InShort>Our liability for privacy-related claims arising from website use is limited as described below.</InShort>
            <p>To the fullest extent permitted by applicable law, {COMPANY}&apos;s total liability to any individual for any claims arising out of or relating to this Privacy Notice or the collection, use, or disclosure of personal information through our <strong className="text-white">website</strong> shall not exceed the greater of: (a) the total fees paid by you to {COMPANY} in the twelve (12) months preceding the claim, or (b) <strong className="text-white">one hundred dollars ($100.00)</strong>.</p>
            <p>In no event shall {COMPANY} be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to this Privacy Notice or the use of our website, even if {COMPANY} has been advised of the possibility of such damages.</p>
            <p><strong className="text-slate-300">Important — Managed Services Clients:</strong> The limitation of liability for any data processed by {COMPANY} in the course of providing managed cybersecurity or IT services is governed exclusively by the limitation of liability clause in your Master Service Agreement. The limitation set forth above applies solely to website visitors and newsletter subscribers.</p>
            <p>Some jurisdictions do not allow the exclusion or limitation of certain damages. If these laws apply to you, some or all of the above limitations may not apply, and you may have additional rights.</p>
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

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-white mb-4">
        {number}. {title}
      </h2>
      <div className="space-y-3 text-slate-400 leading-relaxed text-sm">{children}</div>
    </div>
  );
}

function InShort({ children }: { children: React.ReactNode }) {
  return (
    <p className="italic text-slate-500 border-l-2 border-cyan-500/40 pl-3 mb-3">
      <strong className="text-slate-400 not-italic">In Short:</strong> {children}
    </p>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-slate-300 font-semibold mt-4 mb-1">{children}</h3>;
}

function Divider() {
  return <hr className="border-white/5" />;
}

function BulletItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <span className="text-cyan-400 shrink-0 mt-0.5">•</span>
      <span><strong className="text-slate-300">{label}.</strong> {children}</span>
    </li>
  );
}
