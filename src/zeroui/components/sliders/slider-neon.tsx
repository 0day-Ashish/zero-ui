"use client";

import React, { useState } from "react";

interface SliderNeonProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  value?: number;
  onChange?: (value: number) => void;
  color?: string; // e.g., "magenta", "cyan", "lime"
  className?: string;
  disabled?: boolean;
}

export default function SliderNeon({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
  value: controlledValue,
  onChange,
  color = "#d946ef", // Default magenta-ish
  className = "",
  disabled = false,
}: SliderNeonProps) {
  const [localValue, setLocalValue] = useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : localValue;

  const getPercentage = (val: number) => {
    return ((val - min) / (max - min)) * 100;
  };

  const pct = getPercentage(value);

  return (
    <div className={`relative w-full h-10 flex items-center select-none ${disabled ? 'opacity-50' : ''} ${className}`}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={disabled}
        onChange={(e) => {
          const val = parseFloat(e.target.value);
          if (!isControlled) setLocalValue(val);
          onChange?.(val);
        }}
        className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-pointer"
      />

      {/* Glow Container */}
      <div className="relative w-full h-1.5 bg-zinc-900 rounded-full">
        {/* Glow Track */}
        <div
          className="absolute top-0 left-0 h-full rounded-full transition-[width] duration-75 relative"
          style={{ width: `${pct}%`, backgroundColor: color, boxShadow: `0 0 10px ${color}, 0 0 20px ${color}` }}
        >
          {/* Sparkle/Particle at tip - optional detail */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-white rounded-full blur-sm opacity-50" />
        </div>

        {/* Background Track (Dark) */}
        <div
          className="absolute top-0 right-0 h-full bg-zinc-800 rounded-r-full -z-10"
          style={{ width: `${100 - pct}%` }}
        />
      </div>

      {/* Cyberpunk Thumb */}
      <div
        className="absolute h-6 w-6 bg-black border-2 rounded-md pointer-events-none transition-[left] duration-75 ease-out -translate-x-1/2 flex items-center justify-center -rotate-45"
        style={{ left: `${pct}%`, borderColor: color, boxShadow: `0 0 10px ${color}` }}
      >
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
      </div>
    </div>
  );
}
