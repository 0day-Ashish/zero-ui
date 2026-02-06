"use client";

import React, { useEffect, useState } from "react";
import { X, Aperture } from "lucide-react";

interface ModalHologramProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function ModalHologram({
  isOpen,
  onClose,
  title,
  children,
  className = "",
}: ModalHologramProps) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark Void Backdrop */}
      <div
        className={`absolute inset-0 bg-black/95 transition-opacity duration-300 ${isAnimating ? "opacity-100" : "opacity-0"
          }`}
        onClick={onClose}
      />

      {/* Hologram Container */}
      <div className={`relative perspective-1000 ${className}`}>
        {/* Light Beam (Bottom) */}
        <div className={`absolute bottom-full left-1/2 -translate-x-1/2 w-32 h-64 bg-cyan-500/20 blur-3xl transform origin-bottom transition-all duration-500 ${isAnimating ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          }`} />

        {/* Content Box */}
        <div
          className={`relative w-[500px] max-w-full bg-cyan-950/30 border border-cyan-500/30 
            text-cyan-400 font-mono shadow-[0_0_30px_rgba(6,182,212,0.15)]
            overflow-hidden transform transition-all duration-300 ease-out ${isAnimating
              ? "translate-y-0 scale-100 opacity-100 rotate-x-0"
              : "translate-y-12 scale-90 opacity-0 rotate-x-12"
            }`}
          style={{ backdropFilter: 'blur(4px)' }}
        >
          {/* Scanlines */}
          <div className="absolute inset-0 pointer-events-none z-0"
            style={{
              backgroundImage: 'linear-gradient(transparent 50%, rgba(6, 182, 212, 0.05) 50%)',
              backgroundSize: '100% 4px'
            }}
          />
          {/* Flicker overlay */}
          <div className="absolute inset-0 bg-cyan-400/5 mix-blend-overlay animate-pulse pointer-events-none z-10" />

          {/* Header */}
          <div className="relative z-20 flex items-center justify-between px-6 py-3 border-b border-cyan-500/30 bg-cyan-900/20">
            <div className="flex items-center gap-2">
              <Aperture size={16} className="animate-spin-slow text-cyan-500" />
              <span className="text-xs uppercase tracking-[0.2em] text-cyan-300">{title || "HOLOGRAM_V1"}</span>
            </div>
            <button
              onClick={onClose}
              className="text-cyan-600 hover:text-cyan-300 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="relative z-20 p-6">
            {children}
          </div>

          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-400" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400" />
        </div>
      </div>
    </div>
  );
}
