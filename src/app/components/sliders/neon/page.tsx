"use client";

import React, { useState } from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import SliderNeon from "@/zeroui/components/sliders/slider-neon";

const sliderComponents = [
  { id: "slider-base", name: "Slider Base", href: "/components/sliders" },
  { id: "slider-glass", name: "Slider Glass", href: "/components/sliders/glass" },
  { id: "slider-neon", name: "Slider Neon", href: "/components/sliders/neon" },
  { id: "slider-magnetic", name: "Slider Magnetic", href: "/components/sliders/magnetic" },
];

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/sliders/slider-neon.tsx",
    code: `"use client";

import React, { useState } from "react";

interface SliderNeonProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  value?: number;
  onChange?: (value: number) => void;
  color?: string;
  className?: string;
  disabled?: boolean;
}

export default function SliderNeon({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
  value: controlledValue,
  onChange,
  color = "#d946ef",
  className = "",
  disabled = false,
}: SliderNeonProps) {
  const [localValue, setLocalValue] = useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : localValue;

  const getPercentage = (val: number) => {
    return ((val - min) / (max - min)) * 100;
  };

  const pct = getPercentage(value);

  return (
    <div className={\`relative w-full h-10 flex items-center select-none \${disabled ? 'opacity-50' : ''} \${className}\`}>
        <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            disabled={disabled}
            onChange={(e) => {
                const val = parseFloat(e.target.value);
                if (!isControlled) setLocalValue(val);
                onChange?.(val);
            }}
            className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-pointer"
        />

      <div className="relative w-full h-1.5 bg-zinc-900 rounded-full">
        <div 
          className="absolute top-0 left-0 h-full rounded-full transition-[width] duration-75 relative"
          style={{ width: \`\${pct}%\`, backgroundColor: color, boxShadow: \`0 0 10px \${color}, 0 0 20px \${color}\` }}
        >
             <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-white rounded-full blur-sm opacity-50" />
        </div>
        
         <div 
          className="absolute top-0 right-0 h-full bg-zinc-800 rounded-r-full -z-10"
          style={{ width: \`\${100 - pct}%\` }}
        />
      </div>

      <div 
        className="absolute h-6 w-6 bg-black border-2 rounded-md pointer-events-none transition-[left] duration-75 ease-out -translate-x-1/2 flex items-center justify-center -rotate-45"
        style={{ left: \`\${pct}%\`, borderColor: color, boxShadow: \`0 0 10px \${color}\` }}
      >
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
      </div>
    </div>
  );
}`,
  },
];

export default function SliderNeonPage() {
  return (
    <ComponentPageLayout
      componentName="Slider Neon"
      description="A high-contrast cyberpunk slider with glowing effects."
      componentItems={sliderComponents}
      activeComponentId="slider-neon"
      prevComponent={{ name: "Slider Glass", href: "/components/sliders/glass" }}
      nextComponent={{ name: "Slider Magnetic", href: "/components/sliders/magnetic" }}
    >
      <ComponentPreview
        code={`<div className="w-full max-w-md p-8 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-8">
  <div className="space-y-2">
    <label className="text-zinc-400 text-xs font-mono uppercase tracking-widest pl-1">System Volume</label>
    <SliderNeon defaultValue={65} color="#d946ef" />
  </div>
  <div className="space-y-2">
    <label className="text-zinc-400 text-xs font-mono uppercase tracking-widest pl-1">Energy Output</label>
    <SliderNeon defaultValue={85} color="#06b6d4" />
  </div>
  <div className="space-y-2">
    <label className="text-zinc-400 text-xs font-mono uppercase tracking-widest pl-1">Shield Integrity</label>
    <SliderNeon defaultValue={40} color="#84cc16" />
  </div>
</div>`}
      >
        <div className="w-full max-w-md p-8 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-8">
          <div className="space-y-2">
            <label className="text-zinc-400 text-xs font-mono uppercase tracking-widest pl-1">System Volume</label>
            <SliderNeon defaultValue={65} color="#d946ef" />
          </div>
          <div className="space-y-2">
            <label className="text-zinc-400 text-xs font-mono uppercase tracking-widest pl-1">Energy Output</label>
            <SliderNeon defaultValue={85} color="#06b6d4" />
          </div>
          <div className="space-y-2">
            <label className="text-zinc-400 text-xs font-mono uppercase tracking-widest pl-1">Shield Integrity</label>
            <SliderNeon defaultValue={40} color="#84cc16" />
          </div>
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="slider-neon"
        dependencies={[]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          {
            name: "color",
            type: "string",
            default: '"#d946ef"',
            description: "Hex color code for the glow effect",
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
