"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { AvatarBadge } from "@/zeroui/components/avatars";

const avatarComponents = [
  { id: "avatar", name: "Avatar", href: "/components/avatars" },
  { id: "avatar-badge", name: "Avatar Badge", href: "/components/avatars/badge" },
  { id: "avatar-group", name: "Avatar Group", href: "/components/avatars/group" },
];

const previewCode = `import { AvatarBadge } from "@/zeroui/components/avatars";

export default function Example() {
  return (
    <div className="flex gap-4 items-center">
      <AvatarBadge src="/avatar.jpg" showStatus badgeColor="green" />
      <AvatarBadge src="/avatar.jpg" showStatus badgeColor="red" />
      <AvatarBadge
        src="/avatar.jpg"
        badgeContent={<img src="/flag.png" />}
      />
    </div>
  );
}`;

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/avatars/avatar-badge.tsx",
    code: `"use client";

import React from "react";
import Avatar from "./avatar";

interface AvatarBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  shape?: "circle" | "square";
  border?: boolean;
  borderColor?: "default" | "white" | "primary";
  badgeContent?: React.ReactNode;
  badgePosition?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  badgeColor?: "green" | "red" | "yellow" | "blue" | "gray";
  showStatus?: boolean;
}

export default function AvatarBadge({
  src,
  alt = "Avatar",
  fallback,
  size = "md",
  shape = "circle",
  border = false,
  borderColor = "default",
  badgeContent,
  badgePosition = "bottom-right",
  badgeColor = "green",
  showStatus = false,
  className = "",
  ...props
}: AvatarBadgeProps) {
  // ... component implementation
}`,
  },
];

export default function AvatarBadgePage() {
  return (
    <ComponentPageLayout
      componentName="Avatar Badge"
      description="Avatar with status indicators or custom badge overlays like flags or icons."
      componentItems={avatarComponents}
      activeComponentId="avatar-badge"
    >
      {/* Status Indicators */}
      <ComponentPreview code={previewCode}>
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <AvatarBadge
            src="https://i.pravatar.cc/150?img=20"
            size="lg"
            showStatus
            badgeColor="green"
          />
          <AvatarBadge
            src="https://i.pravatar.cc/150?img=21"
            size="lg"
            showStatus
            badgeColor="red"
          />
          <AvatarBadge
            src="https://i.pravatar.cc/150?img=22"
            size="lg"
            showStatus
            badgeColor="yellow"
          />
          <AvatarBadge
            src="https://i.pravatar.cc/150?img=23"
            size="lg"
            showStatus
            badgeColor="blue"
          />
          <AvatarBadge
            src="https://i.pravatar.cc/150?img=24"
            size="lg"
            showStatus
            badgeColor="gray"
          />
        </div>
      </ComponentPreview>

      {/* Badge Positions */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Badge Positions</h3>
      <ComponentPreview
        code={`<AvatarBadge badgePosition="top-right" showStatus />
<AvatarBadge badgePosition="top-left" showStatus />
<AvatarBadge badgePosition="bottom-right" showStatus />
<AvatarBadge badgePosition="bottom-left" showStatus />`}
      >
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <AvatarBadge
            src="https://i.pravatar.cc/150?img=30"
            size="xl"
            showStatus
            badgePosition="top-right"
          />
          <AvatarBadge
            src="https://i.pravatar.cc/150?img=30"
            size="xl"
            showStatus
            badgePosition="top-left"
          />
          <AvatarBadge
            src="https://i.pravatar.cc/150?img=30"
            size="xl"
            showStatus
            badgePosition="bottom-right"
          />
          <AvatarBadge
            src="https://i.pravatar.cc/150?img=30"
            size="xl"
            showStatus
            badgePosition="bottom-left"
          />
        </div>
      </ComponentPreview>

      {/* Custom Badge Content */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Custom Badge Content</h3>
      <ComponentPreview
        code={`<AvatarBadge
  src="/avatar.jpg"
  badgeContent={<img src="https://flagcdn.com/w40/au.png" />}
/>`}
      >
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <AvatarBadge
            src="https://i.pravatar.cc/150?img=32"
            size="xl"
            badgeContent={
              <img
                src="https://flagcdn.com/w40/au.png"
                alt="Australia"
                className="w-full h-full object-cover"
              />
            }
          />
          <AvatarBadge
            src="https://i.pravatar.cc/150?img=33"
            size="xl"
            badgeContent={
              <img
                src="https://flagcdn.com/w40/us.png"
                alt="USA"
                className="w-full h-full object-cover"
              />
            }
          />
          <AvatarBadge
            src="https://i.pravatar.cc/150?img=34"
            size="xl"
            badgeContent={
              <img
                src="https://flagcdn.com/w40/gb.png"
                alt="UK"
                className="w-full h-full object-cover"
              />
            }
          />
          <AvatarBadge
            src="https://i.pravatar.cc/150?img=35"
            size="xl"
            badgeContent={
              <img
                src="https://flagcdn.com/w40/jp.png"
                alt="Japan"
                className="w-full h-full object-cover"
              />
            }
          />
        </div>
      </ComponentPreview>

      {/* Installation */}
      <InstallationTabs
        componentName="avatar-badge"
        dependencies={[]}
        manualSteps={manualSteps}
      />

      {/* Props */}
      <PropsTable
        props={[
          { name: "src", type: "string", default: "undefined" },
          { name: "alt", type: "string", default: '"Avatar"' },
          { name: "fallback", type: "string", default: "undefined" },
          { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl"', default: '"md"' },
          { name: "shape", type: '"circle" | "square"', default: '"circle"' },
          { name: "border", type: "boolean", default: "false" },
          { name: "borderColor", type: '"default" | "white" | "primary"', default: '"default"' },
          { name: "badgeContent", type: "ReactNode", default: "undefined" },
          { name: "badgePosition", type: '"top-right" | "top-left" | "bottom-right" | "bottom-left"', default: '"bottom-right"' },
          { name: "badgeColor", type: '"green" | "red" | "yellow" | "blue" | "gray"', default: '"green"' },
          { name: "showStatus", type: "boolean", default: "false" },
        ]}
      />
    </ComponentPageLayout>
  );
}
