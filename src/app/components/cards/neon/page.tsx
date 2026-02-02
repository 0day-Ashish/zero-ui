"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import NeonCard from "@/zeroui/components/cards/neon-card";

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
    filename: "components/cards/neon-card.tsx",
    code: `"use client";

import React from "react";

interface NeonCardProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: "blue" | "purple" | "green" | "red" | "orange";
  intensity?: "low" | "medium" | "high";
  children: React.ReactNode;
}

export default function NeonCard({
  color = "purple",
  intensity = "medium",
  children,
  className = "",
  ...props
}: NeonCardProps) {
  const baseStyles =
    "rounded-2xl border bg-black/90 text-white relative group transition-all duration-300";

  const glowColors = {
    blue: "border-blue-500/50 shadow-blue-500/20 hover:border-blue-400 hover:shadow-blue-500/40",
    purple: "border-purple-500/50 shadow-purple-500/20 hover:border-purple-400 hover:shadow-purple-500/40",
    green: "border-green-500/50 shadow-green-500/20 hover:border-green-400 hover:shadow-green-500/40",
    red: "border-red-500/50 shadow-red-500/20 hover:border-red-400 hover:shadow-red-500/40",
    orange: "border-orange-500/50 shadow-orange-500/20 hover:border-orange-400 hover:shadow-orange-500/40",
  };

  const shadowIntensities = {
    low: "shadow-lg", 
    medium: "shadow-xl",
    high: "shadow-2xl",
  };

  return (
    <div
      className={\`\${baseStyles} \${glowColors[color]} \${shadowIntensities[intensity]} \${className}\`}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  );
}`,
  },
];

export default function NeonCardPage() {
  return (
    <ComponentPageLayout
      componentName="Card Neon"
      description="Cyberpunk-style card with glowing borders and shadows, perfect for dark mode."
      componentItems={cardComponents}
      activeComponentId="card-neon"
      prevComponent={{ name: "Card Glass", href: "/components/cards/glass" }}
      nextComponent={{ name: "Card Gradient", href: "/components/cards/gradient" }}
    >
      <ComponentPreview
        code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-black/90 p-8 rounded-3xl w-full">
  <NeonCard color="purple">
    <h3 className="text-lg font-medium mb-2">Purple Neon</h3>
    <p className="text-zinc-400 text-sm">Glowing border and shadow effect.</p>
  </NeonCard>
  <NeonCard color="blue">
    <h3 className="text-lg font-medium mb-2">Blue Neon</h3>
    <p className="text-zinc-400 text-sm">Cyberpunk aesthetic for your UI.</p>
  </NeonCard>
  <NeonCard color="green" intensity="high">
    <h3 className="text-lg font-medium mb-2">High Intensity</h3>
    <p className="text-zinc-400 text-sm">Stronger glow effect.</p>
  </NeonCard>
  <NeonCard color="red">
    <h3 className="text-lg font-medium mb-2">Red Alert</h3>
    <p className="text-zinc-400 text-sm">Warning or danger card.</p>
  </NeonCard>
</div>`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-black/90 p-8 rounded-3xl w-full">
          <NeonCard color="purple">
            <h3 className="text-lg font-medium mb-2">Purple Neon</h3>
            <p className="text-zinc-400 text-sm">Glowing border and shadow effect.</p>
          </NeonCard>
          <NeonCard color="blue">
            <h3 className="text-lg font-medium mb-2">Blue Neon</h3>
            <p className="text-zinc-400 text-sm">Cyberpunk aesthetic for your UI.</p>
          </NeonCard>
          <NeonCard color="green" intensity="high">
            <h3 className="text-lg font-medium mb-2">High Intensity</h3>
            <p className="text-zinc-400 text-sm">Stronger glow effect.</p>
          </NeonCard>
          <NeonCard color="red">
            <h3 className="text-lg font-medium mb-2">Red Alert</h3>
            <p className="text-zinc-400 text-sm">Warning or danger card.</p>
          </NeonCard>
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="neon-card"
        dependencies={[]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          {
            name: "color",
            type: '"blue" | "purple" | "green" | "red" | "orange"',
            default: '"purple"',
            description: "Theme color of the neon glow",
          },
          {
            name: "intensity",
            type: '"low" | "medium" | "high"',
            default: '"medium"',
            description: "Intensity of the shadow/glow",
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
