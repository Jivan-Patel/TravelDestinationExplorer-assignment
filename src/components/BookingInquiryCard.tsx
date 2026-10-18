"use client";

import { useState } from "react";
import { Destination } from "../app/data/destination";

export default function BookingInquiryCard({ destination }: { destination: Destination }) {
  const [guests, setGuests] = useState(2);
  const [month, setMonth] = useState("Preferred Season");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-7 rounded-3xl bg-slate-900/90 border border-white/15 shadow-2xl sticky top-28">
      <div className="flex items-center justify-between pb-5 border-b border-white/10">
        <div>
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            Estimated Investment
          </span>
          <div className="text-2xl font-black text-amber-400 mt-0.5">{destination.budget}</div>
        </div>
        <div className="text-right">
          <span className="text-[11px] font-semibold text-slate-400 block">Duration</span>
          <span className="text-sm font-bold text-white">{destination.duration}</span>
        </div>
      </div>

      {submitted ? (
        <div className="mt-6 p-6 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-center">
          <div className="w-12 h-12 mx-auto rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center text-2xl mb-3">
            ✓
          </div>
          <h4 className="font-bold text-white text-base">Inquiry Dispatched</h4>
          <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
            A Senior Wanderly Expeditions Curator will contact you within 24 hours with a custom dossier for {destination.name}.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 text-xs font-semibold text-amber-400 hover:underline"
          >
            Modify Preferences
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Travel Party Size
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 4, "6+"].map((num) => (
                <button
                  type="button"
                  key={num}
                  onClick={() => setGuests(typeof num === "number" ? num : 6)}
                  className={`py-2 rounded-xl text-xs font-bold ${
                    (typeof num === "number" && guests === num) || (num === "6+" && guests === 6)
                      ? "bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20"
                      : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  {num} {num === 1 ? "Guest" : "Guests"}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Ideal Departure Window
            </label>
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              <option value="Preferred Season">Prime Season ({destination.bestTime.split("&")[0].trim()})</option>
              <option value="Next 3 Months">Next 90 Days</option>
              <option value="Upcoming Spring">Upcoming Spring</option>
              <option value="Upcoming Autumn">Upcoming Autumn</option>
              <option value="Festive Holidays">Festive Season</option>
            </select>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-amber-500/25"
            >
              Inquire For {destination.name} →
            </button>
          </div>
        </form>
      )}

      {/* Trust Guarantees */}
      <div className="mt-6 pt-5 border-t border-white/10 space-y-2.5 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="text-emerald-400">✓</span>
          <span>Bespoke 1-on-1 Resident Guide Curation</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-emerald-400">✓</span>
          <span>Flexible Rescheduling & Travel Shield</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-emerald-400">✓</span>
          <span>Certified 100% Carbon-Neutral Itinerary</span>
        </div>
      </div>
    </div>
  );
}
