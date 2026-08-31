"use client";

import React from "react";
import { motion } from "motion/react";
import { LuChevronRight } from "react-icons/lu";

/* ------------------------------------------------------------------ */
/* ServiceCard — 3D Glassmorphic Service Row with Luminous Orb Badge  */
/* ------------------------------------------------------------------ */
interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  description,
  icon,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex-1 flex items-center gap-3.5 sm:gap-4.5 lg:gap-5 px-4 sm:px-5 lg:px-5.5 py-3.5 sm:py-4 lg:py-4.5 rounded-2xl bg-gradient-to-b from-[#081c3d]/75 via-[#040e24]/85 to-[#020715]/90 backdrop-blur-xl border border-sky-400/20 border-t-sky-300/35 hover:border-cyan-400/50 hover:bg-[#061533]/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-2px_4px_rgba(0,0,0,0.5),0_10px_30px_rgba(0,0,0,0.5),0_0_15px_rgba(0,140,255,0.06)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_12px_36px_rgba(0,0,0,0.6),0_0_25px_rgba(0,194,255,0.2)] transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Top Specular Glint Line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-sky-300/40 to-transparent pointer-events-none" />

      {/* 3D Luminous Spherical Orb Badge for Icon (Clean, crisp, no blurry artifacts) */}
      <div className="relative flex-shrink-0">
        <div className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 lg:w-[58px] lg:h-[58px] rounded-2xl bg-gradient-to-b from-[#144287] via-[#092557] to-[#030d22] border border-sky-400/35 border-t-sky-200/70 text-[#38BDF8] shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),inset_0_-3px_6px_rgba(0,0,0,0.8),0_6px_20px_rgba(0,0,0,0.6),0_0_20px_rgba(0,194,255,0.25)] group-hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.55),0_0_28px_rgba(0,194,255,0.45)] group-hover:border-cyan-300 transition-all duration-300">
          <div className="relative z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            {icon}
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 sm:gap-2.5 mb-1">
          {/* Number Tag */}
          <span className="inline-flex items-center justify-center px-1.5 sm:px-2 py-0.5 rounded-md text-[11px] sm:text-[13px] font-inter font-bold tracking-tight text-[#38BDF8] bg-sky-400/10 border border-sky-400/30 shrink-0">
            {number}
          </span>
          {/* Service Card Heading */}
          <h3 className="font-poppins font-semibold text-[13.5px] xs:text-sm sm:text-[17px] lg:text-[18.5px] text-white tracking-tight group-hover:text-sky-100 transition-colors truncate">
            {title}
          </h3>
        </div>
        {/* Description */}
        <p className="font-inter text-xs sm:text-[13px] lg:text-[14px] text-slate-300/85 leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>

      {/* Chevron Right Arrow */}
      <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 text-slate-400 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all duration-200">
        <LuChevronRight className="w-5 h-5" />
      </div>

      {/* Hover Ambient Blue Wash */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/[0.04] to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default ServiceCard;
