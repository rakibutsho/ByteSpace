"use client";

import React, { useState } from "react";
import { CourseCard, Course } from "./CourseCard";

const studentAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
];

export const sampleCourses: Course[] = [
  {
    id: "1",
    title: "Learn Figma from Basic",
    category: "UI/UX Design",
    instructorName: "purepearl studio",
    thumbnail: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80",
    rating: 4.5,
    duration: "2 hours 16 mins",
    lessonsCount: 17,
    commentsCount: 59,
    price: 25,
    pricePeriod: "/Lifetime",
    level: "Beginner",
    enrolledCount: "26+",
    studentAvatars,
  },
  {
    id: "2",
    title: "Build Digital Asset",
    category: "Graphic Design",
    instructorName: "purepearl studio",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    rating: 4.5,
    duration: "2 hours 16 mins",
    lessonsCount: 17,
    commentsCount: 59,
    price: 25,
    pricePeriod: "/Lifetime",
    level: "Beginner",
    enrolledCount: "26+",
    studentAvatars,
  },
  {
    id: "3",
    title: "the Power of Big Data",
    category: "Data Science",
    instructorName: "purepearl studio",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    rating: 4.5,
    duration: "2 hours 16 mins",
    lessonsCount: 17,
    commentsCount: 59,
    price: 25,
    pricePeriod: "/Lifetime",
    level: "Beginner",
    enrolledCount: "26+",
    studentAvatars,
  },
  {
    id: "4",
    title: "Balancing Productivity an...",
    category: "Productivity",
    instructorName: "purepearl studio",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80",
    rating: 4.5,
    duration: "2 hours 16 mins",
    lessonsCount: 17,
    commentsCount: 59,
    price: 25,
    pricePeriod: "/Lifetime",
    level: "Beginner",
    enrolledCount: "26+",
    studentAvatars,
  },
  {
    id: "5",
    title: "Mastering Money Manage...",
    category: "Freelance & Entrepreneurship",
    instructorName: "purepearl studio",
    thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop&q=80",
    rating: 4.5,
    duration: "2 hours 16 mins",
    lessonsCount: 17,
    commentsCount: 59,
    price: 25,
    pricePeriod: "/Lifetime",
    level: "Beginner",
    enrolledCount: "26+",
    studentAvatars,
  },
  {
    id: "6",
    title: "From Idea to Startup Succ...",
    category: "Freelance & Entrepreneurship",
    instructorName: "purepearl studio",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
    rating: 4.5,
    duration: "2 hours 16 mins",
    lessonsCount: 17,
    commentsCount: 59,
    price: 25,
    pricePeriod: "/Lifetime",
    level: "Beginner",
    enrolledCount: "26+",
    studentAvatars,
  },
];

const categoryRows = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  [
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
    "+ More",
  ],
];

export const TopCoursesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Featured");

  const filteredCourses =
    selectedCategory === "Featured" || selectedCategory === "+ More"
      ? sampleCourses
      : sampleCourses.filter(
          (c) =>
            c.category.toLowerCase() === selectedCategory.toLowerCase() ||
            c.title.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  const displayCourses = filteredCourses.length > 0 ? filteredCourses : sampleCourses;

  return (
    <section id="courses" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#101828] tracking-tight leading-[1.2] font-satoshi">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="mt-4 text-xs sm:text-sm md:text-[15px] text-[#667085] leading-relaxed max-w-2xl mx-auto">
            At Bytespace Courses, we bring you closer to life-changing knowledge.
            Explore a variety of courses across different fields, from technology to
            the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Category Pills (3 Centered Rows matching Reference) */}
        <div className="flex flex-col items-center gap-2.5 sm:gap-3 mb-12 sm:mb-14">
          {categoryRows.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5"
            >
              {row.map((category) => {
                const isActive = selectedCategory === category;
                const isSpecialMore = category === "+ More";

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer select-none ${
                      isActive
                        ? "bg-[#D4F82C] text-[#101828] shadow-sm font-semibold scale-105"
                        : isSpecialMore
                        ? "bg-transparent text-[#2E5CFF] hover:bg-blue-50 font-medium"
                        : "bg-[#F2F4F7] text-[#344054] hover:bg-[#E4E7EC]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Courses Grid (6 cards matching reference) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {displayCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};
