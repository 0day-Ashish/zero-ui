"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { TooltipNeon } from "@/zeroui/components/tooltips";
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
    filename: "components/tooltips/tooltip-neon.tsx",
    code: `// See src/zeroui/components/tooltips/tooltip-neon.tsx`,
  },
];

export default function TooltipNeonPage() {
  return (
    <ComponentPageLayout
      componentName="Tooltip Neon"
      description="Cyberpunk-inspired glowing tooltip."
      componentItems={tooltipComponents}
      activeComponentId="tooltip-neon"
      prevComponent={{ name: "Tooltip Glass", href: "/components/tooltips/glass" }}
      nextComponent={{ name: "Tooltip Minimal", href: "/components/tooltips/minimal" }}
    >
      <div className="space-y-4">
        <ComponentPreview code={`<TooltipNeon content="SYSTEM READY" color="cyan">
  <Button variant="outline">Check Status</Button>
</TooltipNeon>

<TooltipNeon content="ACCESS DENIED" color="pink">
  <Button variant="destructive">Delete Base</Button>
</TooltipNeon>`}>
          <div className="flex gap-8 items-center justify-center p-12 bg-black rounded-xl">
            <TooltipNeon content="Violet Glow" color="violet">
              <Button className="border border-violet-500 text-violet-500 hover:bg-violet-950/30 bg-black">Violet</Button>
            </TooltipNeon>
            <TooltipNeon content="Cyan Glow" color="cyan">
              <Button className="border border-cyan-500 text-cyan-500 hover:bg-cyan-950/30 bg-black">Cyan</Button>
            </TooltipNeon>
            <TooltipNeon content="Pink Glow" color="pink">
              <Button className="border border-pink-500 text-pink-500 hover:bg-pink-950/30 bg-black">Pink</Button>
            </TooltipNeon>
          </div>
        </ComponentPreview>
      </div>

      <InstallationTabs
        componentName="tooltip-neon"
        dependencies={["clsx", "tailwind-merge"]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          { name: "content", type: "string", default: "-" },
          { name: "color", type: '"violet" | "cyan" | "pink"', default: '"violet"' },
          { name: "position", type: '"top" | "bottom" | "left" | "right"', default: '"top"' },
        ]}
      />
    </ComponentPageLayout>
  );
}
