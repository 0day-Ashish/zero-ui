"use client";

import React, { useState, useEffect } from "react";

interface SliderMagneticProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  value?: number;
  onChange?: (value: number) => void;
  ticks?: number[];
  className?: string;
  disabled?: boolean;
}

export default function SliderMagnetic({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
  value: controlledValue,
  onChange,
  ticks = [0, 25, 50, 75, 100],
  className = "",
  disabled = false,
}: SliderMagneticProps) {
  const [localValue, setLocalValue] = useState(defaultValue);
  const [isDidSnap, setIsDidSnap] = useState(false);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : localValue;

  const getPercentage = (val: number) => {
    return ((val - min) / (max - min)) * 100;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = parseFloat(e.target.value);

    // Magnetic Logic
    // If close to a tick, snap to it.
    const snapThreshold = (max - min) * 0.05; // 5% range
    let snapped = false;

    for (const tick of ticks) {
      if (Math.abs(val - tick) < snapThreshold) {
        val = tick;
        snapped = true;
        break;
      }
    }

    if (snapped && !isDidSnap) {
      // Trigger haptic or visual feedback if possible
      setIsDidSnap(true);
    } else if (!snapped) {
      setIsDidSnap(false);
    }

    if (!isControlled) setLocalValue(val);
    onChange?.(val);
  };

  return (
    <div className={`relative w-full h-12 flex items-center select-none ${disabled ? 'opacity-50' : ''} ${className}`}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={disabled}
        onChange={handleInputChange}
        className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-pointer"
      />

      {/* Track */}
      <div className="relative w-full h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center">
        {/* Ticks */}
        {ticks.map((tick) => (
          <div
            key={tick}
            className={`absolute w-1 h-3 rounded-full transition-colors duration-200 -translate-x-1/2 ${Math.abs(value - tick) < 0.1 ? 'bg-indigo-500 h-4 w-1.5' : 'bg-zinc-300 dark:bg-zinc-700'
              }`}
            style={{ left: `${getPercentage(tick)}%` }}
          />
        ))}

        {/* Active Fill */}
        <div
          className="absolute top-0 left-0 h-full bg-indigo-500 rounded-full opacity-50 transition-[width] duration-100"
          style={{ width: `${getPercentage(value)}%` }}
        />
      </div>

      {/* Thumb */}
      <div
        className={`absolute h-6 w-6 bg-white dark:bg-zinc-900 border-2 rounded-full shadow-lg pointer-events-none transition-all duration-150 ease-out -translate-x-1/2 flex items-center justify-center ${isDidSnap ? 'border-indigo-500 scale-110' : 'border-zinc-500'}`}
        style={{ left: `${getPercentage(value)}%` }}
      >
        <div className={`w-2 h-2 rounded-full transition-colors ${isDidSnap ? 'bg-indigo-500' : 'bg-zinc-400'}`} />
      </div>
    </div>
  );
}
