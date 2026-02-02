"use client";

import React, { useState } from "react";

interface SwitchLabelProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label: string;
  labelPosition?: "left" | "right";
  size?: "sm" | "md" | "lg";
  variant?: "filled" | "outline";
}

export default function SwitchLabel({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  label,
  labelPosition = "left",
  size = "md",
  variant = "outline",
  className = "",
  ...props
}: SwitchLabelProps) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isChecked = checked !== undefined ? checked : internalChecked;

  const handleToggle = () => {
    if (disabled) return;
    const newValue = !isChecked;
    if (checked === undefined) {
      setInternalChecked(newValue);
    }
    onChange?.(newValue);
  };

  const sizes = {
    sm: {
      track: "w-12 h-6",
      thumb: "w-4 h-4",
      translate: "translate-x-6",
      text: "text-sm",
      gap: "gap-2",
    },
    md: {
      track: "w-14 h-7",
      thumb: "w-5 h-5",
      translate: "translate-x-7",
      text: "text-base",
      gap: "gap-3",
    },
    lg: {
      track: "w-16 h-8",
      thumb: "w-6 h-6",
      translate: "translate-x-8",
      text: "text-lg",
      gap: "gap-4",
    },
  };

  const trackStyles = {
    filled: isChecked
      ? "bg-zinc-800 dark:bg-zinc-200"
      : "bg-zinc-300 dark:bg-zinc-600",
    outline: isChecked
      ? "border-2 border-zinc-800 dark:border-zinc-200 bg-transparent"
      : "border-2 border-zinc-400 dark:border-zinc-500 bg-transparent",
  };

  const thumbStyles = {
    filled: "bg-white dark:bg-zinc-800",
    outline: isChecked
      ? "bg-zinc-800 dark:bg-zinc-200"
      : "bg-zinc-400 dark:bg-zinc-500",
  };

  return (
    <div
      className={`
        inline-flex items-center ${sizes[size].gap}
        ${labelPosition === "right" ? "flex-row-reverse" : "flex-row"}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
      onClick={handleToggle}
      {...props}
    >
      <span
        className={`
          ${sizes[size].text}
          font-medium text-zinc-700 dark:text-zinc-300
          select-none transition-colors duration-200
        `}
      >
        {label}
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={isChecked}
        aria-label={label}
        disabled={disabled}
        className={`
          ${sizes[size].track}
          relative inline-flex items-center rounded-full
          transition-all duration-300 ease-in-out
          focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-500
          ${trackStyles[variant]}
          ${disabled ? "pointer-events-none" : ""}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className={`
            ${sizes[size].thumb}
            inline-block rounded-full shadow-sm
            transform transition-transform duration-300 ease-in-out
            ${thumbStyles[variant]}
            ${isChecked ? sizes[size].translate : "translate-x-1"}
          `}
        />
      </button>
    </div>
  );
}
