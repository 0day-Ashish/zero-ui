"use client";

import React, { useState } from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { ModalBase } from "@/zeroui/components/modals";

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
    filename: "components/modals/modal-base.tsx",
    code: `"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

interface ModalBaseProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function ModalBase({
  isOpen,
  onClose,
  title,
  children,
  className = "",
}: ModalBaseProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      requestAnimationFrame(() => setIsAnimating(true));
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className={\`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 \${
          isAnimating ? "opacity-100" : "opacity-0"
        }\`}
        onClick={onClose}
      />
      <div
        className={\`relative w-full max-w-lg bg-white dark:bg-zinc-900 rounded-xl shadow-2xl transform transition-all duration-300 ease-out \${
          isAnimating ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"
        } \${className}\`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}`,
  },
];

export default function ModalBasePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ComponentPageLayout
      componentName="Modal Base"
      description="A clean, accessible modal dialog with smooth animations."
      componentItems={modalComponents}
      activeComponentId="modal-base"
      prevComponent={{ name: "Button 3D", href: "/components/buttons/3d" }}
      nextComponent={{ name: "Modal Glass", href: "/components/modals/glass" }}
    >
      <ComponentPreview
        code={`const [isOpen, setIsOpen] = useState(false);

<button 
  onClick={() => setIsOpen(true)}
  className="px-4 py-2 bg-zinc-900 text-white dark:bg-white dark:text-black rounded-md"
>
  Open Modal
</button>

<ModalBase 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)} 
  title="Edit Profile"
>
  <div className="space-y-4">
    <p className="text-zinc-600 dark:text-zinc-400">
      Make changes to your profile here. Click save when you're done.
    </p>
    <div className="flex justify-end gap-2">
      <button 
        onClick={() => setIsOpen(false)}
        className="px-4 py-2 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md"
      >
        Cancel
      </button>
      <button 
        onClick={() => setIsOpen(false)}
        className="px-4 py-2 text-sm font-medium bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
      >
        Save Changes
      </button>
    </div>
  </div>
</ModalBase>`}
      >
        <div className="p-8 flex justify-center">
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-2 bg-zinc-900 text-white dark:bg-white dark:text-black rounded-md hover:opacity-90 transition-opacity"
          >
            Open Modal
          </button>

          <ModalBase
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title="Edit Profile"
          >
            <div className="space-y-4">
              <p className="text-zinc-600 dark:text-zinc-400">
                Make changes to your profile here. Click save when you're done.
              </p>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm font-medium bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </ModalBase>
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="modal-base"
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
          {
            name: "children",
            type: "ReactNode",
            default: "-",
            description: "Modal content",
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
