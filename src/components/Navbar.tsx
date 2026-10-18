"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/destinations", label: "All 50 Destinations" },
    { href: "/about", label: "About Wanderly" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 ${
        isScrolled
          ? "bg-[#070b14] border-b border-white/10 shadow-2xl shadow-black/50 py-3.5"
          : "bg-transparent border-b border-white/5 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-white tracking-tight"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-emerald-400 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-amber-500/20">
              ✦
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-wider text-white flex items-center gap-1.5">
                WANDERLY
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20">
                  50 Havens
                </span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">
                Global Travel Curations
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] p-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                    isActive
                      ? "bg-amber-400 text-slate-950 font-semibold shadow-md shadow-amber-400/20"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/destinations"
              className="px-5 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25 flex items-center gap-2"
            >
              <span>Explore Escapes</span>
              <span>→</span>
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 pt-2 pb-6 bg-[#070b14] border-b border-white/10">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium ${
                    isActive
                      ? "bg-amber-400 text-slate-950 font-bold"
                      : "text-slate-200 hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2 mt-2 border-t border-white/10">
              <Link
                href="/destinations"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block text-center py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 font-bold text-white shadow-lg shadow-emerald-500/25"
              >
                Explore 50 Destinations →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}