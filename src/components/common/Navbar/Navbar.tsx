"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingBag } from "lucide-react";
import { Logo } from "./Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "#courses" },
  { name: "Creators", href: "#creators" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Logo variant="light" />

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/90 hover:text-white font-medium text-sm transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#CCFF00] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-5 sm:gap-6">
          <Link
            href="/auth/signin"
            className="text-white font-medium text-sm hover:text-[#CCFF00] transition-colors hidden sm:block"
          >
            Sign In
          </Link>
          <Link
            href="/auth/signup"
            className="text-white font-medium text-sm hover:text-[#CCFF00] transition-colors"
          >
            Join Us
          </Link>

          <Link
            href="/cart"
            aria-label="Cart"
            className="text-white hover:text-[#CCFF00] transition-colors p-1"
          >
            <ShoppingBag className="w-5 h-5 stroke-[2]" />
          </Link>

          {/* Mobile Sheet Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden text-white">
              <button aria-label="Open Menu" className="p-1 hover:text-[#CCFF00] transition-colors">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-[#0047FF] text-white border-blue-600">
              <div className="mt-8 mb-6">
                <Logo variant="light" />
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-white/90 hover:text-[#CCFF00] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <hr className="border-blue-500/40 my-2" />
                <Link
                  href="/auth/signin"
                  onClick={() => setIsOpen(false)}
                  className="text-white/90 hover:text-white font-medium"
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex justify-center items-center py-2.5 px-4 rounded-full bg-[#CCFF00] text-black font-semibold text-sm hover:bg-[#d9ff33] transition"
                >
                  Join Us
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
