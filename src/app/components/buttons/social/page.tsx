"use client";

import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { ButtonSocial } from "@/zeroui/components/buttons";

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
    filename: "components/buttons/button-social.tsx",
    code: `"use client";

import React from "react";

type SocialProvider = "google" | "github" | "twitter" | "facebook" | "apple" | "discord" | "linkedin" | "spotify";

interface ButtonSocialProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  provider: SocialProvider;
  variant?: "default" | "outline" | "icon";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

export default function ButtonSocial({ provider, variant = "default", size = "md", children, className = "", ...props }: ButtonSocialProps) {
  // Component implementation with brand colors and icons...
}`,
  },
];

export default function ButtonSocialPage() {
  return (
    <ComponentPageLayout
      componentName="Button Social"
      description="Social login and share buttons with brand colors."
      componentItems={buttonComponents}
      activeComponentId="button-social"
      prevComponent={{ name: "Button Group", href: "/components/buttons/group" }}
      nextComponent={{ name: "Button Gradient", href: "/components/buttons/gradient" }}
    >
      {/* All Providers */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Social Providers</h3>
      <ComponentPreview
        code={`<ButtonSocial provider="google" />
<ButtonSocial provider="github" />
<ButtonSocial provider="twitter" />
<ButtonSocial provider="facebook" />
<ButtonSocial provider="apple" />
<ButtonSocial provider="discord" />
<ButtonSocial provider="linkedin" />
<ButtonSocial provider="spotify" />`}
      >
        <div className="flex flex-col gap-3 items-center justify-center max-w-sm mx-auto">
          <ButtonSocial provider="google" className="w-full" />
          <ButtonSocial provider="github" className="w-full" />
          <ButtonSocial provider="twitter" className="w-full" />
          <ButtonSocial provider="facebook" className="w-full" />
          <ButtonSocial provider="apple" className="w-full" />
          <ButtonSocial provider="discord" className="w-full" />
          <ButtonSocial provider="linkedin" className="w-full" />
          <ButtonSocial provider="spotify" className="w-full" />
        </div>
      </ComponentPreview>

      {/* Custom Text */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Custom Text</h3>
      <ComponentPreview
        code={`<ButtonSocial provider="google">Sign in with Google</ButtonSocial>
<ButtonSocial provider="github">Login with GitHub</ButtonSocial>
<ButtonSocial provider="discord">Join our Discord</ButtonSocial>`}
      >
        <div className="flex flex-col gap-3 items-center justify-center max-w-sm mx-auto">
          <ButtonSocial provider="google" className="w-full">Sign in with Google</ButtonSocial>
          <ButtonSocial provider="github" className="w-full">Login with GitHub</ButtonSocial>
          <ButtonSocial provider="discord" className="w-full">Join our Discord</ButtonSocial>
        </div>
      </ComponentPreview>

      {/* Icon Only */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Icon Only</h3>
      <ComponentPreview
        code={`<ButtonSocial provider="google" variant="icon" />
<ButtonSocial provider="github" variant="icon" />
<ButtonSocial provider="twitter" variant="icon" />
<ButtonSocial provider="facebook" variant="icon" />
<ButtonSocial provider="apple" variant="icon" />
<ButtonSocial provider="discord" variant="icon" />
<ButtonSocial provider="linkedin" variant="icon" />
<ButtonSocial provider="spotify" variant="icon" />`}
      >
        <div className="flex flex-wrap gap-3 items-center justify-center">
          <ButtonSocial provider="google" variant="icon" />
          <ButtonSocial provider="github" variant="icon" />
          <ButtonSocial provider="twitter" variant="icon" />
          <ButtonSocial provider="facebook" variant="icon" />
          <ButtonSocial provider="apple" variant="icon" />
          <ButtonSocial provider="discord" variant="icon" />
          <ButtonSocial provider="linkedin" variant="icon" />
          <ButtonSocial provider="spotify" variant="icon" />
        </div>
      </ComponentPreview>

      {/* Sizes */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Sizes</h3>
      <ComponentPreview
        code={`<ButtonSocial provider="github" size="sm">Small</ButtonSocial>
<ButtonSocial provider="github" size="md">Medium</ButtonSocial>
<ButtonSocial provider="github" size="lg">Large</ButtonSocial>`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <ButtonSocial provider="github" size="sm">Small</ButtonSocial>
          <ButtonSocial provider="github" size="md">Medium</ButtonSocial>
          <ButtonSocial provider="github" size="lg">Large</ButtonSocial>
        </div>
      </ComponentPreview>

      {/* Icon Sizes */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Icon Sizes</h3>
      <ComponentPreview
        code={`<ButtonSocial provider="discord" variant="icon" size="sm" />
<ButtonSocial provider="discord" variant="icon" size="md" />
<ButtonSocial provider="discord" variant="icon" size="lg" />`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <ButtonSocial provider="discord" variant="icon" size="sm" />
          <ButtonSocial provider="discord" variant="icon" size="md" />
          <ButtonSocial provider="discord" variant="icon" size="lg" />
        </div>
      </ComponentPreview>

      {/* Login Form Example */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Login Form Example</h3>
      <ComponentPreview
        code={`<div className="space-y-3">
  <ButtonSocial provider="google" className="w-full" />
  <ButtonSocial provider="github" className="w-full" />
  <ButtonSocial provider="apple" className="w-full" />
  <div className="relative my-4">
    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t border-zinc-300" />
    </div>
    <div className="relative flex justify-center text-sm">
      <span className="px-2 bg-white text-zinc-500">Or continue with email</span>
    </div>
  </div>
</div>`}
      >
        <div className="max-w-sm mx-auto space-y-3">
          <ButtonSocial provider="google" className="w-full" />
          <ButtonSocial provider="github" className="w-full" />
          <ButtonSocial provider="apple" className="w-full" />
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-300 dark:border-zinc-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-zinc-900 text-zinc-500">Or continue with email</span>
            </div>
          </div>
        </div>
      </ComponentPreview>

      {/* Share Buttons Example */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Share Buttons</h3>
      <ComponentPreview
        code={`<div className="flex gap-2">
  <ButtonSocial provider="twitter" variant="icon" />
  <ButtonSocial provider="facebook" variant="icon" />
  <ButtonSocial provider="linkedin" variant="icon" />
</div>`}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-sm text-zinc-500 dark:text-zinc-400">Share this article</span>
          <div className="flex gap-2">
            <ButtonSocial provider="twitter" variant="icon" />
            <ButtonSocial provider="facebook" variant="icon" />
            <ButtonSocial provider="linkedin" variant="icon" />
          </div>
        </div>
      </ComponentPreview>

      {/* Installation */}
      <InstallationTabs
        componentName="button-social"
        dependencies={[]}
        manualSteps={manualSteps}
      />

      {/* Props */}
      <PropsTable
        props={[
          { name: "provider", type: '"google" | "github" | "twitter" | "facebook" | "apple" | "discord" | "linkedin" | "spotify"', default: "-" },
          { name: "variant", type: '"default" | "outline" | "icon"', default: '"default"' },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
          { name: "children", type: "ReactNode", default: '"Continue with {Provider}"' },
          { name: "className", type: "string", default: '""' },
          { name: "disabled", type: "boolean", default: "false" },
        ]}
      />
    </ComponentPageLayout>
  );
}
