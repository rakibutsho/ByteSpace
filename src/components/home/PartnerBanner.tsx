import React from "react";

const LogoWaves = () => (
  <svg viewBox="0 0 32 32" fill="currentColor" className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
    <path d="M16 0C7.16 0 0 7.16 0 16c0 8.84 7.16 16 16 16s16-7.16 16-16C32 7.16 24.84 0 16 0zm-1 3.2c4.4.2 8.4 2.2 11 5.4-3.2.2-6.5 1.6-9.1 3.8-3 2.5-6.6 3.7-10.3 3.4-1.7-.1-3.4-.6-4.9-1.6 1.9-6 7.3-10.4 13.3-11zm-12.8 13.7c1.8 1.1 3.9 1.8 6.1 2 4.3.4 8.6-1 12.1-4 2.7-2.3 5.9-3.6 9.1-3.8 1.1 1.8 1.7 3.8 1.8 6-.9-.1-2-.1-3 .2-4.1 1.1-7.6 3.6-11.2 6-3.3 2.2-7 3.3-10.8 2.8-1.5-.2-2.8-.6-4.1-1.4v-7.8zm14.1 12.5c-4 0-7.7-1.6-10.4-4.2 1.4.6 2.9.9 4.5 1.1 4.3.4 8.6-.8 12.1-3.7 2.9-2.4 6.2-3.7 9.4-3.5-1.6 5.9-7 10.3-15.6 10.3z" />
  </svg>
);

const LogoStarburst = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
    <circle cx="16" cy="16" r="4.5" strokeWidth="2.8" />
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
      <line
        key={i}
        x1="16"
        y1="2.8"
        x2="16"
        y2="7.5"
        strokeWidth="2.4"
        strokeLinecap="round"
        transform={`rotate(${angle} 16 16)`}
      />
    ))}
  </svg>
);

const LogoBolt = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
    <circle cx="16" cy="16" r="16" fill="currentColor" />
    <path
      d="M17.5 6.5L10 17.5H16L14.5 25.5L22 14.5H16L17.5 6.5Z"
      fill="white"
    />
  </svg>
);

const LogoClover = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
    <circle cx="16" cy="16" r="16" fill="currentColor" />
    <circle cx="16" cy="11" r="3.2" fill="white" />
    <circle cx="16" cy="21" r="3.2" fill="white" />
    <circle cx="11" cy="16" r="3.2" fill="white" />
    <circle cx="21" cy="16" r="3.2" fill="white" />
    <circle cx="16" cy="16" r="1.8" fill="white" />
  </svg>
);

const LogoRipples = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
    <defs>
      <clipPath id="partner-ripple-clip">
        <circle cx="16" cy="16" r="16" />
      </clipPath>
    </defs>
    <g clipPath="url(#partner-ripple-clip)">
      <circle cx="16" cy="16" r="16" fill="currentColor" />
      {[3.5, 6.5, 9.5, 12.5, 15.5, 18.5, 21.5, 24.5, 27.5].map((r, i) => (
        <circle
          key={i}
          cx="11"
          cy="11"
          r={r}
          stroke="white"
          strokeWidth="1.1"
          fill="none"
        />
      ))}
      <circle cx="11" cy="11" r="2.2" fill="white" />
    </g>
  </svg>
);

const partnerLogos = [
  { id: "waves", Component: LogoWaves },
  { id: "starburst", Component: LogoStarburst },
  { id: "bolt", Component: LogoBolt },
  { id: "clover", Component: LogoClover },
  { id: "ripples", Component: LogoRipples },
];

const repeatedLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

export const PartnerBanner: React.FC = () => {
  return (
    <section className="relative w-full bg-[#FAFAFA] border-y border-gray-100 py-10 sm:py-12 lg:py-14 select-none overflow-hidden">
      {/* Smooth edge fade overlays */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10" />

      {/* Infinite scrolling marquee track */}
      <div className="flex animate-marquee">
        {[0, 1].map((copyIndex) => (
          <div
            key={copyIndex}
            className="flex items-center gap-12 sm:gap-16 md:gap-20 lg:gap-24 pr-12 sm:pr-16 md:pr-20 lg:pr-24 flex-shrink-0"
            aria-hidden={copyIndex === 1 ? "true" : undefined}
          >
            {repeatedLogos.map(({ id, Component }, index) => (
              <div
                key={`${copyIndex}-${id}-${index}`}
                className="flex items-center gap-2.5 sm:gap-3 text-[#667085] hover:text-[#101828] transition-colors duration-200 cursor-default"
              >
                <Component />
                <span className="font-bold text-xl sm:text-2xl tracking-tight font-satoshi text-current">
                  Logoipsum
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
