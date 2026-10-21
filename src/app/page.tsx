"use client";

import Link from "next/link";
import { destinations } from "./data/destination";

export default function Home() {
  const featuredDestinations = destinations.slice(0, 6);

  const categories = [
    { name: "Beaches & Islands", icon: "🏝️", desc: "Turquoise lagoons & powdery sands", count: 12 },
    { name: "Mountains & Hiking", icon: "🏔️", desc: "Alpine summits & glacial lakes", count: 9 },
    { name: "History & Culture", icon: "🏛️", desc: "Ancient wonders & living traditions", count: 14 },
    { name: "Wildlife & Safari", icon: "🦁", desc: "Untamed savannas & marine reserves", count: 5 },
    { name: "Culinary & Romance", icon: "🍷", desc: "Gastronomic capitals & sunsets", count: 6 },
    { name: "Modern & Luxury", icon: "✨", desc: "Skyline architecture & world-class style", count: 4 },
  ];

  const continents = [
    { name: "Europe", count: 14, icon: "🏰" },
    { name: "Asia", count: 11, icon: "⛩️" },
    { name: "North America", count: 5, icon: "🌲" },
    { name: "South America", count: 5, icon: "🦜" },
    { name: "Africa", count: 6, icon: "🐘" },
    { name: "Oceania", count: 6, icon: "🌊" },
    { name: "Antarctica", count: 3, icon: "❄️" },
  ];

  const testimonials = [
    {
      quote:
        "Wanderly's Kyoto itinerary was nothing short of transformative. From the dawn walk through the Torii gates to our private tea master in Gion, every second felt like magic.",
      author: "Elena Rostova",
      title: "Solo Cultural Explorer",
      destination: "Kyoto, Japan",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
    },
    {
      quote:
        "The Swiss Alps guide led us to hidden trails and high-altitude fondue chalets that regular tourists never see. Unmatched attention to detail and zero stress.",
      author: "Marcus & Sophia Vance",
      title: "Alpine Adventure Travelers",
      destination: "Swiss Alps & Zermatt",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    },
    {
      quote:
        "Seeing the Serengeti migration from a hot air balloon was a bucket-list dream fulfilled. Wanderly's recommendations for eco-glamping were 100% on point.",
      author: "Dr. Aris Thorne",
      title: "Wildlife Photographer",
      destination: "Serengeti, Tanzania",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background Hero Image with Deep Contrast Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2400&q=85"
            alt="Scenic Mountain Lake"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/70 to-[#070b14]/40" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#070b14]/50 to-[#070b14]" />
        </div>

        {/* Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[300px] bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center flex flex-col items-center">
          {/* Top Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-8 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-xs font-bold tracking-widest text-amber-300 uppercase">
              Curating 50 World Havens Across 7 Continents
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.08] max-w-5xl mb-6">
            Wander Without Limits.{" "}
            <span className="bg-gradient-to-r from-amber-300 via-emerald-300 to-teal-200 bg-clip-text text-transparent">
              Discover The Unseen.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-10">
            Handcrafted destination intelligence, verified itineraries, and signature experiences.
            From sacred Kyoto bamboo groves to roaring Patagonian glaciers.
          </p>

          {/* Quick Explorer CTA bar */}
          <div className="w-full max-w-4xl p-2.5 sm:p-3 rounded-2xl bg-slate-900/80 border border-white/15 shadow-2xl shadow-black/80 flex flex-col sm:flex-row items-center gap-3">
            <div className="flex-1 w-full flex items-center gap-3 px-4 py-2.5 bg-white/5 rounded-xl border border-white/10 text-left">
              <span className="text-amber-400 text-lg">🔍</span>
              <div className="flex-1">
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Dream Destination</div>
                <div className="text-sm font-medium text-slate-200">Kyoto, Amalfi, Patagonia, Serengeti...</div>
              </div>
            </div>

            <div className="flex-1 w-full flex items-center gap-3 px-4 py-2.5 bg-white/5 rounded-xl border border-white/10 text-left">
              <span className="text-emerald-400 text-lg">🌍</span>
              <div className="flex-1">
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Geographic Reach</div>
                <div className="text-sm font-medium text-slate-200">All 7 Continents Available</div>
              </div>
            </div>

            <Link
              href="/destinations"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/25 whitespace-nowrap text-center"
            >
              Browse 50 Havens →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations Showcase */}
      <section className="py-24 relative bg-[#070b14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Handpicked Highlights</span>
              <h2 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
                Top Trending Global Escapes
              </h2>
              <p className="text-slate-400 text-sm mt-3 max-w-xl">
                The most celebrated destinations of the season, praised for untouched natural beauty, culture, and luxury retreats.
              </p>
            </div>
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 text-sm font-semibold w-fit"
            >
              <span>Explore All 50 Havens</span>
              <span>→</span>
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <article
                key={destination.id}
                className="group relative rounded-3xl overflow-hidden bg-slate-900/80 border border-white/10 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col"
              >
                {/* Image Container with Badges */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] font-bold text-amber-300 border border-white/10">
                      {destination.country}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 backdrop-blur-md text-[11px] font-medium text-emerald-300 border border-emerald-500/20">
                      {destination.travelStyle}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-xs font-bold text-white border border-white/10 flex items-center gap-1 shadow-lg">
                    <span className="text-amber-400">★</span> {destination.rating}
                  </div>

                  {/* Bottom Duration & Price Over Image */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                    <span className="flex items-center gap-1">
                      <span>⏱️</span> {destination.duration}
                    </span>
                    <span className="font-bold text-amber-400 text-sm bg-slate-950/90 px-2.5 py-1 rounded-lg border border-white/10">
                      {destination.budget}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                      {destination.category}
                    </span>
                    <h3 className="text-2xl font-black text-white mt-1 group-hover:text-amber-300">
                      {destination.name}
                    </h3>
                    <p className="text-xs italic text-amber-400/90 mt-0.5">{destination.tagline}</p>
                    <p className="text-slate-400 text-sm mt-3 line-clamp-2 leading-relaxed">
                      {destination.description}
                    </p>

                    {/* Highlights Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {destination.attractions.slice(0, 3).map((attr) => (
                        <span
                          key={attr}
                          className="px-2 py-0.5 rounded-md bg-white/5 text-[11px] text-slate-300 border border-white/5"
                        >
                          ✦ {attr}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Link */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                      Best: <strong className="text-slate-200">{destination.bestTime.split("&")[0]}</strong>
                    </span>
                    <Link
                      href={`/destinations/${destination.id}`}
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-amber-400 hover:text-slate-950 font-bold text-xs text-white flex items-center gap-1.5"
                    >
                      <span>View Details</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-500/20"
            >
              <span>Explore All 50 Global Destinations</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Modern Luxury Footer */}
      
    </div>
  );
}
