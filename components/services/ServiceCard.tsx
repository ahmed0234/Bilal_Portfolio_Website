"use client";

import React from "react";
import { motion } from "motion/react";
import { LuChevronRight } from "react-icons/lu";

/* ------------------------------------------------------------------ */
/* ServiceCard — A single service row with icon, number, text, arrow  */
/* ------------------------------------------------------------------ */
interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  description,
  icon,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-[#06132B]/60 backdrop-blur-md border border-[rgba(215,239,255,0.12)] hover:border-cyan-400/30 hover:bg-[#06132B]/80 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Top specular highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent pointer-events-none" />

      {/* Icon container with number badge */}
      <div className="relative flex-shrink-0">
        <div className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0B2A5B]/50 border border-sky-400/15 text-[#38BDF8] shadow-[0_0_12px_rgba(0,194,255,0.1)] group-hover:shadow-[0_0_18px_rgba(0,194,255,0.2)] transition-shadow duration-300">
          {icon}
        </div>
        {/* Number badge */}
        <span className="absolute -top-1.5 -right-2 flex items-center justify-center min-w-[20px] h-[18px] px-1 rounded-full bg-[#081B3A] border border-sky-400/25 text-[9px] font-inter font-semibold text-[#38BDF8] leading-none">
          {number}
        </span>
      </div>

      {/* Text content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-poppins font-semibold text-[13px] sm:text-sm text-white leading-tight mb-0.5">
          {title}
        </h3>
        <p className="font-inter text-[11px] sm:text-xs text-slate-400 leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>

      {/* Chevron arrow */}
      <div className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-lg text-slate-500 group-hover:text-[#38BDF8] transition-colors duration-200">
        <LuChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
      </div>

      {/* Hover glow overlay */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/[0.03] to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default ServiceCard;
