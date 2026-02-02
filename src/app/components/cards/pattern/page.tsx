"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import PatternCard from "@/zeroui/components/cards/pattern-card";

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
    filename: "components/cards/pattern-card.tsx",
    code: `"use client";

import React from "react";

interface PatternCardProps extends React.HTMLAttributes<HTMLDivElement> {
  pattern?: "dots" | "grid";
  patternColor?: string;
  maskGradient?: string;
  children: React.ReactNode;
}

export default function PatternCard({
  pattern = "dots",
  patternColor = "rgba(0, 0, 0, 0.1)", // Default for light mode, override for dark
  maskGradient = "linear-gradient(to bottom right, white, transparent)",
  children,
  className = "",
  style,
  ...props
}: PatternCardProps) {
  const patternUrl = \`url("data:image/svg+xml,\${encodeURIComponent(
    pattern === "dots"
      ? \`<svg width='20' height='20' xmlns='http://www.w3.org/2000/svg'><circle cx='1' cy='1' r='1' fill='\${patternColor}'/></svg>\`
      : \`<svg width='40' height='40' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'><path d='M 40 0 L 0 0 0 40' fill='none' stroke='\${patternColor}' stroke-width='1'/></pattern></defs><rect width='100%' height='100%' fill='url(#grid)'/></svg>\`
  )}")\`;

  return (
    <div
      className={\`relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden \${className}\`}
      {...props}
    >
      <div
        className="absolute inset-0 z-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage: patternUrl,
          maskImage: maskGradient,
          WebkitMaskImage: maskGradient,
          ...style,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}`,
  },
];

export default function PatternCardPage() {
  return (
    <ComponentPageLayout
      componentName="Card Pattern"
      description="Clean cards with generated SVG patterns (dots or grids), similar to modern SaaS designs."
      componentItems={cardComponents}
      activeComponentId="card-pattern"
      prevComponent={{ name: "Card Spotlight", href: "/components/cards/spotlight" }}
      nextComponent={{ name: "Card Meteor", href: "/components/cards/meteor" }}
    >
      <ComponentPreview
        code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
  <PatternCard pattern="dots">
    <div className="p-6">
      <div className="h-10 w-10 bg-zinc-100 dark:bg-zinc-800 rounded-md mb-4 flex items-center justify-center">
        ●
      </div>
      <h3 className="text-lg font-semibold mb-2">Dot Pattern</h3>
      <p className="text-muted-foreground text-sm">Minimalist dot pattern background with a fade-out mask.</p>
    </div>
  </PatternCard>
  <PatternCard pattern="grid" patternColor="rgba(99, 102, 241, 0.1)">
    <div className="p-6">
      <div className="h-10 w-10 bg-indigo-100 dark:bg-indigo-900/20 text-indigo-500 rounded-md mb-4 flex items-center justify-center">
        #
      </div>
      <h3 className="text-lg font-semibold mb-2">Grid Pattern</h3>
      <p className="text-muted-foreground text-sm">Grid lines with custom color configuration.</p>
    </div>
  </PatternCard>
</div>`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <PatternCard pattern="dots">
            <div className="p-6">
              <div className="h-10 w-10 bg-zinc-100 dark:bg-zinc-800 rounded-md mb-4 flex items-center justify-center">
                ●
              </div>
              <h3 className="text-lg font-semibold mb-2">Dot Pattern</h3>
              <p className="text-muted-foreground text-sm">Minimalist dot pattern background with a fade-out mask.</p>
            </div>
          </PatternCard>
          <PatternCard pattern="grid" patternColor="rgba(99, 102, 241, 0.1)">
            <div className="p-6">
              <div className="h-10 w-10 bg-indigo-100 dark:bg-indigo-900/20 text-indigo-500 rounded-md mb-4 flex items-center justify-center">
                #
              </div>
              <h3 className="text-lg font-semibold mb-2">Grid Pattern</h3>
              <p className="text-muted-foreground text-sm">Grid lines with custom color configuration.</p>
            </div>
          </PatternCard>
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="pattern-card"
        dependencies={[]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          {
            name: "pattern",
            type: '"dots" | "grid"',
            default: '"dots"',
            description: "Type of SVG pattern to generate",
          },
          {
            name: "patternColor",
            type: "string",
            default: '"rgba(0,0,0,0.1)"',
            description: "Color/opacity of the pattern stroke/fill",
          },
          {
            name: "maskGradient",
            type: "string",
            default: '"linear-gradient..."',
            description: "CSS mask image to fade out the pattern",
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
