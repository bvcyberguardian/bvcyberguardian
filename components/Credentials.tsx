import { ExternalLink, BadgeCheck, Brain } from "lucide-react";

const courses = [
  "AI Fundamentals",
  "AI for Brainstorming and Planning",
  "AI for Research and Insights",
  "AI for Writing and Communicating",
  "AI for Content Creation",
  "AI for Data Analysis",
  "AI for App Building",
];

export default function Credentials() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-white mb-3">
          AI <span className="gradient-text">Certified</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Our team holds verified AI credentials — ensuring we apply the latest AI-powered tools to protect your digital world.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="card-cyber rounded-2xl p-6 w-full max-w-2xl flex flex-col gap-5">

          {/* Issuer header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 via-red-500 to-yellow-400 flex items-center justify-center font-extrabold text-white text-xl shadow-lg">
                G
              </div>
              <div>
                <div className="text-white font-bold">Google</div>
                <div className="text-slate-500 text-xs">via Coursera · Issued Jun 2026</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full">
              <BadgeCheck className="w-3.5 h-3.5" />
              Verified
            </div>
          </div>

          {/* Title */}
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500/10 shrink-0 mt-0.5">
              <Brain className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg leading-snug">Google AI Professional Certificate</h3>
              <p className="text-cyan-400 text-sm font-medium mt-0.5">BV Cyber Guardian Team</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed">
            Certified across 7 AI courses — demonstrating the ability to apply AI tools responsibly to threat research, communication, content analysis, data insights, and custom AI solution development. Includes a portfolio of 20+ AI-built artifacts.
          </p>

          {/* 7 courses grid */}
          <div>
            <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-2">7 Courses Completed</p>
            <div className="flex flex-wrap gap-2">
              {courses.map((c) => (
                <span key={c} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Verify link */}
          <a
            href="https://coursera.org/verify/professional-cert/E1X3CT7CPB7Q"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <BadgeCheck className="w-4 h-4" />
            Verify this certificate on Coursera
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
