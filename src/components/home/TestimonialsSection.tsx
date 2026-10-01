"use client";

import React from "react";
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    content:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    content:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    content:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      className="py-16 sm:py-24 lg:py-28 xl:py-32 relative overflow-hidden"
      style={{
        background: [
          /* Top-right vibrant neon yellow-green wash — #D4FB20 */
          "radial-gradient(ellipse at 85% 15%, rgba(212, 251, 32, 0.28) 0%, transparent 45%)",
          /* Center-top subtle yellow wash */
          "radial-gradient(ellipse at 50% 25%, rgba(203, 252, 1, 0.18) 0%, transparent 40%)",
          /* Top-left soft lavender-blue tint — #003BE2 */
          "radial-gradient(ellipse at 0% 10%, rgba(0, 59, 226, 0.09) 0%, transparent 45%)",
          /* Bottom-left soft lavender-blue wash — #003BE2 */
          "radial-gradient(ellipse at 0% 100%, rgba(0, 59, 226, 0.13) 0%, transparent 45%)",
          /* Base white */
          "#ffffff",
        ].join(", "),
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        {/* Header: Title Left, Description Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-14 sm:mb-16 lg:mb-20">
          <div className="lg:col-span-6 xl:col-span-5">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-extrabold text-[#101828] tracking-tight leading-[1.16] font-satoshi">
              Discover What Our
              <br />
              Community Is Saying
            </h2>
          </div>

          <div className="lg:col-span-6 xl:col-span-7 lg:pt-1">
            <p className="text-sm sm:text-base lg:text-[15px] xl:text-[16px] text-[#475467] leading-relaxed max-w-2xl">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100/80 flex flex-col justify-start transition-all duration-300 hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1"
            >
              {/* Circular Avatar */}
              <div className="relative w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  fill
                  sizes="68px"
                  className="object-cover"
                />
              </div>

              {/* Name & Role */}
              <div className="mt-6">
                <h3 className="text-lg sm:text-xl font-extrabold text-[#101828] tracking-tight font-satoshi">
                  {item.name}
                </h3>
                <p className="text-sm sm:text-[15px] font-medium text-[#2E5CFF] mt-1">
                  {item.role}
                </p>
              </div>

              {/* Quote Description */}
              <p className="mt-5 sm:mt-6 text-sm sm:text-[15px] text-[#475467] leading-relaxed">
                &ldquo;{item.content}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
