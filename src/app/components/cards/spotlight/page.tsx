"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import SpotlightCard from "@/zeroui/components/cards/spotlight-card";

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
    filename: "components/cards/spotlight-card.tsx",
    code: `"use client";

import React, { useRef, useState, useEffect } from "react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  spotlightColor?: string;
  children: React.ReactNode;
}

export default function SpotlightCard({
  spotlightColor = "rgba(255, 255, 255, 0.25)",
  children,
  className = "",
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={\`relative rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden \${className}\`}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: \`radial-gradient(600px circle at \${position.x}px \${position.y}px, \${spotlightColor}, transparent 40%)\`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}`,
  },
];

export default function SpotlightCardPage() {
  return (
    <ComponentPageLayout
      componentName="Card Spotlight"
      description="A card that reveals a radial gradient spotlight under your cursor as you move it."
      componentItems={cardComponents}
      activeComponentId="card-spotlight"
      prevComponent={{ name: "Card Tilt", href: "/components/cards/tilt" }}
      nextComponent={{ name: "Card Pattern", href: "/components/cards/pattern" }}
    >
      <ComponentPreview
        code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full p-8 bg-zinc-950 rounded-3xl">
  <SpotlightCard>
    <div className="p-6 h-full flex flex-col justify-center">
      <h3 className="text-xl font-bold text-white mb-2">Hover Me</h3>
      <p className="text-zinc-400">The spotlight follows your cursor position strictly within the card bounds.</p>
    </div>
  </SpotlightCard>
  <SpotlightCard spotlightColor="rgba(139, 92, 246, 0.3)">
    <div className="p-6 h-full flex flex-col justify-center">
      <h3 className="text-xl font-bold text-white mb-2">Purple Spotlight</h3>
      <p className="text-zinc-400">You can customize the spotlight color to match your brand.</p>
    </div>
  </SpotlightCard>
</div>`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full p-8 bg-zinc-950 rounded-3xl">
          <SpotlightCard>
            <div className="p-6 h-full flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-2">Hover Me</h3>
              <p className="text-zinc-400">The spotlight follows your cursor position strictly within the card bounds.</p>
            </div>
          </SpotlightCard>
          <SpotlightCard spotlightColor="rgba(139, 92, 246, 0.3)">
            <div className="p-6 h-full flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-2">Purple Spotlight</h3>
              <p className="text-zinc-400">You can customize the spotlight color to match your brand.</p>
            </div>
          </SpotlightCard>
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="spotlight-card"
        dependencies={[]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          {
            name: "spotlightColor",
            type: "string",
            default: '"rgba(255, 255, 255, 0.25)"',
            description: "Color of the spotlight gradient",
          },
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
