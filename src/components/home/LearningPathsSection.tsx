"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LearningPath {
  id: string;
  name: string;
  href: string;
  icon: string;
}

const learningPaths: LearningPath[] = [
  {
    id: "design",
    name: "Design",
    href: "#courses",
    icon: "/images/learning/design.svg",
  },
  {
    id: "development",
    name: "Development",
    href: "#courses",
    icon: "/images/learning/development.svg",
  },
  {
    id: "it-software",
    name: "IT & Software",
    href: "#courses",
    icon: "/images/learning/it-soft.svg",
  },
  {
    id: "business",
    name: "Business",
    href: "#courses",
    icon: "/images/learning/business.svg",
  },
  {
    id: "marketing",
    name: "Marketing",
    href: "#courses",
    icon: "/images/learning/marketing.svg",
  },
  {
    id: "photography",
    name: "Photography",
    href: "#courses",
    icon: "/images/learning/photography.svg",
  },
];

export const LearningPathsSection: React.FC = () => {
  return (
    <section id="learning-paths" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#101828] tracking-tight leading-[1.2] font-satoshi">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 text-xs sm:text-sm md:text-[15px] text-[#667085] leading-relaxed max-w-2xl mx-auto">
            At Bytespace, we believe in empowering individuals through knowledge.
            Our diverse range of courses spans various fields, ensuring there&apos;s
            something for everyone. Unleash your potential and explore our carefully
            curated categories.
          </p>
        </div>

        {/* 6 Path Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {learningPaths.map(({ id, name, href, icon }) => (
            <Link
              key={id}
              href={href}
              className="group bg-white rounded-[24px] border border-gray-200/90 p-6 sm:p-7 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:border-gray-300 hover:-translate-y-1"
            >
              {/* Lime circle container */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#D4F82C] flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-105 transition-transform duration-200 shadow-sm flex-shrink-0">
                <Image
                  src={icon}
                  alt={name}
                  width={32}
                  height={32}
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                />
              </div>

              {/* Title */}
              <span className="text-sm sm:text-base font-semibold text-[#101828] group-hover:text-blue-600 transition-colors">
                {name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
