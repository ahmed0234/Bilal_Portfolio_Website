"use client";

import React from "react";
import { motion } from "motion/react";
import { LuCalendar, LuSquareArrowOutUpRight } from "react-icons/lu";

/* ------------------------------------------------------------------ */
/* Target / Bullseye SVG Illustration                                  */
/* ------------------------------------------------------------------ */
const TargetGraphic: React.FC = () => (
  <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0">
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className="w-full h-full drop-shadow-[0_0_20px_rgba(21,94,239,0.25)]"
    >
      {/* Outermost ring */}
      <circle
        cx="60"
        cy="60"
        r="54"
        stroke="#155EEF"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        opacity="0.25"
      />
      {/* Outer ring */}
      <circle
        cx="60"
        cy="60"
        r="44"
        stroke="#155EEF"
        strokeWidth="2"
        opacity="0.35"
      />
      {/* Middle ring */}
      <circle
        cx="60"
        cy="60"
        r="32"
        stroke="#38BDF8"
        strokeWidth="2"
        opacity="0.5"
      />
      {/* Inner ring */}
      <circle
        cx="60"
        cy="60"
        r="20"
        stroke="#38BDF8"
        strokeWidth="2"
        opacity="0.6"
      />
      {/* Bullseye center */}
      <circle cx="60" cy="60" r="10" fill="#EA4335" />
      <circle
        cx="60"
        cy="60"
        r="10"
        fill="none"
        stroke="#FF6B6B"
        strokeWidth="1"
        opacity="0.5"
      />
      {/* Bullseye glow */}
      <circle cx="60" cy="60" r="4" fill="#FF8A80" opacity="0.8" />

      {/* Arrow shaft */}
      <line
        x1="28"
        y1="92"
        x2="54"
        y2="66"
        stroke="#38BDF8"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Arrow head */}
      <polygon points="58,60 50,62 52,70" fill="#38BDF8" />
      {/* Arrow feathers */}
      <line
        x1="28"
        y1="92"
        x2="22"
        y2="88"
        stroke="#EA4335"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="28"
        y1="92"
        x2="24"
        y2="96"
        stroke="#EA4335"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="28"
        y1="92"
        x2="32"
        y2="98"
        stroke="#FBBC04"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

/* ------------------------------------------------------------------ */
/* ServicesCTA Component                                               */
/* ------------------------------------------------------------------ */
const ServicesCTA: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full rounded-xl bg-[#06132B]/60 backdrop-blur-md border border-[rgba(215,239,255,0.12)] p-5 sm:p-6 md:p-8 overflow-hidden"
    >
      {/* Top specular line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-sky-300/15 to-transparent pointer-events-none" />

      {/* Ambient glow orbs */}
      <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-48 h-48 bg-[#155EEF]/[0.08] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-16 bottom-0 w-40 h-40 bg-[#00C2FF]/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-5 sm:gap-6 md:gap-8">
        {/* Target Illustration */}
        <TargetGraphic />

        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-poppins font-bold text-xl sm:text-2xl text-white leading-tight mb-2">
            Ready to Turn Clicks
            <br className="hidden sm:inline" /> Into{" "}
            <span className="bg-gradient-to-r from-[#00C2FF] via-[#38BDF8] to-[#155EEF] bg-clip-text text-transparent">
              Customers?
            </span>
          </h3>
          <p className="font-inter text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md mx-auto md:mx-0">
            Let&apos;s build high-performing Google Ads campaigns that deliver
            qualified leads and real results.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          {/* Primary CTA */}
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl text-white font-inter font-medium text-sm tracking-wide bg-gradient-to-b from-[#2982FF] via-[#1677FF] to-[#074ec4] border border-sky-400/35 border-t-sky-200/70 shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),inset_0_-2px_4px_rgba(0,0,0,0.45),0_6px_22px_rgba(22,119,255,0.6),0_14px_30px_rgba(0,0,0,0.65)] hover:from-[#3a8eff] hover:to-[#1065e0] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.55),0_8px_28px_rgba(0,194,255,0.75),0_16px_34px_rgba(0,0,0,0.7)] active:scale-[0.98] transition-all duration-300 cursor-pointer overflow-hidden whitespace-nowrap"
          >
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />
            <LuCalendar className="w-4 h-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]" />
            <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
              Book a Strategy Call
            </span>
            <span className="group-hover:translate-x-0.5 transition-transform duration-200 text-white/90">
              →
            </span>
          </a>

          {/* Secondary CTA */}
          <a
            href="#case-studies"
            className="group relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl text-white font-inter font-medium text-sm tracking-wide bg-gradient-to-b from-[#0e244d]/90 via-[#071735]/90 to-[#040e22]/95 backdrop-blur-xl border border-sky-400/25 border-t-sky-300/45 shadow-[inset_0_1px_1.5px_rgba(215,239,255,0.28),inset_0_-2px_4px_rgba(0,0,0,0.55),0_6px_18px_rgba(0,0,0,0.55),0_0_16px_rgba(21,94,239,0.18)] hover:border-cyan-400/50 hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_0_24px_rgba(0,194,255,0.38)] active:scale-[0.98] transition-all duration-300 cursor-pointer overflow-hidden whitespace-nowrap"
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
