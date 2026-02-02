"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import {
  Spinner,
  SpinnerDots,
  SpinnerBars,
  SpinnerPulse,
  SpinnerRing,
} from "@/zeroui/components/spinners";

const spinnerComponents = [
  { id: "spinner", name: "Spinner", href: "/components/spinners" },
];

const previewCode = `import { Spinner, SpinnerDots, SpinnerBars, SpinnerPulse, SpinnerRing } from "@/zeroui/components/spinners";

export default function Example() {
  return (
    <div className="flex gap-8 items-center">
      <Spinner />
      <SpinnerDots />
      <SpinnerBars />
      <SpinnerPulse />
      <SpinnerRing />
    </div>
  );
}`;

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/spinners/spinner.tsx",
    code: `"use client";

import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "primary" | "secondary" | "muted";
}

export default function Spinner({
  size = "md",
  variant = "default",
  className,
  ...props
}: SpinnerProps) {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-12 w-12",
  };

  const variants = {
    default: "text-zinc-900 dark:text-zinc-100",
    primary: "text-blue-600 dark:text-blue-400",
    secondary: "text-zinc-500 dark:text-zinc-400",
    muted: "text-zinc-400 dark:text-zinc-500",
  };

  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("inline-flex", className)}
      {...props}
    >
      <Loader2 className={cn("animate-spin", sizes[size], variants[variant])} />
      <span className="sr-only">Loading...</span>
    </div>
  );
}`,
  },
];

export default function SpinnersPage() {
  return (
    <ComponentPageLayout
      componentName="Spinner"
      description="Loading indicators to show async operations in progress."
      componentItems={spinnerComponents}
      activeComponentId="spinner"
      prevComponent={{ name: "Badge", href: "/components/badges" }}
      nextComponent={{ name: "Progress", href: "/components/progress" }}
    >
      {/* All Spinner Types */}
      <ComponentPreview code={previewCode}>
        <div className="flex flex-wrap gap-10 items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <Spinner />
            <span className="text-xs text-zinc-500">Default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SpinnerDots />
            <span className="text-xs text-zinc-500">Dots</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SpinnerBars />
            <span className="text-xs text-zinc-500">Bars</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SpinnerPulse />
            <span className="text-xs text-zinc-500">Pulse</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SpinnerRing />
            <span className="text-xs text-zinc-500">Ring</span>
          </div>
        </div>
      </ComponentPreview>

      {/* Sizes */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Sizes</h3>
      <ComponentPreview
        code={`<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />`}
      >
        <div className="flex flex-wrap gap-8 items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <Spinner size="sm" />
            <span className="text-xs text-zinc-500">sm</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner size="md" />
            <span className="text-xs text-zinc-500">md</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner size="lg" />
            <span className="text-xs text-zinc-500">lg</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner size="xl" />
            <span className="text-xs text-zinc-500">xl</span>
          </div>
        </div>
      </ComponentPreview>

      {/* Color Variants */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Color Variants</h3>
      <ComponentPreview
        code={`<Spinner variant="default" />
<Spinner variant="primary" />
<Spinner variant="secondary" />
<Spinner variant="muted" />`}
      >
        <div className="flex flex-wrap gap-8 items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <Spinner variant="default" size="lg" />
            <span className="text-xs text-zinc-500">default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner variant="primary" size="lg" />
            <span className="text-xs text-zinc-500">primary</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner variant="secondary" size="lg" />
            <span className="text-xs text-zinc-500">secondary</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner variant="muted" size="lg" />
            <span className="text-xs text-zinc-500">muted</span>
          </div>
        </div>
      </ComponentPreview>

      {/* Dots Variants */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Dots Spinner</h3>
      <ComponentPreview
        code={`<SpinnerDots size="sm" />
<SpinnerDots size="md" />
<SpinnerDots size="lg" />
<SpinnerDots variant="primary" />`}
      >
        <div className="flex flex-wrap gap-10 items-center justify-center">
          <SpinnerDots size="sm" />
          <SpinnerDots size="md" />
          <SpinnerDots size="lg" />
          <SpinnerDots variant="primary" size="lg" />
        </div>
      </ComponentPreview>

      {/* Bars Variants */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Bars Spinner</h3>
      <ComponentPreview
        code={`<SpinnerBars size="sm" />
<SpinnerBars size="md" />
<SpinnerBars size="lg" />
<SpinnerBars variant="primary" />`}
      >
        <div className="flex flex-wrap gap-10 items-center justify-center">
          <SpinnerBars size="sm" />
          <SpinnerBars size="md" />
          <SpinnerBars size="lg" />
          <SpinnerBars variant="primary" size="lg" />
        </div>
      </ComponentPreview>

      {/* Ring Variants */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Ring Spinner</h3>
      <ComponentPreview
        code={`<SpinnerRing variant="default" />
<SpinnerRing variant="primary" />
<SpinnerRing variant="gradient" />`}
      >
        <div className="flex flex-wrap gap-10 items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <SpinnerRing variant="default" size="lg" />
            <span className="text-xs text-zinc-500">default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SpinnerRing variant="primary" size="lg" />
            <span className="text-xs text-zinc-500">primary</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SpinnerRing variant="gradient" size="lg" />
            <span className="text-xs text-zinc-500">gradient</span>
          </div>
        </div>
      </ComponentPreview>

      {/* In Context */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">In Context</h3>
      <ComponentPreview
        code={`<button className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-lg">
  <Spinner size="sm" variant="muted" />
  Loading...
</button>`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-lg dark:bg-zinc-100 dark:text-zinc-900">
            <Spinner size="sm" className="text-white dark:text-zinc-900" />
            Loading...
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-white">
            <SpinnerDots size="sm" />
            Processing
          </button>
          <div className="flex items-center gap-2 text-zinc-500">
            <SpinnerRing size="sm" variant="primary" />
            <span className="text-sm">Syncing...</span>
          </div>
        </div>
      </ComponentPreview>

      {/* Installation */}
      <InstallationTabs
        componentName="spinner"
        dependencies={["lucide-react"]}
        manualSteps={manualSteps}
      />

      {/* Props */}
      <PropsTable
        props={[
          { name: "size", type: '"sm" | "md" | "lg" | "xl"', default: '"md"' },
          { name: "variant", type: '"default" | "primary" | "secondary" | "muted"', default: '"default"' },
          { name: "className", type: "string", default: "-" },
        ]}
      />
    </ComponentPageLayout>
  );
}
