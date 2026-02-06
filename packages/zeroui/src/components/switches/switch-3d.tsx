"use client";

import React, { useState } from "react";

interface Switch3DProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Switch3D({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  size = "md",
  className = "",
  ...props
}: Switch3DProps) {
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
      container: "w-16 h-8",
      text: "text-xs",
      perspective: "80px",
    },
    md: {
      container: "w-20 h-10",
      text: "text-sm",
      perspective: "100px",
    },
    lg: {
      container: "w-24 h-12",
      text: "text-base",
      perspective: "120px",
    },
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      disabled={disabled}
      onClick={handleToggle}
      className={`
        ${sizes[size].container}
        relative inline-flex rounded-md overflow-hidden
        border border-zinc-300 dark:border-zinc-600
        bg-zinc-100 dark:bg-zinc-800
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
      style={{ perspective: sizes[size].perspective }}
      {...props}
    >
      {/* Background labels */}
      <div className="absolute inset-0 flex">
        <div className={`flex-1 flex items-center justify-center ${sizes[size].text} font-semibold text-zinc-400 dark:text-zinc-500`}>
          OFF
        </div>
        <div className={`flex-1 flex items-center justify-center ${sizes[size].text} font-semibold text-zinc-400 dark:text-zinc-500`}>
          ON
        </div>
      </div>

      {/* 3D Slider */}
      <div
        className={`
          absolute top-0.5 bottom-0.5 w-1/2 rounded
          bg-white dark:bg-zinc-700
          shadow-[2px_2px_4px_rgba(0,0,0,0.1),-1px_-1px_2px_rgba(255,255,255,0.5)]
          dark:shadow-[2px_2px_4px_rgba(0,0,0,0.3),-1px_-1px_2px_rgba(255,255,255,0.05)]
          transition-all duration-300 ease-out
          flex items-center justify-center
          ${sizes[size].text} font-bold
          ${isChecked
            ? "left-[calc(50%-2px)] text-zinc-800 dark:text-zinc-200"
            : "left-0.5 text-zinc-600 dark:text-zinc-400"
          }
        `}
        style={{
          transform: isChecked
            ? "rotateY(-8deg) translateZ(2px)"
            : "rotateY(8deg) translateZ(2px)",
          transformStyle: "preserve-3d",
        }}
      >
        {isChecked ? "ON" : "OFF"}
        {/* 3D edge effect */}
        <div
          className={`
            absolute right-0 top-0 bottom-0 w-1
            transition-colors duration-300
            ${isChecked
              ? "bg-gradient-to-l from-zinc-300 dark:from-zinc-600 to-transparent"
              : "bg-gradient-to-r from-zinc-200 dark:from-zinc-600 to-transparent left-0 right-auto"
            }
          `}
        />
      </div>
    </button>
  );
}
