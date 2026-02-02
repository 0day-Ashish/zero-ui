"use client";

import React, { useState } from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { Badge, BadgeIcon, BadgeStatus, BadgeCount } from "@/zeroui/components/badges";
import { Star, Zap, Bell, Check, AlertCircle } from "lucide-react";

const badgeComponents = [
  { id: "badge-basic", name: "Badge Basic", href: "/components/badges" },
  { id: "badge-icon", name: "Badge Icon", href: "/components/badges/icon" },
  { id: "badge-status", name: "Badge Status", href: "/components/badges/status" },
  { id: "badge-count", name: "Badge Count", href: "/components/badges/count" },
];

const previewCode = `import { Badge } from "@/zeroui/components/badges";

export default function Example() {
  return (
    <div className="flex gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
    </div>
  );
}`;

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/badges/badge.tsx",
    code: `"use client";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline" | "destructive" | "success" | "warning";
  size?: "sm" | "md" | "lg";
  dot?: boolean;
  dismissible?: boolean;
  onDismiss?: () => void;
  children: React.ReactNode;
}

export default function Badge({
  variant = "default",
  size = "md",
  dot = false,
  dismissible = false,
  onDismiss,
  children,
  className,
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900",
    secondary: "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100",
    outline: "border border-zinc-200 text-zinc-900 dark:border-zinc-700 dark:text-zinc-100",
    destructive: "bg-red-500 text-white dark:bg-red-600",
    success: "bg-emerald-500 text-white dark:bg-emerald-600",
    warning: "bg-amber-500 text-white dark:bg-amber-600",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-0.5 text-sm",
    lg: "px-3 py-1 text-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-medium transition-colors",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}`,
  },
];

export default function BadgesPage() {
  const [showBadge, setShowBadge] = useState(true);

  return (
    <ComponentPageLayout
      componentName="Badge"
      description="Small status indicators and labels for highlighting information."
      componentItems={badgeComponents}
      activeComponentId="badge-basic"
      prevComponent={{ name: "Avatar", href: "/components/avatars" }}
      nextComponent={{ name: "Spinner", href: "/components/spinners" }}
    >
      {/* Component Preview with all variants */}
      <ComponentPreview code={previewCode}>
        <div className="flex flex-wrap gap-3 items-center justify-center">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
        </div>
      </ComponentPreview>

      {/* Sizes */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Sizes</h3>
      <ComponentPreview
        code={`<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>`}
      >
        <div className="flex flex-wrap gap-3 items-center justify-center">
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium</Badge>
          <Badge size="lg">Large</Badge>
        </div>
      </ComponentPreview>

      {/* With Dot Indicator */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">With Dot Indicator</h3>
      <ComponentPreview
        code={`<Badge dot>Active</Badge>
<Badge dot variant="success">Online</Badge>
<Badge dot variant="destructive">Critical</Badge>`}
      >
        <div className="flex flex-wrap gap-3 items-center justify-center">
          <Badge dot>Active</Badge>
          <Badge dot variant="success">Online</Badge>
          <Badge dot variant="destructive">Critical</Badge>
        </div>
      </ComponentPreview>

      {/* Dismissible */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Dismissible</h3>
      <ComponentPreview
        code={`<Badge dismissible onDismiss={() => setShowBadge(false)}>
  Dismiss me
</Badge>`}
      >
        <div className="flex flex-wrap gap-3 items-center justify-center">
          {showBadge ? (
            <Badge dismissible onDismiss={() => setShowBadge(false)}>
              Dismiss me
            </Badge>
          ) : (
            <button
              onClick={() => setShowBadge(true)}
              className="text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
            >
              Show badge again
            </button>
          )}
          <Badge variant="secondary" dismissible>
            Tag
          </Badge>
          <Badge variant="success" dismissible>
            Completed
          </Badge>
        </div>
      </ComponentPreview>

      {/* With Icons */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">With Icons</h3>
      <ComponentPreview
        code={`import { BadgeIcon } from "@/zeroui/components/badges";
import { Star, Zap, Check } from "lucide-react";

<BadgeIcon icon={Star}>Featured</BadgeIcon>
<BadgeIcon icon={Zap} variant="warning">Pro</BadgeIcon>
<BadgeIcon icon={Check} variant="success">Verified</BadgeIcon>`}
      >
        <div className="flex flex-wrap gap-3 items-center justify-center">
          <BadgeIcon icon={Star}>Featured</BadgeIcon>
          <BadgeIcon icon={Zap} variant="warning">Pro</BadgeIcon>
          <BadgeIcon icon={Check} variant="success">Verified</BadgeIcon>
          <BadgeIcon icon={AlertCircle} variant="destructive" iconPosition="right">Error</BadgeIcon>
        </div>
      </ComponentPreview>

      {/* Status Badges */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Status Badges</h3>
      <ComponentPreview
        code={`import { BadgeStatus } from "@/zeroui/components/badges";

<BadgeStatus status="online" />
<BadgeStatus status="busy" />
<BadgeStatus status="away" />
<BadgeStatus status="offline" />
<BadgeStatus status="online" pulse />`}
      >
        <div className="flex flex-wrap gap-3 items-center justify-center">
          <BadgeStatus status="online" />
          <BadgeStatus status="busy" />
          <BadgeStatus status="away" />
          <BadgeStatus status="offline" />
          <BadgeStatus status="online" pulse />
        </div>
      </ComponentPreview>

      {/* Count Badges */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Count Badges</h3>
      <ComponentPreview
        code={`import { BadgeCount } from "@/zeroui/components/badges";

<BadgeCount count={5} />
<BadgeCount count={42} variant="destructive" />
<BadgeCount count={150} max={99} />
<BadgeCount count={0} showZero />`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <div className="relative">
            <Bell className="h-6 w-6 text-zinc-600 dark:text-zinc-400" />
            <span className="absolute -top-1.5 -right-1.5">
              <BadgeCount count={5} size="sm" />
            </span>
          </div>
          <BadgeCount count={42} variant="destructive" />
          <BadgeCount count={150} max={99} />
          <BadgeCount count={0} showZero variant="secondary" />
        </div>
      </ComponentPreview>

      {/* Installation */}
      <InstallationTabs
        componentName="badge"
        dependencies={["lucide-react"]}
        manualSteps={manualSteps}
      />

      {/* Props */}
      <PropsTable
        props={[
          { name: "variant", type: '"default" | "secondary" | "outline" | "destructive" | "success" | "warning"', default: '"default"' },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
          { name: "dot", type: "boolean", default: "false" },
          { name: "dismissible", type: "boolean", default: "false" },
          { name: "onDismiss", type: "() => void", default: "-" },
          { name: "children", type: "ReactNode", default: "-" },
        ]}
      />
    </ComponentPageLayout>
  );
}
