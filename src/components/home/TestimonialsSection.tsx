import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Rachel Simmons",
    role: "Junior Product Designer at FinTech Co",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    content:
      "ByteSpace completely changed how I approach interface design. The hands-on Figma and design system modules gave me the confidence to pass my technical interviews on the first try!",
    rating: 5,
  },
  {
    name: "Jonathan Bradley",
    role: "Full-Stack Developer at NextGen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    content:
      "The curriculum is directly aligned with what modern software teams use in production. Going from junior to mid-level engineer was made 10x faster thanks to the mentorship here.",
    rating: 5,
  },
  {
    name: "Amara Patel",
    role: "Growth Analyst at Scaling Labs",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80",
    content:
      "High quality videos, practical exercises, and an incredibly supportive community. The value you get here is unmatched compared to generic bootcamps.",
    rating: 5,
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50/70 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full">
            Real Reviews
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight">
            Loved by 50,000+ Students Worldwide
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500">
            Hear directly from graduates who leveled up their skills and landed their dream tech roles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-blue-100 stroke-[1.5]" />
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed italic">
                  "{item.content}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 mt-8 pt-6 border-t border-gray-100">
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 ring-2 ring-blue-50">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
