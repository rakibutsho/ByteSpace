import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const CommunityStatsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950 text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(204,255,0,0.15),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Highlights */}
          <div className="lg:col-span-7">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#CCFF00] uppercase bg-[#CCFF00]/10 border border-[#CCFF00]/20 px-3 py-1 rounded-full">
              Thriving Creator Community
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Join thousands of aspiring engineers, designers & innovators.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-xl">
              Get access to curated study groups, live code reviews, weekly hack nights, and direct hiring pipelines from top tier startups.
            </p>

            <ul className="mt-8 space-y-3.5">
              {[
                "Access to 1,200+ hours of on-demand high-definition video curriculum",
                "Weekly live AMAs with senior engineering leaders and product designers",
                "Portfolio critique sessions and interview preparation roadmaps",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm sm:text-base text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-[#CCFF00] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/auth/signup"
                className="bg-[#CCFF00] hover:bg-[#bcf200] text-black font-bold text-sm sm:text-base px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-lg transition-transform active:scale-95"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: 2x2 Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#CCFF00]">50K+</p>
              <p className="mt-2 text-xs sm:text-sm font-medium text-gray-300">Active Students Enrolled</p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">250+</p>
              <p className="mt-2 text-xs sm:text-sm font-medium text-gray-300">Specialized Mentors</p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">96%</p>
              <p className="mt-2 text-xs sm:text-sm font-medium text-gray-300">Job Placement Rate</p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#CCFF00]">4.9/5</p>
              <p className="mt-2 text-xs sm:text-sm font-medium text-gray-300">Student Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
