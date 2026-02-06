"use client";

import React, { useRef, useState, useId } from "react";
import { useCursorPosition } from "./hooks/use-cursor-position";

// Types
type NoiseEffect = "none" | "grain" | "perlin" | "animated";
type CursorEffect = "none" | "ripple" | "glow" | "spotlight";
type BorderEffect = "none" | "rotating" | "pulsing" | "spectrum" | "glow";
type GradientPreset = "purple-blue" | "orange-red" | "green-teal" | "pink-purple" | "custom";
type Size = "sm" | "md" | "lg";

interface Ripple {
  x: number;
  y: number;
  id: number;
}

interface ButtonGradientProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  gradient?: GradientPreset;
  gradientFrom?: string;
  gradientTo?: string;
  gradientVia?: string;
  noiseEffect?: NoiseEffect;
  noiseOpacity?: number;
  cursorEffect?: CursorEffect;
  borderEffect?: BorderEffect;
  children: React.ReactNode;
}

// Gradient presets
const gradientPresets: Record<GradientPreset, { from: string; via?: string; to: string }> = {
  "purple-blue": { from: "#8b5cf6", via: "#6366f1", to: "#3b82f6" },
  "orange-red": { from: "#f97316", via: "#ef4444", to: "#dc2626" },
  "green-teal": { from: "#10b981", via: "#14b8a6", to: "#06b6d4" },
  "pink-purple": { from: "#ec4899", via: "#d946ef", to: "#8b5cf6" },
  "custom": { from: "#8b5cf6", to: "#3b82f6" },
};

// Size configurations
const sizes: Record<Size, string> = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-6 py-2 text-sm",
  lg: "px-10 py-2.5 text-base",
};

// Noise Filter Component
function NoiseFilter({ id, effect }: { id: string; effect: NoiseEffect }) {
  const baseFrequency = effect === "grain" ? "0.8" : "0.3";
  const numOctaves = effect === "grain" ? "4" : "2";

  return (
    <svg className="absolute w-0 h-0" aria-hidden="true">
      <defs>
        <filter id={id}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency={baseFrequency}
            numOctaves={numOctaves}
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="overlay" />
        </filter>
      </defs>
    </svg>
  );
}

// Noise Overlay Component
function NoiseOverlay({ effect, opacity, filterId }: { effect: NoiseEffect; opacity: number; filterId: string }) {
  if (effect === "animated") {
    return (
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none animate-noise"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity,
          mixBlendMode: "overlay",
        }}
      />
    );
  }

  return (
    <>
      <NoiseFilter id={filterId} effect={effect} />
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          filter: `url(#${filterId})`,
          opacity,
          mixBlendMode: "overlay",
        }}
      />
    </>
  );
}

// Ripple Effect Component
function RippleEffect({ ripples, onAnimationEnd }: { ripples: Ripple[]; onAnimationEnd: (id: number) => void }) {
  return (
    <>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/40 pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 10,
            height: 10,
            transform: "translate(-50%, -50%)",
            animation: "ripple-expand 0.6s ease-out forwards",
          }}
          onAnimationEnd={() => onAnimationEnd(ripple.id)}
        />
      ))}
    </>
  );
}

// Border Layer Component - wraps the button for border effects
function BorderWrapper({
  effect,
  colors,
  children
}: {
  effect: BorderEffect;
  colors: { from: string; via?: string; to: string };
  children: React.ReactNode;
}) {
  if (effect === "rotating") {
    return (
      <div className="relative inline-flex rounded-2xl overflow-hidden p-[2px]">
        {/* Rotating gradient layer - larger element that spins */}
        <div
          className="absolute inset-[-50%] animate-gradient-rotate"
          style={{
            background: `conic-gradient(${colors.from}, ${colors.via || colors.from}, ${colors.to}, ${colors.from})`,
          }}
        />
        {/* Button sits on top */}
        <div className="relative rounded-2xl">{children}</div>
      </div>
    );
  }

  if (effect === "pulsing") {
    return (
      <div className="relative inline-flex">
        {/* Pulsing border layer */}
        <div
          className="absolute -inset-[2px] rounded-2xl animate-border-pulse"
          style={{
            background: colors.from,
            ["--pulse-color" as string]: colors.from,
          }}
        />
        {/* Button sits on top */}
        <div className="relative">{children}</div>
      </div>
    );
  }

  if (effect === "spectrum") {
    return (
      <div className="relative inline-flex">
        {/* Spectrum gradient layer - hue shifts through colors */}
        <div
          className="absolute -inset-[2px] rounded-2xl"
          style={{
            background: `linear-gradient(90deg, ${colors.from}, ${colors.via || colors.from}, ${colors.to})`,
            animation: "spectrum-shift 3s linear infinite",
          }}
        />
        {/* Button sits on top */}
        <div className="relative">{children}</div>
      </div>
    );
  }

  if (effect === "glow") {
    return (
      <div className="relative inline-flex">
        {children}
        {/* Reflection/glow below button - stays centered */}
        <div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-2 rounded-full blur-md opacity-50 dark:opacity-25"
          style={{
            width: "70%",
            background: `linear-gradient(90deg, ${colors.from}, ${colors.via || colors.from}, ${colors.to})`,
          }}
        />
      </div>
    );
  }

  return <>{children}</>;
}

export default function ButtonGradient({
  size = "md",
  gradient = "purple-blue",
  gradientFrom,
  gradientTo,
  gradientVia,
  noiseEffect = "none",
  noiseOpacity = 0.15,
  cursorEffect = "none",
  borderEffect = "none",
  children,
  className = "",
  onClick,
  disabled,
  ...props
}: ButtonGradientProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const filterId = useId().replace(/:/g, "");
  const cursorPosition = useCursorPosition(buttonRef, cursorEffect === "glow" || cursorEffect === "spotlight");
  const [ripples, setRipples] = useState<Ripple[]>([]);

  // Base styles
  const baseStyles =
    "cursor-pointer relative overflow-hidden inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

  // Border radius - rounded-md for glow, rounded-2xl for others
  const borderRadius = borderEffect === "glow" ? "rounded-md" : "rounded-2xl";

  // Compute gradient colors
  const colors =
    gradient === "custom"
      ? { from: gradientFrom || "#8b5cf6", via: gradientVia, to: gradientTo || "#3b82f6" }
      : gradientPresets[gradient];

  // Handle click for ripple effect
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (cursorEffect === "ripple" && !disabled) {
      const rect = e.currentTarget.getBoundingClientRect();
      setRipples((prev) => [
        ...prev,
        {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          id: Date.now(),
        },
      ]);
    }
    onClick?.(e);
  };

  // Remove ripple after animation
  const handleRippleEnd = (id: number) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  };

  // Cursor effect styles
  const getCursorOverlay = () => {
    if (cursorEffect === "glow") {
      return (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-200"
          style={{
            background: `radial-gradient(circle at ${cursorPosition.x}% ${cursorPosition.y}%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
          }}
        />
      );
    }

    if (cursorEffect === "spotlight") {
      return (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-200"
          style={{
            background: `radial-gradient(circle at ${cursorPosition.x}% ${cursorPosition.y}%, rgba(255,255,255,0.5) 0%, transparent 30%)`,
            mixBlendMode: "soft-light",
          }}
        />
      );
    }

    return null;
  };

  const buttonElement = (
    <button
      ref={buttonRef}
      className={`${baseStyles} ${borderRadius} ${sizes[size]} ${className}`}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {/* Main background - solid for border effects, gradient otherwise */}
      <span
        className={`absolute inset-0 ${borderRadius} ${borderEffect !== "none" ? "bg-white dark:bg-zinc-950" : ""}`}
        style={borderEffect === "none" ? {
          background: `linear-gradient(135deg, ${colors.from}, ${colors.via || colors.from}, ${colors.to})`,
        } : undefined}
      />

      {/* Noise overlay */}
      {noiseEffect !== "none" && (
        <NoiseOverlay effect={noiseEffect} opacity={noiseOpacity} filterId={filterId} />
      )}

      {/* Cursor effect overlay */}
      {getCursorOverlay()}

      {/* Ripple effects */}
      {cursorEffect === "ripple" && <RippleEffect ripples={ripples} onAnimationEnd={handleRippleEnd} />}

      {/* Glow effect gradient bar - inside button at bottom edge, gradient animates left/right */}
      {borderEffect === "glow" && (
        <span
          className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full z-10 animate-glow-sway"
          style={{
            background: `linear-gradient(90deg, ${colors.from}, ${colors.via || colors.from}, ${colors.to}, ${colors.from})`,
          }}
        />
      )}

      {/* Content */}
      <span className={`relative z-10 drop-shadow-sm ${borderEffect !== "none" ? "text-zinc-900 dark:text-white" : "text-white"}`}>{children}</span>
    </button>
  );

  // Wrap with border effect if needed
  return (
    <BorderWrapper effect={borderEffect} colors={colors}>
      {buttonElement}
    </BorderWrapper>
  );
}
