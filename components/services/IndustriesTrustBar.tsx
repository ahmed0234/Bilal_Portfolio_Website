"use client";

import React from "react";
import { motion } from "motion/react";
import {
  LuShovel,
  LuFan,
  LuHouse,
  LuPaintbrush,
  LuHardHat,
  LuHeartPulse,
  LuShoppingCart,
  LuBuilding2,
} from "react-icons/lu";

/* ------------------------------------------------------------------ */
/* Industry Data Definitions (Target Industries)                       */
/* ------------------------------------------------------------------ */
interface IndustryItem {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const industries: IndustryItem[] = [
  { name: "Hardscaping", Icon: LuShovel },
  { name: "HVAC", Icon: LuFan },
  { name: "Roofing", Icon: LuHouse },
  { name: "Home Remodeling & Renovation", Icon: LuPaintbrush },
  { name: "General Home Contracting", Icon: LuHardHat },
  { name: "Healthcare", Icon: LuHeartPulse },
  { name: "Ecommerce", Icon: LuShoppingCart },
  { name: "Real Estate", Icon: LuBuilding2 },
];

/* ------------------------------------------------------------------ */
/* 3D Glassmorphic Industries Trust Bar Component                     */
/* ------------------------------------------------------------------ */
export const IndustriesTrustBar: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full rounded-2xl bg-gradient-to-b from-[#06173a]/75 via-[#030d22]/80 to-[#020617]/90 backdrop-blur-2xl border border-sky-400/20 border-t-sky-300/35 px-4 sm:px-6 md:px-8 py-6 sm:py-7 shadow-[0_15px_40px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.12)] overflow-hidden"
    >
      {/* Top Specular Glint Line */}
      <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-sky-300/30 to-transparent pointer-events-none" />

      {/* Center Vertical Separator on Mobile (between column 1 and column 2) */}
      <div className="block sm:hidden absolute left-1/2 top-20 bottom-6 w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-sky-400/20 to-transparent pointer-events-none" />

      {/* Header */}
      <h3 className="font-poppins font-semibold text-base sm:text-lg lg:text-[19px] text-white text-center mb-6 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
        Trusted By Businesses Across Industries
      </h3>

      {/* 8 Industry Columns with Vertical Dividers */}
      <div className="relative grid grid-cols-2 sm:grid-cols-4 lg:flex lg:flex-row lg:items-center lg:justify-between gap-y-5 gap-x-4 sm:gap-6 lg:gap-0">
        {industries.map((ind, i) => (
          <React.Fragment key={ind.name}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.04 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex-1 flex flex-col items-center gap-2.5 group cursor-default px-2"
            >
              {/* 3D Glass Box with Specular Highlight */}
              <div className="relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-b from-[#0b2450]/80 via-[#07193b]/85 to-[#030d22]/90 border border-sky-400/25 border-t-sky-300/40 text-[#38BDF8] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.6),0_4px_14px_rgba(0,0,0,0.5)] group-hover:border-cyan-400/60 group-hover:shadow-[0_0_20px_rgba(0,194,255,0.35)] group-hover:scale-105 transition-all duration-300">
                <ind.Icon className="w-5.5 h-5.5 sm:w-6 sm:h-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
              </div>
              {/* Industry Subheading */}
              <span className="font-inter text-xs sm:text-[13.5px] font-medium text-slate-200 group-hover:text-white transition-colors text-center leading-tight max-w-[140px] sm:max-w-none">
                {ind.name}
              </span>
            </motion.div>

            {/* Vertical Separator Divider Line (Desktop) */}
            {i < industries.length - 1 && (
              <div className="hidden lg:block w-[1px] h-10 bg-gradient-to-b from-transparent via-sky-300/20 to-transparent shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
};

export default IndustriesTrustBar;
