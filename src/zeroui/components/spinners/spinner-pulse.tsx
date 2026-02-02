"use client";

import { cn } from "@/lib/utils";

interface SpinnerPulseProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "secondary" | "muted";
}

export default function SpinnerPulse({
  size = "md",
  variant = "default",
  className,
  ...props
}: SpinnerPulseProps) {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  const variants = {
    default: "bg-zinc-900 dark:bg-zinc-100",
    primary: "bg-blue-600 dark:bg-blue-400",
    secondary: "bg-zinc-500 dark:bg-zinc-400",
    muted: "bg-zinc-400 dark:bg-zinc-500",
  };

  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("relative inline-flex", className)}
      {...props}
    >
      <span
        className={cn(
          "rounded-full animate-ping absolute inset-0 opacity-75",
          sizes[size],
          variants[variant]
        )}
      />
      <span
        className={cn(
          "rounded-full",
          sizes[size],
          variants[variant]
        )}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
