"use client";

import React from "react";
import Image from "next/image";

const BlueCheckIcon: React.FC = () => (
  <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 xl:w-6 xl:h-6 rounded-full bg-[#2E5CFF] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className="w-3 h-3 xl:w-3.5 xl:h-3.5 stroke-current stroke-[2.5]"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="3.5 8.5 6.5 11.5 12.5 5" />
    </svg>
  </div>
);

const courseCreationBenefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export const CommunityStatsSection: React.FC = () => {
  return (
    <section
      className="py-16 sm:py-24 lg:py-28 xl:py-32 relative overflow-hidden"
      style={{
        background: [
          /* Top-left soft neon yellow-green glow — #D4FB20 */
          "radial-gradient(ellipse at 0% 0%, rgba(212, 251, 32, 0.18) 0%, transparent 50%)",
          /* Top-right soft blue-lavender glow — #003BE2 */
          "radial-gradient(ellipse at 100% 10%, rgba(0, 59, 226, 0.10) 0%, transparent 45%)",
          /* Bottom-left neon radial — #CBFC01 */
          "radial-gradient(ellipse at 5% 90%, rgba(203, 252, 1, 0.16) 0%, transparent 45%)",
          /* Bottom-right blue radial — #003BE2 */
          "radial-gradient(ellipse at 100% 100%, rgba(0, 59, 226, 0.14) 0%, transparent 45%)",
          /* Base white */
          "#ffffff",
        ].join(", "),
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        {/* ================= PART 1: Professional Growth (Top) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center mb-24 lg:mb-32 xl:mb-36">
          {/* Left: Text & Stats */}
          <div className="lg:col-span-6 lg:pr-4 xl:pr-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[52px] font-extrabold text-[#101828] tracking-tight leading-[1.18] xl:leading-[1.14] font-satoshi">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>

            <p className="mt-5 sm:mt-6 xl:mt-7 text-sm sm:text-base xl:text-[17px] text-[#667085] leading-relaxed max-w-lg xl:max-w-xl">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Metrics */}
            <div className="mt-8 sm:mt-10 xl:mt-12 flex items-center gap-10 sm:gap-14 xl:gap-16">
              <div>
                <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-[44px] font-extrabold text-[#2E5CFF] tracking-tight font-satoshi">
                  12K
                </p>
                <p className="mt-1 xl:mt-1.5 text-xs sm:text-sm xl:text-base font-medium text-[#667085]">
                  Students
                </p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-[44px] font-extrabold text-[#2E5CFF] tracking-tight font-satoshi">
                  70+
                </p>
                <p className="mt-1 xl:mt-1.5 text-xs sm:text-sm xl:text-base font-medium text-[#667085]">
                  Courses
                </p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-[44px] font-extrabold text-[#2E5CFF] tracking-tight font-satoshi">
                  16
                </p>
                <p className="mt-1 xl:mt-1.5 text-xs sm:text-sm xl:text-base font-medium text-[#667085]">
                  Creators
                </p>
              </div>
            </div>
          </div>

          {/* Right: Asset top-right.png */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px] xl:max-w-[600px] aspect-square">
              <Image
                src="/images/top-right.png"
                alt="Your Path to Professional Growth Starts Here"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                className="object-contain drop-shadow-xl select-none pointer-events-none"
                priority
              />
            </div>
          </div>
        </div>

        {/* ================= PART 2: Create & Manage Courses (Bottom) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left: Asset bottom-left.png */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-[520px] xl:max-w-[600px] aspect-square">
              <Image
                src="/images/bottom-left.png"
                alt="Create & Manage Courses Easily"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                className="object-contain drop-shadow-xl select-none pointer-events-none"
              />
            </div>
          </div>

          {/* Right: Text & Checklist */}
          <div className="lg:col-span-6 lg:pl-6 xl:pl-8 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[52px] font-extrabold text-[#101828] tracking-tight leading-[1.18] xl:leading-[1.14] font-satoshi">
              Create &amp; Manage
              <br />
              Courses Easily.
            </h2>

            <p className="mt-5 sm:mt-6 xl:mt-7 text-sm sm:text-base xl:text-[17px] text-[#667085] leading-relaxed max-w-lg xl:max-w-xl">
              <strong className="font-bold text-[#101828]">ByteSpace</strong> supports
              individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            {/* Checklist */}
            <ul className="mt-7 sm:mt-8 xl:mt-9 space-y-4 xl:space-y-5">
              {courseCreationBenefits.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3.5 xl:gap-4">
                  <BlueCheckIcon />
                  <span className="text-[#101828] text-sm sm:text-base xl:text-lg font-semibold">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
