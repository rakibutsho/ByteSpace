"use client";

import React, { useState } from "react";
import { CourseCard, Course } from "./CourseCard";
import { ArrowRight } from "lucide-react";

export const sampleCourses: Course[] = [
  {
    id: "1",
    title: "Mastering Modern UI/UX Design with Figma & Prototyping",
    category: "Design",
    badge: "Bestseller",
    instructor: {
      name: "Sophia Martinez",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      role: "Senior Product Designer",
    },
    thumbnail: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviewsCount: 384,
    duration: "18h 45m",
    lessonsCount: 42,
    price: 49,
    originalPrice: 89,
  },
  {
    id: "2",
    title: "Full-Stack Web Development with Next.js 15, TypeScript & Tailwind",
    category: "Development",
    badge: "Popular",
    instructor: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      role: "Tech Lead @ ByteSpace",
    },
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
    reviewsCount: 512,
    duration: "24h 10m",
    lessonsCount: 58,
    price: 59,
    originalPrice: 99,
  },
  {
    id: "3",
    title: "Data Science & Machine Learning Bootcamp for Real-World AI",
    category: "Data Science",
    instructor: {
      name: "Dr. Elena Rostova",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80",
      role: "AI Researcher",
    },
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviewsCount: 290,
    duration: "32h 20m",
    lessonsCount: 65,
    price: 69,
    originalPrice: 129,
  },
  {
    id: "4",
    title: "Digital Growth Marketing: SEO, Paid Ads & Viral Campaigns",
    category: "Marketing",
    instructor: {
      name: "Marcus Vance",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
      role: "Growth Strategist",
    },
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    rating: 4.7,
    reviewsCount: 198,
    duration: "14h 15m",
    lessonsCount: 30,
    price: 39,
    originalPrice: 79,
  },
  {
    id: "5",
    title: "Mobile App Mastery: Flutter & React Native Cross-Platform",
    category: "Mobile",
    badge: "Trending",
    instructor: {
      name: "Sarah Jenkins",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      role: "Mobile Specialist",
    },
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
    reviewsCount: 235,
    duration: "20h 00m",
    lessonsCount: 46,
    price: 49,
    originalPrice: 85,
  },
  {
    id: "6",
    title: "3D Animation & Visual Storytelling with Blender and Unreal",
    category: "Animation",
    instructor: {
      name: "Alex Thorne",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80",
      role: "3D Artist",
    },
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviewsCount: 164,
    duration: "19h 30m",
    lessonsCount: 38,
    price: 54,
    originalPrice: 94,
  },
];

const categories = ["All Courses", "Design", "Development", "Data Science", "Marketing", "Animation"];

export const TopCoursesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");

  const filteredCourses =
    selectedCategory === "All Courses"
      ? sampleCourses
      : sampleCourses.filter((c) => c.category === selectedCategory);

  return (
    <section id="courses" className="py-16 sm:py-24 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs sm:text-sm font-bold tracking-wider text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full">
              Explore Our Catalog
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight">
              Top Rated Online Courses
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-500 max-w-xl">
              Learn skills that match market demands. Taught by certified mentors with hands-on real world projects.
            </p>
          </div>

          {/* View All CTA */}
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition group self-start md:self-auto">
            <span>Explore All 200+ Courses</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};
