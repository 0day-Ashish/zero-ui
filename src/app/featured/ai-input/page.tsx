"use client";

import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { Plus, Paperclip, Globe, Mic, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

const featuredComponents = [
  { id: "profile-cards", name: "Profile Cards", href: "/featured/profile-cards" },
  { id: "music-cards", name: "Music Cards", href: "/featured/music-cards" },
  { id: "calendar", name: "Calendar", href: "/featured/calendar" },
  { id: "wallet", name: "Wallet", href: "/featured/wallet" },
  { id: "ai-input", name: "AI Input", href: "/featured/ai-input" },
  { id: "github-calendar", name: "Github Calendar", href: "/featured/github-calendar" },
  { id: "otp-input", name: "OTP Input", href: "/featured/otp-input" },
  { id: "priority-cards", name: "Priority Cards", href: "/featured/priority-cards" },
  { id: "upload-card", name: "Upload Card", href: "/featured/upload-card" },
  { id: "navbars", name: "Navbars", href: "/featured/navbars" },
];

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/featured/ai-input.tsx",
    code: `"use client";

import React, { useState } from "react";
import { Plus, Paperclip, Globe, Mic, ArrowRight } from "lucide-react";

interface AIInputProps {
  placeholder?: string;
  onSubmit?: (value: string) => void;
  variant?: "default" | "minimal";
}

export default function AIInput({
  placeholder = "Ask Lovable to create a prototype",
  onSubmit,
  variant = "default",
}: AIInputProps) {
  const [value, setValue] = useState("");

  // Component implementation...
}`,
  },
];

function AIInput({
  placeholder = "Ask Lovable to create a prototype",
  variant = "default",
}: {
  placeholder?: string;
  variant?: "default" | "minimal";
}) {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="w-full">
      {/* Main Input Container */}
      <div className="relative">
        {/* Gradient Border Bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-2xl"
          style={{
            background: "linear-gradient(90deg, #ec4899, #f97316, #eab308)",
          }}
        />

        {/* Input Area */}
        <div className="bg-[#2a2a2a] rounded-t-xl px-4 py-3">
          {/* Input Field */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-zinc-500 text-lg">|</span>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder={placeholder}
              className="flex-1 bg-transparent text-zinc-300 placeholder:text-zinc-500 outline-none text-sm"
            />
          </div>

          {/* Bottom Actions */}
          <div className="flex items-center justify-between">
            {/* Left Actions */}
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-700/50 text-zinc-400 hover:text-white hover:bg-zinc-600/50 transition-colors">
                <Plus size={18} />
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-700/50 text-zinc-400 hover:text-white hover:bg-zinc-600/50 transition-colors text-sm">
                <Paperclip size={14} />
                Attach
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-700/50 text-zinc-400 hover:text-white hover:bg-zinc-600/50 transition-colors text-sm">
                <Globe size={14} />
                Public
              </button>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center rounded-lg text-zinc-400 hover:text-white transition-colors">
                <Mic size={18} />
              </button>
              <button
                className="w-9 h-9 flex items-center justify-center rounded-xl text-white transition-all"
                style={{
                  background: "linear-gradient(135deg, #f97316, #ea580c)",
                }}
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AIInputMinimal({
  placeholder = "Ask anything...",
}: {
  placeholder?: string;
}) {
  const [value, setValue] = useState("");

  return (
    <div className="w-full">
      <div className="relative group">
        {/* Animated Gradient Border */}
        <div
          className="absolute -inset-[2px] rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity"
          style={{
            background: "linear-gradient(90deg, #ec4899, #f97316, #8b5cf6, #ec4899)",
            backgroundSize: "300% 100%",
            animation: "gradient-x 3s ease infinite",
          }}
        />

        <div className="relative bg-[#1a1a1a] rounded-2xl px-4 py-3 flex items-center gap-3">
          <Sparkles size={18} className="text-violet-400" />
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            className="flex-1 bg-transparent text-zinc-300 placeholder:text-zinc-500 outline-none text-sm"
          />
          <button
            className="w-9 h-9 flex items-center justify-center rounded-xl text-white transition-all"
            style={{
              background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
            }}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}

export default function AIInputPage() {
  return (
    <ComponentPageLayout
      componentName="AI Input"
      description="Modern AI chat input with gradient accents, attachments, and voice support."
      componentItems={featuredComponents}
      activeComponentId="ai-input"
      prevComponent={{ name: "Wallet", href: "/featured/wallet" }}
      nextComponent={{ name: "Github Calendar", href: "/featured/github-calendar" }}
    >
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Default Style</h3>
      <ComponentPreview
        code={`<AIInput placeholder="Ask Lovable to create a prototype" />`}
      >
        <div
          className="flex items-center justify-center px-4 py-8 rounded-xl bg-cover bg-center w-full"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <AIInput placeholder="Ask Lovable to create a prototype" />
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Animated Gradient Border</h3>
      <ComponentPreview
        code={`<AIInputMinimal placeholder="Ask anything..." />`}
      >
        <div
          className="flex items-center justify-center px-4 py-8 rounded-xl bg-cover bg-center w-full"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <AIInputMinimal placeholder="Ask anything..." />
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Different Placeholders</h3>
      <ComponentPreview
        code={`<AIInput placeholder="Describe what you want to build..." />
<AIInput placeholder="What can I help you with?" />`}
      >
        <div
          className="flex flex-col gap-6 items-center justify-center px-4 py-8 rounded-xl bg-cover bg-center w-full"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <AIInput placeholder="Describe what you want to build..." />
          <AIInput placeholder="What can I help you with?" />
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="ai-input"
        dependencies={["lucide-react"]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          { name: "placeholder", type: "string", default: '"Ask Lovable to create a prototype"' },
          { name: "onSubmit", type: "(value: string) => void", default: "undefined" },
          { name: "variant", type: '"default" | "minimal"', default: '"default"' },
        ]}
      />
    </ComponentPageLayout>
  );
}
