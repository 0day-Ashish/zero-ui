"use client";

import { cn } from "@/lib/utils";

interface BadgeCountProps extends React.HTMLAttributes<HTMLSpanElement> {
  count: number;
  max?: number;
  variant?: "default" | "destructive" | "success" | "warning" | "secondary";
  size?: "sm" | "md" | "lg";
  showZero?: boolean;
}

export default function BadgeCount({
  count,
  max = 99,
  variant = "default",
  size = "md",
  showZero = false,
  className,
  ...props
}: BadgeCountProps) {
  const variants = {
    default: "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900",
    destructive: "bg-red-500 text-white",
    success: "bg-emerald-500 text-white",
    warning: "bg-amber-500 text-white",
    secondary: "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100",
  };

  const sizes = {
    sm: "min-w-4 h-4 text-[10px] px-1",
    md: "min-w-5 h-5 text-xs px-1.5",
    lg: "min-w-6 h-6 text-sm px-2",
  };

  if (count === 0 && !showZero) {
    return null;
  }

  const displayCount = count > max ? `${max}+` : count;

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium tabular-nums",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {displayCount}
    </span>
  );
}
