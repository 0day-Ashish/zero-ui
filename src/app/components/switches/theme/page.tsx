"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { SwitchTheme } from "@/zeroui/components/switches";

const switchComponents = [
  { id: "switch", name: "Switch", href: "/components/switches" },
  { id: "switch-icon", name: "Switch Icon", href: "/components/switches/icon" },
  { id: "switch-label", name: "Switch Label", href: "/components/switches/label" },
  { id: "switch-theme", name: "Switch Theme", href: "/components/switches/theme" },
  { id: "switch-3d", name: "Switch 3D", href: "/components/switches/3d" },
  { id: "switch-neumorphic", name: "Switch Neumorphic", href: "/components/switches/neumorphic" },
];

const previewCode = `import { SwitchTheme } from "@/zeroui/components/switches";

export default function Example() {
  const [isDark, setIsDark] = useState(false);

  return (
    <SwitchTheme
      checked={isDark}
      onChange={(checked) => setIsDark(checked)}
    />
  );
}`;

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/switches/switch-theme.tsx",
    code: `"use client";

import React, { useState } from "react";

interface SwitchThemeProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export default function SwitchTheme({
  // ... props
}: SwitchThemeProps) {
  // ... implementation with sun/moon icons and animations
}`,
  },
];

export default function SwitchThemePage() {
  return (
    <ComponentPageLayout
      componentName="Switch Theme"
      description="Beautiful day/night theme toggle with animated sun, moon, stars, and clouds."
      componentItems={switchComponents}
      activeComponentId="switch-theme"
    >
      {/* Preview */}
      <ComponentPreview code={previewCode}>
        <div className="flex flex-wrap gap-8 items-center justify-center py-4">
          <div className="flex flex-col items-center gap-2">
            <SwitchTheme />
            <span className="text-sm text-zinc-500 dark:text-zinc-400">Light mode</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SwitchTheme defaultChecked />
            <span className="text-sm text-zinc-500 dark:text-zinc-400">Dark mode</span>
          </div>
        </div>
      </ComponentPreview>

      {/* Usage Example */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Usage with Theme</h3>
      <ComponentPreview
        code={`const [isDark, setIsDark] = useState(false);

useEffect(() => {
  document.documentElement.classList.toggle('dark', isDark);
}, [isDark]);

<SwitchTheme checked={isDark} onChange={setIsDark} />`}
      >
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <SwitchTheme />
        </div>
      </ComponentPreview>

      {/* Installation */}
      <InstallationTabs
        componentName="switch-theme"
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
        ]}
      />
    </ComponentPageLayout>
  );
}
