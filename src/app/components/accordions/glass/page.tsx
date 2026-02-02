"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { AccordionGlass } from "@/zeroui/components/accordions";

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
    filename: "components/accordions/accordion-glass.tsx",
    code: `// See src/zeroui/components/accordions/accordion-glass.tsx`,
  },
];

export default function AccordionGlassPage() {
  return (
    <ComponentPageLayout
      componentName="Accordion Glass"
      description="Frosted glass accordion for high-end interfaces."
      componentItems={accordionComponents}
      activeComponentId="accordion-glass"
      prevComponent={{ name: "Accordion Base", href: "/components/accordions" }}
      nextComponent={{ name: "Accordion Neon", href: "/components/accordions/neon" }}
    >
      <div className="space-y-4">
        <ComponentPreview code={`<AccordionGlass title="Product Details">
  High-quality materials with premium finish.
</AccordionGlass>
<AccordionGlass title="Shipping Information">
  Free shipping worldwide on orders over $50.
</AccordionGlass>`}>
          <div className="w-full max-w-[500px] p-12 mx-auto bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <AccordionGlass title="Product Details" defaultOpen>
              High-quality materials with premium finish. Designed for durability and style.
            </AccordionGlass>
            <AccordionGlass title="Shipping Information">
              Free shipping worldwide on orders over $50. Tracking number provided immediately.
            </AccordionGlass>
            <AccordionGlass title="Warranty">
              2-year limited warranty included with every purchase.
            </AccordionGlass>
          </div>
        </ComponentPreview>
      </div>

      <InstallationTabs
        componentName="accordion-glass"
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
