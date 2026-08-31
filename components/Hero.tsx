"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  LuCalendar,
  LuTrendingUp,
  LuUsers,
  LuSearch,
  LuTarget,
} from "react-icons/lu";
import { FiBarChart2 } from "react-icons/fi";
import PerformanceCard from "./PerformanceCard";
import FloatingIcon from "./FloatingIcon";
import GoogleAdsIcon from "./GoogleAdsIcon";
import TrustBar from "./TrustBar";

/* ------------------------------------------------------------------ */
/* Ambient Sparkle Particles Component                                 */
/* ------------------------------------------------------------------ */
const AmbientParticles: React.FC = () => {
  const leftParticles = [
    { left: "8%", top: "35%", delay: "0s", duration: "4.2s" },
    { left: "12%", top: "55%", delay: "1.5s", duration: "5s" },
    { left: "5%", top: "48%", delay: "2.8s", duration: "4.5s" },
    { left: "15%", top: "65%", delay: "0.7s", duration: "5.5s" },
    { left: "18%", top: "40%", delay: "3.2s", duration: "4.8s" },
    { left: "10%", top: "72%", delay: "1.2s", duration: "5.2s" },
    { left: "3%", top: "58%", delay: "4s", duration: "4.3s" },
    { left: "20%", top: "50%", delay: "2s", duration: "5.8s" },
  ];

  const rightParticles = [
    { right: "8%", top: "38%", delay: "0.5s", duration: "4.6s" },
    { right: "12%", top: "52%", delay: "2s", duration: "5.1s" },
    { right: "5%", top: "45%", delay: "3.5s", duration: "4.4s" },
    { right: "15%", top: "68%", delay: "1s", duration: "5.3s" },
    { right: "18%", top: "42%", delay: "2.5s", duration: "4.7s" },
    { right: "10%", top: "75%", delay: "0.3s", duration: "5.6s" },
    { right: "3%", top: "60%", delay: "3.8s", duration: "4.9s" },
    { right: "22%", top: "55%", delay: "1.8s", duration: "5.4s" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
      {leftParticles.map((p, i) => (
        <div
          key={`left-${i}`}
          className="sparkle-particle"
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
      {rightParticles.map((p, i) => (
        <div
          key={`right-${i}`}
          className="sparkle-particle-drift"
          style={{
            right: p.right,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
      <div
        className="ambient-glow-orb"
        style={{
          width: "180px",
          height: "180px",
          left: "6%",
          top: "40%",
          animationDelay: "0s",
        }}
      />
      <div
        className="ambient-glow-orb"
        style={{
          width: "140px",
          height: "140px",
          right: "8%",
          top: "45%",
          animationDelay: "3s",
        }}
      />
      <div
        className="ambient-glow-orb"
        style={{
          width: "100px",
          height: "100px",
          left: "18%",
          top: "65%",
          animationDelay: "1.5s",
        }}
      />
      <div
        className="ambient-glow-orb"
        style={{
          width: "120px",
          height: "120px",
          right: "15%",
          top: "60%",
          animationDelay: "4.5s",
        }}
      />
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Hero Section                                                        */
/* Background is rendered by the parent (page.tsx) via HeroBackground  */
/* so it seamlessly covers both the navbar and the hero.               */
/* ------------------------------------------------------------------ */
export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden flex flex-col items-center text-white">
      {/* ========================================================= */}
      {/* AMBIENT SPARKLE/PARTICLE EFFECTS                          */}
      {/* ========================================================= */}
      <AmbientParticles />

      {/* ========================================================= */}
      {/* MAIN CONTENT STACK                                        */}
      {/* ========================================================= */}
      <div className="relative z-10 flex flex-col items-center w-full h-full">
        {/* ======================================================= */}
        {/* SECTION A: HEADLINE + SUBHEADING (FOREGROUND z-30)      */}
        {/* Text sits clearly in the foreground, fully readable      */}
        {/* ======================================================= */}
        <div className="relative z-30 flex flex-col items-center text-center w-full px-4 pt-2 sm:pt-4 md:pt-5">
          {/* Primary Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-poppins font-bold text-[26px] xs:text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[56px] leading-[1.1] tracking-tight text-white max-w-4xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
          >
            Turn Google Searches <br className="hidden sm:inline" />
            Into{" "}
            <span className="bg-gradient-to-r from-[#00C2FF] via-[#38BDF8] to-[#155EEF] bg-clip-text text-transparent">
              High Value
            </span>{" "}
            Customers.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.16,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-[15px] lg:text-base text-slate-100/90 font-inter font-normal leading-relaxed max-w-xl sm:max-w-2xl text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            I help businesses generate qualified leads, increase ROAS, and scale
            profitably with data driven Google Ads strategies that deliver real
            results.
          </motion.p>
        </div>

        {/* ======================================================= */}
        {/* SECTION B: 3D PORTRAIT COMPOSITION                      */}
        {/* The portrait sits BELOW the text, never overlapping it.  */}
        {/* Cards & icons float around it at z-25, creating depth.   */}
        {/* The portrait has a negative margin-top to slightly tuck  */}
        {/* into the text zone for 3D layering, but the text's z-30  */}
        {/* ensures it stays on top and readable.                    */}
        {/* ======================================================= */}
        <div className="relative z-20 w-full flex-1 flex flex-col items-center min-h-0 px-4 sm:px-6 md:px-8">
          {/* Central Stage: portrait + floating elements */}
          <div className="relative w-full max-w-6xl mx-auto flex justify-center items-start flex-1 min-h-0 -mt-2 sm:-mt-4 md:-mt-6">
            {/* Central Portrait with 3D depth: foreground presence */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 0%, black 68%, transparent 92%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, black 68%, transparent 92%)",
              }}
              className="relative z-20 w-[220px] xs:w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] xl:w-[450px] select-none pointer-events-none drop-shadow-[0_20px_50px_rgba(0,140,255,0.3)] mt-1 sm:mt-2"
            >
              {/* Subtle glow ring behind the portrait for 3D pop */}
              <div className="absolute inset-0 -m-3 sm:-m-4 rounded-full bg-[radial-gradient(ellipse_50%_50%_at_50%_35%,rgba(0,194,255,0.08)_0%,transparent_70%)] pointer-events-none" />

              <Image
                src="/HeroPortfolioImage.png"
                alt="Bilal - Google Ads Specialist"
                width={1145}
                height={1373}
                priority
                quality={95}
                className="relative w-full h-auto object-contain"
              />
            </motion.div>

            {/* ===================================================== */}
            {/* FLOATING PERFORMANCE CARDS (z-25, between text & BG)   */}
            {/* Strong floating animation with varied timing          */}
            {/* ===================================================== */}

            {/* TOP-LEFT CARD: ROAS */}
            <motion.div
              animate={{
                y: [0, -14, 0, 6, 0],
              }}
              transition={{
                y: {
                  duration: 5.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  times: [0, 0.3, 0.55, 0.8, 1],
                },
              }}
              className="absolute z-25 left-0 sm:left-2 md:left-6 lg:left-14 xl:left-22 top-[8%] sm:top-[10%] md:top-[12%]"
            >
              <PerformanceCard
                title="ROAS"
                value="8.73x"
                change="45.3%"
                chartVariant="roas"
                delay={0.25}
              />
            </motion.div>

            {/* BOTTOM-LEFT CARD: CONVERSIONS */}
            <motion.div
              animate={{
                y: [0, -12, 0, 8, 0],
              }}
              transition={{
                y: {
                  duration: 6.2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: 0.8,
                  times: [0, 0.35, 0.6, 0.85, 1],
                },
              }}
              className="absolute z-25 left-2 sm:left-6 md:left-12 lg:left-22 xl:left-28 top-[42%] sm:top-[44%] md:top-[46%]"
            >
              <PerformanceCard
                title="Conversions"
                value="4.52K"
                change="32.6%"
                chartVariant="conversions"
                delay={0.35}
              />
            </motion.div>

            {/* TOP-RIGHT CARD: REVENUE */}
            <motion.div
              animate={{
                y: [0, -16, 0, 5, 0],
              }}
              transition={{
                y: {
                  duration: 5.8,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: 0.4,
                  times: [0, 0.32, 0.58, 0.82, 1],
                },
              }}
              className="absolute z-25 right-0 sm:right-2 md:right-6 lg:right-14 xl:right-22 top-[8%] sm:top-[10%] md:top-[12%]"
            >
              <PerformanceCard
                title="Revenue"
                value="$287K"
                change="61.8%"
                chartVariant="revenue"
                delay={0.3}
              />
            </motion.div>

            {/* BOTTOM-RIGHT CARD: CTR */}
            <motion.div
              animate={{
                y: [0, -10, 0, 9, 0],
              }}
              transition={{
                y: {
                  duration: 6.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: 1.2,
                  times: [0, 0.28, 0.55, 0.83, 1],
                },
              }}
              className="absolute z-25 right-2 sm:right-6 md:right-12 lg:right-22 xl:right-28 top-[42%] sm:top-[44%] md:top-[46%]"
            >
              <PerformanceCard
                title="CTR"
                value="7.61%"
                change="18.9%"
                chartVariant="ctr"
                delay={0.4}
              />
            </motion.div>

            {/* ===================================================== */}
            {/* FLOATING ORBITAL ICONS (z-25, strong floating motion) */}
            {/* Each has unique duration + offset for organic feel     */}
            {/* ===================================================== */}

            {/* Upper-Left Users Icon */}
            <div className="hidden sm:block absolute z-25 left-[12%] md:left-[15%] lg:left-[17%] top-[4%] sm:top-[6%]">
              <FloatingIcon
                icon={<LuUsers className="w-4 h-4" />}
                size="sm"
                floatDuration={4.5}
                floatOffset={18}
                delay={0.15}
                tooltip="Target Audiences"
              />
            </div>

            {/* Mid-Left Users Icon */}
            <div className="hidden md:block absolute z-25 left-[2%] lg:left-[5%] top-[34%] sm:top-[36%]">
              <FloatingIcon
                icon={<LuUsers className="w-4 h-4" />}
                size="sm"
                floatDuration={5.3}
                floatOffset={22}
                delay={0.35}
                tooltip="Audience Expansion"
              />
            </div>

            {/* Lower-Left Search Icon */}
            <div className="hidden sm:block absolute z-25 left-[6%] md:left-[9%] lg:left-[11%] bottom-[20%] sm:bottom-[22%]">
              <FloatingIcon
                icon={<LuSearch className="w-4 h-4" />}
                size="sm"
                floatDuration={4.8}
                floatOffset={16}
                delay={0.5}
                tooltip="Search Intent Targeting"
              />
            </div>

            {/* Upper-Right Google Ads Logo */}
            <div className="hidden sm:block absolute z-25 right-[12%] md:right-[15%] lg:right-[17%] top-[4%] sm:top-[6%]">
              <FloatingIcon
                icon={<GoogleAdsIcon size={18} />}
                size="sm"
                floatDuration={4.2}
                floatOffset={20}
                delay={0.2}
                tooltip="Google Ads Certified"
              />
            </div>

            {/* Mid-Right Target Icon */}
            <div className="hidden md:block absolute z-25 right-[2%] lg:right-[5%] top-[36%] sm:top-[38%]">
              <FloatingIcon
                icon={<LuTarget className="w-4 h-4" />}
                size="sm"
                floatDuration={5.0}
                floatOffset={24}
                delay={0.4}
                tooltip="High-Intent Conversion"
              />
            </div>

            {/* Lower-Right Chart Icon */}
            <div className="hidden sm:block absolute z-25 right-[6%] md:right-[9%] lg:right-[11%] bottom-[20%] sm:bottom-[22%]">
              <FloatingIcon
                icon={<FiBarChart2 className="w-4 h-4" />}
                size="sm"
                floatDuration={4.6}
                floatOffset={17}
                delay={0.6}
                tooltip="ROAS Growth"
              />
            </div>
          </div>

          {/* ======================================================= */}
          {/* CTA BUTTONS: Positioned over the portrait fade zone     */}
          {/* ======================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-30 flex flex-row items-center justify-center gap-3 sm:gap-4 -mt-6 xs:-mt-8 sm:-mt-10 md:-mt-12 w-full"
          >
            {/* Primary 3D CTA: Book a Strategy Call */}
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 sm:gap-2.5 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl text-white font-inter font-medium text-xs sm:text-sm tracking-wide bg-gradient-to-b from-[#2982FF] via-[#1677FF] to-[#074ec4] border border-sky-400/35 border-t-sky-200/70 shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),inset_0_-2px_4px_rgba(0,0,0,0.45),0_6px_22px_rgba(22,119,255,0.6),0_14px_30px_rgba(0,0,0,0.65)] hover:from-[#3a8eff] hover:to-[#1065e0] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.55),0_8px_28px_rgba(0,194,255,0.75),0_16px_34px_rgba(0,0,0,0.7)] active:scale-[0.98] transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />
              <LuCalendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]" />
              <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                Book a Strategy Call
              </span>
            </a>

            {/* Secondary 3D Glass CTA: View Results */}
            <a
              href="#case-studies"
              className="group relative inline-flex items-center justify-center gap-2 sm:gap-2.5 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl text-white font-inter font-medium text-xs sm:text-sm tracking-wide bg-gradient-to-b from-[#0e244d]/90 via-[#071735]/90 to-[#040e22]/95 backdrop-blur-xl border border-sky-400/25 border-t-sky-300/45 shadow-[inset_0_1px_1.5px_rgba(215,239,255,0.28),inset_0_-2px_4px_rgba(0,0,0,0.55),0_6px_18px_rgba(0,0,0,0.55),0_0_16px_rgba(21,94,239,0.18)] hover:bg-[#0c224a] hover:border-cyan-400/50 hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_0_24px_rgba(0,194,255,0.38)] active:scale-[0.98] transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-sky-300/50 to-transparent pointer-events-none" />
              <LuTrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 group-hover:text-cyan-300 transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]" />
              <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                View Results
              </span>
            </a>
          </motion.div>
        </div>

        {/* ======================================================= */}
        {/* SECTION C: BOTTOM TRUST / PROOF BAR                     */}
        {/* ======================================================= */}
        <div className="relative z-30 w-full px-4 sm:px-6 md:px-8 lg:px-12 pt-3 sm:pt-4 pb-3 sm:pb-4">
          <TrustBar />
        </div>
      </div>
    </section>
  );
};

export default Hero;
