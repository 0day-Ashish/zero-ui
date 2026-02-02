"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { AlertCyber } from "@/zeroui/components/alerts";

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
    filename: "components/alerts/alert-cyber.tsx",
    code: `"use client";

import React from "react";
import { Terminal, ShieldAlert, Cpu, Zap, X } from "lucide-react";

// Implementation...
export default function AlertCyber() {
  return <div />;
}`,
  },
];

export default function AlertCyberPage() {
  return (
    <ComponentPageLayout
      componentName="Alert Cyber"
      description="High-tech alerts with neon accents and scanline textures."
      componentItems={alertComponents}
      activeComponentId="alert-cyber"
      prevComponent={{ name: "Alert Glass", href: "/components/alerts/glass" }}
      nextComponent={{ name: "Alert Neo", href: "/components/alerts/neo" }}
    >
      <ComponentPreview
        code={`<AlertCyber 
  type="info" 
  title="System Update" 
  description="Kernel patch 9.0.2 applied successfully." 
/>
<AlertCyber 
  type="error" 
  title="Security Breach" 
  description="Unauthorized access detected in sector 4." 
/>`}
      >
        <div className="flex flex-col gap-6 w-full p-8 bg-zinc-950 rounded-xl border border-zinc-800">
          <AlertCyber
            type="info"
            title="SYSTEM_DIAGNOSTIC"
            description="Core temperature stable at 45°C."
          />
          <AlertCyber
            type="success"
            title="COMPILATION_COMPLETE"
            description="Build #9283 deployed to production."
          />
          <AlertCyber
            type="warning"
            title="POWER_SURGE"
            description="Voltage fluctuation detected in auxiliary units."
          />
          <AlertCyber
            type="error"
            title="FIREWALL_BREACH"
            description="Intrusion blocked. Origin: Unknown."
            onClose={() => console.log('dismiss')}
          />
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="alert-cyber"
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
