"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { Avatar, AvatarBadge, AvatarGroup } from "@/zeroui/components/avatars";

const avatarComponents = [
  { id: "avatar", name: "Avatar", href: "/components/avatars" },
  { id: "avatar-badge", name: "Avatar Badge", href: "/components/avatars/badge" },
  { id: "avatar-group", name: "Avatar Group", href: "/components/avatars/group" },
];

const previewCode = `import { Avatar } from "@/zeroui/components/avatars";

export default function Example() {
  return (
    <div className="flex gap-4 items-center">
      <Avatar src="/avatar1.jpg" alt="User" />
      <Avatar fallback="John Doe" />
      <Avatar src="/avatar2.jpg" size="lg" />
    </div>
  );
}`;

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/avatars/avatar.tsx",
    code: `"use client";

import React from "react";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  shape?: "circle" | "square";
  border?: boolean;
  borderColor?: "default" | "white" | "primary";
}

export default function Avatar({
  src,
  alt = "Avatar",
  fallback,
  size = "md",
  shape = "circle",
  border = false,
  borderColor = "default",
  className = "",
  ...props
}: AvatarProps) {
  const sizes = {
    xs: "w-6 h-6 text-xs",
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-sm",
    lg: "w-14 h-14 text-base",
    xl: "w-20 h-20 text-lg",
  };

  const shapes = {
    circle: "rounded-full",
    square: "rounded-xl",
  };

  const borderColors = {
    default: "ring-2 ring-zinc-200 dark:ring-zinc-700",
    white: "ring-2 ring-white dark:ring-zinc-900",
    primary: "ring-2 ring-violet-500",
  };

  const baseStyles =
    "relative inline-flex items-center justify-center overflow-hidden bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 font-medium select-none";

  const getInitials = (text?: string) => {
    if (!text) return "?";
    return text
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div
      className={\`\${baseStyles} \${sizes[size]} \${shapes[shape]} \${border ? borderColors[borderColor] : ""} \${className}\`}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span>{getInitials(fallback)}</span>
      )}
    </div>
  );
}`,
  },
  {
    title: "Import and use the component",
    description: "Import the avatar in your page or component:",
    filename: "app/page.tsx",
    code: `import Avatar from "@/components/avatars/avatar";

export default function Page() {
  return (
    <Avatar src="/profile.jpg" alt="User" size="md" />
  );
}`,
  },
];

export default function AvatarsPage() {
  const sampleAvatars = [
    { src: "https://i.pravatar.cc/150?img=1", alt: "User 1" },
    { src: "https://i.pravatar.cc/150?img=2", alt: "User 2" },
    { src: "https://i.pravatar.cc/150?img=3", alt: "User 3" },
    { src: "https://i.pravatar.cc/150?img=4", alt: "User 4" },
    { src: "https://i.pravatar.cc/150?img=5", alt: "User 5" },
    { src: "https://i.pravatar.cc/150?img=6", alt: "User 6" },
  ];

  return (
    <ComponentPageLayout
      componentName="Avatar"
      description="Display user profile images with fallback initials, badges, and grouping support."
      componentItems={avatarComponents}
      activeComponentId="avatar"
    >
      {/* Basic Avatar Preview */}
      <ComponentPreview code={previewCode}>
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <Avatar src="https://i.pravatar.cc/150?img=1" alt="User" />
          <Avatar fallback="John Doe" />
          <Avatar src="https://i.pravatar.cc/150?img=3" size="lg" />
          <Avatar fallback="Alice Smith" size="xl" border borderColor="primary" />
        </div>
      </ComponentPreview>

      {/* Sizes */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Sizes</h3>
      <ComponentPreview
        code={`<Avatar size="xs" fallback="XS" />
<Avatar size="sm" fallback="SM" />
<Avatar size="md" fallback="MD" />
<Avatar size="lg" fallback="LG" />
<Avatar size="xl" fallback="XL" />`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Avatar size="xs" fallback="XS" />
          <Avatar size="sm" fallback="SM" />
          <Avatar size="md" fallback="MD" />
          <Avatar size="lg" fallback="LG" />
          <Avatar size="xl" fallback="XL" />
        </div>
      </ComponentPreview>

      {/* Shapes */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Shapes</h3>
      <ComponentPreview
        code={`<Avatar shape="circle" src="..." />
<Avatar shape="square" src="..." />`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Avatar shape="circle" src="https://i.pravatar.cc/150?img=5" size="lg" />
          <Avatar shape="square" src="https://i.pravatar.cc/150?img=5" size="lg" />
        </div>
      </ComponentPreview>

      {/* With Badge */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">With Badge</h3>
      <ComponentPreview
        code={`<AvatarBadge src="..." showStatus badgeColor="green" />
<AvatarBadge src="..." showStatus badgeColor="red" />
<AvatarBadge src="..." badgeContent={<img src="flag.png" />} />`}
      >
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <AvatarBadge
            src="https://i.pravatar.cc/150?img=10"
            size="lg"
            showStatus
            badgeColor="green"
          />
          <AvatarBadge
            src="https://i.pravatar.cc/150?img=11"
            size="lg"
            showStatus
            badgeColor="red"
          />
          <AvatarBadge
            src="https://i.pravatar.cc/150?img=12"
            size="lg"
            showStatus
            badgeColor="yellow"
          />
          <AvatarBadge
            src="https://i.pravatar.cc/150?img=13"
            size="xl"
            badgeContent={
              <img
                src="https://flagcdn.com/w40/au.png"
                alt="Australia"
                className="w-full h-full object-cover"
              />
            }
          />
        </div>
      </ComponentPreview>

      {/* Avatar Group */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Avatar Group</h3>
      <ComponentPreview
        code={`<AvatarGroup
  avatars={[
    { src: "...", alt: "User 1" },
    { src: "...", alt: "User 2" },
    { src: "...", alt: "User 3" },
    { src: "...", alt: "User 4" },
    { src: "...", alt: "User 5" },
  ]}
  max={3}
/>`}
      >
        <div className="flex flex-col gap-6 items-center justify-center">
          <AvatarGroup avatars={sampleAvatars} max={3} size="md" />
          <AvatarGroup avatars={sampleAvatars} max={4} size="lg" />
          <AvatarGroup avatars={sampleAvatars} max={5} size="lg" spacing="tight" />
        </div>
      </ComponentPreview>

      {/* Installation */}
      <InstallationTabs
        componentName="avatar"
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
          { name: "className", type: "string", default: '""' },
        ]}
      />
    </ComponentPageLayout>
  );
}
