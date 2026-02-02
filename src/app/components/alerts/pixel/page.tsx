"use client";

import React, { useState } from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { AlertPixel } from "@/zeroui/components/alerts";

const alertComponents = [
  { id: "alert-base", name: "Alert Base", href: "/components/alerts" },
  { id: "alert-glass", name: "Alert Glass", href: "/components/alerts/glass" },
  { id: "alert-cyber", name: "Alert Cyber", href: "/components/alerts/cyber" },
  { id: "alert-neo", name: "Alert Neo", href: "/components/alerts/neo" },
  { id: "alert-nature", name: "Alert Nature", href: "/components/alerts/nature" },
  { id: "alert-gradient", name: "Alert Gradient", href: "/components/alerts/gradient" },
  { id: "alert-pixel", name: "Alert Pixel", href: "/components/alerts/pixel" },
];

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/alerts/alert-pixel.tsx",
    code: `"use client";

import React from "react";
import { X, Gamepad2, Skull, Heart } from "lucide-react";

type AlertType = "info" | "success" | "warning" | "error";

interface AlertPixelProps {
  type?: AlertType;
  title: string;
  description?: string;
  onClose?: () => void;
  className?: string;
}

export default function AlertPixel({
  type = "info",
  title,
  description,
  onClose,
  className = "",
}: AlertPixelProps) {
  // Implementation...
  return <div />;
}`,
  },
];

export default function AlertPixelPage() {
  return (
    <ComponentPageLayout
      componentName="Alert Pixel"
      description="Retro 8-bit style alerts for gaming and fun interfaces."
      componentItems={alertComponents}
      activeComponentId="alert-pixel"
      prevComponent={{ name: "Alert Gradient", href: "/components/alerts/gradient" }}
      nextComponent={{ name: "Badges", href: "/components/badges" }}
    >
      <ComponentPreview
        code={`<AlertPixel 
  type="info" 
  title="LEVEL UP!" 
  description="You reached level 5." 
/>
<AlertPixel 
  type="error" 
  title="GAME OVER" 
  description="Insert coin to continue." 
/>`}
      >
        <div className="flex flex-col gap-8 w-full p-8 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
          <AlertPixel
            type="info"
            title="NEW ITEM FOUND"
            description="It's dangerous to go alone! Take this."
          />
          <AlertPixel
            type="success"
            title="HEALTH RESTORED"
            description="HP is fully recovered."
          />
          <AlertPixel
            type="warning"
            title="LOW AMMO"
            description="Reload required."
          />
          <AlertPixel
            type="error"
            title="BOSS DEFEATED"
            description="Loot dropped: Rare Sword."
            onClose={() => { }}
          />
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="alert-pixel"
        dependencies={["lucide-react"]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          {
            name: "type",
            type: '"info" | "success" | "warning" | "error"',
            default: '"info"',
            description: "Alert sentiment style",
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
