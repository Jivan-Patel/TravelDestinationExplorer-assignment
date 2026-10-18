import Link from "next/link";
import { destinations } from "../data/destination";

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 py-12">
      {/* Header Banner */}
      <section className="relative overflow-hidden border-b border-white/10 pb-16 pt-8">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 blur-[130px] pointer-events-none rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-bold tracking-widest uppercase mb-4">
              <span>✦</span> The 50 Havens Atlas
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
              All 50 World Destinations
            </h1>
            <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
              Explore our complete portfolio of 50 handpicked destinations across 7 continents.
              From dramatic subarctic fjords and tropical atolls to imperial temples and untamed savannas.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Displaying all <strong>50 of 50</strong> curated global havens</span>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid (All 50 items displayed directly) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <article
              key={destination.id}
              className="group relative rounded-3xl overflow-hidden bg-slate-900/70 border border-white/10 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between"
            >
              {/* Image Section */}
              <div>
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Country & Continent Pill */}
                  <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5">
                    <span className="px-3 py-1 rounded-full bg-slate-950/85 text-[11px] font-bold text-amber-300 border border-white/10">
                      {destination.country}
                    </span>
                    <span className="px-2 py-1 rounded-full bg-white/10 text-[10px] font-medium text-slate-300">
                      {destination.continent}
                    </span>
                  </div>

                  {/* Rating Pill */}
                  <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-slate-950/85 text-xs font-bold text-white border border-white/10 flex items-center gap-1">
                    <span className="text-amber-400">★</span> {destination.rating}
                  </div>

                  {/* Bottom Duration & Price */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs text-slate-300">
                    <span className="bg-slate-950/80 px-2 py-0.5 rounded-md text-[11px] flex items-center gap-1">
                      ⏱️ {destination.duration}
                    </span>
                    <span className="font-bold text-amber-400 text-xs bg-slate-950/90 px-2.5 py-1 rounded-lg border border-white/10">
                      {destination.budget}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    <span>{destination.category}</span>
                    <span className="text-emerald-400 font-semibold">{destination.travelStyle}</span>
                  </div>

                  <h2 className="text-2xl font-black text-white mt-1 group-hover:text-amber-300">
                    {destination.name}
                  </h2>
                  <p className="text-xs italic text-amber-300/80 mt-0.5 line-clamp-1">
                    {destination.tagline}
                  </p>

                  <p className="text-slate-400 text-xs sm:text-sm mt-3 line-clamp-2 leading-relaxed">
                    {destination.description}
                  </p>

                  {/* Attractions tags preview */}
                  <div className="mt-4 flex flex-wrap gap-1">
                    {destination.attractions.slice(0, 3).map((attr) => (
                      <span
                        key={attr}
                        className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-slate-300 border border-white/5"
                      >
                        {attr}
                      </span>
                    ))}
                    {destination.attractions.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded-md bg-white/5 text-[10px] text-slate-500">
                        +{destination.attractions.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer Link */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    Best season: <span className="text-slate-200">{destination.bestTime.split("&")[0]}</span>
                  </span>
                  <Link
                    href={`/destinations/${destination.id}`}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-amber-400 hover:text-slate-950 font-bold text-xs text-white flex items-center gap-1 shadow-md"
                  >
                    <span>Explore</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer Info Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 text-center border-t border-white/5">
        <p className="text-xs text-slate-500">
          Showing all 50 handcrafted expeditions. All images licensed under Unsplash. Wanderly Luxe Curations.
        </p>
      </section>
    </div>
  );
}
