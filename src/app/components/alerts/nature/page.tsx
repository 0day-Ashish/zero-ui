"use client";

import React, { useState } from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { AlertNature } from "@/zeroui/components/alerts";

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
    filename: "components/alerts/alert-nature.tsx",
    code: `"use client";

import React from "react";
import { Leaf, Sun, Droplets, X } from "lucide-react";

type AlertType = "info" | "success" | "warning";

interface AlertNatureProps {
  type?: AlertType;
  title: string;
  description?: string;
  onClose?: () => void;
  className?: string;
}

export default function AlertNature({
  type = "info",
  title,
  description,
  onClose,
  className = "",
}: AlertNatureProps) {
  // Implementation...
  return <div />;
}`,
  },
];

export default function AlertNaturePage() {
  return (
    <ComponentPageLayout
      componentName="Alert Nature"
      description="Organic, calming alerts for wellness and eco-friendly interfaces."
      componentItems={alertComponents}
      activeComponentId="alert-nature"
      prevComponent={{ name: "Alert Neo", href: "/components/alerts/neo" }}
      nextComponent={{ name: "Alert Gradient", href: "/components/alerts/gradient" }}
    >
      <ComponentPreview
        code={`<AlertNature 
  type="info" 
  title="Just Breathe" 
  description="Take a moment to center yourself." 
/>
<AlertNature 
  type="success" 
  title="Task Complete" 
  description="You've planted a new habit today." 
/>`}
      >
        <div
          className="flex flex-col gap-6 w-full p-10 rounded-xl bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800')",
          }}
        >
          <div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl flex flex-col gap-4">
            <AlertNature
              type="info"
              title="Morning Sunlight"
              description="The best time for focus is now."
            />
            <AlertNature
              type="success"
              title="Growth Recorded"
              description="Your progress has been saved naturally."
            />
            <AlertNature
              type="warning"
              title="Hydration Reminder"
              description="Remember to drink a glass of water."
              onClose={() => { }}
            />
          </div>
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="alert-nature"
        dependencies={["lucide-react"]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          {
            name: "type",
            type: '"info" | "success" | "warning"',
            default: '"info"',
            description: "Alert sentiment style",
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
