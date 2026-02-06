"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface AccordionCyberProps {
  title: string;
  id: string; // Used for unique visual IDs
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
}

export function AccordionCyber({ title, id, children, className, defaultOpen = false }: AccordionCyberProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={cn("mb-2 relative", className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative flex w-full items-center justify-between p-3 pl-6 text-left border-l-2 transition-all duration-200 clip-path-slant",
          "bg-zinc-900",
          isOpen
            ? "border-yellow-500 text-yellow-500"
            : "border-zinc-700 text-zinc-400 hover:text-yellow-200 hover:border-yellow-500/50"
        )}
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)"
        }}
      >
        <span className="font-mono text-sm uppercase tracking-wider">
          <span className="opacity-50 mr-3">[{id}]</span>
          {title}
        </span>
        <div className={cn("mr-4 text-xs font-mono transition-opacity", isOpen ? "opacity-100" : "opacity-50")}>
          {isOpen ? "[-]" : "[+]"}
        </div>

        {/* Background scanline effect for active state */}
        {isOpen && <div className="absolute inset-0 bg-yellow-500/5 pointer-events-none" />}
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-200 ease-linear border-l border-dashed border-yellow-500/20 ml-2 mt-1 pl-4",
          isOpen ? "max-h-96 opacity-100 py-2" : "max-h-0 opacity-0 py-0"
        )}
      >
        <div className="text-xs font-mono text-zinc-400 leading-relaxed border-l-2 border-yellow-500/50 pl-2">
          <span className="text-yellow-500/40 select-none mr-2">&gt;</span>
          {children}
        </div>
      </div>
    </div>
  );
}
