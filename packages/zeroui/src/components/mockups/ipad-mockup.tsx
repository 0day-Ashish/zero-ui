"use client";

import React from "react";

type iPadModel = "pro-12.9" | "pro-11" | "air" | "mini";
type ColorVariant = "space-gray" | "silver";
type Orientation = "portrait" | "landscape";

interface iPadMockupProps {
  children?: React.ReactNode;
  model?: iPadModel;
  color?: ColorVariant;
  orientation?: Orientation;
  className?: string;
  screenClassName?: string;
  scale?: number;
}

export default function iPadMockup({
  children,
  model = "pro-11",
  color = "space-gray",
  orientation = "portrait",
  className = "",
  screenClassName = "",
  scale = 1,
}: iPadMockupProps) {
  const baseWidth = 380 * scale;
  const baseHeight = 520 * scale;
  const width = orientation === "portrait" ? baseWidth : baseHeight;
  const height = orientation === "portrait" ? baseHeight : baseWidth;
  const borderRadius = 28 * scale;
  const bezelWidth = 14 * scale;

  const frameColors = {
    "space-gray": {
      frame: "linear-gradient(145deg, #3a3a3a 0%, #1a1a1a 100%)",
      bezel: "#0a0a0a",
      accent: "rgba(255,255,255,0.1)",
    },
    silver: {
      frame: "linear-gradient(145deg, #e8e8e8 0%, #c8c8c8 100%)",
      bezel: "#1a1a1a",
      accent: "rgba(255,255,255,0.5)",
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
          boxShadow: `0 ${30 * scale}px ${60 * scale}px rgba(0,0,0,0.3), 0 ${15 * scale}px ${30 * scale}px rgba(0,0,0,0.2)`,
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
        {/* Frame highlight */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius,
            boxShadow: `inset 0 ${1 * scale}px 0 ${colors.accent}, inset 0 -${1 * scale}px 0 rgba(0,0,0,0.3)`,
          }}
        />

        {/* Side buttons - right side for portrait */}
        {/* Power button */}
        <div
          style={{
            position: "absolute",
            ...(orientation === "portrait"
              ? { right: -2 * scale, top: 70 * scale }
              : { top: -2 * scale, right: 70 * scale }),
            width: orientation === "portrait" ? 3 * scale : 60 * scale,
            height: orientation === "portrait" ? 60 * scale : 3 * scale,
            background: color === "space-gray" ? "#2a2a2a" : "#c0c0c0",
            borderRadius: 2 * scale,
            boxShadow: orientation === "portrait"
              ? `${1 * scale}px 0 ${2 * scale}px rgba(0,0,0,0.3)`
              : `0 -${1 * scale}px ${2 * scale}px rgba(0,0,0,0.3)`,
          }}
        />

        {/* Volume buttons */}
        <div
          style={{
            position: "absolute",
            ...(orientation === "portrait"
              ? { right: -2 * scale, top: 150 * scale }
              : { top: -2 * scale, right: 150 * scale }),
            width: orientation === "portrait" ? 3 * scale : 35 * scale,
            height: orientation === "portrait" ? 35 * scale : 3 * scale,
            background: color === "space-gray" ? "#2a2a2a" : "#c0c0c0",
            borderRadius: 2 * scale,
            boxShadow: orientation === "portrait"
              ? `${1 * scale}px 0 ${2 * scale}px rgba(0,0,0,0.3)`
              : `0 -${1 * scale}px ${2 * scale}px rgba(0,0,0,0.3)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            ...(orientation === "portrait"
              ? { right: -2 * scale, top: 195 * scale }
              : { top: -2 * scale, right: 195 * scale }),
            width: orientation === "portrait" ? 3 * scale : 35 * scale,
            height: orientation === "portrait" ? 35 * scale : 3 * scale,
            background: color === "space-gray" ? "#2a2a2a" : "#c0c0c0",
            borderRadius: 2 * scale,
            boxShadow: orientation === "portrait"
              ? `${1 * scale}px 0 ${2 * scale}px rgba(0,0,0,0.3)`
              : `0 -${1 * scale}px ${2 * scale}px rgba(0,0,0,0.3)`,
          }}
        />

        {/* Camera and sensors - top center for portrait */}
        <div
          className="absolute"
          style={{
            ...(orientation === "portrait"
              ? { top: bezelWidth / 2, left: "50%", transform: "translateX(-50%)" }
              : { left: bezelWidth / 2, top: "50%", transform: "translateY(-50%)" }),
          }}
        >
          {/* Camera */}
          <div
            style={{
              width: 8 * scale,
              height: 8 * scale,
              background: "linear-gradient(135deg, #1a1a2e 0%, #0a0a15 100%)",
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
                background: "#1e3a5f",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>

        {/* Screen bezel */}
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
              inset: 3 * scale,
              borderRadius: borderRadius - bezelWidth - 3 * scale,
              background: "#000",
            }}
          >
            {children || (
              <div className="w-full h-full bg-white flex flex-col items-center justify-center">
                <span className="text-zinc-400 text-xl font-light">Upload</span>
                <span className="text-zinc-400 text-xl font-light">Image Here</span>
              </div>
            )}

            {/* Home indicator */}
            <div
              className="absolute z-20"
              style={{
                ...(orientation === "portrait"
                  ? {
                      bottom: 8 * scale,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 120 * scale,
                      height: 5 * scale,
                    }
                  : {
                      right: 8 * scale,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 5 * scale,
                      height: 120 * scale,
                    }),
                background: "rgba(0,0,0,0.3)",
                borderRadius: 3 * scale,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
