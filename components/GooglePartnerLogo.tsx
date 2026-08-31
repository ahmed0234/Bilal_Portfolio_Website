import React from "react";

export const GooglePartnerLogo: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <span className="font-poppins font-semibold text-lg sm:text-xl tracking-tight">
        <span className="text-[#4285F4]">G</span>
        <span className="text-[#EA4335]">o</span>
        <span className="text-[#FBBC05]">o</span>
        <span className="text-[#4285F4]">g</span>
        <span className="text-[#34A853]">l</span>
        <span className="text-[#EA4335]">e</span>
      </span>
      <span className="font-inter font-medium text-xs sm:text-sm text-slate-200 tracking-wide">
        Partner
      </span>
    </div>
  );
};

export default GooglePartnerLogo;
