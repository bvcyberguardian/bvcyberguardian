"use client";
import { useEffect, useState } from "react";
import { ExternalLink, Clock, RefreshCw, AlertCircle } from "lucide-react";

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  source: string;
  sourceUrl: string;
}

function timeAgo(dateStr: string): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return "";
  const diff = Date.now() - date.getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

const SOURCE_COLORS: Record<string, string> = {
  "The Hacker News": "text-orange-400 bg-orange-500/10 border-orange-500/20",
  "Krebs on Security": "text-red-400 bg-red-500/10 border-red-500/20",
  "BleepingComputer": "text-blue-400 bg-blue-500/10 border-blue-500/20",
  "Dark Reading": "text-violet-400 bg-violet-500/10 border-violet-500/20",
};

export default function CyberNewsFeed() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState("All");

  const sources = ["All", "The Hacker News", "Krebs on Security", "BleepingComputer", "Dark Reading"];

  async function load() {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/cybernews");
      if (!res.ok) throw new Error("fetch failed");
      const data = await res.json();
      setItems(data.items ?? []);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  const filtered = filter === "All" ? items : items.filter((i) => i.source === filter);

  return (
    <div>
      {/* Filter tabs + refresh */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
        <div className="flex flex-wrap gap-2">
          {sources.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
                filter === s
                  ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-300"
                  : "bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <button
          onClick={load}
          className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </button>
      </div>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="card-cyber rounded-xl p-5 animate-pulse">
              <div className="h-3 bg-white/5 rounded mb-3 w-1/3" />
              <div className="h-4 bg-white/5 rounded mb-2 w-full" />
              <div className="h-4 bg-white/5 rounded mb-4 w-3/4" />
              <div className="h-3 bg-white/5 rounded w-full" />
              <div className="h-3 bg-white/5 rounded mt-1 w-5/6" />
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="card-cyber rounded-xl p-10 text-center">
          <AlertCircle className="w-10 h-10 text-red-400 mx-auto mb-3" />
          <p className="text-slate-300 font-medium mb-2">Could not load news feed</p>
          <p className="text-slate-500 text-sm mb-5">Check your connection and try again.</p>
          <button
            onClick={load}
            className="px-5 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 text-sm font-medium transition-all"
          >
            Try Again
          </button>
        </div>
      )}

      {!loading && !error && filtered.length === 0 && (
        <div className="text-center py-16 text-slate-500">No articles found for this source.</div>
      )}

      {!loading && !error && filtered.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, i) => {
            const colorClass = SOURCE_COLORS[item.source] ?? "text-cyan-400 bg-cyan-500/10 border-cyan-500/20";
            return (
              <a
                key={`${item.link}-${i}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-cyber rounded-xl p-5 flex flex-col group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${colorClass}`}>
                    {item.source}
                  </span>
                  {item.pubDate && (
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <Clock className="w-3 h-3" />
                      {timeAgo(item.pubDate)}
                    </span>
                  )}
                </div>
                <h3 className="text-white font-semibold text-sm leading-snug mb-2 group-hover:text-cyan-400 transition-colors line-clamp-3">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-3 flex-1">{item.description}</p>
                )}
                <div className="flex items-center gap-1 mt-3 text-xs text-cyan-400 font-medium">
                  Read full article <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
