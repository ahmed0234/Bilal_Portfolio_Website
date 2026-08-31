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
/* Data                                                                */
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
    color: "#EA4335",
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
/* SVG chart paths — Conversions area chart                            */
/* ------------------------------------------------------------------ */
const chartLinePath =
  "M 0 155 C 30 148 50 140 80 132 C 100 126 108 140 125 128 C 145 116 155 108 180 100 C 200 92 210 105 235 88 C 258 72 268 78 290 62 C 312 46 322 52 345 38 C 365 24 380 20 400 15";
const chartAreaPath = `${chartLinePath} L 400 180 L 0 180 Z`;

/* ------------------------------------------------------------------ */
/* AnalyticsDashboard Component                                        */
/* ------------------------------------------------------------------ */
const AnalyticsDashboard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-4 sm:gap-5"
    >
      {/* ============================================== */}
      {/* PANEL 1: Performance Overview                  */}
      {/* ============================================== */}
      <div className="relative rounded-xl bg-[#06132B]/70 backdrop-blur-md border border-[rgba(215,239,255,0.12)] p-4 sm:p-5 overflow-hidden">
        {/* Top specular line */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-sky-300/15 to-transparent pointer-events-none" />

        {/* Header row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00C2FF] shadow-[0_0_8px_#00C2FF]" />
            <span className="font-inter font-semibold text-sm text-white">
              Performance Overview
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#081B3A]/80 border border-sky-200/10 text-[11px] font-inter text-slate-400">
            Last 30 Days
            <LuChevronDown className="w-3 h-3" />
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-3 sm:p-3.5 rounded-lg bg-[#081B3A]/50 border border-sky-200/[0.08] hover:border-sky-400/20 transition-colors duration-200"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#0B2A5B]/60 text-[#38BDF8] mb-2">
                <m.Icon className="w-4 h-4" />
              </div>
              <span className="font-poppins font-bold text-base sm:text-lg text-white leading-none">
                {m.value}
              </span>
              <span className="font-inter text-[11px] text-slate-400 mt-0.5">
                {m.label}
              </span>
              <span className="flex items-center gap-0.5 mt-1.5 text-[10px] sm:text-[11px] font-inter font-medium text-emerald-400">
                <LuTrendingUp className="w-3 h-3" />
                {m.change}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================== */}
      {/* PANEL 2: Conversions Chart                     */}
      {/* ============================================== */}
      <div className="relative rounded-xl bg-[#06132B]/70 backdrop-blur-md border border-[rgba(215,239,255,0.12)] p-4 sm:p-5 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-sky-300/15 to-transparent pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <span className="font-inter font-semibold text-sm text-white">
            Conversions
          </span>
        </div>

        {/* Y-axis + Chart */}
        <div className="flex gap-1.5 sm:gap-2">
          {/* Y-axis labels */}
          <div className="flex flex-col justify-between text-[9px] sm:text-[10px] font-inter text-slate-500 py-0.5 shrink-0 w-6 sm:w-7 text-right">
            <span>5K</span>
            <span>4K</span>
            <span>3K</span>
            <span>2K</span>
            <span>1K</span>
            <span>0</span>
          </div>

          {/* Chart SVG */}
          <div className="flex-1 relative">
            <svg
              viewBox="0 0 400 180"
              className="w-full h-auto"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="servicesChartGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.35" />
                  <stop offset="40%" stopColor="#155EEF" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#020617" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="servicesLineGradient"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="0"
                >
                  <stop offset="0%" stopColor="#155EEF" />
                  <stop offset="100%" stopColor="#38BDF8" />
                </linearGradient>
                <filter id="servicesLineGlow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Horizontal grid lines */}
              {[0, 36, 72, 108, 144, 180].map((y, i) => (
                <line
                  key={i}
                  x1="0"
                  y1={y}
                  x2="400"
                  y2={y}
                  stroke="rgba(215,239,255,0.05)"
                  strokeWidth="0.5"
                />
              ))}

              {/* Area fill */}
              <path d={chartAreaPath} fill="url(#servicesChartGradient)" />

              {/* Main line */}
              <path
                d={chartLinePath}
                fill="none"
                stroke="url(#servicesLineGradient)"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Glow line */}
              <path
                d={chartLinePath}
                fill="none"
                stroke="#00C2FF"
                strokeWidth="1.5"
                opacity="0.3"
                filter="url(#servicesLineGlow)"
              />

              {/* Peak dot */}
              <circle
                cx="400"
                cy="15"
                r="4"
                fill="#38BDF8"
                stroke="#020617"
                strokeWidth="2"
              />
              <circle
                cx="400"
                cy="15"
                r="8"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="0.5"
                opacity="0.3"
              />
            </svg>

            {/* Peak callout badge */}
            <div className="absolute top-0 right-0 -translate-y-1 translate-x-0 flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#155EEF]/25 border border-[#155EEF]/35 backdrop-blur-sm">
              <span className="text-[10px] sm:text-[11px] font-inter font-bold text-[#38BDF8]">
                4.52K
              </span>
              <span className="text-[8px] sm:text-[9px] font-inter text-slate-400">
                Conversions
              </span>
            </div>
          </div>
        </div>

        {/* X-axis labels */}
        <div className="flex justify-between mt-2 ml-7 sm:ml-9 text-[9px] sm:text-[10px] font-inter text-slate-500">
          <span>Apr 26</span>
          <span>May 3</span>
          <span>May 10</span>
          <span>May 17</span>
          <span>May 24</span>
          <span>May 31</span>
        </div>
      </div>

      {/* ============================================== */}
      {/* PANEL 3: Top Performing Campaigns              */}
      {/* ============================================== */}
      <div className="relative rounded-xl bg-[#06132B]/70 backdrop-blur-md border border-[rgba(215,239,255,0.12)] p-4 sm:p-5 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-sky-300/15 to-transparent pointer-events-none" />

        <span className="font-inter font-semibold text-sm text-white mb-4 block">
          Top Performing Campaigns
        </span>

        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
          {/* Campaign rows */}
          <div className="flex-1 flex flex-col gap-3">
            {campaigns.map((c, i) => (
              <div key={i} className="flex items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-2 min-w-[120px] sm:min-w-[150px]">
                  <div
                    className="w-2.5 h-2.5 rounded-full shrink-0 shadow-[0_0_6px_currentColor]"
                    style={{
                      backgroundColor: c.color,
                      boxShadow: `0 0 6px ${c.color}40`,
                    }}
                  />
                  <span className="font-inter text-[11px] sm:text-xs text-slate-300 truncate">
                    {c.name}
                  </span>
                </div>
                <div className="flex-1 h-[7px] rounded-full bg-[#081B3A] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: c.width }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.2 + i * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-[#155EEF] to-[#38BDF8]"
                  />
                </div>
                <span className="font-inter text-[11px] sm:text-xs font-semibold text-white min-w-[36px] text-right">
                  {c.value}
                </span>
              </div>
            ))}
          </div>

          {/* Radial Gauge — 87% Campaign Efficiency */}
          <div className="flex items-center justify-center sm:justify-end shrink-0">
            <div className="relative w-24 h-24 sm:w-[100px] sm:h-[100px]">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full -rotate-90"
              >
                <defs>
                  <linearGradient
                    id="servicesGaugeGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#155EEF" />
                    <stop offset="100%" stopColor="#38BDF8" />
                  </linearGradient>
                </defs>
                {/* Background track */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#081B3A"
                  strokeWidth="7"
                />
                {/* Progress arc */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="url(#servicesGaugeGradient)"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeDasharray="218.6 251.3"
                />
              </svg>
              {/* Center label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-poppins font-bold text-lg sm:text-xl text-white leading-none">
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
