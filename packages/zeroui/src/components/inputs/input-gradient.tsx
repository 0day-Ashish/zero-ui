"use client";

import React, { forwardRef, useState } from "react";

interface InputGradientProps extends React.InputHTMLAttributes<HTMLInputElement> {
  wrapperClassName?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

const InputGradient = forwardRef<HTMLInputElement, InputGradientProps>(
  ({ className, wrapperClassName, gradientFrom = "#8b5cf6", gradientTo = "#3b82f6", ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div
        className={`relative rounded-xl p-[1px] group transition-all duration-300 ${wrapperClassName}`}
        style={{
          background: isFocused
            ? `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`
            : "rgba(82, 82, 91, 0.3)" // zinc-600/30 equivalent
        }}
      >
        <div className="absolute inset-0 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: isFocused
              ? `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`
              : "transparent"
          }}
        />

        <input
          ref={ref}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          className={`
            relative w-full bg-white dark:bg-zinc-950 rounded-[11px] px-4 py-3 text-sm outline-none 
            placeholder:text-zinc-500 dark:placeholder:text-zinc-400
            transition-all duration-200
            ${className}
          `}
          {...props}
        />
      </div>
    );
  }
);

InputGradient.displayName = "InputGradient";

export default InputGradient;
