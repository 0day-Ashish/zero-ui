"use client";

import React, { useEffect, useState } from "react";
import { X, Hexagon } from "lucide-react";

interface ModalCyberProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  accentColor?: string; // hex
  className?: string;
}

export default function ModalCyber({
  isOpen,
  onClose,
  title,
  children,
  accentColor = "#06b6d4", // Cyan
  className = "",
}: ModalCyberProps) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-mono">
      {/* Grid Backdrop */}
      <div
        className={`absolute inset-0 bg-zinc-950/90 transition-opacity duration-300 ${isAnimating ? "opacity-100" : "opacity-0"
          }`}
        onClick={onClose}
        style={{
          backgroundImage: `radial-gradient(${accentColor}33 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />

      {/* Cyber Content */}
      <div
        className={`relative w-full max-w-lg bg-zinc-950 border-2 
          transform transition-all duration-300 ease-out clip-path-cyber ${isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
          } ${className}`}
        style={{
          borderColor: accentColor,
          boxShadow: `0 0 20px ${accentColor}44, inset 0 0 20px ${accentColor}22`
        }}
      >
        {/* Decor: Corners */}
        <div className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-2 border-l-2" style={{ borderColor: accentColor }} />
        <div className="absolute -top-[2px] -right-[2px] w-4 h-4 border-t-2 border-r-2" style={{ borderColor: accentColor }} />
        <div className="absolute -bottom-[2px] -left-[2px] w-4 h-4 border-b-2 border-l-2" style={{ borderColor: accentColor }} />
        <div className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-2 border-r-2" style={{ borderColor: accentColor }} />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-dashed" style={{ borderColor: `${accentColor}44` }}>
          <div className="flex items-center gap-2">
            <Hexagon size={16} className="animate-spin-slow" style={{ color: accentColor }} />
            <h3 className="text-lg font-bold uppercase tracking-widest text-white">
              {title || "SYSTEM_ALERT"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="hover:rotate-90 transition-transform duration-300 text-white hover:text-red-500"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 relative">
          <div className="absolute top-0 left-0 w-full h-[1px]" style={{
            background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
            opacity: 0.5
          }} />
          <div className="text-zinc-300">
            {children}
          </div>
        </div>

        {/* Footer/Status Bar */}
        <div className="px-6 py-2 bg-zinc-900 border-t flex justify-between items-center text-[10px] uppercase text-zinc-500 tracking-wider" style={{ borderColor: `${accentColor}44` }}>
          <span>Status: ONLINE</span>
          <span>ID: {Math.random().toString(36).substr(2, 6).toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
}
