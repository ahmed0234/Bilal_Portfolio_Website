"use client";

import React from "react";
import { motion } from "motion/react";
import {
  LuSearch,
  LuTarget,
  LuChartBarIncreasing,
  LuUsers,
  LuChartColumn,
  LuRocket,
} from "react-icons/lu";
import ServiceCard from "./ServiceCard";
import AnalyticsDashboard from "./AnalyticsDashboard";
import IndustriesTrustBar from "./IndustriesTrustBar";
import ServicesCTA from "./ServicesCTA";

/* ------------------------------------------------------------------ */
/* Services Data                                                       */
/* ------------------------------------------------------------------ */
const services = [
  {
    number: "01",
    title: "Account Audit & Strategy",
    description:
      "Deep audit of your account to uncover growth opportunities and build a winning strategy.",
    icon: <LuSearch className="w-6 h-6 sm:w-6.5 sm:h-6.5" />,
  },
  {
    number: "02",
    title: "Campaign Setup & Management",
    description:
      "High-converting Google Ads campaigns built with precision targeting and proven frameworks.",
    icon: <LuTarget className="w-6 h-6 sm:w-6.5 sm:h-6.5" />,
  },
  {
    number: "03",
    title: "Optimization & Bid Management",
    description:
      "Continuous optimization to improve performance, reduce costs, and maximize conversions.",
    icon: <LuChartBarIncreasing className="w-6 h-6 sm:w-6.5 sm:h-6.5" />,
  },
  {
    number: "04",
    title: "Lead Generation & Conversion",
    description:
      "We generate high-quality, pre-qualified leads that turn into paying customers.",
    icon: <LuUsers className="w-6 h-6 sm:w-6.5 sm:h-6.5" />,
  },
  {
    number: "05",
    title: "Reporting & Insights",
    description:
      "Transparent reporting with real insights so you always know what's working and why.",
    icon: <LuChartColumn className="w-6 h-6 sm:w-6.5 sm:h-6.5" />,
  },
  {
    number: "06",
    title: "Scaling & Growth",
    description:
      "Scale winning campaigns profitably and unlock new opportunities to grow your business.",
    icon: <LuRocket className="w-6 h-6 sm:w-6.5 sm:h-6.5" />,
  },
];

/* ------------------------------------------------------------------ */
/* Main ServicesSection Component                                      */
/* ------------------------------------------------------------------ */
export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-[#020617] pt-4 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 overflow-hidden select-none"
    >
      {/* ========================================================= */}
      {/* AMBIENT BACKGROUND COSMIC GLOW ORBS                       */}
      {/* ========================================================= */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,194,255,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(21,94,239,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-40 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,194,255,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1440px] mx-auto">
        {/* ======================================================= */}
        {/* 1. SECTION HEADER                                       */}
        {/* ======================================================= */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          {/* "OUR SERVICES" Badge Pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-4 sm:mb-5"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#38BDF8]/40 bg-[#081B3A]/60 backdrop-blur-md font-inter text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#38BDF8] shadow-[0_0_12px_rgba(56,189,248,0.2)]">
              Our Services
            </span>
          </motion.div>

          {/* Primary Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.15] tracking-tight text-white max-w-3xl mx-auto mb-3.5 sm:mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
          >
            Complete Google Ads Solutions
            <br className="hidden sm:inline" /> That{" "}
            <span className="bg-gradient-to-r from-[#00C2FF] via-[#38BDF8] to-[#155EEF] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,194,255,0.4)]">
              Drive Real Business Growth.
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.16,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-inter text-xs sm:text-sm md:text-[15px] text-slate-400 leading-relaxed max-w-xl mx-auto"
          >
            End-to-end Google Ads management focused on one thing:
            <br className="hidden sm:inline" />
            More{" "}
            <span className="text-white underline underline-offset-4 decoration-sky-400/50 decoration-1">
              qualified leads
            </span>
            , more customers, and{" "}
            <span className="text-white underline underline-offset-4 decoration-sky-400/50 decoration-1">
              higher ROI
            </span>{" "}
            for your business.
          </motion.p>
        </div>

        {/* ======================================================= */}
        {/* 2. TWO-COLUMN MAIN BODY (EQUAL HEIGHT ALIGNMENT)        */}
        {/* ======================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.42fr] xl:grid-cols-[1fr_1.38fr] gap-5 sm:gap-6 items-stretch mb-8 sm:mb-10">
          {/* Left Column: 6 Equal Height Service Cards */}
          <div className="flex flex-col justify-between gap-3 sm:gap-3.5 h-full">
            {services.map((s, i) => (
              <ServiceCard key={s.number} {...s} delay={0.04 * i} />
            ))}
          </div>

          {/* Right Column: Unified Cohesive Analytics Dashboard */}
          <div className="h-full">
            <AnalyticsDashboard />
          </div>
        </div>

        {/* ======================================================= */}
        {/* 3. INDUSTRIES TRUST BAR                                 */}
        {/* ======================================================= */}
        <div className="w-full mb-6 sm:mb-8">
          <IndustriesTrustBar />
        </div>

        {/* ======================================================= */}
        {/* 4. CALL TO ACTION BANNER                                */}
        {/* ======================================================= */}
        <div className="w-full">
          <ServicesCTA />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
