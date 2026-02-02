"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";

interface AccordionBorderProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
}

export function AccordionBorder({ title, children, className, defaultOpen = false }: AccordionBorderProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={cn("relative mb-px group", className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex w-full items-center justify-between py-6 text-left group overflow-hidden"
      >
        {/* Animated Background */}
        <div className={cn("absolute inset-0 bg-zinc-100 dark:bg-zinc-800 transition-transform duration-500 ease-out origin-left", isOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-5")} />

        <span className={cn("relative z-10 text-xl font-light tracking-wide transition-colors duration-300 pl-4", isOpen ? "text-zinc-900 dark:text-zinc-100 pl-6" : "text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-300")}>
          {title}
        </span>

        <div className={cn("relative z-10 pr-4 transition-transform duration-500", isOpen ? "rotate-180" : "group-hover:translate-y-1")}>
          <ArrowDown className="w-5 h-5 font-thin" strokeWidth={1.5} />
        </div>

        {/* Bottom Border Animation */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-zinc-200 dark:bg-zinc-800" />
        <div className={cn("absolute bottom-0 left-0 w-full h-px bg-zinc-900 dark:bg-zinc-100 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] origin-left", isOpen ? "scale-x-100" : "scale-x-0")} />
      </button>

      <div
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="py-6 px-6 text-zinc-600 dark:text-zinc-400 font-light leading-relaxed text-lg border-l border-zinc-200 dark:border-zinc-800 ml-4">
          {children}
        </div>
      </div>
    </div>
  );
}
