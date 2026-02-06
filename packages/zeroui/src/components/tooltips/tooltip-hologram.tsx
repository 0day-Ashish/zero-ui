"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TooltipHologramProps {
  content: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
}

export default function TooltipHologram({
  content,
  children,
  position = "top",
  className,
}: TooltipHologramProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top; // y position within the element.

    // Calculate rotation based on cursor position relative to center
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15; // Max 15deg rotation
    const rotateY = ((x - centerX) / centerX) * 15;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
    setRotation({ x: 0, y: 0 });
  };

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-4",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-4",
    left: "right-full top-1/2 -translate-y-1/2 mr-4",
    right: "left-full top-1/2 -translate-y-1/2 ml-4",
  };

  return (
    <div
      ref={triggerRef}
      className={cn("relative inline-block group perspective-1000", className)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {children}
      <div
        className={cn(
          "absolute z-50 px-4 py-2 text-sm font-semibold tracking-wide uppercase text-cyan-100 whitespace-nowrap transition-opacity duration-300 pointer-events-none",
          isVisible ? "opacity-100" : "opacity-0",
          positionClasses[position]
        )}
        style={{
          transform: isVisible
            ? `translate(${position === "top" || position === "bottom" ? "-50%" : "0"}, ${position === "left" || position === "right" ? "-50%" : "0"}) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
            : undefined,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Holographic Container */}
        <div className="absolute inset-0 bg-cyan-500/10 backdrop-blur-md rounded-lg border border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.3)]"></div>

        {/* Iridescent shine effect */}
        <div
          className="absolute inset-0 rounded-lg opacity-40 mix-blend-overlay"
          style={{
            background: `linear-gradient(${135 + rotation.y * 2}deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 70%)`
          }}
        />

        {/* Scan lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,255,255,0.1)_1px,transparent_1px)] bg-[size:100%_4px] rounded-lg pointer-events-none" />

        <span className="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{content}</span>
      </div>
    </div>
  );
}
