"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

// Reusing types from base or defining new ones if props differ significantly
// For simplicity, defining here to be self-contained

interface TabsGlassProps {
  defaultValue: string;
  className?: string;
  children: React.ReactNode;
}

const TabsGlassContext = React.createContext<{
  activeTab: string;
  setActiveTab: (value: string) => void;
} | null>(null);

export function TabsGlass({ defaultValue, className, children }: TabsGlassProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsGlassContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn("w-full group/tabs", className)}>{children}</div>
    </TabsGlassContext.Provider>
  );
}

export function TabsGlassList({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative flex items-center gap-2 p-1.5 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg w-fit", className)}>
      {children}
    </div>
  );
}

export function TabsGlassTrigger({ value, children, className, icon }: { value: string; children: React.ReactNode; className?: string; icon?: React.ReactNode }) {
  const context = React.useContext(TabsGlassContext);
  if (!context) throw new Error("TabsGlassTrigger must be used within TabsGlass");

  const { activeTab, setActiveTab } = context;
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={cn(
        "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 z-10",
        isActive ? "text-zinc-900 dark:text-white" : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200",
        className
      )}
    >
      {isActive && (
        <span className="absolute inset-0 bg-white/80 dark:bg-zinc-800/80 shadow-sm rounded-full -z-10 animate-in fade-in zoom-in-95 duration-200" />
      )}
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </button>
  );
}

export function TabsGlassContent({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) {
  const context = React.useContext(TabsGlassContext);
  if (!context) throw new Error("TabsGlassContent must be used within TabsGlass");

  if (context.activeTab !== value) return null;

  return (
    <div className={cn("mt-4 p-6 rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-xl animate-in slide-in-from-bottom-2 fade-in duration-300", className)}>
      {children}
    </div>
  );
}
