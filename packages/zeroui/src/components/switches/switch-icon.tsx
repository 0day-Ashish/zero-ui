"use client";

import React, { useState } from "react";

interface SwitchIconProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  color?: "blue" | "green" | "violet" | "red" | "orange";
}

export default function SwitchIcon({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  size = "md",
  color = "blue",
  className = "",
  ...props
}: SwitchIconProps) {
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
      track: "w-10 h-6",
      thumb: "w-5 h-5",
      translate: "translate-x-5",
      icon: "w-3 h-3",
    },
    md: {
      track: "w-14 h-8",
      thumb: "w-7 h-7",
      translate: "translate-x-7",
      icon: "w-4 h-4",
    },
    lg: {
      track: "w-18 h-10",
      thumb: "w-9 h-9",
      translate: "translate-x-9",
      icon: "w-5 h-5",
    },
  };

  const colors = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    violet: "bg-violet-500",
    red: "bg-red-500",
    orange: "bg-orange-500",
  };

  const iconColors = {
    blue: "text-blue-500",
    green: "text-green-500",
    violet: "text-violet-500",
    red: "text-red-500",
    orange: "text-orange-500",
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      disabled={disabled}
      onClick={handleToggle}
      className={`
        ${sizes[size].track}
        relative inline-flex items-center rounded-full
        transition-colors duration-300 ease-in-out
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500
        ${isChecked ? colors[color] : "bg-zinc-300 dark:bg-zinc-600"}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
      {...props}
    >
      <span
        className={`
          ${sizes[size].thumb}
          inline-flex items-center justify-center rounded-full bg-white shadow-lg
          transform transition-all duration-300 ease-in-out
          ${isChecked ? sizes[size].translate : "translate-x-0.5"}
          ${isChecked ? `ring-2 ${iconColors[color]} ring-current` : ""}
        `}
      >
        <svg
          className={`
            ${sizes[size].icon}
            transition-all duration-300 ease-in-out
            ${isChecked ? `${iconColors[color]} opacity-100 scale-100` : "opacity-0 scale-50"}
          `}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
    </button>
  );
}
