"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface TabsNeonProps {
  defaultValue: string;
  className?: string;
  children: React.ReactNode;
}

const TabsNeonContext = React.createContext<{
  activeTab: string;
  setActiveTab: (value: string) => void;
} | null>(null);

export function TabsNeon({ defaultValue, className, children }: TabsNeonProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsNeonContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn("w-full", className)}>{children}</div>
    </TabsNeonContext.Provider>
  );
}

export function TabsNeonList({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex items-center gap-8 border-b border-zinc-800/50 pb-px mb-6 px-4", className)}>
      {children}
    </div>
  );
}

export function TabsNeonTrigger({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) {
  const context = React.useContext(TabsNeonContext);
  if (!context) throw new Error("TabsNeonTrigger must be used within TabsNeon");

  const { activeTab, setActiveTab } = context;
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={cn(
        "relative pb-3 text-sm font-medium tracking-wide uppercase transition-all duration-300",
        isActive
          ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
          : "text-zinc-500 hover:text-zinc-300",
        className
      )}
    >
      {children}
      <span className={cn(
        "absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] transition-all duration-300",
        isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
      )} />
    </button>
  );
}

export function TabsNeonContent({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) {
  const context = React.useContext(TabsNeonContext);
  if (!context) throw new Error("TabsNeonContent must be used within TabsNeon");

  if (context.activeTab !== value) return null;

  return (
    <div className={cn("animate-in fade-in duration-500", className)}>
      {children}
    </div>
  );
}
