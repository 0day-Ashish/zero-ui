"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { TooltipGlass } from "@/zeroui/components/tooltips";
import { Button } from "@/zeroui/components/buttons";

const tooltipComponents = [
  { id: "tooltip-base", name: "Tooltip Base", href: "/components/tooltips" },
  { id: "tooltip-glass", name: "Tooltip Glass", href: "/components/tooltips/glass" },
  { id: "tooltip-neon", name: "Tooltip Neon", href: "/components/tooltips/neon" },
  { id: "tooltip-minimal", name: "Tooltip Minimal", href: "/components/tooltips/minimal" },
];

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Copy the code for the tooltip component.",
    filename: "components/tooltips/tooltip-glass.tsx",
    code: `// See src/zeroui/components/tooltips/tooltip-glass.tsx`,
  },
];

export default function TooltipGlassPage() {
  return (
    <ComponentPageLayout
      componentName="Tooltip Glass"
      description="Frosted glass effect tooltip for modern UIs."
      componentItems={tooltipComponents}
      activeComponentId="tooltip-glass"
      prevComponent={{ name: "Tooltip Base", href: "/components/tooltips" }}
      nextComponent={{ name: "Tooltip Neon", href: "/components/tooltips/neon" }}
    >
      <div className="space-y-4">
        <ComponentPreview code={`<TooltipGlass content="Glass Effect">
  <Button variant="outline">Hover me</Button>
</TooltipGlass>`}>
          <div className="flex gap-4 items-center justify-center p-12 bg-zinc-100 dark:bg-zinc-900 rounded-xl relative overflow-hidden">
            {/* Background decoration to show blur */}
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-blue-500/20" />
            <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-pink-500/30 rounded-full blur-xl" />

            <TooltipGlass content="Glassmorphism">
              <Button className="bg-white/80 dark:bg-black/50 backdrop-blur-sm border border-white/20">Hover Me</Button>
            </TooltipGlass>
          </div>
        </ComponentPreview>
      </div>

      <InstallationTabs
        componentName="tooltip-glass"
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
