"use client";

import React, { useEffect, useState } from "react";
import { X, Leaf } from "lucide-react";

interface ModalNatureProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function ModalNature({
  isOpen,
  onClose,
  title,
  children,
  className = "",
}: ModalNatureProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      requestAnimationFrame(() => setIsAnimating(true));
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setIsVisible(false), 500); // Slower exit
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Soft Backdrop */}
      <div
        className={`absolute inset-0 bg-stone-100/60 dark:bg-stone-900/60 backdrop-blur-sm transition-opacity duration-700 ease-in-out ${isAnimating ? "opacity-100" : "opacity-0"
          }`}
        onClick={onClose}
      />

      {/* Organic Content */}
      <div
        className={`relative w-full max-w-lg bg-[#fcfaf8] dark:bg-[#1c1917] 
          rounded-[32px] border border-stone-200/50 dark:border-stone-800/50
          shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] 
          transform transition-all duration-700 cubic-bezier(0.2, 0.8, 0.2, 1) ${isAnimating ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
          } ${className}`}
      >
        {/* Decorative Leaf */}
        <div className={`absolute -top-6 left-8 text-green-600/20 dark:text-green-400/20 transform transition-all duration-1000 delay-300 ${isAnimating ? "translate-y-0 rotate-0 opacity-100" : "translate-y-4 -rotate-12 opacity-0"
          }`}>
          <Leaf size={64} strokeWidth={1.5} />
        </div>

        {/* Header */}
        <div className="relative flex items-center justify-between px-8 pt-8 pb-4">
          <h3 className="text-xl font-serif text-stone-800 dark:text-stone-100">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all duration-300"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="px-8 pb-8 text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
          {children}
        </div>
      </div>
    </div>
  );
}
