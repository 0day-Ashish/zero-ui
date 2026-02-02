"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  PropsTable,
} from "@/components/component-page";
import { iPadMockup as IPadMockup } from "@/zeroui/components/mockups";

const mockupComponents = [
  { id: "iphone", name: "iPhone", href: "/mockups/iphone" },
  { id: "ipad", name: "iPad", href: "/mockups/ipad" },
  { id: "macbook", name: "MacBook", href: "/mockups/macbook" },
  { id: "imac", name: "iMac", href: "/mockups/imac" },
  { id: "apple-watch", name: "Apple Watch", href: "/mockups/apple-watch" },
  { id: "windows", name: "Windows", href: "/mockups/windows" },
];

const previewCode = `import { iPadMockup } from "@/zeroui/components/mockups";

export default function Example() {
  return (
    <IPadMockup model="pro-11" color="space-gray">
      <div className="w-full h-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
        <span className="text-white text-xl font-bold">Your App</span>
      </div>
    </IPadMockup>
  );
}`;

export default function IPadMockupPage() {
  return (
    <ComponentPageLayout
      componentName="iPad Mockup"
      description="CSS-only iPad device frames for showcasing tablet apps and designs."
      componentItems={mockupComponents}
      activeComponentId="ipad"
      prevComponent={{ name: "iPhone", href: "/mockups/iphone" }}
      nextComponent={{ name: "MacBook", href: "/mockups/macbook" }}
    >
      {/* Basic Preview */}
      <ComponentPreview code={previewCode}>
        <div className="flex items-center justify-center p-4 scale-[0.7]">
          <IPadMockup model="pro-11" color="space-gray">
            <div className="w-full h-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
              <span className="text-white text-xl font-bold">Your App</span>
            </div>
          </IPadMockup>
        </div>
      </ComponentPreview>

      {/* Orientation */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Orientation</h3>
      <ComponentPreview
        code={`<IPadMockup orientation="portrait" />
<IPadMockup orientation="landscape" />`}
      >
        <div className="flex items-center justify-center gap-8 p-4 scale-[0.55]">
          <div className="flex flex-col items-center gap-2">
            <IPadMockup model="pro-11" orientation="portrait">
              <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                <span className="text-white text-sm">Portrait</span>
              </div>
            </IPadMockup>
            <span className="text-xs text-zinc-500">Portrait</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IPadMockup model="pro-11" orientation="landscape">
              <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                <span className="text-white text-sm">Landscape</span>
              </div>
            </IPadMockup>
            <span className="text-xs text-zinc-500">Landscape</span>
          </div>
        </div>
      </ComponentPreview>

      {/* Models */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Models</h3>
      <ComponentPreview
        code={`<IPadMockup model="pro-12.9" />
<IPadMockup model="pro-11" />
<IPadMockup model="air" />
<IPadMockup model="mini" />`}
      >
        <div className="flex items-end justify-center gap-6 p-4 scale-[0.5]">
          <div className="flex flex-col items-center gap-2">
            <IPadMockup model="pro-12.9">
              <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                <span className="text-white text-sm">Pro 12.9"</span>
              </div>
            </IPadMockup>
            <span className="text-xs text-zinc-500">Pro 12.9"</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IPadMockup model="pro-11">
              <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                <span className="text-white text-sm">Pro 11"</span>
              </div>
            </IPadMockup>
            <span className="text-xs text-zinc-500">Pro 11"</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IPadMockup model="air">
              <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                <span className="text-white text-sm">Air</span>
              </div>
            </IPadMockup>
            <span className="text-xs text-zinc-500">Air</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IPadMockup model="mini">
              <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                <span className="text-white text-sm">Mini</span>
              </div>
            </IPadMockup>
            <span className="text-xs text-zinc-500">Mini</span>
          </div>
        </div>
      </ComponentPreview>

      {/* Colors */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Colors</h3>
      <ComponentPreview
        code={`<IPadMockup color="space-gray" />
<IPadMockup color="silver" />`}
      >
        <div className="flex flex-wrap items-center justify-center gap-8 p-4 scale-[0.4]">
          <div className="flex flex-col items-center gap-2">
            <IPadMockup model="mini" color="space-gray">
              <div className="w-full h-full bg-zinc-800" />
            </IPadMockup>
            <span className="text-xs text-zinc-500">Space Gray</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IPadMockup model="mini" color="silver">
              <div className="w-full h-full bg-zinc-200" />
            </IPadMockup>
            <span className="text-xs text-zinc-500">Silver</span>
          </div>
        </div>
      </ComponentPreview>

      {/* Props */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4 mt-8">Props</h3>
      <PropsTable
        props={[
          { name: "children", type: "ReactNode", default: "-" },
          { name: "model", type: '"pro-12.9" | "pro-11" | "air" | "mini"', default: '"pro-11"' },
          { name: "color", type: '"space-gray" | "silver"', default: '"space-gray"' },
          { name: "scale", type: "number", default: "1" },
          { name: "orientation", type: '"portrait" | "landscape"', default: '"portrait"' },
          { name: "className", type: "string", default: '""' },
          { name: "screenClassName", type: "string", default: '""' },
        ]}
      />
    </ComponentPageLayout>
  );
}
