"use client";

import React, { useState } from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { ModalCyber } from "@/zeroui/components/modals";

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
    filename: "components/modals/modal-cyber.tsx",
    code: `"use client";

import React, { useEffect, useState } from "react";
import { X, Hexagon } from "lucide-react";

interface ModalCyberProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  accentColor?: string;
  className?: string;
}

export default function ModalCyber({
  isOpen,
  onClose,
  title,
  children,
  accentColor = "#06b6d4",
  className = "",
}: ModalCyberProps) {
  // Implementation details...
  return (
    // Component JSX...
    <div />
  );
}`,
  },
];

export default function ModalCyberPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenRed, setIsOpenRed] = useState(false);

  return (
    <ComponentPageLayout
      componentName="Modal Cyber"
      description="A high-tech, sci-fi inspired modal with grid backgrounds and neon accents."
      componentItems={modalComponents}
      activeComponentId="modal-cyber"
      prevComponent={{ name: "Modal Glass", href: "/components/modals/glass" }}
      nextComponent={{ name: "Alerts", href: "/components/alerts" }}
    >
      <ComponentPreview
        code={`const [isOpen, setIsOpen] = useState(false);

<button 
  onClick={() => setIsOpen(true)}
  className="px-6 py-2 bg-black border border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 transition-colors uppercase font-mono tracking-wider"
>
  Initialize System
</button>

<ModalCyber 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)} 
  title="System Override"
  accentColor="#06b6d4" // Cyan
>
  <div className="space-y-4 font-mono">
    <p className="text-cyan-100">
      > ACCESS GRANTED<br/>
      > INITIATING PROTOCOL 77-A...<br/>
      > WARNING: UNSTABLE ENERGY LEVELS DETECTED.
    </p>
    <div className="flex justify-end gap-4 mt-6">
      <button 
        onClick={() => setIsOpen(false)}
        className="px-4 py-2 border border-cyan-500/50 text-cyan-500 text-sm hover:bg-cyan-950 uppercase"
      >
        Abort
      </button>
      <button 
        onClick={() => setIsOpen(false)}
        className="px-4 py-2 bg-cyan-500 text-black font-bold text-sm hover:bg-cyan-400 uppercase"
      >
        Confirm
      </button>
    </div>
  </div>
</ModalCyber>`}
      >
        <div className="p-8 flex gap-4 justify-center bg-zinc-950 rounded-xl border border-zinc-800">
          <button
            onClick={() => setIsOpen(true)}
            className="px-6 py-2 bg-black border border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 transition-colors uppercase font-mono tracking-wider text-sm shadow-[0_0_10px_rgba(6,182,212,0.2)]"
          >
            System Link
          </button>
          <button
            onClick={() => setIsOpenRed(true)}
            className="px-6 py-2 bg-black border border-red-500 text-red-500 hover:bg-red-500/10 transition-colors uppercase font-mono tracking-wider text-sm shadow-[0_0_10px_rgba(239,68,68,0.2)]"
          >
            Alert
          </button>

          {/* Cyan Modal */}
          <ModalCyber
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title="System Override"
            accentColor="#06b6d4"
          >
            <div className="space-y-4 font-mono text-sm">
              <p className="text-cyan-100/80 leading-relaxed">
                <span className="text-cyan-500">&gt;</span> ACCESS GRANTED<br />
                <span className="text-cyan-500">&gt;</span> INITIATING PROTOCOL 77-A...<br />
                <span className="text-cyan-500">&gt;</span> WARNING: UNSTABLE ENERGY LEVELS DETECTED.
              </p>
              <div className="w-full bg-zinc-900 h-1 mt-2">
                <div className="bg-cyan-500 h-full w-2/3 animate-pulse" />
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 border border-cyan-500/50 text-cyan-500 text-xs hover:bg-cyan-950 uppercase tracking-wider transition-colors"
                >
                  Abort
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-cyan-500 text-black font-bold text-xs hover:bg-cyan-400 uppercase tracking-wider transition-colors"
                >
                  Confirm
                </button>
              </div>
            </div>
          </ModalCyber>

          {/* Red Modal */}
          <ModalCyber
            isOpen={isOpenRed}
            onClose={() => setIsOpenRed(false)}
            title="Breach Detected"
            accentColor="#ef4444"
          >
            <div className="space-y-4 font-mono text-sm">
              <p className="text-red-100/80">
                Unauthorized access attempt blocked from sector 7G. Security protocols engaged.
              </p>
              <div className="p-2 border border-red-500/30 bg-red-500/5 text-red-500 text-xs text-center animate-pulse">
                LOCKDOWN ACTIVE
              </div>
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setIsOpenRed(false)}
                  className="px-6 py-2 bg-red-600 text-white font-bold text-xs hover:bg-red-500 uppercase tracking-wider w-full"
                >
                  Acknowledge
                </button>
              </div>
            </div>
          </ModalCyber>
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="modal-cyber"
        dependencies={["lucide-react"]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          {
            name: "accentColor",
            type: "string",
            default: '"#06b6d4"',
            description: "Hex color for borders and glow",
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
