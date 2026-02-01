"use client";

import { useState } from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { ButtonLoading } from "@/zeroui/components/buttons";

// Different button components for sidebar
const buttonComponents = [
  { id: "button-basic", name: "Button Basic", href: "/components/buttons" },
  { id: "button-icon", name: "Button Icon", href: "/components/buttons/icon" },
  { id: "button-loading", name: "Button Loading", href: "/components/buttons/loading" },
  { id: "button-group", name: "Button Group", href: "/components/buttons/group" },
  { id: "button-social", name: "Button Social", href: "/components/buttons/social" },
  { id: "button-gradient", name: "Button Gradient", href: "/components/buttons/gradient" },
  { id: "button-glass", name: "Button Glass", href: "/components/buttons/glass" },
];

// Manual installation steps
const manualSteps = [
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/buttons/button-loading.tsx",
    code: `"use client";

import React from "react";

interface ButtonLoadingProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  loadingVariant?: "spinner" | "dots" | "pulse";
  isLoading?: boolean;
  children: React.ReactNode;
}

function Spinner({ className }: { className?: string }) {
  return (
    <svg className={\`animate-spin \${className}\`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  );
}

export default function ButtonLoading({
  variant = "default",
  size = "md",
  loadingVariant = "spinner",
  isLoading = false,
  children,
  className = "",
  disabled,
  ...props
}: ButtonLoadingProps) {
  // Component implementation...
}`,
  },
];

export default function ButtonLoadingPage() {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({
    spinner: false,
    dots: false,
    pulse: false,
    submit: false,
    save: false,
    delete: false,
  });

  const [completedStates, setCompletedStates] = useState<Record<string, boolean>>({
    complete1: false,
    complete2: false,
    complete3: false,
  });

  const [completedLoadingStates, setCompletedLoadingStates] = useState<Record<string, boolean>>({
    complete1: false,
    complete2: false,
    complete3: false,
  });

  const handleClick = (key: string) => {
    setLoadingStates((prev) => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setLoadingStates((prev) => ({ ...prev, [key]: false }));
    }, 2000);
  };

  const handleCompletedClick = (key: string) => {
    setCompletedLoadingStates((prev) => ({ ...prev, [key]: true }));
    setCompletedStates((prev) => ({ ...prev, [key]: false }));
    setTimeout(() => {
      setCompletedLoadingStates((prev) => ({ ...prev, [key]: false }));
      setCompletedStates((prev) => ({ ...prev, [key]: true }));
      // Reset after showing completed state
      setTimeout(() => {
        setCompletedStates((prev) => ({ ...prev, [key]: false }));
      }, 2000);
    }, 2000);
  };

  return (
    <ComponentPageLayout
      componentName="Button Loading"
      description="Buttons with loading states for async operations."
      componentItems={buttonComponents}
      activeComponentId="button-loading"
      prevComponent={{ name: "Button Icon", href: "/components/buttons/icon" }}
      nextComponent={{ name: "Button Group", href: "/components/buttons/group" }}
    >
      {/* Loading Variants */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Loading Variants</h3>
      <ComponentPreview
        code={`const [isLoading, setIsLoading] = useState(false);

const handleClick = () => {
  setIsLoading(true);
  setTimeout(() => setIsLoading(false), 2000);
};

<ButtonLoading loadingVariant="spinner" isLoading={isLoading} onClick={handleClick}>
  Spinner
</ButtonLoading>
<ButtonLoading loadingVariant="dots" isLoading={isLoading} onClick={handleClick}>
  Dots
</ButtonLoading>
<ButtonLoading loadingVariant="pulse" isLoading={isLoading} onClick={handleClick}>
  Pulse
</ButtonLoading>`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <ButtonLoading
            loadingVariant="spinner"
            isLoading={loadingStates.spinner}
            onClick={() => handleClick("spinner")}
          >
            Spinner
          </ButtonLoading>
          <ButtonLoading
            loadingVariant="dots"
            isLoading={loadingStates.dots}
            onClick={() => handleClick("dots")}
          >
            Dots
          </ButtonLoading>
          <ButtonLoading
            loadingVariant="pulse"
            isLoading={loadingStates.pulse}
            onClick={() => handleClick("pulse")}
          >
            Pulse
          </ButtonLoading>
        </div>
      </ComponentPreview>

      {/* Practical Examples */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Practical Examples</h3>
      <ComponentPreview
        code={`<ButtonLoading isLoading={isSubmitting} onClick={handleSubmit}>
  Submit Form
</ButtonLoading>
<ButtonLoading variant="outline" isLoading={isSaving} onClick={handleSave}>
  Save Changes
</ButtonLoading>
<ButtonLoading variant="ghost" loadingVariant="dots" isLoading={isDeleting}>
  Delete
</ButtonLoading>`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <ButtonLoading
            isLoading={loadingStates.submit}
            onClick={() => handleClick("submit")}
          >
            Submit Form
          </ButtonLoading>
          <ButtonLoading
            variant="outline"
            isLoading={loadingStates.save}
            onClick={() => handleClick("save")}
          >
            Save Changes
          </ButtonLoading>
          <ButtonLoading
            variant="ghost"
            loadingVariant="dots"
            isLoading={loadingStates.delete}
            onClick={() => handleClick("delete")}
          >
            Delete
          </ButtonLoading>
        </div>
      </ComponentPreview>

      {/* Sizes */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Sizes</h3>
      <ComponentPreview
        code={`<ButtonLoading size="sm" isLoading>Small</ButtonLoading>
<ButtonLoading size="md" isLoading>Medium</ButtonLoading>
<ButtonLoading size="lg" isLoading>Large</ButtonLoading>`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <ButtonLoading size="sm" isLoading>
            Small
          </ButtonLoading>
          <ButtonLoading size="md" isLoading>
            Medium
          </ButtonLoading>
          <ButtonLoading size="lg" isLoading>
            Large
          </ButtonLoading>
        </div>
      </ComponentPreview>

      {/* Variants with Loading */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Button Variants</h3>
      <ComponentPreview
        code={`<ButtonLoading variant="default" isLoading>Default</ButtonLoading>
<ButtonLoading variant="outline" isLoading>Outline</ButtonLoading>
<ButtonLoading variant="ghost" isLoading>Ghost</ButtonLoading>`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <ButtonLoading variant="default" isLoading>
            Default
          </ButtonLoading>
          <ButtonLoading variant="outline" isLoading>
            Outline
          </ButtonLoading>
          <ButtonLoading variant="ghost" isLoading>
            Ghost
          </ButtonLoading>
        </div>
      </ComponentPreview>

      {/* Completed State */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Completed State</h3>
      <ComponentPreview
        code={`const [isLoading, setIsLoading] = useState(false);
const [isCompleted, setIsCompleted] = useState(false);

const handleClick = () => {
  setIsLoading(true);
  setTimeout(() => {
    setIsLoading(false);
    setIsCompleted(true);
    setTimeout(() => setIsCompleted(false), 2000);
  }, 2000);
};

<ButtonLoading isLoading={isLoading} isCompleted={isCompleted} onClick={handleClick}>
  Submit
</ButtonLoading>
<ButtonLoading variant="outline" isLoading={isLoading} isCompleted={isCompleted} completedText="Saved!">
  Save
</ButtonLoading>
<ButtonLoading variant="ghost" isLoading={isLoading} isCompleted={isCompleted} completedText="Success">
  Process
</ButtonLoading>`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <ButtonLoading
            isLoading={completedLoadingStates.complete1}
            isCompleted={completedStates.complete1}
            onClick={() => handleCompletedClick("complete1")}
          >
            Submit
          </ButtonLoading>
          <ButtonLoading
            variant="outline"
            isLoading={completedLoadingStates.complete2}
            isCompleted={completedStates.complete2}
            completedText="Saved!"
            onClick={() => handleCompletedClick("complete2")}
          >
            Save
          </ButtonLoading>
          <ButtonLoading
            variant="ghost"
            isLoading={completedLoadingStates.complete3}
            isCompleted={completedStates.complete3}
            completedText="Success"
            onClick={() => handleCompletedClick("complete3")}
          >
            Process
          </ButtonLoading>
        </div>
      </ComponentPreview>

      {/* Installation */}
      <InstallationTabs
        componentName="button-loading"
        dependencies={[]}
        manualSteps={manualSteps}
      />

      {/* Props */}
      <PropsTable
        props={[
          { name: "variant", type: '"default" | "outline" | "ghost"', default: '"default"' },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
          { name: "loadingVariant", type: '"spinner" | "dots" | "pulse"', default: '"spinner"' },
          { name: "isLoading", type: "boolean", default: "false" },
          { name: "isCompleted", type: "boolean", default: "false" },
          { name: "completedText", type: "string", default: '"Done"' },
          { name: "children", type: "ReactNode", default: "-" },
          { name: "className", type: "string", default: '""' },
          { name: "disabled", type: "boolean", default: "false" },
        ]}
      />
    </ComponentPageLayout>
  );
}
