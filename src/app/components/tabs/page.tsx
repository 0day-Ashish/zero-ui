"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/zeroui/components/tabs";
import { User, Settings, Bell } from "lucide-react";

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
    filename: "components/tabs/tabs-base.tsx",
    code: `// See src/zeroui/components/tabs/tabs-base.tsx`,
  },
];

export default function TabsPage() {
  return (
    <ComponentPageLayout
      componentName="Tabs Base"
      description="A basic, accessible tabs component for switching between content panels."
      componentItems={tabsComponents}
      activeComponentId="tabs-base"
      prevComponent={{ name: "Dropdowns", href: "/components/dropdowns" }}
      nextComponent={{ name: "Tabs Glass", href: "/components/tabs/glass" }}
    >
      <div className="space-y-4">
        <ComponentPreview code={`<Tabs defaultValue="account" className="w-[400px]">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    Make changes to your account here.
  </TabsContent>
  <TabsContent value="password">
    Change your password here.
  </TabsContent>
</Tabs>`}>
          <div className="flex items-center justify-center p-8 w-full">
            <Tabs defaultValue="account" className="w-full max-w-[400px]">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="account" icon={<User className="w-4 h-4" />}>Account</TabsTrigger>
                <TabsTrigger value="notifications" icon={<Bell className="w-4 h-4" />}>Alerts</TabsTrigger>
                <TabsTrigger value="settings" icon={<Settings className="w-4 h-4" />}>Settings</TabsTrigger>
              </TabsList>
              <div className="mt-4 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
                <TabsContent value="account">
                  <h3 className="text-lg font-medium mb-2">Account Info</h3>
                  <p className="text-zinc-500 text-sm">Update your profile settings and email preferences here.</p>
                </TabsContent>
                <TabsContent value="notifications">
                  <h3 className="text-lg font-medium mb-2">Notifications</h3>
                  <p className="text-zinc-500 text-sm">Choose what we can send you.</p>
                </TabsContent>
                <TabsContent value="settings">
                  <h3 className="text-lg font-medium mb-2">General Settings</h3>
                  <p className="text-zinc-500 text-sm">Manage theme, language, and regional settings.</p>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </ComponentPreview>
      </div>

      <InstallationTabs
        componentName="tabs-base"
        dependencies={["clsx", "tailwind-merge"]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          { name: "defaultValue", type: "string", default: "-" },
          { name: "className", type: "string", default: '""' },
        ]}
      />
    </ComponentPageLayout>
  );
}
