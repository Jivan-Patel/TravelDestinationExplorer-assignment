import Link from "next/link";

export default function Footer() {

    return (
        <footer className="bg-[#050810] border-t border-white/10 pt-16 pb-12 text-slate-400 text-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-white font-extrabold text-xl">
                            <span className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-black text-base">
                                ✦
                            </span>
                            WANDERLY
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            The premier travel discovery platform. Curating 50 peerless destinations across 7 continents with passion, precision, and respect for our living planet.
                        </p>
                        <div className="text-xs text-emerald-400 font-semibold">
                            ✓ 100% Carbon-Neutral Travel Intelligence
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Explore Havens</h4>
                        <ul className="space-y-2 text-xs">
                            <li><Link href="/destinations" className="hover:text-amber-400">Europe (14 Havens)</Link></li>
                            <li><Link href="/destinations" className="hover:text-amber-400">Asia (11 Havens)</Link></li>
                            <li><Link href="/destinations" className="hover:text-amber-400">North America (5 Havens)</Link></li>
                            <li><Link href="/destinations" className="hover:text-amber-400">South America (5 Havens)</Link></li>
                            <li><Link href="/destinations" className="hover:text-amber-400">Africa (6 Havens)</Link></li>
                            <li><Link href="/destinations" className="hover:text-amber-400">Oceania (6 Havens)</Link></li>
                            <li><Link href="/destinations" className="hover:text-amber-400">Antarctica (3 Havens)</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Travel Collections</h4>
                        <ul className="space-y-2 text-xs">
                            <li><Link href="/destinations" className="hover:text-amber-400">Beaches & Islands</Link></li>
                            <li><Link href="/destinations" className="hover:text-amber-400">Mountains & Alpine</Link></li>
                            <li><Link href="/destinations" className="hover:text-amber-400">History & Living Heritage</Link></li>
                            <li><Link href="/destinations" className="hover:text-amber-400">Wildlife Expeditions</Link></li>
                            <li><Link href="/destinations" className="hover:text-amber-400">Culinary & Romance</Link></li>
                            <li><Link href="/destinations" className="hover:text-amber-400">Modern & Luxury Escapes</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">About & Concierge</h4>
                        <ul className="space-y-2 text-xs">
                            <li><Link href="/about" className="hover:text-amber-400">Our Ethos & Team</Link></li>
                            <li><Link href="/about#standards" className="hover:text-amber-400">The Wanderly Standards</Link></li>
                            <li><Link href="/destinations" className="hover:text-amber-400">All 50 Curations</Link></li>
                            <li className="pt-2 text-slate-500">Concierge Desk: concierge@wanderlyluxe.com</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
                    <div>© 2026 Wanderly Luxe Inc. All Rights Reserved. Explore fearlessly.</div>
                    <div className="flex gap-6">
                        <span>Privacy Policy</span>
                        <span>Terms of Expedition</span>
                        <span>Sustainability Charter</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}