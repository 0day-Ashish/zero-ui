"use client";

import React from "react";
import { Sparkles, X } from "lucide-react";

interface AlertGradientProps {
  title: string;
  description?: string;
  onClose?: () => void;
  className?: string;
}

export default function AlertGradient({
  title,
  description,
  onClose,
  className = "",
}: AlertGradientProps) {
  return (
    <div
      className={`relative w-full max-w-md p-[2px] rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-gradient-xy ${className}`}
      role="alert"
    >
      <div className="bg-white dark:bg-zinc-950 rounded-[10px] p-4 h-full relative overflow-hidden">
        {/* Subtle mesh background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,0,128,0.2),transparent_50%)]" />

        <div className="relative flex gap-3 z-10 items-start">
          <div className="p-1.5 bg-gradient-to-br from-pink-500 to-orange-400 rounded-lg shadow-lg text-white">
            <Sparkles size={16} className="animate-pulse" />
          </div>

          <div className="flex-1">
            <h4 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-600 dark:from-pink-400 dark:to-orange-400 text-sm mb-1">
              {title}
            </h4>
            {description && (
              <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">
                {description}
              </p>
            )}
          </div>

          {onClose && (
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
