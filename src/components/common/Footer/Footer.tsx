"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "../Navbar/Logo";

const footerNavColumns = [
  {
    links: [
      { name: "Featured Courses", href: "#courses" },
      { name: "Featured Categories", href: "#categories" },
      { name: "Business", href: "#business" },
      { name: "IT", href: "#it" },
      { name: "Design", href: "#design" },
    ],
  },
  {
    links: [
      { name: "Development", href: "#development" },
      { name: "Marketing", href: "#marketing" },
      { name: "Photography", href: "#photography" },
      { name: "Finance", href: "#finance" },
      { name: "Sport", href: "#sport" },
    ],
  },
  {
    links: [
      { name: "Become a Creator", href: "#creator" },
      { name: "Affiliate Program", href: "#affiliate" },
      { name: "Contact", href: "#contact" },
      { name: "Help", href: "#help" },
      { name: "About", href: "#about" },
    ],
  },
];

const legalLinks = [
  { name: "Privacy Policy", href: "#privacy" },
  { name: "Terms of Service", href: "#terms" },
  { name: "Cookies Settings", href: "#cookies" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-900 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-10">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 xl:gap-24">
          {/* Brand & Newsletter Column */}
          <div className="max-w-xl">
            <Logo variant="dark" />
            
            <p className="mt-5 text-sm sm:text-base text-gray-700 leading-relaxed font-satoshi">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-lg"
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-3 rounded-full border border-gray-300 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#CCFF00] focus:border-gray-400 font-satoshi transition-all bg-white"
                />
              </div>
              <button
                type="submit"
                className="bg-[#CCFF00] hover:bg-[#bcf200] active:scale-95 transition-all text-black font-semibold text-sm px-8 py-3 rounded-full cursor-pointer font-satoshi shadow-xs whitespace-nowrap"
              >
                Search
              </button>
            </form>

            <p className="mt-4 text-xs text-gray-500 leading-relaxed font-satoshi max-w-md">
              By subscribing, you agree to our{" "}
              <Link href="#privacy" className="underline hover:text-gray-800 transition-colors">
                Privacy Policy
              </Link>{" "}
              and consent to receive updates from our company.
            </p>
          </div>

          {/* Navigation Links Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-14 xl:gap-20">
            {footerNavColumns.map((col, idx) => (
              <ul key={idx} className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm sm:text-[15px] text-gray-800 hover:text-blue-600 font-normal font-satoshi transition-colors inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-gray-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-600 font-satoshi">
          <p>© 2023 ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6 sm:gap-8">
            {legalLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-black transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
