"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  label?: string;
}

interface ProgressStepsProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: Step[];
  currentStep: number;
  variant?: "default" | "numbered" | "minimal";
  size?: "sm" | "md" | "lg";
}

export default function ProgressSteps({
  steps,
  currentStep,
  variant = "default",
  size = "md",
  className,
  ...props
}: ProgressStepsProps) {
  const sizes = {
    sm: {
      circle: "h-6 w-6 text-xs",
      icon: "h-3 w-3",
      line: "h-0.5",
      label: "text-xs mt-1.5",
    },
    md: {
      circle: "h-8 w-8 text-sm",
      icon: "h-4 w-4",
      line: "h-0.5",
      label: "text-sm mt-2",
    },
    lg: {
      circle: "h-10 w-10 text-base",
      icon: "h-5 w-5",
      line: "h-1",
      label: "text-sm mt-2.5",
    },
  };

  const config = sizes[size];

  const hasLabels = steps.some((step) => step.label);

  return (
    <div className={cn("w-full", hasLabels && "pb-8", className)} {...props}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          const isLast = index === steps.length - 1;

          return (
            <div
              key={index}
              className={cn(
                "flex items-center",
                !isLast && "flex-1"
              )}
            >
              <div className="relative flex flex-col items-center">
                <div
                  className={cn(
                    "flex items-center justify-center rounded-full font-medium transition-all duration-300",
                    config.circle,
                    isCompleted &&
                      "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900",
                    isCurrent &&
                      "border-2 border-zinc-900 text-zinc-900 dark:border-zinc-100 dark:text-zinc-100",
                    !isCompleted &&
                      !isCurrent &&
                      "border-2 border-zinc-300 text-zinc-400 dark:border-zinc-600 dark:text-zinc-500"
                  )}
                >
                  {isCompleted ? (
                    <Check className={config.icon} />
                  ) : variant === "numbered" || variant === "default" ? (
                    index + 1
                  ) : variant === "minimal" ? (
                    <span
                      className={cn(
                        "h-2 w-2 rounded-full",
                        isCurrent
                          ? "bg-zinc-900 dark:bg-zinc-100"
                          : "bg-zinc-300 dark:bg-zinc-600"
                      )}
                    />
                  ) : null}
                </div>
                {step.label && (
                  <span
                    className={cn(
                      "text-center whitespace-nowrap absolute top-full left-1/2 -translate-x-1/2",
                      config.label,
                      isCompleted || isCurrent
                        ? "text-zinc-900 dark:text-zinc-100"
                        : "text-zinc-400 dark:text-zinc-500"
                    )}
                  >
                    {step.label}
                  </span>
                )}
              </div>
              {!isLast && (
                <div
                  className={cn(
                    "flex-1 mx-3 rounded-full transition-all duration-300",
                    config.line,
                    isCompleted
                      ? "bg-zinc-900 dark:bg-zinc-100"
                      : "bg-zinc-200 dark:bg-zinc-700"
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
