"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { motion } from "motion/react";

interface HeroSectionProps {
  onSearch?: (query: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(searchQuery);
  };

  return (
    <section className="relative overflow-hidden bg-[#004BE4] text-white pt-28 sm:pt-32 pb-16 lg:pb-24 min-h-[750px] lg:min-h-[820px] flex items-center">
      {/* Background Subtle Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Decorative Doodles Layer (Optimized SVGs/PNGs) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Left Green Spiral */}
        <motion.div
          initial={{ opacity: 0, x: -30, rotate: -10 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute -left-6 sm:left-4 top-28 sm:top-36 w-24 sm:w-36 lg:w-44 h-auto z-10"
        >
          <Image
            src="/images/doodles/neon-spiral.svg"
            alt="Neon spiral doodle"
            width={180}
            height={260}
            className="w-full h-auto drop-shadow-lg"
            priority
          />
        </motion.div>

        {/* Left White Squiggle */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="absolute left-8 sm:left-24 lg:left-36 top-[46%] sm:top-[48%] w-14 sm:w-20 lg:w-24 z-10"
        >
          <Image
            src="/images/doodles/white-sprial-small.svg"
            alt="White spiral doodle"
            width={90}
            height={90}
            className="w-full h-auto drop-shadow-md"
          />
        </motion.div>

        {/* Left Bottom Big White Donut / Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute -left-6 sm:left-8 bottom-6 sm:bottom-12 w-28 sm:w-44 lg:w-56 z-20"
        >
          <Image
            src="/images/doodles/white-circel.svg"
            alt="White circle ring"
            width={220}
            height={220}
            className="w-full h-auto drop-shadow-xl"
          />
        </motion.div>

        {/* Right Green 3D Cone / Cylinder */}
        <motion.div
          initial={{ opacity: 0, x: 40, rotate: 15 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute right-0 sm:right-4 top-24 sm:top-32 w-24 sm:w-36 lg:w-48 z-10"
        >
          <Image
            src="/images/doodles/NeonCone.svg"
            alt="Neon 3D cone doodle"
            width={190}
            height={280}
            className="w-full h-auto drop-shadow-xl"
            priority
          />
        </motion.div>

        {/* Right White Prism / Pyramid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="absolute right-12 sm:right-28 lg:right-40 top-[45%] w-16 sm:w-24 lg:w-28 z-10"
        >
          <Image
            src="/images/doodles/whiteTriangle.png"
            alt="White triangle prism"
            width={120}
            height={120}
            className="w-full h-auto drop-shadow-md"
          />
        </motion.div>

        {/* Right Bottom White Spiral */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute right-2 sm:right-12 bottom-10 sm:bottom-16 w-20 sm:w-32 lg:w-40 z-20"
        >
          <Image
            src="/images/doodles/white-sprial.svg"
            alt="White spiral doodle"
            width={160}
            height={160}
            className="w-full h-auto drop-shadow-lg"
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="flex flex-col items-center text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold tracking-tight leading-[1.1] max-w-4xl"
          >
            Get Access to Hundreds <br />
            Courses Available
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-sm sm:text-base md:text-lg text-white/80 max-w-2xl font-normal"
          >
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </motion.p>

          {/* Search Pill Component */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 sm:mt-10 w-full max-w-xl flex items-center bg-white rounded-full p-1.5 sm:p-2 shadow-2xl relative z-30"
          >
            <div className="flex items-center flex-1 pl-3 sm:pl-4 gap-2.5">
              <Search className="w-5 h-5 text-gray-400 stroke-[2] flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Course, topic, creator"
                className="w-full bg-transparent text-gray-800 placeholder-gray-400 text-sm sm:text-base outline-none pr-2"
              />
            </div>
            <button
              type="submit"
              className="bg-[#CCFF00] hover:bg-[#bcf200] active:scale-95 transition-all text-black font-semibold text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-full cursor-pointer shadow-sm"
            >
              Search
            </button>
          </motion.form>

          {/* Central Hero Visual Container */}
          <div className="relative mt-12 sm:mt-16 w-full max-w-2xl sm:max-w-3xl flex justify-center items-end min-h-[380px] sm:min-h-[440px] lg:min-h-[500px]">
            {/* Big Neon Lime Circle Backdrop */}
            <div className="absolute bottom-0 w-[300px] h-[300px] sm:w-[440px] sm:h-[440px] lg:w-[500px] lg:h-[500px] rounded-full bg-[#CCFF00] z-0" />

            {/* Student Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 w-[280px] sm:w-[400px] lg:w-[460px] h-auto flex justify-center"
            >
              <Image
                src="/images/hero-student.png"
                alt="Student learning with ByteSpace"
                width={520}
                height={580}
                className="object-contain w-full h-auto drop-shadow-2xl"
                priority
              />
            </motion.div>

            {/* Floating Card 1: UI/UX Design (Top Left) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute left-0 sm:left-4 md:left-8 top-12 sm:top-16 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-xl border border-white/60 text-left"
            >
              <p className="text-gray-900 font-bold text-xs sm:text-sm">UI/UX Design</p>
              <p className="text-gray-500 text-[10px] sm:text-xs mt-0.5">200 Courses • 1000+ Students</p>
            </motion.div>

            {/* Floating Card 2: Learning Progress (Top Right) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="absolute right-0 sm:right-4 md:right-8 top-20 sm:top-24 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-xl border border-white/60 text-left min-w-[140px] sm:min-w-[180px]"
            >
              <p className="text-gray-500 text-[10px] sm:text-xs font-medium">Learning Progress</p>
              <p className="text-gray-950 font-black text-2xl sm:text-3xl mt-0.5">55%</p>
              <div className="w-full bg-gray-100 rounded-full h-1.5 sm:h-2 mt-2 overflow-hidden">
                <div className="bg-[#CCFF00] h-full rounded-full w-[55%]" />
              </div>
            </motion.div>

            {/* Floating Card 3: Happy Students (Bottom Left) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="absolute left-2 sm:left-6 md:left-12 bottom-4 sm:bottom-8 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-xl border border-white/60 text-left"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-gray-900 font-bold text-xs sm:text-sm">Happy Students</span>
                <span className="text-amber-500 font-bold text-xs flex items-center gap-0.5">
                  4.5 ★ <span className="text-gray-400 font-normal">(240)</span>
                </span>
              </div>
              <div className="flex items-center -space-x-2 mt-2">
                <span className="inline-block h-6 w-6 sm:h-7 sm:w-7 rounded-full ring-2 ring-white bg-blue-500 text-[10px] text-white font-bold text-center leading-6 sm:leading-7 overflow-hidden">
                  👩
                </span>
                <span className="inline-block h-6 w-6 sm:h-7 sm:w-7 rounded-full ring-2 ring-white bg-green-500 text-[10px] text-white font-bold text-center leading-6 sm:leading-7 overflow-hidden">
                  👨
                </span>
                <span className="inline-block h-6 w-6 sm:h-7 sm:w-7 rounded-full ring-2 ring-white bg-purple-500 text-[10px] text-white font-bold text-center leading-6 sm:leading-7 overflow-hidden">
                  🧔
                </span>
                <span className="inline-block h-6 w-6 sm:h-7 sm:w-7 rounded-full ring-2 ring-white bg-amber-500 text-[10px] text-white font-bold text-center leading-6 sm:leading-7 overflow-hidden">
                  👱
                </span>
                <span className="inline-flex items-center justify-center h-6 w-6 sm:h-7 sm:w-7 rounded-full ring-2 ring-white bg-[#CCFF00] text-[10px] font-bold text-black">
                  2K+
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
