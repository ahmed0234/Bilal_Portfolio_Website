"use client";

import React from "react";
import { motion } from "motion/react";
import { FaArrowTrendUp } from "react-icons/fa6";

export interface PerformanceCardProps {
  title: string;
  value: string;
  change: string;
  chartVariant?: "roas" | "conversions" | "revenue" | "ctr";
  className?: string;
  delay?: number;
}

export const PerformanceCard: React.FC<PerformanceCardProps> = ({
  title,
  value,
  change,
  chartVariant = "roas",
  className = "",
  delay = 0,
}) => {
  // Customized smooth SVG paths for each metric to match the reference sparklines
  const getChartPath = () => {
    switch (chartVariant) {
      case "roas":
        return {
          d: "M 2 24 C 20 22, 35 25, 52 18 C 68 11, 85 16, 102 6",
          endX: 102,
          endY: 6,
        };
      case "conversions":
        return {
          d: "M 2 25 C 22 24, 38 18, 55 20 C 72 22, 85 12, 102 5",
          endX: 102,
          endY: 5,
        };
      case "revenue":
        return {
          d: "M 2 26 C 24 25, 42 16, 60 17 C 78 18, 88 8, 102 4",
          endX: 102,
          endY: 4,
        };
      case "ctr":
        return {
          d: "M 2 25 C 25 24, 45 22, 62 16 C 78 10, 88 12, 102 5",
          endX: 102,
          endY: 5,
        };
      default:
        return {
          d: "M 2 24 C 20 22, 35 25, 52 18 C 68 11, 85 16, 102 6",
          endX: 102,
          endY: 6,
        };
    }
  };

  const chart = getChartPath();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, scale: 1.03 }}
      className={`relative w-[130px] xs:w-[145px] sm:w-[155px] md:w-[168px] rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#0b2046]/85 via-[#061430]/85 to-[#030a1c]/90 backdrop-blur-xl border border-sky-400/25 border-t-sky-300/40 p-2.5 xs:p-3 sm:p-3.5 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.22),inset_0_-2px_4px_rgba(0,0,0,0.5),0_14px_36px_rgba(0,5,20,0.8),0_0_24px_rgba(0,140,255,0.16)] hover:border-cyan-400/50 hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_16px_40px_rgba(0,5,25,0.85),0_0_30px_rgba(0,194,255,0.28)] transition-all duration-300 overflow-hidden ${className}`}
    >
      {/* Top Glass Luminous Highlight Reflection */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-sky-300/60 to-transparent pointer-events-none" />

      {/* Top Row: Title + Mini Action Icon */}
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] xs:text-[11px] sm:text-xs font-medium text-slate-400 font-inter tracking-wide">
          {title}
        </span>
        {/* Subtle data/expand icon matching reference */}
        <div className="text-sky-400/70 hover:text-cyan-300 transition-colors">
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sm:w-3 sm:h-3"
          >
            <path d="M4 14l6-6" />
            <path d="M20 10l-6 6" />
            <path d="M14 4h6v6" />
            <path d="M10 20H4v-6" />
          </svg>
        </div>
      </div>

      {/* Main Metric Value */}
      <div className="text-base xs:text-lg sm:text-xl font-bold font-poppins text-white tracking-tight leading-none mb-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
        {value}
      </div>

      {/* Bottom Row: Percentage Growth + Sparkline Chart */}
      <div className="flex items-end justify-between gap-1 pt-0.5">
        {/* Growth Tag */}
        <div className="flex items-center gap-0.5 sm:gap-1 text-[10px] xs:text-[11px] font-semibold text-emerald-400">
          <FaArrowTrendUp className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 text-emerald-400" />
          <span>{change}</span>
        </div>

        {/* Sparkline Chart */}
        <div className="relative w-12 xs:w-14 sm:w-16 h-5">
          <svg
            viewBox="0 0 106 30"
            fill="none"
            className="w-full h-full overflow-visible"
          >
            <defs>
              <linearGradient
                id={`sparkGrad-${chartVariant}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#155EEF" stopOpacity="0.7" />
                <stop offset="60%" stopColor="#008CFF" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#00C2FF" stopOpacity="1" />
              </linearGradient>
              <filter
                id={`glow-${chartVariant}`}
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="2"
                  floodColor="#00C2FF"
                  floodOpacity="0.65"
                />
              </filter>
            </defs>

            {/* Glowing Line */}
            <path
              d={chart.d}
              stroke={`url(#sparkGrad-${chartVariant})`}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter={`url(#glow-${chartVariant})`}
            />

            {/* Glowing Endpoint Dot */}
            <circle
              cx={chart.endX}
              cy={chart.endY}
              r="3"
              fill="#00C2FF"
              className="animate-pulse"
              filter={`url(#glow-${chartVariant})`}
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceCard;
