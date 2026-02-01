"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { Button } from "@/zeroui/components/buttons";

// Different button components for sidebar
const buttonComponents = [
  { id: "button-basic", name: "Button Basic", href: "/components/buttons" },
  { id: "button-icon", name: "Button Icon", href: "/components/buttons/icon" },
  { id: "button-loading", name: "Button Loading", href: "/components/buttons/loading" },
  { id: "button-group", name: "Button Group", href: "/components/buttons/group" },
  { id: "button-social", name: "Button Social", href: "/components/buttons/social" },
  { id: "button-gradient", name: "Button Gradient", href: "/components/buttons/gradient" },
  { id: "button-glass", name: "Button Glass", href: "/components/buttons/glass" },
];

// Code for preview
const previewCode = `import { Button } from "@/zeroui/components/buttons";

export default function Example() {
  return (
    <div className="flex gap-4">
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}`;

// Manual installation steps
const manualSteps = [
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/buttons/button-basic.tsx",
    code: `"use client";

import React from "react";

interface ButtonBasicProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "destructive" | "link";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function ButtonBasic({
  variant = "default",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonBasicProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default:
      "bg-zinc-900 text-white hover:bg-zinc-800 focus:ring-zinc-900 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100",
    outline:
      "border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-100 dark:border-white dark:text-white dark:hover:bg-zinc-800",
    ghost:
      "text-zinc-900 hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-800",
    destructive:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600",
    link:
      "text-zinc-900 underline underline-offset-4 hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={\`\${baseStyles} \${variants[variant]} \${sizes[size]} \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
}`,
  },
  {
    title: "Import and use the component",
    description: "Import the button in your page or component:",
    filename: "app/page.tsx",
    code: `import ButtonBasic from "@/components/buttons/button-basic";

export default function Page() {
  return (
    <ButtonBasic variant="default" size="md">
      Click me
    </ButtonBasic>
  );
}`,
  },
];

export default function ButtonsPage() {
  return (
    <ComponentPageLayout
      componentName="Button"
      description="A versatile button component with multiple variants and sizes."
      componentItems={buttonComponents}
      activeComponentId="button-basic"
      prevComponent={{ name: "Badge", href: "/components/badge" }}
      nextComponent={{ name: "Card", href: "/components/card" }}
    >
      {/* Component Preview with all variants */}
      <ComponentPreview code={previewCode}>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Button variant="default">Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      </ComponentPreview>

      {/* Sizes showcase */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Sizes</h3>
      <ComponentPreview
        code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </ComponentPreview>

      {/* Installation */}
      <InstallationTabs
        componentName="button-basic"
        dependencies={[]}
        manualSteps={manualSteps}
      />

      {/* Props */}
      <PropsTable
        props={[
          { name: "variant", type: '"default" | "outline" | "ghost" | "destructive" | "link"', default: '"default"' },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
          { name: "children", type: "ReactNode", default: "-" },
          { name: "className", type: "string", default: '""' },
          { name: "disabled", type: "boolean", default: "false" },
        ]}
      />
    </ComponentPageLayout>
  );
}
