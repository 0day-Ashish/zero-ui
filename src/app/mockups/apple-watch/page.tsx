"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  PropsTable,
} from "@/components/component-page";
import { AppleWatchMockup } from "@/zeroui/components/mockups";

const mockupComponents = [
  { id: "iphone", name: "iPhone", href: "/mockups/iphone" },
  { id: "ipad", name: "iPad", href: "/mockups/ipad" },
  { id: "macbook", name: "MacBook", href: "/mockups/macbook" },
  { id: "imac", name: "iMac", href: "/mockups/imac" },
  { id: "apple-watch", name: "Apple Watch", href: "/mockups/apple-watch" },
  { id: "windows", name: "Windows", href: "/mockups/windows" },
];

const previewCode = `import { AppleWatchMockup } from "@/zeroui/components/mockups";

export default function Example() {
  return (
    <AppleWatchMockup model="series-9" size="45mm" color="midnight">
      <div className="w-full h-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
        <span className="text-white text-lg font-bold">12:00</span>
      </div>
    </AppleWatchMockup>
  );
}`;

export default function AppleWatchMockupPage() {
  return (
    <ComponentPageLayout
      componentName="Apple Watch Mockup"
      description="CSS-only Apple Watch device frames for showcasing watchOS apps and watch faces."
      componentItems={mockupComponents}
      activeComponentId="apple-watch"
      prevComponent={{ name: "iMac", href: "/mockups/imac" }}
    >
      {/* Basic Preview */}
      <ComponentPreview code={previewCode}>
        <div className="flex items-center justify-center p-4">
          <AppleWatchMockup model="series-9" size="45mm" color="midnight">
            <div className="w-full h-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
              <span className="text-white text-lg font-bold">12:00</span>
            </div>
          </AppleWatchMockup>
        </div>
      </ComponentPreview>

      {/* Models */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Models</h3>
      <ComponentPreview
        code={`<AppleWatchMockup model="ultra" />
<AppleWatchMockup model="series-9" />
<AppleWatchMockup model="se" />`}
      >
        <div className="flex items-end justify-center gap-8 p-4 scale-75">
          <div className="flex flex-col items-center gap-2">
            <AppleWatchMockup model="ultra" size="49mm" color="titanium">
              <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                <span className="text-white text-xs">Ultra</span>
              </div>
            </AppleWatchMockup>
            <span className="text-xs text-zinc-500">Ultra</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AppleWatchMockup model="series-9" size="45mm" color="midnight">
              <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                <span className="text-white text-xs">Series 9</span>
              </div>
            </AppleWatchMockup>
            <span className="text-xs text-zinc-500">Series 9</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AppleWatchMockup model="se" size="41mm" color="silver">
              <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                <span className="text-white text-xs">SE</span>
              </div>
            </AppleWatchMockup>
            <span className="text-xs text-zinc-500">SE</span>
          </div>
        </div>
      </ComponentPreview>

      {/* Sizes */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Sizes</h3>
      <ComponentPreview
        code={`<AppleWatchMockup size="41mm" />
<AppleWatchMockup size="45mm" />
<AppleWatchMockup size="49mm" />`}
      >
        <div className="flex items-end justify-center gap-6 p-4 scale-75">
          <div className="flex flex-col items-center gap-2">
            <AppleWatchMockup size="41mm" color="midnight">
              <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                <span className="text-white text-xs">41mm</span>
              </div>
            </AppleWatchMockup>
            <span className="text-xs text-zinc-500">41mm</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AppleWatchMockup size="45mm" color="midnight">
              <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                <span className="text-white text-xs">45mm</span>
              </div>
            </AppleWatchMockup>
            <span className="text-xs text-zinc-500">45mm</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AppleWatchMockup size="49mm" color="titanium" model="ultra">
              <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                <span className="text-white text-xs">49mm</span>
              </div>
            </AppleWatchMockup>
            <span className="text-xs text-zinc-500">49mm</span>
          </div>
        </div>
      </ComponentPreview>

      {/* Colors */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Case Colors</h3>
      <ComponentPreview
        code={`<AppleWatchMockup color="midnight" />
<AppleWatchMockup color="starlight" />
<AppleWatchMockup color="silver" />
<AppleWatchMockup color="gold" />
<AppleWatchMockup color="titanium" />`}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 p-4 scale-75">
          <div className="flex flex-col items-center gap-2">
            <AppleWatchMockup size="41mm" color="midnight">
              <div className="w-full h-full bg-zinc-800" />
            </AppleWatchMockup>
            <span className="text-xs text-zinc-500">Midnight</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AppleWatchMockup size="41mm" color="starlight">
              <div className="w-full h-full bg-amber-50" />
            </AppleWatchMockup>
            <span className="text-xs text-zinc-500">Starlight</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AppleWatchMockup size="41mm" color="silver">
              <div className="w-full h-full bg-zinc-200" />
            </AppleWatchMockup>
            <span className="text-xs text-zinc-500">Silver</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AppleWatchMockup size="41mm" color="gold">
              <div className="w-full h-full bg-amber-100" />
            </AppleWatchMockup>
            <span className="text-xs text-zinc-500">Gold</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AppleWatchMockup size="41mm" color="titanium">
              <div className="w-full h-full bg-zinc-400" />
            </AppleWatchMockup>
            <span className="text-xs text-zinc-500">Titanium</span>
          </div>
        </div>
      </ComponentPreview>

      {/* Band Colors */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Band Colors</h3>
      <ComponentPreview
        code={`<AppleWatchMockup bandColor="black" />
<AppleWatchMockup bandColor="white" />
<AppleWatchMockup bandColor="blue" />
<AppleWatchMockup bandColor="red" />
<AppleWatchMockup bandColor="green" />`}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 p-4 scale-75">
          <div className="flex flex-col items-center gap-2">
            <AppleWatchMockup size="41mm" color="midnight" bandColor="black">
              <div className="w-full h-full bg-zinc-800" />
            </AppleWatchMockup>
            <span className="text-xs text-zinc-500">Black</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AppleWatchMockup size="41mm" color="silver" bandColor="white">
              <div className="w-full h-full bg-zinc-200" />
            </AppleWatchMockup>
            <span className="text-xs text-zinc-500">White</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AppleWatchMockup size="41mm" color="midnight" bandColor="blue">
              <div className="w-full h-full bg-zinc-800" />
            </AppleWatchMockup>
            <span className="text-xs text-zinc-500">Blue</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AppleWatchMockup size="41mm" color="midnight" bandColor="red">
              <div className="w-full h-full bg-zinc-800" />
            </AppleWatchMockup>
            <span className="text-xs text-zinc-500">Red</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AppleWatchMockup size="41mm" color="midnight" bandColor="green">
              <div className="w-full h-full bg-zinc-800" />
            </AppleWatchMockup>
            <span className="text-xs text-zinc-500">Green</span>
          </div>
        </div>
      </ComponentPreview>

      {/* Props */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4 mt-8">Props</h3>
      <PropsTable
        props={[
          { name: "children", type: "ReactNode", default: "-" },
          { name: "model", type: '"ultra" | "series-9" | "se"', default: '"series-9"' },
          { name: "size", type: '"41mm" | "45mm" | "49mm"', default: '"45mm"' },
          { name: "color", type: '"midnight" | "starlight" | "silver" | "gold" | "titanium"', default: '"midnight"' },
          { name: "band", type: '"sport" | "braided" | "leather" | "link"', default: '"sport"' },
          { name: "bandColor", type: '"black" | "white" | "blue" | "red" | "green" | "pink"', default: '"black"' },
          { name: "className", type: "string", default: '""' },
          { name: "screenClassName", type: "string", default: '""' },
        ]}
      />
    </ComponentPageLayout>
  );
}
