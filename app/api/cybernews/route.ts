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
  { name: "The Hacker News", url: "https://feeds.feedburner.com/TheHackersNews", site: "thehackernews.com" },
  { name: "Krebs on Security", url: "https://krebsonsecurity.com/feed/", site: "krebsonsecurity.com" },
  { name: "BleepingComputer", url: "https://www.bleepingcomputer.com/feed/", site: "bleepingcomputer.com" },
  { name: "Dark Reading", url: "https://www.darkreading.com/rss.xml", site: "darkreading.com" },
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
      const cleanDesc = rawDesc
        .replace(/<[^>]+>/g, "")
        .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'")
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

    if (items.length >= 8) break;
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

  allItems.sort((a, b) => {
    const da = a.pubDate ? new Date(a.pubDate).getTime() : 0;
    const db = b.pubDate ? new Date(b.pubDate).getTime() : 0;
    return db - da;
  });

  return Response.json({ items: allItems.slice(0, 30) });
}
