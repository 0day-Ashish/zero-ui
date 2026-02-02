"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { TooltipPosition } from "./tooltip-base";

interface TooltipNeonProps {
  content: string;
  children: React.ReactNode;
  position?: TooltipPosition;
  className?: string;
  color?: "violet" | "cyan" | "pink";
}

export default function TooltipNeon({
  content,
  children,
  position = "top",
  className,
  color = "violet",
}: TooltipNeonProps) {
  const [isVisible, setIsVisible] = useState(false);

  const colors = {
    violet: "border-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.5)] text-violet-100 bg-zinc-900/90",
    cyan: "border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] text-cyan-100 bg-zinc-900/90",
    pink: "border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.5)] text-pink-100 bg-zinc-900/90",
  };

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
    left: "right-full top-1/2 -translate-y-1/2 mr-3",
    right: "left-full top-1/2 -translate-y-1/2 ml-3",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}

      <div
        className={cn(
          "absolute z-50 px-4 py-2 text-xs uppercase tracking-widest font-bold border rounded-none whitespace-nowrap transition-all duration-200 pointer-events-none",
          colors[color],
          positionClasses[position],
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 scale-90",
          position === "top" && !isVisible && "translate-y-2",
          position === "bottom" && !isVisible && "-translate-y-2",
          position === "left" && !isVisible && "translate-x-2",
          position === "right" && !isVisible && "-translate-x-2",
          className
        )}
      >
        <span className="relative z-10">{content}</span>
        {/* Scan line effect */}
        <div className="absolute inset-0 bg-white/5 w-full h-full animate-blink pointer-events-none" />
      </div>
    </div>
  );
}
