"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { AvatarGroup } from "@/zeroui/components/avatars";

const avatarComponents = [
  { id: "avatar", name: "Avatar", href: "/components/avatars" },
  { id: "avatar-badge", name: "Avatar Badge", href: "/components/avatars/badge" },
  { id: "avatar-group", name: "Avatar Group", href: "/components/avatars/group" },
];

const previewCode = `import { AvatarGroup } from "@/zeroui/components/avatars";

const avatars = [
  { src: "/avatar1.jpg", alt: "User 1" },
  { src: "/avatar2.jpg", alt: "User 2" },
  { src: "/avatar3.jpg", alt: "User 3" },
  { src: "/avatar4.jpg", alt: "User 4" },
  { src: "/avatar5.jpg", alt: "User 5" },
];

export default function Example() {
  return <AvatarGroup avatars={avatars} max={3} />;
}`;

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/avatars/avatar-group.tsx",
    code: `"use client";

import React from "react";
import Avatar from "./avatar";

interface AvatarItem {
  src?: string;
  alt?: string;
  fallback?: string;
}

interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  avatars: AvatarItem[];
  max?: number;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  shape?: "circle" | "square";
  spacing?: "tight" | "normal" | "loose";
}

export default function AvatarGroup({
  avatars,
  max = 4,
  size = "md",
  shape = "circle",
  spacing = "normal",
  className = "",
  ...props
}: AvatarGroupProps) {
  // ... component implementation
}`,
  },
];

export default function AvatarGroupPage() {
  const sampleAvatars = [
    { src: "https://i.pravatar.cc/150?img=1", alt: "User 1" },
    { src: "https://i.pravatar.cc/150?img=2", alt: "User 2" },
    { src: "https://i.pravatar.cc/150?img=3", alt: "User 3" },
    { src: "https://i.pravatar.cc/150?img=4", alt: "User 4" },
    { src: "https://i.pravatar.cc/150?img=5", alt: "User 5" },
    { src: "https://i.pravatar.cc/150?img=6", alt: "User 6" },
    { src: "https://i.pravatar.cc/150?img=7", alt: "User 7" },
    { src: "https://i.pravatar.cc/150?img=8", alt: "User 8" },
  ];

  return (
    <ComponentPageLayout
      componentName="Avatar Group"
      description="Display a stack of overlapping avatars with a count indicator for additional users."
      componentItems={avatarComponents}
      activeComponentId="avatar-group"
    >
      {/* Basic Group */}
      <ComponentPreview code={previewCode}>
        <div className="flex flex-wrap gap-8 items-center justify-center">
          <AvatarGroup avatars={sampleAvatars} max={3} size="md" />
          <AvatarGroup avatars={sampleAvatars} max={4} size="lg" />
        </div>
      </ComponentPreview>

      {/* Different Max Values */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Max Display Count</h3>
      <ComponentPreview
        code={`<AvatarGroup avatars={avatars} max={2} />
<AvatarGroup avatars={avatars} max={4} />
<AvatarGroup avatars={avatars} max={6} />`}
      >
        <div className="flex flex-col gap-6 items-center justify-center">
          <AvatarGroup avatars={sampleAvatars} max={2} size="lg" />
          <AvatarGroup avatars={sampleAvatars} max={4} size="lg" />
          <AvatarGroup avatars={sampleAvatars} max={6} size="lg" />
        </div>
      </ComponentPreview>

      {/* Sizes */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Sizes</h3>
      <ComponentPreview
        code={`<AvatarGroup size="sm" avatars={avatars} max={3} />
<AvatarGroup size="md" avatars={avatars} max={3} />
<AvatarGroup size="lg" avatars={avatars} max={3} />
<AvatarGroup size="xl" avatars={avatars} max={3} />`}
      >
        <div className="flex flex-col gap-6 items-center justify-center">
          <AvatarGroup avatars={sampleAvatars} max={3} size="sm" />
          <AvatarGroup avatars={sampleAvatars} max={3} size="md" />
          <AvatarGroup avatars={sampleAvatars} max={3} size="lg" />
          <AvatarGroup avatars={sampleAvatars} max={3} size="xl" />
        </div>
      </ComponentPreview>

      {/* Spacing */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Spacing</h3>
      <ComponentPreview
        code={`<AvatarGroup spacing="tight" avatars={avatars} max={4} />
<AvatarGroup spacing="normal" avatars={avatars} max={4} />
<AvatarGroup spacing="loose" avatars={avatars} max={4} />`}
      >
        <div className="flex flex-col gap-6 items-center justify-center">
          <div className="text-sm text-zinc-500 dark:text-zinc-400">Tight</div>
          <AvatarGroup avatars={sampleAvatars} max={4} size="lg" spacing="tight" />
          <div className="text-sm text-zinc-500 dark:text-zinc-400">Normal</div>
          <AvatarGroup avatars={sampleAvatars} max={4} size="lg" spacing="normal" />
          <div className="text-sm text-zinc-500 dark:text-zinc-400">Loose</div>
          <AvatarGroup avatars={sampleAvatars} max={4} size="lg" spacing="loose" />
        </div>
      </ComponentPreview>

      {/* Installation */}
      <InstallationTabs
        componentName="avatar-group"
        dependencies={[]}
        manualSteps={manualSteps}
      />

      {/* Props */}
      <PropsTable
        props={[
          { name: "avatars", type: "AvatarItem[]", default: "required" },
          { name: "max", type: "number", default: "4" },
          { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl"', default: '"md"' },
          { name: "shape", type: '"circle" | "square"', default: '"circle"' },
          { name: "spacing", type: '"tight" | "normal" | "loose"', default: '"normal"' },
          { name: "className", type: "string", default: '""' },
        ]}
      />
    </ComponentPageLayout>
  );
}
