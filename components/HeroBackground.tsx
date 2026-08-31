"use client";

import React from "react";
import Image from "next/image";

/**
 * HeroBackground — Full-viewport cinematic background layer.
 *
 * Positioned absolutely, covering 100vh (both navbar + hero).
 * The spotlight starts from the very top with no gaps.
 */
const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
      {/* Base Background Image: starts from absolute top, covers full viewport */}
      <Image
        src="/HeroBackground.png"
        alt="Cinematic Overhead Spotlight Background"
        fill
        priority
        quality={95}
        className="object-cover object-top"
      />

      {/* Subtle Lateral Vignette: soft darkening on edges, background remains visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/40 via-transparent to-[#020617]/40 pointer-events-none" />

      {/* Radial Atmosphere: enhance center spotlight contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_50%_8%,transparent_40%,rgba(2,6,23,0.45)_100%)] pointer-events-none" />

      {/* Bottom Edge Transition */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent pointer-events-none" />
    </div>
  );
};

export default HeroBackground;
