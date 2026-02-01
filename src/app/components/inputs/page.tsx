"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { InputBase } from "@/zeroui/components/inputs";

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
    filename: "components/inputs/input-base.tsx",
    code: `// See src/zeroui/components/inputs/input-base.tsx`,
  },
];

export default function InputsPage() {
  return (
    <ComponentPageLayout
      componentName="Input Base"
      description="A versatile base input field with multiple variants."
      componentItems={inputComponents}
      activeComponentId="input-base"
      prevComponent={{ name: "Buttons", href: "/components/buttons" }}
      nextComponent={{ name: "Input Floating", href: "/components/inputs/floating" }}
    >
      {/* Input Base */}
      <div className="space-y-4">
        <ComponentPreview code={`<InputBase label="Default" placeholder="Default variant" />
<InputBase label="Filled" variant="filled" placeholder="Filled variant" />
<InputBase label="Underscore" variant="underscore" placeholder="Underscore variant" />
<InputBase label="Error" error helperText="Invalid input" placeholder="Error state" />`}>
          <div className="grid gap-6 w-full max-w-md">
            <InputBase label="Default" placeholder="Default variant" />
            <InputBase label="Filled" variant="filled" placeholder="Filled variant" />
            <InputBase label="Underscore" variant="underscore" placeholder="Underscore variant" />
            <InputBase label="Error" error helperText="Invalid input" placeholder="Error state" />
          </div>
        </ComponentPreview>
      </div>

      <InstallationTabs
        componentName="input-base"
        dependencies={["clsx", "tailwind-merge"]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          { name: "variant", type: '"default" | "filled" | "underscore"', default: '"default"' },
          { name: "label", type: "string", default: "-" },
          { name: "error", type: "boolean", default: "false" },
          { name: "helperText", type: "string", default: "-" },
        ]}
      />
    </ComponentPageLayout>
  );
}
