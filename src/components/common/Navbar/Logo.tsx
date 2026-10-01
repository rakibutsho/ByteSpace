import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = "light", className }) => {
  return (
    <Link href="/" className={cn("flex items-center gap-2 select-none group", className)}>
      <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
        <Image
          src="/images/logo.png"
          alt="ByteSpace Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <span
        className={cn(
          "font-bold text-xl sm:text-2xl tracking-tight transition-colors",
          variant === "light" ? "text-white" : "text-gray-900 group-hover:text-blue-600"
        )}
      >
        Byte<span className="text-[#CCFF00]">Space</span>
      </span>
    </Link>
  );
};
