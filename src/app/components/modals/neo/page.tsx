"use client";

import React, { useState } from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { ModalNeo } from "@/zeroui/components/modals";

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
    filename: "components/modals/modal-neo.tsx",
    code: `"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

interface ModalNeoProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  color?: string; // hex or tailwind class for border/shadow
  className?: string;
}

export default function ModalNeo({
  isOpen,
  onClose,
  title,
  children,
  color = "#facc15",
  className = "",
}: ModalNeoProps) {
  // Implementation details...
  return (
    // Component JSX...
    <div />
  );
}`,
  },
];

export default function ModalNeoPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPink, setIsOpenPink] = useState(false);

  return (
    <ComponentPageLayout
      componentName="Modal Neo"
      description="A bold Neo-Brutalist / Pop modal with hard shadows and vibrant colors."
      componentItems={modalComponents}
      activeComponentId="modal-neo"
      prevComponent={{ name: "Modal Cyber", href: "/components/modals/cyber" }}
      nextComponent={{ name: "Modal Nature", href: "/components/modals/nature" }}
    >
      <ComponentPreview
        code={`const [isOpen, setIsOpen] = useState(false);

<button 
  onClick={() => setIsOpen(true)}
  className="px-6 py-3 font-black bg-yellow-400 border-2 border-black shadow-[4px_4px_0px_0px_black] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all"
>
  OPEN NEO MODAL
</button>

<ModalNeo 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)} 
  title="ATTENTION!"
  color="#facc15" // Yellow
>
  <div className="space-y-4">
    <p className="font-bold text-lg">
      THIS IS A NEO-POP MODAL. IT GRABS ATTENTION.
    </p>
    <p>
      Perfect for newsletters, sales, or bold announcements.
    </p>
    <button 
      onClick={() => setIsOpen(false)}
      className="w-full py-3 bg-black text-white font-black hover:bg-zinc-800 transition-colors"
    >
      UNDERSTOOD
    </button>
  </div>
</ModalNeo>`}
      >
        <div className="p-8 flex gap-6 justify-center flex-wrap">
          <button
            onClick={() => setIsOpen(true)}
            className="px-6 py-3 font-black bg-yellow-400 border-2 border-black shadow-[4px_4px_0px_0px_black] hover:translate-y-[-2px] hover:translate-x-[-2px] hover:shadow-[6px_6px_0px_0px_black] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all"
          >
            OPEN NEO (YELLOW)
          </button>

          <button
            onClick={() => setIsOpenPink(true)}
            className="px-6 py-3 font-black bg-pink-400 border-2 border-black shadow-[4px_4px_0px_0px_black] hover:translate-y-[-2px] hover:translate-x-[-2px] hover:shadow-[6px_6px_0px_0px_black] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all"
          >
            OPEN NEO (PINK)
          </button>

          {/* Yellow Modal */}
          <ModalNeo
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title="ATTENTION!"
            color="#facc15"
          >
            <div className="space-y-6">
              <p className="font-bold text-xl leading-tight">
                THIS IS A NEO-POP MODAL. IT DEMANDS YOUR ATTENTION.
              </p>
              <p className="font-medium text-zinc-600">
                Use this style for high-energy announcements, flash sales, or critical alerts.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-3 border-2 border-black font-bold hover:bg-zinc-100 transition-colors"
                >
                  NO THANKS
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-3 bg-black text-white font-black hover:bg-zinc-800 transition-colors"
                >
                  I WANT IT
                </button>
              </div>
            </div>
          </ModalNeo>

          {/* Pink Modal */}
          <ModalNeo
            isOpen={isOpenPink}
            onClose={() => setIsOpenPink(false)}
            title="HOT OFFER 50% OFF"
            color="#f472b6"
          >
            <div className="space-y-6">
              <div className="bg-pink-100 p-4 border-2 border-dashed border-black">
                <p className="font-black text-center text-xl">CODE: ZERO-UI-50</p>
              </div>
              <p className="font-medium">
                Grab this exclusive deal before the timer runs out. Applies to all premium components.
              </p>
              <button
                onClick={() => setIsOpenPink(false)}
                className="w-full py-4 bg-pink-500 border-2 border-black text-black font-black hover:bg-pink-400 transition-colors shadow-[4px_4px_0px_0px_black] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
              >
                CLAIM OFFER
              </button>
            </div>
          </ModalNeo>
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="modal-neo"
        dependencies={["lucide-react"]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          {
            name: "color",
            type: "string",
            default: '"#facc15"',
            description: "Hex color for shadow accent",
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
