"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export const CTASection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#004BE4] text-white py-20 sm:py-28 md:py-32 lg:py-36 xl:py-40 flex flex-col justify-center select-none">
      {/* ── Background Blueprint Grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />

      {/* ── Subtle Center Radial Glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.08) 0%, transparent 65%)",
        }}
      />

      {/* ── 3D Doodles ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* 1. TOP-LEFT: Neon Spiral 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -6, 0],
          }}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
            y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-0 left-0 -translate-x-3 -translate-y-3 sm:translate-x-0 sm:translate-y-0
                     w-32 sm:w-44 md:w-56 lg:w-64 xl:w-72 h-auto z-10"
        >
          <Image
            src="/images/doodles/cta/neon-spiral1.svg"
            alt="Neon Spiral Top Left"
            width={267}
            height={225}
            className="w-full h-auto drop-shadow-xl"
            priority
          />
        </motion.div>

        {/* 2. TOP-LEFT: Small White Spiral / Squiggle */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{
            opacity: 1,
            y: [0, -8, 0],
            rotate: [0, 4, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.2 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-[10%] sm:top-[12%] md:top-[14%]
                     left-[10%] sm:left-[14%] md:left-[16%] lg:left-[18%] xl:left-[20%]
                     w-10 sm:w-14 md:w-18 lg:w-20 xl:w-24 h-auto z-10"
        >
          <Image
            src="/images/doodles/cta/white-sprial-small.svg"
            alt="White Squiggle Top Left"
            width={177}
            height={176}
            className="w-full h-auto drop-shadow-md"
          />
        </motion.div>

        {/* 3. BOTTOM-LEFT: White Triangle Cone */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -6, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.25 },
            x: { duration: 0.8, delay: 0.25 },
            y: { duration: 4.8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-[16%] sm:bottom-[20%] md:bottom-[24%] left-0 -translate-x-2 sm:translate-x-0
                     w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 h-auto z-10"
        >
          <Image
            src="/images/doodles/cta/whiteTriangle.svg"
            alt="White Triangle Bottom Left"
            width={140}
            height={189}
            className="w-full h-auto drop-shadow-lg"
          />
        </motion.div>

        {/* 4. BOTTOM-LEFT: Neon Circle / Torus Ring */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: [0, -5, 0],
          }}
          transition={{
            opacity: { duration: 0.9, delay: 0.15 },
            y: { duration: 5.2, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-0 left-[2%] sm:left-[4%] md:left-[5%] lg:left-[6%] xl:left-[8%]
                     w-40 sm:w-56 md:w-68 lg:w-80 xl:w-96 h-auto z-10"
        >
          <Image
            src="/images/doodles/cta/neon-circel.svg"
            alt="Neon Ring Bottom Left"
            width={344}
            height={190}
            className="w-full h-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* 5. TOP-RIGHT: Neon Triangle / Pyramid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -7, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.2 },
            scale: { duration: 0.8, delay: 0.2 },
            y: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-[6%] sm:top-[8%] md:top-[10%]
                     right-[12%] sm:right-[16%] md:right-[20%] lg:right-[22%] xl:right-[24%]
                     w-14 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-auto z-10"
        >
          <Image
            src="/images/doodles/cta/NeonTriangle.svg"
            alt="Neon Triangle Top Right"
            width={190}
            height={189}
            className="w-full h-auto drop-shadow-xl"
          />
        </motion.div>

        {/* 6. TOP-RIGHT: White Cone / Cylinder */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -6, 0],
          }}
          transition={{
            opacity: { duration: 0.85, delay: 0.1 },
            x: { duration: 0.85, delay: 0.1 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-0 sm:top-2 md:top-4 right-0 translate-x-2 sm:translate-x-0
                     w-24 sm:w-36 md:w-48 lg:w-56 xl:w-64 h-auto z-10"
        >
          <Image
            src="/images/doodles/cta/whiteCone.svg"
            alt="White Cylinder Top Right"
            width={218}
            height={372}
            className="w-full h-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* 7. BOTTOM-RIGHT: Neon Spiral 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: [0, -6, 0],
          }}
          transition={{
            opacity: { duration: 0.9, delay: 0.2 },
            y: { duration: 4.6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-0 right-0 translate-x-2 translate-y-2 sm:translate-x-0 sm:translate-y-0
                     w-36 sm:w-48 md:w-60 lg:w-72 xl:w-84 h-auto z-10"
        >
          <Image
            src="/images/doodles/cta/neon-spiral2.svg"
            alt="Neon Spiral Bottom Right"
            width={334}
            height={199}
            className="w-full h-auto drop-shadow-xl"
          />
        </motion.div>
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[56px] font-extrabold text-white tracking-tight leading-[1.15] font-satoshi"
        >
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </motion.h2>

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 sm:mt-6 text-xs sm:text-sm md:text-base lg:text-[16px] text-white/85 max-w-2xl md:max-w-3xl mx-auto leading-relaxed font-normal"
        >
          Experience the collaboration of numerous creators and an expanding selection
          of courses. Register now and become a part of a community comprising over
          10,000 local and international creators. Utilize our Course Editor, and showcase
          your expertise by publishing your finest course on the ByteSpace Course Library.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-10 flex justify-center"
        >
          <Link
            href="/auth/signup"
            className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-3.5 rounded-full bg-[#D4FB20] hover:bg-[#CBFC01] text-[#101828] font-bold text-sm sm:text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Join as Creator
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
