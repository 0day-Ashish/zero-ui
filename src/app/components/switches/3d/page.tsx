"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { Switch3D } from "@/zeroui/components/switches";

const switchComponents = [
  { id: "switch", name: "Switch", href: "/components/switches" },
  { id: "switch-icon", name: "Switch Icon", href: "/components/switches/icon" },
  { id: "switch-label", name: "Switch Label", href: "/components/switches/label" },
  { id: "switch-theme", name: "Switch Theme", href: "/components/switches/theme" },
  { id: "switch-3d", name: "Switch 3D", href: "/components/switches/3d" },
  { id: "switch-neumorphic", name: "Switch Neumorphic", href: "/components/switches/neumorphic" },
];

const previewCode = `import { Switch3D } from "@/zeroui/components/switches";

export default function Example() {
  return (
    <div className="flex gap-4">
      <Switch3D />
      <Switch3D defaultChecked />
    </div>
  );
}`;

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/switches/switch-3d.tsx",
    code: `"use client";

import React, { useState } from "react";

interface Switch3DProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Switch3D({
  // ... props
}: Switch3DProps) {
  // ... implementation with 3D perspective effects
}`,
  },
];

export default function Switch3DPage() {
  return (
    <ComponentPageLayout
      componentName="Switch 3D"
      description="Toggle switch with 3D perspective flip effect and ON/OFF labels."
      componentItems={switchComponents}
      activeComponentId="switch-3d"
    >
      {/* Preview */}
      <ComponentPreview code={previewCode}>
        <div className="flex flex-wrap gap-8 items-center justify-center">
          <Switch3D />
          <Switch3D defaultChecked />
        </div>
      </ComponentPreview>

      {/* Sizes */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Sizes</h3>
      <ComponentPreview
        code={`<Switch3D size="sm" defaultChecked />
<Switch3D size="md" defaultChecked />
<Switch3D size="lg" defaultChecked />`}
      >
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <Switch3D size="sm" defaultChecked />
          <Switch3D size="md" defaultChecked />
          <Switch3D size="lg" defaultChecked />
        </div>
      </ComponentPreview>

      {/* Installation */}
      <InstallationTabs
        componentName="switch-3d"
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
        ]}
      />
    </ComponentPageLayout>
  );
}
