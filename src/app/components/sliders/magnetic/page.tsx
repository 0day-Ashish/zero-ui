"use client";

import React, { useState } from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import SliderMagnetic from "@/zeroui/components/sliders/slider-magnetic";

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
    filename: "components/sliders/slider-magnetic.tsx",
    code: `"use client";

import React, { useState, useEffect } from "react";

interface SliderMagneticProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  value?: number;
  onChange?: (value: number) => void;
  ticks?: number[];
  className?: string;
  disabled?: boolean;
}

export default function SliderMagnetic({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
  value: controlledValue,
  onChange,
  ticks = [0, 25, 50, 75, 100],
  className = "",
  disabled = false,
}: SliderMagneticProps) {
  const [localValue, setLocalValue] = useState(defaultValue);
  const [isDidSnap, setIsDidSnap] = useState(false);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : localValue;

  const getPercentage = (val: number) => {
    return ((val - min) / (max - min)) * 100;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let val = parseFloat(e.target.value);
      
      const snapThreshold = (max - min) * 0.05;
      let snapped = false;
      
      for (const tick of ticks) {
          if (Math.abs(val - tick) < snapThreshold) {
              val = tick;
              snapped = true;
              break;
          }
      }
      
      if (snapped && !isDidSnap) {
          setIsDidSnap(true);
      } else if (!snapped) {
          setIsDidSnap(false);
      }

      if (!isControlled) setLocalValue(val);
      onChange?.(val);
  };

  return (
    <div className={\`relative w-full h-12 flex items-center select-none \${disabled ? 'opacity-50' : ''} \${className}\`}>
        <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            disabled={disabled}
            onChange={handleInputChange}
            className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-pointer"
        />

      <div className="relative w-full h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center">
         {ticks.map((tick) => (
             <div 
                key={tick}
                className={\`absolute w-1 h-3 rounded-full transition-colors duration-200 -translate-x-1/2 \${
                    Math.abs(value - tick) < 0.1 ? 'bg-indigo-500 h-4 w-1.5' : 'bg-zinc-300 dark:bg-zinc-700'
                }\`}
                style={{ left: \`\${getPercentage(tick)}%\` }}
             />
         ))}
         
         <div 
            className="absolute top-0 left-0 h-full bg-indigo-500 rounded-full opacity-50 transition-[width] duration-100"
            style={{ width: \`\${getPercentage(value)}%\` }}
         />
      </div>

      <div 
        className={\`absolute h-6 w-6 bg-white dark:bg-zinc-900 border-2 rounded-full shadow-lg pointer-events-none transition-all duration-150 ease-out -translate-x-1/2 flex items-center justify-center \${isDidSnap ? 'border-indigo-500 scale-110' : 'border-zinc-500'}\`}
        style={{ left: \`\${getPercentage(value)}%\` }}
      >
          <div className={\`w-2 h-2 rounded-full transition-colors \${isDidSnap ? 'bg-indigo-500' : 'bg-zinc-400'}\`} />
      </div>
    </div>
  );
}`,
  },
];

export default function SliderMagneticPage() {
  return (
    <ComponentPageLayout
      componentName="Slider Magnetic"
      description="A slider that 'snaps' to specific tick marks, with visual feedback."
      componentItems={sliderComponents}
      activeComponentId="slider-magnetic"
      prevComponent={{ name: "Slider Neon", href: "/components/sliders/neon" }}
      nextComponent={{ name: "Dropdowns", href: "/components/dropdowns" }}
    >
      <ComponentPreview
        code={`<div className="w-full max-w-md space-y-8 p-4">
  <div className="space-y-4">
    <label className="text-sm font-medium text-zinc-500">
      Snap to Checkpoints
    </label>
    <SliderMagnetic 
      ticks={[0, 20, 40, 60, 80, 100]} 
      defaultValue={40} 
    />
  </div>
</div>`}
      >
        <div className="w-full max-w-md space-y-8 p-4">
          <div className="space-y-4">
            <label className="text-sm font-medium text-zinc-500">
              Snap to Checkpoints
            </label>
            <SliderMagnetic
              ticks={[0, 20, 40, 60, 80, 100]}
              defaultValue={40}
            />
          </div>
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="slider-magnetic"
        dependencies={[]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          {
            name: "ticks",
            type: "number[]",
            default: "[0, 25, 50, 75, 100]",
            description: "Array of values to snap to",
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
