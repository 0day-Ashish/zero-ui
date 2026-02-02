"use client";

import { useState } from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { ButtonIcon } from "@/zeroui/components/buttons";
import {
  Heart,
  Flame,
  Star,
  ThumbsUp,
  Copy,
  Download,
  Calendar,
  Upload,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  RotateCcw,
  Settings,
  Search,
  Menu,
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
  { id: "button-3d", name: "Button 3D", href: "/components/buttons/3d" },
];

// Code for preview
const previewCode = `import { ButtonIcon } from "@/zeroui/components/buttons";
import { Heart, Star, ThumbsUp } from "lucide-react";

export default function Example() {
  return (
    <div className="flex gap-4">
      <ButtonIcon>
        <Heart className="w-5 h-5" />
      </ButtonIcon>
      <ButtonIcon>
        <Star className="w-5 h-5" />
      </ButtonIcon>
      <ButtonIcon>
        <ThumbsUp className="w-5 h-5" />
      </ButtonIcon>
    </div>
  );
}`;

// Manual installation steps
const manualSteps = [
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/buttons/button-icon.tsx",
    code: `"use client";

import React from "react";

interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function ButtonIcon({
  variant = "default",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonIconProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default:
      "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 focus:ring-zinc-400 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white border border-zinc-200 dark:border-zinc-700",
    outline:
      "border-2 border-zinc-300 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-600 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white",
    ghost:
      "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white",
  };

  const sizes = {
    sm: "p-2",
    md: "p-3",
    lg: "p-4",
  };

  return (
    <button
      className={\`\${baseStyles} \${variants[variant]} \${sizes[size]} \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
}`,
  },
  {
    title: "Import and use the component",
    description: "Import the button icon in your page or component:",
    filename: "app/page.tsx",
    code: `import ButtonIcon from "@/components/buttons/button-icon";
import { Heart } from "lucide-react";

export default function Page() {
  return (
    <ButtonIcon>
      <Heart className="w-5 h-5" />
    </ButtonIcon>
  );
}`,
  },
];

export default function ButtonIconPage() {
  const [activeReactions, setActiveReactions] = useState<Record<string, boolean>>({
    heart: false,
    flame: false,
    star: false,
    thumbsUp: false,
  });

  const toggleReaction = (key: string) => {
    setActiveReactions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <ComponentPageLayout
      componentName="Button Icon"
      description="Icon-only buttons for compact actions and toolbars."
      componentItems={buttonComponents}
      activeComponentId="button-icon"
      prevComponent={{ name: "Button Basic", href: "/components/buttons" }}
      nextComponent={{ name: "Button Loading", href: "/components/buttons/loading" }}
    >
      {/* Reactions Group */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Reactions</h3>
      <ComponentPreview
        code={`const [isLiked, setIsLiked] = useState(false);

<ButtonIcon
  color="heart"
  isActive={isLiked}
  onClick={() => setIsLiked(!isLiked)}
>
  <Heart className="w-5 h-5" />
</ButtonIcon>`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <ButtonIcon color="heart" isActive={activeReactions.heart} onClick={() => toggleReaction("heart")}>
            <Heart className="w-5 h-5" />
          </ButtonIcon>
          <ButtonIcon color="flame" isActive={activeReactions.flame} onClick={() => toggleReaction("flame")}>
            <Flame className="w-5 h-5" />
          </ButtonIcon>
          <ButtonIcon color="star" isActive={activeReactions.star} onClick={() => toggleReaction("star")}>
            <Star className="w-5 h-5" />
          </ButtonIcon>
          <ButtonIcon color="success" isActive={activeReactions.thumbsUp} onClick={() => toggleReaction("thumbsUp")}>
            <ThumbsUp className="w-5 h-5" />
          </ButtonIcon>
        </div>
      </ComponentPreview>

      {/* Actions Group */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Actions</h3>
      <ComponentPreview
        code={`<ButtonIcon><Copy className="w-5 h-5" /></ButtonIcon>
<ButtonIcon><Download className="w-5 h-5" /></ButtonIcon>
<ButtonIcon><Upload className="w-5 h-5" /></ButtonIcon>
<ButtonIcon><Calendar className="w-5 h-5" /></ButtonIcon>`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <ButtonIcon>
            <Copy className="w-5 h-5" />
          </ButtonIcon>
          <ButtonIcon>
            <Download className="w-5 h-5" />
          </ButtonIcon>
          <ButtonIcon>
            <Upload className="w-5 h-5" />
          </ButtonIcon>
          <ButtonIcon>
            <Calendar className="w-5 h-5" />
          </ButtonIcon>
        </div>
      </ComponentPreview>

      {/* Media Controls Group */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Media Controls</h3>
      <ComponentPreview
        code={`<ButtonIcon><SkipBack className="w-5 h-5" /></ButtonIcon>
<ButtonIcon><Pause className="w-5 h-5" /></ButtonIcon>
<ButtonIcon><Play className="w-5 h-5" /></ButtonIcon>
<ButtonIcon><SkipForward className="w-5 h-5" /></ButtonIcon>
<ButtonIcon><RotateCcw className="w-5 h-5" /></ButtonIcon>`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <ButtonIcon>
            <SkipBack className="w-5 h-5" />
          </ButtonIcon>
          <ButtonIcon>
            <Pause className="w-5 h-5" />
          </ButtonIcon>
          <ButtonIcon>
            <Play className="w-5 h-5" />
          </ButtonIcon>
          <ButtonIcon>
            <SkipForward className="w-5 h-5" />
          </ButtonIcon>
          <ButtonIcon>
            <RotateCcw className="w-5 h-5" />
          </ButtonIcon>
        </div>
      </ComponentPreview>

      {/* Navigation Group */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Navigation</h3>
      <ComponentPreview
        code={`<ButtonIcon><Menu className="w-5 h-5" /></ButtonIcon>
<ButtonIcon><Search className="w-5 h-5" /></ButtonIcon>
<ButtonIcon><Settings className="w-5 h-5" /></ButtonIcon>`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <ButtonIcon>
            <Menu className="w-5 h-5" />
          </ButtonIcon>
          <ButtonIcon>
            <Search className="w-5 h-5" />
          </ButtonIcon>
          <ButtonIcon>
            <Settings className="w-5 h-5" />
          </ButtonIcon>
        </div>
      </ComponentPreview>

      {/* Variants */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Variants</h3>
      <ComponentPreview
        code={`<ButtonIcon variant="default"><Heart className="w-5 h-5" /></ButtonIcon>
<ButtonIcon variant="outline"><Heart className="w-5 h-5" /></ButtonIcon>
<ButtonIcon variant="ghost"><Heart className="w-5 h-5" /></ButtonIcon>`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <ButtonIcon variant="default">
            <Heart className="w-5 h-5" />
          </ButtonIcon>
          <ButtonIcon variant="outline">
            <Heart className="w-5 h-5" />
          </ButtonIcon>
          <ButtonIcon variant="ghost">
            <Heart className="w-5 h-5" />
          </ButtonIcon>
        </div>
      </ComponentPreview>

      {/* Sizes */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Sizes</h3>
      <ComponentPreview
        code={`<ButtonIcon size="sm"><Heart className="w-4 h-4" /></ButtonIcon>
<ButtonIcon size="md"><Heart className="w-5 h-5" /></ButtonIcon>
<ButtonIcon size="lg"><Heart className="w-6 h-6" /></ButtonIcon>`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <ButtonIcon size="sm">
            <Heart className="w-4 h-4" />
          </ButtonIcon>
          <ButtonIcon size="md">
            <Heart className="w-5 h-5" />
          </ButtonIcon>
          <ButtonIcon size="lg">
            <Heart className="w-6 h-6" />
          </ButtonIcon>
        </div>
      </ComponentPreview>

      {/* Installation */}
      <InstallationTabs
        componentName="button-icon"
        dependencies={["lucide-react"]}
        manualSteps={manualSteps}
      />

      {/* Props */}
      <PropsTable
        props={[
          { name: "variant", type: '"default" | "outline" | "ghost"', default: '"default"' },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
          { name: "color", type: '"default" | "heart" | "flame" | "star" | "success" | "info"', default: '"default"' },
          { name: "isActive", type: "boolean", default: "false" },
          { name: "children", type: "ReactNode", default: "-" },
          { name: "className", type: "string", default: '""' },
          { name: "disabled", type: "boolean", default: "false" },
        ]}
      />
    </ComponentPageLayout>
  );
}
