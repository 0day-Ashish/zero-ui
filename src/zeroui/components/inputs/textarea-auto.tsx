"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TextareaAutoProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  minRows?: number;
  maxRows?: number;
}

export default function TextareaAuto({
  className,
  label,
  helperText,
  minRows = 3,
  maxRows = 10,
  onChange,
  value,
  ...props
}: TextareaAutoProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [internalValue, setInternalValue] = useState(value || "");

  const handleResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(
        textarea.scrollHeight,
        maxRows * 24 // approximate line-height of 24px
      )}px`;
    }
  };

  useEffect(() => {
    handleResize();
  }, [internalValue, value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInternalValue(e.target.value);
    onChange?.(e);
  };

  return (
    <div className="w-full space-y-2">
      {label && (
        <label className="text-sm font-medium leading-none text-zinc-900 dark:text-zinc-100">
          {label}
        </label>
      )}

      <textarea
        ref={textareaRef}
        rows={minRows}
        value={value !== undefined ? value : internalValue}
        onChange={handleChange}
        className={cn(
          "w-full px-4 py-3 text-sm rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 outline-none transition-all duration-200 placeholder:text-zinc-500 dark:placeholder:text-zinc-400 resize-none",
          "focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20",
          className
        )}
        style={{ scrollbarWidth: "none" }}
        {...props}
      />

      {helperText && (
        <p className="text-xs text-zinc-500">
          {helperText}
        </p>
      )}
    </div>
  );
}
