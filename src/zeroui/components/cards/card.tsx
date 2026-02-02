"use client";

import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "ghost" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Card({
  variant = "default",
  padding = "md",
  children,
  className = "",
  ...props
}: CardProps) {
  const baseStyles =
    "rounded-2xl transition-all duration-300 relative overflow-hidden";

  const variants = {
    default: "bg-card-bg border border-card-border text-foreground",
    outline: "bg-transparent border border-card-border text-foreground hover:bg-zinc-50 dark:hover:bg-zinc-900",
    ghost: "bg-transparent text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800",
    elevated: "bg-card-bg border-none shadow-lg shadow-zinc-200 dark:shadow-zinc-900 border border-card-border/50",
  };

  const paddings = {
    none: "p-0",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
