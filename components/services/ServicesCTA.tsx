"use client";

import React from "react";
import { motion } from "motion/react";
import { LuCalendar, LuSquareArrowOutUpRight } from "react-icons/lu";

/* ------------------------------------------------------------------ */
/* 3D Glowing Target / Bullseye SVG Illustration                       */
/* ------------------------------------------------------------------ */
const TargetGraphic: React.FC = () => (
  <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 flex items-center justify-center">
    {/* Ambient Blue Radial Bloom */}
    <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl pointer-events-none" />

    <svg
      viewBox="0 0 120 120"
      fill="none"
      className="relative z-10 w-full h-full drop-shadow-[0_0_20px_rgba(0,194,255,0.4)]"
    >
      <defs>
        <radialGradient id="bullseyeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00C2FF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#155EEF" stopOpacity="0.1" />
        </radialGradient>
      </defs>

      {/* Outermost Dashed Ring */}
      <circle
        cx="60"
        cy="60"
        r="54"
        stroke="#38BDF8"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        opacity="0.3"
      />
      {/* Outer Ring */}
      <circle
        cx="60"
        cy="60"
        r="44"
        stroke="#155EEF"
        strokeWidth="2.5"
        opacity="0.5"
      />
      {/* Middle Cyan Ring */}
      <circle
        cx="60"
        cy="60"
        r="32"
        stroke="#38BDF8"
        strokeWidth="3"
        opacity="0.8"
        className="drop-shadow-[0_0_8px_#38BDF8]"
      />
      {/* Inner Ring */}
      <circle
        cx="60"
        cy="60"
        r="20"
        stroke="#00C2FF"
        strokeWidth="2.5"
        opacity="0.9"
      />
      {/* Center Bullseye Core */}
      <circle cx="60" cy="60" r="10" fill="#00C2FF" opacity="0.9" />
      <circle cx="60" cy="60" r="5" fill="#FFFFFF" />

      {/* Arrow Dart Shaft */}
      <line
        x1="24"
        y1="96"
        x2="56"
        y2="64"
        stroke="#38BDF8"
        strokeWidth="3"
        strokeLinecap="round"
        className="drop-shadow-[0_0_6px_#38BDF8]"
      />
      {/* Arrow Head */}
      <polygon points="60,60 50,62 52,72" fill="#FFFFFF" />
      {/* Arrow Feathers */}
      <line
        x1="24"
        y1="96"
        x2="16"
        y2="92"
        stroke="#00C2FF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="24"
        y1="96"
        x2="20"
        y2="104"
        stroke="#00C2FF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="24"
        y1="96"
        x2="28"
        y2="104"
        stroke="#38BDF8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

/* ------------------------------------------------------------------ */
/* 3D Glassmorphic Services CTA Component                             */
/* ------------------------------------------------------------------ */
export const ServicesCTA: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full rounded-2xl bg-gradient-to-b from-[#071a3c]/85 via-[#030d22]/85 to-[#020617]/95 backdrop-blur-2xl border border-sky-400/25 border-t-sky-300/40 p-6 sm:p-8 lg:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_1px_2px_rgba(255,255,255,0.15),0_0_40px_rgba(0,140,255,0.1)] overflow-hidden"
    >
      {/* Top Specular Glint Line */}
      <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

      {/* Ambient Glow Orbs */}
      <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-48 h-48 bg-[#155EEF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-16 bottom-0 w-48 h-48 bg-[#00C2FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
        {/* Left Side: Graphic + Text */}
        <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 text-center sm:text-left">
          {/* Target 3D Graphic */}
          <TargetGraphic />

          {/* Heading + Subtitle */}
          <div>
            <h3 className="font-poppins font-bold text-xl sm:text-2xl lg:text-[26px] text-white leading-tight mb-2 tracking-tight">
              Ready to Turn Clicks
              <br className="hidden sm:inline" /> Into{" "}
              <span className="bg-gradient-to-r from-[#00C2FF] via-[#38BDF8] to-[#155EEF] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,194,255,0.4)]">
                Customers?
              </span>
            </h3>
            <p className="font-inter text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Let&apos;s build high-performing Google Ads campaigns that deliver
              qualified leads and real results.
            </p>
          </div>
        </div>

        {/* Right Side: CTA Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
          {/* Primary CTA: Book a Strategy Call */}
          <a
            href="#contact"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-xl text-white font-inter font-medium text-xs sm:text-sm tracking-wide bg-gradient-to-b from-[#2982FF] via-[#1677FF] to-[#074ec4] border border-sky-400/40 border-t-sky-200/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),inset_0_-2px_4px_rgba(0,0,0,0.5),0_8px_24px_rgba(22,119,255,0.6),0_16px_32px_rgba(0,0,0,0.65)] hover:from-[#3a8eff] hover:to-[#1065e0] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_10px_30px_rgba(0,194,255,0.75)] active:scale-[0.98] transition-all duration-300 cursor-pointer overflow-hidden whitespace-nowrap"
          >
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />
            <LuCalendar className="w-4 h-4 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
            <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              Book a Strategy Call
            </span>
            <span className="group-hover:translate-x-1 transition-transform duration-200 text-white/90">
              →
            </span>
          </a>

          {/* Secondary CTA: View Case Studies */}
          <a
            href="#case-studies"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-xl text-white font-inter font-medium text-xs sm:text-sm tracking-wide bg-gradient-to-b from-[#0e244d]/90 via-[#071735]/90 to-[#040e22]/95 backdrop-blur-xl border border-sky-400/25 border-t-sky-300/45 shadow-[inset_0_1px_1.5px_rgba(215,239,255,0.28),inset_0_-2px_4px_rgba(0,0,0,0.55),0_6px_18px_rgba(0,0,0,0.55),0_0_16px_rgba(21,94,239,0.18)] hover:border-cyan-400/50 hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_0_24px_rgba(0,194,255,0.38)] active:scale-[0.98] transition-all duration-300 cursor-pointer overflow-hidden whitespace-nowrap"
          >
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-sky-300/50 to-transparent pointer-events-none" />
            <LuSquareArrowOutUpRight className="w-4 h-4 text-sky-400 group-hover:text-cyan-300 transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]" />
            <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
              View Case Studies
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesCTA;
