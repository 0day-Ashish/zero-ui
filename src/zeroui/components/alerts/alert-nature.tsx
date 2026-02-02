"use client";

import React from "react";
import { Leaf, Sun, Droplets, X } from "lucide-react";

type AlertType = "info" | "success" | "warning";

interface AlertNatureProps {
  type?: AlertType;
  title: string;
  description?: string;
  onClose?: () => void;
  className?: string;
}

export default function AlertNature({
  type = "info",
  title,
  description,
  onClose,
  className = "",
}: AlertNatureProps) {
  const styles = {
    info: {
      bg: "bg-[#e7e5e4]/50",
      border: "border-[#d6d3d1]",
      icon: <Sun className="text-[#a8a29e]" size={20} strokeWidth={1.5} />,
      text: "text-[#57534e]",
    },
    success: {
      bg: "bg-[#ecfccb]/50",
      border: "border-[#d9f99d]",
      icon: <Leaf className="text-[#84cc16]" size={20} strokeWidth={1.5} />,
      text: "text-[#3f6212]",
    },
    warning: {
      bg: "bg-[#ffedd5]/50",
      border: "border-[#fed7aa]",
      icon: <Droplets className="text-[#fb923c]" size={20} strokeWidth={1.5} />,
      text: "text-[#9a3412]",
    },
  };

  const style = styles[type];

  return (
    <div
      className={`relative w-full max-w-md p-5 rounded-[24px] border backdrop-blur-sm flex gap-4 transition-all duration-500 hover:shadow-lg hover:-translate-y-0.5 ${style.bg} ${style.border} ${className}`}
      role="alert"
    >
      <div className="flex-shrink-0 mt-0.5 p-2 bg-white/60 rounded-full shadow-sm">
        {style.icon}
      </div>
      <div className={`flex-1 ${style.text}`}>
        <h4 className="font-serif text-lg leading-tight mb-1">{title}</h4>
        {description && <p className="text-sm opacity-80 font-sans leading-relaxed">{description}</p>}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className={`flex-shrink-0 -mt-1 -mr-1 p-2 rounded-full hover:bg-black/5 transition-colors ${style.text}`}
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
