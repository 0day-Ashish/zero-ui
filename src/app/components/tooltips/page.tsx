"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { TooltipBase } from "@/zeroui/components/tooltips";
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
    filename: "components/tooltips/tooltip-base.tsx",
    code: `// See src/zeroui/components/tooltips/tooltip-base.tsx`,
  },
];

export default function TooltipBasePage() {
  return (
    <ComponentPageLayout
      componentName="Tooltip Base"
      description="A clean, accessible tooltip component."
      componentItems={tooltipComponents}
      activeComponentId="tooltip-base"
      prevComponent={{ name: "Inputs", href: "/components/inputs" }}
      nextComponent={{ name: "Tooltip Glass", href: "/components/tooltips/glass" }}
    >
      <div className="space-y-4">
        <ComponentPreview code={`<TooltipBase content="This is a tooltip">
  <Button>Hover me</Button>
</TooltipBase>

<TooltipBase content="Bottom tooltip" position="bottom">
  <Button variant="outline">Bottom</Button>
</TooltipBase>`}>
          <div className="flex gap-4 items-center justify-center p-12">
            <TooltipBase content="Top tooltip (default)">
              <Button>Top</Button>
            </TooltipBase>
            <TooltipBase content="Bottom tooltip" position="bottom">
              <Button variant="outline">Bottom</Button>
            </TooltipBase>
            <TooltipBase content="Left tooltip" position="left">
              <Button variant="ghost">Left</Button>
            </TooltipBase>
            <TooltipBase content="Right tooltip" position="right">
              <Button variant="secondary">Right</Button>
            </TooltipBase>
          </div>
        </ComponentPreview>
      </div>

      <InstallationTabs
        componentName="tooltip-base"
        dependencies={["clsx", "tailwind-merge"]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          { name: "content", type: "string", default: "-" },
          { name: "position", type: '"top" | "bottom" | "left" | "right"', default: '"top"' },
          { name: "className", type: "string", default: '""' },
        ]}
      />
    </ComponentPageLayout>
  );
}
