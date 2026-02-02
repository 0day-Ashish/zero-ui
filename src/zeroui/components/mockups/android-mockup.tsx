"use client";

import React from "react";

type AndroidModel = "samsung-s24" | "samsung-s24-ultra" | "pixel-8" | "pixel-8-pro";
type ColorVariant = "silver" | "black" | "cream" | "violet";

interface AndroidMockupProps {
  children?: React.ReactNode;
  model?: AndroidModel;
  color?: ColorVariant;
  className?: string;
  screenClassName?: string;
  scale?: number;
}

export default function AndroidMockup({
  children,
  model = "samsung-s24-ultra",
  color = "silver",
  className = "",
  screenClassName = "",
  scale = 1,
}: AndroidMockupProps) {
  const width = 280 * scale;
  const height = 600 * scale;
  const borderRadius = model.includes("ultra") ? 12 * scale : 40 * scale;
  const bezelWidth = 6 * scale;

  const frameColors = {
    silver: {
      frame: "linear-gradient(145deg, #e8e8e8 0%, #c0c0c0 50%, #a8a8a8 100%)",
      bezel: "#d0d0d0",
      accent: "rgba(255,255,255,0.6)",
    },
    black: {
      frame: "linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 50%, #0a0a0a 100%)",
      bezel: "#0d0d0d",
      accent: "rgba(255,255,255,0.1)",
    },
    cream: {
      frame: "linear-gradient(145deg, #f5f0e8 0%, #e8e0d4 50%, #d8d0c4 100%)",
      bezel: "#e0d8cc",
      accent: "rgba(255,255,255,0.5)",
    },
    violet: {
      frame: "linear-gradient(145deg, #d8d0e8 0%, #c0b8d8 50%, #a8a0c8 100%)",
      bezel: "#b8b0d0",
      accent: "rgba(255,255,255,0.4)",
    },
  };

  const colors = frameColors[color];

  return (
    <div
      className={`relative ${className}`}
      style={{ width, height }}
    >
      {/* Drop shadow */}
      <div
        className="absolute inset-0"
        style={{
          borderRadius,
          boxShadow: `0 ${25 * scale}px ${50 * scale}px rgba(0,0,0,0.25), 0 ${10 * scale}px ${20 * scale}px rgba(0,0,0,0.15)`,
        }}
      />

      {/* Outer frame */}
      <div
        className="absolute inset-0"
        style={{
          borderRadius,
          background: colors.frame,
        }}
      >
        {/* Frame highlights */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius,
            boxShadow: `inset 0 ${1 * scale}px 0 ${colors.accent}, inset 0 -${1 * scale}px 0 rgba(0,0,0,0.15)`,
          }}
        />

        {/* Side buttons - right */}
        {/* Power */}
        <div
          style={{
            position: "absolute",
            right: -2 * scale,
            top: 160 * scale,
            width: 3 * scale,
            height: 50 * scale,
            background: color === "silver" ? "#b0b0b0" : color === "black" ? "#1a1a1a" : "#c8c0b8",
            borderRadius: `0 ${2 * scale}px ${2 * scale}px 0`,
            boxShadow: `${1 * scale}px 0 ${2 * scale}px rgba(0,0,0,0.3)`,
          }}
        />

        {/* Volume buttons - left */}
        <div
          style={{
            position: "absolute",
            left: -2 * scale,
            top: 130 * scale,
            width: 3 * scale,
            height: 40 * scale,
            background: color === "silver" ? "#b0b0b0" : color === "black" ? "#1a1a1a" : "#c8c0b8",
            borderRadius: `${2 * scale}px 0 0 ${2 * scale}px`,
            boxShadow: `-${1 * scale}px 0 ${2 * scale}px rgba(0,0,0,0.3)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -2 * scale,
            top: 180 * scale,
            width: 3 * scale,
            height: 40 * scale,
            background: color === "silver" ? "#b0b0b0" : color === "black" ? "#1a1a1a" : "#c8c0b8",
            borderRadius: `${2 * scale}px 0 0 ${2 * scale}px`,
            boxShadow: `-${1 * scale}px 0 ${2 * scale}px rgba(0,0,0,0.3)`,
          }}
        />

        {/* Inner bezel */}
        <div
          className="absolute"
          style={{
            inset: bezelWidth,
            borderRadius: borderRadius - bezelWidth,
            background: colors.bezel,
          }}
        >
          {/* Screen */}
          <div
            className={`absolute overflow-hidden ${screenClassName}`}
            style={{
              inset: 2 * scale,
              borderRadius: borderRadius - bezelWidth - 2 * scale,
              background: "#000",
            }}
          >
            {/* Punch-hole camera */}
            <div
              className="absolute left-1/2 -translate-x-1/2 z-20"
              style={{
                top: 14 * scale,
                width: 12 * scale,
                height: 12 * scale,
                background: "linear-gradient(135deg, #1a1a2e 0%, #0a0a15 100%)",
                borderRadius: "50%",
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.6)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 5 * scale,
                  height: 5 * scale,
                  background: "#1e3a5f",
                  borderRadius: "50%",
                }}
              />
            </div>

            {/* Screen content */}
            <div className="absolute inset-0">
              {children || (
                <div className="w-full h-full bg-white flex flex-col items-center justify-center">
                  <span className="text-zinc-400 text-lg font-light">Upload</span>
                  <span className="text-zinc-400 text-lg font-light">Image Here</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
