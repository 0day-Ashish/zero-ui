"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface TabsCyberProps {
  defaultValue: string;
  className?: string;
  children: React.ReactNode;
}

const TabsCyberContext = React.createContext<{
  activeTab: string;
  setActiveTab: (value: string) => void;
} | null>(null);

export function TabsCyber({ defaultValue, className, children }: TabsCyberProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsCyberContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn("w-full bg-zinc-950/50 p-1", className)}>{children}</div>
    </TabsCyberContext.Provider>
  );
}

export function TabsCyberList({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-2 mb-8", className)}>
      {children}
    </div>
  );
}

export function TabsCyberTrigger({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) {
  const context = React.useContext(TabsCyberContext);
  if (!context) throw new Error("TabsCyberTrigger must be used within TabsCyber");

  const { activeTab, setActiveTab } = context;
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={cn(
        "relative px-6 py-2 text-sm font-mono uppercase tracking-wider clip-path-slant transition-all duration-200",
        isActive
          ? "bg-yellow-400 text-black font-bold clip-path-slant-active"
          : "bg-zinc-900 text-zinc-500 border border-zinc-800 hover:text-yellow-400 hover:border-yellow-400/50",
        className
      )}
      style={{
        clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)"
      }}
    >
      {/* Corner accents */}
      {!isActive && <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-700" />}
      {!isActive && <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-zinc-700" />}

      {children}
    </button>
  );
}

export function TabsCyberContent({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) {
  const context = React.useContext(TabsCyberContext);
  if (!context) throw new Error("TabsCyberContent must be used within TabsCyber");

  if (context.activeTab !== value) return null;

  return (
    <div className={cn(
      "relative p-6 border border-zinc-800 bg-zinc-900/50",
      "before:absolute before:top-0 before:left-0 before:w-3 before:h-3 before:border-t-2 before:border-l-2 before:border-yellow-400/50",
      "after:absolute after:bottom-0 after:right-0 after:w-3 after:h-3 after:border-b-2 after:border-r-2 after:border-yellow-400/50",
      "animate-in fade-in zoom-in-95 duration-150",
      className
    )}>
      {/* Decoration lines */}
      <div className="absolute top-0 right-10 w-20 h-px bg-zinc-800" />
      <div className="absolute bottom-0 left-10 w-20 h-px bg-zinc-800" />

      {children}
    </div>
  );
}
