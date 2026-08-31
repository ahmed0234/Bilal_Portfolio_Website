"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LuCalendar, LuMenu, LuX } from "react-icons/lu";

/* ------------------------------------------------------------------ */
/* 1. Geometric Faceted Logo Icon (matches reference)                */
/* ------------------------------------------------------------------ */
const LogoIcon: React.FC = () => (
  <div className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8">
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      className="overflow-visible"
    >
      <defs>
        <linearGradient id="navLogoLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#155EEF" />
        </linearGradient>
        <linearGradient id="navLogoRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C2FF" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
        <filter id="navLogoGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="2.5"
            floodColor="#00C2FF"
            floodOpacity="0.85"
          />
        </filter>
      </defs>

      {/* Left facet */}
      <path
        d="M16 3 L5 27 L11.5 27 L16 15 Z"
        fill="url(#navLogoLeft)"
        filter="url(#navLogoGlow)"
      />
      {/* Right facet */}
      <path
        d="M16 3 L27 27 L20.5 27 L16 15 Z"
        fill="url(#navLogoRight)"
        filter="url(#navLogoGlow)"
      />
      {/* Inner crossbar */}
      <path
        d="M10.5 20 L21.5 20 L19.5 16.5 L12.5 16.5 Z"
        fill="#7DD3FC"
        opacity="0.95"
      />
      {/* Apex sparkle glint */}
      <circle cx="16" cy="4" r="1.5" fill="#FFFFFF" />
      <path
        d="M16 1 L16 7 M13 4 L19 4"
        stroke="#FFFFFF"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  </div>
);

/* ------------------------------------------------------------------ */
/* 2. Specular Flare Star on Button (matches reference top glint)    */
/* ------------------------------------------------------------------ */
const SpecularStar: React.FC = () => (
  <div className="absolute -top-1.5 right-6 pointer-events-none">
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      className="animate-pulse drop-shadow-[0_0_8px_#38BDF8]"
    >
      <path
        d="M12 0 C12 6.6 6.6 12 0 12 C6.6 12 12 17.4 12 24 C12 17.4 17.4 12 24 12 C17.4 12 12 6.6 12 0 Z"
        fill="#E0F2FE"
      />
      <circle cx="12" cy="12" r="2" fill="#FFFFFF" />
    </svg>
  </div>
);

/* ------------------------------------------------------------------ */
/* 3. Main Navbar Component                                           */
/* ------------------------------------------------------------------ */
const navItems = ["Work", "Experience", "Lab", "About", "Contact"];

export const Navbar: React.FC = () => {
  const [activeNav, setActiveNav] = useState("Work");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-40 w-full h-[10vh] flex items-center justify-center px-4 sm:px-6 md:px-8">
      {/* Outer Floating Pill Island */}
      <div className="relative w-full max-w-6xl mx-auto flex items-center justify-between rounded-2xl sm:rounded-[22px] bg-[#020817]/75 backdrop-blur-2xl border border-sky-400/20 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_30px_rgba(0,0,0,0.6)]">
        {/* Top specular highlight reflection line */}
        <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

        {/* Bottom edge neon radiant light strip (matches reference electric blue under-glow) */}
        <div className="absolute inset-x-6 -bottom-[1px] h-[1.5px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent shadow-[0_0_16px_2px_rgba(56,189,248,0.7),0_0_30px_5px_rgba(0,194,255,0.4)] pointer-events-none" />
        <div className="absolute inset-x-12 -bottom-[2px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80 pointer-events-none" />

        {/* ========================================================= */}
        {/* LEFT: LOGO                                                */}
        {/* ========================================================= */}
        <a
          href="#"
          className="flex items-center gap-2 sm:gap-2.5 select-none group"
        >
          <LogoIcon />
          <span className="font-poppins font-bold text-base sm:text-lg tracking-wider text-white group-hover:text-sky-200 transition-colors drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            AHMED
          </span>
        </a>

        {/* ========================================================= */}
        {/* CENTER: DESKTOP NAVIGATION LINKS                          */}
        {/* ========================================================= */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {navItems.map((item) => {
            const isActive = activeNav === item;
            return (
              <button
                key={item}
                onClick={() => setActiveNav(item)}
                className="relative py-1 text-xs sm:text-[13px] lg:text-sm font-inter transition-all duration-200 cursor-pointer select-none outline-none focus:outline-none"
              >
                <span
                  className={
                    isActive
                      ? "text-white font-medium drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]"
                      : "text-slate-300 hover:text-white font-normal"
                  }
                >
                  {item}
                </span>

                {/* Glowing cyan dot indicator for active link */}
                {isActive && (
                  <motion.div
                    layoutId="navbarActiveDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8,0_0_14px_#00C2FF]"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* ========================================================= */}
        {/* RIGHT: CTA BUTTON & MOBILE TOGGLE                         */}
        {/* ========================================================= */}
        <div className="flex items-center gap-3">
          {/* CTA Button "Book a Meeting →" */}
          <a
            href="#contact"
            className="group relative hidden xs:inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-[#061530]/80 hover:bg-[#0a2048]/90 backdrop-blur-xl border border-sky-400/40 hover:border-cyan-300/70 text-white font-inter text-xs sm:text-[13px] font-medium tracking-wide shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_16px_rgba(0,194,255,0.22)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.35),0_0_24px_rgba(0,194,255,0.45)] active:scale-[0.98] transition-all duration-300 select-none overflow-visible"
          >
            {/* Top Star Glint Flare */}
            <SpecularStar />

            <LuCalendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-200 group-hover:text-white transition-colors" />
            <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              Book a Meeting
            </span>
            <span className="text-sky-400 group-hover:translate-x-0.5 transition-transform duration-200 text-sm font-semibold">
              →
            </span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg bg-[#061530]/80 border border-sky-400/30 text-slate-200 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? (
              <LuX className="w-5 h-5" />
            ) : (
              <LuMenu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MOBILE DROPDOWN MENU                                      */}
      {/* ========================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-[10vh] inset-x-4 z-50 rounded-2xl bg-[#020817]/95 backdrop-blur-2xl border border-sky-400/30 p-5 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(0,194,255,0.2)] flex flex-col gap-3"
          >
            {navItems.map((item) => {
              const isActive = activeNav === item;
              return (
                <button
                  key={item}
                  onClick={() => {
                    setActiveNav(item);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-inter transition-colors ${
                    isActive
                      ? "bg-sky-500/15 text-white font-medium border border-sky-400/30"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/40 font-normal"
                  }`}
                >
                  <span>{item}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]" />
                  )}
                </button>
              );
            })}

            <div className="pt-2 border-t border-sky-400/20 mt-1">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-[#155EEF] to-[#00C2FF] text-white font-inter text-sm font-medium shadow-[0_0_18px_rgba(0,194,255,0.35)]"
              >
                <LuCalendar className="w-4 h-4" />
                <span>Book a Meeting</span>
                <span>→</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
