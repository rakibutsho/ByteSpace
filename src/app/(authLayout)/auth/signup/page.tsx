"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { AuthLayout } from "@/components/auth/AuthLayout";
import MyFormWrapper from "@/components/common/form/MyFormWrapper";
import MyFormInputText from "@/components/common/form/MyFormInputText";
import MyFormInputPassword from "@/components/common/form/MyFormInputPassword";

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
    <AuthLayout
      leftTitle="Sign up and come in"
      leftDescription="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
      cardSubtitle="Create an Account"
      cardTitle={"Welcome to\nByteSpace"}
      bottomText="Already have an account?"
      bottomLinkText="Login"
      bottomLinkHref="/auth/signin"
    >
      <MyFormWrapper
        onSubmit={handleSignUp}
        defaultValues={{
          fullName: "",
          email: "",
          password: "",
        }}
        className="space-y-5"
      >
        <MyFormInputText
          name="fullName"
          type="text"
          label="Full Name"
          placeholder="Jamie Davis"
          required={false}
          inputClassName="bg-white border-gray-200/90 py-3.5 px-4 text-sm sm:text-base rounded-xl focus:border-blue-500"
          labelClassName="text-sm font-semibold text-[#101828]"
        />

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

        {/* Right-aligned Continue Button */}
        <div className="flex justify-end pt-3">
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex items-center justify-center px-8 sm:px-9 py-3 sm:py-3.5 rounded-full bg-[#D4FB20] hover:bg-[#CBFC01] text-[#101828] font-bold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 disabled:opacity-50 cursor-pointer"
          >
            {isLoading ? "Creating..." : "Continue"}
          </button>
        </div>
      </MyFormWrapper>
    </AuthLayout>
  );
}
