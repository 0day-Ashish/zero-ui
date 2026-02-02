"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { Breadcrumb, BreadcrumbCollapsible } from "@/zeroui/components/breadcrumbs";
import { Home, Folder, File } from "lucide-react";

const breadcrumbComponents = [
  { id: "breadcrumb-basic", name: "Breadcrumb", href: "/components/breadcrumbs" },
];

const previewCode = `import { Breadcrumb } from "@/zeroui/components/breadcrumbs";

export default function Example() {
  return (
    <Breadcrumb
      items={[
        { label: "Home", href: "/" },
        { label: "Application Center", href: "/apps" },
        { label: "Application List", href: "/apps/list" },
        { label: "An Application" }
      ]}
    />
  );
}`;

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/breadcrumbs/breadcrumb.tsx",
    code: `"use client";

import React from "react";

type Separator = "slash" | "chevron" | "arrow" | "dot" | "custom";
type Variant = "default" | "muted" | "colored" | "underline";
type Size = "sm" | "md" | "lg";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: Separator;
  customSeparator?: React.ReactNode;
  variant?: Variant;
  size?: Size;
  maxItems?: number;
  className?: string;
  onItemClick?: (item: BreadcrumbItem, index: number) => void;
}

// ... component implementation`,
  },
];

export default function BreadcrumbsPage() {
  const basicItems = [
    { label: "Home", href: "/" },
    { label: "Application Center", href: "/apps" },
    { label: "Application List", href: "/apps/list" },
    { label: "An Application" },
  ];

  const docsItems = [
    { label: "Bulma", href: "/bulma" },
    { label: "Documentation", href: "/docs" },
    { label: "Components", href: "/components" },
    { label: "Breadcrumb" },
  ];

  const longItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Kids' Gloves", href: "/products/gloves" },
    { label: "Kids' Insulated Gloves" },
  ];

  const pagesItems = [
    { label: "Page 1", href: "/1" },
    { label: "Page 2", href: "/2" },
    { label: "Page 3", href: "/3" },
    { label: "Page 4", href: "/4" },
    { label: "Page 5", href: "/5" },
    { label: "Page 6" },
  ];

  const iconItems = [
    { label: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
    { label: "Projects", href: "/projects", icon: <Folder className="w-4 h-4" /> },
    { label: "Document", icon: <File className="w-4 h-4" /> },
  ];

  return (
    <ComponentPageLayout
      componentName="Breadcrumb"
      description="Navigation component that shows the current page location within a hierarchy."
      componentItems={breadcrumbComponents}
      activeComponentId="breadcrumb-basic"
      prevComponent={{ name: "Switch", href: "/components/switches" }}
      nextComponent={{ name: "Button", href: "/components/buttons" }}
    >
      {/* Basic Preview */}
      <ComponentPreview code={previewCode}>
        <div className="flex items-center justify-center">
          <Breadcrumb items={basicItems} />
        </div>
      </ComponentPreview>

      {/* Colored Variant */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Colored Variant</h3>
      <ComponentPreview
        code={`<Breadcrumb
  items={items}
  variant="colored"
/>`}
      >
        <div className="flex items-center justify-center">
          <Breadcrumb items={docsItems} variant="colored" />
        </div>
      </ComponentPreview>

      {/* Different Separators */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Separators</h3>
      <ComponentPreview
        code={`<Breadcrumb items={items} separator="slash" />
<Breadcrumb items={items} separator="chevron" />
<Breadcrumb items={items} separator="arrow" />
<Breadcrumb items={items} separator="dot" />`}
      >
        <div className="flex flex-col gap-4 items-center">
          <Breadcrumb items={basicItems} separator="slash" />
          <Breadcrumb items={basicItems} separator="chevron" />
          <Breadcrumb items={basicItems} separator="arrow" />
          <Breadcrumb items={basicItems} separator="dot" />
        </div>
      </ComponentPreview>

      {/* With Ellipsis (maxItems) */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Collapsed with Ellipsis</h3>
      <ComponentPreview
        code={`<Breadcrumb
  items={longItems}
  maxItems={3}
/>`}
      >
        <div className="flex items-center justify-center">
          <Breadcrumb items={longItems} maxItems={3} />
        </div>
      </ComponentPreview>

      {/* Collapsible with Dropdown */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Collapsible with Dropdown</h3>
      <ComponentPreview
        code={`import { BreadcrumbCollapsible } from "@/zeroui/components/breadcrumbs";

<BreadcrumbCollapsible
  items={[
    { label: "Page 1", href: "/1" },
    { label: "Page 2", href: "/2" },
    { label: "Page 3", href: "/3" },
    { label: "Page 4", href: "/4" },
    { label: "Page 5", href: "/5" },
    { label: "Page 6" }
  ]}
  maxVisible={3}
  separator="chevron"
/>`}
      >
        <div className="flex items-center justify-center min-h-[120px]">
          <BreadcrumbCollapsible items={pagesItems} maxVisible={3} separator="chevron" />
        </div>
      </ComponentPreview>

      {/* With Icons */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">With Icons</h3>
      <ComponentPreview
        code={`import { Home, Folder, File } from "lucide-react";

<Breadcrumb
  items={[
    { label: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
    { label: "Projects", href: "/projects", icon: <Folder className="w-4 h-4" /> },
    { label: "Document", icon: <File className="w-4 h-4" /> }
  ]}
  separator="chevron"
/>`}
      >
        <div className="flex items-center justify-center">
          <Breadcrumb items={iconItems} separator="chevron" />
        </div>
      </ComponentPreview>

      {/* Sizes */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Sizes</h3>
      <ComponentPreview
        code={`<Breadcrumb items={items} size="sm" />
<Breadcrumb items={items} size="md" />
<Breadcrumb items={items} size="lg" />`}
      >
        <div className="flex flex-col gap-4 items-center">
          <Breadcrumb items={basicItems} size="sm" />
          <Breadcrumb items={basicItems} size="md" />
          <Breadcrumb items={basicItems} size="lg" />
        </div>
      </ComponentPreview>

      {/* Variants */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">All Variants</h3>
      <ComponentPreview
        code={`<Breadcrumb items={items} variant="default" />
<Breadcrumb items={items} variant="muted" />
<Breadcrumb items={items} variant="colored" />
<Breadcrumb items={items} variant="underline" />`}
      >
        <div className="flex flex-col gap-4 items-center">
          <div className="text-xs text-zinc-500 w-full text-center">Default</div>
          <Breadcrumb items={basicItems} variant="default" />
          <div className="text-xs text-zinc-500 w-full text-center mt-2">Muted</div>
          <Breadcrumb items={basicItems} variant="muted" />
          <div className="text-xs text-zinc-500 w-full text-center mt-2">Colored</div>
          <Breadcrumb items={basicItems} variant="colored" />
          <div className="text-xs text-zinc-500 w-full text-center mt-2">Underline</div>
          <Breadcrumb items={basicItems} variant="underline" />
        </div>
      </ComponentPreview>

      {/* Installation */}
      <InstallationTabs
        componentName="breadcrumb"
        dependencies={["lucide-react"]}
        manualSteps={manualSteps}
      />

      {/* Props - Breadcrumb */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Breadcrumb Props</h3>
      <PropsTable
        props={[
          { name: "items", type: "BreadcrumbItem[]", default: "-" },
          { name: "separator", type: '"slash" | "chevron" | "arrow" | "dot" | "custom"', default: '"slash"' },
          { name: "customSeparator", type: "ReactNode", default: "-" },
          { name: "variant", type: '"default" | "muted" | "colored" | "underline"', default: '"default"' },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
          { name: "maxItems", type: "number", default: "-" },
          { name: "onItemClick", type: "(item, index) => void", default: "-" },
        ]}
      />

      {/* Props - BreadcrumbCollapsible */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4 mt-8">BreadcrumbCollapsible Props</h3>
      <PropsTable
        props={[
          { name: "items", type: "BreadcrumbItem[]", default: "-" },
          { name: "separator", type: '"slash" | "chevron" | "arrow" | "dot" | "custom"', default: '"chevron"' },
          { name: "customSeparator", type: "ReactNode", default: "-" },
          { name: "variant", type: '"default" | "muted" | "colored"', default: '"default"' },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
          { name: "maxVisible", type: "number", default: "3" },
          { name: "onItemClick", type: "(item, index) => void", default: "-" },
        ]}
      />

      {/* BreadcrumbItem Type */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4 mt-8">BreadcrumbItem Type</h3>
      <PropsTable
        props={[
          { name: "label", type: "string", default: "-" },
          { name: "href", type: "string", default: "-" },
          { name: "icon", type: "ReactNode", default: "-" },
        ]}
      />
    </ComponentPageLayout>
  );
}
