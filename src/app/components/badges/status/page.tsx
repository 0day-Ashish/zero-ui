"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { BadgeStatus } from "@/zeroui/components/badges";

const badgeComponents = [
  { id: "badge-basic", name: "Badge Basic", href: "/components/badges" },
  { id: "badge-icon", name: "Badge Icon", href: "/components/badges/icon" },
  { id: "badge-status", name: "Badge Status", href: "/components/badges/status" },
  { id: "badge-count", name: "Badge Count", href: "/components/badges/count" },
];

const previewCode = `import { BadgeStatus } from "@/zeroui/components/badges";

export default function Example() {
  return (
    <div className="flex gap-3">
      <BadgeStatus status="online" />
      <BadgeStatus status="busy" />
      <BadgeStatus status="away" />
      <BadgeStatus status="offline" />
    </div>
  );
}`;

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/badges/badge-status.tsx",
    code: `"use client";

import { cn } from "@/lib/utils";

interface BadgeStatusProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: "online" | "offline" | "busy" | "away" | "neutral";
  pulse?: boolean;
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

export default function BadgeStatus({
  status = "neutral",
  pulse = false,
  size = "md",
  children,
  className,
  ...props
}: BadgeStatusProps) {
  const statusColors = {
    online: "bg-emerald-500",
    offline: "bg-zinc-400 dark:bg-zinc-500",
    busy: "bg-red-500",
    away: "bg-amber-500",
    neutral: "bg-zinc-500",
  };

  const statusLabels = {
    online: "Online",
    offline: "Offline",
    busy: "Busy",
    away: "Away",
    neutral: "Status",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-0.5 text-sm",
    lg: "px-3 py-1 text-sm",
  };

  const dotSizes = {
    sm: "h-1.5 w-1.5",
    md: "h-2 w-2",
    lg: "h-2.5 w-2.5",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full font-medium",
        "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100",
        sizes[size],
        className
      )}
      {...props}
    >
      <span className="relative flex">
        <span className={cn("rounded-full", statusColors[status], dotSizes[size])} />
        {pulse && status !== "offline" && (
          <span
            className={cn(
              "absolute inset-0 rounded-full animate-ping opacity-75",
              statusColors[status]
            )}
          />
        )}
      </span>
      {children || statusLabels[status]}
    </span>
  );
}`,
  },
];

export default function BadgeStatusPage() {
  return (
    <ComponentPageLayout
      componentName="Badge Status"
      description="Status indicator badges for showing user availability or system states."
      componentItems={badgeComponents}
      activeComponentId="badge-status"
      prevComponent={{ name: "Badge Icon", href: "/components/badges/icon" }}
      nextComponent={{ name: "Badge Count", href: "/components/badges/count" }}
    >
      {/* Component Preview */}
      <ComponentPreview code={previewCode}>
        <div className="flex flex-wrap gap-3 items-center justify-center">
          <BadgeStatus status="online" />
          <BadgeStatus status="busy" />
          <BadgeStatus status="away" />
          <BadgeStatus status="offline" />
        </div>
      </ComponentPreview>

      {/* All Statuses */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Status Types</h3>
      <ComponentPreview
        code={`<BadgeStatus status="online" />
<BadgeStatus status="busy" />
<BadgeStatus status="away" />
<BadgeStatus status="offline" />
<BadgeStatus status="neutral" />`}
      >
        <div className="flex flex-wrap gap-3 items-center justify-center">
          <BadgeStatus status="online" />
          <BadgeStatus status="busy" />
          <BadgeStatus status="away" />
          <BadgeStatus status="offline" />
          <BadgeStatus status="neutral" />
        </div>
      </ComponentPreview>

      {/* With Pulse Animation */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">With Pulse Animation</h3>
      <ComponentPreview
        code={`<BadgeStatus status="online" pulse />
<BadgeStatus status="busy" pulse />
<BadgeStatus status="away" pulse />`}
      >
        <div className="flex flex-wrap gap-3 items-center justify-center">
          <BadgeStatus status="online" pulse />
          <BadgeStatus status="busy" pulse />
          <BadgeStatus status="away" pulse />
        </div>
      </ComponentPreview>

      {/* Sizes */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Sizes</h3>
      <ComponentPreview
        code={`<BadgeStatus status="online" size="sm" />
<BadgeStatus status="online" size="md" />
<BadgeStatus status="online" size="lg" />`}
      >
        <div className="flex flex-wrap gap-3 items-center justify-center">
          <BadgeStatus status="online" size="sm" />
          <BadgeStatus status="online" size="md" />
          <BadgeStatus status="online" size="lg" />
        </div>
      </ComponentPreview>

      {/* Custom Labels */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Custom Labels</h3>
      <ComponentPreview
        code={`<BadgeStatus status="online">Active now</BadgeStatus>
<BadgeStatus status="busy">In a meeting</BadgeStatus>
<BadgeStatus status="away">Back in 5 min</BadgeStatus>
<BadgeStatus status="offline">Last seen 2h ago</BadgeStatus>`}
      >
        <div className="flex flex-wrap gap-3 items-center justify-center">
          <BadgeStatus status="online">Active now</BadgeStatus>
          <BadgeStatus status="busy">In a meeting</BadgeStatus>
          <BadgeStatus status="away">Back in 5 min</BadgeStatus>
          <BadgeStatus status="offline">Last seen 2h ago</BadgeStatus>
        </div>
      </ComponentPreview>

      {/* User Context */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">In User Context</h3>
      <ComponentPreview
        code={`// User card with status badge
<div className="flex items-center gap-3">
  <div className="relative">
    <div className="h-10 w-10 rounded-full bg-zinc-300" />
    <span className="absolute -bottom-0.5 -right-0.5">
      <BadgeStatus status="online" size="sm" />
    </span>
  </div>
  <div>
    <p className="font-medium">John Doe</p>
    <BadgeStatus status="online" size="sm" />
  </div>
</div>`}
      >
        <div className="flex flex-wrap gap-8 items-center justify-center">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900">
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
            </div>
            <div>
              <p className="font-medium text-zinc-900 dark:text-white">John Doe</p>
              <BadgeStatus status="online" size="sm" />
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900">
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500" />
            </div>
            <div>
              <p className="font-medium text-zinc-900 dark:text-white">Jane Smith</p>
              <BadgeStatus status="busy" size="sm" pulse />
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900">
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-400 to-teal-500" />
            </div>
            <div>
              <p className="font-medium text-zinc-900 dark:text-white">Alex Chen</p>
              <BadgeStatus status="offline" size="sm" />
            </div>
          </div>
        </div>
      </ComponentPreview>

      {/* Installation */}
      <InstallationTabs
        componentName="badge-status"
        dependencies={[]}
        manualSteps={manualSteps}
      />

      {/* Props */}
      <PropsTable
        props={[
          { name: "status", type: '"online" | "offline" | "busy" | "away" | "neutral"', default: '"neutral"' },
          { name: "pulse", type: "boolean", default: "false" },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
          { name: "children", type: "ReactNode", default: "Status label" },
        ]}
      />
    </ComponentPageLayout>
  );
}
