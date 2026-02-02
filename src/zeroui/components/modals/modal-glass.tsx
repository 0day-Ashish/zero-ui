"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

interface ModalGlassProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function ModalGlass({
  isOpen,
  onClose,
  title,
  children,
  className = "",
}: ModalGlassProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      requestAnimationFrame(() => setIsAnimating(true));
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Glass Backdrop */}
      <div
        className={`absolute inset-0 bg-white/5 dark:bg-black/40 backdrop-blur-md transition-all duration-500 ${isAnimating ? "opacity-100" : "opacity-0"
          }`}
        onClick={onClose}
      />

      {/* Glass Content */}
      <div
        className={`relative w-full max-w-lg overflow-hidden
          bg-white/40 dark:bg-black/40 
          backdrop-blur-2xl border border-white/20 dark:border-white/10 
          rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] 
          transform transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) ${isAnimating ? "scale-100 opacity-100 translate-y-0" : "scale-90 opacity-0 translate-y-12"
          } ${className}`}
      >
        {/* Shine effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <h3 className="text-xl font-medium text-zinc-900 dark:text-white/90 drop-shadow-sm">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-zinc-700 dark:text-white/80 transition-all active:scale-95"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 relative text-zinc-800 dark:text-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
}
