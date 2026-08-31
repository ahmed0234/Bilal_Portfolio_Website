"use client";

import React from "react";
import { motion } from "motion/react";
import {
  LuHouse,
  LuShoppingCart,
  LuHeartPulse,
  LuCloud,
  LuBuilding2,
  LuGraduationCap,
  LuScale,
  LuBanknote,
} from "react-icons/lu";

/* ------------------------------------------------------------------ */
/* Industries data                                                     */
/* ------------------------------------------------------------------ */
interface IndustryItem {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const industries: IndustryItem[] = [
  { name: "Home Services", Icon: LuHouse },
  { name: "Ecommerce", Icon: LuShoppingCart },
  { name: "Healthcare", Icon: LuHeartPulse },
  { name: "SaaS", Icon: LuCloud },
  { name: "Real Estate", Icon: LuBuilding2 },
  { name: "Education", Icon: LuGraduationCap },
  { name: "Legal", Icon: LuScale },
  { name: "Finance", Icon: LuBanknote },
];

/* ------------------------------------------------------------------ */
/* IndustriesTrustBar Component                                        */
/* ------------------------------------------------------------------ */
const IndustriesTrustBar: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full rounded-xl bg-[#06132B]/50 backdrop-blur-md border border-[rgba(215,239,255,0.12)] px-4 sm:px-6 py-6 sm:py-8 overflow-hidden"
    >
      {/* Top specular line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-sky-300/15 to-transparent pointer-events-none" />

      <h3 className="font-poppins font-semibold text-sm sm:text-base text-white text-center mb-5 sm:mb-6">
        Trusted By Businesses Across Industries
      </h3>

      <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 sm:gap-5">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: 0.04 * i,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col items-center gap-2 group cursor-default"
          >
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#081B3A]/60 border border-sky-200/[0.08] text-slate-400 group-hover:text-[#38BDF8] group-hover:border-cyan-400/25 group-hover:shadow-[0_0_12px_rgba(0,194,255,0.12)] transition-all duration-300">
              <ind.Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="font-inter text-[10px] sm:text-xs text-slate-400 text-center leading-tight group-hover:text-slate-300 transition-colors duration-200">
              {ind.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default IndustriesTrustBar;
