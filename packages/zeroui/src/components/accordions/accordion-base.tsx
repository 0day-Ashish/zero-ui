"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
}

export function AccordionBase({ title, children, className, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={cn("border-b border-zinc-200 dark:border-zinc-800", className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 font-medium transition-all hover:underline text-left rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:focus:ring-zinc-300 dark:focus:ring-offset-zinc-950"
      >
        {title}
        <ChevronDown
          className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
        )}
      >
        <div className="text-sm text-zinc-500 dark:text-zinc-400">
          {children}
        </div>
      </div>
    </div>
  );
}
