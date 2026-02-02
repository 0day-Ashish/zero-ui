"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import Button3D from "@/zeroui/components/buttons/button-3d";

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

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/buttons/button-3d.tsx",
    code: `"use client";

import React from "react";

interface Button3DProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "inverse" | "outline";
  children: React.ReactNode;
}

export default function Button3D({
  variant = "default",
  children,
  className = "",
  ...props
}: Button3DProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center px-6 py-3 font-bold transition-all duration-75 ease-in-out border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95";
  
  const variants = {
    default: "bg-white text-black border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]",
    inverse: "bg-black text-white border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]",
    outline: "bg-transparent text-black dark:text-white border-current shadow-[4px_4px_0px_0px_currentColor] hover:shadow-[2px_2px_0px_0px_currentColor] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]",
  };

  return (
    <button
      className={\`\${baseStyles} \${variants[variant]} \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
}`,
  },
];

export default function Button3DPage() {
  return (
    <ComponentPageLayout
      componentName="Button 3D"
      description="A neo-brutalist style button with hard shadows and press animations."
      componentItems={buttonComponents}
      activeComponentId="button-3d"
      prevComponent={{ name: "Button Base", href: "/components/buttons" }}
      nextComponent={{ name: "Inputs", href: "/components/inputs" }}
    >
      <ComponentPreview
        code={`<div className="flex flex-wrap gap-6 items-center justify-center p-8 bg-zinc-100 dark:bg-zinc-900 rounded-xl">
  <Button3D>Default</Button3D>
  <Button3D variant="inverse">Inverse</Button3D>
  <Button3D variant="outline">Outline</Button3D>
</div>`}
      >
        <div className="flex flex-wrap gap-6 items-center justify-center p-8 bg-zinc-100 dark:bg-zinc-900 rounded-xl">
          <Button3D>Default</Button3D>
          <Button3D variant="inverse">Inverse</Button3D>
          <Button3D variant="outline">Outline</Button3D>
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="button-3d"
        dependencies={[]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          {
            name: "variant",
            type: '"default" | "inverse" | "outline"',
            default: '"default"',
            description: "Visual style of the button",
          },
          {
            name: "children",
            type: "ReactNode",
            default: "-",
            description: "Button label or content",
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
