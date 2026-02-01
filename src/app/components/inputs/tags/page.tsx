"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { InputTags } from "@/zeroui/components/inputs";

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
    filename: "components/inputs/input-tags.tsx",
    code: `// See src/zeroui/components/inputs/input-tags.tsx`,
  },
];

export default function InputTagsPage() {
  return (
    <ComponentPageLayout
      componentName="Input Tags"
      description="Input for adding multiple tags or chips."
      componentItems={inputComponents}
      activeComponentId="input-tags"
      prevComponent={{ name: "Input File", href: "/components/inputs/file" }}
      nextComponent={{ name: "Textarea Auto", href: "/components/inputs/textarea" }}
    >
      <div className="space-y-4">
        <ComponentPreview code={`<InputTags label="Skills" placeholder="Add skills (press Enter)..." />
<InputTags label="Pre-filled" defaultValue={["React", "Next.js"]} />
<InputTags label="Max Tags (3)" maxTags={3} />`}>
          <div className="grid gap-6 w-full max-w-md">
            <InputTags label="Skills" placeholder="Add skills (press Enter)..." />
            <InputTags label="Pre-filled" defaultValue={["React", "Next.js"]} />
            <InputTags label="Max Tags (3)" maxTags={3} />
          </div>
        </ComponentPreview>
      </div>

      <InstallationTabs
        componentName="input-tags"
        dependencies={["lucide-react", "clsx", "tailwind-merge"]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          { name: "label", type: "string", default: "-" },
          { name: "placeholder", type: "string", default: '"Add a tag..."' },
          { name: "defaultValue", type: "string[]", default: "[]" },
          { name: "maxTags", type: "number", default: "-" },
          { name: "onChange", type: "(tags: string[]) => void", default: "-" },
        ]}
      />
    </ComponentPageLayout>
  );
}
