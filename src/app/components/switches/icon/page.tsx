"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { SwitchIcon } from "@/zeroui/components/switches";

const switchComponents = [
  { id: "switch", name: "Switch", href: "/components/switches" },
  { id: "switch-icon", name: "Switch Icon", href: "/components/switches/icon" },
  { id: "switch-label", name: "Switch Label", href: "/components/switches/label" },
  { id: "switch-theme", name: "Switch Theme", href: "/components/switches/theme" },
  { id: "switch-3d", name: "Switch 3D", href: "/components/switches/3d" },
  { id: "switch-neumorphic", name: "Switch Neumorphic", href: "/components/switches/neumorphic" },
];

const previewCode = `import { SwitchIcon } from "@/zeroui/components/switches";

export default function Example() {
  return (
    <div className="flex gap-4">
      <SwitchIcon defaultChecked />
      <SwitchIcon color="green" defaultChecked />
      <SwitchIcon color="violet" />
    </div>
  );
}`;

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/switches/switch-icon.tsx",
    code: `"use client";

import React, { useState } from "react";

interface SwitchIconProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  color?: "blue" | "green" | "violet" | "red" | "orange";
}

export default function SwitchIcon({
  // ... props
}: SwitchIconProps) {
  // ... implementation
}`,
  },
];

export default function SwitchIconPage() {
  return (
    <ComponentPageLayout
      componentName="Switch Icon"
      description="Toggle switch with animated checkmark icon and ring indicator when active."
      componentItems={switchComponents}
      activeComponentId="switch-icon"
    >
      {/* Preview */}
      <ComponentPreview code={previewCode}>
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <SwitchIcon defaultChecked size="lg" />
          <SwitchIcon color="green" defaultChecked size="lg" />
          <SwitchIcon color="violet" size="lg" />
        </div>
      </ComponentPreview>

      {/* Colors */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Colors</h3>
      <ComponentPreview
        code={`<SwitchIcon color="blue" defaultChecked />
<SwitchIcon color="green" defaultChecked />
<SwitchIcon color="violet" defaultChecked />
<SwitchIcon color="red" defaultChecked />
<SwitchIcon color="orange" defaultChecked />`}
      >
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <SwitchIcon color="blue" defaultChecked size="lg" />
          <SwitchIcon color="green" defaultChecked size="lg" />
          <SwitchIcon color="violet" defaultChecked size="lg" />
          <SwitchIcon color="red" defaultChecked size="lg" />
          <SwitchIcon color="orange" defaultChecked size="lg" />
        </div>
      </ComponentPreview>

      {/* Sizes */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Sizes</h3>
      <ComponentPreview
        code={`<SwitchIcon size="sm" defaultChecked />
<SwitchIcon size="md" defaultChecked />
<SwitchIcon size="lg" defaultChecked />`}
      >
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <SwitchIcon size="sm" defaultChecked />
          <SwitchIcon size="md" defaultChecked />
          <SwitchIcon size="lg" defaultChecked />
        </div>
      </ComponentPreview>

      {/* Installation */}
      <InstallationTabs
        componentName="switch-icon"
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
          { name: "color", type: '"blue" | "green" | "violet" | "red" | "orange"', default: '"blue"' },
        ]}
      />
    </ComponentPageLayout>
  );
}
