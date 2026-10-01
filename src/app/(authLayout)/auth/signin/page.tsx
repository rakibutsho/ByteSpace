"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { ArrowLeft, Sparkles, CheckCircle2 } from "lucide-react";
import MyFormWrapper from "@/components/common/form/MyFormWrapper";
import MyFormInputText from "@/components/common/form/MyFormInputText";
import MyFormInputPassword from "@/components/common/form/MyFormInputPassword";
import MyFormCheckbox from "@/components/common/form/MyFormCheckbox";
import { Logo } from "@/components/common/Navbar/Logo";

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (data: Record<string, unknown>) => {
    setIsLoading(true);
    // Simulate sign in request
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Successfully signed in!");
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-white">
      {/* Left Column: Visual Brand Card */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#004BE4] text-white p-12 flex-col justify-between relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Top Logo */}
        <div className="relative z-10">
          <Logo variant="light" />
        </div>

        {/* Center Graphic & Pitch */}
        <div className="relative z-10 max-w-lg my-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#CCFF00] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Welcome back to ByteSpace</span>
          </div>

          <h1 className="text-4xl xl:text-5xl font-extrabold tracking-tight leading-tight">
            Learn from the top 1% engineers & designers.
          </h1>
          <p className="mt-4 text-white/80 text-base leading-relaxed">
            Pick up right where you left off. Access your course modules, submit assignments, and engage with your mentor group.
          </p>

          <div className="mt-8 space-y-3">
            {[
              "Over 200+ certified production-ready courses",
              "1-on-1 mentorship with senior staff leaders",
              "Personalized progress tracking and portfolio reviews",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-white/90">
                <CheckCircle2 className="w-5 h-5 text-[#CCFF00] flex-shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom student testimonial preview */}
        <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 max-w-md">
          <p className="text-xs text-white/90 italic">
            "The ByteSpace community helped me transition into a senior frontend engineer in just 6 months!"
          </p>
          <p className="text-[11px] text-[#CCFF00] font-bold mt-1.5">— Alex Rivera, Frontend Engineer</p>
        </div>
      </div>

      {/* Right Column: Form Container */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-12">
        <div className="w-full max-w-md mx-auto">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-blue-600 transition mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to home</span>
          </Link>

          {/* Header */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Don&apos;t have an account?{" "}
              <Link href="/auth/signup" className="font-semibold text-blue-600 hover:underline">
                Sign up for free
              </Link>
            </p>
          </div>

          {/* Form wrapped using the boilerplate custom components */}
          <div className="mt-8">
            <MyFormWrapper
              onSubmit={handleSignIn}
              defaultValues={{ email: "", password: "", rememberMe: false }}
              className="space-y-4"
            >
              <MyFormInputText
                name="email"
                type="email"
                label="Email address"
                placeholder="name@company.com"
                required
              />

              <div>
                <MyFormInputPassword
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  required
                />
                <div className="flex items-center justify-between mt-2">
                  <MyFormCheckbox
                    name="rememberMe"
                    consentText="Remember me"
                  />
                  <Link
                    href="#"
                    className="text-xs font-semibold text-blue-600 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-6 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition shadow-lg shadow-blue-500/25 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </button>
            </MyFormWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
