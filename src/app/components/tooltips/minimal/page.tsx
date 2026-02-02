"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { TooltipMinimal } from "@/zeroui/components/tooltips";
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
    filename: "components/tooltips/tooltip-minimal.tsx",
    code: `// See src/zeroui/components/tooltips/tooltip-minimal.tsx`,
  },
];

export default function TooltipMinimalPage() {
  return (
    <ComponentPageLayout
      componentName="Tooltip Minimal"
      description="Ultra-clean tooltip with just text."
      componentItems={tooltipComponents}
      activeComponentId="tooltip-minimal"
      prevComponent={{ name: "Tooltip Neon", href: "/components/tooltips/neon" }}
      nextComponent={{ name: "Components", href: "/components" }}
    >
      <div className="space-y-4">
        <ComponentPreview code={`<TooltipMinimal content="Just text">
  <span className="cursor-help underline decoration-dotted">Hover text</span>
</TooltipMinimal>`}>
          <div className="flex gap-12 items-center justify-center p-12">
            <TooltipMinimal content="Edit Profile">
              <span className="text-sm font-medium cursor-pointer text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Edit</span>
            </TooltipMinimal>

            <TooltipMinimal content="Delete Item">
              <span className="text-sm font-medium cursor-pointer text-zinc-500 hover:text-red-500 transition-colors">Delete</span>
            </TooltipMinimal>

            <TooltipMinimal content="Copied!">
              <Button variant="ghost" size="sm">Copy Link</Button>
            </TooltipMinimal>
          </div>
        </ComponentPreview>
      </div>

      <InstallationTabs
        componentName="tooltip-minimal"
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
