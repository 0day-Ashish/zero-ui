"use client";

import React, { forwardRef } from "react";
import { LucideIcon } from "lucide-react";

interface InputIconProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  iconClassName?: string;
  error?: boolean;
}

const InputIcon = forwardRef<HTMLInputElement, InputIconProps>(
  ({ className, icon: Icon, iconPosition = "left", iconClassName, error, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {Icon && iconPosition === "left" && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className={`h-5 w-5 text-zinc-500 ${iconClassName}`} />
          </div>
        )}
        <input
          ref={ref}
          className={`
            w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg py-2 text-sm transition-all duration-200 outline-none
            focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20
            disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-muted-foreground/50
            ${iconPosition === "left" ? (Icon ? "pl-10 pr-4" : "px-4") : (Icon ? "pl-4 pr-10" : "px-4")}
            ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}
            ${className}
          `}
          {...props}
        />
        {Icon && iconPosition === "right" && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Icon className={`h-5 w-5 text-zinc-500 ${iconClassName}`} />
          </div>
        )}
      </div>
    );
  }
);

InputIcon.displayName = "InputIcon";

export default InputIcon;
