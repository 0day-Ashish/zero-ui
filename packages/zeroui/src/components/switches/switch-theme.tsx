"use client";

import React, { useState } from "react";

interface SwitchThemeProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export default function SwitchTheme({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  className = "",
  ...props
}: SwitchThemeProps) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isChecked = checked !== undefined ? checked : internalChecked;
  const isDark = isChecked;

  const handleToggle = () => {
    if (disabled) return;
    const newValue = !isChecked;
    if (checked === undefined) {
      setInternalChecked(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      disabled={disabled}
      onClick={handleToggle}
      className={`
        w-20 h-10 relative inline-flex items-center rounded-full
        transition-colors duration-500 ease-in-out overflow-hidden
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500
        ${isDark ? "bg-zinc-800" : "bg-gradient-to-r from-blue-400 to-cyan-300"}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
      {...props}
    >
      {/* Stars (visible in dark mode) */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${isDark ? "opacity-100" : "opacity-0"}`}>
        <span className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full animate-pulse" />
        <span className="absolute top-4 left-5 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-100" />
        <span className="absolute top-2.5 left-8 w-1 h-1 bg-white rounded-full animate-pulse delay-200" />
        <span className="absolute top-6 left-3 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-300" />
        {/* Star shapes */}
        <svg className="absolute top-3 left-4 w-2 h-2 text-white/80" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 8.41L24 12L14.59 15.59L12 24L9.41 15.59L0 12L9.41 8.41L12 0Z" />
        </svg>
        <svg className="absolute top-5 left-7 w-1.5 h-1.5 text-white/60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 8.41L24 12L14.59 15.59L12 24L9.41 15.59L0 12L9.41 8.41L12 0Z" />
        </svg>
      </div>

      {/* Clouds (visible in light mode) */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${isDark ? "opacity-0" : "opacity-100"}`}>
        <span className="absolute top-5 left-2 w-3 h-1.5 bg-white/60 rounded-full" />
        <span className="absolute top-3 left-4 w-2 h-1 bg-white/40 rounded-full" />
      </div>

      {/* Sun/Moon thumb */}
      <span
        className={`
          w-8 h-8 rounded-full shadow-lg
          transform transition-all duration-500 ease-in-out
          flex items-center justify-center
          ${isDark ? "translate-x-11 bg-zinc-200" : "translate-x-1 bg-yellow-300"}
        `}
      >
        {isDark ? (
          // Moon with craters
          <div className="relative w-full h-full">
            <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-zinc-400 rounded-full opacity-60" />
            <div className="absolute top-4 left-4 w-2 h-2 bg-zinc-400 rounded-full opacity-50" />
            <div className="absolute top-2 right-2 w-1 h-1 bg-zinc-400 rounded-full opacity-40" />
          </div>
        ) : (
          // Sun rays
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-4 h-4 bg-yellow-400 rounded-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(8)].map((_, i) => (
                <span
                  key={i}
                  className="absolute w-0.5 h-1 bg-yellow-400 rounded-full origin-center"
                  style={{
                    transform: `rotate(${i * 45}deg) translateY(-10px)`,
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </span>
    </button>
  );
}
