"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { AccordionBase } from "@/zeroui/components/accordions";

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
    filename: "components/accordions/accordion-base.tsx",
    code: `// See src/zeroui/components/accordions/accordion-base.tsx`,
  },
];

export default function AccordionPage() {
  return (
    <ComponentPageLayout
      componentName="Accordion Base"
      description="A vertically stacked set of interactive headings that each reveal a section of content."
      componentItems={accordionComponents}
      activeComponentId="accordion-base"
      prevComponent={{ name: "Pagination Cyber", href: "/components/pagination/cyber" }}
      nextComponent={{ name: "Accordion Glass", href: "/components/accordions/glass" }}
    >
      <div className="space-y-4">
        <ComponentPreview code={`<AccordionBase title="Is it accessible?">
  Yes. It adheres to the WAI-ARIA design pattern.
</AccordionBase>
<AccordionBase title="Is it styled?">
  Yes. It comes with default styles that matches the other components' aesthetic.
</AccordionBase>
<AccordionBase title="Is it animated?">
  Yes. It's animated by default, but you can disable it if you prefer.
</AccordionBase>`}>
          <div className="w-full max-w-[500px] p-8 mx-auto">
            <AccordionBase title="Is it accessible?" defaultOpen>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionBase>
            <AccordionBase title="Is it styled?">
              Yes. It comes with default styles that matches the other components' aesthetic.
            </AccordionBase>
            <AccordionBase title="Is it animated?">
              Yes. It's animated by default, but you can disable it if you prefer.
            </AccordionBase>
          </div>
        </ComponentPreview>
      </div>

      <InstallationTabs
        componentName="accordion-base"
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
