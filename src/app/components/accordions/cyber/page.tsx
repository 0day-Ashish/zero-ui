"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { AccordionCyber } from "@/zeroui/components/accordions";

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
    filename: "components/accordions/accordion-cyber.tsx",
    code: `// See src/zeroui/components/accordions/accordion-cyber.tsx`,
  },
];

export default function AccordionCyberPage() {
  return (
    <ComponentPageLayout
      componentName="Accordion Cyber"
      description="Technical, mechanical-looking accordion for data-heavy views."
      componentItems={accordionComponents}
      activeComponentId="accordion-cyber"
      prevComponent={{ name: "Accordion Neon", href: "/components/accordions/neon" }}
      nextComponent={{ name: "Components", href: "/components" }}
    >
      <div className="space-y-4">
        <ComponentPreview code={`<AccordionCyber title="ERROR_LOGS" id="01" defaultOpen>
   > Critical failure in sector 7G.
   > Attempting reboot...
</AccordionCyber>
<AccordionCyber title="USER_DATA" id="02">
   > Encrypted. Access denied.
</AccordionCyber>`}>
          <div className="w-full max-w-[500px] p-12 mx-auto bg-zinc-950 rounded-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(250,204,21,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(250,204,21,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

            <AccordionCyber title="ERROR_LOGS" id="ERR" defaultOpen>
              &gt; Critical failure in sector 7G.<br />
              &gt; Attempting reboot...<br />
              &gt; Reboot failed. Manual override required.
            </AccordionCyber>
            <AccordionCyber title="USER_DATA" id="DAT">
              &gt; Encrypted. Access denied.<br />
              &gt; Contact administrator for clearance.
            </AccordionCyber>
            <AccordionCyber title="SYS_INFO" id="SYS">
              &gt; Kernel v4.2.0-cyber loaded.<br />
              &gt; Memory integrity: 99.9%
            </AccordionCyber>
          </div>
        </ComponentPreview>
      </div>

      <InstallationTabs
        componentName="accordion-cyber"
        dependencies={["clsx", "tailwind-merge", "lucide-react"]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          { name: "title", type: "string", default: "-" },
          { name: "id", type: "string", default: "-" },
          { name: "defaultOpen", type: "boolean", default: "false" },
        ]}
      />
    </ComponentPageLayout>
  );
}
