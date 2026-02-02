"use client";

import React from "react";

type TerminalStyle = "macos" | "ubuntu" | "powershell" | "vscode";
type ColorVariant = "dark" | "light" | "dracula" | "monokai" | "nord";

interface TerminalMockupProps {
  children?: React.ReactNode;
  style?: TerminalStyle;
  color?: ColorVariant;
  title?: string;
  className?: string;
  contentClassName?: string;
  showControls?: boolean;
  scale?: number;
}

const styleConfigs: Record<
  TerminalStyle,
  {
    frame: string;
    titleText: string;
    isWindowsStyle: boolean;
  }
> = {
  macos: {
    frame: "bg-zinc-800",
    titleText: "text-zinc-400",
    isWindowsStyle: false,
  },
  ubuntu: {
    frame: "bg-zinc-700",
    titleText: "text-zinc-300",
    isWindowsStyle: false,
  },
  powershell: {
    frame: "bg-blue-900",
    titleText: "text-blue-200",
    isWindowsStyle: true,
  },
  vscode: {
    frame: "bg-zinc-900",
    titleText: "text-zinc-400",
    isWindowsStyle: true,
  },
};

const colorConfigs: Record<ColorVariant, { bg: string; text: string }> = {
  dark: { bg: "#0a0a0a", text: "text-zinc-100" },
  light: { bg: "#fafafa", text: "text-zinc-900" },
  dracula: { bg: "#282a36", text: "text-[#f8f8f2]" },
  monokai: { bg: "#272822", text: "text-[#f8f8f2]" },
  nord: { bg: "#2e3440", text: "text-[#eceff4]" },
};

export default function TerminalMockup({
  children,
  style = "macos",
  color = "dark",
  title = "Terminal",
  className = "",
  contentClassName = "",
  showControls = true,
  scale = 1,
}: TerminalMockupProps) {
  const styleConfig = styleConfigs[style];
  const colorConfig = colorConfigs[color];

  const width = 720 * scale;
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

  const renderUbuntuControls = () => (
    <div className="flex items-center shrink-0" style={{ gap: 6 * scale }}>
      <div
        className="rounded-full bg-orange-500"
        style={{ width: 12 * scale, height: 12 * scale }}
      />
      <div
        className="rounded-full bg-zinc-500"
        style={{ width: 12 * scale, height: 12 * scale }}
      />
      <div
        className="rounded-full bg-zinc-500"
        style={{ width: 12 * scale, height: 12 * scale }}
      />
    </div>
  );

  const renderWindowsControls = (hoverBg: string) => (
    <div className="flex items-center" style={{ height: titleBarHeight }}>
      <button
        className={`${hoverBg} transition-colors flex items-center justify-center`}
        style={{ width: 40 * scale, height: titleBarHeight }}
      >
        <svg
          className={styleConfig.titleText}
          style={{ width: 10 * scale, height: 10 * scale }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      </button>
      <button
        className={`${hoverBg} transition-colors flex items-center justify-center`}
        style={{ width: 40 * scale, height: titleBarHeight }}
      >
        <svg
          className={styleConfig.titleText}
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
          className={`${styleConfig.titleText} group-hover:text-white`}
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

  const getControls = () => {
    switch (style) {
      case "macos":
        return renderMacControls();
      case "ubuntu":
        return renderUbuntuControls();
      case "powershell":
        return renderWindowsControls("hover:bg-blue-800");
      case "vscode":
        return renderWindowsControls("hover:bg-zinc-700");
    }
  };

  return (
    <div
      className={`relative ${styleConfig.frame} ${className}`}
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
        {/* Left side - macOS/Ubuntu controls */}
        {!styleConfig.isWindowsStyle && showControls && getControls()}

        {/* Title */}
        <div className="flex-1 text-center">
          <span
            className={`font-medium truncate ${styleConfig.titleText}`}
            style={{ fontSize: 12 * scale }}
          >
            {title}
          </span>
        </div>

        {/* Right side - Windows-style controls */}
        {styleConfig.isWindowsStyle && showControls && (
          <div className="absolute top-0 right-0">
            {getControls()}
          </div>
        )}

        {/* Spacer for centering when controls are on left */}
        {!styleConfig.isWindowsStyle && showControls && (
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
          className={`overflow-hidden font-mono ${colorConfig.text} ${contentClassName}`}
          style={{
            borderRadius: innerRadius,
            background: colorConfig.bg,
            padding: 12 * scale,
            fontSize: 13 * scale,
            minHeight: 100 * scale,
          }}
        >
          {children || (
            <div className="flex items-center" style={{ gap: 6 * scale }}>
              <span className="text-green-500">$</span>
              <span className="animate-pulse">_</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
