import React from "react";
import { Award, Compass, Laptop, Users } from "lucide-react";

const features = [
  {
    icon: Laptop,
    title: "Hands-on Project Learning",
    description: "Build portfolio-ready case studies with code and designs reviewed by industry professionals.",
  },
  {
    icon: Users,
    title: "1-on-1 Mentor Guidance",
    description: "Direct weekly support from top leads and engineers working at top global tech companies.",
  },
  {
    icon: Award,
    title: "Globally Recognized Certificates",
    description: "Earn accredited shareable credentials verifying your proficiency to boost your hiring prospects.",
  },
  {
    icon: Compass,
    title: "Lifetime Community Access",
    description: "Join over 50,000+ creators, developers, and designers to network, collaborate, and find jobs.",
  },
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full">
            Why ByteSpace
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight">
            Designed for Modern Learners Who Want Real Career Impact
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-500">
            Everything you need to master in-demand technical and creative disciplines with full confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-[#CCFF00] flex items-center justify-center mb-6 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feat.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
