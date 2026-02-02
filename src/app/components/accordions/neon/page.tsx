"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { AccordionNeon } from "@/zeroui/components/accordions";

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
    filename: "components/accordions/accordion-neon.tsx",
    code: `// See src/zeroui/components/accordions/accordion-neon.tsx`,
  },
];

export default function AccordionNeonPage() {
  return (
    <ComponentPageLayout
      componentName="Accordion Neon"
      description="Glowing accordion components for attention-grabbing content."
      componentItems={accordionComponents}
      activeComponentId="accordion-neon"
      prevComponent={{ name: "Accordion Glass", href: "/components/accordions/glass" }}
      nextComponent={{ name: "Accordion Cyber", href: "/components/accordions/cyber" }}
    >
      <div className="space-y-4">
        <ComponentPreview code={`<AccordionNeon title="System Config" defaultOpen>
   Configuration optimized for maximum performance.
</AccordionNeon>
<AccordionNeon title="Power Settings">
   Balanced mode active.
</AccordionNeon>`}>
          <div className="w-full max-w-[500px] p-12 mx-auto bg-zinc-950 rounded-xl relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />

            <AccordionNeon title="System Config" defaultOpen>
              Configuration optimized for maximum performance. Overclocking enabled.
            </AccordionNeon>
            <AccordionNeon title="Power Settings">
              Balanced mode active. Estimated battery life: 8 hours.
            </AccordionNeon>
            <AccordionNeon title="Network Status">
              Connected to 5G High-Speed link. Low latency detected.
            </AccordionNeon>
          </div>
        </ComponentPreview>
      </div>

      <InstallationTabs
        componentName="accordion-neon"
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
