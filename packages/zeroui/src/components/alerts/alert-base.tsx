"use client";

import React from "react";
import { Info, CheckCircle2, AlertTriangle, XCircle, X } from "lucide-react";

type AlertType = "info" | "success" | "warning" | "error";

interface AlertBaseProps {
  type?: AlertType;
  title: string;
  description?: string;
  onClose?: () => void;
  className?: string;
}

export default function AlertBase({
  type = "info",
  title,
  description,
  onClose,
  className = "",
}: AlertBaseProps) {
  const styles = {
    info: {
      container: "bg-blue-50 text-blue-900 border-blue-200 dark:bg-blue-950/30 dark:text-blue-100 dark:border-blue-900/50",
      icon: <Info className="text-blue-500" size={20} />,
    },
    success: {
      container: "bg-green-50 text-green-900 border-green-200 dark:bg-green-950/30 dark:text-green-100 dark:border-green-900/50",
      icon: <CheckCircle2 className="text-green-500" size={20} />,
    },
    warning: {
      container: "bg-amber-50 text-amber-900 border-amber-200 dark:bg-amber-950/30 dark:text-amber-100 dark:border-amber-900/50",
      icon: <AlertTriangle className="text-amber-500" size={20} />,
    },
    error: {
      container: "bg-red-50 text-red-900 border-red-200 dark:bg-red-950/30 dark:text-red-100 dark:border-red-900/50",
      icon: <XCircle className="text-red-500" size={20} />,
    },
  };

  const style = styles[type];

  return (
    <div
      className={`relative w-full max-w-md p-4 rounded-lg border flex gap-3 ${style.container} ${className}`}
      role="alert"
    >
      <div className="flex-shrink-0 mt-0.5">{style.icon}</div>
      <div className="flex-1">
        <h4 className="font-semibold text-sm leading-none mb-1 mt-0.5">{title}</h4>
        {description && <p className="text-sm opacity-90">{description}</p>}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="flex-shrink-0 ml-2 -mt-1 -mr-1 p-1.5 opacity-70 hover:opacity-100 rounded-md transition-opacity"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
