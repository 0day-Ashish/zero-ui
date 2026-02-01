"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { TextareaAuto } from "@/zeroui/components/inputs";

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
    filename: "components/inputs/textarea-auto.tsx",
    code: `// See src/zeroui/components/inputs/textarea-auto.tsx`,
  },
];

export default function TextareaAutoPage() {
  return (
    <ComponentPageLayout
      componentName="Textarea Auto"
      description="Textarea that automatically resizes based on content."
      componentItems={inputComponents}
      activeComponentId="textarea-auto"
      prevComponent={{ name: "Input Tags", href: "/components/inputs/tags" }}
      nextComponent={{ name: "Cards", href: "/components/cards" }}
    >
      <div className="space-y-4">
        <ComponentPreview code={`<TextareaAuto label="Bio" placeholder="Tell us about yourself..." minRows={3} />
<TextareaAuto label="Limited Growth" minRows={2} maxRows={5} />`}>
          <div className="w-full max-w-md grid gap-6">
            <TextareaAuto label="Bio" placeholder="Tell us about yourself..." minRows={3} />
            <TextareaAuto label="Limited Growth" minRows={2} maxRows={5} placeholder="I stop growing after 5 rows..." />
          </div>
        </ComponentPreview>
      </div>

      <InstallationTabs
        componentName="textarea-auto"
        dependencies={["clsx", "tailwind-merge"]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          { name: "label", type: "string", default: "-" },
          { name: "minRows", type: "number", default: "3" },
          { name: "maxRows", type: "number", default: "10" },
          { name: "helperText", type: "string", default: "-" },
        ]}
      />
    </ComponentPageLayout>
  );
}
