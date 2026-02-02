"use client";

import { cn } from "@/lib/utils";

interface SpinnerBarsProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "secondary" | "muted";
}

export default function SpinnerBars({
  size = "md",
  variant = "default",
  className,
  ...props
}: SpinnerBarsProps) {
  const containerSizes = {
    sm: "h-4 gap-0.5",
    md: "h-6 gap-1",
    lg: "h-8 gap-1.5",
  };

  const barWidths = {
    sm: "w-0.5",
    md: "w-1",
    lg: "w-1.5",
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
      className={cn(
        "inline-flex items-center justify-center",
        containerSizes[size],
        className
      )}
      {...props}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className={cn(
            "rounded-full",
            barWidths[size],
            variants[variant]
          )}
          style={{
            animation: "spinner-bars 1s ease-in-out infinite",
            animationDelay: `${i * 100}ms`,
            height: "40%",
          }}
        />
      ))}
      <span className="sr-only">Loading...</span>
      <style jsx>{`
        @keyframes spinner-bars {
          0%, 40%, 100% {
            height: 40%;
            opacity: 0.5;
          }
          20% {
            height: 100%;
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
