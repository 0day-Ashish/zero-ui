"use client";

import React from "react";

type BrowserStyle = "chrome" | "safari" | "arc" | "firefox";

interface BrowserMockupProps {
  children?: React.ReactNode;
  style?: BrowserStyle;
  url?: string;
  className?: string;
  contentClassName?: string;
  showControls?: boolean;
  scale?: number;
}

const styleConfigs: Record<
  BrowserStyle,
  {
    frame: string;
    urlBar: string;
    urlText: string;
  }
> = {
  chrome: {
    frame: "bg-zinc-800",
    urlBar: "bg-zinc-700",
    urlText: "text-zinc-400",
  },
  safari: {
    frame: "bg-zinc-800",
    urlBar: "bg-zinc-700",
    urlText: "text-zinc-400",
  },
  arc: {
    frame: "bg-gradient-to-b from-violet-900 to-purple-950",
    urlBar: "bg-white/10",
    urlText: "text-zinc-300",
  },
  firefox: {
    frame: "bg-zinc-900",
    urlBar: "bg-zinc-800",
    urlText: "text-zinc-400",
  },
};

export default function BrowserMockup({
  children,
  style = "chrome",
  url = "https://example.com",
  className = "",
  contentClassName = "",
  showControls = true,
  scale = 1,
}: BrowserMockupProps) {
  const config = styleConfigs[style];

  const width = 720 * scale;
  const toolbarHeight = 40 * scale;
  const padding = 6 * scale;
  const borderRadius = 12 * scale;
  const innerRadius = 6 * scale;

  return (
    <div
      className={`relative ${config.frame} ${className}`}
      style={{
        width,
        borderRadius,
        boxShadow: `0 ${25 * scale}px ${50 * scale}px rgba(0,0,0,0.25)`,
      }}
    >
      {/* Toolbar */}
      <div
        className="relative flex items-center"
        style={{
          height: toolbarHeight,
          padding: `0 ${padding + 6 * scale}px`,
          gap: 12 * scale,
        }}
      >
        {/* Traffic lights */}
        {showControls && (
          <div className="flex items-center shrink-0" style={{ gap: 6 * scale }}>
            <div
              className="rounded-full bg-red-500"
              style={{ width: 12 * scale, height: 12 * scale }}
            />
            <div
              className="rounded-full bg-yellow-500"
              style={{ width: 12 * scale, height: 12 * scale }}
            />
            <div
              className="rounded-full bg-green-500"
              style={{ width: 12 * scale, height: 12 * scale }}
            />
          </div>
        )}

        {/* URL Bar */}
        <div
          className={`flex-1 ${config.urlBar} flex items-center justify-center`}
          style={{
            height: 28 * scale,
            borderRadius: 6 * scale,
            paddingLeft: 12 * scale,
            paddingRight: 12 * scale,
          }}
        >
          <span
            className={`truncate ${config.urlText}`}
            style={{ fontSize: 13 * scale }}
          >
            {url}
          </span>
        </div>
      </div>

      {/* Content area */}
      <div
        style={{
          padding: `0 ${padding}px ${padding}px ${padding}px`,
        }}
      >
        <div
          className={`overflow-hidden ${contentClassName}`}
          style={{
            borderRadius: innerRadius,
            background: "#000",
          }}
        >
          {children || (
            <div
              className="w-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center"
              style={{ height: 420 * scale }}
            >
              <span
                className="text-white font-bold"
                style={{ fontSize: 24 * scale }}
              >
                Your Website
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
