"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export interface AuthLayoutProps {
  /** Title shown on the left hero area, e.g. "Sign up and come in" */
  leftTitle: string;
  /** Subtitle/description on the left */
  leftDescription?: string;

  /** Category subtitle above the card title, e.g. "Create an Account" or "Welcome Back" */
  cardSubtitle?: string;
  /** Main title on the card, e.g. "Welcome to\nByteSpace" */
  cardTitle?: string;

  /** Form elements to render inside the white card */
  children: React.ReactNode;

  /** Bottom text under the card, e.g. "Already have an account?" */
  bottomText?: string;
  /** Bottom link text, e.g. "Login" or "Sign up" */
  bottomLinkText?: string;
  /** Link href, e.g. "/auth/signin" or "/auth/signup" */
  bottomLinkHref?: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  leftTitle,
  leftDescription = "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.",
  cardSubtitle = "Create an Account",
  cardTitle = "Welcome to\nByteSpace",
  children,
  bottomText = "Already have an account?",
  bottomLinkText = "Login",
  bottomLinkHref = "/auth/signin",
}) => {
  return (
    <div className="min-h-screen w-full bg-[#004BE4] text-white relative overflow-hidden flex flex-col justify-center py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-12 xl:px-16 select-none">
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
            "radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* ════════ LEFT COLUMN: Brand & Auth Hero Graphic ════════ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center"
          >
            {/* Top Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-6 sm:mb-8 group w-fit"
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 transition-transform group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="ByteSpace Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Left Title */}
            <h1 className="text-xl sm:text-2xl lg:text-[24px] xl:text-[26px] font-extrabold text-white tracking-tight leading-[1.18] font-satoshi">
              {leftTitle}
            </h1>

            {/* Left Description */}
            {leftDescription && (
              <p className="mt-4 sm:mt-5 text-sm sm:text-base text-white/85 leading-relaxed max-w-lg font-normal">
                {leftDescription}
              </p>
            )}

            {/* Illustration: Auth.png */}
            <div className="relative mt-8 sm:mt-10 w-full max-w-[460px] xl:max-w-[500px]">
              <Image
                src="/images/Auth.png"
                alt="ByteSpace Interactive Courses"
                width={560}
                height={560}
                className="w-full h-auto object-contain drop-shadow-2xl select-none pointer-events-none"
                priority
              />
            </div>
          </motion.div>

          {/* ════════ RIGHT COLUMN: Form Card ════════ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[480px] xl:max-w-[520px] bg-white rounded-[32px] sm:rounded-[40px] p-7 sm:p-10 lg:p-12 shadow-2xl border border-white/20 text-[#101828]">
              {/* Category / Subtitle */}
              {cardSubtitle && (
                <p className="text-sm sm:text-[15px] font-semibold text-[#2E5CFF] mb-2 font-satoshi">
                  {cardSubtitle}
                </p>
              )}

              {/* Card Title */}
              {cardTitle && (
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#101828] tracking-tight leading-[1.15] font-satoshi mb-8 sm:mb-9">
                  {cardTitle.split("\n").map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      {idx < cardTitle.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h2>
              )}

              {/* Form Content */}
              {children}

              {/* Bottom Switch Link */}
              {bottomText && bottomLinkHref && bottomLinkText && (
                <p className="mt-8 text-center text-sm text-[#475467]">
                  {bottomText}{" "}
                  <Link
                    href={bottomLinkHref}
                    className="font-semibold text-[#2E5CFF] hover:underline transition-colors"
                  >
                    {bottomLinkText}
                  </Link>
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
