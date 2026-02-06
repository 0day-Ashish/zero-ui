"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

interface AccordionSpringProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
}

export function AccordionSpring({ title, children, className, defaultOpen = false }: AccordionSpringProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={cn(
        "mb-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border-2 border-transparent transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]",
        isOpen ? "border-zinc-900 dark:border-zinc-100 shadow-xl scale-[1.02]" : "hover:scale-[1.01] hover:bg-zinc-100 dark:hover:bg-zinc-800",
        className
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-5 text-left"
      >
        <span className={cn("text-lg font-bold tracking-tight transition-colors", isOpen ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-600 dark:text-zinc-400")}>
          {title}
        </span>
        <div
          className={cn(
            "flex items-center justify-center w-8 h-8 rounded-full border-2 border-zinc-900 dark:border-zinc-100 transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]",
            isOpen ? "bg-zinc-900 dark:bg-zinc-100 rotate-45" : "bg-transparent"
          )}
        >
          <Plus className={cn("w-5 h-5 transition-colors duration-300", isOpen ? "text-white dark:text-zinc-900" : "text-zinc-900 dark:text-zinc-100")} />
        </div>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-[max-height,opacity,padding] duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]",
          isOpen ? "max-h-96 opacity-100 pb-5 px-5" : "max-h-0 opacity-0 pb-0 px-5"
        )}
      >
        <div className="text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
