"use client";

import { cn } from "@/lib/utils";

interface ProgressCircleProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "success" | "warning" | "destructive" | "gradient";
  strokeWidth?: number;
  showValue?: boolean;
}

export default function ProgressCircle({
  value = 0,
  max = 100,
  size = "md",
  variant = "default",
  strokeWidth,
  showValue = true,
  className,
  ...props
}: ProgressCircleProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const sizes = {
    sm: { size: 32, stroke: strokeWidth ?? 3, text: "text-[10px]" },
    md: { size: 48, stroke: strokeWidth ?? 4, text: "text-xs" },
    lg: { size: 64, stroke: strokeWidth ?? 5, text: "text-sm" },
    xl: { size: 96, stroke: strokeWidth ?? 6, text: "text-base" },
  };

  const variants = {
    default: "stroke-zinc-900 dark:stroke-zinc-100",
    success: "stroke-emerald-500",
    warning: "stroke-amber-500",
    destructive: "stroke-red-500",
    gradient: "",
  };

  const config = sizes[size];
  const radius = (config.size - config.stroke) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const gradientId = `progress-circle-gradient-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      className={cn("relative inline-flex items-center justify-center", className)}
      {...props}
    >
      <svg
        width={config.size}
        height={config.size}
        className="-rotate-90"
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
          cx={config.size / 2}
          cy={config.size / 2}
          r={radius}
          fill="none"
          strokeWidth={config.stroke}
          className="stroke-zinc-200 dark:stroke-zinc-800"
        />
        <circle
          cx={config.size / 2}
          cy={config.size / 2}
          r={radius}
          fill="none"
          strokeWidth={config.stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className={cn(
            "transition-all duration-500 ease-out",
            variants[variant]
          )}
          stroke={variant === "gradient" ? `url(#${gradientId})` : undefined}
        />
      </svg>
      {showValue && (
        <span
          className={cn(
            "absolute font-medium tabular-nums text-zinc-900 dark:text-zinc-100",
            config.text
          )}
        >
          {Math.round(percentage)}%
        </span>
      )}
    </div>
  );
}
