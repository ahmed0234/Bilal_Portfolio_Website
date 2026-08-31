import React from "react";

export const GoogleAdsIcon: React.FC<{ className?: string; size?: number }> = ({
  className = "",
  size = 20,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <filter id="adsGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="1" floodColor="#38BDF8" floodOpacity="0.4" />
        </filter>
      </defs>
      {/* Left Yellow Diagonal Pill */}
      <path
        d="M4.62 14.54L9.84 5.5A4.004 4.004 0 0 1 15.3 4.04l.01.01a4.004 4.004 0 0 1 1.46 5.46L11.55 18.55A4.004 4.004 0 0 1 6.09 20.01l-.01-.01a4.004 4.004 0 0 1-1.46-5.46z"
        fill="#FBBC04"
      />
      {/* Middle Blue Bar */}
      <path
        d="M19.38 14.54l-5.22-9.04A4.004 4.004 0 0 0 8.7 4.04l-.01.01a4.004 4.004 0 0 0-1.46 5.46l5.22 9.04a4.004 4.004 0 0 0 5.46 1.46l.01-.01a4.004 4.004 0 0 0 1.46-5.46z"
        fill="#4285F4"
      />
      {/* Bottom Right Green Circle */}
      <circle cx="6.08" cy="17.28" r="3.2" fill="#34A853" />
    </svg>
  );
};

export default GoogleAdsIcon;
