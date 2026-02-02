"use client";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline" | "destructive" | "success" | "warning";
  size?: "sm" | "md" | "lg";
  dot?: boolean;
  dismissible?: boolean;
  onDismiss?: () => void;
  children: React.ReactNode;
}

export default function Badge({
  variant = "default",
  size = "md",
  dot = false,
  dismissible = false,
  onDismiss,
  children,
  className,
  ...props
}: BadgeProps) {
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
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-0.5 text-sm",
    lg: "px-3 py-1 text-sm",
  };

  const dotColors = {
    default: "bg-white dark:bg-zinc-900",
    secondary: "bg-zinc-500 dark:bg-zinc-400",
    outline: "bg-zinc-500 dark:bg-zinc-400",
    destructive: "bg-white",
    success: "bg-white",
    warning: "bg-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-medium transition-colors",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            dotColors[variant]
          )}
        />
      )}
      {children}
      {dismissible && (
        <button
          type="button"
          onClick={onDismiss}
          className="ml-0.5 -mr-1 inline-flex h-4 w-4 items-center justify-center rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </span>
  );
}
