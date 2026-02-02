"use client";

import React, { useRef, useState, useEffect } from "react";

interface SliderBaseProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  value?: number;
  onChange?: (value: number) => void;
  className?: string;
  disabled?: boolean;
}

export default function SliderBase({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
  value: controlledValue,
  onChange,
  className = "",
  disabled = false,
}: SliderBaseProps) {
  const [localValue, setLocalValue] = useState(defaultValue);
  const trackRef = useRef<HTMLDivElement>(null);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : localValue;

  const getPercentage = (val: number) => {
    return ((val - min) / (max - min)) * 100;
  };

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !trackRef.current) return;

    const rect = trackRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const percentage = Math.min(100, Math.max(0, (x / width) * 100));

    // Calculate raw value based on percentage
    let newValue = min + (percentage / 100) * (max - min);

    // Snap to step
    const steps = Math.round((newValue - min) / step);
    newValue = min + steps * step;

    // Clamp
    newValue = Math.max(min, Math.min(max, newValue));

    if (!isControlled) {
      setLocalValue(newValue);
    }
    onChange?.(newValue);
  };

  // Simple drag handling (for brevity, sticking to click + native range input behavior wrapper is often better for accessibility, 
  // but for "premium" visual sliders we often rebuild the view. 
  // For a truly robust accessible slider, Radix UI or React Aria is recommended.
  // Here we'll implement a visual wrapper over a native input to ensure basic accessibility while allowing custom styling.)

  return (
    <div className={`relative w-full h-6 flex items-center select-none ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}>
      {/* Native Input for Accessibility/Tab-index/Forms */}
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
        className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-pointer disabled:cursor-not-allowed"
      />

      {/* Visual Track */}
      <div
        ref={trackRef}
        className="relative w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden pointer-events-none"
      >
        <div
          className="absolute top-0 left-0 h-full bg-zinc-900 dark:bg-white transition-[width] duration-75 ease-out"
          style={{ width: `${getPercentage(value)}%` }}
        />
      </div>

      {/* Visual Thumb */}
      <div
        className="absolute h-5 w-5 bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-white rounded-full shadow-md pointer-events-none transition-[left] duration-75 ease-out -translate-x-1/2"
        style={{ left: `${getPercentage(value)}%` }}
      />
    </div>
  );
}
