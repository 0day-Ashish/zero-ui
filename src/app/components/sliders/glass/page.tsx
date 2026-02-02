"use client";

import React, { useState } from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import SliderGlass from "@/zeroui/components/sliders/slider-glass";

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
    filename: "components/sliders/slider-glass.tsx",
    code: `"use client";

import React, { useState } from "react";

interface SliderGlassProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  value?: number;
  onChange?: (value: number) => void;
  className?: string;
  disabled?: boolean;
}

export default function SliderGlass({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
  value: controlledValue,
  onChange,
  className = "",
  disabled = false,
}: SliderGlassProps) {
  const [localValue, setLocalValue] = useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : localValue;

  const getPercentage = (val: number) => {
    return ((val - min) / (max - min)) * 100;
  };

  return (
    <div className={\`relative w-full h-8 flex items-center select-none \${disabled ? 'opacity-50' : ''} \${className}\`}>
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

      <div className="relative w-full h-4 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full overflow-hidden shadow-inner">
        <div 
          className="absolute top-0 left-0 h-full bg-white/40 dark:bg-white/30 backdrop-blur-sm transition-[width] duration-75"
          style={{ width: \`\${getPercentage(value)}%\` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
      </div>

      <div 
        className="absolute h-6 w-6 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-white/40 shadow-lg pointer-events-none transition-[left] duration-75 ease-out -translate-x-1/2 flex items-center justify-center transform group-hover:scale-110"
        style={{ left: \`\${getPercentage(value)}%\` }}
      >
        <div className="w-2 h-2 rounded-full bg-white/50" />
      </div>
    </div>
  );
}`,
  },
];

export default function SliderGlassPage() {
  return (
    <ComponentPageLayout
      componentName="Slider Glass"
      description="A frosted glass slider perfect for vibrant or image-heavy backgrounds."
      componentItems={sliderComponents}
      activeComponentId="slider-glass"
      prevComponent={{ name: "Slider Base", href: "/components/sliders" }}
      nextComponent={{ name: "Slider Neon", href: "/components/sliders/neon" }}
    >
      <ComponentPreview
        code={`<div className="w-full max-w-md p-8 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
  <div className="space-y-8">
    <div className="space-y-2">
      <label className="text-white/90 text-sm font-medium pl-1">Opacity</label>
      <SliderGlass defaultValue={70} />
    </div>
    <div className="space-y-2">
      <label className="text-white/90 text-sm font-medium pl-1">Blur Amount</label>
      <SliderGlass defaultValue={30} />
    </div>
  </div>
</div>`}
      >
        <div className="w-full max-w-md p-8 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
          <div className="space-y-8">
            <div className="space-y-2">
              <label className="text-white/90 text-sm font-medium pl-1">Opacity</label>
              <SliderGlass defaultValue={70} />
            </div>
            <div className="space-y-2">
              <label className="text-white/90 text-sm font-medium pl-1">Blur Amount</label>
              <SliderGlass defaultValue={30} />
            </div>
          </div>
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="slider-glass"
        dependencies={[]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          {
            name: "defaultValue",
            type: "number",
            default: "50",
            description: "Initial value for uncontrolled state",
          },
          {
            name: "className",
            type: "string",
            default: '""',
            description: "Additional CSS classes",
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
