"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { BadgeIcon } from "@/zeroui/components/badges";
import {
  Star,
  Zap,
  Check,
  AlertCircle,
  Crown,
  Flame,
  Heart,
  Shield,
  Sparkles,
  Trophy,
  Verified,
  Gift,
} from "lucide-react";

const badgeComponents = [
  { id: "badge-basic", name: "Badge Basic", href: "/components/badges" },
  { id: "badge-icon", name: "Badge Icon", href: "/components/badges/icon" },
  { id: "badge-status", name: "Badge Status", href: "/components/badges/status" },
  { id: "badge-count", name: "Badge Count", href: "/components/badges/count" },
];

const previewCode = `import { BadgeIcon } from "@/zeroui/components/badges";
import { Star, Zap, Check, Crown } from "lucide-react";

export default function Example() {
  return (
    <div className="flex gap-3">
      <BadgeIcon icon={Star}>Featured</BadgeIcon>
      <BadgeIcon icon={Zap} variant="warning">Pro</BadgeIcon>
      <BadgeIcon icon={Check} variant="success">Verified</BadgeIcon>
      <BadgeIcon icon={Crown} variant="secondary">Premium</BadgeIcon>
    </div>
  );
}`;

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/badges/badge-icon.tsx",
    code: `"use client";

import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface BadgeIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline" | "destructive" | "success" | "warning";
  size?: "sm" | "md" | "lg";
  icon: LucideIcon;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export default function BadgeIcon({
  variant = "default",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  children,
  className,
  ...props
}: BadgeIconProps) {
  const variants = {
    default: "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900",
    secondary: "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100",
    outline: "border border-zinc-200 text-zinc-900 dark:border-zinc-700 dark:text-zinc-100",
    destructive: "bg-red-500 text-white dark:bg-red-600",
    success: "bg-emerald-500 text-white dark:bg-emerald-600",
    warning: "bg-amber-500 text-white dark:bg-amber-600",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs gap-1",
    md: "px-2.5 py-0.5 text-sm gap-1.5",
    lg: "px-3 py-1 text-sm gap-1.5",
  };

  const iconSizes = {
    sm: "h-3 w-3",
    md: "h-3.5 w-3.5",
    lg: "h-4 w-4",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium transition-colors",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {iconPosition === "left" && <Icon className={iconSizes[size]} />}
      {children}
      {iconPosition === "right" && <Icon className={iconSizes[size]} />}
    </span>
  );
}`,
  },
];

export default function BadgeIconPage() {
  return (
    <ComponentPageLayout
      componentName="Badge Icon"
      description="Badges with Lucide icons for enhanced visual communication."
      componentItems={badgeComponents}
      activeComponentId="badge-icon"
      prevComponent={{ name: "Badge Basic", href: "/components/badges" }}
      nextComponent={{ name: "Badge Status", href: "/components/badges/status" }}
    >
      {/* Component Preview */}
      <ComponentPreview code={previewCode}>
        <div className="flex flex-wrap gap-3 items-center justify-center">
          <BadgeIcon icon={Star}>Featured</BadgeIcon>
          <BadgeIcon icon={Zap} variant="warning">Pro</BadgeIcon>
          <BadgeIcon icon={Check} variant="success">Verified</BadgeIcon>
          <BadgeIcon icon={Crown} variant="secondary">Premium</BadgeIcon>
        </div>
      </ComponentPreview>

      {/* All Variants */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Variants</h3>
      <ComponentPreview
        code={`<BadgeIcon icon={Star} variant="default">Default</BadgeIcon>
<BadgeIcon icon={Star} variant="secondary">Secondary</BadgeIcon>
<BadgeIcon icon={Star} variant="outline">Outline</BadgeIcon>
<BadgeIcon icon={Star} variant="destructive">Destructive</BadgeIcon>
<BadgeIcon icon={Star} variant="success">Success</BadgeIcon>
<BadgeIcon icon={Star} variant="warning">Warning</BadgeIcon>`}
      >
        <div className="flex flex-wrap gap-3 items-center justify-center">
          <BadgeIcon icon={Star} variant="default">Default</BadgeIcon>
          <BadgeIcon icon={Star} variant="secondary">Secondary</BadgeIcon>
          <BadgeIcon icon={Star} variant="outline">Outline</BadgeIcon>
          <BadgeIcon icon={Star} variant="destructive">Destructive</BadgeIcon>
          <BadgeIcon icon={Star} variant="success">Success</BadgeIcon>
          <BadgeIcon icon={Star} variant="warning">Warning</BadgeIcon>
        </div>
      </ComponentPreview>

      {/* Sizes */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Sizes</h3>
      <ComponentPreview
        code={`<BadgeIcon icon={Zap} size="sm">Small</BadgeIcon>
<BadgeIcon icon={Zap} size="md">Medium</BadgeIcon>
<BadgeIcon icon={Zap} size="lg">Large</BadgeIcon>`}
      >
        <div className="flex flex-wrap gap-3 items-center justify-center">
          <BadgeIcon icon={Zap} size="sm">Small</BadgeIcon>
          <BadgeIcon icon={Zap} size="md">Medium</BadgeIcon>
          <BadgeIcon icon={Zap} size="lg">Large</BadgeIcon>
        </div>
      </ComponentPreview>

      {/* Icon Position */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Icon Position</h3>
      <ComponentPreview
        code={`<BadgeIcon icon={Check} iconPosition="left">Left Icon</BadgeIcon>
<BadgeIcon icon={AlertCircle} iconPosition="right" variant="destructive">Right Icon</BadgeIcon>`}
      >
        <div className="flex flex-wrap gap-3 items-center justify-center">
          <BadgeIcon icon={Check} iconPosition="left" variant="success">Left Icon</BadgeIcon>
          <BadgeIcon icon={AlertCircle} iconPosition="right" variant="destructive">Right Icon</BadgeIcon>
        </div>
      </ComponentPreview>

      {/* Use Cases */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Use Cases</h3>
      <ComponentPreview
        code={`<BadgeIcon icon={Verified} variant="success">Verified</BadgeIcon>
<BadgeIcon icon={Crown} variant="warning">Premium</BadgeIcon>
<BadgeIcon icon={Flame}>Trending</BadgeIcon>
<BadgeIcon icon={Gift} variant="secondary">Gift</BadgeIcon>
<BadgeIcon icon={Shield} variant="outline">Secure</BadgeIcon>`}
      >
        <div className="flex flex-wrap gap-3 items-center justify-center">
          <BadgeIcon icon={Verified} variant="success">Verified</BadgeIcon>
          <BadgeIcon icon={Crown} variant="warning">Premium</BadgeIcon>
          <BadgeIcon icon={Flame}>Trending</BadgeIcon>
          <BadgeIcon icon={Gift} variant="secondary">Gift</BadgeIcon>
          <BadgeIcon icon={Shield} variant="outline">Secure</BadgeIcon>
        </div>
      </ComponentPreview>

      {/* Icon Showcase */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Icon Showcase</h3>
      <ComponentPreview
        code={`// Various icons for different contexts
<BadgeIcon icon={Trophy} variant="warning">Winner</BadgeIcon>
<BadgeIcon icon={Heart} variant="destructive">Favorite</BadgeIcon>
<BadgeIcon icon={Sparkles}>New</BadgeIcon>`}
      >
        <div className="flex flex-wrap gap-3 items-center justify-center">
          <BadgeIcon icon={Trophy} variant="warning">Winner</BadgeIcon>
          <BadgeIcon icon={Heart} variant="destructive">Favorite</BadgeIcon>
          <BadgeIcon icon={Sparkles}>New</BadgeIcon>
          <BadgeIcon icon={Shield} variant="success">Protected</BadgeIcon>
          <BadgeIcon icon={Zap} variant="secondary">Fast</BadgeIcon>
        </div>
      </ComponentPreview>

      {/* Installation */}
      <InstallationTabs
        componentName="badge-icon"
        dependencies={["lucide-react"]}
        manualSteps={manualSteps}
      />

      {/* Props */}
      <PropsTable
        props={[
          { name: "icon", type: "LucideIcon", default: "-" },
          { name: "iconPosition", type: '"left" | "right"', default: '"left"' },
          { name: "variant", type: '"default" | "secondary" | "outline" | "destructive" | "success" | "warning"', default: '"default"' },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
          { name: "children", type: "ReactNode", default: "-" },
        ]}
      />
    </ComponentPageLayout>
  );
}
