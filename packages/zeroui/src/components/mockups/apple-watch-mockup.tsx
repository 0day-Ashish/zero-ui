"use client";

import React from "react";

type WatchModel = "ultra" | "series-9" | "se";
type WatchSize = "41mm" | "45mm" | "49mm";
type ColorVariant = "midnight" | "starlight" | "silver" | "graphite" | "gold" | "titanium";
type BandColor = "black" | "storm-blue" | "white" | "pink" | "green" | "orange" | "blue" | "red";

interface AppleWatchMockupProps {
  children?: React.ReactNode;
  model?: WatchModel;
  size?: WatchSize;
  color?: ColorVariant;
  bandColor?: BandColor;
  className?: string;
  screenClassName?: string;
  scale?: number;
}

export default function AppleWatchMockup({
  children,
  model = "series-9",
  size = "45mm",
  color = "graphite",
  bandColor = "storm-blue",
  className = "",
  screenClassName = "",
  scale = 1,
}: AppleWatchMockupProps) {
  const caseWidth = 150 * scale;
  const caseHeight = 180 * scale;
  const cornerRadius = 36 * scale;
  const bandWidth = caseWidth * 0.7;
  const bandHeight = 70 * scale;

  const caseColors = {
    midnight: {
      case: "linear-gradient(145deg, #2a2a35 0%, #1a1a22 100%)",
      bezel: "#0a0a0f",
      accent: "rgba(255,255,255,0.08)",
    },
    starlight: {
      case: "linear-gradient(145deg, #f5f0e8 0%, #e0d8cc 100%)",
      bezel: "#c8c0b4",
      accent: "rgba(255,255,255,0.5)",
    },
    silver: {
      case: "linear-gradient(145deg, #d8d8d8 0%, #a8a8a8 100%)",
      bezel: "#888888",
      accent: "rgba(255,255,255,0.4)",
    },
    graphite: {
      case: "linear-gradient(145deg, #4a4a50 0%, #2a2a30 100%)",
      bezel: "#1a1a1f",
      accent: "rgba(255,255,255,0.1)",
    },
    gold: {
      case: "linear-gradient(145deg, #e8d4b8 0%, #c8a888 100%)",
      bezel: "#a88868",
      accent: "rgba(255,255,255,0.4)",
    },
    titanium: {
      case: "linear-gradient(145deg, #8a8a8a 0%, #5a5a5a 100%)",
      bezel: "#3a3a3a",
      accent: "rgba(255,255,255,0.2)",
    },
  };

  const bandColorMap = {
    black: "#1a1a1a",
    "storm-blue": "#5a6a7a",
    white: "#f0f0f0",
    pink: "#e8a0b0",
    green: "#6a8a6a",
    orange: "#e87830",
    blue: "#3a5a8a",
    red: "#c83030",
  };

  const colors = caseColors[color];
  const bandBg = bandColorMap[bandColor];

  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {/* Top band */}
      <div
        style={{
          width: bandWidth,
          height: bandHeight,
          background: bandBg,
          borderRadius: `${12 * scale}px ${12 * scale}px 0 0`,
          boxShadow: `inset 0 ${2 * scale}px ${4 * scale}px rgba(255,255,255,0.1), inset 0 -${2 * scale}px ${4 * scale}px rgba(0,0,0,0.2)`,
        }}
      />

      {/* Watch case */}
      <div
        className="relative"
        style={{
          width: caseWidth,
          height: caseHeight,
          borderRadius: cornerRadius,
          background: colors.case,
          boxShadow: `
            0 ${20 * scale}px ${40 * scale}px rgba(0,0,0,0.3),
            0 ${10 * scale}px ${20 * scale}px rgba(0,0,0,0.2),
            inset 0 ${1 * scale}px 0 ${colors.accent},
            inset 0 -${1 * scale}px 0 rgba(0,0,0,0.3)
          `,
        }}
      >
        {/* Digital Crown */}
        <div
          style={{
            position: "absolute",
            right: -6 * scale,
            top: caseHeight * 0.32,
            width: 8 * scale,
            height: 28 * scale,
            background: `linear-gradient(90deg, ${color === "starlight" ? "#c8c0b0" : "#3a3a40"} 0%, ${color === "starlight" ? "#a8a098" : "#2a2a30"} 100%)`,
            borderRadius: `0 ${6 * scale}px ${6 * scale}px 0`,
            boxShadow: `${2 * scale}px 0 ${4 * scale}px rgba(0,0,0,0.4)`,
          }}
        >
          {/* Crown texture lines */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                right: 2 * scale,
                top: 4 * scale + i * 5 * scale,
                width: 4 * scale,
                height: 1 * scale,
                background: "rgba(0,0,0,0.3)",
                borderRadius: 1 * scale,
              }}
            />
          ))}
        </div>

        {/* Side button */}
        <div
          style={{
            position: "absolute",
            right: -5 * scale,
            top: caseHeight * 0.55,
            width: 6 * scale,
            height: 20 * scale,
            background: `linear-gradient(90deg, ${color === "starlight" ? "#c8c0b0" : "#3a3a40"} 0%, ${color === "starlight" ? "#a8a098" : "#2a2a30"} 100%)`,
            borderRadius: `0 ${4 * scale}px ${4 * scale}px 0`,
            boxShadow: `${2 * scale}px 0 ${3 * scale}px rgba(0,0,0,0.3)`,
          }}
        />

        {/* Screen bezel */}
        <div
          className="absolute"
          style={{
            inset: 8 * scale,
            borderRadius: cornerRadius - 8 * scale,
            background: colors.bezel,
            boxShadow: `inset 0 ${2 * scale}px ${4 * scale}px rgba(0,0,0,0.5)`,
          }}
        >
          {/* Screen */}
          <div
            className={`absolute overflow-hidden ${screenClassName}`}
            style={{
              inset: 3 * scale,
              borderRadius: cornerRadius - 11 * scale,
              background: "#000",
            }}
          >
            {children || (
              <div className="w-full h-full bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 flex items-center justify-center">
                <span className="text-white/80 text-sm font-light">12:00</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom band */}
      <div
        style={{
          width: bandWidth,
          height: bandHeight,
          background: bandBg,
          borderRadius: `0 0 ${12 * scale}px ${12 * scale}px`,
          boxShadow: `inset 0 ${2 * scale}px ${4 * scale}px rgba(0,0,0,0.2), inset 0 -${2 * scale}px ${4 * scale}px rgba(255,255,255,0.05)`,
        }}
      />
    </div>
  );
}
