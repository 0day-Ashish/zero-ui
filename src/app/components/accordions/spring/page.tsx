"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { AccordionSpring } from "@/zeroui/components/accordions";

const accordionComponents = [
  { id: "accordion-base", name: "Accordion Base", href: "/components/accordions" },
  { id: "accordion-glass", name: "Accordion Glass", href: "/components/accordions/glass" },
  { id: "accordion-neon", name: "Accordion Neon", href: "/components/accordions/neon" },
  { id: "accordion-cyber", name: "Accordion Cyber", href: "/components/accordions/cyber" },
  { id: "accordion-spring", name: "Accordion Spring", href: "/components/accordions/spring" },
  { id: "accordion-border", name: "Accordion Border", href: "/components/accordions/border" },
  { id: "accordion-image", name: "Accordion Image", href: "/components/accordions/image" },
];

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Copy the code for the accordion component.",
    filename: "components/accordions/accordion-spring.tsx",
    code: `// See src/zeroui/components/accordions/accordion-spring.tsx`,
  },
];

export default function AccordionSpringPage() {
  return (
    <ComponentPageLayout
      componentName="Accordion Spring"
      description="Playful accordion with bouncy physics and scale animations."
      componentItems={accordionComponents}
      activeComponentId="accordion-spring"
      prevComponent={{ name: "Accordion Cyber", href: "/components/accordions/cyber" }}
      nextComponent={{ name: "Accordion Border", href: "/components/accordions/border" }}
    >
      <div className="space-y-4">
        <ComponentPreview code={`<AccordionSpring title="Personalization" defaultOpen>
   Customize your workspace with themes and plugins.
</AccordionSpring>
<AccordionSpring title="Account">
   Manage your profile and security settings.
</AccordionSpring>`}>
          <div className="w-full max-w-[500px] p-8 mx-auto bg-zinc-100 dark:bg-zinc-950 rounded-3xl">
            <AccordionSpring title="Personalization" defaultOpen>
              Customize your workspace with themes, plugins, and hotkeys that fit your workflow.
            </AccordionSpring>
            <AccordionSpring title="Account Settings">
              Manage your personal information, security preferences, and connected devices.
            </AccordionSpring>
            <AccordionSpring title="Notifications">
              Control which emails and mobile alerts you receive from us.
            </AccordionSpring>
          </div>
        </ComponentPreview>
      </div>

      <InstallationTabs
        componentName="accordion-spring"
        dependencies={["clsx", "tailwind-merge", "lucide-react"]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          { name: "title", type: "string", default: "-" },
          { name: "defaultOpen", type: "boolean", default: "false" },
        ]}
      />
    </ComponentPageLayout>
  );
}
