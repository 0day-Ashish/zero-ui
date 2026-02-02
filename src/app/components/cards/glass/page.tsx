"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import GlassCard from "@/zeroui/components/cards/glass-card";

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
    filename: "components/cards/glass-card.tsx",
    code: `"use client";

import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  blur?: "sm" | "md" | "lg" | "xl";
  transparency?: "low" | "medium" | "high";
  children: React.ReactNode;
}

export default function GlassCard({
  blur = "md",
  transparency = "medium",
  children,
  className = "",
  ...props
}: GlassCardProps) {
  const baseStyles =
    "rounded-2xl border border-white/20 shadow-lg relative overflow-hidden transition-all duration-300";

  const blurs = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl",
  };

  const transparencies = {
    low: "bg-white/10 dark:bg-black/10",
    medium: "bg-white/5 dark:bg-black/5",
    high: "bg-white/0 dark:bg-black/0",
  };

  return (
    <div
      className={\`\${baseStyles} \${blurs[blur]} \${transparencies[transparency]} \${className}\`}
      {...props}
    >
      {/* Noise texture overlay for premium feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: "url(\\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\\")" }} 
      />
      
      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}`,
  },
];

export default function GlassCardPage() {
  return (
    <ComponentPageLayout
      componentName="Card Glass"
      description="A premium glassmorphism card with noise texture and hover shine effects."
      componentItems={cardComponents}
      activeComponentId="card-glass"
      prevComponent={{ name: "Card Base", href: "/components/cards" }}
      nextComponent={{ name: "Card Neon", href: "/components/cards/neon" }}
    >
      <ComponentPreview
        code={`<div className="p-10 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
  <GlassCard blur="md" transparency="medium">
    <div className="p-6">
      <h3 className="text-lg font-medium mb-2 text-white">Glass Card</h3>
      <p className="text-white/80 text-sm">Beautiful frosted glass effect with noise texture.</p>
    </div>
  </GlassCard>
  <GlassCard blur="xl" transparency="high">
    <div className="p-6">
      <h3 className="text-lg font-medium mb-2 text-white">High Blur</h3>
      <p className="text-white/80 text-sm">Strong blur with high transparency.</p>
    </div>
  </GlassCard>
</div>`}
      >
        <div className="p-10 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <GlassCard blur="md" transparency="medium">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-2 text-white">Glass Card</h3>
              <p className="text-white/80 text-sm">Beautiful frosted glass effect with noise texture.</p>
            </div>
          </GlassCard>
          <GlassCard blur="xl" transparency="high">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-2 text-white">High Blur</h3>
              <p className="text-white/80 text-sm">Strong blur with high transparency.</p>
            </div>
          </GlassCard>
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="glass-card"
        dependencies={[]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          {
            name: "blur",
            type: '"sm" | "md" | "lg" | "xl"',
            default: '"md"',
            description: "Intensity of the background blur",
          },
          {
            name: "transparency",
            type: '"low" | "medium" | "high"',
            default: '"medium"',
            description: "Opacity level of the background",
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
