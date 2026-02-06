"use client";

import React from "react";
import { Search } from "lucide-react";

interface DropdownSearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function DropdownSearchInput({ className = "", ...props }: DropdownSearchInputProps) {
  return (
    <div className="relative p-2 pb-1">
      <Search className="absolute left-5 top-1/2 h-4 w-4 -translate-y-[60%] text-zinc-400 dark:text-zinc-500" />
      <input
        className={`w-full rounded-lg border border-zinc-200 bg-zinc-50 py-2 pl-9 pr-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-300 focus:ring-2 focus:ring-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-zinc-700 dark:focus:ring-zinc-800 ${className}`}
        placeholder="Search..."
        onClick={(e) => e.stopPropagation()}
        {...props}
      />
    </div>
  );
}
