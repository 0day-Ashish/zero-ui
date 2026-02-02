"use client";

import React, { useState } from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { ModalNature } from "@/zeroui/components/modals";

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
    filename: "components/modals/modal-nature.tsx",
    code: `"use client";

import React, { useEffect, useState } from "react";
import { X, Leaf } from "lucide-react";

interface ModalNatureProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function ModalNature({
  isOpen,
  onClose,
  title,
  children,
  className = "",
}: ModalNatureProps) {
  // Implementation details...
  return (
    // Component JSX...
    <div />
  );
}`,
  },
];

export default function ModalNaturePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ComponentPageLayout
      componentName="Modal Nature"
      description="An organic, calming modal with soft transitions and natural motifs."
      componentItems={modalComponents}
      activeComponentId="modal-nature"
      prevComponent={{ name: "Modal Neo", href: "/components/modals/neo" }}
      nextComponent={{ name: "Modal Hologram", href: "/components/modals/hologram" }}
    >
      <ComponentPreview
        code={`const [isOpen, setIsOpen] = useState(false);

<button 
  onClick={() => setIsOpen(true)}
  className="px-6 py-2 rounded-full bg-[#e7e5e4] text-[#57534e] hover:bg-[#d6d3d1] transition-colors font-serif italic"
>
  Open Nature Modal
</button>

<ModalNature 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)} 
  title="Wellness Check"
>
  <div className="space-y-4">
    <p>
      Take a moment to breathe. This design is inspired by organic shapes and calming tones.
    </p>
    <div className="bg-[#f5f5f4] p-4 rounded-xl border border-[#e7e5e4]">
        <p className="text-sm italic">"Nature does not hurry, yet everything is accomplished."</p>
    </div>
    <div className="flex justify-end pt-2">
      <button 
        onClick={() => setIsOpen(false)}
        className="px-6 py-2 rounded-full bg-[#78716c] text-white hover:bg-[#57534e] transition-colors"
      >
        Close
      </button>
    </div>
  </div>
</ModalNature>`}
      >
        <div className="p-12 flex justify-center bg-[url('https://images.unsplash.com/photo-1614267605963-7da9f77da09f?w=800')] bg-cover bg-center rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />

          <button
            onClick={() => setIsOpen(true)}
            className="relative z-10 px-8 py-3 rounded-full bg-[#fcfaf8] text-[#57534e] border border-[#e7e5e4] shadow-sm hover:scale-105 transition-all font-serif italic text-lg"
          >
            Explore Calm
          </button>

          <ModalNature
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title="Morning Reflection"
          >
            <div className="space-y-6">
              <p>
                Take a deep breath. Notice the subtle entrance animation and the soft, rounded corners. This modal is designed to reduce anxiety and promote focus.
              </p>
              <div className="bg-[#f5f5f4] dark:bg-[#292524] p-4 rounded-2xl border border-[#e7e5e4] dark:border-[#44403c]">
                <p className="text-sm italic text-center">"Nature does not hurry, yet everything is accomplished."</p>
                <p className="text-xs text-center mt-2 text-stone-400">— Lao Tzu</p>
              </div>
              <div className="flex justify-center pt-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-2 rounded-full bg-[#78716c] text-white hover:bg-[#57534e] transition-colors shadow-lg shadow-stone-200 dark:shadow-stone-900"
                >
                  Continuue
                </button>
              </div>
            </div>
          </ModalNature>
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="modal-nature"
        dependencies={["lucide-react"]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
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
