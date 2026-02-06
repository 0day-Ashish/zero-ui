"use client";

import React, { useState } from "react";

interface SwitchProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  color?: "blue" | "green" | "violet" | "red" | "orange";
}

export default function Switch({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  size = "md",
  color = "blue",
  className = "",
  ...props
}: SwitchProps) {
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
      thumb: "w-4 h-4",
      translate: "translate-x-[18px]",
    },
    md: {
      track: "w-14 h-8",
      thumb: "w-6 h-6",
      translate: "translate-x-[26px]",
    },
    lg: {
      track: "w-18 h-10",
      thumb: "w-8 h-8",
      translate: "translate-x-[34px]",
    },
  };

  const colors = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    violet: "bg-violet-500",
    red: "bg-red-500",
    orange: "bg-orange-500",
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
          inline-block rounded-full bg-white shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${isChecked ? sizes[size].translate : "translate-x-1.5"}
        `}
      />
    </button>
  );
}
