"use client";

import React, { forwardRef } from "react";

interface InputFloatingProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean;
}

const InputFloating = forwardRef<HTMLInputElement, InputFloatingProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="relative z-0 w-full group">
        <input
          ref={ref}
          type="text"
          placeholder=" "
          className={`
            block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-zinc-300 appearance-none dark:text-white dark:border-zinc-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer
            ${error ? "border-red-500 focus:border-red-500" : ""}
            ${className}
          `}
          {...props}
        />
        <label
          className={`
            peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6
            ${error ? "text-red-500 peer-focus:text-red-500" : "text-zinc-500 dark:text-zinc-400"}
          `}
        >
          {label}
        </label>
      </div>
    );
  }
);

InputFloating.displayName = "InputFloating";

export default InputFloating;
