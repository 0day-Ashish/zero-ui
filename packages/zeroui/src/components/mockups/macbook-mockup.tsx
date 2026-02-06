"use client";

import React from "react";

type MacBookModel = "pro-16" | "pro-14" | "air-15" | "air-13";
type ColorVariant = "silver" | "space-gray" | "midnight" | "starlight";

interface MacBookMockupProps {
  children?: React.ReactNode;
  model?: MacBookModel;
  color?: ColorVariant;
  className?: string;
  screenClassName?: string;
  scale?: number;
}

export default function MacBookMockup({
  children,
  model = "pro-14",
  color = "silver",
  className = "",
  screenClassName = "",
  scale = 1,
}: MacBookMockupProps) {
  const width = 600 * scale;
  const lidHeight = 360* scale;
  const baseHeight = 14 * scale;

  const frameColors = {
    silver: {
      lid: "linear-gradient(180deg, #e8e8e8 0%, #d4d4d4 50%, #c8c8c8 100%)",
      base: "linear-gradient(180deg, #d8d8d8 0%, #c4c4c4 100%)",
      bezel: "#0a0a0a",
      accent: "rgba(255,255,255,0.6)",
    },
    "space-gray": {
      lid: "linear-gradient(180deg, #6b6b6b 0%, #4a4a4a 50%, #3a3a3a 100%)",
      base: "linear-gradient(180deg, #5a5a5a 0%, #3a3a3a 100%)",
      bezel: "#000000",
      accent: "rgba(255,255,255,0.15)",
    },
    midnight: {
      lid: "linear-gradient(180deg, #1a1a2e 0%, #0d0d1a 50%, #050510 100%)",
      base: "linear-gradient(180deg, #151525 0%, #0a0a15 100%)",
      bezel: "#000000",
      accent: "rgba(255,255,255,0.08)",
    },
    starlight: {
      lid: "linear-gradient(180deg, #f5f0e8 0%, #e8e0d4 50%, #ddd5c8 100%)",
      base: "linear-gradient(180deg, #e8e0d4 0%, #d4ccc0 100%)",
      bezel: "#0a0a0a",
      accent: "rgba(255,255,255,0.7)",
    },
  };

  const colors = frameColors[color];

  return (
    <div className={`relative ${className}`} style={{ width }}>
      {/* Lid / Display */}
      <div
        className="relative"
        style={{
          height: lidHeight,
          background: colors.bezel,
          borderRadius: `${12 * scale}px ${12 * scale}px 0 0`,
          padding: 4 * scale,
          boxShadow: `0 ${20 * scale}px ${40 * scale}px rgba(0,0,0,0.15)`,
        }}
      >
        {/* Camera notch */}
        <div
          className="absolute left-1/2 -translate-x-1/2 z-20"
          style={{
            top: 0,
            width: 72 * scale,
            height: 16 * scale,
            background: colors.bezel,
            borderRadius: `0 0 ${8 * scale}px ${8 * scale}px`,
          }}
        >
          {/* Camera lens */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: 6 * scale,
              height: 6 * scale,
              background: "linear-gradient(135deg, #2d2d3a 0%, #1a1a24 100%)",
              borderRadius: "50%",
              boxShadow: "inset 0 1px 2px rgba(0,0,0,0.8)",
            }}
          >
            {/* Camera indicator */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: 2 * scale,
                height: 2 * scale,
                background: "#1a3a2a",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>

        {/* Screen */}
        <div
          className={`relative w-full h-full overflow-hidden ${screenClassName}`}
          style={{
            borderRadius: `${8 * scale}px ${8 * scale}px 0 0`,
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

      {/* Base / Bottom part */}
      <div
        className="relative"
        style={{
          height: baseHeight,
          width: "105%",
          marginLeft: "-2.5%",
          background: colors.base,
          borderRadius: `0 0 ${10 * scale}px ${10 * scale}px`,
          boxShadow: `0 ${4 * scale}px ${12 * scale}px rgba(0,0,0,0.2)`,
        }}
      >
        {/* Top edge shadow line */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: 1 * scale,
            background: "rgba(0,0,0,0.3)",
          }}
        />

        {/* Front lip indent (for opening) */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top: 0,
            width: 100 * scale,
            height: 4 * scale,
            background: "rgba(0,0,0,0.08)",
            borderRadius: `0 0 ${4 * scale}px ${4 * scale}px `,
          }}
        />

        {/* Feet - left */}
        <div
          className="absolute"
          style={{
            left: 30 * scale,
            bottom: -3 * scale,
            width: 16 * scale,
            height: 3 * scale,
            background: "linear-gradient(180deg, #555 0%, #3a3a3a 100%)",
            borderRadius: `0 0 ${3 * scale}px ${3 * scale}px`,
          }}
        />
        {/* Feet - right */}
        <div
          className="absolute"
          style={{
            right: 30 * scale,
            bottom: -3 * scale,
            width: 16 * scale,
            height: 3 * scale,
            background: "linear-gradient(180deg, #555 0%, #3a3a3a 100%)",
            borderRadius: `0 0 ${3 * scale}px ${3 * scale}px`,
          }}
        />
      </div>
    </div>
  );
}
