"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { TabsNeon, TabsNeonList, TabsNeonTrigger, TabsNeonContent } from "@/zeroui/components/tabs";
import { Cpu, Activity, Zap } from "lucide-react";

const tabsComponents = [
  { id: "tabs-base", name: "Tabs Base", href: "/components/tabs" },
  { id: "tabs-glass", name: "Tabs Glass", href: "/components/tabs/glass" },
  { id: "tabs-neon", name: "Tabs Neon", href: "/components/tabs/neon" },
  { id: "tabs-cyber", name: "Tabs Cyber", href: "/components/tabs/cyber" },
];

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Copy the code for the tabs component.",
    filename: "components/tabs/tabs-neon.tsx",
    code: `// See src/zeroui/components/tabs/tabs-neon.tsx`,
  },
];

export default function TabsNeonPage() {
  return (
    <ComponentPageLayout
      componentName="Tabs Neon"
      description="Futuristic glowing tabs for high-tech interfaces."
      componentItems={tabsComponents}
      activeComponentId="tabs-neon"
      prevComponent={{ name: "Tabs Glass", href: "/components/tabs/glass" }}
      nextComponent={{ name: "Tabs Cyber", href: "/components/tabs/cyber" }}
    >
      <div className="space-y-4">
        <ComponentPreview code={`<TabsNeon defaultValue="system">
  <TabsNeonList>
    <TabsNeonTrigger value="system">System</TabsNeonTrigger>
    <TabsNeonTrigger value="power">Power</TabsNeonTrigger>
  </TabsNeonList>
  <TabsNeonContent value="system">...</TabsNeonContent>
</TabsNeon>`}>
          <div className="flex items-center justify-center p-12 w-full bg-zinc-950 rounded-xl">
            <TabsNeon defaultValue="system" className="w-full max-w-[500px]">
              <TabsNeonList>
                <TabsNeonTrigger value="system">System</TabsNeonTrigger>
                <TabsNeonTrigger value="network">Network</TabsNeonTrigger>
                <TabsNeonTrigger value="diag">Diagnostics</TabsNeonTrigger>
              </TabsNeonList>

              <TabsNeonContent value="system" className="text-cyan-100 p-4">
                <div className="flex items-center gap-3 mb-4">
                  <Cpu className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-lg font-bold tracking-wider">SYSTEM STATUS</h3>
                </div>
                <div className="space-y-2 font-mono text-sm opacity-80">
                  <p className="flex justify-between"><span>CPU Load</span> <span>12%</span></p>
                  <p className="flex justify-between"><span>Memory</span> <span>4.2GB</span></p>
                  <p className="flex justify-between"><span>Uptime</span> <span>14d 2h</span></p>
                </div>
              </TabsNeonContent>

              <TabsNeonContent value="network" className="text-cyan-100 p-4">
                <div className="flex items-center gap-3 mb-4">
                  <Activity className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-lg font-bold tracking-wider">NETWORK</h3>
                </div>
                <div className="space-y-2 font-mono text-sm opacity-80">
                  <p className="flex justify-between"><span>Upload</span> <span>850 Mbps</span></p>
                  <p className="flex justify-between"><span>Download</span> <span>920 Mbps</span></p>
                </div>
              </TabsNeonContent>

              <TabsNeonContent value="diag" className="text-cyan-100 p-4">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-lg font-bold tracking-wider">DIAGNOSTICS</h3>
                </div>
                <div className="p-3 border border-cyan-500/30 bg-cyan-950/30 rounded font-mono text-xs">
                  All systems nominal. No faults detected.
                </div>
              </TabsNeonContent>
            </TabsNeon>
          </div>
        </ComponentPreview>
      </div>

      <InstallationTabs
        componentName="tabs-neon"
        dependencies={["clsx", "tailwind-merge"]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          { name: "defaultValue", type: "string", default: "-" },
        ]}
      />
    </ComponentPageLayout>
  );
}
