"use client";

import React from "react";
import { HeroSection } from "./HeroSection";
import { PartnerBanner } from "./PartnerBanner";
import { TopCoursesSection } from "./TopCoursesSection";
import { LearningPathsSection } from "./LearningPathsSection";
import { CommunityStatsSection } from "./CommunityStatsSection";
import { TestimonialsSection } from "./TestimonialsSection";

function Home() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* 1. Hero Section with Doodles, Search, & Floating Cards */}
      <HeroSection />

      {/* 2. Partner / Trust Banner */}
      <PartnerBanner />

      {/* 3. Top Courses Grid with Categories */}
      <TopCoursesSection />

      {/* 4. Explore Diverse Learning Paths */}
      <LearningPathsSection />

      {/* 5. Community Stats & CTA Banner */}
      <CommunityStatsSection />

      {/* 6. Real Student Testimonials */}
      <TestimonialsSection />
    </main>
  );
}

export default Home;
