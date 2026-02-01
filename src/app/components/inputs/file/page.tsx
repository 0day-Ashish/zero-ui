"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { InputFile } from "@/zeroui/components/inputs";

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
    filename: "components/inputs/input-file.tsx",
    code: `// See src/zeroui/components/inputs/input-file.tsx`,
  },
];

export default function InputFilePage() {
  return (
    <ComponentPageLayout
      componentName="Input File"
      description="Drag and drop file upload component with preview."
      componentItems={inputComponents}
      activeComponentId="input-file"
      prevComponent={{ name: "Input OTP", href: "/components/inputs/otp" }}
      nextComponent={{ name: "Input Tags", href: "/components/inputs/tags" }}
    >
      <div className="space-y-4">
        <ComponentPreview code={`<InputFile label="Upload Image" accept="image/*" />
<InputFile label="With Helper Text" helperText="Max size 5MB" />`}>
          <div className="w-full max-w-md grid gap-6">
            <InputFile label="Upload Image" accept="image/*" />
            <InputFile label="With Helper Text" helperText="Max size 5MB" />
          </div>
        </ComponentPreview>
      </div>

      <InstallationTabs
        componentName="input-file"
        dependencies={["lucide-react", "clsx", "tailwind-merge"]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          { name: "label", type: "string", default: "-" },
          { name: "helperText", type: "string", default: "-" },
          { name: "onFileSelect", type: "(file: File | null) => void", default: "-" },
          { name: "accept", type: "string", default: "-" },
        ]}
      />
    </ComponentPageLayout>
  );
}
