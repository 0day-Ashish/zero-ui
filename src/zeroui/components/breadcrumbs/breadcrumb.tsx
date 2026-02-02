"use client";

import React from "react";

// Types
type Separator = "slash" | "chevron" | "arrow" | "dot" | "custom";
type Variant = "default" | "muted" | "colored" | "underline";
type Size = "sm" | "md" | "lg";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: Separator;
  customSeparator?: React.ReactNode;
  variant?: Variant;
  size?: Size;
  color?: string;
  maxItems?: number;
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
const sizes: Record<Size, string> = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
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
  underline: {
    base: "text-zinc-500 dark:text-zinc-400 underline underline-offset-2",
    active: "text-zinc-900 dark:text-white font-medium no-underline",
    hover: "hover:text-zinc-700 dark:hover:text-zinc-200",
  },
};

export default function Breadcrumb({
  items,
  separator = "slash",
  customSeparator,
  variant = "default",
  size = "md",
  color,
  maxItems,
  className = "",
  onItemClick,
}: BreadcrumbProps) {
  const styles = variantStyles[variant];
  const separatorElement = separator === "custom" ? customSeparator : separators[separator];

  // Handle max items with ellipsis
  const displayItems = React.useMemo(() => {
    if (!maxItems || items.length <= maxItems) return items;

    const firstItem = items[0];
    const lastItems = items.slice(-(maxItems - 1));
    return [firstItem, { label: "...", href: undefined }, ...lastItems];
  }, [items, maxItems]);

  const handleClick = (item: BreadcrumbItem, index: number, e: React.MouseEvent) => {
    if (onItemClick) {
      e.preventDefault();
      onItemClick(item, index);
    }
  };

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center ${sizes[size]} ${className}`}>
      <ol className="flex items-center flex-wrap">
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1;
          const isEllipsis = item.label === "...";

          return (
            <li key={index} className="flex items-center">
              {item.href && !isLast && !isEllipsis ? (
                <a
                  href={item.href}
                  onClick={(e) => handleClick(item, index, e)}
                  className={`flex items-center gap-1.5 transition-colors ${styles.base} ${styles.hover}`}
                  style={color && variant === "colored" ? { color } : undefined}
                >
                  {item.icon}
                  {item.label}
                </a>
              ) : (
                <span
                  className={`flex items-center gap-1.5 ${isLast ? styles.active : styles.base} ${isEllipsis ? "cursor-default" : ""}`}
                  style={color && variant === "colored" && isLast ? { color } : undefined}
                >
                  {item.icon}
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span className={`${styles.base} flex items-center`}>
                  {separatorElement}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
