"use client";

import { cn } from "@/lib/utils";

interface ProgressGradientProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  gradient?: "blue" | "purple" | "green" | "orange" | "rainbow";
  showValue?: boolean;
  animated?: boolean;
}

export default function ProgressGradient({
  value = 0,
  max = 100,
  size = "md",
  gradient = "blue",
  showValue = false,
  animated = false,
  className,
  ...props
}: ProgressGradientProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const sizes = {
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-4",
  };

  const gradients = {
    blue: "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600",
    purple: "bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500",
    green: "bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500",
    orange: "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500",
    rainbow: "bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500",
  };

  return (
    <div className={cn("w-full", className)} {...props}>
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        className={cn(
          "w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800",
          sizes[size]
        )}
      >
        <div
          className={cn(
            "h-full rounded-full transition-all duration-500 ease-out",
            gradients[gradient],
            animated && "animate-gradient-shift bg-[length:200%_100%]"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showValue && (
        <span className="mt-1 block text-xs text-zinc-500 dark:text-zinc-400 tabular-nums">
          {Math.round(percentage)}%
        </span>
      )}
      <style jsx>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-shift {
          animation: gradient-shift 2s ease infinite;
        }
      `}</style>
    </div>
  );
}
