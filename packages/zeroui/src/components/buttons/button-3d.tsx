"use client";

import React from "react";

interface Button3DProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "inverse" | "outline";
  children: React.ReactNode;
}

export default function Button3D({
  variant = "default",
  children,
  className = "",
  ...props
}: Button3DProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center px-6 py-3 font-bold transition-all duration-75 ease-in-out border-2 focus:outline-none active:scale-95";

  const variants = {
    default: "bg-white text-black border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]",
    inverse: "bg-black text-white border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]",
    outline: "bg-transparent text-black dark:text-white border-current shadow-[4px_4px_0px_0px_currentColor] hover:shadow-[2px_2px_0px_0px_currentColor] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
