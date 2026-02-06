"use client";

import { cn } from "@/lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "success" | "warning" | "destructive";
  showValue?: boolean;
  indeterminate?: boolean;
}

export default function Progress({
  value = 0,
  max = 100,
  size = "md",
  variant = "default",
  showValue = false,
  indeterminate = false,
  className,
  ...props
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const sizes = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
  };

  const variants = {
    default: "bg-zinc-900 dark:bg-zinc-100",
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    destructive: "bg-red-500",
  };

  return (
    <div className={cn("w-full", className)} {...props}>
      <div
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuemin={0}
        aria-valuemax={max}
        className={cn(
          "w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800",
          sizes[size]
        )}
      >
        <div
          className={cn(
            "h-full rounded-full transition-all duration-300 ease-out",
            variants[variant],
            indeterminate && "animate-progress-indeterminate w-1/3"
          )}
          style={!indeterminate ? { width: `${percentage}%` } : undefined}
        />
      </div>
      {showValue && !indeterminate && (
        <span className="mt-1 block text-xs text-zinc-500 dark:text-zinc-400 tabular-nums">
          {Math.round(percentage)}%
        </span>
      )}
      <style jsx>{`
        @keyframes progress-indeterminate {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }
        .animate-progress-indeterminate {
          animation: progress-indeterminate 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
