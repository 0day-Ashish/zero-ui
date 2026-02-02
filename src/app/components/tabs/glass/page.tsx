"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { TabsGlass, TabsGlassList, TabsGlassTrigger, TabsGlassContent } from "@/zeroui/components/tabs";
import { Music, Mic, Radio } from "lucide-react";

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
    filename: "components/tabs/tabs-glass.tsx",
    code: `// See src/zeroui/components/tabs/tabs-glass.tsx`,
  },
];

export default function TabsGlassPage() {
  return (
    <ComponentPageLayout
      componentName="Tabs Glass"
      description="Elegant glass-effect tabs with fluid animations."
      componentItems={tabsComponents}
      activeComponentId="tabs-glass"
      prevComponent={{ name: "Tabs Base", href: "/components/tabs" }}
      nextComponent={{ name: "Tabs Neon", href: "/components/tabs/neon" }}
    >
      <div className="space-y-4">
        <ComponentPreview code={`<TabsGlass defaultValue="music">
  <TabsGlassList>
    <TabsGlassTrigger value="music">Music</TabsGlassTrigger>
    <TabsGlassTrigger value="podcasts">Podcasts</TabsGlassTrigger>
  </TabsGlassList>
  <TabsGlassContent value="music">...</TabsGlassContent>
  <TabsGlassContent value="podcasts">...</TabsGlassContent>
</TabsGlass>`}>
          <div className="flex items-center justify-center p-12 w-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-xl relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/30 rounded-full blur-2xl" />

            <TabsGlass defaultValue="music" className="w-full max-w-[500px]">
              <div className="flex justify-center mb-6">
                <TabsGlassList>
                  <TabsGlassTrigger value="music" icon={<Music />}>Music</TabsGlassTrigger>
                  <TabsGlassTrigger value="podcasts" icon={<Mic />}>Podcasts</TabsGlassTrigger>
                  <TabsGlassTrigger value="live" icon={<Radio />}>Live</TabsGlassTrigger>
                </TabsGlassList>
              </div>

              <TabsGlassContent value="music">
                <h3 className="text-xl font-semibold mb-2 text-zinc-800 dark:text-white">Now Playing</h3>
                <p className="text-zinc-600 dark:text-zinc-300">Discover new hits and old favorites in high fidelity.</p>
              </TabsGlassContent>
              <TabsGlassContent value="podcasts">
                <h3 className="text-xl font-semibold mb-2 text-zinc-800 dark:text-white">Trending Episodes</h3>
                <p className="text-zinc-600 dark:text-zinc-300">Catch up on the latest conversations.</p>
              </TabsGlassContent>
              <TabsGlassContent value="live">
                <h3 className="text-xl font-semibold mb-2 text-zinc-800 dark:text-white">Live Radio</h3>
                <p className="text-zinc-600 dark:text-zinc-300">Tune in to worldwide stations.</p>
              </TabsGlassContent>
            </TabsGlass>
          </div>
        </ComponentPreview>
      </div>

      <InstallationTabs
        componentName="tabs-glass"
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
