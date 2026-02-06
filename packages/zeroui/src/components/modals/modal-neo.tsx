"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

interface ModalNeoProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  color?: string; // hex or tailwind class for border/shadow
  className?: string;
}

export default function ModalNeo({
  isOpen,
  onClose,
  title,
  children,
  color = "#facc15", // Default yellow-400
  className = "",
}: ModalNeoProps) {
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

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-bold">
      {/* Dimmed Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isAnimating ? "opacity-100" : "opacity-0"
          }`}
        onClick={onClose}
      />

      {/* Neo Pop Content */}
      <div
        className={`relative w-full max-w-lg bg-white border-4 border-black 
          transform transition-all duration-300 cubic-bezier(0.34, 1.56, 0.64, 1) ${isAnimating ? "scale-100 opacity-100 translate-y-0" : "scale-50 opacity-0 translate-y-12"
          } ${className}`}
        style={{
          boxShadow: isAnimating ? `8px 8px 0px 0px ${color}` : `0px 0px 0px 0px ${color}`
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b-4 border-black bg-white">
          <h3 className="text-2xl font-black uppercase tracking-tighter text-black transform -skew-x-6">
            {title || "ATTENTION!"}
          </h3>
          <button
            onClick={onClose}
            className="p-1 border-2 border-black hover:bg-black hover:text-white transition-colors"
          >
            <X size={24} strokeWidth={3} />
          </button>
        </div>

        {/* Body */}
        <div className="p-8 text-black">
          {children}
        </div>
      </div>
    </div>
  );
}
