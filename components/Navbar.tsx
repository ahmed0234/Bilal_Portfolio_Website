"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LuMenu, LuX } from "react-icons/lu";
import GoogleAdsIcon from "./GoogleAdsIcon";

/* ------------------------------------------------------------------ */
/* 1. Custom Calendar Icon with growth sparkline (matches reference)  */
/* ------------------------------------------------------------------ */
const CalendarMeetingIcon: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Outer Calendar Box */}
    <rect x="3" y="4" width="18" height="18" rx="3" ry="3" />
    {/* Top Binder Rings */}
    <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2.2" />
    <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2.2" />
    {/* Header divider */}
    <line x1="3" y1="10" x2="21" y2="10" strokeWidth="1.8" />
    {/* Inner Growth Curve / Spark */}
    <path d="M7 17 L10 14 L12 16 L16 12" strokeWidth="1.75" />
    <circle cx="16" cy="12" r="0.75" fill="currentColor" />
  </svg>
);

/* ------------------------------------------------------------------ */
/* 2. Top Specular Lens Flare / Starburst (matches reference image)   */
/* ------------------------------------------------------------------ */
const ButtonSpecularFlare: React.FC = () => (
  <div className="absolute -top-[7px] left-[32%] pointer-events-none flex items-center justify-center">
    {/* Radial Blue Light Bloom */}
    <div className="absolute w-12 h-6 bg-cyan-400/40 rounded-full blur-[6px] -top-1" />
    <div className="absolute w-20 h-4 bg-sky-300/30 rounded-full blur-[8px]" />

    {/* Horizontal Light Streak */}
    <div className="absolute w-24 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />

    {/* Center 4-Point Diamond Star */}
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      className="relative z-10 animate-pulse drop-shadow-[0_0_10px_#38BDF8]"
    >
      <path
        d="M12 0 C12 6.6 6.6 12 0 12 C6.6 12 12 17.4 12 24 C12 17.4 17.4 12 24 12 C17.4 12 12 6.6 12 0 Z"
        fill="#FFFFFF"
      />
      <circle cx="12" cy="12" r="2" fill="#FFFFFF" />
    </svg>
  </div>
);

/* ------------------------------------------------------------------ */
/* 3. Glowing "Book a Meeting →" Button Component                     */
/* ------------------------------------------------------------------ */
interface GlowingMeetingButtonProps {
  onClick?: () => void;
  className?: string;
}

export const GlowingMeetingButton: React.FC<GlowingMeetingButtonProps> = ({
  onClick,
  className = "",
}) => (
  <a
    href="#contact"
    onClick={onClick}
    className={`group relative inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-2.5 rounded-xl sm:rounded-2xl bg-[#020b1c]/85 hover:bg-[#051433]/90 backdrop-blur-xl border border-[#38bdf8]/85 hover:border-cyan-300 text-white font-inter text-xs sm:text-[13px] lg:text-sm font-medium tracking-wide shadow-[0_0_14px_rgba(56,189,248,0.55),0_0_28px_rgba(0,194,255,0.25),inset_0_0_10px_rgba(56,189,248,0.15)] hover:shadow-[0_0_20px_rgba(56,189,248,0.8),0_0_40px_rgba(0,194,255,0.45),inset_0_0_14px_rgba(56,189,248,0.25)] active:scale-[0.98] transition-all duration-300 select-none overflow-visible ${className}`}
  >
    {/* Top Radiant Specular Glint / Lens Flare */}
    <ButtonSpecularFlare />

    {/* Calendar Icon */}
    <CalendarMeetingIcon className="w-4 h-4 text-slate-100 group-hover:text-white transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]" />

    {/* Text */}
    <span className="drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)] text-white font-medium">
      Book a Meeting
    </span>

    {/* Arrow */}
    <span className="text-white/90 group-hover:text-white group-hover:translate-x-1 transition-transform duration-200 text-base font-light leading-none ml-0.5">
      →
    </span>
  </a>
);

/* ------------------------------------------------------------------ */
/* 4. Logo Component (Google Ads Logo + "Google Ads Expert")          */
/* ------------------------------------------------------------------ */
const BrandLogo: React.FC = () => (
  <a
    href="#"
    className="flex items-center gap-2.5 sm:gap-3 select-none group"
  >
    <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 drop-shadow-[0_0_14px_rgba(0,194,255,0.45)]">
      <GoogleAdsIcon size={32} />
    </div>
    <div className="flex items-center gap-1.5">
      <span className="font-poppins font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-sky-100 transition-colors drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
        Google Ads
      </span>
      <span className="font-poppins font-medium text-sm sm:text-base tracking-tight bg-gradient-to-r from-[#38BDF8] via-[#00C2FF] to-[#155EEF] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(0,194,255,0.4)]">
        Expert
      </span>
    </div>
  </a>
);

/* ------------------------------------------------------------------ */
/* 5. Main Navbar Component                                           */
/* ------------------------------------------------------------------ */
const navItems = ["Work", "Experience", "Lab", "About", "Contact"];

export const Navbar: React.FC = () => {
  const [activeNav, setActiveNav] = useState("Work");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="relative z-40 w-full h-[10vh] flex items-center justify-center px-4 sm:px-6 md:px-8">
        {/* Floating Capsule Island */}
        <div className="relative w-full max-w-6xl mx-auto flex items-center justify-between rounded-2xl sm:rounded-[22px] bg-[#020817]/75 backdrop-blur-2xl border border-sky-400/20 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_30px_rgba(0,0,0,0.6)]">
          {/* Top Specular Highlight Line */}
          <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

          {/* Bottom Edge Neon Radiant Glow Strip */}
          <div className="absolute inset-x-6 -bottom-[1px] h-[1.5px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent shadow-[0_0_16px_2px_rgba(56,189,248,0.7),0_0_30px_5px_rgba(0,194,255,0.4)] pointer-events-none" />
          <div className="absolute inset-x-12 -bottom-[2px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80 pointer-events-none" />

          {/* ======================================================= */}
          {/* LEFT: GOOGLE ADS LOGO + "GOOGLE ADS EXPERT"             */}
          {/* ======================================================= */}
          <BrandLogo />

          {/* ======================================================= */}
          {/* CENTER: DESKTOP NAVIGATION LINKS                        */}
          {/* ======================================================= */}
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

          {/* ======================================================= */}
          {/* RIGHT: GLOWING CTA BUTTON & MOBILE 3-BAR HAMBURGER      */}
          {/* ======================================================= */}
          <div className="flex items-center gap-3">
            {/* Desktop Glowing CTA Button matching reference */}
            <div className="hidden md:block">
              <GlowingMeetingButton />
            </div>

            {/* Mobile Three-Bar Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              className="md:hidden relative flex flex-col items-center justify-center gap-1.5 w-10 h-10 rounded-xl bg-[#030d22]/85 backdrop-blur-xl border border-sky-400/40 text-white shadow-[0_0_12px_rgba(0,194,255,0.25)] hover:border-cyan-300 hover:shadow-[0_0_16px_rgba(0,194,255,0.4)] transition-all cursor-pointer"
            >
              <span className="w-5 h-[2px] bg-sky-300 rounded-full shadow-[0_0_6px_#38BDF8]" />
              <span className="w-5 h-[2px] bg-sky-300 rounded-full shadow-[0_0_6px_#38BDF8]" />
              <span className="w-5 h-[2px] bg-sky-300 rounded-full shadow-[0_0_6px_#38BDF8]" />
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================= */}
      {/* FULL-WIDTH, FULL-HEIGHT MOBILE NAVIGATION MENU            */}
      {/* ========================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-[#020617]/95 backdrop-blur-3xl text-white p-6 select-none overflow-y-auto"
          >
            {/* Ambient Background Cosmic Glow Orbs */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

            {/* Top Bar inside Mobile Menu */}
            <div className="relative z-10 flex items-center justify-between w-full border-b border-sky-400/20 pb-4">
              <BrandLogo />

              {/* Close Button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close mobile menu"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#061530]/80 border border-sky-400/30 text-slate-200 hover:text-white hover:border-cyan-300 shadow-[0_0_12px_rgba(0,194,255,0.2)] transition-all cursor-pointer"
              >
                <LuX className="w-5 h-5 text-sky-300" />
              </button>
            </div>

            {/* Center Navigation Links with Staggered Animations */}
            <nav className="relative z-10 flex flex-col items-center justify-center gap-6 my-auto py-8">
              {navItems.map((item, idx) => {
                const isActive = activeNav === item;
                return (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.08 * (idx + 1),
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    onClick={() => {
                      setActiveNav(item);
                      setMobileMenuOpen(false);
                    }}
                    className={`relative text-2xl sm:text-3xl font-poppins font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "text-transparent bg-gradient-to-r from-[#00C2FF] via-[#38BDF8] to-[#155EEF] bg-clip-text drop-shadow-[0_0_18px_rgba(0,194,255,0.6)]"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {item}
                    {isActive && (
                      <motion.div
                        layoutId="mobileActiveIndicator"
                        className="mx-auto mt-2 w-8 h-[2.5px] rounded-full bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent shadow-[0_0_12px_#38BDF8]"
                      />
                    )}
                  </motion.button>
                );
              })}
            </nav>

            {/* Bottom Action Area: Glowing Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full flex flex-col items-center pt-4 border-t border-sky-400/20"
            >
              <GlowingMeetingButton
                onClick={() => setMobileMenuOpen(false)}
                className="w-full max-w-sm py-3 text-sm justify-center"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
