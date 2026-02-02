"use client";

import React, { useState } from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { AlertBase } from "@/zeroui/components/alerts";

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
    filename: "components/alerts/alert-base.tsx",
    code: `"use client";

import React from "react";
import { Info, CheckCircle2, AlertTriangle, XCircle, X } from "lucide-react";

type AlertType = "info" | "success" | "warning" | "error";

interface AlertBaseProps {
  type?: AlertType;
  title: string;
  description?: string;
  onClose?: () => void;
  className?: string;
}

export default function AlertBase({
  type = "info",
  title,
  description,
  onClose,
  className = "",
}: AlertBaseProps) {
  // Implementation...
  return <div />;
}`,
  },
];

export default function AlertBasePage() {
  const [show, setShow] = useState(true);

  return (
    <ComponentPageLayout
      componentName="Alert Base"
      description="A standard, accessible alert component for feedback and messaging."
      componentItems={alertComponents}
      activeComponentId="alert-base"
      prevComponent={{ name: "Modal Cyber", href: "/components/modals/cyber" }}
      nextComponent={{ name: "Alert Glass", href: "/components/alerts/glass" }}
    >
      <ComponentPreview
        code={`<AlertBase 
  type="info" 
  title="Information" 
  description="This is a standard informational alert." 
/>
<AlertBase 
  type="success" 
  title="Success" 
  description="Your changes have been saved successfully." 
/>
<AlertBase 
  type="warning" 
  title="Warning" 
  description="Please complete your profile configuration." 
/>
<AlertBase 
  type="error" 
  title="Error" 
  description="Something went wrong. Please try again." 
  onClose={() => console.log('Closed')}
/>`}
      >
        <div className="flex flex-col gap-4 w-full max-w-md">
          <AlertBase
            type="info"
            title="Update Available"
            description="A new version of the dashboard is available."
          />
          <AlertBase
            type="success"
            title="Success"
            description="Your changes have been saved successfully."
          />
          <AlertBase
            type="warning"
            title="Warning"
            description="Your subscription is expiring soon."
          />
          {show && (
            <AlertBase
              type="error"
              title="Connection Error"
              description="Failed to connect to the server."
              onClose={() => setShow(false)}
            />
          )}
          {!show && (
            <button
              onClick={() => setShow(true)}
              className="text-sm text-zinc-500 underline self-center"
            >
              Reset Alert
            </button>
          )}
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="alert-base"
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
          {
            name: "title",
            type: "string",
            default: "-",
            description: "Alert title",
          },
          {
            name: "description",
            type: "string",
            default: "-",
            description: "Alert message body",
          },
          {
            name: "onClose",
            type: "() => void",
            default: "-",
            description: "Optional close handler",
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
