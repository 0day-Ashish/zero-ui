"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { AccordionImage } from "@/zeroui/components/accordions";

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
    filename: "components/accordions/accordion-image.tsx",
    code: `// See src/zeroui/components/accordions/accordion-image.tsx`,
  },
];

const items = [
  {
    id: 1,
    title: "Neon City",
    description: "Experience the vibrant nightlife of the future metropolis. Neon lights, flying cars, and endless energy.",
    image: "https://images.unsplash.com/photo-1545129139-168563004663?q=80&w=3025&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Zen Garden",
    description: "Find peace and tranquility in our digital sanctuaries. Designed for meditation and mindfulness.",
    image: "https://images.unsplash.com/photo-1584794171578-837330777e5d?q=80&w=2970&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Cyber Cafe",
    description: "Connect with others in our high-bandwidth neural link cafes. Coffee included.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2970&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Deep Space",
    description: "Explore the unknown reaches of the galaxy. Starships available for rent.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2911&auto=format&fit=crop"
  }
];

export default function AccordionImagePage() {
  return (
    <ComponentPageLayout
      componentName="Accordion Image"
      description="Interactive image gallery that expands on selection."
      componentItems={accordionComponents}
      activeComponentId="accordion-image"
      prevComponent={{ name: "Accordion Border", href: "/components/accordions/border" }}
      nextComponent={{ name: "Components", href: "/components" }}
    >
      <div className="space-y-4">
        <ComponentPreview code={`const items = [
  {
    id: 1,
    title: "Neon City",
    description: "Experience the vibrant nightlife...",
    image: "/city.jpg"
  },
  // ...
];

<AccordionImage items={items} />`}>
          <div className="w-full p-4 mx-auto">
            <AccordionImage items={items} />
          </div>
        </ComponentPreview>
      </div>

      <InstallationTabs
        componentName="accordion-image"
        dependencies={["clsx", "tailwind-merge"]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          { name: "items", type: "array", default: "[]" },
        ]}
      />
    </ComponentPageLayout>
  );
}
