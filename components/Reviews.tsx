import { Star, ExternalLink } from "lucide-react";

/*
 * To show LIVE Google reviews, add your Google Places API key and Place ID
 * to .env.local:
 *   GOOGLE_PLACES_API_KEY=your_key_here
 *   GOOGLE_PLACE_ID=your_place_id_here
 *
 * Then swap the static `reviews` array below for a server fetch:
 *   const res = await fetch(
 *     `https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.GOOGLE_PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${process.env.GOOGLE_PLACES_API_KEY}`
 *   );
 *
 * Until then, replace these placeholder reviews with real ones copied from
 * your Google Business profile — same layout, same stars, same impact.
 */

const reviews = [
  {
    name: "Gents Barber Studio",
    role: "Small Business, NY",
    rating: 5,
    text: "We're barbers, not tech experts, and BV CyberGuardian makes cybersecurity easy to understand. They explained everything clearly and set up protections that fit our needs. Their customer service is good. Our client data is safe, and that's priceless for our reputation. One less thing to worry about.",
  },
  {
    name: "Jennifer Knight",
    role: "Home User",
    rating: 5,
    text: "It has been a pleasure to work with Sergio at BVCyberGuardian. As someone who doesn't have access to IT expertise through work, it's given me a great sense of security to know that my devices are safe and that I can reach out anytime. I HIGHLY RECOMMEND their reliable and reasonable services!",
  },
  {
    name: "Chiqui Cartagena",
    role: "Personal Client",
    rating: 5,
    text: "I HIGHLY recommend this team! I have been working with Sergio for the past six months and could not be happier with his incredible, professional services! With all the advances in technology I was feeling vulnerable, but working with BV CyberGuardian I now feel like I'm in control again and super protected.",
  },
  {
    name: "Anggela Riveros",
    role: "Office Manager, Arrow Financial Services",
    rating: 5,
    text: "I can't say enough good things about BV CyberGuardian! Since partnering with them, I've felt a huge weight lifted off my shoulders. Their team is incredibly knowledgeable and responsive — monitoring our systems 24/7 and providing proactive alerts. Their free threat analysis really opened my eyes to vulnerabilities I wasn't aware of.",
  },
];

const GOOGLE_REVIEW_URL = "https://g.page/r/CZOakkW-S2_tEBM/review";

export default function Reviews() {
  const avgRating = 5.0;
  const totalReviews = reviews.length;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-white mb-3">
          Trusted by Clients Across <span className="gradient-text">NY &amp; NJ</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-4">
          Real protection. Real results. Here&apos;s what our clients say.
        </p>

        {/* Google aggregate rating */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-white font-bold">{avgRating.toFixed(1)}</span>
          <span className="text-slate-400 text-sm">on Google</span>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 text-sm hover:text-cyan-300 flex items-center gap-1 transition-colors"
          >
            See all reviews <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Review cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {reviews.map((r) => (
          <div key={r.name} className="card-cyber rounded-2xl p-5 flex flex-col gap-4">
            {/* Stars */}
            <div className="flex gap-0.5">
              {[...Array(r.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            {/* Quote */}
            <p className="text-slate-300 text-sm leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
            {/* Reviewer */}
            <div className="border-t border-white/5 pt-3">
              <div className="text-white font-semibold text-sm">{r.name}</div>
              <div className="text-slate-500 text-xs mt-0.5">{r.role}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Google CTA */}
      <div className="text-center mt-8">
        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          View all our Google reviews
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
