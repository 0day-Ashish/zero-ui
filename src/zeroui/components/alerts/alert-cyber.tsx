"use client";

import React from "react";
import { Terminal, ShieldAlert, Cpu, Zap, X } from "lucide-react";

type AlertType = "info" | "success" | "warning" | "error";

interface AlertCyberProps {
  type?: AlertType;
  title: string;
  description?: string;
  onClose?: () => void;
  className?: string;
}

export default function AlertCyber({
  type = "info",
  title,
  description,
  onClose,
  className = "",
}: AlertCyberProps) {
  const styles = {
    info: {
      color: "cyan",
      hex: "#06b6d4",
      icon: <Terminal className="text-cyan-400" size={18} />,
    },
    success: {
      color: "emerald",
      hex: "#10b981",
      icon: <Cpu className="text-emerald-400" size={18} />,
    },
    warning: {
      color: "amber",
      hex: "#f59e0b",
      icon: <Zap className="text-amber-400" size={18} />,
    },
    error: {
      color: "red",
      hex: "#ef4444",
      icon: <ShieldAlert className="text-red-400" size={18} />,
    },
  };

  const style = styles[type];
  const accentColor = style.hex;

  // Custom style for border image or shadow
  const containerStyle = {
    borderColor: accentColor,
    boxShadow: `0 0 10px ${accentColor}33, inset 0 0 10px ${accentColor}11`,
  };

  return (
    <div
      className={`relative w-full max-w-md overflow-hidden bg-black/90 border-l-4 text-white font-mono ${className}`}
      style={containerStyle}
      role="alert"
    >
      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'linear-gradient(transparent 50%, rgba(255, 255, 255, 0.5) 50%)',
          backgroundSize: '100% 2px'
        }}
      />

      <div className="relative flex p-4 gap-3 z-10">
        <div className="flex-shrink-0 mt-0.5 animate-pulse">
          {style.icon}
        </div>
        <div className="flex-1">
          <h4
            className="font-bold text-sm leading-none mb-1 mt-0.5 tracking-wider uppercase"
            style={{ color: accentColor, textShadow: `0 0 5px ${accentColor}` }}
          >
            {title}
          </h4>
          {description && (
            <div className="text-xs opacity-80 leading-relaxed text-zinc-300">
              <span className="mr-2">&gt;</span>{description}
            </div>
          )}
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="flex-shrink-0 ml-2 -mt-1 -mr-1 p-1 hover:bg-white/10 transition-colors h-fit"
            style={{ color: accentColor }}
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Cyber Corner */}
      <div
        className="absolute bottom-0 right-0 w-3 h-3 border-t border-l bg-black z-20"
        style={{ borderColor: accentColor }}
      />
    </div>
  );
}
