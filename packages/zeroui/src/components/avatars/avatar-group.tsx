"use client";

import React from "react";
import Avatar from "./avatar";

interface AvatarItem {
  src?: string;
  alt?: string;
  fallback?: string;
}

interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  avatars: AvatarItem[];
  max?: number;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  shape?: "circle" | "square";
  spacing?: "tight" | "normal" | "loose";
}

export default function AvatarGroup({
  avatars,
  max = 4,
  size = "md",
  shape = "circle",
  spacing = "normal",
  className = "",
  ...props
}: AvatarGroupProps) {
  const spacingStyles = {
    tight: "-space-x-3",
    normal: "-space-x-2",
    loose: "-space-x-1",
  };

  const sizes = {
    xs: "w-6 h-6 text-xs",
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-14 h-14 text-base",
    xl: "w-20 h-20 text-lg",
  };

  const shapes = {
    circle: "rounded-full",
    square: "rounded-xl",
  };

  const visibleAvatars = avatars.slice(0, max);
  const remainingCount = avatars.length - max;

  return (
    <div
      className={`flex items-center ${spacingStyles[spacing]} ${className}`}
      {...props}
    >
      {visibleAvatars.map((avatar, index) => (
        <Avatar
          key={index}
          src={avatar.src}
          alt={avatar.alt}
          fallback={avatar.fallback}
          size={size}
          shape={shape}
          border
          borderColor="white"
          className="hover:z-10 transition-transform hover:scale-105"
        />
      ))}
      {remainingCount > 0 && (
        <div
          className={`${sizes[size]} ${shapes[shape]} inline-flex items-center justify-center bg-zinc-800 dark:bg-zinc-700 text-white font-medium ring-2 ring-white dark:ring-zinc-900`}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
}
