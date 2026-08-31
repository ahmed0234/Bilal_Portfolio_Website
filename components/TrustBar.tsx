"use client";

import React from "react";
import { motion } from "motion/react";
import GooglePartnerLogo from "./GooglePartnerLogo";
import { FaStar } from "react-icons/fa6";

export const TrustBar: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full max-w-5xl mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#081838]/85 via-[#040e24]/85 to-[#020714]/90 backdrop-blur-xl border border-sky-400/20 border-t-sky-300/35 px-4 sm:px-7 py-2.5 sm:py-3.5 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.18),inset_0_-2px_4px_rgba(0,0,0,0.6),0_15px_40px_rgba(0,5,20,0.85),0_0_25px_rgba(0,140,255,0.12)] select-none overflow-hidden ${className}`}
    >
      {/* Top Glass Luminous Highlight Reflection */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-sky-300/50 to-transparent pointer-events-none" />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6 lg:gap-3">
        {/* 1. Google Partner */}
        <div className="flex items-center justify-center lg:justify-start">
          <GooglePartnerLogo />
        </div>

        {/* Divider 1 (Desktop) */}
        <div className="hidden lg:block w-[1px] h-7 bg-sky-200/15" />

        {/* 2. Ad Spend */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="font-poppins font-bold text-base sm:text-lg text-white tracking-tight leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            $25M+
          </span>
          <span className="font-inter text-[11px] text-slate-400 font-medium mt-0.5">
            Ad Spend Managed
          </span>
        </div>

        {/* Divider 2 (Desktop) */}
        <div className="hidden lg:block w-[1px] h-7 bg-sky-200/15" />

        {/* 3. Businesses Scaled */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="font-poppins font-bold text-base sm:text-lg text-white tracking-tight leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            150+
          </span>
          <span className="font-inter text-[11px] text-slate-400 font-medium mt-0.5">
            Businesses Scaled
          </span>
        </div>

        {/* Divider 3 (Desktop) */}
        <div className="hidden lg:block w-[1px] h-7 bg-sky-200/15" />

        {/* 4. Qualified Leads */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="font-poppins font-bold text-base sm:text-lg text-white tracking-tight leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            4,500+
          </span>
          <span className="font-inter text-[11px] text-slate-400 font-medium mt-0.5">
            Qualified Leads
          </span>
        </div>

        {/* Divider 4 (Desktop) */}
        <div className="hidden lg:block w-[1px] h-7 bg-sky-200/15" />

        {/* 5. Top 1% */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="font-poppins font-bold text-base sm:text-lg text-white tracking-tight leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            Top 1%
          </span>
          <span className="font-inter text-[11px] text-slate-400 font-medium mt-0.5">
            Google Ads Expert
          </span>
        </div>

        {/* Divider 5 (Desktop) */}
        <div className="hidden lg:block w-[1px] h-7 bg-sky-200/15" />

        {/* 6. 5-Star Rating */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left col-span-2 sm:col-span-1">
          <div className="flex items-center gap-0.5 text-[#00C2FF] mb-0.5">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />
            ))}
          </div>
          <div className="flex items-center gap-1 leading-none">
            <span className="font-inter text-[11px] font-semibold text-white">
              5-Star Rated
            </span>
            <span className="font-inter text-[10px] text-slate-400">
              By Clients
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TrustBar;
