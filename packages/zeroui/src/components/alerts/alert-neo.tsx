"use client";

import React from "react";
import { Info, Check, AlertOctagon, X } from "lucide-react";

type AlertType = "info" | "success" | "warning" | "error";

interface AlertNeoProps {
  type?: AlertType;
  title: string;
  description?: string;
  onClose?: () => void;
  className?: string;
}

export default function AlertNeo({
  type = "info",
  title,
  description,
  onClose,
  className = "",
}: AlertNeoProps) {
  const styles = {
    info: {
      bg: "bg-blue-400",
      icon: <Info className="text-black" size={24} strokeWidth={3} />,
    },
    success: {
      bg: "bg-green-400",
      icon: <Check className="text-black" size={24} strokeWidth={3} />,
    },
    warning: {
      bg: "bg-yellow-400",
      icon: <AlertOctagon className="text-black" size={24} strokeWidth={3} />,
    },
    error: {
      bg: "bg-red-400",
      icon: <AlertOctagon className="text-black" size={24} strokeWidth={3} />,
    },
  };

  const style = styles[type];

  return (
    <div
      className={`relative w-full max-w-md flex border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${className}`}
      role="alert"
    >
      {/* Icon Sidebar */}
      <div className={`flex items-center justify-center w-14 border-r-2 border-black ${style.bg}`}>
        {style.icon}
      </div>

      {/* Content */}
      <div className="flex-1 p-4">
        <div className="flex justify-between items-start gap-2">
          <div>
            <h4 className="font-black text-lg uppercase leading-none mb-1 text-black">{title}</h4>
            {description && <p className="font-bold text-sm text-zinc-600">{description}</p>}
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1 border-2 border-transparent hover:border-black hover:bg-black hover:text-white transition-all rounded-none"
            >
              <X size={20} strokeWidth={3} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
