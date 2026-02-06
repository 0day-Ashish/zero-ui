"use client";

import React from "react";
import { Info, CheckCircle2, AlertTriangle, XCircle, X } from "lucide-react";

type AlertType = "info" | "success" | "warning" | "error";

interface AlertGlassProps {
  type?: AlertType;
  title: string;
  description?: string;
  onClose?: () => void;
  className?: string;
}

export default function AlertGlass({
  type = "info",
  title,
  description,
  onClose,
  className = "",
}: AlertGlassProps) {
  const styles = {
    info: {
      gradient: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-200/30",
      icon: <Info className="text-blue-500 dark:text-blue-400" size={20} />,
    },
    success: {
      gradient: "from-green-500/20 to-emerald-500/20",
      border: "border-green-200/30",
      icon: <CheckCircle2 className="text-green-500 dark:text-green-400" size={20} />,
    },
    warning: {
      gradient: "from-amber-500/20 to-orange-500/20",
      border: "border-amber-200/30",
      icon: <AlertTriangle className="text-amber-500 dark:text-amber-400" size={20} />,
    },
    error: {
      gradient: "from-red-500/20 to-pink-500/20",
      border: "border-red-200/30",
      icon: <XCircle className="text-red-500 dark:text-red-400" size={20} />,
    },
  };

  const style = styles[type];

  return (
    <div
      className={`relative w-full max-w-md p-4 rounded-xl border backdrop-blur-md bg-gradient-to-br ${style.gradient} ${style.border} shadow-lg text-zinc-800 dark:text-white ${className}`}
      role="alert"
    >
      <div className="absolute inset-0 rounded-xl bg-white/40 dark:bg-black/20 pointer-events-none" />

      <div className="relative flex gap-3 z-10">
        <div className="flex-shrink-0 mt-0.5 drop-shadow-sm">{style.icon}</div>
        <div className="flex-1">
          <h4 className="font-semibold text-sm leading-none mb-1 mt-0.5 drop-shadow-sm">{title}</h4>
          {description && <p className="text-sm opacity-90 font-medium">{description}</p>}
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="flex-shrink-0 ml-2 -mt-1 -mr-1 p-1.5 opacity-60 hover:opacity-100 hover:bg-white/20 rounded-lg transition-all"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
