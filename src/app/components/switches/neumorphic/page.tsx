"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { SwitchNeumorphic } from "@/zeroui/components/switches";

const switchComponents = [
  { id: "switch", name: "Switch", href: "/components/switches" },
  { id: "switch-icon", name: "Switch Icon", href: "/components/switches/icon" },
  { id: "switch-label", name: "Switch Label", href: "/components/switches/label" },
  { id: "switch-theme", name: "Switch Theme", href: "/components/switches/theme" },
  { id: "switch-3d", name: "Switch 3D", href: "/components/switches/3d" },
  { id: "switch-neumorphic", name: "Switch Neumorphic", href: "/components/switches/neumorphic" },
];

const previewCode = `import { SwitchNeumorphic } from "@/zeroui/components/switches";

export default function Example() {
  return (
    <div className="flex gap-4">
      <SwitchNeumorphic />
      <SwitchNeumorphic defaultChecked />
    </div>
  );
}`;

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/switches/switch-neumorphic.tsx",
    code: `"use client";

import React, { useState } from "react";

interface SwitchNeumorphicProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  showDots?: boolean;
}

export default function SwitchNeumorphic({
  // ... props
}: SwitchNeumorphicProps) {
  // ... implementation with neumorphic shadows
}`,
  },
];

export default function SwitchNeumorphicPage() {
  return (
    <ComponentPageLayout
      componentName="Switch Neumorphic"
      description="Soft UI style toggle switch with neumorphic shadows and optional dot pattern."
      componentItems={switchComponents}
      activeComponentId="switch-neumorphic"
    >
      {/* Preview */}
      <ComponentPreview code={previewCode}>
        <div className="flex flex-wrap gap-8 items-center justify-center p-4 bg-zinc-200 dark:bg-zinc-800 rounded-xl">
          <SwitchNeumorphic />
          <SwitchNeumorphic defaultChecked />
        </div>
      </ComponentPreview>

      {/* Sizes */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Sizes</h3>
      <ComponentPreview
        code={`<SwitchNeumorphic size="sm" defaultChecked />
<SwitchNeumorphic size="md" defaultChecked />
<SwitchNeumorphic size="lg" defaultChecked />`}
      >
        <div className="flex flex-wrap gap-6 items-center justify-center p-4 bg-zinc-200 dark:bg-zinc-800 rounded-xl">
          <SwitchNeumorphic size="sm" defaultChecked />
          <SwitchNeumorphic size="md" defaultChecked />
          <SwitchNeumorphic size="lg" defaultChecked />
        </div>
      </ComponentPreview>

      {/* Without Dots */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Without Dots</h3>
      <ComponentPreview
        code={`<SwitchNeumorphic showDots={false} />
<SwitchNeumorphic showDots={false} defaultChecked />`}
      >
        <div className="flex flex-wrap gap-6 items-center justify-center p-4 bg-zinc-200 dark:bg-zinc-800 rounded-xl">
          <SwitchNeumorphic showDots={false} size="lg" />
          <SwitchNeumorphic showDots={false} size="lg" defaultChecked />
        </div>
      </ComponentPreview>

      {/* Installation */}
      <InstallationTabs
        componentName="switch-neumorphic"
        dependencies={[]}
        manualSteps={manualSteps}
      />

      {/* Props */}
      <PropsTable
        props={[
          { name: "checked", type: "boolean", default: "undefined" },
          { name: "defaultChecked", type: "boolean", default: "false" },
          { name: "onChange", type: "(checked: boolean) => void", default: "undefined" },
          { name: "disabled", type: "boolean", default: "false" },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
          { name: "showDots", type: "boolean", default: "true" },
        ]}
      />
    </ComponentPageLayout>
  );
}
