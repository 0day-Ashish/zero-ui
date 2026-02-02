"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  PropsTable,
} from "@/components/component-page";
import { iMacMockup as IMacMockup } from "@/zeroui/components/mockups";

const mockupComponents = [
  { id: "iphone", name: "iPhone", href: "/mockups/iphone" },
  { id: "ipad", name: "iPad", href: "/mockups/ipad" },
  { id: "macbook", name: "MacBook", href: "/mockups/macbook" },
  { id: "imac", name: "iMac", href: "/mockups/imac" },
  { id: "apple-watch", name: "Apple Watch", href: "/mockups/apple-watch" },
  { id: "windows", name: "Windows", href: "/mockups/windows" },
];

const previewCode = `import { iMacMockup } from "@/zeroui/components/mockups";

export default function Example() {
  return (
    <IMacMockup model="24" color="blue">
      <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
        <span className="text-white text-xl font-bold">Your Desktop App</span>
      </div>
    </IMacMockup>
  );
}`;

export default function IMacMockupPage() {
  return (
    <ComponentPageLayout
      componentName="iMac Mockup"
      description="CSS-only iMac device frames for showcasing desktop applications and websites."
      componentItems={mockupComponents}
      activeComponentId="imac"
      prevComponent={{ name: "MacBook", href: "/mockups/macbook" }}
      nextComponent={{ name: "Apple Watch", href: "/mockups/apple-watch" }}
    >
      {/* Basic Preview */}
      <ComponentPreview code={previewCode}>
        <div className="flex items-center justify-center p-4 scale-50">
          <IMacMockup model="24" color="blue">
            <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <span className="text-white text-xl font-bold">Your Desktop App</span>
            </div>
          </IMacMockup>
        </div>
      </ComponentPreview>

      {/* Models */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Models</h3>
      <ComponentPreview
        code={`<IMacMockup model="24" />
<IMacMockup model="27" />`}
      >
        <div className="flex items-end justify-center gap-8 p-4 scale-[0.4]">
          <div className="flex flex-col items-center gap-2">
            <IMacMockup model="24" color="silver">
              <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                <span className="text-white text-sm">24"</span>
              </div>
            </IMacMockup>
            <span className="text-xs text-zinc-500">24 inch</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IMacMockup model="27" color="silver">
              <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                <span className="text-white text-sm">27"</span>
              </div>
            </IMacMockup>
            <span className="text-xs text-zinc-500">27 inch</span>
          </div>
        </div>
      </ComponentPreview>

      {/* Colors */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Colors</h3>
      <ComponentPreview
        code={`<IMacMockup color="silver" />
<IMacMockup color="blue" />
<IMacMockup color="green" />
<IMacMockup color="pink" />
<IMacMockup color="yellow" />
<IMacMockup color="orange" />
<IMacMockup color="purple" />`}
      >
        <div className="flex flex-wrap items-end justify-center gap-4 p-4 scale-[0.3]">
          <div className="flex flex-col items-center gap-2">
            <IMacMockup model="24" color="silver">
              <div className="w-full h-full bg-zinc-800" />
            </IMacMockup>
            <span className="text-xs text-zinc-500">Silver</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IMacMockup model="24" color="blue">
              <div className="w-full h-full bg-zinc-800" />
            </IMacMockup>
            <span className="text-xs text-zinc-500">Blue</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IMacMockup model="24" color="green">
              <div className="w-full h-full bg-zinc-800" />
            </IMacMockup>
            <span className="text-xs text-zinc-500">Green</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IMacMockup model="24" color="pink">
              <div className="w-full h-full bg-zinc-800" />
            </IMacMockup>
            <span className="text-xs text-zinc-500">Pink</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IMacMockup model="24" color="yellow">
              <div className="w-full h-full bg-zinc-800" />
            </IMacMockup>
            <span className="text-xs text-zinc-500">Yellow</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IMacMockup model="24" color="orange">
              <div className="w-full h-full bg-zinc-800" />
            </IMacMockup>
            <span className="text-xs text-zinc-500">Orange</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IMacMockup model="24" color="purple">
              <div className="w-full h-full bg-zinc-800" />
            </IMacMockup>
            <span className="text-xs text-zinc-500">Purple</span>
          </div>
        </div>
      </ComponentPreview>

      {/* Props */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4 mt-8">Props</h3>
      <PropsTable
        props={[
          { name: "children", type: "ReactNode", default: "-" },
          { name: "model", type: '"24" | "27"', default: '"24"' },
          { name: "color", type: '"silver" | "blue" | "green" | "pink" | "yellow" | "orange" | "purple"', default: '"silver"' },
          { name: "className", type: "string", default: '""' },
          { name: "screenClassName", type: "string", default: '""' },
        ]}
      />
    </ComponentPageLayout>
  );
}
