"use client";

import React, { useState } from "react";

interface SwitchNeumorphicProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  showDots?: boolean;
}

export default function SwitchNeumorphic({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  size = "md",
  showDots = true,
  className = "",
  ...props
}: SwitchNeumorphicProps) {
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
      track: "w-14 h-8",
      thumb: "w-6 h-6",
      translate: "translate-x-6",
      dots: "gap-0.5",
      dot: "w-0.5 h-0.5",
    },
    md: {
      track: "w-18 h-10",
      thumb: "w-8 h-8",
      translate: "translate-x-8",
      dots: "gap-1",
      dot: "w-1 h-1",
    },
    lg: {
      track: "w-22 h-12",
      thumb: "w-10 h-10",
      translate: "translate-x-10",
      dots: "gap-1",
      dot: "w-1 h-1",
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
        ${sizes[size].track}
        relative inline-flex items-center rounded-2xl p-1
        bg-zinc-200 dark:bg-zinc-800
        shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.9)]
        dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.05)]
        transition-all duration-300 ease-in-out
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-400
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
      {...props}
    >
      <span
        className={`
          ${sizes[size].thumb}
          inline-flex items-center justify-center rounded-xl
          bg-zinc-100 dark:bg-zinc-700
          shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.9)]
          dark:shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.05)]
          transform transition-all duration-300 ease-in-out
          ${isChecked ? sizes[size].translate : "translate-x-0"}
          ${isChecked
            ? "shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.9)] dark:shadow-[2px_2px_4px_rgba(0,0,0,0.3),-2px_-2px_4px_rgba(255,255,255,0.05)]"
            : ""
          }
        `}
      >
        {showDots && (
          <div className={`grid grid-cols-3 ${sizes[size].dots}`}>
            {[...Array(9)].map((_, i) => (
              <span
                key={i}
                className={`
                  ${sizes[size].dot}
                  rounded-full
                  transition-colors duration-300
                  ${isChecked
                    ? "bg-zinc-400 dark:bg-zinc-500"
                    : "bg-zinc-300 dark:bg-zinc-600"
                  }
                `}
              />
            ))}
          </div>
        )}
      </span>
    </button>
  );
}
