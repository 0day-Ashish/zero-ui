"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import TiltCard from "@/zeroui/components/cards/tilt-card";

const cardComponents = [
  { id: "card-base", name: "Card Base", href: "/components/cards" },
  { id: "card-glass", name: "Card Glass", href: "/components/cards/glass" },
  { id: "card-neon", name: "Card Neon", href: "/components/cards/neon" },
  { id: "card-gradient", name: "Card Gradient", href: "/components/cards/gradient" },
  { id: "card-tilt", name: "Card Tilt", href: "/components/cards/tilt" },
  { id: "card-spotlight", name: "Card Spotlight", href: "/components/cards/spotlight" },
  { id: "card-pattern", name: "Card Pattern", href: "/components/cards/pattern" },
  { id: "card-meteor", name: "Card Meteor", href: "/components/cards/meteor" },
];

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/cards/tilt-card.tsx",
    code: `"use client";

import React, { useRef, useState } from "react";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function TiltCard({
  children,
  className = "",
  ...props
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    setRotateX(yPct * -20); // Max rotation X
    setRotateY(xPct * 20); // Max rotation Y
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      className={\`perspective-1000 \${className}\`}
      style={{ perspective: "1000px" }}
      {...props}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="transition-transform duration-200 ease-out transform-gpu rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-xl"
        style={{
          transform: \`rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`,
        }}
      >
        {children}
      </div>
    </div>
  );
}`,
  },
];

export default function TiltCardPage() {
  return (
    <ComponentPageLayout
      componentName="Card Tilt"
      description="An interactive 3D card that tilts based on mouse position."
      componentItems={cardComponents}
      activeComponentId="card-tilt"
      prevComponent={{ name: "Card Gradient", href: "/components/cards/gradient" }}
      nextComponent={{ name: "Modals", href: "/components/modals" }}
    >
      <ComponentPreview
        code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
  <TiltCard>
    <h3 className="text-lg font-medium mb-2">Mouse Interaction</h3>
    <p className="text-muted-foreground text-sm">This card tilts based on your mouse position.</p>
  </TiltCard>
  <TiltCard>
      <div className="h-32 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg mb-4 flex items-center justify-center text-white font-bold text-2xl">
        3D
      </div>
    <h3 className="text-lg font-medium mb-2">Depth Effect</h3>
    <p className="text-muted-foreground text-sm">Adds a layer of interactivity and depth.</p>
  </TiltCard>
</div>`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <TiltCard>
            <h3 className="text-lg font-medium mb-2">Mouse Interaction</h3>
            <p className="text-muted-foreground text-sm">This card tilts based on your mouse position.</p>
          </TiltCard>
          <TiltCard>
            <div className="h-32 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg mb-4 flex items-center justify-center text-white font-bold text-2xl">
              3D
            </div>
            <h3 className="text-lg font-medium mb-2">Depth Effect</h3>
            <p className="text-muted-foreground text-sm">Adds a layer of interactivity and depth.</p>
          </TiltCard>
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="tilt-card"
        dependencies={[]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          {
            name: "children",
            type: "ReactNode",
            default: "-",
            description: "Content of the card",
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
