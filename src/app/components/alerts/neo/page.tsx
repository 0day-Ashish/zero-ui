"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { AlertNeo } from "@/zeroui/components/alerts";

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
    filename: "components/alerts/alert-neo.tsx",
    code: `"use client";

import React from "react";
import { Info, Check, AlertOctagon, X } from "lucide-react";

// Implementation...
export default function AlertNeo() {
  return <div />;
}`,
  },
];

export default function AlertNeoPage() {
  return (
    <ComponentPageLayout
      componentName="Alert Neo"
      description="Bold, Neo-Brutalist alerts that demand attention."
      componentItems={alertComponents}
      activeComponentId="alert-neo"
      prevComponent={{ name: "Alert Cyber", href: "/components/alerts/cyber" }}
      nextComponent={{ name: "Avatars", href: "/components/avatars" }}
    >
      <ComponentPreview
        code={`<AlertNeo 
  type="info" 
  title="HEADS UP!" 
  description="We are updating our privacy policy tomorrow." 
/>
<AlertNeo 
  type="error" 
  title="PAYMENT FAILED" 
  description="Card declined. Please try a different method." 
/>`}
      >
        <div className="flex flex-col gap-6 w-full p-8 bg-zinc-100 dark:bg-zinc-900 rounded-xl">
          <AlertNeo
            type="info"
            title="HEADS UP!"
            description="We've updated our terms of service."
          />
          <AlertNeo
            type="success"
            title="YOU DID IT!"
            description="Account upgraded to Pro tier."
          />
          <AlertNeo
            type="warning"
            title="LOW BATTERY"
            description="Connect charger immediately."
            onClose={() => { }}
          />
          <AlertNeo
            type="error"
            title="CRASH!"
            description="Something went wrong. It's not you, it's us."
          />
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="alert-neo"
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
