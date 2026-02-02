"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import Card from "@/zeroui/components/cards/card";

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
    filename: "components/cards/card.tsx",
    code: `"use client";

import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "ghost" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Card({
  variant = "default",
  padding = "md",
  children,
  className = "",
  ...props
}: CardProps) {
  const baseStyles =
    "rounded-2xl transition-all duration-300 relative overflow-hidden";

  const variants = {
    default: "bg-card-bg border border-card-border text-foreground",
    outline: "bg-transparent border border-card-border text-foreground hover:bg-zinc-50 dark:hover:bg-zinc-900",
    ghost: "bg-transparent text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800",
    elevated: "bg-card-bg border-none shadow-lg shadow-zinc-200 dark:shadow-zinc-900 border border-card-border/50",
  };

  const paddings = {
    none: "p-0",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={\`\${baseStyles} \${variants[variant]} \${paddings[padding]} \${className}\`}
      {...props}
    >
      {children}
    </div>
  );
}`,
  },
];

export default function CardsPage() {
  return (
    <ComponentPageLayout
      componentName="Card"
      description="A flexible container component with support for headers, footers, and various styles."
      componentItems={cardComponents}
      activeComponentId="card-base"
      prevComponent={{ name: "Buttons", href: "/components/buttons" }}
      nextComponent={{ name: "Card Glass", href: "/components/cards/glass" }}
    >
      <ComponentPreview
        code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <Card variant="default">
    <h3 className="font-semibold mb-2">Default Card</h3>
    <p className="text-muted-foreground text-sm">Standard card for general content.</p>
  </Card>
  <Card variant="outline">
    <h3 className="font-semibold mb-2">Outline Card</h3>
    <p className="text-muted-foreground text-sm">Minimal border-only style.</p>
  </Card>
  <Card variant="elevated">
    <h3 className="font-semibold mb-2">Elevated Card</h3>
    <p className="text-muted-foreground text-sm">With shadow for depth.</p>
  </Card>
  <Card variant="ghost">
    <h3 className="font-semibold mb-2">Ghost Card</h3>
    <p className="text-muted-foreground text-sm">Blend with background until hovered.</p>
  </Card>
</div>`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <Card variant="default">
            <h3 className="font-semibold mb-2">Default Card</h3>
            <p className="text-muted-foreground text-sm">Standard card for general content.</p>
          </Card>
          <Card variant="outline">
            <h3 className="font-semibold mb-2">Outline Card</h3>
            <p className="text-muted-foreground text-sm">Minimal border-only style.</p>
          </Card>
          <Card variant="elevated">
            <h3 className="font-semibold mb-2">Elevated Card</h3>
            <p className="text-muted-foreground text-sm">With shadow for depth.</p>
          </Card>
          <Card variant="ghost">
            <h3 className="font-semibold mb-2">Ghost Card</h3>
            <p className="text-muted-foreground text-sm">Blend with background until hovered.</p>
          </Card>
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="card"
        dependencies={[]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          {
            name: "variant",
            type: '"default" | "outline" | "ghost" | "elevated"',
            default: '"default"',
            description: "Visual style of the card",
          },
          {
            name: "padding",
            type: '"none" | "sm" | "md" | "lg"',
            default: '"md"',
            description: "Internal padding of the card content",
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
