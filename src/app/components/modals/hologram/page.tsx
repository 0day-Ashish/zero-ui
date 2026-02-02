"use client";

import React, { useState } from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { ModalHologram } from "@/zeroui/components/modals";

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
    filename: "components/modals/modal-hologram.tsx",
    code: `"use client";

import React, { useEffect, useState } from "react";
import { X, Aperture } from "lucide-react";

interface ModalHologramProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function ModalHologram({
  isOpen,
  onClose,
  title,
  children,
  className = "",
}: ModalHologramProps) {
  // Implementation details...
  return (
    // Component JSX...
    <div />
  );
}`,
  },
];

export default function ModalHologramPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ComponentPageLayout
      componentName="Modal Hologram"
      description="A sci-fi holographic projection modal with scanlines, flicker, and a light beam effect."
      componentItems={modalComponents}
      activeComponentId="modal-hologram"
      prevComponent={{ name: "Modal Nature", href: "/components/modals/nature" }}
      nextComponent={{ name: "Spinners", href: "/components/spinners" }}
    >
      <ComponentPreview
        code={`const [isOpen, setIsOpen] = useState(false);

<button 
  onClick={() => setIsOpen(true)}
  className="px-6 py-2 bg-cyan-950 border border-cyan-500 text-cyan-400 hover:bg-cyan-900 transition-colors uppercase font-mono tracking-widest text-xs"
>
  ACTIVATE HOLOGRAM
</button>

<ModalHologram 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)} 
  title="TRANSMISSION_INCOMING"
>
  <div className="space-y-4 text-sm font-mono tracking-wide">
    <div className="flex items-center gap-4">
        <div className="w-16 h-16 border border-cyan-500/50 bg-cyan-500/10 flex items-center justify-center">
            <span className="text-2xl">?</span>
        </div>
        <div>
            <p className="text-cyan-300 font-bold">UNKNOWN SENDER</p>
            <p className="text-cyan-500/70 text-xs">Origin: Sector 9</p>
        </div>
    </div>
    <p>
      "Help me, Obi-Wan Kenobi. You're my only hope."
    </p>
    <div className="w-full h-[1px] bg-cyan-500/30 my-4" />
    <div className="flex justify-end">
      <button 
        onClick={() => setIsOpen(false)}
        className="text-cyan-400 hover:text-white hover:bg-cyan-500/20 px-3 py-1 transition-colors uppercase text-xs border border-transparent hover:border-cyan-500/50"
      >
        End Transmission
      </button>
    </div>
  </div>
</ModalHologram>`}
      >
        <div className="p-12 flex justify-center bg-black rounded-xl border border-zinc-800 relative overflow-hidden">
          {/* Background Stars */}
          <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full opacity-50" />
          <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full opacity-30" />
          <div className="absolute bottom-10 left-1/3 w-1 h-1 bg-white rounded-full opacity-40" />

          <button
            onClick={() => setIsOpen(true)}
            className="relative z-10 px-6 py-2 bg-cyan-950/50 border border-cyan-500 text-cyan-400 hover:bg-cyan-900/80 transition-colors uppercase font-mono tracking-widest text-xs shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]"
          >
            ACTIVATE HOLOGRAM
          </button>

          <ModalHologram
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title="TRANSMISSION_INCOMING"
          >
            <div className="space-y-4 text-sm font-mono tracking-wide">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 border border-cyan-500/50 bg-cyan-500/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-cyan-400/10 animate-pulse" />
                  <span className="text-2xl relative z-10">?</span>
                </div>
                <div>
                  <p className="text-cyan-300 font-bold uppercase">UNKNOWN SENDER</p>
                  <p className="text-cyan-500/70 text-xs uppercase">Origin: Sector 9 // Encrypted</p>
                </div>
              </div>
              <p className="leading-relaxed text-cyan-100/90 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">
                "Message received. The databanks have been compromised. Please secure the perimeter immediately."
              </p>
              <div className="w-full h-[1px] bg-cyan-500/30 my-4" />
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-cyan-700 animate-pulse">SIGNAL STRENGTH: 84%</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-cyan-400 hover:text-white hover:bg-cyan-500/20 px-3 py-1 transition-colors uppercase text-xs border border-transparent hover:border-cyan-500/50"
                >
                  End Transmission
                </button>
              </div>
            </div>
          </ModalHologram>
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="modal-hologram"
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
