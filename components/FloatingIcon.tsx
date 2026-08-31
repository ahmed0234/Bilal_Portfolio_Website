"use client";

import React from "react";
import { motion } from "motion/react";

export interface FloatingIconProps {
  icon: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  floatDuration?: number;
  floatOffset?: number;
  delay?: number;
  tooltip?: string;
}

export const FloatingIcon: React.FC<FloatingIconProps> = ({
  icon,
  className = "",
  size = "md",
  floatDuration = 4,
  floatOffset = 18,
  delay = 0,
  tooltip,
}) => {
  const sizeClasses = {
    sm: "w-9 h-9 text-base",
    md: "w-11 h-11 text-lg",
    lg: "w-13 h-13 text-xl",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -floatOffset, 0, floatOffset * 0.3, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: {
          duration: floatDuration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: delay * 0.5,
          times: [0, 0.35, 0.6, 0.85, 1],
        },
      }}
      whileHover={{ scale: 1.12, transition: { duration: 0.2 } }}
      title={tooltip}
      className={`rounded-full bg-[#06132B]/85 backdrop-blur-xl border border-sky-400/30 hover:border-cyan-400/60 shadow-[0_0_20px_rgba(0,194,255,0.22),inset_0_1px_1px_rgba(255,255,255,0.15)] flex items-center justify-center text-sky-300 hover:text-cyan-300 transition-colors cursor-pointer select-none ${sizeClasses[size]} ${className}`}
    >
      {icon}
    </motion.div>
  );
};

export default FloatingIcon;
