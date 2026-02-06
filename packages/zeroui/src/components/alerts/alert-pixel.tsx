"use client";

import React from "react";
import { X, Gamepad2, Skull, Heart } from "lucide-react";

type AlertType = "info" | "success" | "warning" | "error";

interface AlertPixelProps {
  type?: AlertType;
  title: string;
  description?: string;
  onClose?: () => void;
  className?: string;
}

export default function AlertPixel({
  type = "info",
  title,
  description,
  onClose,
  className = "",
}: AlertPixelProps) {
  const styles = {
    info: {
      border: "border-blue-600",
      bg: "bg-blue-500",
      icon: <Gamepad2 size={20} className="text-blue-600" />,
      textColor: "text-blue-600",
    },
    success: {
      border: "border-green-600",
      bg: "bg-green-500",
      icon: <Heart size={20} className="text-green-600" />, // Heart often means health/good
      textColor: "text-green-600",
    },
    warning: {
      border: "border-yellow-600",
      bg: "bg-yellow-500",
      icon: <Skull size={20} className="text-yellow-600" />, // Danger
      textColor: "text-yellow-600",
    },
    error: {
      border: "border-red-600",
      bg: "bg-red-500",
      icon: <Skull size={20} className="text-red-600" />,
      textColor: "text-red-600",
    },
  };

  const style = styles[type];

  return (
    <div className={`relative inline-block w-full max-w-md ${className}`}>
      {/* Pixel shadow/border effect made with divs to avoid image dependency */}
      <div style={{ transform: 'translate(4px, 4px)' }} className={`absolute inset-0 bg-black opacity-20`}></div>

      <div
        className={`relative bg-white border-4 border-black p-4 font-mono tracking-tighter`}
        style={{
          imageRendering: 'pixelated',
          boxShadow: `
                    -4px 0 0 0 black,
                    4px 0 0 0 black,
                    0 -4px 0 0 black,
                    0 4px 0 0 black
                `,
          margin: '4px' // Compensation for the shadow expansion
        }}
      >
        <div className="flex gap-4 items-start">
          {/* 8-bit Icon Container */}
          <div className={`w-10 h-10 border-2 border-black flex items-center justify-center bg-gray-100`}>
            {style.icon}
          </div>

          <div className="flex-1">
            <h4 className={`font-black uppercase text-sm mb-1 ${style.textColor}`}>
              {title}
            </h4>
            {description && (
              <p className="text-xs font-bold leading-tight text-zinc-600">
                {description}
              </p>
            )}
          </div>

          {onClose && (
            <button
              onClick={onClose}
              className="border-2 border-black p-1 hover:bg-black hover:text-white transition-colors"
            >
              <X size={14} strokeWidth={3} />
            </button>
          )}
        </div>

        {/* Corner Decor */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-white"></div>
        <div className="absolute top-0 right-0 w-2 h-2 bg-white"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-white"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-white"></div>
      </div>
    </div>
  );
}
