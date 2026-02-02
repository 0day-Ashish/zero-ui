"use client";

import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  blur?: "sm" | "md" | "lg" | "xl";
  transparency?: "low" | "medium" | "high";
  children: React.ReactNode;
}

export default function GlassCard({
  blur = "md",
  transparency = "medium",
  children,
  className = "",
  ...props
}: GlassCardProps) {
  const baseStyles =
    "rounded-2xl border border-white/20 shadow-lg relative overflow-hidden transition-all duration-300";

  const blurs = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl",
  };

  const transparencies = {
    low: "bg-white/10 dark:bg-black/10",
    medium: "bg-white/5 dark:bg-black/5",
    high: "bg-white/0 dark:bg-black/0",
  };

  return (
    <div
      className={`${baseStyles} ${blurs[blur]} ${transparencies[transparency]} ${className}`}
      {...props}
    >
      {/* Noise texture overlay for premium feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}
      />

      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
