"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import GradientBorderCard from "@/zeroui/components/cards/gradient-border-card";

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
    filename: "components/cards/gradient-border-card.tsx",
    code: `"use client";

import React from "react";

interface GradientBorderCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function GradientBorderCard({
  children,
  className = "",
  ...props
}: GradientBorderCardProps) {
  return (
    <div
      className={\`group relative rounded-2xl p-[1px] overflow-hidden \${className}\`}
      {...props}
    >
      {/* Moving Gradient Border */}
      <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Static Border (fallback/base) */}
      <div className="absolute inset-0 rounded-2xl border border-zinc-200 dark:border-zinc-800" />
      
      {/* Inner Content Background */}
      <div className="relative h-full w-full rounded-2xl bg-white dark:bg-zinc-950 p-6">
        {children}
      </div>
    </div>
  );
}`,
  },
];

export default function GradientCardPage() {
  return (
    <ComponentPageLayout
      componentName="Card Gradient"
      description="A card with an animated gradient border that appears on hover."
      componentItems={cardComponents}
      activeComponentId="card-gradient"
      prevComponent={{ name: "Card Neon", href: "/components/cards/neon" }}
      nextComponent={{ name: "Card Tilt", href: "/components/cards/tilt" }}
    >
      <ComponentPreview
        code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
  <GradientBorderCard>
    <h3 className="text-lg font-medium mb-2">Rotating Border</h3>
    <p className="text-muted-foreground text-sm">Hover to see the animated gradient border effect.</p>
  </GradientBorderCard>
  <GradientBorderCard>
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-4">
        ✨
      </div>
      <h3 className="text-lg font-medium mb-2">Interactive</h3>
      <p className="text-muted-foreground text-sm">Perfect for featuring special content.</p>
    </div>
  </GradientBorderCard>
</div>`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <GradientBorderCard>
            <h3 className="text-lg font-medium mb-2">Rotating Border</h3>
            <p className="text-muted-foreground text-sm">Hover to see the animated gradient border effect.</p>
          </GradientBorderCard>
          <GradientBorderCard>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-4">
                ✨
              </div>
              <h3 className="text-lg font-medium mb-2">Interactive</h3>
              <p className="text-muted-foreground text-sm">Perfect for featuring special content.</p>
            </div>
          </GradientBorderCard>
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="gradient-border-card"
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
