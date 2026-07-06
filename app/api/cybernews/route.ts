import { NextRequest } from "next/server";

interface FeedItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  source: string;
  sourceUrl: string;
}

const feeds = [
  { name: "The Hacker News",    url: "https://feeds.feedburner.com/TheHackersNews",                   site: "thehackernews.com" },
  { name: "Krebs on Security",  url: "https://krebsonsecurity.com/feed/",                             site: "krebsonsecurity.com" },
  { name: "BleepingComputer",   url: "https://www.bleepingcomputer.com/feed/",                        site: "bleepingcomputer.com" },
  { name: "Dark Reading",       url: "https://www.darkreading.com/rss.xml",                           site: "darkreading.com" },
  { name: "The Record",         url: "https://therecord.media/feed",                                  site: "therecord.media" },
  { name: "SecurityWeek",       url: "https://feeds.feedburner.com/securityweek",                     site: "securityweek.com" },
  { name: "CISA Alerts",        url: "https://www.cisa.gov/cybersecurity-advisories/all.xml",         site: "cisa.gov" },
  { name: "Microsoft Security", url: "https://www.microsoft.com/en-us/security/blog/feed/",           site: "microsoft.com/security" },
  { name: "Bitdefender Labs",   url: "https://www.bitdefender.com/blog/labs/feed/",                   site: "bitdefender.com" },
  { name: "NIST NVD",           url: "https://nvd.nist.gov/feeds/xml/cve/misc/nvd-rss-analyzed.xml", site: "nvd.nist.gov" },
];

function parseXml(xml: string, sourceName: string, sourceSite: string): FeedItem[] {
  const items: FeedItem[] = [];
  const itemMatches = xml.matchAll(/<item>([\s\S]*?)<\/item>/g);

  for (const match of itemMatches) {
    const item = match[1];

    const titleMatch = item.match(/<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/);
    const linkMatch = item.match(/<link>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/link>/) ||
      item.match(/<guid[^>]*>(?:<!\[CDATA\[)?(https?:\/\/[^\s<]+)(?:\]\]>)?<\/guid>/);
    const dateMatch = item.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
    const descMatch = item.match(/<description>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/description>/);

    if (titleMatch && linkMatch) {
      const rawDesc = descMatch?.[1] ?? "";
      // decode entities first (handles double-encoded HTML like CISA feed)
      const decoded = rawDesc
        .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ");
      const cleanDesc = decoded
        // strip CDATA wrappers
        .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
        // strip all HTML tags
        .replace(/<[^>]+>/g, " ")
        // strip leftover code/markup artifacts
        .replace(/\{[^}]*\}/g, "").replace(/\[[^\]]*\]/g, "")
        .replace(/\s+/g, " ").trim().slice(0, 180);

      items.push({
        title: titleMatch[1].replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").trim(),
        link: linkMatch[1].trim(),
        pubDate: dateMatch?.[1]?.trim() ?? "",
        description: cleanDesc,
        source: sourceName,
        sourceUrl: `https://${sourceSite}`,
      });
    }

    if (items.length >= 6) break;
  }

  return items;
}

export async function GET(_req: NextRequest) {
  const results = await Promise.allSettled(
    feeds.map(async (feed) => {
      const res = await fetch(feed.url, {
        next: { revalidate: 1800 },
        headers: { "User-Agent": "BVCyberGuardian/1.0 RSS Reader" },
        signal: AbortSignal.timeout(6000),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const xml = await res.text();
      return parseXml(xml, feed.name, feed.site);
    })
  );

  const allItems: FeedItem[] = [];
  for (const result of results) {
    if (result.status === "fulfilled") allItems.push(...result.value);
  }

  const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;

  const filtered = allItems.filter((item) => {
    if (!item.pubDate) return false;
    const t = new Date(item.pubDate).getTime();
    return !isNaN(t) && t >= oneWeekAgo;
  });

  filtered.sort((a, b) => {
    const da = new Date(a.pubDate).getTime();
    const db = new Date(b.pubDate).getTime();
    return db - da;
  });

  return Response.json({ items: filtered });
}
