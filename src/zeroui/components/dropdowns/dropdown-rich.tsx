"use client";

import React from "react";
// We don't strictly need useDropdown here if we just pass onClick, 
// but it's cleaner if the item automatically handles it.
// Assuming we are just building the UI components for the "Rich" variant.

// Re-exporting base generic parts so they can be imported from here too
// Removed re-exports to avoid conflicts in index.ts

// --- Rich Item Component ---
interface DropdownItemRichProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  active?: boolean;
}

export function DropdownItemRich({
  title,
  description,
  icon,
  active = false,
  className = "",
  onClick,
  ...props
}: DropdownItemRichProps) {
  // Note: ideally we consume context to close menu, but for this 'add-on' file 
  // we will rely on the parent or manual onClick helper if needed, 
  // or the user can wrap it. But for visual demo it works as a button.
  
  return (
    <button
      className={`group flex w-full items-start gap-3 rounded-xl p-3 text-left transition-all duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 focus:outline-none ${
        active 
        ? "bg-zinc-50 dark:bg-zinc-900/40 ring-1 ring-zinc-200 dark:ring-zinc-800" 
        : "hover:translate-x-1"
      } ${className}`}
      onClick={onClick}
      {...props}
    >
      {icon && (
        <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-200/50 bg-zinc-100 text-zinc-500 transition-colors group-hover:border-zinc-200 group-hover:bg-white group-hover:text-zinc-900 dark:border-zinc-800/50 dark:bg-zinc-900 dark:text-zinc-400 dark:group-hover:border-zinc-700 dark:group-hover:bg-zinc-800 dark:group-hover:text-zinc-100`}>
          {icon}
        </div>
      )}
      <div className="flex flex-col flex-1 min-w-0">
        <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          {title}
        </span>
        {description && (
          <span className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
            {description}
          </span>
        )}
      </div>
      {active && (
        <span className="ml-auto flex h-full items-center pt-1 text-zinc-950 dark:text-zinc-50">
             {/* Simple checkmark */}
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </span>
      )}
    </button>
  );
}

// --- User Profile Header ---
export function DropdownUserHeader({
  name,
  email,
  src,
  initials,
}: {
  name: string;
  email: string;
  src?: string;
  initials?: string;
}) {
  return (
    <div className="flex items-center gap-3 px-3 py-2.5 mb-1 rounded-xl bg-gradient-to-br from-zinc-50 to-zinc-100/50 dark:from-zinc-900/50 dark:to-zinc-900/10 border border-zinc-100 dark:border-zinc-800/50">
      <div className="h-9 w-9 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-200 dark:border-zinc-700 shadow-sm">
        {src ? (
          <img src={src} alt={name} className="h-full w-full object-cover" />
        ) : (
          <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">{initials}</span>
        )}
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-sm font-bold text-zinc-900 dark:text-zinc-50 truncate">
          {name}
        </span>
        <span className="text-xs font-medium text-zinc-500 dark:text-zinc-500 truncate">
          {email}
        </span>
      </div>
    </div>
  );
}

// --- Status Item ---
interface DropdownItemStatusProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  status: "online" | "busy" | "offline" | "idle";
  active?: boolean;
}

export function DropdownItemStatus({
  children,
  status,
  active = false,
  className = "",
  onClick,
  ...props
}: DropdownItemStatusProps) {
  const statusColors = {
    online: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]",
    busy: "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]",
    idle: "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]",
    offline: "bg-zinc-400 dark:bg-zinc-500",
  };

  return (
    <button
      className={`group flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-sm transition-all duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 ${
        active ? "bg-zinc-50 dark:bg-zinc-900/50" : ""
      } ${className}`}
      onClick={onClick}
      {...props}
    >
      <div className="relative flex h-2.5 w-2.5 items-center justify-center">
        <span
          className={`h-2.5 w-2.5 rounded-full ${statusColors[status]}`}
        />
      </div>
      <span className="flex-1 text-left font-medium text-zinc-700 dark:text-zinc-200">
        {children}
      </span>
      {active && (
        <span className="ml-auto text-zinc-900 dark:text-zinc-100">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </span>
      )}
    </button>
  );
}


// --- Toggle Item ---
interface DropdownItemToggleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  icon?: React.ReactNode;
}

export function DropdownItemToggle({
  children,
  checked = false,
  onCheckedChange,
  icon,
  className = "",
  ...props
}: DropdownItemToggleProps) {
  return (
    <div
      className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-sm transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/40 ${className}`}
      {...props}
    >
      <div className="flex items-center gap-2.5">
        {icon && <span className="text-zinc-400 dark:text-zinc-500">{icon}</span>}
        <span className="font-medium text-zinc-700 dark:text-zinc-200">
          {children}
        </span>
      </div>
      
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onCheckedChange?.(!checked)}
        className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:focus-visible:ring-zinc-800 ${
          checked ? "bg-zinc-900 dark:bg-zinc-100" : "bg-zinc-200 dark:bg-zinc-700"
        }`}
      >
        <span
          className={`pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform ${
            checked ? "translate-x-4 dark:bg-zinc-900" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
