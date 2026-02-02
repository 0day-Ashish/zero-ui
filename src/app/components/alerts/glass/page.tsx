"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { AlertGlass } from "@/zeroui/components/alerts";

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
    filename: "components/alerts/alert-glass.tsx",
    code: `"use client";

import React from "react";
import { Info, CheckCircle2, AlertTriangle, XCircle, X } from "lucide-react";

type AlertType = "info" | "success" | "warning" | "error";

interface AlertGlassProps {
  type?: AlertType;
  title: string;
  description?: string;
  onClose?: () => void;
  className?: string;
}

export default function AlertGlass({
  type = "info",
  title,
  description,
  onClose,
  className = "",
}: AlertGlassProps) {
  // Implementation...
  return <div />;
}`,
  },
];

export default function AlertGlassPage() {
  return (
    <ComponentPageLayout
      componentName="Alert Glass"
      description="Frosted glass alerts that blend beautifully with complex backgrounds."
      componentItems={alertComponents}
      activeComponentId="alert-glass"
      prevComponent={{ name: "Alert Base", href: "/components/alerts" }}
      nextComponent={{ name: "Alert Cyber", href: "/components/alerts/cyber" }}
    >
      <ComponentPreview
        code={`<AlertGlass 
  type="info" 
  title="Glass Effect" 
  description="This uses backdrop-blur for a premium look." 
/>
<AlertGlass 
  type="success" 
  title="Payment Received" 
  description="Transaction verified on blockchain." 
/>`}
      >
        <div
          className="flex flex-col gap-6 w-full p-10 rounded-xl bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800')",
          }}
        >
          <AlertGlass
            type="info"
            title="Glass Effect"
            description="This alert uses backdrop-blur to blend seamlessly with this vibrant background."
          />
          <AlertGlass
            type="success"
            title="Transaction Verified"
            description="0.05 ETH received. Confirmation #8X872."
          />
          <AlertGlass
            type="error"
            title="Connection Lost"
            description="Attempting to re-establish secure link..."
          />
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="alert-glass"
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
