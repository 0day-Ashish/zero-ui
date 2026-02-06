"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { TooltipPosition } from "./tooltip-base";

interface TooltipGlassProps {
  content: string;
  children: React.ReactNode;
  position?: TooltipPosition;
  className?: string;
}

export default function TooltipGlass({
  content,
  children,
  position = "top",
  className,
}: TooltipGlassProps) {
  const [isVisible, setIsVisible] = useState(false);

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
          "absolute z-50 px-4 py-2 text-sm font-medium backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/20 dark:border-white/10 rounded-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] whitespace-nowrap transition-all duration-300 pointer-events-none",
          "text-zinc-800 dark:text-zinc-100",
          positionClasses[position],
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 scale-95 blur-sm",
          position === "top" && !isVisible && "translate-y-2",
          position === "bottom" && !isVisible && "-translate-y-2",
          position === "left" && !isVisible && "translate-x-2",
          position === "right" && !isVisible && "-translate-x-2",
          className
        )}
      >
        {content}
      </div>
    </div>
  );
}
