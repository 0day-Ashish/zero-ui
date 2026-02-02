"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface AccordionNeonProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
}

export function AccordionNeon({ title, children, className, defaultOpen = false }: AccordionNeonProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={cn("mb-4 group", className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex w-full items-center justify-between p-4 text-left border rounded-lg transition-all duration-300",
          isOpen
            ? "border-cyan-500 bg-cyan-950/20 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.2)]"
            : "border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"
        )}
      >
        <span className="font-bold tracking-wide uppercase flex items-center gap-2">
          <span className={cn("w-2 h-2 rounded-full transition-colors duration-300", isOpen ? "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,1)]" : "bg-zinc-700")} />
          {title}
        </span>
        <ChevronRight
          className={cn("h-5 w-5 transition-transform duration-300", isOpen && "rotate-90 text-cyan-400")}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out border-l border-r border-b rounded-b-lg mx-1",
          isOpen ? "max-h-96 opacity-100 border-cyan-500/30 bg-cyan-950/10" : "max-h-0 opacity-0 border-transparent bg-transparent"
        )}
      >
        <div className="p-4 text-sm text-cyan-100/80 font-light leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
