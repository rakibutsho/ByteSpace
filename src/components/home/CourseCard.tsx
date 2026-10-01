import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

export interface Course {
  id: string;
  title: string;
  category: string;
  instructorName?: string;
  thumbnail: string;
  rating: number;
  duration: string;
  lessonsCount: number;
  commentsCount?: number;
  price: number;
  pricePeriod?: string;
  level?: string;
  studentAvatars?: string[];
  enrolledCount?: string;
}

interface CourseCardProps {
  course: Course;
}

const SignalIcon: React.FC<{ className?: string }> = ({ className = "w-3 h-3" }) => (
  <svg
    viewBox="0 0 16 16"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="10" width="2.5" height="5" rx="0.75" />
    <rect x="6.5" y="6" width="2.5" height="9" rx="0.75" />
    <rect x="11" y="2" width="2.5" height="13" rx="0.75" />
  </svg>
);

const defaultAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
];

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const avatars = course.studentAvatars && course.studentAvatars.length > 0 ? course.studentAvatars : defaultAvatars;

  return (
    <div className="group bg-white rounded-[22px] border border-gray-200/90 p-3 sm:p-3.5 hover:shadow-lg hover:border-gray-300 transition-all duration-300 flex flex-col justify-between">
      {/* Thumbnail with overlay badges */}
      <div className="relative w-full aspect-[16/10.5] rounded-[16px] overflow-hidden bg-gray-100 mb-3.5">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Subtle dark gradient behind badges for contrast */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none" />

        {/* Frosted badges row */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center gap-1.5 z-10 overflow-hidden">
          <span className="px-2.5 py-1 rounded-full bg-white/25 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-[11px] font-medium leading-none whitespace-nowrap shadow-sm">
            {course.lessonsCount} Lessons
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/25 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-[11px] font-medium leading-none whitespace-nowrap shadow-sm">
            {course.duration}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/25 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-[11px] font-medium leading-none whitespace-nowrap shadow-sm">
            {course.commentsCount ?? 59} Comments
          </span>
        </div>
      </div>

      {/* Course Info */}
      <div className="px-0.5 flex-1 flex flex-col justify-between">
        <div>
          {/* Title & Rating */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-[#101828] text-base leading-snug line-clamp-1 group-hover:text-blue-600 transition-colors">
              <Link href={`#course-${course.id}`}>
                {course.title}
              </Link>
            </h3>
            <div className="flex items-center gap-1 text-[#98A2B3] text-xs font-semibold flex-shrink-0 pt-0.5">
              <span>{course.rating.toFixed(1)}</span>
              <Star className="w-3.5 h-3.5 fill-[#98A2B3] text-[#98A2B3]" />
            </div>
          </div>

          {/* Instructor */}
          <div className="text-xs text-[#667085] mt-1 mb-3">
            by{" "}
            <span className="text-[#3B71F7] font-medium hover:underline cursor-pointer">
              {course.instructorName ?? "purepearl studio"}
            </span>
          </div>
        </div>

        <div>
          {/* Level badge & Enrolled Students Stack */}
          <div className="flex items-center justify-between gap-2 mb-3.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F2F4F7] text-[#344054] text-xs font-medium">
              <SignalIcon className="w-3 h-3 text-[#667085]" />
              <span>{course.level ?? "Beginner"}</span>
            </div>

            <div className="flex items-center -space-x-1.5">
              {avatars.slice(0, 4).map((avatar, idx) => (
                <div
                  key={idx}
                  className="relative w-6 h-6 rounded-full overflow-hidden ring-2 ring-white flex-shrink-0"
                >
                  <Image
                    src={avatar}
                    alt="Student"
                    fill
                    sizes="24px"
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="relative w-6 h-6 rounded-full bg-[#D4F82C] text-[#101828] ring-2 ring-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                {course.enrolledCount ?? "26+"}
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline">
            <span className="text-[#2E5CFF] font-extrabold text-lg leading-none">
              ${course.price}
            </span>
            <span className="text-[#98A2B3] text-[11px] ml-0.5 font-normal">
              {course.pricePeriod ?? "/Lifetime"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
