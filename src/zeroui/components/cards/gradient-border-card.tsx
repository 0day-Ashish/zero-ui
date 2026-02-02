"use client";

import React from "react";

interface GradientBorderCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function GradientBorderCard({
  children,
  className = "",
  ...props
}: GradientBorderCardProps) {
  return (
    <div
      className={`group relative rounded-2xl p-[1px] overflow-hidden ${className}`}
      {...props}
    >
      {/* Moving Gradient Border */}
      <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Static Border (fallback/base) */}
      <div className="absolute inset-0 rounded-2xl border border-zinc-200 dark:border-zinc-800" />

      {/* Inner Content Background */}
      <div className="relative h-full w-full rounded-2xl bg-white dark:bg-zinc-950 p-6">
        {children}
      </div>
    </div>
  );
}
