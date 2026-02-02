"use client";

import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { ButtonGradient } from "@/zeroui/components/buttons";

// Different button components for sidebar
const buttonComponents = [
  { id: "button-basic", name: "Button Basic", href: "/components/buttons" },
  { id: "button-icon", name: "Button Icon", href: "/components/buttons/icon" },
  { id: "button-loading", name: "Button Loading", href: "/components/buttons/loading" },
  { id: "button-group", name: "Button Group", href: "/components/buttons/group" },
  { id: "button-social", name: "Button Social", href: "/components/buttons/social" },
  { id: "button-gradient", name: "Button Gradient", href: "/components/buttons/gradient" },
  { id: "button-glass", name: "Button Glass", href: "/components/buttons/glass" },
  { id: "button-3d", name: "Button 3D", href: "/components/buttons/3d" },
];

// Manual installation steps
const manualSteps = [
  {
    title: "Copy the hook",
    description: "Create the cursor position hook:",
    filename: "components/buttons/hooks/use-cursor-position.ts",
    code: `"use client";

import { useState, useEffect, RefObject, useCallback } from "react";

interface CursorPosition {
  x: number;
  y: number;
}

export function useCursorPosition(
  ref: RefObject<HTMLElement | null>,
  enabled: boolean = true
): CursorPosition {
  const [position, setPosition] = useState<CursorPosition>({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);

    setPosition({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    });
  }, [ref]);

  useEffect(() => {
    const element = ref.current;
    if (!element || !enabled) return;

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", () => setPosition({ x: 50, y: 50 }));

    return () => element.removeEventListener("mousemove", handleMouseMove);
  }, [ref, enabled, handleMouseMove]);

  return position;
}`,
  },
  {
    title: "Copy the component code",
    description: "Create the ButtonGradient component:",
    filename: "components/buttons/button-gradient.tsx",
    code: `// See full implementation in the component source`,
  },
];

export default function ButtonGradientPage() {
  return (
    <ComponentPageLayout
      componentName="Button Gradient"
      description="Advanced gradient buttons with noise effects, cursor interactions, and animated borders."
      componentItems={buttonComponents}
      activeComponentId="button-gradient"
      prevComponent={{ name: "Button Social", href: "/components/buttons/social" }}
      nextComponent={{ name: "Button Glass", href: "/components/buttons/glass" }}
    >
      {/* Gradient Presets */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Gradient Presets</h3>
      <ComponentPreview
        code={`<ButtonGradient gradient="purple-blue">Purple Blue</ButtonGradient>
<ButtonGradient gradient="orange-red">Orange Red</ButtonGradient>
<ButtonGradient gradient="green-teal">Green Teal</ButtonGradient>
<ButtonGradient gradient="pink-purple">Pink Purple</ButtonGradient>`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <ButtonGradient gradient="purple-blue">Purple Blue</ButtonGradient>
          <ButtonGradient gradient="orange-red">Orange Red</ButtonGradient>
          <ButtonGradient gradient="green-teal">Green Teal</ButtonGradient>
          <ButtonGradient gradient="pink-purple">Pink Purple</ButtonGradient>
        </div>
      </ComponentPreview>

      {/* Noise Effects */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Noise Effects</h3>
      <ComponentPreview
        code={`<ButtonGradient noiseEffect="grain">Grain Noise</ButtonGradient>
<ButtonGradient noiseEffect="perlin">Perlin Noise</ButtonGradient>
<ButtonGradient noiseEffect="animated">Animated Noise</ButtonGradient>`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <ButtonGradient noiseEffect="grain" noiseOpacity={0.2}>Grain Noise</ButtonGradient>
          <ButtonGradient noiseEffect="perlin" noiseOpacity={0.2} gradient="orange-red">Perlin Noise</ButtonGradient>
          <ButtonGradient noiseEffect="animated" noiseOpacity={0.15} gradient="green-teal">Animated Noise</ButtonGradient>
        </div>
      </ComponentPreview>

      {/* Cursor Effects */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Cursor Effects</h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">Hover over the buttons to see the effects. Click for ripple.</p>
      <ComponentPreview
        code={`<ButtonGradient cursorEffect="ripple">Click Me (Ripple)</ButtonGradient>
<ButtonGradient cursorEffect="glow">Hover Me (Glow)</ButtonGradient>
<ButtonGradient cursorEffect="spotlight">Hover Me (Spotlight)</ButtonGradient>`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <ButtonGradient cursorEffect="ripple" gradient="purple-blue">Click Me (Ripple)</ButtonGradient>
          <ButtonGradient cursorEffect="glow" gradient="orange-red">Hover Me (Glow)</ButtonGradient>
          <ButtonGradient cursorEffect="spotlight" gradient="pink-purple">Hover Me (Spotlight)</ButtonGradient>
        </div>
      </ComponentPreview>

      {/* Animated Border Effects */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Animated Border Effects</h3>
      <ComponentPreview
        code={`<ButtonGradient borderEffect="rotating">Rotating Border</ButtonGradient>
<ButtonGradient borderEffect="pulsing">Pulsing Border</ButtonGradient>
<ButtonGradient borderEffect="spectrum">Spectrum Border</ButtonGradient>
<ButtonGradient borderEffect="glow">Glow Shadow</ButtonGradient>`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <ButtonGradient borderEffect="rotating" gradient="purple-blue">Rotating Border</ButtonGradient>
          <ButtonGradient borderEffect="pulsing" gradient="orange-red">Pulsing Border</ButtonGradient>
          <ButtonGradient borderEffect="spectrum" gradient="green-teal">Spectrum Border</ButtonGradient>
          <ButtonGradient borderEffect="glow" gradient="pink-purple">Glow Shadow</ButtonGradient>
        </div>
      </ComponentPreview>

      {/* Sizes */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Sizes</h3>
      <ComponentPreview
        code={`<ButtonGradient size="sm">Small</ButtonGradient>
<ButtonGradient size="md">Medium</ButtonGradient>
<ButtonGradient size="lg">Large</ButtonGradient>`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <ButtonGradient size="sm">Small</ButtonGradient>
          <ButtonGradient size="md">Medium</ButtonGradient>
          <ButtonGradient size="lg">Large</ButtonGradient>
        </div>
      </ComponentPreview>

      {/* Combined Effects */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Combined Effects</h3>
      <ComponentPreview
        code={`<ButtonGradient
  gradient="purple-blue"
  noiseEffect="grain"
  cursorEffect="ripple"
  borderEffect="rotating"
>
  All Effects Combined
</ButtonGradient>

<ButtonGradient
  gradient="pink-purple"
  noiseEffect="animated"
  cursorEffect="glow"
>
  Noise + Glow
</ButtonGradient>`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <ButtonGradient
            gradient="purple-blue"
            noiseEffect="grain"
            cursorEffect="ripple"
            borderEffect="rotating"
            size="lg"
          >
            All Effects Combined
          </ButtonGradient>
          <ButtonGradient
            gradient="pink-purple"
            noiseEffect="animated"
            cursorEffect="glow"
            size="lg"
          >
            Noise + Glow
          </ButtonGradient>
        </div>
      </ComponentPreview>

      {/* Custom Gradient */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Custom Gradient</h3>
      <ComponentPreview
        code={`<ButtonGradient
  gradient="custom"
  gradientFrom="#ff6b6b"
  gradientVia="#feca57"
  gradientTo="#48dbfb"
>
  Custom Colors
</ButtonGradient>`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <ButtonGradient
            gradient="custom"
            gradientFrom="#ff6b6b"
            gradientVia="#feca57"
            gradientTo="#48dbfb"
          >
            Custom Colors
          </ButtonGradient>
          <ButtonGradient
            gradient="custom"
            gradientFrom="#a855f7"
            gradientTo="#ec4899"
            cursorEffect="spotlight"
          >
            Purple to Pink
          </ButtonGradient>
        </div>
      </ComponentPreview>

      {/* Installation */}
      <InstallationTabs
        componentName="button-gradient"
        dependencies={[]}
        manualSteps={manualSteps}
      />

      {/* Props */}
      <PropsTable
        props={[
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
          { name: "gradient", type: '"purple-blue" | "orange-red" | "green-teal" | "pink-purple" | "custom"', default: '"purple-blue"' },
          { name: "gradientFrom", type: "string", default: "-" },
          { name: "gradientTo", type: "string", default: "-" },
          { name: "gradientVia", type: "string", default: "-" },
          { name: "noiseEffect", type: '"none" | "grain" | "perlin" | "animated"', default: '"none"' },
          { name: "noiseOpacity", type: "number", default: "0.15" },
          { name: "cursorEffect", type: '"none" | "ripple" | "glow" | "spotlight"', default: '"none"' },
          { name: "borderEffect", type: '"none" | "rotating" | "pulsing" | "spectrum" | "glow"', default: '"none"' },
          { name: "children", type: "ReactNode", default: "-" },
          { name: "className", type: "string", default: '""' },
          { name: "disabled", type: "boolean", default: "false" },
        ]}
      />
    </ComponentPageLayout>
  );
}
