"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

// --- Types ---
interface DropdownProps {
  children: React.ReactNode;
  className?: string;
  trigger?: "click" | "hover";
}

interface DropdownTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean;
}

interface DropdownMenuProps {
  children: React.ReactNode;
  align?: "left" | "right" | "center";
  width?: string;
  className?: string;
  animation?: "default" | "bounce" | "staggered";
}

interface DropdownItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "destructive";
  icon?: React.ReactNode;
  shortcut?: string;
}

// --- Context ---
interface DropdownContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  trigger: "click" | "hover";
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

const DropdownContext = React.createContext<DropdownContextType | undefined>(undefined);

const useDropdown = () => {
  const context = React.useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdown must be used within a Dropdown component");
  }
  return context;
};

// --- Components ---

export function Dropdown({ children, className = "", trigger = "click" }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (trigger === "hover") {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === "hover") {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 150); // 150ms delay to prevent flickering when moving between trigger and menu
    }
  };

  // Handle outside click to close (keep existing behavior for click mode, and backup for hover)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen, trigger, handleMouseEnter, handleMouseLeave }}>
      <div
        ref={dropdownRef}
        className={`relative inline-block text-left ${className}`}
        onMouseLeave={handleMouseLeave} // Handle leaving both trigger and menu container
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

export function DropdownTrigger({ children, className = "", asChild = false, ...props }: DropdownTriggerProps) {
  const { isOpen, setIsOpen, trigger, handleMouseEnter } = useDropdown();

  const handleClick = (e: React.MouseEvent) => {
    if (trigger === "click") {
      setIsOpen(!isOpen);
    }
    if (props.onClick) props.onClick(e as any);
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      ...props,
      onClick: (e: React.MouseEvent) => {
        (children as React.ReactElement<any>).props.onClick?.(e);
        handleClick(e);
      },
      onMouseEnter: (e: React.MouseEvent) => {
        (children as React.ReactElement<any>).props.onMouseEnter?.(e);
        handleMouseEnter();
        props.onMouseEnter?.(e as any);
      },
      className: cn((children as React.ReactElement<any>).props.className, className),
      "aria-expanded": isOpen,
    });
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={(e) => {
        handleMouseEnter();
        props.onMouseEnter?.(e);
      }}
      className={cn("cursor-pointer inline-flex items-center justify-center transition-all duration-200 focus:outline-none", className)}
      aria-expanded={isOpen}
      {...props}
    >
      {children}
    </button>
  );
}

export function DropdownMenu({
  children,
  align = "left",
  width = "w-56",
  className = "",
  animation = "default",
}: DropdownMenuProps) {
  const { isOpen, handleMouseEnter } = useDropdown();

  if (!isOpen) return null;

  const alignments = {
    left: "left-0",
    right: "right-0",
    center: "left-1/2 -translate-x-1/2",
  };

  const animations = {
    default: "animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-200",
    bounce: "animate-dropdown-bounce",
    staggered: "animate-in fade-in zoom-in-95 duration-200", // Minimal container animation
  };

  const renderChildren = () => {
    if (animation !== "staggered") return children;

    return React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<any>, {
          className: cn((child as React.ReactElement<any>).props.className, "animate-menu-item-slide-in"),
          style: {
            ...(child as React.ReactElement<any>).props.style,
            animationDelay: `${index * 0.1}s`,
          },
        });
      }
      return child;
    });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter} // Keep open when hovering menu
      className={`absolute z-50 mt-2 ${width} origin-top-right rounded-2xl border border-zinc-200/60 bg-white/95 p-1.5 shadow-2xl ring-1 ring-black/5 backdrop-blur-xl focus:outline-none dark:border-zinc-800/80 dark:bg-zinc-950/95 dark:ring-white/5 ${alignments[align]} ${className} ${animations[animation]}`}
    >
      <div className="flex flex-col gap-1">{renderChildren()}</div>
    </div>
  );
}

export function DropdownItem({
  children,
  className = "",
  variant = "default",
  icon,
  shortcut,
  onClick,
  ...props
}: DropdownItemProps) {
  const { setIsOpen } = useDropdown();

  const handleItemClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(false);
    if (onClick) onClick(e);
  };

  const variants = {
    default:
      "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800",
    destructive:
      "text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/20",
  };

  return (
    <button
      onClick={handleItemClick}
      className={`group flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-sm transition-all duration-200 ${variants[variant]} ${className}`}
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
        <span className="ml-auto inline-flex items-center justify-center gap-1 text-xs font-medium font-mono tracking-widest text-zinc-500 dark:text-zinc-400">
          {shortcut}
        </span>
      )}
    </button>
  );
}

export function DropdownLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`px-2 py-1.5 text-xs font-medium text-zinc-500/80 dark:text-zinc-400/80 ${className}`}>
      {children}
    </div>
  );
}

export function DropdownSeparator({ className = "" }: { className?: string }) {
  return <div className={`-mx-1 my-1 h-px bg-zinc-200/50 dark:bg-zinc-800/50 ${className}`} />;
}

// --- Submenu Components ---

interface DropdownSubContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

const DropdownSubContext = React.createContext<DropdownSubContextType | undefined>(undefined);

const useDropdownSub = () => {
  const context = React.useContext(DropdownSubContext);
  if (!context) {
    throw new Error("useDropdownSub must be used within a DropdownSub component");
  }
  return context;
};

export function DropdownSub({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <DropdownSubContext.Provider value={{ isOpen, setIsOpen, handleMouseEnter, handleMouseLeave }}>
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    </DropdownSubContext.Provider>
  );
}

export function DropdownSubTrigger({ children, className = "", icon, ...props }: DropdownItemProps) {
  const { isOpen } = useDropdownSub();

  return (
    <button
      className={cn(
        "group flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-sm transition-all duration-200 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800",
        isOpen && "bg-zinc-100 dark:bg-zinc-800",
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
      <ChevronRight className="ml-auto h-4 w-4 opacity-50" />
    </button>
  );
}

export function DropdownSubContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { isOpen } = useDropdownSub();

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "absolute left-full top-0 ml-1 w-56 origin-top-left rounded-2xl border border-zinc-200/60 bg-white/95 p-1.5 shadow-2xl ring-1 ring-black/5 backdrop-blur-xl focus:outline-none dark:border-zinc-800/80 dark:bg-zinc-950/95 dark:ring-white/5",
        "animate-in fade-in zoom-in-95 slide-in-from-left-2 duration-200",
        className
      )}
    >
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
}
