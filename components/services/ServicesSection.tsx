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
/* Services data                                                       */
/* ------------------------------------------------------------------ */
const services = [
  {
    number: "01",
    title: "Account Audit & Strategy",
    description:
      "Deep audit of your account to uncover growth opportunities and build a winning strategy.",
    icon: <LuSearch className="w-5 h-5" />,
  },
  {
    number: "02",
    title: "Campaign Setup & Management",
    description:
      "High-converting Google Ads campaigns built with precision targeting and proven frameworks.",
    icon: <LuTarget className="w-5 h-5" />,
  },
  {
    number: "03",
    title: "Optimization & Bid Management",
    description:
      "Continuous optimization to improve performance, reduce costs, and maximize conversions.",
    icon: <LuChartBarIncreasing className="w-5 h-5" />,
  },
  {
    number: "04",
    title: "Lead Generation & Conversion",
    description:
      "We generate high-quality, pre-qualified leads that turn into paying customers.",
    icon: <LuUsers className="w-5 h-5" />,
  },
  {
    number: "05",
    title: "Reporting & Insights",
    description:
      "Transparent reporting with real insights so you always know what's working and why.",
    icon: <LuChartColumn className="w-5 h-5" />,
  },
  {
    number: "06",
    title: "Scaling & Growth",
    description:
      "Scale winning campaigns profitably and unlock new opportunities to grow your business.",
    icon: <LuRocket className="w-5 h-5" />,
  },
];

/* ------------------------------------------------------------------ */
/* ServicesSection Component                                           */
/* ------------------------------------------------------------------ */
const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-[#020617] py-16 sm:py-20 lg:py-28 overflow-hidden"
    >
      {/* ============================================== */}
      {/* AMBIENT BACKGROUND GLOW ORBS                   */}
      {/* ============================================== */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(21,94,239,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,194,255,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(21,94,239,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12">
        {/* ============================================== */}
        {/* SECTION HEADER                                 */}
        {/* ============================================== */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          {/* "OUR SERVICES" badge pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-5 sm:mb-6"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#38BDF8]/35 bg-[#081B3A]/50 backdrop-blur-sm font-inter text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-[#38BDF8]">
              Our Services
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.15] tracking-tight text-white max-w-3xl mx-auto mb-4 sm:mb-5"
          >
            Complete Google Ads Solutions
            <br className="hidden sm:inline" /> That{" "}
            <span className="bg-gradient-to-r from-[#00C2FF] via-[#38BDF8] to-[#155EEF] bg-clip-text text-transparent">
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
            className="font-inter text-sm sm:text-[15px] text-slate-400 leading-relaxed max-w-xl mx-auto"
          >
            End-to-end Google Ads management focused on one thing:
            <br className="hidden sm:inline" />
            More{" "}
            <span className="text-white underline underline-offset-4 decoration-sky-400/40 decoration-1">
              qualified leads
            </span>
            , more customers, and{" "}
            <span className="text-white underline underline-offset-4 decoration-sky-400/40 decoration-1">
              higher ROI
            </span>{" "}
            for your business.
          </motion.p>
        </div>

        {/* ============================================== */}
        {/* TWO-COLUMN BODY: Service Cards + Dashboard     */}
        {/* ============================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] gap-5 sm:gap-6 max-w-[1400px] mx-auto mb-10 sm:mb-14">
          {/* Left column: Service Cards */}
          <div className="flex flex-col gap-3 sm:gap-3.5">
            {services.map((s, i) => (
              <ServiceCard key={s.number} {...s} delay={0.05 * i} />
            ))}
          </div>

          {/* Right column: Analytics Dashboard */}
          <AnalyticsDashboard />
        </div>

        {/* ============================================== */}
        {/* INDUSTRIES TRUST BAR                           */}
        {/* ============================================== */}
        <div className="max-w-[1400px] mx-auto mb-8 sm:mb-10">
          <IndustriesTrustBar />
        </div>

        {/* ============================================== */}
        {/* BOTTOM CTA                                     */}
        {/* ============================================== */}
        <div className="max-w-[1400px] mx-auto">
          <ServicesCTA />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
