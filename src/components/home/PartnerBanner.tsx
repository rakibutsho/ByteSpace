import React from "react";

const partners = [
  { name: "Google", logoText: "Google" },
  { name: "Netflix", logoText: "NETFLIX" },
  { name: "Airbnb", logoText: "airbnb" },
  { name: "Amazon", logoText: "amazon" },
  { name: "Facebook", logoText: "facebook" },
  { name: "Spotify", logoText: "Spotify" },
];

export const PartnerBanner: React.FC = () => {
  return (
    <section className="border-b border-gray-100 bg-white py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
          Trusted by 5,000+ teams and leading universities worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          {partners.map((partner) => (
            <span
              key={partner.name}
              className="text-lg sm:text-2xl font-black tracking-tight text-gray-500 hover:text-blue-600 transition-colors select-none"
            >
              {partner.logoText}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
