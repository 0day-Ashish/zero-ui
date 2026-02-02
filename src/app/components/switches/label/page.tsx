"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { SwitchLabel } from "@/zeroui/components/switches";

const switchComponents = [
  { id: "switch", name: "Switch", href: "/components/switches" },
  { id: "switch-icon", name: "Switch Icon", href: "/components/switches/icon" },
  { id: "switch-label", name: "Switch Label", href: "/components/switches/label" },
  { id: "switch-theme", name: "Switch Theme", href: "/components/switches/theme" },
  { id: "switch-3d", name: "Switch 3D", href: "/components/switches/3d" },
  { id: "switch-neumorphic", name: "Switch Neumorphic", href: "/components/switches/neumorphic" },
];

const previewCode = `import { SwitchLabel } from "@/zeroui/components/switches";

export default function Example() {
  return (
    <div className="flex flex-col gap-4">
      <SwitchLabel label="Airplane mode" />
      <SwitchLabel label="Notifications" defaultChecked />
    </div>
  );
}`;

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/switches/switch-label.tsx",
    code: `"use client";

import React, { useState } from "react";

interface SwitchLabelProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label: string;
  labelPosition?: "left" | "right";
  size?: "sm" | "md" | "lg";
  variant?: "filled" | "outline";
}

export default function SwitchLabel({
  // ... props
}: SwitchLabelProps) {
  // ... implementation
}`,
  },
];

export default function SwitchLabelPage() {
  return (
    <ComponentPageLayout
      componentName="Switch Label"
      description="Toggle switch with integrated label text, supporting outline and filled variants."
      componentItems={switchComponents}
      activeComponentId="switch-label"
    >
      {/* Preview */}
      <ComponentPreview code={previewCode}>
        <div className="flex flex-col gap-6 items-center justify-center">
          <SwitchLabel label="Airplane mode" />
          <SwitchLabel label="Notifications" defaultChecked />
        </div>
      </ComponentPreview>

      {/* Variants */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Variants</h3>
      <ComponentPreview
        code={`<SwitchLabel label="Outline style" variant="outline" />
<SwitchLabel label="Filled style" variant="filled" defaultChecked />`}
      >
        <div className="flex flex-col gap-6 items-center justify-center">
          <SwitchLabel label="Outline style" variant="outline" />
          <SwitchLabel label="Filled style" variant="filled" defaultChecked />
        </div>
      </ComponentPreview>

      {/* Label Position */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Label Position</h3>
      <ComponentPreview
        code={`<SwitchLabel label="Label on left" labelPosition="left" />
<SwitchLabel label="Label on right" labelPosition="right" />`}
      >
        <div className="flex flex-col gap-6 items-center justify-center">
          <SwitchLabel label="Label on left" labelPosition="left" defaultChecked />
          <SwitchLabel label="Label on right" labelPosition="right" defaultChecked />
        </div>
      </ComponentPreview>

      {/* Sizes */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Sizes</h3>
      <ComponentPreview
        code={`<SwitchLabel label="Small" size="sm" />
<SwitchLabel label="Medium" size="md" />
<SwitchLabel label="Large" size="lg" />`}
      >
        <div className="flex flex-col gap-6 items-center justify-center">
          <SwitchLabel label="Small" size="sm" defaultChecked />
          <SwitchLabel label="Medium" size="md" defaultChecked />
          <SwitchLabel label="Large" size="lg" defaultChecked />
        </div>
      </ComponentPreview>

      {/* Installation */}
      <InstallationTabs
        componentName="switch-label"
        dependencies={[]}
        manualSteps={manualSteps}
      />

      {/* Props */}
      <PropsTable
        props={[
          { name: "label", type: "string", default: "required" },
          { name: "checked", type: "boolean", default: "undefined" },
          { name: "defaultChecked", type: "boolean", default: "false" },
          { name: "onChange", type: "(checked: boolean) => void", default: "undefined" },
          { name: "disabled", type: "boolean", default: "false" },
          { name: "labelPosition", type: '"left" | "right"', default: '"left"' },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
          { name: "variant", type: '"filled" | "outline"', default: '"outline"' },
        ]}
      />
    </ComponentPageLayout>
  );
}
