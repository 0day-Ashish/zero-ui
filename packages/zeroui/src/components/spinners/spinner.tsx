"use client";

import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "primary" | "secondary" | "muted";
}

export default function Spinner({
  size = "md",
  variant = "default",
  className,
  ...props
}: SpinnerProps) {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-12 w-12",
  };

  const variants = {
    default: "text-zinc-900 dark:text-zinc-100",
    primary: "text-blue-600 dark:text-blue-400",
    secondary: "text-zinc-500 dark:text-zinc-400",
    muted: "text-zinc-400 dark:text-zinc-500",
  };

  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("inline-flex", className)}
      {...props}
    >
      <Loader2
        className={cn(
          "animate-spin",
          sizes[size],
          variants[variant]
        )}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
