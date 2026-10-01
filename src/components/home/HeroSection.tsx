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
    <section className="relative overflow-hidden bg-[#004BE4] text-white flex flex-col">
      {/* Background Grid — matches Figma */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.13) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.13) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />

      {/* ── Doodles ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">

        {/* LEFT: Neon Spiral */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute -left-8 sm:-left-4 lg:-left-2 xl:left-0
                     top-[22%] sm:top-[24%] lg:top-[26%]
                     w-32 sm:w-48 md:w-60 lg:w-72 xl:w-80 h-auto z-10"
        >
          <Image src="/images/doodles/neon-spiral.svg" alt="Neon spiral" width={320} height={440} className="w-full h-auto drop-shadow-xl" priority />
        </motion.div>

        {/* LEFT: Small White Squiggle */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="absolute left-12 sm:left-20 md:left-28 lg:left-36 xl:left-44
                     top-[50%] sm:top-[51%]
                     w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 z-10"
        >
          <Image src="/images/doodles/white-sprial-small.svg" alt="White squiggle" width={110} height={110} className="w-full h-auto drop-shadow-md" />
        </motion.div>


        {/* RIGHT: Neon Cone */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute -right-8 sm:-right-4 md:-right-2 lg:right-0
                     top-[20%] sm:top-[22%] lg:top-[24%]
                     w-36 sm:w-52 md:w-64 lg:w-80 xl:w-96 z-10"
        >
          <Image src="/images/doodles/NeonCone.svg" alt="Neon cone" width={380} height={520} className="w-full h-auto drop-shadow-2xl" priority />
        </motion.div>

        {/* RIGHT: White Triangle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="absolute right-16 sm:right-28 md:right-40 lg:right-52 xl:right-64
                     top-[47%] sm:top-[48%]
                     w-14 sm:w-20 md:w-24 lg:w-28 xl:w-32 z-10"
        >
          <Image src="/images/doodles/whiteTriangle.png" alt="White triangle" width={130} height={130} className="w-full h-auto drop-shadow-xl" />
        </motion.div>

        {/* RIGHT BOTTOM: White Spiral */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3 }}
          className="absolute right-2 sm:right-10 md:right-16 lg:right-24 xl:right-32
                     bottom-0 sm:bottom-6 lg:bottom-10
                     w-24 sm:w-36 md:w-44 lg:w-56 xl:w-64 z-20"
        >
          <Image src="/images/doodles/white-sprial.svg" alt="White spiral" width={260} height={260} className="w-full h-auto drop-shadow-xl" />
        </motion.div>
      </div>

      {/* ── Text + Search ── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center pt-28 sm:pt-32 lg:pt-36 xl:pt-40">

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[80px]
                       font-extrabold tracking-tight leading-[1.07] max-w-5xl text-white font-satoshi"
          >
            Get Access to Hundreds <br />
            Courses Available
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-white/85 max-w-4xl font-satoshi leading-relaxed"
          >
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="mt-8 sm:mt-10 w-full max-w-xl lg:max-w-2xl flex items-center bg-white rounded-full p-1.5 sm:p-2 shadow-2xl relative z-30"
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
              className="bg-[#CCFF00] hover:bg-[#bcf200] active:scale-95 transition-all text-black font-semibold text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-full cursor-pointer"
            >
              Search
            </button>
          </motion.form>
        </div>
      </div>

      {/* ── Arch + Student + Cards ──
          The arch IS the floor of the hero — no padding below it.
          Full-width container lets the arch scale naturally to 1440px.
      */}
      <div className="relative z-20 w-full flex justify-center mt-10 sm:mt-12 lg:mt-14 xl:mt-16">
        <div className="relative w-full flex justify-center items-end">

          {/* Neon Arch — grows to fill the viewport at xl */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none select-none
                       w-[480px] sm:w-[680px] md:w-[860px] lg:w-[1060px] xl:w-[1260px]"
          >
            <Image
              src="/images/doodles/neonCircel.png"
              alt="Neon arch background"
              width={1260}
              height={630}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Student — grows proportionally with arch */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative z-10 w-[300px] sm:w-[420px] md:w-[520px] lg:w-[600px] xl:w-[680px] h-auto flex justify-center"
          >
            <Image
              src="/images/hero-student.png"
              alt="Student learning with ByteSpace"
              width={680}
              height={760}
              className="object-contain w-full h-auto drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Card 1: UI/UX Design */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="absolute z-20 text-left
                       left-2 sm:left-[5%] md:left-[10%] lg:left-[18%] xl:left-[27%]
                       top-[3%] sm:top-[6%] md:top-[12%] lg:top-[18%] xl:top-[20%]
                       bg-white rounded-xl sm:rounded-2xl
                       px-3.5 py-2.5 sm:px-5 sm:py-3.5 md:px-6 md:py-4
                       shadow-xl sm:shadow-2xl border border-gray-100/80"
          >
            <p className="text-gray-900 font-bold text-xs sm:text-sm md:text-base">UI/UX Design</p>
            <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm mt-0.5 sm:mt-1 font-medium">200 Courses • 1000+ Students</p>
          </motion.div>

          {/* Card 2: Learning Progress */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="absolute z-20 text-left
                       right-2 sm:right-[5%] md:right-[10%] lg:right-[18%] xl:right-[27%]
                       top-[14%] sm:top-[16%] md:top-[18%] lg:top-[20%] xl:top-[20%]
                       bg-white rounded-xl sm:rounded-2xl
                       px-3.5 py-2.5 sm:px-5 sm:py-3.5 md:px-7 md:py-5
                       shadow-xl sm:shadow-2xl border border-gray-100/80
                       min-w-[130px] sm:min-w-[170px] md:min-w-[200px] lg:min-w-[230px]"
          >
            <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm font-medium">Learning Progress</p>
            <p className="text-gray-950 font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-0.5 sm:mt-1 leading-none">55%</p>
            <div className="w-full bg-gray-100 rounded-full h-1.5 sm:h-2 mt-2 sm:mt-3 overflow-hidden">
              <div className="bg-[#CCFF00] h-full rounded-full w-[55%]" />
            </div>
          </motion.div>

          {/* Card 3: Happy Students */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="absolute z-20 text-left
                       left-2 sm:left-[5%] md:left-[10%] lg:left-[17%] xl:left-[26%]
                       bottom-[4%] sm:bottom-[6%] md:bottom-[9%] lg:bottom-[11%] xl:bottom-[12%]
                       bg-white rounded-xl sm:rounded-2xl
                       px-3.5 py-2.5 sm:px-5 sm:py-3.5 md:px-6 md:py-5
                       shadow-xl sm:shadow-2xl border border-gray-100/80"
          >
            <div className="flex items-center justify-between gap-3 sm:gap-4">
              <span className="text-gray-900 font-bold text-xs sm:text-sm md:text-base">Happy Students</span>
              <span className="text-amber-500 font-bold text-[10px] sm:text-xs md:text-sm flex items-center gap-0.5">
                4.5 ★<span className="text-gray-400 font-normal text-[9px] sm:text-xs ml-0.5">(240)</span>
              </span>
            </div>
            <div className="flex items-center -space-x-1.5 sm:-space-x-2 mt-2 sm:mt-2.5">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80",
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&h=80&q=80",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80",
              ].map((src, i) => (
                <Image key={i} src={src} alt={`Student avatar ${i + 1}`} width={30} height={30} className="rounded-full ring-2 ring-white object-cover w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              ))}
              <span className="inline-flex items-center justify-center h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 rounded-full ring-2 ring-white bg-[#CCFF00] text-[9px] sm:text-[10px] font-bold text-black">
                2K+
              </span>
            </div>
          </motion.div>

          {/* LEFT BOTTOM: White Donut Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.3 }}
            className="absolute -left-6 sm:left-4 md:left-10 lg:left-24 xl:left-43
                       bottom-0 sm:bottom-4 lg:bottom-8
                       w-32 sm:w-48 md:w-60 lg:w-72 xl:w-80 z-20 pointer-events-none select-none"
          >
            <Image src="/images/doodles/white-circel.svg" alt="White ring" width={320} height={320} className="w-full h-auto drop-shadow-2xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
