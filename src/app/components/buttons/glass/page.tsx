"use client";

import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { ButtonGlass } from "@/zeroui/components/buttons";

// Different button components for sidebar
const buttonComponents = [
  { id: "button-basic", name: "Button Basic", href: "/components/buttons" },
  { id: "button-icon", name: "Button Icon", href: "/components/buttons/icon" },
  { id: "button-loading", name: "Button Loading", href: "/components/buttons/loading" },
  { id: "button-group", name: "Button Group", href: "/components/buttons/group" },
  { id: "button-social", name: "Button Social", href: "/components/buttons/social" },
  { id: "button-gradient", name: "Button Gradient", href: "/components/buttons/gradient" },
  { id: "button-glass", name: "Button Glass", href: "/components/buttons/glass" },
  { id: "button-3d", name: "Button 3D", href: "/components/buttons/3d" },
];

// Manual installation steps
const manualSteps = [
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/buttons/button-glass.tsx",
    code: `"use client";

import React from "react";

type Size = "sm" | "md" | "lg";
type GlassVariant = "default" | "secondary" | "dark";

interface ButtonGlassProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  variant?: GlassVariant;
  children: React.ReactNode;
}

export default function ButtonGlass({
  size = "md",
  variant = "default",
  children,
  className = "",
  disabled,
  ...props
}: ButtonGlassProps) {
  // Component implementation...
}`,
  },
];

export default function ButtonGlassPage() {
  return (
    <ComponentPageLayout
      componentName="Button Glass"
      description="Glassmorphism buttons with blur effects and transparency."
      componentItems={buttonComponents}
      activeComponentId="button-glass"
      prevComponent={{ name: "Button Gradient", href: "/components/buttons/gradient" }}
    >
      {/* Glass Variants */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Glass Variants</h3>
      <ComponentPreview
        code={`<ButtonGlass variant="default">Default</ButtonGlass>
<ButtonGlass variant="secondary">Secondary</ButtonGlass>
<ButtonGlass variant="dark">Dark</ButtonGlass>`}
      >
        <div
          className="flex flex-wrap gap-4 items-center justify-center p-8 rounded-xl bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800')",
          }}
        >
          <ButtonGlass variant="default">Default</ButtonGlass>
          <ButtonGlass variant="secondary">Secondary</ButtonGlass>
          <ButtonGlass variant="dark">Dark</ButtonGlass>
        </div>
      </ComponentPreview>

      {/* Sizes */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Sizes</h3>
      <ComponentPreview
        code={`<ButtonGlass size="sm">Small</ButtonGlass>
<ButtonGlass size="md">Medium</ButtonGlass>
<ButtonGlass size="lg">Large</ButtonGlass>`}
      >
        <div
          className="flex flex-wrap gap-4 items-center justify-center p-8 rounded-xl bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800')",
          }}
        >
          <ButtonGlass size="sm">Small</ButtonGlass>
          <ButtonGlass size="md">Medium</ButtonGlass>
          <ButtonGlass size="lg">Large</ButtonGlass>
        </div>
      </ComponentPreview>

      {/* On Solid Background */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">On Solid Background</h3>
      <ComponentPreview
        code={`<ButtonGlass>Default Glass</ButtonGlass>
<ButtonGlass variant="secondary">Secondary Glass</ButtonGlass>
<ButtonGlass variant="dark">Dark Glass</ButtonGlass>`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center p-8 rounded-xl bg-zinc-200 dark:bg-zinc-800">
          <ButtonGlass>Default Glass</ButtonGlass>
          <ButtonGlass variant="secondary">Secondary Glass</ButtonGlass>
          <ButtonGlass variant="dark">Dark Glass</ButtonGlass>
        </div>
      </ComponentPreview>

      {/* Installation */}
      <InstallationTabs
        componentName="button-glass"
        dependencies={[]}
        manualSteps={manualSteps}
      />

      {/* Props */}
      <PropsTable
        props={[
          { name: "variant", type: '"default" | "secondary" | "dark"', default: '"default"' },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
          { name: "children", type: "ReactNode", default: "-" },
          { name: "className", type: "string", default: '""' },
          { name: "disabled", type: "boolean", default: "false" },
        ]}
      />
    </ComponentPageLayout>
  );
}
