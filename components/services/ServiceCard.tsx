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
      className="group relative flex-1 flex items-center gap-3.5 sm:gap-4.5 px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-b from-[#081c3d]/70 via-[#040e24]/80 to-[#020715]/90 backdrop-blur-xl border border-sky-400/20 border-t-sky-300/35 hover:border-cyan-400/50 hover:bg-[#061533]/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-2px_4px_rgba(0,0,0,0.5),0_10px_30px_rgba(0,0,0,0.5),0_0_15px_rgba(0,140,255,0.06)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_12px_36px_rgba(0,0,0,0.6),0_0_25px_rgba(0,194,255,0.2)] transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Top Specular Glint Line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-sky-300/40 to-transparent pointer-events-none" />

      {/* 3D Luminous Spherical Orb Badge for Icon */}
      <div className="relative flex-shrink-0">
        <div className="relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-b from-[#133d7d] via-[#09224d] to-[#030d20] border border-sky-400/35 border-t-sky-200/60 text-[#38BDF8] shadow-[inset_0_1px_2px_rgba(255,255,255,0.35),inset_0_-2px_4px_rgba(0,0,0,0.7),0_4px_16px_rgba(0,0,0,0.6),0_0_18px_rgba(0,194,255,0.25)] group-hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),0_0_25px_rgba(0,194,255,0.45)] group-hover:border-cyan-300 transition-all duration-300">
          {/* Top Radial Specular Reflection */}
          <div className="absolute top-1 left-2 w-6 h-3 bg-white/20 rounded-full blur-[1px] pointer-events-none" />
          <div className="relative z-10 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
            {icon}
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          {/* Number Tag */}
          <span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded text-[11px] font-inter font-bold tracking-tight text-[#38BDF8] bg-sky-400/10 border border-sky-400/25 shrink-0">
            {number}
          </span>
          {/* Title */}
          <h3 className="font-poppins font-semibold text-sm sm:text-[15px] text-white tracking-tight group-hover:text-sky-100 transition-colors truncate">
            {title}
          </h3>
        </div>
        {/* Description */}
        <p className="font-inter text-xs sm:text-[13px] text-slate-400 leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>

      {/* Chevron Right Arrow */}
      <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 text-slate-500 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all duration-200">
        <LuChevronRight className="w-4 h-4" />
      </div>

      {/* Hover Ambient Blue Wash */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/[0.04] to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default ServiceCard;
