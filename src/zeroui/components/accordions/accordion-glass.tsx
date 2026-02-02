"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Plus, Minus } from "lucide-react";

interface AccordionGlassProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
}

export function AccordionGlass({ title, children, className, defaultOpen = false }: AccordionGlassProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={cn("mb-4 rounded-xl overflow-hidden border border-white/20 dark:border-white/10 bg-white/10 dark:bg-black/10 backdrop-blur-md shadow-sm transition-all duration-300", isOpen && "bg-white/20 dark:bg-black/20 shadow-md", className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-white/10 dark:hover:bg-white/5"
      >
        <span className="font-semibold text-zinc-800 dark:text-white">{title}</span>
        <div className={cn("p-1 rounded-full bg-white/20 dark:bg-white/10 transition-transform duration-300", isOpen && "rotate-180 bg-white/40 dark:bg-white/20")}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="p-4 pt-0 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed border-t border-white/10">
          {children}
        </div>
      </div>
    </div>
  );
}
