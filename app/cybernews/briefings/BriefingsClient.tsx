"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronDown, ChevronUp, AlertTriangle } from "lucide-react";

const briefings = [
  {
    issue: "#2026-W27",
    week: "W27",
    date: "Week of July 6, 2026",
    alertLevel: "CRITICAL",
    headline: "Avalon ransomware via fake legal emails · SharePoint exploit active · Bad Epoll Linux root flaw · Mac malware steals passwords · AI agent automates attacks · Scattered Spider teen charged · Claude Fable 5 launches",
    summary: [
      "Avalon ransomware framework arrives via fake legal documents (password-protected attachments)",
      "Microsoft SharePoint CVE-2026-45659 actively exploited by ransomware groups — CISA deadline was July 4",
      "Bad Epoll (CVE-2026-46242) lets any Linux user take full root control",
      "PamStealer Mac malware disguised as popular clipboard app Maccy",
      "JadePuffer AI agent ran hundreds of attacks overnight with no human involvement",
      "Scattered Spider member Peter Stokes, 19, federally charged",
      "Anthropic launches Claude Fable 5 — now widely available",
    ],
    content: (
      <>
        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">The Week in 60 Seconds</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          This week brought a ransomware framework sophisticated enough to earn its own name: Avalon. It arrives via fake legal documents, hides inside files that look safe, and quietly takes over a computer before deploying ransomware. Microsoft SharePoint — the file-sharing system used by millions of businesses — has an actively exploited flaw that ransomware groups are using right now. A new Linux root vulnerability called Bad Epoll was fixed but needs to be applied immediately. Mac users face a new password-stealing app disguised as a popular clipboard tool. And in an industry first, a cybercrime group used an AI agent to automate attacks with almost no human involvement — running hundreds of attacks while the criminals slept. On the positive side: Anthropic launched Claude Fable 5, and a 19-year-old Scattered Spider member has been charged by federal prosecutors.
        </p>

        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">🛠️ Urgent Updates Your Devices Need Now</h3>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">Microsoft SharePoint — Ransomware Groups Are Actively Exploiting This Right Now</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">Who is affected:</strong> Businesses that use Microsoft SharePoint for internal file sharing, team collaboration, or document management.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          CISA confirmed ransomware attackers are actively exploiting CVE-2026-45659 in SharePoint. An attacker who has any kind of login to your SharePoint system (even a basic account) can use this to run their own code on your server. Microsoft patched this in May. The CISA federal deadline was July 4.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ What to do:</strong> Ask your IT provider or Microsoft 365 administrator: "Has the May 2026 SharePoint patch been applied?" If you manage SharePoint yourself: apply all pending updates immediately. This cannot wait.
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">Linux Computers — "Bad Epoll" Flaw Lets Anyone Take Full Control</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">Who is affected:</strong> Anyone running Linux on a computer, server, or Android device.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          Bad Epoll (CVE-2026-46242) lets any ordinary user with access to a Linux machine take complete root control. It affects Linux desktops, servers, and Android devices. A fix is available.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ What to do:</strong> Update Linux systems immediately. On Ubuntu or Debian: run <code className="bg-slate-800 px-1 rounded text-cyan-300">sudo apt update &amp;&amp; sudo apt upgrade</code>. On Red Hat/CentOS/Fedora: run <code className="bg-slate-800 px-1 rounded text-cyan-300">sudo dnf update</code>. For Android: install the latest security update.
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">Mac Users — "PamStealer" Malware Disguised as a Popular Clipboard App</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">Who is affected:</strong> Mac users who downloaded a clipboard manager called "Maccy" from any site other than maccy.app.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          Security researchers found malware called PamStealer distributed through a fake website designed to look like the legitimate Maccy clipboard manager. When installed, it steals your Mac login password and sends it to attackers — along with passwords stored in your browser.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ What to do:</strong> Only download Maccy from the official site: maccy.app. If you downloaded it from any other website recently, delete the app immediately and change your Mac login password. Run a scan with Malwarebytes for Mac.
        </p>

        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">🚨 The Biggest Threats This Week</h3>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">Avalon — A New Ransomware System Arriving as a Fake Legal Document</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">Who is affected:</strong> Business owners, office managers, and anyone who receives contracts, invoices, or legal documents by email.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          Security researchers documented Avalon — a new ransomware framework delivered through emails that appear to contain legal documents (court notices, contracts, compliance paperwork). The attachment is password-protected (the password is in the email to bypass security filters), and when opened, it quietly installs itself and begins taking over the computer. The ransomware it deploys is called CrownX.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ What to do:</strong> Do not open password-protected attachments from senders you do not know personally — even if the email looks official. Legitimate courts and legal firms do not send unsolicited password-protected archives. Verify by calling the sender directly using a phone number you find yourself.
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">AI Agent Automates Hundreds of Cyberattacks While Criminals Sleep</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          A criminal group called JadePuffer used an AI agent to automate cyberattacks almost entirely without human involvement. The AI independently sent phishing emails, harvested credentials, logged into victim accounts, and exfiltrated data — running continuously through the night. Separately, another group called Kairos used AI to write personalized ransom notes and successfully extorted $1 million from a US government-linked entity.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ What to do:</strong> Enable multi-factor authentication (MFA) on every account — this week. If an AI agent steals your password but cannot get past MFA, the attack stops there.
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">NetNut Rented Out Millions of Hacked Devices — Your Router May Have Been One</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          A proxy service called NetNut was found renting access to millions of compromised devices — including home and office routers — to cybercriminals and nation-state hackers. The devices were compromised without their owners' knowledge.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ What to do:</strong> Restart your router (unplug for 30 seconds). Log into your router's admin page and check for firmware updates. Change the default admin password. If your router is more than 5–6 years old, consider replacing it.
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">PolinRider — 108 Malicious Packages and Browser Extensions</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          A new supply chain campaign published 108 malicious packages across npm and the Chrome and Firefox extension stores. The packages appeared legitimate but were designed to steal credentials and API keys, specifically targeting developers who use AI coding tools.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ What to do:</strong> Review your browser extensions and remove anything you do not actively use or do not recognize. Audit recent npm package installs and check your AI service billing dashboards for unexpected usage.
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">North Korea Targets Developers with Fake Job Interview Assignments</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          North Korean hackers continued their "ContagiousInterview" campaign, sending fake job interview coding assignments to developers. When the developer runs the code, malware called BeaverTail and OtterCookie is installed — stealing cryptocurrency wallets, browser passwords, and developer credentials.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ What to do:</strong> Never run code from someone you don't know on your main work computer. Use an isolated environment for any unsolicited coding assignments.
        </p>

        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">🤖 AI This Week</h3>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">Anthropic Launches Claude Fable 5 — Now Widely Available</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          Anthropic released Claude Fable 5, making it widely available after a period of limited access. It is already being used by security researchers to find software vulnerabilities. Available at claude.ai. As with any AI tool: do not type passwords, client confidential information, or financial account details into any AI chat.
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">Agentic Browsers Can Be Tricked Into Abandoning Safety Rules</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          Security researchers demonstrated that agentic browsers — AI tools that browse the web for you — can be manipulated by malicious websites into abandoning their safety guidelines and exfiltrating your credentials (called context manipulation). Be cautious about which websites you allow AI browser agents to access, especially for tasks involving sensitive accounts.
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">Microsoft Moving to Quantum-Safe Encryption Sooner Than Expected</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          Microsoft announced it is accelerating its transition to post-quantum cryptography (PQC) — encryption designed to resist attacks from future quantum computers. No immediate action required, but worth knowing for long-term IT planning.
        </p>

        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">✅ Your Action List This Week</h3>
        <p className="text-slate-300 font-semibold mb-2">Do These Now:</p>
        <ul className="list-disc list-inside text-slate-300 space-y-1 mb-3">
          <li>Update Linux computers and servers immediately. Android users: install the latest security update.</li>
          <li>Ask your IT provider: "Has the May 2026 SharePoint patch been applied?" Ransomware groups are actively using this flaw.</li>
          <li>Do not open password-protected email attachments from unknown senders this week — Avalon ransomware spreads through fake legal documents.</li>
          <li>If you downloaded Maccy from any site other than maccy.app: delete it, change your Mac login password, and run Malwarebytes for Mac.</li>
        </ul>
        <p className="text-slate-300 font-semibold mb-2">Do These This Week:</p>
        <ul className="list-disc list-inside text-slate-300 space-y-1 mb-3">
          <li>Enable multi-factor authentication on every business account not already secured. AI agents are running credential-theft attacks overnight automatically.</li>
          <li>Restart your router. Update its firmware. Change the default admin password.</li>
          <li>Review browser extensions in Chrome and Firefox. Remove anything you don't actively use.</li>
          <li>Tell your team: do not open unsolicited coding assignments from "job opportunities" on your main work computer.</li>
        </ul>
        <p className="text-slate-300 font-semibold mb-2">Do These This Month:</p>
        <ul className="list-disc list-inside text-slate-300 space-y-1 mb-3">
          <li>Set up or update your AI usage policy. Three rules: no confidential data in AI chats, verify all AI tool invitations, treat AI output as a draft.</li>
          <li>Schedule a security awareness session for your team on AI-powered phishing.</li>
          <li>Test your business backups. Ask your IT provider to do a test restore.</li>
        </ul>

        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">💡 This Week's Spotlight: The Attack That Runs Itself</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          JadePuffer's AI agent attack deserves its own moment of attention. Until now, every cyberattack required a human to be doing something — sending the phishing email, logging into the stolen account, making decisions. Criminals had to be awake and paying attention. That friction limited scale. JadePuffer removed that friction. Their AI agent sent phishing emails, received replies, harvested credentials, logged into accounts, and exfiltrated data — all without a human in the loop. Hundreds of attack attempts while the criminals slept.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          The good news: the defenses work the same way. Multi-factor authentication, tested backups, and a team trained to pause before acting on urgent requests are still the right answers. The businesses that weather this era well will be the ones that made the basic things permanent and tested — not the ones with the most sophisticated security tools.
        </p>
      </>
    ),
  },
  {
    issue: "#2026-W26",
    week: "W26",
    date: "Week of June 29, 2026",
    alertLevel: "CRITICAL",
    headline: "OpenAI releases GPT-5.6 · Fake OpenAI invites stealing business secrets · MSG data published after Knicks title · Linux root flaw exploited within 24 hours · New macOS malware fools AI security tools · Five Eyes issue urgent AI warning",
    summary: [
      "Fake OpenAI workspaces tricking employees into sharing company secrets",
      "OpenAI releases GPT-5.6 in three versions: Sol, Terra, and Luna",
      "Five Eyes intelligence agencies issue urgent joint warning: AI weaponized against businesses",
      "macOS 'Gaslight' malware engineered to fool AI-powered security tools",
      "Madison Square Garden fan data (45 GB) published after Knicks NBA title — ShinyHunters",
      "Linux 'pedit COW' flaw exploited within 24 hours of disclosure",
      "Polymarket refunds $3M after third-party vendor hack",
    ],
    content: (
      <>
        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">The Week in 60 Seconds</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          A big week. OpenAI launched its most powerful AI yet — GPT-5.6, in three versions — on the same day the Five Eyes intelligence alliance issued an urgent joint warning about AI being used as a weapon against businesses. Attackers are creating fake official-looking OpenAI workspaces to trick employees into sharing sensitive company information. The Madison Square Garden data dump landed publicly after the Knicks won the NBA Finals and reportedly declined to pay a ransom. A new Linux flaw was exploited within 24 hours of being made public. And a new Mac virus is specifically designed to trick the AI-powered security tools that defenders use. Good news: law enforcement disrupted a major illegal sports streaming operation, and Polymarket reimbursed $3 million to customers after a hack.
        </p>

        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">🤖 AI This Week — Powerful New Tools and New Scams</h3>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">Fake OpenAI Workspaces Tricking Employees Into Sharing Company Secrets</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">Who is affected:</strong> Everyone who uses ChatGPT at work, especially business owners and their teams.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          Attackers are creating fake OpenAI "tenants" (workspaces) that look identical to legitimate company ChatGPT setups. They then invite employees to join, making it look like an official company tool. When employees use the fake workspace, everything they type — business plans, customer information, legal documents, financial data — is captured by the attackers.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ What to do:</strong> Before joining any ChatGPT workspace or accepting any AI tool invitation at work: confirm with your manager or IT contact that it is a legitimate, company-approved setup. If you received an unexpected invitation, do not join it until you have verified it with a human colleague.
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">OpenAI Releases GPT-5.6 — Three Versions for Different Needs</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          OpenAI released GPT-5.6 in three versions: Sol (most powerful, best for complex tasks), Terra (balanced for everyday work), and Luna (fast and affordable). These are the most capable AI models OpenAI has released, initially to a limited set of companies working with the US government. Broader availability is rolling out over time.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">Security reminder:</strong> Never type sensitive passwords, credit card numbers, or confidential client information into any AI chat.
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">Five Eyes Intelligence Agencies Issue Urgent Warning: AI Is Being Weaponized</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          The intelligence agencies of the United States, United Kingdom, Canada, Australia, and New Zealand issued a joint urgent warning: criminal groups and state-sponsored hackers are now using AI to dramatically improve the quality and scale of their attacks. AI is being used to write more convincing phishing emails, create fake voices and videos, accelerate hacking, and find weaknesses in business software faster than ever before.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ Three practical responses:</strong> (1) Slow down on unexpected requests — AI can now write a perfect email that sounds exactly like your CEO or your bank. Verify any unexpected financial request by phone before acting. (2) Enable multi-factor authentication everywhere. (3) Train your team — AI-powered scams now sound indistinguishable from real communications.
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">macOS 'Gaslight' Malware — Built to Fool the Security Tools That Protect Macs</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">Who is affected:</strong> Mac users, especially those in businesses that use AI-powered security software.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          Researchers discovered "Gaslight" — Mac malware specifically engineered to confuse AI-assisted security tools. It hides fake debugging clues and misleading information inside itself to trick automated security scanners into thinking it's harmless.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ What to do:</strong> Keep your Mac fully updated via System Settings → Software Update. Do not download software from outside the Mac App Store or directly trusted software company websites.
        </p>

        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">🚨 Major Stories This Week</h3>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">Madison Square Garden Fan Data Published Online After Knicks Win NBA Finals</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">Who is affected:</strong> Fans of the New York Knicks, New York Rangers, and anyone with an MSG account.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          The ShinyHunters criminal group published a 45 GB archive of data stolen from Madison Square Garden Sports this week, reportedly after the company declined to pay a ransom. The timing was deliberate — released days after the Knicks won the NBA championship. The data includes customer emails, ticketing records, and internal files classifying high-profile individuals. At least one lawsuit has already been filed.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ What to do:</strong> If you have an MSG, Knicks, or Rangers account: change your password immediately and enable two-factor authentication. Be alert for targeted phishing emails that use your name, ticket history, or event details to appear credible.
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">Linux Computers — New Root Flaw Exploited Within 24 Hours</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          A new flaw called "pedit COW" in the Linux operating system was publicly disclosed and had a working exploit published within 24 hours. The flaw lets someone with basic access to a Linux machine take complete root (administrator) control. Unlike previous Linux flaws, this one is especially tricky because file-integrity security checks come back clean even after the exploit has run.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ What to do:</strong> Update your Linux systems immediately. On Ubuntu/Debian: run <code className="bg-slate-800 px-1 rounded text-cyan-300">sudo apt update &amp;&amp; sudo apt upgrade</code>. On RHEL/CentOS/Fedora: run <code className="bg-slate-800 px-1 rounded text-cyan-300">sudo dnf update</code>.
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">Polymarket Refunds $3 Million to Customers After Third-Party Vendor Hack</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          Polymarket announced it will fully reimburse approximately $3 million to customers who lost money after attackers injected a malicious script into the platform's website via a breach at a third-party vendor — not through Polymarket's own systems. This is another example of why third-party vendor security matters: a hack of a service provider can impact the platform you trust even when the platform itself is not hacked.
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">PirloTV Sports Piracy Ring Dismantled — 44 Illegal Streaming Domains Seized</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          Law enforcement disrupted a major illegal sports streaming operation by seizing 44 domains linked to PirloTV. Beyond the legal issues, these platforms frequently deliver malware and steal payment credentials from users.
        </p>

        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">🏢 For Business Owners &amp; Solopreneurs</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">The Fake OpenAI Workspace Attack Is Targeting Your Team Right Now.</strong> Tell your team right now that any AI tool invitation needs to be verified with you or your IT contact before they join. Five minutes of communication prevents a potentially devastating data leak.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">The Five Eyes Warning Should Change How You Think About Phishing.</strong> Your team can no longer rely on bad spelling or awkward phrasing to identify fake emails. AI writes perfect emails. The only reliable defense is a process: any unexpected financial request or sensitive information request gets verified by phone before acting on it.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">If Your Business Uses ChatGPT, You Need an AI Usage Policy.</strong> Three rules cover most of the risk: (1) Never type client names, passwords, or confidential information into any AI tool. (2) Verify any AI workspace invitation with your manager before joining. (3) Treat AI-generated output as a first draft that needs review.
        </p>

        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">✅ Your Action List This Week</h3>
        <p className="text-slate-300 font-semibold mb-2">Do These Now:</p>
        <ul className="list-disc list-inside text-slate-300 space-y-1 mb-3">
          <li>Tell your team TODAY: any invitation to a ChatGPT workspace or AI tool must be verified with you before they join.</li>
          <li>Update Linux computers and servers immediately. The pedit COW flaw was exploited within 24 hours of disclosure.</li>
          <li>If you have an MSG or Knicks/Rangers account: change your password and enable two-factor authentication.</li>
        </ul>
        <p className="text-slate-300 font-semibold mb-2">Do These This Week:</p>
        <ul className="list-disc list-inside text-slate-300 space-y-1 mb-3">
          <li>Create or update your AI usage policy. Share it with your team in writing.</li>
          <li>Brief your team on AI-powered phishing. Any unexpected financial request needs phone verification before action.</li>
          <li>Update your Mac via System Settings → Software Update. Gaslight malware targets Macs and is designed to evade security tools.</li>
          <li>Audit which AI tools your team is using and which ones are company-approved.</li>
        </ul>
        <p className="text-slate-300 font-semibold mb-2">Do These This Month:</p>
        <ul className="list-disc list-inside text-slate-300 space-y-1 mb-3">
          <li>Test your business backups. Ransomware groups grew 40% in Q1 2026.</li>
          <li>Set up passkeys on your most important accounts. Search "set up passkey" on your Google, Apple, or Microsoft account to start.</li>
        </ul>

        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">💡 This Week's Spotlight: When AI Becomes the Weapon</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          This week brought two AI stories that sit on opposite sides of the same line: OpenAI's GPT-5.6 launch and the Five Eyes warning that AI is being used to attack businesses at unprecedented scale. The same tools that help you write emails faster also help criminals craft perfect phishing messages, create convincing fake voices, and find weaknesses in your software automatically.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          For small business owners, one thing has changed permanently: you can no longer teach employees to spot scams by looking for bad writing. AI writes perfectly. The new rule is process, not detection. Any unexpected financial request, account change, or sensitive information request gets verified by a second method — a phone call, a walk down the hall — before anyone acts on it.
        </p>
      </>
    ),
  },
  {
    issue: "#2026-W25",
    week: "W25",
    date: "Week of June 22, 2026",
    alertLevel: "CRITICAL",
    headline: "30,000 Fortinet logins stolen · Amazon One Medical hit by extortion gang · Apple iPhone chip flaw cannot be patched · AI coding plugins stealing your API keys · 15,000 WordPress sites cleaned up · Microsoft 365 Copilot one-click data theft flaw · UK warns AI code could cause security disasters",
    summary: [
      "Hackers built a database of 30,000 verified working passwords for Fortinet devices in 194 countries",
      "Amazon One Medical extortion threat — claimed 8.8 TB of healthcare data stolen",
      "Usbliter8: hardware flaw in iPhone A12/A13 chips that can never be patched",
      "15 malicious AI coding plugins found on JetBrains Marketplace stealing API keys",
      "Microsoft 365 Copilot SearchLeak flaw allowed one-click email/file theft (now patched)",
      "15,000 infected WordPress sites cleaned up in international law enforcement operation",
      "UK NCSC warns AI-written code is creating hidden security disasters in production software",
    ],
    content: (
      <>
        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">The Week in 60 Seconds</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          This was a heavy week. Hackers built a secret database of 30,000 confirmed working passwords for Fortinet networking equipment used by businesses in 194 countries. A major healthcare company was hit by extortion threats claiming 8.8 TB of data was stolen. Researchers revealed a flaw in some iPhones and iPads that cannot ever be fixed because it's in the hardware itself. Malicious fake AI tools on developer marketplaces were caught stealing credentials. A massive law enforcement operation cleaned up 15,000 infected websites. And the UK's top cybersecurity agency warned that AI-written code is creating security time bombs in software being shipped right now.
        </p>

        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">🛠️ Urgent Updates Your Devices Need</h3>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">Chrome — Update It Again (Fifth Zero-Day of 2026)</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          Google released another emergency Chrome security update, fixing CVE-2026-11645 — a serious flaw that attackers were already actively exploiting. This is the fifth time in 2026 that attackers found a Chrome flaw before Google could patch it.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ What to do:</strong> Open Chrome → three dots → Help → About Google Chrome → let it update → restart. Do this now.
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">Apple iPhones &amp; iPads — A Flaw That Can Never Be Fixed</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">Who is affected:</strong> Anyone with an iPhone or iPad using an A12 or A13 chip (iPhone XS, XR, 11, 11 Pro, SE 2nd gen, iPad Air 3rd gen, iPad mini 5th gen).
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          Researchers published a working exploit called "Usbliter8" that can permanently compromise an iPhone by exploiting a flaw burned into the chip at the factory. No software update can ever fix it. However, the attack requires the attacker to physically hold your device and connect it to special hardware within two seconds in a specific mode.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ What to do:</strong> Keep your device physically secure. Enable a strong PIN or password so that even if someone picks it up, they cannot put it into the vulnerable mode (DFU mode). This flaw cannot be exploited remotely.
        </p>

        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">🚨 Major Breaches &amp; Threats This Week</h3>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">30,000 Fortinet Business Logins Stolen — Companies in 194 Countries</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">Who is affected:</strong> Small and medium businesses that use Fortinet VPN or firewall equipment.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          Cybersecurity researchers discovered that hackers have built a database of over 30,000 verified, working login credentials for Fortinet network devices stolen from companies across 194 countries. These are real, active passwords that work right now. Companies including Fortune 500 firms and government agencies are confirmed in the stolen database.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ What to do:</strong> Contact your IT provider TODAY and ask: "Have our Fortinet devices been affected by the FortiBleed credential theft campaign?" Ask them to reset all Fortinet admin passwords immediately and apply outstanding firmware updates. If you manage Fortinet equipment yourself: change all admin passwords right now and check for unauthorized admin accounts.
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">Amazon One Medical — 8.8 Terabytes of Healthcare Data Under Extortion Threat</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">Who is affected:</strong> Anyone who uses Amazon's One Medical healthcare service.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          An extortion group claimed to have stolen 8.8 terabytes of data from One Medical, Amazon's healthcare subsidiary, and issued a "last warning" ultimatum. If real, the data could include medical records, appointment histories, insurance information, and personal contact details.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ What to do:</strong> If you are a One Medical patient: change your account password and enable two-factor authentication at onemedical.com. Be alert for phishing emails that use your medical history or appointment details to appear legitimate.
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">Salesforce — Customer Data Accessed Through a Third-Party App</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          An extortion group called Icarus gained access to customer data stored in Salesforce by compromising a third-party app called Klue that was connected to the platform. Salesforce itself was not hacked — the entry point was a trusted connected app.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ What to do:</strong> If your business uses Salesforce: review which third-party apps are connected to your Salesforce account (Setup → Connected Apps). Remove any apps you no longer actively use. Every connected app is a potential entry point.
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">WordPress SocGholish Malware — 15,000 Sites Cleaned by Law Enforcement</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          Dutch law enforcement, working with agencies from Canada, Germany, and the United States, cleaned up nearly 15,000 infected WordPress websites that had been secretly redirecting visitors to malware. The operation took down 106 criminal servers.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ What to do:</strong> For website owners: log in to your WordPress dashboard and run all available updates. For everyone: if you visit a website and your browser suddenly opens a pop-up asking you to update Chrome or install a PDF viewer, close it immediately without clicking anything.
        </p>

        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">🤖 AI Tools — New Risks This Week</h3>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">Fake AI Coding Plugins Stealing Developer Credentials — 15 Malicious Plugins Found</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">Who is affected:</strong> Freelancers, developers, and anyone who uses JetBrains tools (IntelliJ, PyCharm, WebStorm) with plugins.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          Security researchers found 15 malicious plugins on the official JetBrains Marketplace. Each pretended to be an AI coding assistant. When installed, they silently stole AI API keys — credentials connected to your billing account. A stolen API key can rack up thousands of dollars in unauthorized charges before you notice.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ What to do:</strong> Review every plugin installed in your JetBrains IDE and remove any AI assistant plugin you didn't specifically install yourself or that has very few reviews. Check your AI service billing dashboards for unexpected usage spikes. If you see unusual charges, revoke and regenerate your API keys immediately.
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">Microsoft 365 Copilot — "SearchLeak" One-Click Data Theft Flaw (Now Patched)</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          Security researchers discovered a flaw called SearchLeak in Microsoft 365 Copilot that allowed attackers to steal a victim's emails, calendar appointments, and files with a single click on a seemingly legitimate Microsoft link. Because the link pointed to a real microsoft.com address, standard security tools didn't flag it. Microsoft has patched this flaw.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">No action needed</strong> — Microsoft fixed this. But this is a good reminder: even links that appear to go to official company websites can be crafted to cause harm.
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">UK's Top Cybersecurity Agency Warns: AI-Written Code Is Creating Security Disasters</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          The UK National Cyber Security Centre (NCSC) warned that AI coding tools are producing code with serious security flaws — and developers are shipping it without proper review. The NCSC specifically warned this could create "security disasters" if left unchecked.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ What to do:</strong> If your business uses AI-generated code: ask your developer "Has any AI-generated code on our website or app been reviewed by a human for security issues?" Treat AI-generated code as a first draft that needs security review before going live.
        </p>

        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">🏢 For Business Owners &amp; Solopreneurs</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">If You Use Fortinet Networking Equipment, This Is an Emergency.</strong> 30,000 verified working login credentials. Real passwords. Working right now. Companies in 194 countries. If your office uses a Fortinet VPN or firewall and you have not changed those passwords this week — call your IT provider right now.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">API Keys Are Money — Protect Them Like Bank Account Numbers.</strong> The JetBrains marketplace attack stole AI API keys directly connected to billing accounts. If you use any AI service with an API key: store it in a password manager, never paste it into code that gets uploaded to GitHub, and check your billing dashboard regularly. Set up billing alerts so you're notified of usage spikes.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">The Salesforce &amp; WordPress Breaches Teach the Same Lesson.</strong> Two separate incidents involved attackers getting into a trusted platform by compromising a third-party app connected to it. Every app you connect to your business tools is a door. Spend 20 minutes reviewing which apps are connected to your email, CRM, and website platform. Remove anything you don't actively need.
        </p>

        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">✅ Your Action List This Week</h3>
        <p className="text-slate-300 font-semibold mb-2">Do These Now:</p>
        <ul className="list-disc list-inside text-slate-300 space-y-1 mb-3">
          <li>Update Chrome. Three dots → Help → About Google Chrome → update → restart.</li>
          <li>If your business uses Fortinet VPN or firewall: call your IT provider right now to change all passwords and apply firmware updates.</li>
          <li>If you use JetBrains coding tools with plugins: review all installed plugins and remove any AI assistant plugins you didn't intentionally install.</li>
          <li>If you are a One Medical patient: change your password and enable two-factor authentication.</li>
        </ul>
        <p className="text-slate-300 font-semibold mb-2">Do These This Week:</p>
        <ul className="list-disc list-inside text-slate-300 space-y-1 mb-3">
          <li>Review connected apps in Salesforce, your email platform, and your website. Remove any apps you no longer actively use.</li>
          <li>Update your WordPress site — core, theme, and all plugins.</li>
          <li>Set up billing alerts on any AI service you pay for. A sudden spike in usage is an early warning of a stolen API key.</li>
          <li>Keep your iPhone or iPad physically secure. The Usbliter8 hardware flaw requires someone to physically hold your device.</li>
        </ul>
        <p className="text-slate-300 font-semibold mb-2">Do These This Month:</p>
        <ul className="list-disc list-inside text-slate-300 space-y-1 mb-3">
          <li>Ask your developer: "Has any AI-generated code on our website been reviewed for security?"</li>
          <li>Set up passkeys on your most important accounts. More secure than passwords and cannot be phished.</li>
          <li>Test your business backups. Ask your IT provider to do a test restore.</li>
        </ul>

        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">💡 This Week's Spotlight: Why "Trusted" Doesn't Mean "Safe"</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          Three separate incidents this week had the same root cause: attackers got in through something the victim already trusted. Salesforce wasn't hacked — a trusted app connected to it was. WordPress sites weren't hacked directly — trusted plugins were backdoored. Microsoft 365 Copilot wasn't hacked — a trusted microsoft.com link was weaponized. JetBrains Marketplace wasn't hacked — trusted-looking plugins on it were malicious.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          Modern attackers are not trying to smash down the front door. They are finding side doors — trusted connections, established relationships, legitimate-looking tools — and slipping through quietly. The practical rule: regularly audit what has access to your accounts and devices, and remove anything you no longer actively need. A connected app you forgot about six months ago is exactly the kind of side door attackers are looking for.
        </p>
      </>
    ),
  },
  {
    issue: "#2026-W24",
    week: "W24",
    date: "Week of June 15, 2026",
    alertLevel: "CRITICAL",
    headline: "Biggest Windows update in history · Unpatched Defender flaw · World Cup scams at full force · ShinyHunters hits NY Knicks & Rangers · Ransomware revenue up 40% · 152 Chrome extensions caught spying · Agentjacking attacks on AI tools",
    summary: [
      "Microsoft released 200 security fixes in one day — the largest Patch Tuesday in history",
      "New Windows Defender flaw 'RoguePlanet' — no fix yet — all Windows 10 and 11 affected",
      "FIFA World Cup: 4,300+ fake FIFA websites live, banking malware in streaming apps",
      "ShinyHunters claims breach of Madison Square Garden — Knicks &amp; Rangers fan data",
      "Ransomware criminal revenue up 40% in Q1 2026",
      "152 Chrome extensions caught secretly recording browser activity",
      "'Agentjacking' attack hijacks AI coding tools via monitoring service compromise",
    ],
    content: (
      <>
        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">The Week in 60 Seconds</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          This was one of the busiest weeks of the year for security. Microsoft released the largest single security update in its history — 200 fixes in one day. Hours later a researcher dropped a new Windows flaw with no fix. The FIFA World Cup opened and scammers are running at full capacity. ShinyHunters claimed to have stolen data from Madison Square Garden, home of the New York Knicks and Rangers. A new attack called "Agentjacking" hijacks AI coding tools on developer computers. 152 Chrome extensions were caught secretly recording what you do online. And ransomware criminal groups grew their income by 40% in just three months. Good news: a major crypto laundering service used by ransomware gangs was shut down.
        </p>

        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">🛠️ Windows — Update Now, Then Watch for One More</h3>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">Microsoft Released 200 Security Fixes in a Single Day — The Biggest Ever</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">Who is affected:</strong> Everyone using a Windows computer — at work or at home.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          On June 9, Microsoft patched approximately 200 security vulnerabilities in one update — the largest Patch Tuesday in the company's history. This included 33 critical flaws. If your computer has not restarted since early this week, it may be missing these protections.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ What to do:</strong> Click the Windows Start button → Settings → Windows Update → Check for updates → Install all → Restart your computer. For business owners: ask your IT provider to confirm all company computers received the June 2026 update.
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">New Windows Defender Flaw "RoguePlanet" — No Fix Yet</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">Who is affected:</strong> All Windows 10 and Windows 11 users — including fully updated systems.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          Hours after the 200-fix update, a security researcher published a new flaw in Windows Defender that lets someone with access to your computer take complete control. There is no patch yet. Microsoft is expected to release one soon.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ What to do:</strong> Keep Windows Update turned on and check it daily this week. Lock your screen whenever you step away (Windows key + L), and be cautious about who has access to your devices.
        </p>

        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">🚨 Scams &amp; Fraud to Know About This Week</h3>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">FIFA World Cup Scams — Running at Full Force All Month</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">Who is affected:</strong> Everyone — especially people following or traveling to World Cup matches.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          The tournament is open and scam activity is at its peak. 4,300+ fake FIFA websites are live. One criminal operation runs 300 cloned FIFA login pages. Unofficial streaming apps are installing banking malware on phones. Fake FIFA emails are circulating in many languages.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ Three rules:</strong> (1) Tickets and streaming — FIFA.com only. (2) Do not download any unofficial streaming apps. (3) Treat all FIFA-themed emails as suspicious unless you initiated contact.
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">ShinyHunters Claims Breach of Madison Square Garden — Knicks &amp; Rangers Fan Data</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">Who is affected:</strong> Fans of the New York Knicks, New York Rangers, and anyone who bought tickets or merchandise through MSG.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          The ShinyHunters cybercrime group — the same group behind the massive Canvas education breach in May — claimed it stole data from Madison Square Garden Sports. MSG has not confirmed the breach.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ What to do:</strong> If you have an account with MSG, the Knicks, or the Rangers: change your password now and enable two-factor authentication. Watch for targeted phishing emails using your name and ticket purchase history.
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">Ransomware Criminal Revenue Up 40% — Businesses Are the Primary Target</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          Rapid7 research confirmed that ransomware groups increased their revenue by nearly 40% in Q1 2026 compared to the same period last year. Small businesses are attractive targets precisely because they often have less security protection than large companies.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ What to do:</strong> Make sure you have working, tested backups of your business data stored somewhere separate from your main computers. Ask your IT provider: "When did we last test our backups?"
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">Dashlane Password Manager — Hackers Stole 12 Customer Password Vaults</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          Hackers brute-forced their way past Dashlane's two-factor authentication system and accessed approximately 20 customer accounts, downloading copies of their encrypted password vaults.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ What to do:</strong> If you use Dashlane: change your master password immediately. This incident is a reminder that password managers themselves can be targeted — use a strong, unique master password and enable the most secure two-factor authentication option available (an authenticator app, not SMS).
        </p>

        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">📱 Tech &amp; Software Alerts This Week</h3>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">152 Chrome Extensions Caught Secretly Recording Your Browser Activity</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">Who is affected:</strong> Anyone who uses Google Chrome with browser extensions installed.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          Security researchers found 152 Chrome extensions on the official Chrome Web Store — many disguised as "live wallpaper" tools — that were secretly logging user data and faking Google search traffic.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ What to do:</strong> Open Chrome and go to Extensions (three dots → Extensions → Manage Extensions). Review every extension installed. Remove any you do not recognize, any live wallpaper or visual customization extension, and anything you haven't used recently. Less is more with browser extensions.
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">Check Point VPN Flaw — Ransomware Group Already Using It</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">Who is affected:</strong> Businesses that use Check Point VPN software to let employees work remotely.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          A ransomware group is actively exploiting a flaw in Check Point's VPN software. CISA gave federal agencies three days to fix it. The flaw lets attackers get into your network through the VPN connection that's supposed to keep them out.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ What to do:</strong> Contact your IT provider today and ask: "Have we applied the June 2026 Check Point VPN patch?" If your business uses Check Point Remote Access VPN, Mobile Access, or Spark and it hasn't been patched, this is urgent.
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">New "Agentjacking" Attack Hijacks AI Coding Tools</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">Who is affected:</strong> Freelancers, developers, and solopreneurs who use AI coding assistants like Cursor, Copilot, or Claude Code.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          Researchers discovered a new attack technique called Agentjacking that hijacks AI coding assistants by injecting a malicious instruction through a monitoring tool called Sentry. When an AI coding tool connects to a compromised Sentry setup, the attacker can silently run their own code on the developer's computer.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ What to do:</strong> Only allow AI tools to connect to services you explicitly approved and configured yourself. If you use Sentry for error tracking, ensure you're connected to the official sentry.io service.
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">WordPress Plugin Flaw Exploited for Two Months on 4,000 Websites</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          A serious security flaw in the Everest Forms Pro WordPress plugin has been exploited by attackers for approximately two months. Attackers used it to create hidden admin accounts and take over websites.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ What to do:</strong> Log in to your WordPress dashboard and check if you have the Everest Forms Pro plugin installed. If you do, update it to version 1.9.13 or later immediately.
        </p>

        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">✅ Good News This Week</h3>
        <ul className="list-disc list-inside text-slate-300 space-y-1 mb-3">
          <li>Major Crypto Laundering Service "AudiA6" Shut Down — one of the primary cryptocurrency laundering services used by ransomware gangs, making it harder for criminals to cash out.</li>
          <li>npm Makes Supply Chain Attacks Harder — npm install will no longer automatically execute scripts from software dependencies unless explicitly allowed, closing a major supply chain attack vector.</li>
          <li>CISA's New Directive Requires Faster Government Patching — federal agencies must now patch critical vulnerabilities faster, especially those being actively exploited.</li>
        </ul>

        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">✅ Your Action List This Week</h3>
        <p className="text-slate-300 font-semibold mb-2">Do These Now:</p>
        <ul className="list-disc list-inside text-slate-300 space-y-1 mb-3">
          <li>Run Windows Update on every computer. The biggest Windows security update in history dropped this week.</li>
          <li>Audit your Chrome browser extensions. Remove anything you don't recognize, any live wallpaper tool, and anything you haven't used in months.</li>
          <li>If you use Dashlane: change your master password today.</li>
          <li>If you have a WordPress website with Everest Forms Pro: update it to version 1.9.13 or later immediately.</li>
          <li>If you are a Knicks or Rangers fan with an MSG account: change your password and enable two-factor authentication.</li>
        </ul>
        <p className="text-slate-300 font-semibold mb-2">Do These This Week:</p>
        <ul className="list-disc list-inside text-slate-300 space-y-1 mb-3">
          <li>Keep Windows Update turned on and check daily. A new Defender flaw with no fix yet (RoguePlanet) is expected to be patched soon.</li>
          <li>Contact your IT provider and ask: "Have we applied the June 2026 Check Point VPN patch?"</li>
          <li>Test your business backups. Ask your IT provider to do a test file restore from your most recent backup.</li>
          <li>Share the FIFA warning with employees and family: FIFA.com only for tickets and streaming, treat all FIFA emails as suspicious.</li>
        </ul>
        <p className="text-slate-300 font-semibold mb-2">Do These This Month:</p>
        <ul className="list-disc list-inside text-slate-300 space-y-1 mb-3">
          <li>Ask your IT provider what controls are in place to detect large amounts of your business data being downloaded or sent out.</li>
          <li>Review which AI tools your team uses and what other services they connect to. Agentjacking attacks work through those connections.</li>
          <li>Schedule a security awareness session for your team.</li>
        </ul>

        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">💡 This Week's Spotlight: Passwords Are Not Enough Anymore</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          The Dashlane breach this week was not a complicated hack. Attackers used a brute-force technique to repeatedly guess two-factor authentication codes until they got in. This matters because two-factor authentication — the extra code you get by text message — is something most people now use as their main security layer beyond a password. And for most everyday accounts, it's still a good protection. But it's not unbreakable.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          The stronger version of two-factor authentication is a physical security key (like a YubiKey) or a passkey — a method built into modern iPhones, Android phones, and Windows computers. Unlike text message codes, these cannot be guessed, intercepted, or brute-forced. They confirm it's really you by requiring the actual device in your hand.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          For most small businesses and home users, switching to passkeys for your most important accounts — email, banking, password manager — is the single most effective security upgrade available in 2026. Major services including Google, Apple, Microsoft, and most banks now support passkeys. Search "set up passkey" on your Google, Apple, or Microsoft account this week and try it on one account.
        </p>
      </>
    ),
  },
  {
    issue: "#2026-W23",
    week: "W23",
    date: "Week of June 8, 2026",
    alertLevel: "CRITICAL",
    headline: "Seven Cisco SD-WAN zero-days in 2026 · IronWorm npm hits 36 packages · FIFA phishing peaks June 11 · Oxford careers platform breached · WFP cyberattack · Belgian banks must reimburse phishing victims · Smart TV botnet: 150M home IPs · OpenAI largest-ever ChatGPT overhaul",
    summary: [
      "CVE-2026-20245 in Cisco SD-WAN — seventh actively exploited zero-day with no patch available",
      "IronWorm: tenth supply chain attack campaign in 40 days — 36 npm packages infected",
      "FIFA World Cup opens June 11 — 4,300+ fraudulent domains, banking malware in streaming apps",
      "Oxford University CareerConnect breached via third-party provider Group GTI",
      "UN World Food Programme cyberattack — scope under investigation",
      "Belgian court rules banks must reimburse phishing victims immediately upon loss report",
      "Smart TV botnet enrolling 150 million home IP addresses — enterprise WFH risk",
    ],
    content: (
      <>
        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">Executive Summary</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          The week of June 8, 2026 opens with three converging pressures: a seventh actively exploited Cisco SD-WAN zero-day with no patch available, the FIFA World Cup 2026 opening Thursday with over 4,300 fraudulent domains operational and banking malware embedded in streaming apps, and a tenth npm supply chain campaign (IronWorm) demonstrating that the record-breaking May supply chain surge has carried without interruption into June. This week also surfaces a landmark Belgian court ruling requiring banks to reimburse phishing victims immediately upon loss report, Oxford University's CareerConnect platform breached via third-party provider Group GTI, OpenAI's announcement of its largest-ever ChatGPT overhaul, and a smart TV botnet now spanning 150 million home IP addresses.
        </p>

        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">Headline Story: Seven Cisco SD-WAN Zero-Days — An Architecture Crisis</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          CVE-2026-20245 in Cisco Catalyst SD-WAN Manager — the seventh actively exploited SD-WAN vulnerability of 2026 — entered this week still without a patch. The vulnerability allows arbitrary command execution as root by an attacker on the network. This is the most concentrated pattern of exploitation against a single enterprise product line in 2026.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">The Seven — A 2026 Timeline:</strong>
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1 mb-3">
          <li>CVE-2026-20127 — Authentication bypass exploited by UAT-8616 in early 2026</li>
          <li>CVE-2026-20130 — Privilege escalation in SD-WAN Manager</li>
          <li>CVE-2026-20155 — Configuration injection enabling persistent unauthorized access</li>
          <li>CVE-2026-20163 — Information disclosure used to map SD-WAN topology</li>
          <li>CVE-2026-20182 (CVSS 10.0) — Authentication bypass, maximum severity; CISA federal deadline was May 17</li>
          <li>CVE-2026-20198 — Command injection in SD-WAN overlay management</li>
          <li>CVE-2026-20245 (Active, No Patch) — Arbitrary command execution as root in Catalyst SD-WAN Manager</li>
        </ul>
        <p className="text-slate-300 leading-relaxed mb-3">
          Seven exploited CVEs across the same product line in six months represents one or more organized threat actors who have made Cisco SD-WAN infrastructure a sustained, prioritized research and exploitation target. If your organization relies on Cisco Catalyst SD-WAN for network segmentation or WAN connectivity, the appropriate response is an architecture review, not just a patch queue.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">Architecture-Level Response:</strong> Assess blast radius — map what is accessible from a compromised SD-WAN Manager. Restrict management plane exposure — SD-WAN Manager interfaces should never be internet-facing. Evaluate architecture alternatives. Brief your board — seven exploited CVEs in one product is a board-level risk item, not an IT patching backlog.
        </p>

        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">Supply Chain Attacks — Week Ten</h3>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">IronWorm — Tenth Supply Chain Campaign Since May 1</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          IronWorm represents the tenth confirmed supply chain attack campaign in 40 days, infecting 36 npm packages in coordinated waves that spread rapidly through JavaScript ecosystem dependencies. The fact that ten campaigns have landed in 40 days without a slowdown confirms that supply chain attack execution has been commoditized. The barrier to launching a new npm supply chain campaign is now measured in hours and dollars, not days and skills.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">Recommended posture for the remainder of June:</strong> Enable real-time npm behavioral monitoring. Freeze non-critical npm dependency updates this week. Audit all npm installs from June 5 onward against the IronWorm IoC list. Treat supply chain security as a continuous operational function, not a periodic audit.
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">Smart TV Botnet — Enterprise WFH Risk Assessment</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          The smart TV botnet disclosed by Include Security — an SDK embedded in free apps on Samsung, LG, and Roku platforms that enrolls home TVs into a 150 million-plus IP pool for web scraping — carries specific enterprise risk for organizations with work-from-home populations. Employees whose smart TVs are enrolled in this infrastructure are using corporate systems from networks where their IP is actively being used for third-party scraping operations.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">✅ What to do:</strong> Advise work-from-home employees to segment work devices onto a dedicated home network VLAN or guest network, separate from smart TVs and IoT devices.
        </p>

        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">FIFA World Cup 2026 — Threat Brief (Tournament Opens June 11)</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">Documented fraud infrastructure:</strong> 4,300+ fraudulent FIFA domains registered since August 2025 — a ten-month infrastructure buildout. One operator running 300 cloned FIFA sites. Banking malware in streaming apps. 150 million ticket requests (30x oversubscribed) creating optimal conditions for ticket marketplace fraud.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">Enterprise risk categories:</strong> Employee consumer fraud through fake tickets and streaming apps. Corporate credential theft via FIFA-themed account takeover. Finance team targeting — FIFA-themed invoice fraud. BYOD malware infection from unofficial streaming apps on personal devices used for work VPN.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">Recommended employee advisory:</strong> Purchase tickets only at FIFA.com. Stream only through official broadcasters listed at FIFA.com. Do not download apps from unofficial sources. Treat all FIFA-themed email as high risk. Report suspicious approaches immediately to your IT security team.
        </p>

        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">Threat Actor Activity &amp; Incidents</h3>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">Oxford University CareerConnect — Third-Party Breach via Group GTI</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          Oxford University disclosed that its CareerConnect careers platform, managed by third-party provider Group GTI, was compromised on June 8, 2026. The breach exposed student and graduate career data including contact information, employment history, and career application details. The Group GTI compromise is the latest in a pattern of third-party vendor breaches hitting education institutions following the Canvas mega-breach in May.
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">UN World Food Programme — Cyberattack Scope Update</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          The UN World Food Programme cyberattack is under ongoing investigation. The WFP operates in conflict zones and disaster areas globally, and its systems hold beneficiary data, aid logistics, financial partner information, and staff safety data. Humanitarian organizations globally should treat this as a targeting signal for their sector.
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">Belgian Court — Banks Must Reimburse Phishing Victims Upon Loss Report</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          A Belgian court ruled that banks must reimburse phishing victims as soon as they report a loss, regardless of whether the victim is deemed to have acted negligently. The ruling reverses the burden of proof for phishing-related bank losses in Belgium and establishes a financial accountability precedent likely to influence EU-wide banking regulation.
        </p>

        <h3 className="text-slate-100 font-semibold text-base mt-4 mb-2">OpenAI — Largest-Ever ChatGPT Overhaul Announced</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          OpenAI announced its largest-ever ChatGPT overhaul ahead of the company's anticipated public listing. The redesign includes significant interface changes and access control updates. Enterprise ChatGPT deployments should be re-validated against organizational AI usage policies following major platform updates — major updates can reset security configurations to defaults.
        </p>

        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">Critical Vulnerabilities &amp; Patch Status</h3>
        <ul className="list-disc list-inside text-slate-300 space-y-1 mb-3">
          <li><strong className="text-white">CVE-2026-20245 — Cisco Catalyst SD-WAN Manager:</strong> NO PATCH AVAILABLE. Restrict management interface to trusted administrator subnets using firewall ACLs. Remove all internet-facing management interface exposure immediately.</li>
          <li><strong className="text-white">PHP Remote Code Execution — String-Type Form Field Injection:</strong> Makes it possible for unauthenticated attackers to inject and execute arbitrary PHP code. Audit all PHP web applications for vulnerable form handling patterns.</li>
          <li><strong className="text-white">CVE-2026-28318 — SolarWinds Serv-U:</strong> CISA KEV-listed with confirmed active exploitation. Apply patches immediately.</li>
          <li><strong className="text-white">CVE-2022-0492 — Linux Kernel:</strong> CISA re-added to Known Exploited Vulnerabilities catalog based on confirmed 2026 active exploitation. Verify this 2022 vulnerability is patched across all Linux systems.</li>
          <li><strong className="text-white">CVE-2026-20230 — Cisco Unified Communications Manager:</strong> Root-level RCE. Apply patch immediately. Public proof-of-concept exploit is actively circulating.</li>
          <li><strong className="text-white">CVE-2026-42897 — Microsoft Exchange OWA Zero-Day:</strong> Permanent patch still not released. Verify EEMS automatic mitigation remains "Applied" on all Exchange Mailbox role servers.</li>
        </ul>

        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">Weekly Spotlight: The Third-Party Vendor Is Your Largest Attack Surface</h3>
        <p className="text-slate-300 leading-relaxed mb-3">
          A pattern has emerged across the breach disclosures of May and June 2026 that is too consistent to be coincidental: the initial access vector is not a zero-day in the victim's own systems. It is a phishing email to a vendor employee, a compromised third-party platform, or a malicious package in a trusted supply chain. Oxford via Group GTI. Conagra via a vendor phishing attack. Canvas via Instructure. The Oncology Institute via TriZetto.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          The perimeter your security program is designed to defend is not where the attacks are landing. Organizations apply rigorous security controls to systems they own and operate, then extend trust — often implicitly — to the vendors and service providers who connect to those systems. Annual security questionnaires, one-time certifications, and contractual security requirements create compliance documentation without creating security assurance.
        </p>
        <p className="text-slate-300 leading-relaxed mb-3">
          <strong className="text-white">What continuous third-party risk management looks like:</strong> Move from annual to continuous vendor monitoring. Apply least-privilege to all third-party access. Maintain a live third-party access inventory. Include third-party breach scenarios in incident response exercises. Require vendors to notify you within hours, not days.
        </p>

        <h3 className="text-cyan-400 font-bold text-lg mt-6 mb-2">✅ Your Action List This Week</h3>
        <p className="text-slate-300 font-semibold mb-2">P1 — Immediate (Cannot Wait):</p>
        <ul className="list-disc list-inside text-slate-300 space-y-1 mb-3">
          <li>Apply SD-WAN Manager network access controls for CVE-2026-20245. Restrict management interface to authorized administrator subnets. Remove internet-facing exposure.</li>
          <li>Audit all PHP web applications for vulnerable form handling patterns matching the newly disclosed PHP string-type injection vulnerability. Apply WAF rules as interim protection.</li>
          <li>Apply Cisco UCM patch for CVE-2026-20230 if not done last week. Public PoC exploit is actively circulating.</li>
          <li>Issue FIFA World Cup phishing advisory to all employees before the opening match.</li>
          <li>Freeze non-critical npm dependency updates this week. Audit all npm installs from June 5 onward for IronWorm campaign packages.</li>
        </ul>
        <p className="text-slate-300 font-semibold mb-2">P2 — This Week:</p>
        <ul className="list-disc list-inside text-slate-300 space-y-1 mb-3">
          <li>Apply SolarWinds Serv-U patches for CVE-2026-28318. CISA KEV-listed with confirmed active exploitation.</li>
          <li>Verify Linux kernel CVE-2022-0492 is patched across all Linux systems. CISA KEV re-addition confirms 2026 active exploitation of this 2022 flaw.</li>
          <li>Re-validate enterprise ChatGPT Lockdown Mode and usage policy configurations following OpenAI's announced major overhaul.</li>
          <li>Commission Cisco SD-WAN architecture review. Seven exploited CVEs in six months is a board-level architecture risk.</li>
          <li>Brief your board on the Cisco SD-WAN seven-CVE pattern as a board-level architecture risk item.</li>
        </ul>
        <p className="text-slate-300 font-semibold mb-2">P3 — This Month:</p>
        <ul className="list-disc list-inside text-slate-300 space-y-1 mb-3">
          <li>Implement continuous third-party vendor monitoring for your highest-risk vendors.</li>
          <li>Add a third-party breach scenario to your next incident response exercise.</li>
          <li>Review contractual vendor notification requirements — ensure breach notification timelines of hours, not 72 hours.</li>
          <li>Complete CIRCIA gap assessment. The final rule is overdue and expected imminently.</li>
        </ul>
      </>
    ),
  },
];

export default function BriefingsClient() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setExpanded(expanded === idx ? null : idx);
  };

  return (
    <div className="pb-20">
      <div className="max-w-4xl mx-auto px-4">

        {/* Page heading */}
        <div className="text-center mb-4 mt-10">
          <h1 className="text-4xl font-extrabold text-white mb-3">
            Weekly Cyber <span className="gradient-text">Briefings Archive</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Full briefings for subscribers. New issue every Monday.
          </p>
        </div>

        {/* Back link */}
        <div className="mb-10">
          <Link
            href="/cybernews"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to CyberNews
          </Link>
        </div>

        {/* Briefing cards */}
        <div className="space-y-5">
          {briefings.map((b, idx) => (
            <div key={b.issue} className="card-cyber rounded-2xl overflow-hidden">
              {/* Header bar */}
              <div className="p-6 pb-4">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-slate-500 text-xs font-mono">{b.issue}</span>
                  <span className="text-slate-400 text-xs">{b.date}</span>
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                    b.alertLevel === "CRITICAL"
                      ? "bg-red-500/15 text-red-400 border border-red-500/30"
                      : "bg-orange-500/15 text-orange-400 border border-orange-500/30"
                  }`}>
                    <AlertTriangle className="w-3 h-3" />
                    {b.alertLevel}
                  </span>
                </div>

                <h2 className="text-white font-bold text-xl mb-3 leading-snug">{b.headline}</h2>

                {/* Summary bullets */}
                <ul className="space-y-1 mb-4">
                  {b.summary.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                      <span className="text-cyan-500 mt-0.5 shrink-0">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Toggle button */}
                <button
                  onClick={() => toggle(idx)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors mt-1"
                >
                  {expanded === idx ? (
                    <>
                      Collapse Briefing <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Read Full Briefing <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Expanded full text */}
              {expanded === idx && (
                <div className="px-6 pb-8 border-t border-white/5 pt-4">
                  {b.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-slate-600 text-xs text-center mt-10">
          Written by BV Cyber Guardian · Powered by AI-assisted threat research · No spam · Unsubscribe anytime
        </p>

      </div>
    </div>
  );
}
