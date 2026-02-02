"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  PropsTable,
} from "@/components/component-page";
import { MacBookMockup } from "@/zeroui/components/mockups";

const mockupComponents = [
  { id: "iphone", name: "iPhone", href: "/mockups/iphone" },
  { id: "ipad", name: "iPad", href: "/mockups/ipad" },
  { id: "macbook", name: "MacBook", href: "/mockups/macbook" },
  { id: "imac", name: "iMac", href: "/mockups/imac" },
  { id: "apple-watch", name: "Apple Watch", href: "/mockups/apple-watch" },
  { id: "windows", name: "Windows", href: "/mockups/windows" },
];

const previewCode = `import { MacBookMockup } from "@/zeroui/components/mockups";

export default function Example() {
  return (
    <MacBookMockup model="pro-14" color="space-gray">
      <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
        <span className="text-white text-xl font-bold">Your Website</span>
      </div>
    </MacBookMockup>
  );
}`;

export default function MacBookMockupPage() {
  return (
    <ComponentPageLayout
      componentName="MacBook Mockup"
      description="CSS-only MacBook device frames for showcasing websites and desktop apps."
      componentItems={mockupComponents}
      activeComponentId="macbook"
      prevComponent={{ name: "iPad", href: "/mockups/ipad" }}
      nextComponent={{ name: "iMac", href: "/mockups/imac" }}
    >
      {/* Basic Preview */}
      <ComponentPreview code={previewCode}>
        <div className="flex items-center justify-center p-4 scale-75">
          <MacBookMockup model="pro-14" color="space-gray">
            <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <span className="text-white text-xl font-bold">Your Website</span>
            </div>
          </MacBookMockup>
        </div>
      </ComponentPreview>

      {/* Models */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Models</h3>
      <ComponentPreview
        code={`<MacBookMockup model="pro-16" />
<MacBookMockup model="pro-14" />
<MacBookMockup model="air-15" />
<MacBookMockup model="air-13" />`}
      >
        <div className="flex flex-col items-center gap-8 p-4 scale-50">
          <div className="flex items-end justify-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <MacBookMockup model="pro-16" color="space-gray">
                <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                  <span className="text-white text-sm">Pro 16"</span>
                </div>
              </MacBookMockup>
              <span className="text-xs text-zinc-500">Pro 16"</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MacBookMockup model="pro-14" color="space-gray">
                <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                  <span className="text-white text-sm">Pro 14"</span>
                </div>
              </MacBookMockup>
              <span className="text-xs text-zinc-500">Pro 14"</span>
            </div>
          </div>
          <div className="flex items-end justify-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <MacBookMockup model="air-15" color="midnight">
                <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                  <span className="text-white text-sm">Air 15"</span>
                </div>
              </MacBookMockup>
              <span className="text-xs text-zinc-500">Air 15"</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MacBookMockup model="air-13" color="midnight">
                <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                  <span className="text-white text-sm">Air 13"</span>
                </div>
              </MacBookMockup>
              <span className="text-xs text-zinc-500">Air 13"</span>
            </div>
          </div>
        </div>
      </ComponentPreview>

      {/* Colors */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Colors</h3>
      <ComponentPreview
        code={`<MacBookMockup color="space-gray" />
<MacBookMockup color="silver" />
<MacBookMockup color="midnight" />
<MacBookMockup color="starlight" />`}
      >
        <div className="flex flex-wrap items-center justify-center gap-6 p-4 scale-50">
          <div className="flex flex-col items-center gap-2">
            <MacBookMockup model="air-13" color="space-gray">
              <div className="w-full h-full bg-zinc-800" />
            </MacBookMockup>
            <span className="text-xs text-zinc-500">Space Gray</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MacBookMockup model="air-13" color="silver">
              <div className="w-full h-full bg-zinc-200" />
            </MacBookMockup>
            <span className="text-xs text-zinc-500">Silver</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MacBookMockup model="air-13" color="midnight">
              <div className="w-full h-full bg-slate-900" />
            </MacBookMockup>
            <span className="text-xs text-zinc-500">Midnight</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MacBookMockup model="air-13" color="starlight">
              <div className="w-full h-full bg-amber-50" />
            </MacBookMockup>
            <span className="text-xs text-zinc-500">Starlight</span>
          </div>
        </div>
      </ComponentPreview>

      {/* Props */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4 mt-8">Props</h3>
      <PropsTable
        props={[
          { name: "children", type: "ReactNode", default: "-" },
          { name: "model", type: '"pro-16" | "pro-14" | "air-15" | "air-13"', default: '"pro-14"' },
          { name: "color", type: '"space-gray" | "silver" | "midnight" | "starlight"', default: '"space-gray"' },
          { name: "className", type: "string", default: '""' },
          { name: "screenClassName", type: "string", default: '""' },
        ]}
      />
    </ComponentPageLayout>
  );
}
