"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { TooltipHologram } from "@/zeroui/components/tooltips";
import { Button } from "@/zeroui/components/buttons";

const tooltipComponents = [
  { id: "tooltip-base", name: "Tooltip Base", href: "/components/tooltips" },
  { id: "tooltip-glass", name: "Tooltip Glass", href: "/components/tooltips/glass" },
  { id: "tooltip-neon", name: "Tooltip Neon", href: "/components/tooltips/neon" },
  { id: "tooltip-minimal", name: "Tooltip Minimal", href: "/components/tooltips/minimal" },
  { id: "tooltip-hologram", name: "Tooltip Hologram", href: "/components/tooltips/hologram" },
  { id: "tooltip-glitch", name: "Tooltip Glitch", href: "/components/tooltips/glitch" },
  { id: "tooltip-smart", name: "Tooltip Smart", href: "/components/tooltips/smart" },
];

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Copy the code for the tooltip component.",
    filename: "components/tooltips/tooltip-hologram.tsx",
    code: `// See src/zeroui/components/tooltips/tooltip-hologram.tsx`,
  },
];

export default function TooltipHologramPage() {
  return (
    <ComponentPageLayout
      componentName="Tooltip Hologram"
      description="A 3D holographic tooltip that tilts with cursor movement."
      componentItems={tooltipComponents}
      activeComponentId="tooltip-hologram"
      prevComponent={{ name: "Tooltip Minimal", href: "/components/tooltips/minimal" }}
      nextComponent={{ name: "Tooltip Glitch", href: "/components/tooltips/glitch" }}
    >
      <div className="space-y-4">
        <ComponentPreview code={`<TooltipHologram content="Holographic Data" position="top">
  <Button variant="outline" className="border-cyan-500/50 text-cyan-500 hover:bg-cyan-950/20">
    Hover Me
  </Button>
</TooltipHologram>`}>
          <div className="flex gap-8 items-center justify-center p-20 bg-zinc-950 rounded-xl relative overflow-hidden perspective-1000">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent pointer-events-none" />

            <TooltipHologram content="SECURE CONNECTION" position="top">
              <Button className="bg-black border border-cyan-500/50 text-cyan-400 hover:bg-cyan-950/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-500 tracking-widest text-xs uppercase">
                System link
              </Button>
            </TooltipHologram>
          </div>
        </ComponentPreview>
      </div>

      <InstallationTabs
        componentName="tooltip-hologram"
        dependencies={["clsx", "tailwind-merge"]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          { name: "content", type: "string", default: "-" },
          { name: "position", type: '"top" | "bottom" | "left" | "right"', default: '"top"' },
        ]}
      />
    </ComponentPageLayout>
  );
}
