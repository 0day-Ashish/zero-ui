"use client";

import { useState } from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { ButtonGroup } from "@/zeroui/components/buttons";
import {
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  List,
  ListOrdered,
  Grid,
  LayoutList,
} from "lucide-react";

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
    filename: "components/buttons/button-group.tsx",
    code: `"use client";

import React from "react";

interface ButtonGroupProps {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  orientation?: "horizontal" | "vertical";
  children: React.ReactNode;
  className?: string;
}

interface ButtonGroupItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  children: React.ReactNode;
}

function ButtonGroupItem({ isActive = false, children, className = "", ...props }: ButtonGroupItemProps) {
  return (
    <button className={\`group-item \${isActive ? "active" : ""} \${className}\`} data-active={isActive} {...props}>
      {children}
    </button>
  );
}

export default function ButtonGroup({ variant = "default", size = "md", orientation = "horizontal", children, className = "" }: ButtonGroupProps) {
  // Component implementation...
}

ButtonGroup.Item = ButtonGroupItem;`,
  },
];

export default function ButtonGroupPage() {
  const [alignment, setAlignment] = useState("left");
  const [formatting, setFormatting] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState("grid");
  const [listType, setListType] = useState("bullet");

  const toggleFormatting = (format: string) => {
    setFormatting((prev) =>
      prev.includes(format) ? prev.filter((f) => f !== format) : [...prev, format]
    );
  };

  return (
    <ComponentPageLayout
      componentName="Button Group"
      description="Group related buttons together with connected styling."
      componentItems={buttonComponents}
      activeComponentId="button-group"
      prevComponent={{ name: "Button Loading", href: "/components/buttons/loading" }}
      nextComponent={{ name: "Button Social", href: "/components/buttons/social" }}
    >
      {/* Text Alignment */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Text Alignment</h3>
      <ComponentPreview
        code={`const [alignment, setAlignment] = useState("left");

<ButtonGroup>
  <ButtonGroup.Item isActive={alignment === "left"} onClick={() => setAlignment("left")}>
    <AlignLeft className="w-4 h-4" />
  </ButtonGroup.Item>
  <ButtonGroup.Item isActive={alignment === "center"} onClick={() => setAlignment("center")}>
    <AlignCenter className="w-4 h-4" />
  </ButtonGroup.Item>
  <ButtonGroup.Item isActive={alignment === "right"} onClick={() => setAlignment("right")}>
    <AlignRight className="w-4 h-4" />
  </ButtonGroup.Item>
  <ButtonGroup.Item isActive={alignment === "justify"} onClick={() => setAlignment("justify")}>
    <AlignJustify className="w-4 h-4" />
  </ButtonGroup.Item>
</ButtonGroup>`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <ButtonGroup>
            <ButtonGroup.Item isActive={alignment === "left"} onClick={() => setAlignment("left")}>
              <AlignLeft className="w-4 h-4" />
            </ButtonGroup.Item>
            <ButtonGroup.Item isActive={alignment === "center"} onClick={() => setAlignment("center")}>
              <AlignCenter className="w-4 h-4" />
            </ButtonGroup.Item>
            <ButtonGroup.Item isActive={alignment === "right"} onClick={() => setAlignment("right")}>
              <AlignRight className="w-4 h-4" />
            </ButtonGroup.Item>
            <ButtonGroup.Item isActive={alignment === "justify"} onClick={() => setAlignment("justify")}>
              <AlignJustify className="w-4 h-4" />
            </ButtonGroup.Item>
          </ButtonGroup>
        </div>
      </ComponentPreview>

      {/* Text Formatting (Multi-select) */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Text Formatting</h3>
      <ComponentPreview
        code={`const [formatting, setFormatting] = useState<string[]>([]);

const toggleFormatting = (format: string) => {
  setFormatting((prev) =>
    prev.includes(format) ? prev.filter((f) => f !== format) : [...prev, format]
  );
};

<ButtonGroup>
  <ButtonGroup.Item isActive={formatting.includes("bold")} onClick={() => toggleFormatting("bold")}>
    <Bold className="w-4 h-4" />
  </ButtonGroup.Item>
  <ButtonGroup.Item isActive={formatting.includes("italic")} onClick={() => toggleFormatting("italic")}>
    <Italic className="w-4 h-4" />
  </ButtonGroup.Item>
  <ButtonGroup.Item isActive={formatting.includes("underline")} onClick={() => toggleFormatting("underline")}>
    <Underline className="w-4 h-4" />
  </ButtonGroup.Item>
  <ButtonGroup.Item isActive={formatting.includes("strike")} onClick={() => toggleFormatting("strike")}>
    <Strikethrough className="w-4 h-4" />
  </ButtonGroup.Item>
</ButtonGroup>`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <ButtonGroup>
            <ButtonGroup.Item isActive={formatting.includes("bold")} onClick={() => toggleFormatting("bold")}>
              <Bold className="w-4 h-4" />
            </ButtonGroup.Item>
            <ButtonGroup.Item isActive={formatting.includes("italic")} onClick={() => toggleFormatting("italic")}>
              <Italic className="w-4 h-4" />
            </ButtonGroup.Item>
            <ButtonGroup.Item isActive={formatting.includes("underline")} onClick={() => toggleFormatting("underline")}>
              <Underline className="w-4 h-4" />
            </ButtonGroup.Item>
            <ButtonGroup.Item isActive={formatting.includes("strike")} onClick={() => toggleFormatting("strike")}>
              <Strikethrough className="w-4 h-4" />
            </ButtonGroup.Item>
          </ButtonGroup>
        </div>
      </ComponentPreview>

      {/* Button Variants */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Variants</h3>
      <ComponentPreview
        code={`<ButtonGroup variant="default">...</ButtonGroup>
<ButtonGroup variant="outline">...</ButtonGroup>
<ButtonGroup variant="ghost">...</ButtonGroup>`}
      >
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <ButtonGroup variant="default">
              <ButtonGroup.Item isActive>One</ButtonGroup.Item>
              <ButtonGroup.Item>Two</ButtonGroup.Item>
              <ButtonGroup.Item>Three</ButtonGroup.Item>
            </ButtonGroup>
            <span className="text-xs text-zinc-500">Default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ButtonGroup variant="outline">
              <ButtonGroup.Item isActive>One</ButtonGroup.Item>
              <ButtonGroup.Item>Two</ButtonGroup.Item>
              <ButtonGroup.Item>Three</ButtonGroup.Item>
            </ButtonGroup>
            <span className="text-xs text-zinc-500">Outline</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ButtonGroup variant="ghost">
              <ButtonGroup.Item isActive>One</ButtonGroup.Item>
              <ButtonGroup.Item>Two</ButtonGroup.Item>
              <ButtonGroup.Item>Three</ButtonGroup.Item>
            </ButtonGroup>
            <span className="text-xs text-zinc-500">Ghost</span>
          </div>
        </div>
      </ComponentPreview>

      {/* Sizes */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Sizes</h3>
      <ComponentPreview
        code={`<ButtonGroup size="sm">...</ButtonGroup>
<ButtonGroup size="md">...</ButtonGroup>
<ButtonGroup size="lg">...</ButtonGroup>`}
      >
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <ButtonGroup size="sm">
              <ButtonGroup.Item isActive>Small</ButtonGroup.Item>
              <ButtonGroup.Item>Group</ButtonGroup.Item>
            </ButtonGroup>
            <span className="text-xs text-zinc-500">Small</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ButtonGroup size="md">
              <ButtonGroup.Item isActive>Medium</ButtonGroup.Item>
              <ButtonGroup.Item>Group</ButtonGroup.Item>
            </ButtonGroup>
            <span className="text-xs text-zinc-500">Medium</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ButtonGroup size="lg">
              <ButtonGroup.Item isActive>Large</ButtonGroup.Item>
              <ButtonGroup.Item>Group</ButtonGroup.Item>
            </ButtonGroup>
            <span className="text-xs text-zinc-500">Large</span>
          </div>
        </div>
      </ComponentPreview>

      {/* Vertical Orientation */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Vertical Orientation</h3>
      <ComponentPreview
        code={`<ButtonGroup orientation="vertical">
  <ButtonGroup.Item isActive={listType === "bullet"} onClick={() => setListType("bullet")}>
    <List className="w-4 h-4" />
  </ButtonGroup.Item>
  <ButtonGroup.Item isActive={listType === "numbered"} onClick={() => setListType("numbered")}>
    <ListOrdered className="w-4 h-4" />
  </ButtonGroup.Item>
</ButtonGroup>`}
      >
        <div className="flex flex-wrap gap-8 items-center justify-center">
          <ButtonGroup orientation="vertical">
            <ButtonGroup.Item isActive={listType === "bullet"} onClick={() => setListType("bullet")}>
              <List className="w-4 h-4" />
            </ButtonGroup.Item>
            <ButtonGroup.Item isActive={listType === "numbered"} onClick={() => setListType("numbered")}>
              <ListOrdered className="w-4 h-4" />
            </ButtonGroup.Item>
          </ButtonGroup>
          <ButtonGroup orientation="vertical">
            <ButtonGroup.Item isActive={viewMode === "grid"} onClick={() => setViewMode("grid")}>
              <Grid className="w-4 h-4" />
            </ButtonGroup.Item>
            <ButtonGroup.Item isActive={viewMode === "list"} onClick={() => setViewMode("list")}>
              <LayoutList className="w-4 h-4" />
            </ButtonGroup.Item>
          </ButtonGroup>
        </div>
      </ComponentPreview>

      {/* Practical Examples */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Practical Examples</h3>
      <ComponentPreview
        code={`<ButtonGroup>
  <ButtonGroup.Item>Previous</ButtonGroup.Item>
  <ButtonGroup.Item>1</ButtonGroup.Item>
  <ButtonGroup.Item isActive>2</ButtonGroup.Item>
  <ButtonGroup.Item>3</ButtonGroup.Item>
  <ButtonGroup.Item>Next</ButtonGroup.Item>
</ButtonGroup>`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <ButtonGroup>
            <ButtonGroup.Item>Previous</ButtonGroup.Item>
            <ButtonGroup.Item>1</ButtonGroup.Item>
            <ButtonGroup.Item isActive>2</ButtonGroup.Item>
            <ButtonGroup.Item>3</ButtonGroup.Item>
            <ButtonGroup.Item>Next</ButtonGroup.Item>
          </ButtonGroup>
        </div>
      </ComponentPreview>

      {/* Installation */}
      <InstallationTabs
        componentName="button-group"
        dependencies={[]}
        manualSteps={manualSteps}
      />

      {/* Props */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">ButtonGroup Props</h3>
      <PropsTable
        props={[
          { name: "variant", type: '"default" | "outline" | "ghost"', default: '"default"' },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
          { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"' },
          { name: "children", type: "ReactNode", default: "-" },
          { name: "className", type: "string", default: '""' },
        ]}
      />

      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4 mt-8">ButtonGroup.Item Props</h3>
      <PropsTable
        props={[
          { name: "isActive", type: "boolean", default: "false" },
          { name: "children", type: "ReactNode", default: "-" },
          { name: "className", type: "string", default: '""' },
          { name: "disabled", type: "boolean", default: "false" },
        ]}
      />
    </ComponentPageLayout>
  );
}
