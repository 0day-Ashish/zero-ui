"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { TooltipSmart } from "@/zeroui/components/tooltips";
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
    filename: "components/tooltips/tooltip-smart.tsx",
    code: `// See src/zeroui/components/tooltips/tooltip-smart.tsx`,
  },
];

export default function TooltipSmartPage() {
  return (
    <ComponentPageLayout
      componentName="Tooltip Smart"
      description="A tooltip that fluidly follows the cursor."
      componentItems={tooltipComponents}
      activeComponentId="tooltip-smart"
      prevComponent={{ name: "Tooltip Glitch", href: "/components/tooltips/glitch" }}
      nextComponent={{ name: "Components", href: "/components" }}
    >
      <div className="space-y-4">
        <ComponentPreview code={`<TooltipSmart content="Following Cursor...">
  <div className="h-32 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center">
    Move mouse here
  </div>
</TooltipSmart>`}>
          <div className="flex gap-4 items-center justify-center p-8 bg-white dark:bg-black rounded-xl">
            <TooltipSmart content="Exploring...">
              <div className="w-64 h-40 bg-gradient-to-br from-violet-500/10 to-blue-500/10 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 font-medium">
                Hover and move around
              </div>
            </TooltipSmart>
          </div>
        </ComponentPreview>
      </div>

      <InstallationTabs
        componentName="tooltip-smart"
        dependencies={["clsx", "tailwind-merge"]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          { name: "content", type: "string", default: "-" },
        ]}
      />
    </ComponentPageLayout>
  );
}
