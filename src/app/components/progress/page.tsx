"use client";

import React, { useState, useEffect } from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import {
  Progress,
  ProgressGradient,
  ProgressCircle,
  ProgressSteps,
} from "@/zeroui/components/progress";

const progressComponents = [
  { id: "progress", name: "Progress", href: "/components/progress" },
];

const previewCode = `import { Progress, ProgressGradient, ProgressCircle } from "@/zeroui/components/progress";

export default function Example() {
  return (
    <div className="space-y-6 w-full max-w-md">
      <Progress value={60} />
      <ProgressGradient value={75} gradient="purple" />
      <ProgressCircle value={80} />
    </div>
  );
}`;

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/progress/progress.tsx",
    code: `"use client";

import { cn } from "@/lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "success" | "warning" | "destructive";
  showValue?: boolean;
  indeterminate?: boolean;
}

export default function Progress({
  value = 0,
  max = 100,
  size = "md",
  variant = "default",
  showValue = false,
  indeterminate = false,
  className,
  ...props
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const sizes = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
  };

  const variants = {
    default: "bg-zinc-900 dark:bg-zinc-100",
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    destructive: "bg-red-500",
  };

  return (
    <div className={cn("w-full", className)} {...props}>
      <div
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuemin={0}
        aria-valuemax={max}
        className={cn(
          "w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800",
          sizes[size]
        )}
      >
        <div
          className={cn(
            "h-full rounded-full transition-all duration-300 ease-out",
            variants[variant]
          )}
          style={{ width: \`\${percentage}%\` }}
        />
      </div>
    </div>
  );
}`,
  },
];

export default function ProgressPage() {
  const [animatedValue, setAnimatedValue] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValue((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { label: "Details" },
    { label: "Payment" },
    { label: "Review" },
    { label: "Complete" },
  ];

  return (
    <ComponentPageLayout
      componentName="Progress"
      description="Visual indicators showing the completion status of a task or process."
      componentItems={progressComponents}
      activeComponentId="progress"
      prevComponent={{ name: "Spinner", href: "/components/spinners" }}
      nextComponent={{ name: "Slider", href: "/components/sliders" }}
    >
      {/* Main Preview */}
      <ComponentPreview code={previewCode}>
        <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
          <Progress value={60} />
          <ProgressGradient value={75} gradient="purple" />
          <div className="flex justify-center">
            <ProgressCircle value={80} />
          </div>
        </div>
      </ComponentPreview>

      {/* Variants */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Variants</h3>
      <ComponentPreview
        code={`<Progress value={60} variant="default" />
<Progress value={60} variant="success" />
<Progress value={60} variant="warning" />
<Progress value={60} variant="destructive" />`}
      >
        <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
          <div className="space-y-1">
            <span className="text-xs text-zinc-500">default</span>
            <Progress value={60} variant="default" />
          </div>
          <div className="space-y-1">
            <span className="text-xs text-zinc-500">success</span>
            <Progress value={60} variant="success" />
          </div>
          <div className="space-y-1">
            <span className="text-xs text-zinc-500">warning</span>
            <Progress value={60} variant="warning" />
          </div>
          <div className="space-y-1">
            <span className="text-xs text-zinc-500">destructive</span>
            <Progress value={60} variant="destructive" />
          </div>
        </div>
      </ComponentPreview>

      {/* Sizes */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Sizes</h3>
      <ComponentPreview
        code={`<Progress value={50} size="sm" />
<Progress value={50} size="md" />
<Progress value={50} size="lg" />`}
      >
        <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
          <div className="space-y-1">
            <span className="text-xs text-zinc-500">sm</span>
            <Progress value={50} size="sm" />
          </div>
          <div className="space-y-1">
            <span className="text-xs text-zinc-500">md</span>
            <Progress value={50} size="md" />
          </div>
          <div className="space-y-1">
            <span className="text-xs text-zinc-500">lg</span>
            <Progress value={50} size="lg" />
          </div>
        </div>
      </ComponentPreview>

      {/* With Value Label */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">With Value Label</h3>
      <ComponentPreview
        code={`<Progress value={75} showValue />`}
      >
        <div className="w-full max-w-md mx-auto">
          <Progress value={75} showValue />
        </div>
      </ComponentPreview>

      {/* Indeterminate */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Indeterminate</h3>
      <ComponentPreview
        code={`<Progress indeterminate />`}
      >
        <div className="w-full max-w-md mx-auto">
          <Progress indeterminate />
        </div>
      </ComponentPreview>

      {/* Gradient Progress */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Gradient Progress</h3>
      <ComponentPreview
        code={`<ProgressGradient value={70} gradient="blue" />
<ProgressGradient value={70} gradient="purple" />
<ProgressGradient value={70} gradient="green" />
<ProgressGradient value={70} gradient="orange" />
<ProgressGradient value={70} gradient="rainbow" animated />`}
      >
        <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
          <div className="space-y-1">
            <span className="text-xs text-zinc-500">blue</span>
            <ProgressGradient value={70} gradient="blue" />
          </div>
          <div className="space-y-1">
            <span className="text-xs text-zinc-500">purple</span>
            <ProgressGradient value={70} gradient="purple" />
          </div>
          <div className="space-y-1">
            <span className="text-xs text-zinc-500">green</span>
            <ProgressGradient value={70} gradient="green" />
          </div>
          <div className="space-y-1">
            <span className="text-xs text-zinc-500">orange</span>
            <ProgressGradient value={70} gradient="orange" />
          </div>
          <div className="space-y-1">
            <span className="text-xs text-zinc-500">rainbow (animated)</span>
            <ProgressGradient value={70} gradient="rainbow" animated />
          </div>
        </div>
      </ComponentPreview>

      {/* Circular Progress */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Circular Progress</h3>
      <ComponentPreview
        code={`<ProgressCircle value={25} size="sm" />
<ProgressCircle value={50} size="md" />
<ProgressCircle value={75} size="lg" />
<ProgressCircle value={90} size="xl" variant="gradient" />`}
      >
        <div className="flex flex-wrap gap-8 items-center justify-center">
          <ProgressCircle value={25} size="sm" />
          <ProgressCircle value={50} size="md" />
          <ProgressCircle value={75} size="lg" />
          <ProgressCircle value={90} size="xl" variant="gradient" />
        </div>
      </ComponentPreview>

      {/* Circular Variants */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Circular Variants</h3>
      <ComponentPreview
        code={`<ProgressCircle value={65} variant="default" />
<ProgressCircle value={65} variant="success" />
<ProgressCircle value={65} variant="warning" />
<ProgressCircle value={65} variant="destructive" />
<ProgressCircle value={65} variant="gradient" />`}
      >
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <ProgressCircle value={65} variant="default" />
            <span className="text-xs text-zinc-500">default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ProgressCircle value={65} variant="success" />
            <span className="text-xs text-zinc-500">success</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ProgressCircle value={65} variant="warning" />
            <span className="text-xs text-zinc-500">warning</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ProgressCircle value={65} variant="destructive" />
            <span className="text-xs text-zinc-500">destructive</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ProgressCircle value={65} variant="gradient" />
            <span className="text-xs text-zinc-500">gradient</span>
          </div>
        </div>
      </ComponentPreview>

      {/* Animated Progress */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Animated</h3>
      <ComponentPreview
        code={`const [value, setValue] = useState(0);
// Animate value from 0 to 100

<Progress value={value} showValue />
<ProgressCircle value={value} />`}
      >
        <div className="flex flex-col gap-6 items-center w-full max-w-md mx-auto">
          <Progress value={animatedValue} showValue />
          <ProgressCircle value={animatedValue} size="lg" variant="gradient" />
        </div>
      </ComponentPreview>

      {/* Steps Progress */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Steps Progress</h3>
      <ComponentPreview
        code={`const steps = [
  { label: "Details" },
  { label: "Payment" },
  { label: "Review" },
  { label: "Complete" },
];

<ProgressSteps steps={steps} currentStep={1} />`}
      >
        <div className="w-full max-w-lg mx-auto space-y-8">
          <ProgressSteps steps={steps} currentStep={currentStep} />
          <div className="flex justify-center gap-2">
            <button
              onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
              className="px-3 py-1.5 text-sm bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentStep((s) => Math.min(steps.length, s + 1))}
              className="px-3 py-1.5 text-sm bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200"
            >
              Next
            </button>
          </div>
        </div>
      </ComponentPreview>

      {/* Steps Variants */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Steps Variants</h3>
      <ComponentPreview
        code={`<ProgressSteps steps={steps} currentStep={2} variant="numbered" />
<ProgressSteps steps={steps} currentStep={2} variant="minimal" />`}
      >
        <div className="w-full max-w-lg mx-auto space-y-8">
          <div className="space-y-2">
            <span className="text-xs text-zinc-500">numbered (default)</span>
            <ProgressSteps steps={steps} currentStep={2} variant="numbered" />
          </div>
          <div className="space-y-2">
            <span className="text-xs text-zinc-500">minimal</span>
            <ProgressSteps steps={steps} currentStep={2} variant="minimal" />
          </div>
        </div>
      </ComponentPreview>

      {/* Installation */}
      <InstallationTabs
        componentName="progress"
        dependencies={["lucide-react"]}
        manualSteps={manualSteps}
      />

      {/* Props */}
      <PropsTable
        props={[
          { name: "value", type: "number", default: "0" },
          { name: "max", type: "number", default: "100" },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
          { name: "variant", type: '"default" | "success" | "warning" | "destructive"', default: '"default"' },
          { name: "showValue", type: "boolean", default: "false" },
          { name: "indeterminate", type: "boolean", default: "false" },
        ]}
      />
    </ComponentPageLayout>
  );
}
