"use client";

import React from "react";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  shape?: "circle" | "square";
  border?: boolean;
  borderColor?: "default" | "white" | "primary";
}

export default function Avatar({
  src,
  alt = "Avatar",
  fallback,
  size = "md",
  shape = "circle",
  border = false,
  borderColor = "default",
  className = "",
  ...props
}: AvatarProps) {
  const sizes = {
    xs: "w-6 h-6 text-xs",
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-sm",
    lg: "w-14 h-14 text-base",
    xl: "w-20 h-20 text-lg",
  };

  const shapes = {
    circle: "rounded-full",
    square: "rounded-xl",
  };

  const borderColors = {
    default: "ring-2 ring-zinc-200 dark:ring-zinc-700",
    white: "ring-2 ring-white dark:ring-zinc-900",
    primary: "ring-2 ring-violet-500",
  };

  const baseStyles =
    "relative inline-flex items-center justify-center overflow-hidden bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 font-medium select-none";

  const getInitials = (text?: string) => {
    if (!text) return "?";
    return text
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div
      className={`${baseStyles} ${sizes[size]} ${shapes[shape]} ${border ? borderColors[borderColor] : ""} ${className}`}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      ) : (
        <span>{getInitials(fallback)}</span>
      )}
    </div>
  );
}
