"use client";

import React, { useEffect, useRef } from "react";
import { motion, animate, useInView } from "motion/react";
import { FaStar } from "react-icons/fa6";

/* ------------------------------------------------------------------ */
/* Smooth Number Counting Animation Component                         */
/* ------------------------------------------------------------------ */
interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  delay?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  prefix = "",
  suffix = "",
  duration = 1.3,
  delay = 0.4,
}) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (!inView) return;
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(0, value, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        node.textContent = `${prefix}${Math.round(latest)}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [value, prefix, suffix, duration, delay, inView]);

  return <span ref={nodeRef}>{`${prefix}0${suffix}`}</span>;
};

/* ------------------------------------------------------------------ */
/* TrustBar Component                                                 */
/* ------------------------------------------------------------------ */
export const TrustBar: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full max-w-5xl mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#081838]/85 via-[#040e24]/85 to-[#020714]/90 backdrop-blur-xl border border-sky-400/20 border-t-sky-300/35 px-4 sm:px-8 py-2.5 sm:py-3.5 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.18),inset_0_-2px_4px_rgba(0,0,0,0.6),0_15px_40px_rgba(0,5,20,0.85),0_0_25px_rgba(0,140,255,0.12)] overflow-hidden ${className}`}
    >
      {/* Top Glass Luminous Highlight Reflection */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-sky-300/50 to-transparent pointer-events-none" />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6 lg:gap-3">
        {/* 1. Ad Spend Managed */}
        <div className="flex flex-col items-center text-center">
          <span className="font-poppins font-bold text-lg sm:text-xl lg:text-[21px] text-white tracking-tight leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            <AnimatedCounter value={25} prefix="$" suffix="K+" delay={0.4} />
          </span>
          <span className="font-inter text-[11px] sm:text-xs text-slate-400 font-medium mt-1">
            Ad Spend Managed
          </span>
        </div>

        {/* Divider 1 (Desktop) */}
        <div className="hidden lg:block w-[1px] h-8 bg-sky-200/15" />

        {/* 2. Businesses Scaled */}
        <div className="flex flex-col items-center text-center">
          <span className="font-poppins font-bold text-lg sm:text-xl lg:text-[21px] text-white tracking-tight leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            <AnimatedCounter value={25} suffix="+" delay={0.48} />
          </span>
          <span className="font-inter text-[11px] sm:text-xs text-slate-400 font-medium mt-1">
            Businesses Scaled
          </span>
        </div>

        {/* Divider 2 (Desktop) */}
        <div className="hidden lg:block w-[1px] h-8 bg-sky-200/15" />

        {/* 3. Qualified Leads */}
        <div className="flex flex-col items-center text-center">
          <span className="font-poppins font-bold text-lg sm:text-xl lg:text-[21px] text-white tracking-tight leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            <AnimatedCounter value={56} suffix="K+" delay={0.56} />
          </span>
          <span className="font-inter text-[11px] sm:text-xs text-slate-400 font-medium mt-1">
            Qualified Leads
          </span>
        </div>

        {/* Divider 3 (Desktop) */}
        <div className="hidden lg:block w-[1px] h-8 bg-sky-200/15" />

        {/* 4. ROI-Focused Campaigns */}
        <div className="flex flex-col items-center text-center">
          <span className="font-poppins font-bold text-lg sm:text-xl lg:text-[21px] text-white tracking-tight leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            ROI Focused
          </span>
          <span className="font-inter text-[11px] sm:text-xs text-slate-400 font-medium mt-1">
            Campaigns
          </span>
        </div>

        {/* Divider 4 (Desktop) */}
        <div className="hidden lg:block w-[1px] h-8 bg-sky-200/15" />

        {/* 5. Five-Star Rated */}
        <div className="flex flex-col items-center text-center col-span-2 sm:col-span-1">
          <div className="flex items-center justify-center gap-0.5 text-[#00C2FF] mb-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current drop-shadow-[0_0_6px_rgba(0,194,255,0.6)]"
              />
            ))}
          </div>
          <div className="flex items-center justify-center gap-1 leading-none">
            <span className="font-inter text-xs sm:text-[13px] font-semibold text-white">
              Five-Star Rated
            </span>
            <span className="font-inter text-[10px] sm:text-[11px] text-slate-400">
              By Clients
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TrustBar;
