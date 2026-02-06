"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

// --- Types ---
interface ContextMenuProps {
  children: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

interface ContextMenuContentProps {
  children: React.ReactNode;
  className?: string;
  width?: string;
}

interface ContextMenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "destructive";
  icon?: React.ReactNode;
  shortcut?: string;
}

// --- Context ---
interface ContextMenuContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  position: { x: number; y: number };
}

const ContextMenuContext = React.createContext<ContextMenuContextType | undefined>(undefined);

const useContextMenu = () => {
  const context = React.useContext(ContextMenuContext);
  if (!context) {
    throw new Error("useContextMenu must be used within a ContextMenu component");
  }
  return context;
};

// --- Components ---

export function ContextMenu({ children, content, className = "" }: ContextMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef<HTMLDivElement>(null);

  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(true);
    setPosition({ x: e.pageX, y: e.pageY });
  }, []);

  // Close on click outside or escape key
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    
    const handleScroll = () => {
        if(isOpen) setIsOpen(false);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClick);
      document.addEventListener("keydown", handleKeyDown);
      window.addEventListener("scroll", handleScroll, true); 
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [isOpen]);

  return (
    <ContextMenuContext.Provider value={{ isOpen, setIsOpen, position }}>
      <div 
        onContextMenu={handleContextMenu} 
        className={cn("relative inline-block", className)}
      >
        {children}
      </div>
      {isOpen && (
        <ContextMenuPortal>
            <div
                ref={menuRef}
                style={{
                    top: position.y,
                    left: position.x,
                }}
                className="fixed z-50 pointer-events-auto"
            >
                {content}
            </div>
        </ContextMenuPortal>
      )}
    </ContextMenuContext.Provider>
  );
}

// Simple portal to ensure menu breaks out of overflow:hidden containers
function ContextMenuPortal({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!mounted) return null;

    // In a real app you might use createPortal from react-dom
    // For this zero-ui implementation, we will render it at the root level if possible, 
    // but for simplicity in this file, we will leave it as is or use createPortal if user context allows.
    // Let's assume standard Next.js behavior where document.body is available.
    if (typeof document === "undefined") return null;
    
    const { createPortal } = require("react-dom");
    return createPortal(children, document.body);
}

export function ContextMenuContent({
  children,
  width = "w-56",
  className = "",
}: ContextMenuContentProps) {
    // We handle positioning in the parent to ensure it follows mouse
    // This component handles the styling and inner layout
  return (
    <div
      className={cn(
        "min-w-[8rem] overflow-hidden rounded-xl border border-zinc-200/60 bg-white/95 p-1.5 shadow-2xl ring-1 ring-black/5 backdrop-blur-xl focus:outline-none dark:border-zinc-800/80 dark:bg-zinc-950/95 dark:ring-white/5",
        "animate-in fade-in zoom-in-95 duration-200", 
        width,
        className
      )}
    >
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
}

export function ContextMenuItem({
  children,
  className = "",
  variant = "default",
  icon,
  shortcut,
  onClick,
  ...props
}: ContextMenuItemProps) {
  const { setIsOpen } = useContextMenu();

  const handleItemClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(false);
    if (onClick) onClick(e);
  };

  const variants = {
    default:
      "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800/80",
    destructive:
      "text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/20",
  };

  return (
    <button
      onClick={handleItemClick}
      className={cn(
        "group flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-sm transition-all duration-200 focus:outline-none",
        variants[variant],
        className
      )}
      {...props}
    >
      <span className="flex items-center gap-2.5">
        {icon && (
          <span className="h-4 w-4 shrink-0 opacity-60 transition-opacity group-hover:opacity-100">
            {icon}
          </span>
        )}
        <span className="font-medium opacity-90">{children}</span>
      </span>
      {shortcut && (
        <span className="ml-auto text-xs font-mono tracking-tighter text-zinc-400 opacity-60 group-hover:opacity-100 transition-opacity dark:text-zinc-500">
          {shortcut}
        </span>
      )}
    </button>
  );
}

// Re-export common sub-components that don't depend on context (or we can duplicate them if needed)
// Separator and Label are context-free usually
export function ContextMenuSeparator({ className = "" }: { className?: string }) {
  return <div className={cn("-mx-1 my-1 h-px bg-zinc-200/50 dark:bg-zinc-800/50", className)} />;
}

export function ContextMenuLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("px-2 py-1.5 text-xs font-medium text-zinc-500/80 dark:text-zinc-400/80", className)}>
      {children}
    </div>
  );
}
