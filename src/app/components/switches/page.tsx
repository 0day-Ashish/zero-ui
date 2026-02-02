"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import {
  Switch,
  SwitchIcon,
  SwitchLabel,
  SwitchTheme,
  Switch3D,
  SwitchNeumorphic,
} from "@/zeroui/components/switches";

const switchComponents = [
  { id: "switch", name: "Switch", href: "/components/switches" },
  { id: "switch-icon", name: "Switch Icon", href: "/components/switches/icon" },
  { id: "switch-label", name: "Switch Label", href: "/components/switches/label" },
  { id: "switch-theme", name: "Switch Theme", href: "/components/switches/theme" },
  { id: "switch-3d", name: "Switch 3D", href: "/components/switches/3d" },
  { id: "switch-neumorphic", name: "Switch Neumorphic", href: "/components/switches/neumorphic" },
];

const previewCode = `import { Switch } from "@/zeroui/components/switches";

export default function Example() {
  return (
    <div className="flex gap-4">
      <Switch />
      <Switch defaultChecked />
      <Switch color="green" defaultChecked />
    </div>
  );
}`;

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/switches/switch.tsx",
    code: `"use client";

import React, { useState } from "react";

interface SwitchProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  color?: "blue" | "green" | "violet" | "red" | "orange";
}

export default function Switch({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  size = "md",
  color = "blue",
  className = "",
  ...props
}: SwitchProps) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isChecked = checked !== undefined ? checked : internalChecked;

  const handleToggle = () => {
    if (disabled) return;
    const newValue = !isChecked;
    if (checked === undefined) {
      setInternalChecked(newValue);
    }
    onChange?.(newValue);
  };

  // ... rest of implementation
}`,
  },
];

export default function SwitchesPage() {
  return (
    <ComponentPageLayout
      componentName="Switch"
      description="Toggle switches with smooth animations, multiple sizes, and color variants."
      componentItems={switchComponents}
      activeComponentId="switch"
    >
      {/* Basic Switch Preview */}
      <ComponentPreview code={previewCode}>
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <Switch />
          <Switch defaultChecked />
          <Switch color="green" defaultChecked />
          <Switch color="violet" defaultChecked />
          <Switch color="red" />
          <Switch color="orange" defaultChecked />
        </div>
      </ComponentPreview>

      {/* Sizes */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Sizes</h3>
      <ComponentPreview
        code={`<Switch size="sm" defaultChecked />
<Switch size="md" defaultChecked />
<Switch size="lg" defaultChecked />`}
      >
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <Switch size="sm" defaultChecked />
          <Switch size="md" defaultChecked />
          <Switch size="lg" defaultChecked />
        </div>
      </ComponentPreview>

      {/* With Icon */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">With Checkmark Icon</h3>
      <ComponentPreview
        code={`<SwitchIcon defaultChecked />
<SwitchIcon color="green" defaultChecked />
<SwitchIcon color="violet" />`}
      >
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <SwitchIcon defaultChecked size="lg" />
          <SwitchIcon color="green" defaultChecked size="lg" />
          <SwitchIcon color="violet" size="lg" />
        </div>
      </ComponentPreview>

      {/* With Label */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">With Label</h3>
      <ComponentPreview
        code={`<SwitchLabel label="Airplane mode" />
<SwitchLabel label="Notifications" variant="filled" />`}
      >
        <div className="flex flex-col gap-6 items-center justify-center">
          <SwitchLabel label="Airplane mode" size="md" />
          <SwitchLabel label="Notifications" variant="filled" defaultChecked />
          <SwitchLabel label="Dark mode" labelPosition="right" defaultChecked />
        </div>
      </ComponentPreview>

      {/* Theme Toggle */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Theme Toggle (Day/Night)</h3>
      <ComponentPreview
        code={`<SwitchTheme />
<SwitchTheme defaultChecked />`}
      >
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <SwitchTheme />
          <SwitchTheme defaultChecked />
        </div>
      </ComponentPreview>

      {/* 3D Switch */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">3D Switch</h3>
      <ComponentPreview
        code={`<Switch3D />
<Switch3D defaultChecked />`}
      >
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <Switch3D />
          <Switch3D defaultChecked />
          <Switch3D size="lg" defaultChecked />
        </div>
      </ComponentPreview>

      {/* Neumorphic Switch */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Neumorphic Switch</h3>
      <ComponentPreview
        code={`<SwitchNeumorphic />
<SwitchNeumorphic defaultChecked />`}
      >
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <SwitchNeumorphic />
          <SwitchNeumorphic defaultChecked />
          <SwitchNeumorphic size="lg" showDots={false} defaultChecked />
        </div>
      </ComponentPreview>

      {/* Disabled State */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Disabled State</h3>
      <ComponentPreview
        code={`<Switch disabled />
<Switch disabled defaultChecked />`}
      >
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <Switch disabled />
          <Switch disabled defaultChecked />
          <SwitchIcon disabled defaultChecked />
        </div>
      </ComponentPreview>

      {/* Installation */}
      <InstallationTabs
        componentName="switch"
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
          { name: "className", type: "string", default: '""' },
        ]}
      />
    </ComponentPageLayout>
  );
}
