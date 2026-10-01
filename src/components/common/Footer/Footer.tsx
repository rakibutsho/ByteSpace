import React from "react";
import Link from "next/link";
import { Facebook, Github, Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";
import { Logo } from "../Navbar/Logo";

const footerLinks = {
  explore: [
    { name: "Top Courses", href: "#courses" },
    { name: "Design Mentorship", href: "#" },
    { name: "Full-Stack Bootcamp", href: "#" },
    { name: "Certifications", href: "#" },
    { name: "Student Community", href: "#" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Mentors", href: "#creators" },
    { name: "Careers", href: "#" },
    { name: "News & Articles", href: "#" },
    { name: "Partner With Us", href: "#" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Contact Support", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};

const socialLinks = [
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Github", href: "#", icon: Github },
  { name: "Facebook", href: "#", icon: Facebook },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0F1D] text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-sm">
              ByteSpace is an industry-leading learning platform designed to accelerate creative, engineering, and digital marketing careers worldwide.
            </p>

            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-label={item.name}
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#CCFF00] hover:border-[#CCFF00]/40 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Stay in the Loop
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to get latest course discounts, tech roadmaps, and free learning resources.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center bg-white/5 border border-white/10 rounded-2xl p-1.5 focus-within:border-blue-500 transition-colors"
            >
              <div className="flex items-center flex-1 px-3 gap-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent text-sm text-white placeholder-gray-500 outline-none w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-[#CCFF00] hover:bg-[#bcf200] text-black font-semibold text-xs sm:text-sm px-4 py-2 rounded-xl transition cursor-pointer flex items-center gap-1"
              >
                <span>Join</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} ByteSpace Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-gray-400 transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
