import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations } from "../../data/destination";
import BookingInquiryCard from "@/components/BookingInquiryCard";

export function generateStaticParams() {
  return destinations.map((d) => ({
    id: String(d.id),
  }));
}

type DestinationDetailsProps = {
  params: Promise<{ id: string }>;
};

export default async function DestinationDetails({
  params,
}: DestinationDetailsProps) {
  const { id } = await params;

  const destination = destinations.find(
    (item) => item.id === Number(id)
  );

  if (!destination) {
    notFound();
  }

  const relatedDestinations = destinations
    .filter(
      (d) =>
        d.id !== destination.id &&
        (d.continent === destination.continent || d.category === destination.category)
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6">
          <Link href="/" className="hover:text-amber-400">
            Home
          </Link>
          <span>/</span>
          <Link href="/destinations" className="hover:text-amber-400">
            All 50 Destinations
          </Link>
          <span>/</span>
          <span className="text-slate-300 font-semibold">{destination.continent}</span>
          <span>/</span>
          <span className="text-amber-400 font-bold">{destination.name}</span>
        </nav>

        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10"
          >
            <span>←</span> Back to Atlas (50 Destinations)
          </Link>
        </div>

        {/* Hero Showcase Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
          <div className="lg:col-span-2 relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

            {/* Badges Overlay */}
            <div className="absolute top-6 left-6 flex flex-wrap gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md text-xs font-bold text-amber-300 border border-white/10">
                📍 {destination.country}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-emerald-950/80 backdrop-blur-md text-xs font-medium text-emerald-300 border border-emerald-500/20">
                {destination.travelStyle}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-slate-200">
                {destination.category}
              </span>
            </div>

            <div className="absolute top-6 right-6 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md text-sm font-bold text-white border border-white/10 flex items-center gap-1.5 shadow-lg">
              <span className="text-amber-400">★</span> {destination.rating}
              <span className="text-xs text-slate-400 font-normal">({destination.reviewsCount} reviews)</span>
            </div>

            {/* Hero Title and Tagline on Image */}
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-bold text-amber-400 tracking-widest uppercase block mb-1">
                {destination.continent} Expedition
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                {destination.name}
              </h1>
              <p className="text-sm sm:text-base text-slate-300 italic mt-1 max-w-2xl">
                "{destination.tagline}"
              </p>
            </div>
          </div>

          {/* Secondary Gallery Images */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {destination.gallery.slice(0, 2).map((imgUrl, idx) => (
              <div
                key={idx}
                className="relative h-[180px] sm:h-[232px] rounded-3xl overflow-hidden border border-white/10 group"
              >
                <img
                  src={imgUrl}
                  alt={`${destination.name} view ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-[11px] font-semibold text-slate-300">
                  {idx === 0 ? "Signature Atmosphere" : "Cultural Perspective"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Facts Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-xl shadow-xl mb-12">
          <div className="border-r border-white/5 pr-4">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Best Time to Visit
            </span>
            <span className="text-base font-extrabold text-white mt-1 block">
              {destination.bestTime}
            </span>
            <span className="text-[11px] text-amber-400/90 mt-0.5 block">Ideal Climate & Light</span>
          </div>

          <div className="border-r border-white/5 pr-4">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Suggested Duration
            </span>
            <span className="text-base font-extrabold text-white mt-1 block">
              {destination.duration}
            </span>
            <span className="text-[11px] text-slate-400 mt-0.5 block">Immersive Pace</span>
          </div>

          <div className="border-r border-white/5 pr-4">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Estimated Budget
            </span>
            <span className="text-base font-extrabold text-amber-400 mt-1 block">
              {destination.budget}
            </span>
            <span className="text-[11px] text-slate-400 mt-0.5 block">Per traveler</span>
          </div>

          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Expedition Style
            </span>
            <span className="text-base font-extrabold text-emerald-400 mt-1 block">
              {destination.travelStyle}
            </span>
            <span className="text-[11px] text-slate-400 mt-0.5 block">{destination.category}</span>
          </div>
        </div>

        {/* Two-Column Main Layout: Narrative + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-20">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            {/* Story & Essence */}
            <section className="p-8 rounded-3xl bg-slate-900/60 border border-white/10">
              <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
                The Expedition Essence
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1 tracking-tight">
                About {destination.name}
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mt-4 font-normal">
                {destination.longDescription}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mt-3">
                {destination.description}
              </p>
            </section>

            {/* Signature Experiences / Highlights */}
            <section className="p-8 rounded-3xl bg-slate-900/60 border border-white/10">
              <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
                Curated Moments
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1 tracking-tight">
                Signature Experiences You Can't Miss
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1 mb-6">
                Exclusive moments arranged by Wanderly's senior field partners.
              </p>

              <div className="space-y-4">
                {destination.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20 flex items-center justify-center font-bold text-sm shrink-0">
                      0{index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">{highlight}</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Private, priority-access arrangements with certified local guides and naturalists.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Top Attractions Cards */}
            <section className="p-8 rounded-3xl bg-slate-900/60 border border-white/10">
              <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
                Iconic Sights
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1 tracking-tight">
                Must-Visit Landmarks & Natural Wonders
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {destination.attractions.map((attraction, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3.5"
                  >
                    <span className="text-emerald-400 text-lg">✦</span>
                    <div>
                      <div className="font-bold text-white text-sm">{attraction}</div>
                      <div className="text-[11px] text-slate-400">Featured Wonder</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Suggested 3-Day Journey Outline */}
            <section className="p-8 rounded-3xl bg-slate-900/60 border border-white/10">
              <span className="text-xs font-bold tracking-widest text-teal-400 uppercase">
                Sample Blueprint
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1 tracking-tight">
                Curated 3-Day Highlights Itinerary
              </h2>
              <div className="mt-6 space-y-6">
                <div className="relative pl-6 border-l-2 border-amber-400/40">
                  <span className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-amber-400" />
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">Day 01</span>
                  <h4 className="text-base font-bold text-white mt-0.5">Arrival, Sanctuary Check-in & Sunset Welcome</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Private VIP escort to your boutique haven, settling in with locally inspired welcome refreshments, followed by an evening golden hour view.
                  </p>
                </div>

                <div className="relative pl-6 border-l-2 border-emerald-400/40">
                  <span className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Day 02</span>
                  <h4 className="text-base font-bold text-white mt-0.5">Deep Cultural Immersion & Signature Excursion</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Early access to {destination.attractions[0]} before crowds arrive, followed by {destination.highlights[0]} and an artisanal gastronomy lunch.
                  </p>
                </div>

                <div className="relative pl-6 border-l-2 border-teal-400/40">
                  <span className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-teal-400" />
                  <span className="text-xs font-bold text-teal-300 uppercase tracking-wider">Day 03</span>
                  <h4 className="text-base font-bold text-white mt-0.5">Nature Trek & Starlit Farewell Gathering</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Morning excursion visiting {destination.attractions[1] || destination.attractions[0]}, leisurely afternoon wellness retreat, and private twilight dinner.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar: Booking Inquiry Card */}
          <div className="lg:col-span-1">
            <BookingInquiryCard destination={destination} />
          </div>
        </div>

        {/* Related Havens */}
        {relatedDestinations.length > 0 && (
          <section className="pt-16 border-t border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
                  Continue Exploring
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  Similar Havens You'll Adore
                </h3>
              </div>
              <Link
                href="/destinations"
                className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1"
              >
                <span>View all 50 Havens</span>
                <span>→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedDestinations.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/destinations/${rel.id}`}
                  className="group rounded-3xl overflow-hidden bg-slate-900/70 border border-white/10 hover:border-amber-400/40 flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={rel.image}
                      alt={rel.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-amber-300">
                      {rel.country}
                    </span>
                    <span className="absolute bottom-3 right-3 text-xs font-bold text-white bg-slate-950/80 px-2 py-0.5 rounded-md">
                      ★ {rel.rating}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">
                        {rel.category}
                      </span>
                      <h4 className="text-lg font-bold text-white mt-0.5 group-hover:text-amber-300">
                        {rel.name}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2">{rel.description}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                      <span className="text-amber-400 font-bold">{rel.budget}</span>
                      <span className="text-emerald-400 font-semibold">
                        Explore →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
