"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  PropsTable,
} from "@/components/component-page";
import { iPhoneMockup as IPhoneMockup } from "@/zeroui/components/mockups";

const mockupComponents = [
  { id: "iphone", name: "iPhone", href: "/mockups/iphone" },
  { id: "ipad", name: "iPad", href: "/mockups/ipad" },
  { id: "macbook", name: "MacBook", href: "/mockups/macbook" },
  { id: "imac", name: "iMac", href: "/mockups/imac" },
  { id: "apple-watch", name: "Apple Watch", href: "/mockups/apple-watch" },
  { id: "windows", name: "Windows", href: "/mockups/windows" },
];

const previewCode = `import { iPhoneMockup as IPhoneMockup } from "@/zeroui/components/mockups";

export default function Example() {
  return (
    <IPhoneMockup model="15-pro" color="black">
      <div className="w-full h-full bg-linear-to-br from-purple-600 to-blue-600 flex items-center justify-center">
        <span className="text-white text-xl font-bold">Your App</span>
      </div>
    </IPhoneMockup>
  );
}`;

export default function IPhoneMockupPage() {
  return (
    <ComponentPageLayout
      componentName="iPhone Mockup"
      description="CSS-only iPhone device frames for showcasing mobile apps and designs."
      componentItems={mockupComponents}
      activeComponentId="iphone"
      nextComponent={{ name: "iPad", href: "/mockups/ipad" }}
    >
      {/* Basic Preview */}
      <ComponentPreview code={previewCode}>
        <div className="flex items-center justify-center p-4 scale-75">
          <IPhoneMockup model="15-pro" color="black">
            <div className="w-full h-full bg-linear-to-br from-purple-600 to-blue-600 flex items-center justify-center">
              <span className="text-white text-xl font-bold">Your App</span>
            </div>
          </IPhoneMockup>
        </div>
      </ComponentPreview>

      {/* Models */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Models</h3>
      <ComponentPreview
        code={`<IPhoneMockup model="15-pro" />
<IPhoneMockup model="15" />
<IPhoneMockup model="14" />
<IPhoneMockup model="se" />`}
      >
        <div className="flex items-end justify-center gap-8 p-4 scale-50">
          <div className="flex flex-col items-center gap-2">
            <IPhoneMockup model="15-pro" color="black">
              <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                <span className="text-white text-sm">15 Pro</span>
              </div>
            </IPhoneMockup>
            <span className="text-xs text-zinc-500">15 Pro</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IPhoneMockup model="15" color="black">
              <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                <span className="text-white text-sm">15</span>
              </div>
            </IPhoneMockup>
            <span className="text-xs text-zinc-500">15</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IPhoneMockup model="14" color="black">
              <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                <span className="text-white text-sm">14</span>
              </div>
            </IPhoneMockup>
            <span className="text-xs text-zinc-500">14</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IPhoneMockup model="se" color="black">
              <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                <span className="text-white text-sm">SE</span>
              </div>
            </IPhoneMockup>
            <span className="text-xs text-zinc-500">SE</span>
          </div>
        </div>
      </ComponentPreview>

      {/* Colors */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Colors</h3>
      <ComponentPreview
        code={`<IPhoneMockup color="black" />
<IPhoneMockup color="silver" />
<IPhoneMockup color="gold" />
<IPhoneMockup color="blue" />
<IPhoneMockup color="natural" />`}
      >
        <div className="flex items-center justify-center gap-6 p-4 scale-50">
          <div className="flex flex-col items-center gap-2">
            <IPhoneMockup color="black">
              <div className="w-full h-full bg-zinc-900" />
            </IPhoneMockup>
            <span className="text-xs text-zinc-500">Black</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IPhoneMockup color="silver">
              <div className="w-full h-full bg-zinc-100" />
            </IPhoneMockup>
            <span className="text-xs text-zinc-500">Silver</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IPhoneMockup color="gold">
              <div className="w-full h-full bg-amber-50" />
            </IPhoneMockup>
            <span className="text-xs text-zinc-500">Gold</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IPhoneMockup color="blue">
              <div className="w-full h-full bg-blue-900" />
            </IPhoneMockup>
            <span className="text-xs text-zinc-500">Blue</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IPhoneMockup color="natural">
              <div className="w-full h-full bg-stone-200" />
            </IPhoneMockup>
            <span className="text-xs text-zinc-500">Natural</span>
          </div>
        </div>
      </ComponentPreview>

      {/* With Image Content */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">With Content</h3>
      <ComponentPreview
        code={`<IPhoneMockup>
  <img
    src="/your-screenshot.png"
    alt="App screenshot"
    className="w-full h-full object-cover"
  />
</IPhoneMockup>`}
      >
        <div className="flex items-center justify-center p-4 scale-75">
          <IPhoneMockup>
            <div className="w-full h-full bg-linear-to-b from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-white/20 mb-4" />
              <div className="w-32 h-3 rounded bg-white/40 mb-2" />
              <div className="w-24 h-3 rounded bg-white/30" />
            </div>
          </IPhoneMockup>
        </div>
      </ComponentPreview>

      {/* Props */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4 mt-8">Props</h3>
      <PropsTable
        props={[
          { name: "children", type: "ReactNode", default: "-" },
          { name: "model", type: '"15-pro" | "15" | "14" | "se"', default: '"15-pro"' },
          { name: "color", type: '"black" | "silver" | "gold" | "blue" | "natural"', default: '"black"' },
          { name: "scale", type: "number", default: "1" },
          { name: "className", type: "string", default: '""' },
          { name: "screenClassName", type: "string", default: '""' },
        ]}
      />
    </ComponentPageLayout>
  );
}
