"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Navbar } from "@/components/common/Navbar/Navbar";
import { Footer } from "@/components/common/Footer/Footer";

interface NotFoundProps {
  pageName?: string;
}

const PageNotFound: React.FC<NotFoundProps> = () => {
  return (
    <>
      <section className="relative min-h-screen bg-[#004BE4] text-white flex flex-col items-center justify-center overflow-hidden px-4 pt-28 pb-16">
        <Navbar />
        {/* Blueprint Grid Overlay — exact match to Figma */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.13) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.13) 1px, transparent 1px)`,
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
          {/* Giant 404 Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            aria-hidden="true"
            className="font-clash font-black select-none pointer-events-none tracking-tight leading-[0.78]
                     text-[190px] sm:text-[280px] md:text-[380px] lg:text-[460px] xl:text-[520px]
                     bg-gradient-to-b from-[#CCFF00] via-[#A8E600]/80 to-[#4E8F00]/15
                     bg-clip-text text-transparent"
          >
            404
          </motion.div>

          {/* Headline & Description Overlapping the Lower 404 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="-mt-14 sm:-mt-24 md:-mt-32 lg:-mt-40 xl:-mt-20 flex flex-col items-center"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[76px] font-bold text-white tracking-tight leading-[1.1] font-satoshi max-w-4xl">
              The page you are looking <br />
              for doesn’t exist
            </h1>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/85 max-w-xl font-normal font-satoshi">
              Try to use a correct url or go back to homepage to start again
            </p>

            <div className="mt-7 sm:mt-9">
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-[#CCFF00] hover:bg-[#bcf200] active:scale-95 transition-all text-black font-semibold text-sm sm:text-base px-8 sm:px-9 py-3 sm:py-3.5 rounded-full cursor-pointer shadow-md hover:shadow-lg font-satoshi"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PageNotFound;
