"use client";

import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface BadgeIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline" | "destructive" | "success" | "warning";
  size?: "sm" | "md" | "lg";
  icon: LucideIcon;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export default function BadgeIcon({
  variant = "default",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  children,
  className,
  ...props
}: BadgeIconProps) {
  const variants = {
    default:
      "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900",
    secondary:
      "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100",
    outline:
      "border border-zinc-200 text-zinc-900 dark:border-zinc-700 dark:text-zinc-100",
    destructive:
      "bg-red-500 text-white dark:bg-red-600",
    success:
      "bg-emerald-500 text-white dark:bg-emerald-600",
    warning:
      "bg-amber-500 text-white dark:bg-amber-600",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs gap-1",
    md: "px-2.5 py-0.5 text-sm gap-1.5",
    lg: "px-3 py-1 text-sm gap-1.5",
  };

  const iconSizes = {
    sm: "h-3 w-3",
    md: "h-3.5 w-3.5",
    lg: "h-4 w-4",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium transition-colors",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {iconPosition === "left" && <Icon className={iconSizes[size]} />}
      {children}
      {iconPosition === "right" && <Icon className={iconSizes[size]} />}
    </span>
  );
}
