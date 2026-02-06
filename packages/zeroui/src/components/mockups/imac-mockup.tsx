"use client";

import React from "react";

type iMacModel = "24" | "27";
type ColorVariant = "silver" | "blue" | "green" | "pink" | "yellow" | "orange" | "purple";

interface iMacMockupProps {
  children?: React.ReactNode;
  model?: iMacModel;
  color?: ColorVariant;
  className?: string;
  screenClassName?: string;
  scale?: number;
}

export default function iMacMockup({
  children,
  model = "24",
  color = "silver",
  className = "",
  screenClassName = "",
  scale = 1,
}: iMacMockupProps) {
  const width = 600 * scale;
  const screenHeight = 340 * scale;
  const chinHeight = 50 * scale;
  const standNeckHeight = 70 * scale;
  const standBaseWidth = 180 * scale;

  const colorConfigs = {
    silver: {
      frame: "linear-gradient(180deg, #e8e8e8 0%, #d4d4d4 100%)",
      chin: "linear-gradient(180deg, #f0f0f0 0%, #d8d8d8 100%)",
      stand: "linear-gradient(180deg, #d8d8d8 0%, #c0c0c0 100%)",
      accent: "rgba(255,255,255,0.5)",
    },
    blue: {
      frame: "linear-gradient(180deg, #6ba3d6 0%, #4a8bc8 100%)",
      chin: "linear-gradient(180deg, #8ac0e8 0%, #6aa8d8 100%)",
      stand: "linear-gradient(180deg, #6ba3d6 0%, #5090c0 100%)",
      accent: "rgba(255,255,255,0.3)",
    },
    green: {
      frame: "linear-gradient(180deg, #7ac08a 0%, #5aa070 100%)",
      chin: "linear-gradient(180deg, #98d8a8 0%, #78c088 100%)",
      stand: "linear-gradient(180deg, #7ac08a 0%, #60a878 100%)",
      accent: "rgba(255,255,255,0.3)",
    },
    pink: {
      frame: "linear-gradient(180deg, #e8a0b8 0%, #d080a0 100%)",
      chin: "linear-gradient(180deg, #f0b8c8 0%, #e898b0 100%)",
      stand: "linear-gradient(180deg, #e8a0b8 0%, #d888a8 100%)",
      accent: "rgba(255,255,255,0.3)",
    },
    yellow: {
      frame: "linear-gradient(180deg, #e8d080 0%, #d0b860 100%)",
      chin: "linear-gradient(180deg, #f0e098 0%, #e8c878 100%)",
      stand: "linear-gradient(180deg, #e8d080 0%, #d8c068 100%)",
      accent: "rgba(255,255,255,0.3)",
    },
    orange: {
      frame: "linear-gradient(180deg, #e8a060 0%, #d08040 100%)",
      chin: "linear-gradient(180deg, #f0b878 0%, #e89858 100%)",
      stand: "linear-gradient(180deg, #e8a060 0%, #d88848 100%)",
      accent: "rgba(255,255,255,0.3)",
    },
    purple: {
      frame: "linear-gradient(180deg, #b090d0 0%, #9070b8 100%)",
      chin: "linear-gradient(180deg, #c8a8e0 0%, #b088c8 100%)",
      stand: "linear-gradient(180deg, #b090d0 0%, #9878c0 100%)",
      accent: "rgba(255,255,255,0.3)",
    },
  };

  const colors = colorConfigs[color];

  return (
    <div className={`relative ${className}`} style={{ width }}>
      {/* Display portion */}
      <div
        className="relative overflow-hidden"
        style={{
          background: colors.frame,
          borderRadius: `${16 * scale}px ${16 * scale}px 0 0`,
          boxShadow: `0 ${30 * scale}px ${60 * scale}px rgba(0,0,0,0.25), inset 0 ${1 * scale}px 0 ${colors.accent}`,
        }}
      >
        {/* Screen bezel */}
        <div style={{ padding: 14 * scale }}>
          {/* Camera */}
          <div
            className="absolute left-1/2 -translate-x-1/2 z-10"
            style={{
              top: 8 * scale,
              width: 8 * scale,
              height: 8 * scale,
              background: "linear-gradient(135deg, #2a2a3a 0%, #1a1a2a 100%)",
              borderRadius: "50%",
              boxShadow: "inset 0 1px 2px rgba(0,0,0,0.5)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 3 * scale,
                height: 3 * scale,
                background: "#0d3320",
                borderRadius: "50%",
              }}
            />
          </div>

          {/* Screen */}
          <div
            className={`overflow-hidden ${screenClassName}`}
            style={{
              height: screenHeight,
              borderRadius: 8 * scale,
              background: "#000",
            }}
          >
            {children || (
              <div className="w-full h-full bg-white flex flex-col items-center justify-center">
                <span className="text-zinc-400 text-2xl font-light">Upload</span>
                <span className="text-zinc-400 text-2xl font-light">Image Here</span>
              </div>
            )}
          </div>
        </div>

        {/* Chin */}
        <div
          className="flex items-center justify-center"
          style={{
            height: chinHeight,
            background: colors.chin,
          }}
        >
          {/* Apple logo area */}
          <div
            style={{
              width: 24 * scale,
              height: 24 * scale,
              background: "rgba(0,0,0,0.08)",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>

      {/* Stand */}
      <div className="flex flex-col items-center">
        {/* Neck */}
        <div
          style={{
            width: 100 * scale,
            height: standNeckHeight,
            background: colors.stand,
            clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)",
            boxShadow: `inset 0 ${1 * scale}px 0 ${colors.accent}, 0 ${4 * scale}px ${8 * scale}px rgba(0,0,0,0.15)`,
          }}
        />
        {/* Base */}
        <div
          style={{
            width: standBaseWidth,
            height: 8 * scale,
            background: colors.stand,
            borderRadius: `0 0 ${6 * scale}px ${6 * scale}px`,
            boxShadow: `0 ${4 * scale}px ${12 * scale}px rgba(0,0,0,0.2)`,
          }}
        />
      </div>
    </div>
  );
}
