"use client";

import React, { useState, useRef } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface InputTagsProps {
  label?: string;
  helperText?: string;
  placeholder?: string;
  onChange?: (tags: string[]) => void;
  className?: string;
  defaultValue?: string[];
  maxTags?: number;
}

export default function InputTags({
  label,
  helperText,
  placeholder = "Add a tag...",
  onChange,
  className,
  defaultValue = [],
  maxTags,
}: InputTagsProps) {
  const [tags, setTags] = useState<string[]>(defaultValue);
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag();
    } else if (e.key === "Backspace" && !inputValue && tags.length > 0) {
      removeTag(tags.length - 1);
    }
  };

  const addTag = () => {
    const trimmedInput = inputValue.trim();
    if (trimmedInput && !tags.includes(trimmedInput)) {
      if (maxTags && tags.length >= maxTags) return;

      const newTags = [...tags, trimmedInput];
      setTags(newTags);
      onChange?.(newTags);
      setInputValue("");
    }
  };

  const removeTag = (index: number) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
    onChange?.(newTags);
  };

  return (
    <div className={cn("w-full space-y-2", className)}>
      {label && (
        <label className="text-sm font-medium leading-none text-zinc-900 dark:text-zinc-100">
          {label}
        </label>
      )}

      <div
        className={cn(
          "flex flex-wrap items-center gap-2 p-2 w-full min-h-[42px] border rounded-lg bg-white dark:bg-zinc-900 transition-all duration-200 cursor-text",
          isFocused
            ? "border-violet-500 ring-2 ring-violet-500/20"
            : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
        )}
        onClick={() => inputRef.current?.focus()}
      >
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-flex items-center px-2 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-md animate-in fade-in zoom-in-95 duration-200"
          >
            {tag}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeTag(index);
              }}
              className="ml-1 text-zinc-500 hover:text-red-500 focus:outline-none"
            >
              <X size={12} />
            </button>
          </span>
        ))}

        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            addTag(); // Optionally add tag on blur
          }}
          placeholder={tags.length === 0 ? placeholder : ""}
          className="flex-1 bg-transparent border-none outline-none text-sm min-w-[120px] text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500"
        />
      </div>

      {helperText && (
        <p className="text-xs text-zinc-500">
          {helperText}
        </p>
      )}
    </div>
  );
}
