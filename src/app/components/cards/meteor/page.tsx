"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import MeteorCard from "@/zeroui/components/cards/meteor-card";

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
    title: "Update global CSS",
    description: "Add the meteor animation to your globals.css file:",
    filename: "app/globals.css",
    code: `@keyframes meteor {
  0% { transform: rotate(215deg) translateX(0); opacity: 1; }
  70% { opacity: 1; }
  100% { transform: rotate(215deg) translateX(-500px); opacity: 0; }
}

.animate-meteor {
  animation: meteor 5s linear infinite;
}`,
  },
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/cards/meteor-card.tsx",
    code: `"use client";

import React, { useEffect, useState } from "react";

interface MeteorCardProps extends React.HTMLAttributes<HTMLDivElement> {
  meteorCount?: number;
  meteorColor?: string;
  children: React.ReactNode;
}

export default function MeteorCard({
  meteorCount = 20,
  meteorColor = "bg-slate-500",
  children,
  className = "",
  ...props
}: MeteorCardProps) {
  const [meteors, setMeteors] = useState<number[]>([]);

  useEffect(() => {
    const meteorStyles = new Array(meteorCount).fill(0).map(() => Math.random());
    setMeteors(meteorStyles);
  }, [meteorCount]);

  return (
    <div
      className={\`relative w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/90 shadow-xl \${className}\`}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {meteors.map((el, idx) => (
          <span
            key={idx}
            className={\`absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] \${meteorColor} shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] opacity-0 animate-meteor\`}
            style={{
              top: 0,
              left: Math.floor(Math.random() * 400 - 150) + "px",
              animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
              animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
            }}
          >
            <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
          </span>
        ))}
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}`,
  },
];

export default function MeteorCardPage() {
  return (
    <ComponentPageLayout
      componentName="Card Meteor"
      description="A card with animated meteor showers in the background, creating a dynamic effect."
      componentItems={cardComponents}
      activeComponentId="card-meteor"
      prevComponent={{ name: "Card Pattern", href: "/components/cards/pattern" }}
      nextComponent={{ name: "Modals", href: "/components/modals" }}
    >
      <ComponentPreview
        code={`<div className="w-full max-w-md mx-auto">
  <MeteorCard>
    <div className="p-8 text-center">
      <div className="h-12 w-12 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
        🚀
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Features</h3>
      <p className="text-zinc-400">
        Explore the possibilities with our advanced celestial tracking algorithms.
      </p>
      <button className="mt-6 px-4 py-2 rounded-full border border-zinc-600 text-zinc-300 hover:bg-white/5 transition font-medium text-xs">
        Learn More
      </button>
    </div>
  </MeteorCard>
</div>`}
      >
        <div className="w-full max-w-md mx-auto">
          <MeteorCard>
            <div className="p-8 text-center">
              <div className="h-12 w-12 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                🚀
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Features</h3>
              <p className="text-zinc-400">
                Explore the possibilities with our advanced celestial tracking algorithms.
              </p>
              <button className="mt-6 px-4 py-2 rounded-full border border-zinc-600 text-zinc-300 hover:bg-white/5 transition font-medium text-xs">
                Learn More
              </button>
            </div>
          </MeteorCard>
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="meteor-card"
        dependencies={[]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          {
            name: "meteorCount",
            type: "number",
            default: "20",
            description: "Number of meteors to render",
          },
          {
            name: "meteorColor",
            type: "string",
            default: '"bg-slate-500"',
            description: "Tailwind color class for the meteor head",
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
