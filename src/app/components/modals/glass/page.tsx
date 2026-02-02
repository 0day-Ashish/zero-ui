"use client";

import React, { useState } from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { ModalGlass } from "@/zeroui/components/modals";

const modalComponents = [
  { id: "modal-base", name: "Modal Base", href: "/components/modals" },
  { id: "modal-glass", name: "Modal Glass", href: "/components/modals/glass" },
  { id: "modal-cyber", name: "Modal Cyber", href: "/components/modals/cyber" },
  { id: "modal-neo", name: "Modal Neo", href: "/components/modals/neo" },
  { id: "modal-nature", name: "Modal Nature", href: "/components/modals/nature" },
  { id: "modal-hologram", name: "Modal Hologram", href: "/components/modals/hologram" },
];

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/modals/modal-glass.tsx",
    code: `"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

interface ModalGlassProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function ModalGlass({
  isOpen,
  onClose,
  title,
  children,
  className = "",
}: ModalGlassProps) {
  // Implementation details...
  return (
    // Component JSX...
    <div />
  );
}`,
  },
];

export default function ModalGlassPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ComponentPageLayout
      componentName="Modal Glass"
      description="A premium glassmorphism modal with intense blur and transparency."
      componentItems={modalComponents}
      activeComponentId="modal-glass"
      prevComponent={{ name: "Modal Base", href: "/components/modals" }}
      nextComponent={{ name: "Modal Cyber", href: "/components/modals/cyber" }}
    >
      <ComponentPreview
        code={`const [isOpen, setIsOpen] = useState(false);

{/* Trigger in a vibrant container to show off glass effect */}
<div className="bg-gradient-to-br from-purple-500 to-pink-500 p-10 rounded-xl">
  <button 
    onClick={() => setIsOpen(true)}
    className="px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-lg hover:bg-white/30 transition-all"
  >
    Open Glass Modal
  </button>
</div>

<ModalGlass 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)} 
  title="Glass Effect"
>
  <div className="space-y-4">
    <p className="text-zinc-800 dark:text-zinc-200">
      This modal uses backdrop filters to create a frosted glass aesthetic. Perfect for premium UIs.
    </p>
    <div className="flex justify-end">
      <button 
        onClick={() => setIsOpen(false)}
        className="px-4 py-2 bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 rounded-lg transition-colors"
      >
        Got it
      </button>
    </div>
  </div>
</ModalGlass>`}
      >
        <div className="p-8 flex justify-center bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

          <button
            onClick={() => setIsOpen(true)}
            className="relative px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-lg hover:bg-white/30 transition-all font-medium shadow-lg"
          >
            Open Glass Modal
          </button>

          <ModalGlass
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title="Glass Effect"
          >
            <div className="space-y-4">
              <p className="text-zinc-800 dark:text-zinc-200 leading-relaxed">
                This modal uses <span className="font-mono bg-white/20 rounded px-1 text-sm">backdrop-filter</span> to create a frosted glass aesthetic. It works best over colorful or busy backgrounds.
              </p>
              <div className="flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 rounded-lg transition-colors font-medium text-sm"
                >
                  Got it
                </button>
              </div>
            </div>
          </ModalGlass>
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="modal-glass"
        dependencies={["lucide-react"]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          {
            name: "isOpen",
            type: "boolean",
            default: "false",
            description: "Controls visibility",
          },
          {
            name: "onClose",
            type: "() => void",
            default: "-",
            description: "Close handler",
          },
          {
            name: "title",
            type: "string",
            default: "-",
            description: "Modal header title",
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
