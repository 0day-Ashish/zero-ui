"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { InputGradient } from "@/zeroui/components/inputs";

const inputComponents = [
  { id: "input-base", name: "Input Base", href: "/components/inputs" },
  { id: "input-floating", name: "Input Floating", href: "/components/inputs/floating" },
  { id: "input-icon", name: "Input Icon", href: "/components/inputs/icon" },
  { id: "input-gradient", name: "Input Gradient", href: "/components/inputs/gradient" },
  { id: "input-otp", name: "Input OTP", href: "/components/inputs/otp" },
  { id: "input-file", name: "Input File", href: "/components/inputs/file" },
  { id: "input-tags", name: "Input Tags", href: "/components/inputs/tags" },
  { id: "textarea-auto", name: "Textarea Auto", href: "/components/inputs/textarea" },
];

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Copy the code for the input component.",
    filename: "components/inputs/input-gradient.tsx",
    code: `// See src/zeroui/components/inputs/input-gradient.tsx`,
  },
];

export default function InputGradientPage() {
  return (
    <ComponentPageLayout
      componentName="Input Gradient"
      description="Premium input field with gradient border glow effects."
      componentItems={inputComponents}
      activeComponentId="input-gradient"
      prevComponent={{ name: "Input Icon", href: "/components/inputs/icon" }}
      nextComponent={{ name: "Input OTP", href: "/components/inputs/otp" }}
    >
      <div className="space-y-4">
        <ComponentPreview code={`<InputGradient placeholder="Default gradient" />
<InputGradient gradientFrom="#ec4899" gradientTo="#8b5cf6" placeholder="Custom gradient" />`}>
          <div className="grid gap-6 w-full max-w-md">
            <InputGradient placeholder="Default gradient" />
            <InputGradient gradientFrom="#ec4899" gradientTo="#8b5cf6" placeholder="Custom gradient" />
          </div>
        </ComponentPreview>
      </div>

      <InstallationTabs
        componentName="input-gradient"
        dependencies={[]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          { name: "gradientFrom", type: "string", default: '"#8b5cf6"' },
          { name: "gradientTo", type: "string", default: '"#3b82f6"' },
          { name: "wrapperClassName", type: "string", default: '""' },
        ]}
      />
    </ComponentPageLayout>
  );
}
