"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface TooltipGlitchProps {
  content: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
}

export default function TooltipGlitch({
  content,
  children,
  position = "top",
  className,
}: TooltipGlitchProps) {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
    left: "right-full top-1/2 -translate-y-1/2 mr-3",
    right: "left-full top-1/2 -translate-y-1/2 ml-3",
  };

  return (
    <div
      className={cn("relative inline-block", className)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <div
        className={cn(
          "absolute z-50 whitespace-nowrap pointer-events-none",
          positionClasses[position],
          isVisible ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="relative group">
          {/* Main Content */}
          <div className="relative z-10 bg-black/90 text-white font-mono text-xs px-3 py-1.5 border-l-2 border-red-500 clip-path-polygon-[0_0,_100%_0,_100%_100%,_10%_100%,_0_80%]">
            <span className="tracking-widest uppercase">{content}</span>
          </div>

          {/* Glitch Layer Red */}
          <div className={cn(
            "absolute inset-0 bg-red-600/80 text-transparent px-3 py-1.5 font-mono text-xs border-l-2 border-transparent",
            isVisible && "animate-glitch-1"
          )}
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 80%)" }}
          >
            {content}
          </div>

          {/* Glitch Layer Blue */}
          <div className={cn(
            "absolute inset-0 bg-blue-600/80 text-transparent px-3 py-1.5 font-mono text-xs border-l-2 border-transparent",
            isVisible && "animate-glitch-2"
          )}
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 80%)" }}
          >
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}
