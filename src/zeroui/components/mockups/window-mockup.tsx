"use client";

import React from "react";

type WindowStyle = "macos" | "windows" | "linux";

interface WindowMockupProps {
  children?: React.ReactNode;
  style?: WindowStyle;
  title?: string;
  className?: string;
  contentClassName?: string;
  showControls?: boolean;
  scale?: number;
}

const styleConfigs: Record<
  WindowStyle,
  {
    frame: string;
    titleText: string;
    controlsPosition: "left" | "right";
  }
> = {
  macos: {
    frame: "bg-zinc-800",
    titleText: "text-zinc-400",
    controlsPosition: "left",
  },
  windows: {
    frame: "bg-zinc-900",
    titleText: "text-zinc-300",
    controlsPosition: "right",
  },
  linux: {
    frame: "bg-zinc-800",
    titleText: "text-zinc-300",
    controlsPosition: "right",
  },
};

export default function WindowMockup({
  children,
  style = "macos",
  title = "Untitled",
  className = "",
  contentClassName = "",
  showControls = true,
  scale = 1,
}: WindowMockupProps) {
  const config = styleConfigs[style];

  const width = 600 * scale;
  const titleBarHeight = 36 * scale;
  const padding = 6 * scale;
  const borderRadius = 12 * scale;
  const innerRadius = 6 * scale;

  const renderMacControls = () => (
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
  );

  const renderWindowsControls = () => (
    <div className="flex items-center" style={{ height: titleBarHeight }}>
      <button
        className="hover:bg-zinc-700 transition-colors flex items-center justify-center"
        style={{ width: 40 * scale, height: titleBarHeight }}
      >
        <svg
          className="text-zinc-400"
          style={{ width: 10 * scale, height: 10 * scale }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      </button>
      <button
        className="hover:bg-zinc-700 transition-colors flex items-center justify-center"
        style={{ width: 40 * scale, height: titleBarHeight }}
      >
        <svg
          className="text-zinc-400"
          style={{ width: 10 * scale, height: 10 * scale }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect x="4" y="4" width="16" height="16" strokeWidth={2} rx="1" />
        </svg>
      </button>
      <button
        className="hover:bg-red-500 group transition-colors flex items-center justify-center"
        style={{
          width: 40 * scale,
          height: titleBarHeight,
          borderRadius: `0 ${borderRadius}px 0 0`,
        }}
      >
        <svg
          className="text-zinc-400 group-hover:text-white"
          style={{ width: 10 * scale, height: 10 * scale }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );

  const renderLinuxControls = () => (
    <div className="flex items-center" style={{ gap: 4 * scale }}>
      <button
        className="rounded hover:bg-zinc-600 transition-colors flex items-center justify-center"
        style={{ width: 20 * scale, height: 20 * scale }}
      >
        <svg
          className="text-zinc-400"
          style={{ width: 8 * scale, height: 8 * scale }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      </button>
      <button
        className="rounded hover:bg-zinc-600 transition-colors flex items-center justify-center"
        style={{ width: 20 * scale, height: 20 * scale }}
      >
        <svg
          className="text-zinc-400"
          style={{ width: 8 * scale, height: 8 * scale }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect x="6" y="6" width="12" height="12" strokeWidth={2} />
        </svg>
      </button>
      <button
        className="rounded hover:bg-red-500 group transition-colors flex items-center justify-center"
        style={{ width: 20 * scale, height: 20 * scale }}
      >
        <svg
          className="text-zinc-400 group-hover:text-white"
          style={{ width: 8 * scale, height: 8 * scale }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );

  const getControls = () => {
    switch (style) {
      case "macos":
        return renderMacControls();
      case "windows":
        return renderWindowsControls();
      case "linux":
        return renderLinuxControls();
    }
  };

  return (
    <div
      className={`relative ${config.frame} ${className}`}
      style={{
        width,
        borderRadius,
        boxShadow: `0 ${25 * scale}px ${50 * scale}px rgba(0,0,0,0.25)`,
      }}
    >
      {/* Title Bar */}
      <div
        className="relative flex items-center"
        style={{
          height: titleBarHeight,
          padding: `0 ${padding + 6 * scale}px`,
        }}
      >
        {/* Left side */}
        {config.controlsPosition === "left" && showControls && getControls()}

        {/* Title */}
        <div className="flex-1 text-center">
          <span
            className={`font-medium truncate ${config.titleText}`}
            style={{ fontSize: 12 * scale }}
          >
            {title}
          </span>
        </div>

        {/* Right side */}
        {config.controlsPosition === "right" && showControls && (
          <div
            className="absolute top-0 right-0"
            style={{ marginRight: style === "linux" ? padding + 6 * scale : 0 }}
          >
            {getControls()}
          </div>
        )}

        {/* Spacer for centering when controls are on left */}
        {config.controlsPosition === "left" && showControls && (
          <div style={{ width: 54 * scale }} />
        )}
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
              className="w-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center"
              style={{ height: 320 * scale }}
            >
              <span
                className="text-zinc-500"
                style={{ fontSize: 14 * scale }}
              >
                App Content
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
