"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { TooltipGlitch } from "@/zeroui/components/tooltips";
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
    filename: "components/tooltips/tooltip-glitch.tsx",
    code: `// See src/zeroui/components/tooltips/tooltip-glitch.tsx`,
  },
];

export default function TooltipGlitchPage() {
  return (
    <ComponentPageLayout
      componentName="Tooltip Glitch"
      description="Cyberpunk-inspired glitch effect tooltip."
      componentItems={tooltipComponents}
      activeComponentId="tooltip-glitch"
      prevComponent={{ name: "Tooltip Hologram", href: "/components/tooltips/hologram" }}
      nextComponent={{ name: "Tooltip Smart", href: "/components/tooltips/smart" }}
    >
      <div className="space-y-4">
        <ComponentPreview code={`<TooltipGlitch content="ERROR DETECTED" position="right">
  <Button variant="destructive">Delete System32</Button>
</TooltipGlitch>`}>
          <div className="flex gap-8 items-center justify-center p-20 bg-zinc-900 rounded-xl relative overflow-hidden">

            <TooltipGlitch content="ACCESS GRANTED" position="top">
              <Button className="bg-zinc-800 border-l-4 border-green-500 rounded-none hover:bg-zinc-700">Login</Button>
            </TooltipGlitch>

            <TooltipGlitch content="CRITICAL FAILURE" position="bottom">
              <Button className="bg-zinc-800 border-l-4 border-red-500 rounded-none hover:bg-zinc-700">Reset</Button>
            </TooltipGlitch>
          </div>
        </ComponentPreview>
      </div>

      <InstallationTabs
        componentName="tooltip-glitch"
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
