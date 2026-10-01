import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Clock, BookOpen, ArrowUpRight } from "lucide-react";

export interface Course {
  id: string;
  title: string;
  category: string;
  instructor: {
    name: string;
    avatar: string;
    role?: string;
  };
  thumbnail: string;
  rating: number;
  reviewsCount: number;
  duration: string;
  lessonsCount: number;
  price: number;
  originalPrice?: number;
  badge?: string;
}

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="group flex flex-col bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.09)] transition-all duration-300 hover:-translate-y-1">
      {/* Thumbnail Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-xs font-semibold text-gray-800 px-3 py-1 rounded-full shadow-sm">
          {course.category}
        </span>

        {course.badge && (
          <span className="absolute top-3 right-3 bg-[#CCFF00] text-black text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
            {course.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-5">
        {/* Meta info: duration & lessons */}
        <div className="flex items-center gap-4 text-xs font-medium text-gray-400 mb-2.5">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-gray-400" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-gray-400" />
            {course.lessonsCount} Lessons
          </span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-gray-900 text-base leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors">
          <Link href={`#course-${course.id}`} className="hover:underline">
            {course.title}
          </Link>
        </h3>

        {/* Instructor */}
        <div className="flex items-center gap-2.5 mt-3 mb-4">
          <div className="relative w-7 h-7 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
            <Image
              src={course.instructor.avatar}
              alt={course.instructor.name}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xs font-medium text-gray-600">{course.instructor.name}</span>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-100 my-auto" />

        {/* Bottom Bar: Rating + Price */}
        <div className="flex items-center justify-between pt-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-xs font-bold text-gray-900">{course.rating.toFixed(1)}</span>
            <span className="text-xs text-gray-400">({course.reviewsCount})</span>
          </div>

          <div className="flex items-center gap-2">
            {course.originalPrice && (
              <span className="text-xs text-gray-400 line-through">${course.originalPrice}</span>
            )}
            <span className="text-base font-extrabold text-blue-600">${course.price}</span>
            <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-[#CCFF00] group-hover:text-black transition-colors ml-1">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
