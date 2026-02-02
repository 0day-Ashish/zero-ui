"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { BadgeCount } from "@/zeroui/components/badges";
import { Bell, Mail, MessageCircle, ShoppingCart, Heart } from "lucide-react";

const badgeComponents = [
  { id: "badge-basic", name: "Badge Basic", href: "/components/badges" },
  { id: "badge-icon", name: "Badge Icon", href: "/components/badges/icon" },
  { id: "badge-status", name: "Badge Status", href: "/components/badges/status" },
  { id: "badge-count", name: "Badge Count", href: "/components/badges/count" },
];

const previewCode = `import { BadgeCount } from "@/zeroui/components/badges";
import { Bell, Mail, ShoppingCart } from "lucide-react";

export default function Example() {
  return (
    <div className="flex gap-6 items-center">
      <div className="relative">
        <Bell className="h-6 w-6" />
        <BadgeCount count={5} size="sm" className="absolute -top-2 -right-2" />
      </div>
      <div className="relative">
        <Mail className="h-6 w-6" />
        <BadgeCount count={12} size="sm" variant="destructive" className="absolute -top-2 -right-2" />
      </div>
      <div className="relative">
        <ShoppingCart className="h-6 w-6" />
        <BadgeCount count={3} size="sm" variant="success" className="absolute -top-2 -right-2" />
      </div>
    </div>
  );
}`;

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/badges/badge-count.tsx",
    code: `"use client";

import { cn } from "@/lib/utils";

interface BadgeCountProps extends React.HTMLAttributes<HTMLSpanElement> {
  count: number;
  max?: number;
  variant?: "default" | "destructive" | "success" | "warning";
  size?: "sm" | "md" | "lg";
  showZero?: boolean;
}

export default function BadgeCount({
  count,
  max = 99,
  variant = "default",
  size = "md",
  showZero = false,
  className,
  ...props
}: BadgeCountProps) {
  const variants = {
    default: "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900",
    destructive: "bg-red-500 text-white",
    success: "bg-emerald-500 text-white",
    warning: "bg-amber-500 text-white",
  };

  const sizes = {
    sm: "min-w-4 h-4 text-[10px] px-1",
    md: "min-w-5 h-5 text-xs px-1.5",
    lg: "min-w-6 h-6 text-sm px-2",
  };

  if (count === 0 && !showZero) {
    return null;
  }

  const displayCount = count > max ? \`\${max}+\` : count;

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium tabular-nums",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {displayCount}
    </span>
  );
}`,
  },
];

export default function BadgeCountPage() {
  return (
    <ComponentPageLayout
      componentName="Badge Count"
      description="Numeric count badges for notifications, cart items, and unread indicators."
      componentItems={badgeComponents}
      activeComponentId="badge-count"
      prevComponent={{ name: "Badge Status", href: "/components/badges/status" }}
      nextComponent={{ name: "Spinner", href: "/components/spinners" }}
    >
      {/* Component Preview */}
      <ComponentPreview code={previewCode}>
        <div className="flex flex-wrap gap-8 items-center justify-center">
          <div className="relative">
            <Bell className="h-6 w-6 text-zinc-600 dark:text-zinc-400" />
            <BadgeCount count={5} size="sm" className="absolute -top-2 -right-2" />
          </div>
          <div className="relative">
            <Mail className="h-6 w-6 text-zinc-600 dark:text-zinc-400" />
            <BadgeCount count={12} size="sm" variant="destructive" className="absolute -top-2 -right-2" />
          </div>
          <div className="relative">
            <ShoppingCart className="h-6 w-6 text-zinc-600 dark:text-zinc-400" />
            <BadgeCount count={3} size="sm" variant="success" className="absolute -top-2 -right-2" />
          </div>
        </div>
      </ComponentPreview>

      {/* Variants */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Variants</h3>
      <ComponentPreview
        code={`<BadgeCount count={5} variant="default" />
<BadgeCount count={5} variant="destructive" />
<BadgeCount count={5} variant="success" />
<BadgeCount count={5} variant="warning" />`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <BadgeCount count={5} variant="default" />
            <span className="text-xs text-zinc-500">default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <BadgeCount count={5} variant="destructive" />
            <span className="text-xs text-zinc-500">destructive</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <BadgeCount count={5} variant="success" />
            <span className="text-xs text-zinc-500">success</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <BadgeCount count={5} variant="warning" />
            <span className="text-xs text-zinc-500">warning</span>
          </div>
        </div>
      </ComponentPreview>

      {/* Sizes */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Sizes</h3>
      <ComponentPreview
        code={`<BadgeCount count={8} size="sm" />
<BadgeCount count={8} size="md" />
<BadgeCount count={8} size="lg" />`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <BadgeCount count={8} size="sm" />
            <span className="text-xs text-zinc-500">sm</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <BadgeCount count={8} size="md" />
            <span className="text-xs text-zinc-500">md</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <BadgeCount count={8} size="lg" />
            <span className="text-xs text-zinc-500">lg</span>
          </div>
        </div>
      </ComponentPreview>

      {/* Max Value */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Max Value Overflow</h3>
      <ComponentPreview
        code={`<BadgeCount count={50} />
<BadgeCount count={99} />
<BadgeCount count={100} />  {/* Shows 99+ */}
<BadgeCount count={999} max={999} />
<BadgeCount count={1000} max={999} />  {/* Shows 999+ */}`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <BadgeCount count={50} />
            <span className="text-xs text-zinc-500">50</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <BadgeCount count={99} />
            <span className="text-xs text-zinc-500">99</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <BadgeCount count={100} />
            <span className="text-xs text-zinc-500">100 → 99+</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <BadgeCount count={999} max={999} />
            <span className="text-xs text-zinc-500">max=999</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <BadgeCount count={1000} max={999} />
            <span className="text-xs text-zinc-500">1000 → 999+</span>
          </div>
        </div>
      </ComponentPreview>

      {/* Show Zero */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Show Zero</h3>
      <ComponentPreview
        code={`<BadgeCount count={0} />  {/* Hidden by default */}
<BadgeCount count={0} showZero />  {/* Visible with showZero */}`}
      >
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <div className="h-6 flex items-center">
              <BadgeCount count={0} />
              <span className="text-zinc-400 text-sm">(hidden)</span>
            </div>
            <span className="text-xs text-zinc-500">count=0</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <BadgeCount count={0} showZero />
            <span className="text-xs text-zinc-500">showZero</span>
          </div>
        </div>
      </ComponentPreview>

      {/* Use Cases */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Use Cases</h3>
      <ComponentPreview
        code={`// Notifications
<div className="relative">
  <Bell className="h-6 w-6" />
  <BadgeCount count={3} size="sm" className="absolute -top-2 -right-2" />
</div>

// Messages
<div className="relative">
  <MessageCircle className="h-6 w-6" />
  <BadgeCount count={28} size="sm" variant="destructive" className="absolute -top-2 -right-2" />
</div>`}
      >
        <div className="flex flex-wrap gap-10 items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="relative p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800">
              <Bell className="h-6 w-6 text-zinc-600 dark:text-zinc-400" />
              <BadgeCount count={3} size="sm" className="absolute -top-1 -right-1" />
            </div>
            <span className="text-xs text-zinc-500">Notifications</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="relative p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800">
              <MessageCircle className="h-6 w-6 text-zinc-600 dark:text-zinc-400" />
              <BadgeCount count={28} size="sm" variant="destructive" className="absolute -top-1 -right-1" />
            </div>
            <span className="text-xs text-zinc-500">Messages</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="relative p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800">
              <Mail className="h-6 w-6 text-zinc-600 dark:text-zinc-400" />
              <BadgeCount count={156} size="sm" variant="warning" className="absolute -top-1 -right-1" />
            </div>
            <span className="text-xs text-zinc-500">Email</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="relative p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800">
              <ShoppingCart className="h-6 w-6 text-zinc-600 dark:text-zinc-400" />
              <BadgeCount count={2} size="sm" variant="success" className="absolute -top-1 -right-1" />
            </div>
            <span className="text-xs text-zinc-500">Cart</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="relative p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800">
              <Heart className="h-6 w-6 text-zinc-600 dark:text-zinc-400" />
              <BadgeCount count={42} size="sm" variant="destructive" className="absolute -top-1 -right-1" />
            </div>
            <span className="text-xs text-zinc-500">Likes</span>
          </div>
        </div>
      </ComponentPreview>

      {/* Standalone */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Standalone Usage</h3>
      <ComponentPreview
        code={`<div className="flex items-center gap-2">
  <span>Unread messages</span>
  <BadgeCount count={5} variant="destructive" />
</div>`}
      >
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800">
            <span className="text-sm text-zinc-700 dark:text-zinc-300">Unread messages</span>
            <BadgeCount count={5} variant="destructive" size="sm" />
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800">
            <span className="text-sm text-zinc-700 dark:text-zinc-300">Items in cart</span>
            <BadgeCount count={3} variant="success" size="sm" />
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800">
            <span className="text-sm text-zinc-700 dark:text-zinc-300">Pending tasks</span>
            <BadgeCount count={12} variant="warning" size="sm" />
          </div>
        </div>
      </ComponentPreview>

      {/* Installation */}
      <InstallationTabs
        componentName="badge-count"
        dependencies={[]}
        manualSteps={manualSteps}
      />

      {/* Props */}
      <PropsTable
        props={[
          { name: "count", type: "number", default: "-" },
          { name: "max", type: "number", default: "99" },
          { name: "variant", type: '"default" | "destructive" | "success" | "warning"', default: '"default"' },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
          { name: "showZero", type: "boolean", default: "false" },
        ]}
      />
    </ComponentPageLayout>
  );
}
