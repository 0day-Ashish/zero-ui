"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { TabsCyber, TabsCyberList, TabsCyberTrigger, TabsCyberContent } from "@/zeroui/components/tabs";
import { Terminal, Shield, Code2 } from "lucide-react";

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
    filename: "components/tabs/tabs-cyber.tsx",
    code: `// See src/zeroui/components/tabs/tabs-cyber.tsx`,
  },
];

export default function TabsCyberPage() {
  return (
    <ComponentPageLayout
      componentName="Tabs Cyber"
      description="Cyberpunk-inspired tech tabs with angled clips."
      componentItems={tabsComponents}
      activeComponentId="tabs-cyber"
      prevComponent={{ name: "Tabs Neon", href: "/components/tabs/neon" }}
      nextComponent={{ name: "Components", href: "/components" }}
    >
      <div className="space-y-4">
        <ComponentPreview code={`<TabsCyber defaultValue="logs">
  <TabsCyberList>
    <TabsCyberTrigger value="logs">LOGS_01</TabsCyberTrigger>
    <TabsCyberTrigger value="security">SEC_L2</TabsCyberTrigger>
  </TabsCyberList>
  <TabsCyberContent value="logs">
    [INFO] Connection established...
  </TabsCyberContent>
</TabsCyber>`}>
          <div className="flex items-center justify-center p-12 w-full bg-zinc-950 rounded-xl relative overflow-hidden">
            {/* Cyber background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(250,204,21,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(250,204,21,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <TabsCyber defaultValue="terminal" className="w-full max-w-[500px] relative z-10">
              <TabsCyberList>
                <TabsCyberTrigger value="terminal">TERMINAL</TabsCyberTrigger>
                <TabsCyberTrigger value="firewall">FIREWALL</TabsCyberTrigger>
                <TabsCyberTrigger value="source">SOURCE</TabsCyberTrigger>
              </TabsCyberList>

              <TabsCyberContent value="terminal">
                <div className="flex items-start gap-3">
                  <Terminal className="w-5 h-5 text-yellow-500 mt-1" />
                  <div className="font-mono text-sm text-yellow-500/80">
                    <p>&gt; init_sequence --force</p>
                    <p>&gt; loading assets...</p>
                    <p className="text-green-500">&gt; [SUCCESS] Kernel loaded.</p>
                    <p className="animate-pulse">&gt; _</p>
                  </div>
                </div>
              </TabsCyberContent>

              <TabsCyberContent value="firewall">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-5 h-5 text-yellow-500" />
                  <h4 className="font-bold text-yellow-500">DEFENSE MATRIX</h4>
                </div>
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-yellow-500 h-full w-[85%]" />
                </div>
                <p className="text-right text-xs font-mono text-yellow-500 mt-1">INTEGRITY: 85%</p>
              </TabsCyberContent>

              <TabsCyberContent value="source">
                <div className="flex items-center gap-3 mb-3">
                  <Code2 className="w-5 h-5 text-yellow-500" />
                  <h4 className="font-bold text-yellow-500">MAIN.RS</h4>
                </div>
                <pre className="text-xs font-mono text-zinc-400 bg-black/50 p-2 rounded">
                  {`fn main() {
  println!("Hello Cyber!");
  loop {
    update_system();
  }
}`}
                </pre>
              </TabsCyberContent>
            </TabsCyber>
          </div>
        </ComponentPreview>
      </div>

      <InstallationTabs
        componentName="tabs-cyber"
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
