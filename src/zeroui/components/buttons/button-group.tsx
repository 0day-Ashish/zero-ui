"use client";

import React from "react";

interface ButtonGroupProps {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  orientation?: "horizontal" | "vertical";
  children: React.ReactNode;
  className?: string;
}

interface ButtonGroupItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  children: React.ReactNode;
}

function ButtonGroupItem({
  isActive = false,
  children,
  className = "",
  ...props
}: ButtonGroupItemProps) {
  return (
    <button
      className={`group-item ${isActive ? "active" : ""} ${className}`}
      data-active={isActive}
      {...props}
    >
      {children}
    </button>
  );
}

export default function ButtonGroup({
  variant = "default",
  size = "md",
  orientation = "horizontal",
  children,
  className = "",
}: ButtonGroupProps) {
  const baseStyles =
    "inline-flex rounded-2xl overflow-hidden";

  const orientations = {
    horizontal: "flex-row",
    vertical: "flex-col",
  };

  const variantStyles = {
    default: "bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700",
    outline: "border-2 border-zinc-300 dark:border-zinc-600",
    ghost: "",
  };

  const itemBaseStyles =
    "cursor-pointer inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const itemVariants = {
    default: `
      text-zinc-600 dark:text-zinc-400
      hover:bg-zinc-200 hover:text-zinc-900 dark:hover:bg-zinc-700 dark:hover:text-white
      data-[active=true]:bg-zinc-900 data-[active=true]:text-white dark:data-[active=true]:bg-white dark:data-[active=true]:text-zinc-900
    `,
    outline: `
      text-zinc-600 dark:text-zinc-400
      hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white
      data-[active=true]:bg-zinc-900 data-[active=true]:text-white dark:data-[active=true]:bg-white dark:data-[active=true]:text-zinc-900
    `,
    ghost: `
      text-zinc-600 dark:text-zinc-400
      hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white
      data-[active=true]:bg-zinc-100 data-[active=true]:text-zinc-900 dark:data-[active=true]:bg-zinc-800 dark:data-[active=true]:text-white
    `,
  };

  const itemSizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const dividerStyles = {
    horizontal: {
      default: "[&>.group-item:not(:last-child)]:border-r [&>.group-item:not(:last-child)]:border-zinc-200 dark:[&>.group-item:not(:last-child)]:border-zinc-700",
      outline: "[&>.group-item:not(:last-child)]:border-r-2 [&>.group-item:not(:last-child)]:border-zinc-300 dark:[&>.group-item:not(:last-child)]:border-zinc-600",
      ghost: "",
    },
    vertical: {
      default: "[&>.group-item:not(:last-child)]:border-b [&>.group-item:not(:last-child)]:border-zinc-200 dark:[&>.group-item:not(:last-child)]:border-zinc-700",
      outline: "[&>.group-item:not(:last-child)]:border-b-2 [&>.group-item:not(:last-child)]:border-zinc-300 dark:[&>.group-item:not(:last-child)]:border-zinc-600",
      ghost: "",
    },
  };

  // Clone children and inject styles
  const styledChildren = React.Children.map(children, (child) => {
    if (React.isValidElement<ButtonGroupItemProps>(child)) {
      const existingClassName = (child.props.className || "") as string;
      return React.cloneElement(child, {
        className: `${itemBaseStyles} ${itemVariants[variant]} ${itemSizes[size]} ${existingClassName}`.trim(),
      });
    }
    return child;
  });

  return (
    <div
      className={`${baseStyles} ${orientations[orientation]} ${variantStyles[variant]} ${dividerStyles[orientation][variant]} ${className}`}
    >
      {styledChildren}
    </div>
  );
}

ButtonGroup.Item = ButtonGroupItem;
