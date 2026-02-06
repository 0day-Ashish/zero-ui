"use client";

import React from "react";

type Size = "sm" | "md" | "lg";
type GlassVariant = "default" | "secondary" | "dark";

interface ButtonGlassProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  variant?: GlassVariant;
  children: React.ReactNode;
}

const sizes: Record<Size, string> = {
  sm: "px-3.5 py-1.5 text-sm",
  md: "px-5 py-2 text-sm",
  lg: "px-7 py-2.5 text-base",
};

export default function ButtonGlass({
  size = "md",
  variant = "default",
  children,
  className = "",
  disabled,
  ...props
}: ButtonGlassProps) {
  const baseStyles =
    "cursor-pointer relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none backdrop-blur-xl backdrop-saturate-150";

  const getVariantStyles = () => {
    switch (variant) {
      case "default":
        return "bg-white/70 dark:bg-white/20 border border-white/50 dark:border-white/10 text-zinc-900 dark:text-white hover:bg-white/80 dark:hover:bg-white/30 shadow-sm";
      case "secondary":
        return "bg-zinc-100/70 dark:bg-zinc-800/70 border border-zinc-200/50 dark:border-zinc-700/50 text-zinc-900 dark:text-white hover:bg-zinc-200/70 dark:hover:bg-zinc-700/70 shadow-sm";
      case "dark":
        return "bg-zinc-900/70 dark:bg-zinc-900/80 border border-zinc-800/50 dark:border-zinc-700/30 text-white hover:bg-zinc-900/80 dark:hover:bg-zinc-800/80 shadow-sm";
      default:
        return "";
    }
  };

  return (
    <button
      className={`${baseStyles} ${sizes[size]} ${getVariantStyles()} ${className}`}
      disabled={disabled}
      {...props}
    >
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
