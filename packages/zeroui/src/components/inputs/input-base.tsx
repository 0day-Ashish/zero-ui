"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils"; // Assuming utils exists, or I will use clsx/tailwind-merge directly if not found

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
  variant?: "default" | "filled" | "underscore";
}

const InputBase = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, helperText, error, variant = "default", ...props }, ref) => {

    const baseStyles = "w-full px-4 py-2 text-sm transition-all duration-200 outline-none placeholder:text-muted-foreground/50 disabled:cursor-not-allowed disabled:opacity-50";

    const variants = {
      default: "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20",
      filled: "bg-zinc-100 dark:bg-zinc-800/50 border-transparent rounded-lg focus:bg-white dark:focus:bg-zinc-900 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20",
      underscore: "bg-transparent border-b border-zinc-200 dark:border-zinc-800 rounded-none px-0 focus:border-violet-500 focus:ring-0",
    };

    const errorStyles = error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20 text-red-600" : "";

    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-900 dark:text-zinc-100">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            ${baseStyles} 
            ${variants[variant]} 
            ${errorStyles}
            ${className}
          `}
          {...props}
        />
        {helperText && (
          <p className={`text-xs ${error ? "text-red-500" : "text-zinc-500"}`}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

InputBase.displayName = "InputBase";

export default InputBase;
