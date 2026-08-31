"use client";

import React from "react";
import { motion } from "motion/react";
import {
  LuTrendingUp,
  LuDollarSign,
  LuUsers,
  LuTarget,
  LuChevronDown,
} from "react-icons/lu";
import { FiBarChart2 } from "react-icons/fi";

/* ------------------------------------------------------------------ */
/* Data Definitions                                                    */
/* ------------------------------------------------------------------ */
const metrics = [
  {
    Icon: FiBarChart2,
    value: "8.73x",
    label: "ROAS",
    change: "45.3%",
  },
  {
    Icon: LuDollarSign,
    value: "$287K",
    label: "Revenue",
    change: "61.8%",
  },
  {
    Icon: LuUsers,
    value: "56K+",
    label: "Leads",
    change: "32.6%",
  },
  {
    Icon: LuTarget,
    value: "4.52K",
    label: "Conversions",
    change: "18.9%",
  },
];

const campaigns = [
  { name: "Search Campaign", value: "4.12K", color: "#FBBC04", width: "82%" },
  {
    name: "Performance Max",
    value: "3.24K",
    color: "#FF5722",
    width: "65%",
  },
  {
    name: "Lead Generation",
    value: "2.15K",
    color: "#FF9800",
    width: "43%",
  },
  {
    name: "Remarketing Campaign",
    value: "1.08K",
    color: "#34A853",
    width: "22%",
  },
];

/* ------------------------------------------------------------------ */
/* Smooth Dynamic Chart Curve Paths                                   */
/* ------------------------------------------------------------------ */
const chartLinePath =
  "M 0 140 C 25 135 45 130 70 120 C 95 110 105 125 125 115 C 145 105 155 95 180 88 C 205 80 215 95 240 78 C 265 60 275 68 300 52 C 325 36 335 42 360 26 C 375 16 388 12 400 8";
const chartAreaPath = `${chartLinePath} L 400 160 L 0 160 Z`;

/* ------------------------------------------------------------------ */
/* Unified Analytics Dashboard Component                              */
/* ------------------------------------------------------------------ */
export const AnalyticsDashboard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-2xl bg-gradient-to-b from-[#071a3c]/85 via-[#030d22]/85 to-[#020617]/95 backdrop-blur-2xl border border-sky-400/25 border-t-sky-300/40 p-5 sm:p-6 lg:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_1px_2px_rgba(255,255,255,0.15),0_0_40px_rgba(0,140,255,0.08)] overflow-hidden flex flex-col justify-between gap-5 sm:gap-6 h-full"
    >
      {/* Top Specular Glint Line */}
      <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

      {/* Subtle Ambient Radial Glow */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#00C2FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#155EEF]/10 rounded-full blur-3xl pointer-events-none" />

      {/* ========================================================= */}
      {/* 1. TOP SUB-SECTION: Performance Overview + 4 Metric Cards */}
      {/* ========================================================= */}
      <div className="relative z-10 flex flex-col gap-3.5">
        {/* Header Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#00C2FF] shadow-[0_0_10px_#00C2FF]" />
            <span className="font-inter font-semibold text-base sm:text-[17px] lg:text-lg text-white tracking-tight">
              Performance Overview
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#081B3A]/80 border border-sky-300/20 text-xs font-inter text-slate-300 shadow-sm cursor-pointer hover:border-cyan-400/40 transition-colors">
            <span>Last 30 Days</span>
            <LuChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </div>
        </div>

        {/* 4 Metric 3D Glass Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center p-3 sm:p-3.5 rounded-xl bg-gradient-to-b from-[#0b2450]/60 to-[#040f26]/80 border border-sky-400/20 border-t-sky-300/35 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.4)] hover:border-cyan-400/40 transition-all duration-200"
            >
              {/* Mini Luminous Orb Icon */}
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-b from-[#133d7d] to-[#061738] border border-sky-400/40 text-[#38BDF8] shadow-[0_0_10px_rgba(0,194,255,0.3)] mb-2 group-hover:scale-105 transition-transform">
                <m.Icon className="w-4 h-4" />
              </div>
              {/* Value */}
              <span className="font-poppins font-bold text-lg sm:text-xl text-white tracking-tight leading-none">
                {m.value}
              </span>
              {/* Label */}
              <span className="font-inter text-[11px] text-slate-400 mt-1">
                {m.label}
              </span>
              {/* Growth Stat */}
              <span className="flex items-center gap-0.5 mt-1.5 text-[11px] font-inter font-semibold text-[#10B981] drop-shadow-[0_0_6px_rgba(16,185,129,0.3)]">
                <LuTrendingUp className="w-3 h-3" />
                {m.change}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. MIDDLE SUB-SECTION: Conversions Area Chart             */}
      {/* ========================================================= */}
      <div className="relative z-10 flex flex-col gap-2 pt-2 border-t border-sky-400/15">
        {/* Header with Title & Peak Badge */}
        <div className="flex items-center justify-between mb-1">
          <span className="font-inter font-semibold text-base sm:text-[17px] lg:text-lg text-white tracking-tight">
            Conversions
          </span>
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-[#0a234e]/85 border border-[#38BDF8]/40 shadow-[0_0_10px_rgba(56,189,248,0.25)]">
            <span className="text-xs font-inter font-bold text-[#38BDF8]">
              4.52K
            </span>
            <span className="text-[10px] font-inter text-slate-300">
              Conversions
            </span>
          </div>
        </div>

        {/* Chart Layout: Y-Axis + SVG Grid */}
        <div className="flex gap-2">
          {/* Y-Axis Labels */}
          <div className="flex flex-col justify-between text-[10px] font-inter text-slate-400 py-1 shrink-0 w-6 text-right">
            <span>5K</span>
            <span>4K</span>
            <span>3K</span>
            <span>2K</span>
            <span>1K</span>
            <span>0</span>
          </div>

          {/* SVG Area Chart */}
          <div className="flex-1 relative">
            <svg
              viewBox="0 0 400 160"
              className="w-full h-auto overflow-visible"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="dashboardChartGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#155EEF" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#020617" stopOpacity="0.0" />
                </linearGradient>

                <linearGradient
                  id="dashboardLineGradient"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="0"
                >
                  <stop offset="0%" stopColor="#155EEF" />
                  <stop offset="50%" stopColor="#00C2FF" />
                  <stop offset="100%" stopColor="#38BDF8" />
                </linearGradient>

                <filter id="dashboardLineGlow" x="-10%" y="-10%" width="120%" height="120%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Horizontal Grid Guidelines */}
              {[0, 32, 64, 96, 128, 160].map((y, idx) => (
                <line
                  key={idx}
                  x1="0"
                  y1={y}
                  x2="400"
                  y2={y}
                  stroke="rgba(215,239,255,0.07)"
                  strokeWidth="0.75"
                />
              ))}

              {/* Area Gradient Fill */}
              <path d={chartAreaPath} fill="url(#dashboardChartGradient)" />

              {/* Main Glowing Curve Stroke */}
              <path
                d={chartLinePath}
                fill="none"
                stroke="url(#dashboardLineGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                filter="url(#dashboardLineGlow)"
              />

              {/* Peak Highlight Pulse on May 31 */}
              <circle
                cx="400"
                cy="8"
                r="4"
                fill="#38BDF8"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                className="drop-shadow-[0_0_8px_#38BDF8]"
              />
              <circle
                cx="400"
                cy="8"
                r="8"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="1"
                opacity="0.5"
                className="animate-ping"
              />
            </svg>
          </div>
        </div>

        {/* X-Axis Date Labels */}
        <div className="flex justify-between pl-8 pr-1 text-[10px] font-inter text-slate-400">
          <span>Apr 26</span>
          <span>May 3</span>
          <span>May 10</span>
          <span>May 17</span>
          <span>May 24</span>
          <span>May 31</span>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. BOTTOM SUB-SECTION: Top Campaigns + Radial Efficiency  */}
      {/* ========================================================= */}
      <div className="relative z-10 flex flex-col gap-2.5 pt-3 border-t border-sky-400/15">
        <span className="font-inter font-semibold text-base sm:text-[17px] lg:text-lg text-white tracking-tight">
          Top Performing Campaigns
        </span>

        <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
          {/* Left: 4 Campaign Progress Bars */}
          <div className="flex-1 w-full flex flex-col gap-2.5">
            {campaigns.map((c, i) => (
              <div key={i} className="flex items-center gap-3">
                {/* Campaign Dot & Title */}
                <div className="flex items-center gap-2 min-w-[130px] sm:min-w-[155px]">
                  <div
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{
                      backgroundColor: c.color,
                      boxShadow: `0 0 8px ${c.color}`,
                    }}
                  />
                  <span className="font-inter text-xs text-slate-300 truncate">
                    {c.name}
                  </span>
                </div>

                {/* Progress Bar Track */}
                <div className="flex-1 h-2 rounded-full bg-[#051433] border border-sky-400/15 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: c.width }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.1,
                      delay: 0.2 + i * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-[#155EEF] via-[#00C2FF] to-[#38BDF8] shadow-[0_0_8px_rgba(0,194,255,0.5)]"
                  />
                </div>

                {/* Metric Value */}
                <span className="font-inter text-xs font-semibold text-white min-w-[36px] text-right">
                  {c.value}
                </span>
              </div>
            ))}
          </div>

          {/* Right: 87% Campaign Efficiency Radial Donut Gauge */}
          <div className="flex items-center justify-center shrink-0">
            <div className="relative w-22 h-22 sm:w-24 sm:h-24">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <defs>
                  <linearGradient
                    id="efficiencyGaugeGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#155EEF" />
                    <stop offset="60%" stopColor="#00C2FF" />
                    <stop offset="100%" stopColor="#38BDF8" />
                  </linearGradient>
                </defs>
                {/* Background Track */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="none"
                  stroke="#051433"
                  strokeWidth="8"
                />
                {/* Glowing Progress Arc (87% of 238.76 = ~207.7) */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="none"
                  stroke="url(#efficiencyGaugeGradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray="207.7 238.8"
                  className="drop-shadow-[0_0_8px_rgba(0,194,255,0.6)]"
                />
              </svg>
              {/* Inner Center Statistics */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-poppins font-bold text-lg sm:text-xl text-white leading-none drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
                  87%
                </span>
                <span className="font-inter text-[8px] sm:text-[9px] text-slate-400 mt-0.5 text-center leading-tight">
                  Campaign
                  <br />
                  Efficiency
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnalyticsDashboard;
