"use client";

import React from "react";

interface NeonCardProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: "blue" | "purple" | "green" | "red" | "orange";
  intensity?: "low" | "medium" | "high";
  children: React.ReactNode;
}

export default function NeonCard({
  color = "purple",
  intensity = "medium",
  children,
  className = "",
  ...props
}: NeonCardProps) {
  const baseStyles =
    "rounded-2xl border bg-black/90 text-white relative group transition-all duration-300";

  const glowColors = {
    blue: "border-blue-500/50 shadow-blue-500/20 hover:border-blue-400 hover:shadow-blue-500/40",
    purple: "border-purple-500/50 shadow-purple-500/20 hover:border-purple-400 hover:shadow-purple-500/40",
    green: "border-green-500/50 shadow-green-500/20 hover:border-green-400 hover:shadow-green-500/40",
    red: "border-red-500/50 shadow-red-500/20 hover:border-red-400 hover:shadow-red-500/40",
    orange: "border-orange-500/50 shadow-orange-500/20 hover:border-orange-400 hover:shadow-orange-500/40",
  };

  const shadowIntensities = {
    low: "shadow-lg",
    medium: "shadow-xl",
    high: "shadow-2xl",
  };

  return (
    <div
      className={`${baseStyles} ${glowColors[color]} ${shadowIntensities[intensity]} ${className}`}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  );
}
