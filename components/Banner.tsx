import React from "react";

const ERP_LMS_Banner = () => {
  return (
    <div className="relative w-full h-[120px] md:h-[150px] flex items-center justify-center bg-[#0F0F17] text-white text-center rounded-lg border border-[#2A2A37] shadow-md p-4">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2A2A37_10%,transparent_50%)] opacity-30 rounded-lg"></div>

      <div className="relative z-10">
        <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wide">
          Coming Soon
        </p>
        <h1 className="text-lg md:text-2xl font-bold mt-1">
          ERP and LMS System
        </h1>
      </div>

      {/* Enlarged UI Element Positioned at Bottom Right */}
      <div className="absolute bottom-3 right-4 bg-[#2A2A37] p-3 md:p-4 rounded-lg opacity-60">
        <div className="w-32 md:w-40 h-4 md:h-5 bg-gray-600 mb-2 rounded"></div>
        <div className="w-24 md:w-28 h-4 md:h-5 bg-gray-700 rounded"></div>
      </div>
    </div>
  );
};

export default ERP_LMS_Banner;