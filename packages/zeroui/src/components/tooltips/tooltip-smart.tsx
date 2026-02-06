"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TooltipSmartProps {
  content: string;
  children: React.ReactNode;
  className?: string;
}

export default function TooltipSmart({
  content,
  children,
  className,
}: TooltipSmartProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (triggerRef.current) {
      // Get position relative to the TRIGGER element, not the viewport (fixed positioning issues)
      const rect = triggerRef.current.getBoundingClientRect();
      setCoords({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  return (
    <div
      ref={triggerRef}
      className={cn("relative inline-block cursor-none", className)} // cursor-none to hide default cursor for immersion
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      <div
        className={cn(
          "absolute z-50 px-3 py-1.5 text-xs font-medium text-white bg-zinc-900/90 dark:bg-white/90 dark:text-zinc-900 rounded-full shadow-xl backdrop-blur-sm pointer-events-none transition-opacity duration-150 whitespace-nowrap",
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        )}
        style={{
          left: coords.x,
          top: coords.y,
          transform: "translate(12px, 12px)", // Offset from cursor
        }}
      >
        {content}
      </div>
    </div>
  );
}
