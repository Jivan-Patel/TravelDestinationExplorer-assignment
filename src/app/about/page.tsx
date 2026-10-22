import Link from "next/link";

export default function AboutPage() {
  const curators = [
    {
      name: "Aria Montgomery",
      role: "Lead Curator & Alpine Specialist",
      region: "Europe & Nordic Fjords",
      bio: "Former mountaineering guide with 14 years exploring the Swiss Alps, Dolomites, and subarctic Norway.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Kenji Takahashi",
      role: "Director of Cultural Expeditions",
      region: "East & Southeast Asia",
      bio: "Heritage historian specializing in Japanese Shinto temple preserves and Southeast Asian temple cities.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Zahra Al-Mansoor",
      role: "Head of Safari & Desert Havens",
      region: "Africa & Middle East",
      bio: "Ecological researcher dedicated to wildlife migration corridors and sustainable luxury tented camps.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    },
  ];

  const pillars = [
    {
      icon: "💎",
      title: "Radical Curation",
      desc: "We deliberately cap our portfolio at 50 destinations. If a haven cannot offer life-defining wonder, it has no place in our atlas.",
    },
    {
      icon: "🌿",
      title: "Regenerative Exploration",
      desc: "Every expedition is 100% carbon-balanced and directly funds habitat restoration and indigenous craft preservation.",
    },
    {
      icon: "🗝️",
      title: "Unrivaled Access",
      desc: "From after-hours temple contemplation to private vineyard cellars, our connections unlock what money alone cannot buy.",
    },
    {
      icon: "🤝",
      title: "Human Reverence",
      desc: "We travel not as mere spectators, but as humble guests honoring local customs, folklore, and living traditions.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 py-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10 pb-20 pt-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-bold tracking-widest uppercase mb-6">
            <span>✦</span> The Wanderly Manifesto
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Curating Wonder Across All 7 Continents
          </h1>
          <p className="text-slate-300 text-base sm:text-xl mt-6 leading-relaxed">
            Wanderly was created for those who believe true travel is an art form. We reject cookie-cutter tourism in favor of deeply personal, soul-stirring odysseys.
          </p>
        </div>
      </section>

      {/* Narrative Section with Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[420px] sm:h-[500px] rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80"
              alt="Majestic mountain landscape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                The Founder's Pledge
              </span>
              <p className="text-xs text-slate-300 mt-1 italic">
                "We don't count places visited; we count how deeply each place leaves its imprint upon your spirit."
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Why We Limit Our Atlas To Exactly 50 Havens
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              In an era of endless, algorithmic search results, travelers are drowning in options but starved for genuine inspiration. Most online guides recycle generic tourist traps.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              We took the opposite path: radical selectivity. Our team of regional curators spent seven years exploring hundreds of locations, whittling down the list to exactly 50 destinations that possess extraordinary natural majesty, vibrant cultural authenticity, and unforgettable hospitality.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Whether it's walking the silent lantern-lit streets of Kyoto at dawn or navigating the calving ice of Antarctica, every entry in our atlas represents the pinnacle of global travel.
            </p>

            <div className="pt-4">
              <Link
                href="/destinations"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20"
              >
                <span>Browse The 50 Havens</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Pillars */}
      <section className="bg-[#090e1a] border-y border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
              The Wanderly Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">
              Our Core Philosophical Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-amber-400/40 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl mb-5">
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-12 rounded-3xl bg-gradient-to-tr from-slate-900 via-emerald-950/40 to-slate-900 border border-white/15 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Ready To Write Your Next Chapter?
          </h2>
          <p className="text-slate-300 text-sm mt-3 max-w-xl mx-auto">
            Discover the 50 havens that define modern world exploration. Your extraordinary journey begins now.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/destinations"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/25"
            >
              Explore All 50 Destinations →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 pt-10 pb-12 text-center text-xs text-slate-500">
        © 2026 Wanderly Luxe. Curating Earth's Most Enchanting Havens.
      </footer>
    </div>
  );
}
