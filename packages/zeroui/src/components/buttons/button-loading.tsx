"use client";

import React from "react";

interface ButtonLoadingProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  loadingVariant?: "spinner" | "dots" | "pulse";
  isLoading?: boolean;
  isCompleted?: boolean;
  completedText?: string;
  children: React.ReactNode;
}

function Spinner({ className }: { className?: string }) {
  return (
    <svg
      className={`animate-spin ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

function Dots({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce [animation-delay:-0.3s]" />
      <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce [animation-delay:-0.15s]" />
      <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" />
    </div>
  );
}

function Pulse({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      <span className="w-1 h-4 bg-current rounded-full animate-pulse [animation-delay:-0.3s]" />
      <span className="w-1 h-4 bg-current rounded-full animate-pulse [animation-delay:-0.15s]" />
      <span className="w-1 h-4 bg-current rounded-full animate-pulse" />
    </div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function ButtonLoading({
  variant = "default",
  size = "md",
  loadingVariant = "spinner",
  isLoading = false,
  isCompleted = false,
  completedText = "Done",
  children,
  className = "",
  disabled,
  ...props
}: ButtonLoadingProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-300 focus:outline-none active:scale-[0.98] disabled:pointer-events-none cursor-pointer gap-2";

  const variants = {
    default:
      "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100",
    outline:
      "border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-100 dark:border-white dark:text-white dark:hover:bg-zinc-800",
    ghost:
      "text-zinc-900 hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-800",
  };

  const completedStyles = {
    default: "bg-green-500 text-white hover:bg-green-600 dark:bg-green-500 dark:text-white dark:hover:bg-green-600",
    outline: "border-2 border-green-500 text-green-500 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-950",
    ghost: "text-green-500 hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-950",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  const LoadingIndicator = () => {
    switch (loadingVariant) {
      case "dots":
        return <Dots className={iconSizes[size]} />;
      case "pulse":
        return <Pulse className={iconSizes[size]} />;
      default:
        return <Spinner className={iconSizes[size]} />;
    }
  };

  const currentVariant = isCompleted ? completedStyles[variant] : variants[variant];
  const isDisabled = disabled || isLoading;

  return (
    <button
      className={`${baseStyles} ${currentVariant} ${sizes[size]} ${isLoading ? "opacity-80" : ""} ${className}`}
      disabled={isDisabled}
      {...props}
    >
      {isLoading && <LoadingIndicator />}
      {isCompleted && !isLoading && <CheckIcon className={iconSizes[size]} />}
      <span className={isLoading ? "opacity-70" : ""}>
        {isCompleted && !isLoading ? completedText : children}
      </span>
    </button>
  );
}
