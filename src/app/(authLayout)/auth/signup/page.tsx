"use client";

import React, { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { ArrowLeft, Sparkles, CheckCircle2 } from "lucide-react";
import MyFormWrapper from "@/components/common/form/MyFormWrapper";
import MyFormInputText from "@/components/common/form/MyFormInputText";
import MyFormInputPassword from "@/components/common/form/MyFormInputPassword";
import MyFormCheckbox from "@/components/common/form/MyFormCheckbox";
import { Logo } from "@/components/common/Navbar/Logo";

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async (data: Record<string, unknown>) => {
    setIsLoading(true);
    // Simulate sign up request
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Account created successfully!");
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
            <span>Join 50,000+ creators</span>
          </div>

          <h1 className="text-4xl xl:text-5xl font-extrabold tracking-tight leading-tight">
            Start your tech & design journey today.
          </h1>
          <p className="mt-4 text-white/80 text-base leading-relaxed">
            Create your account in seconds and unlock direct access to top-rated courses, expert live reviews, and career coaching.
          </p>

          <div className="mt-8 space-y-3">
            {[
              "30-day money back satisfaction guarantee",
              "Access to private Discord and student forums",
              "Verified certificates upon course graduation",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-white/90">
                <CheckCircle2 className="w-5 h-5 text-[#CCFF00] flex-shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom guarantee badge */}
        <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 max-w-md">
          <p className="text-xs text-white/90">
            Trusted by learners from Google, Meta, Amazon, and top international universities.
          </p>
        </div>
      </div>

      {/* Right Column: Form Container */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-12">
        <div className="w-full max-w-md mx-auto">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-blue-600 transition mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to home</span>
          </Link>

          {/* Header */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Create your ByteSpace account
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Already have an account?{" "}
              <Link href="/auth/signin" className="font-semibold text-blue-600 hover:underline">
                Sign in
              </Link>
            </p>
          </div>

          {/* Form wrapped using the boilerplate custom components */}
          <div className="mt-6">
            <MyFormWrapper
              onSubmit={handleSignUp}
              defaultValues={{
                fullName: "",
                email: "",
                password: "",
                agreeTerms: false,
              }}
              className="space-y-4"
            >
              <MyFormInputText
                name="fullName"
                type="text"
                label="Full name"
                placeholder="Rakibul Islam"
                required
              />

              <MyFormInputText
                name="email"
                type="email"
                label="Email address"
                placeholder="name@company.com"
                required
              />

              <MyFormInputPassword
                name="password"
                label="Password"
                placeholder="Create a strong password"
                required
              />

              <div className="pt-1">
                <MyFormCheckbox
                  name="agreeTerms"
                  consentText="I agree to ByteSpace's Terms of Service and Privacy Policy."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-4 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition shadow-lg shadow-blue-500/25 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isLoading ? "Creating account..." : "Create account"}
              </button>
            </MyFormWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
