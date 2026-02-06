"use client";

import React from "react";

type iPhoneModel = "15-pro" | "15" | "14" | "se";
type ColorVariant = "black" | "silver" | "gold" | "blue" | "natural";

interface iPhoneMockupProps {
  children?: React.ReactNode;
  model?: iPhoneModel;
  color?: ColorVariant;
  className?: string;
  screenClassName?: string;
  scale?: number;
}

export default function iPhoneMockup({
  children,
  model = "15-pro",
  color = "black",
  className = "",
  screenClassName = "",
  scale = 1,
}: iPhoneMockupProps) {
  const width = 290 * scale;
  const height = 590 * scale;
  const borderRadius = 52 * scale;
  const bezelWidth = 8 * scale;
  const screenRadius = 44 * scale;

  const frameColors = {
    black: { outer: "#1a1a1a", inner: "#0d0d0d", highlight: "rgba(255,255,255,0.08)" },
    silver: { outer: "#e5e5e5", inner: "#d4d4d4", highlight: "rgba(255,255,255,0.5)" },
    gold: { outer: "#f5e6d3", inner: "#e8d5c4", highlight: "rgba(255,255,255,0.4)" },
    blue: { outer: "#1e3a5f", inner: "#152d4a", highlight: "rgba(255,255,255,0.1)" },
    natural: { outer: "#d6cdc3", inner: "#c4b8aa", highlight: "rgba(255,255,255,0.3)" },
  };

  const colors = frameColors[color];
  const isDark = color === "black" || color === "blue";

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
          background: `linear-gradient(145deg, ${colors.highlight}, transparent 50%), ${colors.outer}`,
        }}
      >
        {/* Frame edge highlight */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius,
            boxShadow: `inset 0 ${1 * scale}px 0 ${colors.highlight}, inset 0 -${1 * scale}px 0 rgba(0,0,0,0.2)`,
          }}
        />

        {/* Left buttons */}
        {/* Silent switch */}
        <div
          style={{
            position: "absolute",
            left: -2 * scale,
            top: 100 * scale,
            width: 3 * scale,
            height: 28 * scale,
            background: colors.outer,
            borderRadius: `${2 * scale}px 0 0 ${2 * scale}px`,
            boxShadow: `-${1 * scale}px 0 ${2 * scale}px rgba(0,0,0,0.3)`,
          }}
        />
        {/* Volume up */}
        <div
          style={{
            position: "absolute",
            left: -2 * scale,
            top: 145 * scale,
            width: 3 * scale,
            height: 52 * scale,
            background: colors.outer,
            borderRadius: `${2 * scale}px 0 0 ${2 * scale}px`,
            boxShadow: `-${1 * scale}px 0 ${2 * scale}px rgba(0,0,0,0.3)`,
          }}
        />
        {/* Volume down */}
        <div
          style={{
            position: "absolute",
            left: -2 * scale,
            top: 205 * scale,
            width: 3 * scale,
            height: 52 * scale,
            background: colors.outer,
            borderRadius: `${2 * scale}px 0 0 ${2 * scale}px`,
            boxShadow: `-${1 * scale}px 0 ${2 * scale}px rgba(0,0,0,0.3)`,
          }}
        />

        {/* Right button - Power */}
        <div
          style={{
            position: "absolute",
            right: -2 * scale,
            top: 165 * scale,
            width: 3 * scale,
            height: 72 * scale,
            background: colors.outer,
            borderRadius: `0 ${2 * scale}px ${2 * scale}px 0`,
            boxShadow: `${1 * scale}px 0 ${2 * scale}px rgba(0,0,0,0.3)`,
          }}
        />

        {/* Inner bezel */}
        <div
          className="absolute"
          style={{
            inset: bezelWidth,
            borderRadius: screenRadius,
            background: colors.inner,
          }}
        >
          {/* Screen */}
          <div
            className={`absolute overflow-hidden ${screenClassName}`}
            style={{
              inset: 2 * scale,
              borderRadius: screenRadius - 2 * scale,
              background: "#000",
            }}
          >
            {/* Dynamic Island */}
            {(model === "15-pro" || model === "15") && (
              <div
                className="absolute left-1/2 -translate-x-1/2 z-20 flex items-center justify-center"
                style={{
                  top: 12 * scale,
                  width: 120 * scale,
                  height: 34 * scale,
                  background: "#000",
                  borderRadius: 20 * scale,
                }}
              >
                {/* Front camera */}
                <div
                  className="absolute"
                  style={{
                    right: 22 * scale,
                    width: 10 * scale,
                    height: 10 * scale,
                    background: "linear-gradient(135deg, #1a1a2e 0%, #0a0a15 100%)",
                    borderRadius: "50%",
                    boxShadow: "inset 0 1px 2px rgba(255,255,255,0.1)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 4 * scale,
                      height: 4 * scale,
                      background: "#1e3a5f",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              </div>
            )}

            {/* Notch for iPhone 14 */}
            {model === "14" && (
              <div
                className="absolute left-1/2 -translate-x-1/2 z-20"
                style={{
                  top: 0,
                  width: 150 * scale,
                  height: 32 * scale,
                  background: "#000",
                  borderRadius: `0 0 ${20 * scale}px ${20 * scale}px`,
                }}
              />
            )}

            {/* Screen content */}
            <div className="absolute inset-0">
              {children || (
                <div className="w-full h-full bg-white flex flex-col items-center justify-center">
                  <span className="text-zinc-400 text-lg font-light">Upload</span>
                  <span className="text-zinc-400 text-lg font-light">Image Here</span>
                </div>
              )}
            </div>

            {/* Home indicator */}
            <div
              className="absolute left-1/2 -translate-x-1/2 z-20"
              style={{
                bottom: 8 * scale,
                width: 130 * scale,
                height: 5 * scale,
                background: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)",
                borderRadius: 3 * scale,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
