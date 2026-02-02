"use client";

import React, { useState } from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { AlertGradient } from "@/zeroui/components/alerts";

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
    filename: "components/alerts/alert-gradient.tsx",
    code: `"use client";

import React from "react";
import { Sparkles, X } from "lucide-react";

interface AlertGradientProps {
  title: string;
  description?: string;
  onClose?: () => void;
  className?: string;
}

export default function AlertGradient({
  title,
  description,
  onClose,
  className = "",
}: AlertGradientProps) {
  // Implementation...
  return <div />;
}`,
  },
];

export default function AlertGradientPage() {
  return (
    <ComponentPageLayout
      componentName="Alert Gradient"
      description="A vibrant, modern alert with animated gradients and mesh effects."
      componentItems={alertComponents}
      activeComponentId="alert-gradient"
      prevComponent={{ name: "Alert Nature", href: "/components/alerts/nature" }}
      nextComponent={{ name: "Alert Pixel", href: "/components/alerts/pixel" }}
    >
      <ComponentPreview
        code={`<AlertGradient 
  title="New Feature Unlocked" 
  description="Try out the new AI generator now available in your dashboard." 
/>`}
      >
        <div className="flex flex-col gap-6 w-full p-8 bg-zinc-50 dark:bg-zinc-900 rounded-xl">
          <AlertGradient
            title="Welcome to Premium"
            description="You have successfully upgraded your account."
          />
          <AlertGradient
            title="Magic Link Sent"
            description="Check your inbox to sign in."
            onClose={() => { }}
          />
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="alert-gradient"
        dependencies={["lucide-react"]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          {
            name: "title",
            type: "string",
            default: "-",
            description: "Alert title",
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
