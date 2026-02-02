"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { AccordionBorder } from "@/zeroui/components/accordions";

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
    filename: "components/accordions/accordion-border.tsx",
    code: `// See src/zeroui/components/accordions/accordion-border.tsx`,
  },
];

export default function AccordionBorderPage() {
  return (
    <ComponentPageLayout
      componentName="Accordion Border"
      description="Minimalist chic with animated border drawing effects."
      componentItems={accordionComponents}
      activeComponentId="accordion-border"
      prevComponent={{ name: "Accordion Spring", href: "/components/accordions/spring" }}
      nextComponent={{ name: "Accordion Image", href: "/components/accordions/image" }}
    >
      <div className="space-y-4">
        <ComponentPreview code={`<AccordionBorder title="01. DISCOVERY" defaultOpen>
   We start by understanding your business goals and user needs.
</AccordionBorder>
<AccordionBorder title="02. DESIGN">
   Creating high-fidelity prototypes and visual systems.
</AccordionBorder>`}>
          <div className="w-full max-w-[600px] p-12 mx-auto bg-white dark:bg-black rounded-lg border border-zinc-100 dark:border-zinc-900 shadow-sm">
            <AccordionBorder title="01. DISCOVERY" defaultOpen>
              We start by understanding your business goals and user needs through in-depth workshops and research.
            </AccordionBorder>
            <AccordionBorder title="02. DESIGN" className="pt-2">
              Creating high-fidelity prototypes and visual systems that align with your brand identity.
            </AccordionBorder>
            <AccordionBorder title="03. DEVELOPMENT" className="pt-2">
              Building robust, scalable applications using modern technologies and best practices.
            </AccordionBorder>
          </div>
        </ComponentPreview>
      </div>

      <InstallationTabs
        componentName="accordion-border"
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
