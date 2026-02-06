"use client";

import React from "react";

interface PatternCardProps extends React.HTMLAttributes<HTMLDivElement> {
  pattern?: "dots" | "grid";
  patternColor?: string;
  maskGradient?: string;
  children: React.ReactNode;
}

export default function PatternCard({
  pattern = "dots",
  patternColor = "rgba(0, 0, 0, 0.1)",
  maskGradient = "linear-gradient(to bottom right, white, transparent)",
  children,
  className = "",
  style,
  ...props
}: PatternCardProps) {
  const getPattern = () => {
    if (pattern === "dots") {
      return (
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <circle cx="2" cy="2" r="1" fill={patternColor} />
        </svg>
      );
    }
    return (
      <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke={patternColor} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    );
  };

  // Convert SVG to Base64 (simplified for this example, or use directly as url)
  const patternUrl = `url("data:image/svg+xml,${encodeURIComponent(
    pattern === "dots"
      ? `<svg width='20' height='20' xmlns='http://www.w3.org/2000/svg'><circle cx='1' cy='1' r='1' fill='${patternColor}'/></svg>`
      : `<svg width='40' height='40' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'><path d='M 40 0 L 0 0 0 40' fill='none' stroke='${patternColor}' stroke-width='1'/></pattern></defs><rect width='100%' height='100%' fill='url(#grid)'/></svg>`
  )}")`;

  return (
    <div
      className={`relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden ${className}`}
      {...props}
    >
      <div
        className="absolute inset-0 z-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage: patternUrl,
          maskImage: maskGradient,
          WebkitMaskImage: maskGradient,
          ...style,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
