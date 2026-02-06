"use client";

import { cn } from "@/lib/utils";

interface SpinnerDotsProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "secondary" | "muted";
}

export default function SpinnerDots({
  size = "md",
  variant = "default",
  className,
  ...props
}: SpinnerDotsProps) {
  const sizes = {
    sm: "h-1 w-1",
    md: "h-2 w-2",
    lg: "h-3 w-3",
  };

  const gaps = {
    sm: "gap-1",
    md: "gap-1.5",
    lg: "gap-2",
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
      className={cn("inline-flex items-center", gaps[size], className)}
      {...props}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={cn(
            "rounded-full animate-bounce",
            sizes[size],
            variants[variant]
          )}
          style={{
            animationDelay: `${i * 150}ms`,
            animationDuration: "600ms",
          }}
        />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
}
