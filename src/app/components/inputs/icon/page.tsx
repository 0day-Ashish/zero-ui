"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { InputIcon } from "@/zeroui/components/inputs";
import { Mail, Lock, Search } from "lucide-react";

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
    filename: "components/inputs/input-icon.tsx",
    code: `// See src/zeroui/components/inputs/input-icon.tsx`,
  },
];

export default function InputIconPage() {
  return (
    <ComponentPageLayout
      componentName="Input Icon"
      description="Input field with leading or trailing icon support."
      componentItems={inputComponents}
      activeComponentId="input-icon"
      prevComponent={{ name: "Input Floating", href: "/components/inputs/floating" }}
      nextComponent={{ name: "Input Gradient", href: "/components/inputs/gradient" }}
    >
      <div className="space-y-4">
        <ComponentPreview code={`<InputIcon icon={Mail} placeholder="Email address" />
<InputIcon icon={Lock} type="password" placeholder="Password" />
<InputIcon icon={Search} iconPosition="right" placeholder="Search..." />`}>
          <div className="grid gap-6 w-full max-w-md">
            <InputIcon icon={Mail} placeholder="Email address" />
            <InputIcon icon={Lock} type="password" placeholder="Password" />
            <InputIcon icon={Search} iconPosition="right" placeholder="Search..." />
          </div>
        </ComponentPreview>
      </div>

      <InstallationTabs
        componentName="input-icon"
        dependencies={["lucide-react"]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          { name: "icon", type: "LucideIcon", default: "-" },
          { name: "iconPosition", type: '"left" | "right"', default: '"left"' },
          { name: "error", type: "boolean", default: "false" },
          { name: "iconClassName", type: "string", default: '""' },
        ]}
      />
    </ComponentPageLayout>
  );
}
