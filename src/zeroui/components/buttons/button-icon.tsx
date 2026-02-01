"use client";

import React from "react";

interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  color?: "default" | "heart" | "flame" | "star" | "success" | "info";
  isActive?: boolean;
  children: React.ReactNode;
}

export default function ButtonIcon({
  variant = "default",
  size = "md",
  color = "default",
  isActive = false,
  children,
  className = "",
  ...props
}: ButtonIconProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-2xl transition-all duration-200 focus:outline-none active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variants = {
    default:
      "bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]",
    outline:
      "border-2 border-zinc-300 dark:border-zinc-600",
    ghost:
      "",
  };

  const colors = {
    default: {
      inactive: "text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900 dark:hover:bg-zinc-700 dark:hover:text-white",
      active: "text-zinc-900 bg-zinc-200 dark:text-white dark:bg-zinc-700",
    },
    heart: {
      inactive: "text-zinc-500 hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-950 dark:hover:text-red-400",
      active: "text-red-500 bg-red-50 dark:text-red-400 dark:bg-red-950",
    },
    flame: {
      inactive: "text-zinc-500 hover:bg-orange-50 hover:text-orange-500 dark:hover:bg-orange-950 dark:hover:text-orange-400",
      active: "text-orange-500 bg-orange-50 dark:text-orange-400 dark:bg-orange-950",
    },
    star: {
      inactive: "text-zinc-500 hover:bg-yellow-50 hover:text-yellow-500 dark:hover:bg-yellow-950 dark:hover:text-yellow-400",
      active: "text-yellow-500 bg-yellow-50 dark:text-yellow-400 dark:bg-yellow-950",
    },
    success: {
      inactive: "text-zinc-500 hover:bg-green-50 hover:text-green-500 dark:hover:bg-green-950 dark:hover:text-green-400",
      active: "text-green-500 bg-green-50 dark:text-green-400 dark:bg-green-950",
    },
    info: {
      inactive: "text-zinc-500 hover:bg-blue-50 hover:text-blue-500 dark:hover:bg-blue-950 dark:hover:text-blue-400",
      active: "text-blue-500 bg-blue-50 dark:text-blue-400 dark:bg-blue-950",
    },
  };

  const sizes = {
    sm: "p-2",
    md: "p-3",
    lg: "p-4",
  };

  const colorStyles = isActive ? colors[color].active : colors[color].inactive;

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${colorStyles} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
