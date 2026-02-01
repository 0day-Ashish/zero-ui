"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { InputFloating } from "@/zeroui/components/inputs";

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
    filename: "components/inputs/input-floating.tsx",
    code: `// See src/zeroui/components/inputs/input-floating.tsx`,
  },
];

export default function InputFloatingPage() {
  return (
    <ComponentPageLayout
      componentName="Input Floating"
      description="An input field with an animated floating label."
      componentItems={inputComponents}
      activeComponentId="input-floating"
      prevComponent={{ name: "Input Base", href: "/components/inputs" }}
      nextComponent={{ name: "Input Icon", href: "/components/inputs/icon" }}
    >
      <div className="space-y-4">
        <ComponentPreview code={`<InputFloating label="Username" />
<InputFloating label="Password" type="password" />
<InputFloating label="Error State" error />`}>
          <div className="grid gap-6 w-full max-w-md">
            <InputFloating label="Username" />
            <InputFloating label="Password" type="password" />
            <InputFloating label="Error State" error />
          </div>
        </ComponentPreview>
      </div>

      <InstallationTabs
        componentName="input-floating"
        dependencies={[]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          { name: "label", type: "string", default: "-" },
          { name: "error", type: "boolean", default: "false" },
        ]}
      />
    </ComponentPageLayout>
  );
}
