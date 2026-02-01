"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { InputOTP } from "@/zeroui/components/inputs";

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
    filename: "components/inputs/input-otp.tsx",
    code: `// See src/zeroui/components/inputs/input-otp.tsx`,
  },
];

export default function InputOTPPage() {
  return (
    <ComponentPageLayout
      componentName="Input OTP"
      description="One-time password input with auto-focus and paste support."
      componentItems={inputComponents}
      activeComponentId="input-otp"
      prevComponent={{ name: "Input Gradient", href: "/components/inputs/gradient" }}
      nextComponent={{ name: "Input File", href: "/components/inputs/file" }}
    >
      <div className="space-y-4">
        <ComponentPreview code={`<InputOTP length={4} onComplete={(otp) => console.log(otp)} />
<InputOTP length={6} className="gap-3" />`}>
          <div className="flex flex-col gap-8 w-full items-center">
            <InputOTP length={4} />
            <InputOTP length={6} className="gap-3" />
          </div>
        </ComponentPreview>
      </div>

      <InstallationTabs
        componentName="input-otp"
        dependencies={["clsx", "tailwind-merge"]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          { name: "length", type: "number", default: "6" },
          { name: "onComplete", type: "(otp: string) => void", default: "-" },
          { name: "onChange", type: "(otp: string) => void", default: "-" },
          { name: "className", type: "string", default: '""' },
        ]}
      />
    </ComponentPageLayout>
  );
}
