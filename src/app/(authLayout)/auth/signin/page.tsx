"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AuthLayout } from "@/components/auth/AuthLayout";
import MyFormWrapper from "@/components/common/form/MyFormWrapper";
import MyFormInputText from "@/components/common/form/MyFormInputText";
import MyFormInputPassword from "@/components/common/form/MyFormInputPassword";

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
    <AuthLayout
      leftTitle="Sign in with ease"
      leftDescription="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      cardSubtitle="Sign In"
      cardTitle="Welcome Back"
      bottomText="New user?"
      bottomLinkText="Create an account"
      bottomLinkHref="/auth/signup"
    >
      <MyFormWrapper
        onSubmit={handleSignIn}
        defaultValues={{
          email: "",
          password: "",
        }}
        className="space-y-5"
      >
        <MyFormInputText
          name="email"
          type="email"
          label="Email"
          placeholder="designer@example.com"
          required={false}
          inputClassName="bg-white border-gray-200/90 py-3.5 px-4 text-sm sm:text-base rounded-xl focus:border-blue-500"
          labelClassName="text-sm font-semibold text-[#101828]"
        />

        <MyFormInputPassword
          name="password"
          label="Password"
          placeholder="********"
          required={false}
          inputClassName="bg-white border-gray-200/90 py-3.5 px-4 text-sm sm:text-base rounded-xl focus:border-blue-500"
          labelClassName="text-sm font-semibold text-[#101828]"
        />

        {/* Right-aligned Sign In Button */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex items-center justify-center px-8 sm:px-9 py-2.5 sm:py-3 rounded-full bg-[#D4FB20] hover:bg-[#CBFC01] text-[#101828] font-bold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 disabled:opacity-50 cursor-pointer"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-6 sm:my-7">
          <div className="border-t border-gray-200/80 w-full" />
          <span className="bg-white px-3.5 text-xs sm:text-sm text-gray-400 font-normal">
            or
          </span>
          <div className="border-t border-gray-200/80 w-full" />
        </div>

        {/* Social Logins */}
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Sign in with Facebook"
            className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl border border-gray-200/90 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
          >
            <FaFacebook className="w-6 h-6 text-black" />
          </button>
          <button
            type="button"
            aria-label="Sign in with Google"
            className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl border border-gray-200/90 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
          >
            <FaGoogle className="w-5 h-5 text-black" />
          </button>
        </div>
      </MyFormWrapper>
    </AuthLayout>
  );
}
