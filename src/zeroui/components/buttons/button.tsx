"use client";

import React from "react";

interface ButtonBasicProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "destructive" | "link" | "secondary";
  size?: "sm" | "md" | "lg" | "icon";
  children: React.ReactNode;
}

export default function Button({
  variant = "default",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonBasicProps) {
  const baseStyles =
    "cursor-pointer active:scale-95 inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default:
      "bg-zinc-900 text-white hover:bg-zinc-800 focus:ring-zinc-900 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 dark:focus:ring-white",
    secondary:
      "bg-zinc-100 text-zinc-900 border border-zinc-200 hover:bg-zinc-200 focus:ring-zinc-500 dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-700",
    outline:
      "border-1 border-zinc-900/20 text-zinc-900 hover:bg-zinc-100 focus:ring-zinc-900 dark:border-white dark:text-white dark:hover:bg-zinc-800 dark:focus:ring-white",
    ghost:
      "text-zinc-900 hover:bg-zinc-100 focus:ring-zinc-500 dark:text-white dark:hover:bg-zinc-800",
    destructive:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600",
    link:
      "text-zinc-900 underline underline-offset-4 hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300 focus:ring-zinc-500",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2 text-sm",
    lg: "px-10 py-2 text-base",
    icon: "h-9 w-9 p-0 text-sm",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
