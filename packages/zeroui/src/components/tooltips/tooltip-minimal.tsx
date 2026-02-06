"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { TooltipPosition } from "./tooltip-base";

interface TooltipMinimalProps {
  content: string;
  children: React.ReactNode;
  position?: TooltipPosition;
  className?: string;
}

export default function TooltipMinimal({
  content,
  children,
  position = "top",
  className,
}: TooltipMinimalProps) {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-1",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-1",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div
      className="relative inline-block group"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}

      <div
        className={cn(
          "absolute z-50 text-xs font-medium text-zinc-500 dark:text-zinc-400 whitespace-nowrap transition-all duration-300 pointer-events-none",
          positionClasses[position],
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0",
          position === "top" && !isVisible && "translate-y-1",
          position === "bottom" && !isVisible && "-translate-y-1",
          position === "left" && !isVisible && "translate-x-1",
          position === "right" && !isVisible && "-translate-x-1",
          className
        )}
      >
        {content}
      </div>
    </div>
  );
}
