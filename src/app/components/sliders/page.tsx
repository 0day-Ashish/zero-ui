"use client";

import React, { useState } from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import SliderBase from "@/zeroui/components/sliders/slider-base";

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
    filename: "components/sliders/slider-base.tsx",
    code: `"use client";

import React, { useRef, useState, useEffect } from "react";

interface SliderBaseProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  value?: number;
  onChange?: (value: number) => void;
  className?: string;
  disabled?: boolean;
}

export default function SliderBase({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
  value: controlledValue,
  onChange,
  className = "",
  disabled = false,
}: SliderBaseProps) {
  const [localValue, setLocalValue] = useState(defaultValue);
  const trackRef = useRef<HTMLDivElement>(null);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : localValue;

  const getPercentage = (val: number) => {
    return ((val - min) / (max - min)) * 100;
  };

  return (
    <div className={\`relative w-full h-6 flex items-center select-none \${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} \${className}\`}>
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
            className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-pointer disabled:cursor-not-allowed"
        />

      <div 
        ref={trackRef}
        className="relative w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden pointer-events-none"
      >
        <div 
          className="absolute top-0 left-0 h-full bg-zinc-900 dark:bg-white transition-[width] duration-75 ease-out"
          style={{ width: \`\${getPercentage(value)}%\` }}
        />
      </div>

      <div 
        className="absolute h-5 w-5 bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-white rounded-full shadow-md pointer-events-none transition-[left] duration-75 ease-out -translate-x-1/2"
        style={{ left: \`\${getPercentage(value)}%\` }}
      />
    </div>
  );
}`,
  },
];

export default function SliderBasePage() {
  const [val, setVal] = useState(50);

  return (
    <ComponentPageLayout
      componentName="Slider Base"
      description="A clean, accessible range slider with custom styling capabilities."
      componentItems={sliderComponents}
      activeComponentId="slider-base"
      prevComponent={{ name: "Modals", href: "/components/modals" }}
      nextComponent={{ name: "Slider Glass", href: "/components/sliders/glass" }}
    >
      <ComponentPreview
        code={`const [value, setValue] = useState(50);

<div className="w-full max-w-md space-y-8">
  <div className="space-y-4">
    <label className="text-sm font-medium text-zinc-500">
      Standard Slider (Value: {value})
    </label>
    <SliderBase 
      value={value} 
      onChange={setValue} 
    />
  </div>

  <div className="space-y-4">
    <label className="text-sm font-medium text-zinc-500">
      Disabled State
    </label>
    <SliderBase defaultValue={75} disabled />
  </div>
</div>`}
      >
        <div className="w-full max-w-md space-y-8 p-4">
          <div className="space-y-4">
            <label className="text-sm font-medium text-zinc-500">
              Standard Slider (Value: {val})
            </label>
            <SliderBase
              value={val}
              onChange={setVal}
            />
          </div>

          <div className="space-y-4">
            <label className="text-sm font-medium text-zinc-500">
              Disabled State
            </label>
            <SliderBase defaultValue={75} disabled />
          </div>
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="slider-base"
        dependencies={[]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          {
            name: "value",
            type: "number",
            default: "-",
            description: "Controlled value of the slider",
          },
          {
            name: "onChange",
            type: "(value: number) => void",
            default: "-",
            description: "Callback when value changes",
          },
          {
            name: "min",
            type: "number",
            default: "0",
            description: "Minimum value",
          },
          {
            name: "max",
            type: "number",
            default: "100",
            description: "Maximum value",
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
