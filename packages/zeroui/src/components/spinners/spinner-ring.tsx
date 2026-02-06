"use client";

import { cn } from "@/lib/utils";

interface SpinnerRingProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "primary" | "gradient";
}

export default function SpinnerRing({
  size = "md",
  variant = "default",
  className,
  ...props
}: SpinnerRingProps) {
  const sizes = {
    sm: { container: "h-4 w-4", stroke: 2 },
    md: { container: "h-6 w-6", stroke: 2.5 },
    lg: { container: "h-8 w-8", stroke: 3 },
    xl: { container: "h-12 w-12", stroke: 3.5 },
  };

  const gradientId = `spinner-gradient-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("inline-flex", className)}
      {...props}
    >
      <svg
        className={cn("animate-spin", sizes[size].container)}
        viewBox="0 0 24 24"
        fill="none"
      >
        {variant === "gradient" && (
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        )}
        <circle
          className="opacity-20"
          cx="12"
          cy="12"
          r="10"
          stroke={
            variant === "gradient"
              ? `url(#${gradientId})`
              : "currentColor"
          }
          strokeWidth={sizes[size].stroke}
        />
        <path
          d="M12 2a10 10 0 0 1 10 10"
          stroke={
            variant === "gradient"
              ? `url(#${gradientId})`
              : "currentColor"
          }
          strokeWidth={sizes[size].stroke}
          strokeLinecap="round"
          className={cn(
            variant === "default" && "text-zinc-900 dark:text-zinc-100",
            variant === "primary" && "text-blue-600 dark:text-blue-400"
          )}
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
