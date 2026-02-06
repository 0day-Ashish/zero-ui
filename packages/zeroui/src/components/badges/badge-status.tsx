"use client";

import { cn } from "@/lib/utils";

interface BadgeStatusProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: "online" | "offline" | "busy" | "away" | "neutral";
  pulse?: boolean;
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

export default function BadgeStatus({
  status = "neutral",
  pulse = false,
  size = "md",
  children,
  className,
  ...props
}: BadgeStatusProps) {
  const statusColors = {
    online: "bg-emerald-500",
    offline: "bg-zinc-400 dark:bg-zinc-500",
    busy: "bg-red-500",
    away: "bg-amber-500",
    neutral: "bg-zinc-500",
  };

  const statusLabels = {
    online: "Online",
    offline: "Offline",
    busy: "Busy",
    away: "Away",
    neutral: "Status",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-0.5 text-sm",
    lg: "px-3 py-1 text-sm",
  };

  const dotSizes = {
    sm: "h-1.5 w-1.5",
    md: "h-2 w-2",
    lg: "h-2.5 w-2.5",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full font-medium",
        "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100",
        sizes[size],
        className
      )}
      {...props}
    >
      <span className="relative flex">
        <span
          className={cn(
            "rounded-full",
            statusColors[status],
            dotSizes[size]
          )}
        />
        {pulse && status !== "offline" && (
          <span
            className={cn(
              "absolute inset-0 rounded-full animate-ping opacity-75",
              statusColors[status]
            )}
          />
        )}
      </span>
      {children || statusLabels[status]}
    </span>
  );
}
