"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export type TooltipPosition = "top" | "bottom" | "left" | "right";

interface TooltipBaseProps {
  content: string;
  children: React.ReactNode;
  position?: TooltipPosition;
  className?: string;
  wrapperClassName?: string;
}

export default function TooltipBase({
  content,
  children,
  position = "top",
  className,
  wrapperClassName,
}: TooltipBaseProps) {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div
      className={cn("relative inline-block", wrapperClassName)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}

      <div
        className={cn(
          "absolute z-50 px-3 py-1.5 text-xs font-medium text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 rounded-md shadow-sm whitespace-nowrap transition-all duration-200 pointer-events-none",
          positionClasses[position],
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 scale-95",
          position === "top" && !isVisible && "translate-y-1",
          position === "bottom" && !isVisible && "-translate-y-1",
          position === "left" && !isVisible && "translate-x-1",
          position === "right" && !isVisible && "-translate-x-1",
          className
        )}
      >
        {content}
        {/* Arrow (optional, kept simple for base) */}
      </div>
    </div>
  );
}
