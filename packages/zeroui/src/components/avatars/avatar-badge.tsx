"use client";

import React from "react";
import Avatar from "./avatar";

interface AvatarBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  shape?: "circle" | "square";
  border?: boolean;
  borderColor?: "default" | "white" | "primary";
  badgeContent?: React.ReactNode;
  badgePosition?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  badgeColor?: "green" | "red" | "yellow" | "blue" | "gray";
  showStatus?: boolean;
}

export default function AvatarBadge({
  src,
  alt = "Avatar",
  fallback,
  size = "md",
  shape = "circle",
  border = false,
  borderColor = "default",
  badgeContent,
  badgePosition = "bottom-right",
  badgeColor = "green",
  showStatus = false,
  className = "",
  ...props
}: AvatarBadgeProps) {
  const positions = {
    "top-right": "top-0 right-0",
    "top-left": "top-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "bottom-left": "bottom-0 left-0",
  };

  const statusColors = {
    green: "bg-green-500",
    red: "bg-red-500",
    yellow: "bg-yellow-500",
    blue: "bg-blue-500",
    gray: "bg-gray-400",
  };

  const statusSizes = {
    xs: "w-1.5 h-1.5",
    sm: "w-2 h-2",
    md: "w-2.5 h-2.5",
    lg: "w-3 h-3",
    xl: "w-4 h-4",
  };

  const badgeSizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8",
  };

  return (
    <div className={`relative inline-block ${className}`} {...props}>
      <Avatar
        src={src}
        alt={alt}
        fallback={fallback}
        size={size}
        shape={shape}
        border={border}
        borderColor={borderColor}
      />
      {showStatus && !badgeContent && (
        <span
          className={`absolute ${positions[badgePosition]} ${statusColors[badgeColor]} ${statusSizes[size]} rounded-full ring-2 ring-white dark:ring-zinc-900`}
        />
      )}
      {badgeContent && (
        <div
          className={`absolute ${positions[badgePosition]} ${badgeSizes[size]} rounded-full overflow-hidden ring-2 ring-white dark:ring-zinc-900`}
        >
          {badgeContent}
        </div>
      )}
    </div>
  );
}
