"use client";

import React, { useState, useRef, useEffect } from "react";

// Types
type Separator = "slash" | "chevron" | "arrow" | "dot" | "custom";
type Variant = "default" | "muted" | "colored";
type Size = "sm" | "md" | "lg";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

interface BreadcrumbCollapsibleProps {
  items: BreadcrumbItem[];
  separator?: Separator;
  customSeparator?: React.ReactNode;
  variant?: Variant;
  size?: Size;
  maxVisible?: number;
  className?: string;
  onItemClick?: (item: BreadcrumbItem, index: number) => void;
}

// Separator components
const separators: Record<Exclude<Separator, "custom">, React.ReactNode> = {
  slash: <span className="mx-2">/</span>,
  chevron: (
    <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  ),
  arrow: (
    <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  ),
  dot: <span className="mx-2">•</span>,
};

// Size configurations
const sizes: Record<Size, { text: string; dropdown: string; button: string }> = {
  sm: { text: "text-xs", dropdown: "text-sm py-1.5 px-3", button: "w-6 h-6" },
  md: { text: "text-sm", dropdown: "text-sm py-2 px-4", button: "w-8 h-8" },
  lg: { text: "text-base", dropdown: "text-base py-2.5 px-5", button: "w-9 h-9" },
};

// Variant styles
const variantStyles: Record<Variant, { base: string; active: string; hover: string }> = {
  default: {
    base: "text-zinc-500 dark:text-zinc-400",
    active: "text-zinc-900 dark:text-white font-medium",
    hover: "hover:text-zinc-700 dark:hover:text-zinc-200",
  },
  muted: {
    base: "text-zinc-400 dark:text-zinc-500",
    active: "text-zinc-600 dark:text-zinc-300",
    hover: "hover:text-zinc-500 dark:hover:text-zinc-400",
  },
  colored: {
    base: "text-blue-500 dark:text-blue-400",
    active: "text-blue-700 dark:text-blue-300 font-medium",
    hover: "hover:text-blue-600 dark:hover:text-blue-300 hover:underline",
  },
};

export default function BreadcrumbCollapsible({
  items,
  separator = "chevron",
  customSeparator,
  variant = "default",
  size = "md",
  maxVisible = 3,
  className = "",
  onItemClick,
}: BreadcrumbCollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const styles = variantStyles[variant];
  const sizeConfig = sizes[size];
  const separatorElement = separator === "custom" ? customSeparator : separators[separator];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Split items into visible and collapsed
  const shouldCollapse = items.length > maxVisible;
  const firstItem = items[0];
  const lastItems = shouldCollapse ? items.slice(-(maxVisible - 1)) : items.slice(1);
  const collapsedItems = shouldCollapse ? items.slice(1, -(maxVisible - 1)) : [];

  const handleClick = (item: BreadcrumbItem, index: number, e: React.MouseEvent) => {
    if (onItemClick) {
      e.preventDefault();
      onItemClick(item, index);
    }
    setIsOpen(false);
  };

  const renderItem = (item: BreadcrumbItem, index: number, isLast: boolean) => {
    if (item.href && !isLast) {
      return (
        <a
          href={item.href}
          onClick={(e) => handleClick(item, index, e)}
          className={`flex items-center gap-1.5 transition-colors ${styles.base} ${styles.hover}`}
        >
          {item.icon}
          {item.label}
        </a>
      );
    }
    return (
      <span className={`flex items-center gap-1.5 ${isLast ? styles.active : styles.base}`}>
        {item.icon}
        {item.label}
      </span>
    );
  };

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center ${sizeConfig.text} ${className}`}>
      <ol className="flex items-center flex-wrap">
        {/* First item */}
        <li className="flex items-center">
          {renderItem(firstItem, 0, items.length === 1)}
          {items.length > 1 && (
            <span className={`${styles.base} flex items-center`}>{separatorElement}</span>
          )}
        </li>

        {/* Collapsed items with dropdown */}
        {shouldCollapse && collapsedItems.length > 0 && (
          <li className="flex items-center relative">
            <button
              ref={buttonRef}
              onClick={() => setIsOpen(!isOpen)}
              className={`${sizeConfig.button} flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors ${styles.base}`}
              aria-expanded={isOpen}
              aria-haspopup="true"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="6" cy="12" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="18" cy="12" r="2" />
              </svg>
            </button>

            {/* Dropdown menu */}
            {isOpen && (
              <div
                ref={dropdownRef}
                className="absolute top-full left-0 mt-2 min-w-[160px] bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-700 py-2 z-50"
              >
                {collapsedItems.map((item, idx) => {
                  const originalIndex = idx + 1;
                  return (
                    <div key={originalIndex}>
                      {item.href ? (
                        <a
                          href={item.href}
                          onClick={(e) => handleClick(item, originalIndex, e)}
                          className={`block ${sizeConfig.dropdown} text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors`}
                        >
                          <span className="flex items-center gap-2">
                            {item.icon}
                            {item.label}
                          </span>
                        </a>
                      ) : (
                        <span
                          className={`block ${sizeConfig.dropdown} text-zinc-700 dark:text-zinc-300 cursor-default`}
                        >
                          <span className="flex items-center gap-2">
                            {item.icon}
                            {item.label}
                          </span>
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            <span className={`${styles.base} flex items-center`}>{separatorElement}</span>
          </li>
        )}

        {/* Remaining visible items */}
        {lastItems.map((item, idx) => {
          const isLast = idx === lastItems.length - 1;
          const originalIndex = shouldCollapse ? items.length - lastItems.length + idx : idx + 1;

          return (
            <li key={originalIndex} className="flex items-center">
              {renderItem(item, originalIndex, isLast)}
              {!isLast && (
                <span className={`${styles.base} flex items-center`}>{separatorElement}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
