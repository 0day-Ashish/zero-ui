"use client";

import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { useState, useRef, useEffect } from "react";

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
    filename: "components/featured/otp-input.tsx",
    code: `"use client";

import React, { useState, useRef } from "react";

interface OTPInputProps {
  length?: number;
  onComplete?: (otp: string) => void;
  title?: string;
  subtitle?: string;
}

export default function OTPInput({
  length = 5,
  onComplete,
  title = "Enter the code",
  subtitle = "We sent you a code to your email, please enter to verify your address.",
}: OTPInputProps) {
  // Component implementation...
}`,
  },
];

// Animated Number Vortex Component
function NumberVortex() {
  return (
    <div className="relative w-48 h-48 mx-auto mb-8">
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full border border-zinc-700" />

      {/* Inner glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-white blur-sm" />
        <div className="absolute w-2 h-2 rounded-full bg-white" />
      </div>

      {/* Animated numbers */}
      <div className="absolute inset-0 animate-spin" style={{ animationDuration: "20s" }}>
        {Array.from({ length: 40 }).map((_, i) => {
          const angle = (i / 40) * 360;
          const radius = 30 + (i % 5) * 15;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          const opacity = 0.2 + (i % 5) * 0.15;
          const size = 8 + (i % 3) * 2;

          return (
            <span
              key={i}
              className="absolute text-zinc-500 font-mono"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
                opacity,
                fontSize: `${size}px`,
              }}
            >
              {Math.floor(Math.random() * 10)}
            </span>
          );
        })}
      </div>

      {/* Second layer rotating opposite */}
      <div className="absolute inset-0 animate-spin" style={{ animationDuration: "30s", animationDirection: "reverse" }}>
        {Array.from({ length: 30 }).map((_, i) => {
          const angle = (i / 30) * 360 + 15;
          const radius = 50 + (i % 4) * 12;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          const opacity = 0.15 + (i % 4) * 0.1;
          const size = 6 + (i % 3) * 2;

          return (
            <span
              key={i}
              className="absolute text-zinc-600 font-mono"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
                opacity,
                fontSize: `${size}px`,
              }}
            >
              {Math.floor(Math.random() * 10)}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function OTPInput({
  length = 5,
  title = "Enter the code",
  subtitle = "We sent you a code to your email, please enter to verify your address.",
  showVortex = true,
  initialValue = "",
}: {
  length?: number;
  title?: string;
  subtitle?: string;
  showVortex?: boolean;
  initialValue?: string;
}) {
  const [otp, setOtp] = useState<string[]>(
    initialValue ? initialValue.split("").slice(0, length) : new Array(length).fill("")
  );
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, length);
    const newOtp = [...otp];

    for (let i = 0; i < pastedData.length; i++) {
      if (!isNaN(Number(pastedData[i]))) {
        newOtp[i] = pastedData[i];
      }
    }

    setOtp(newOtp);
  };

  return (
    <div className="w-[320px] bg-black rounded-3xl p-8 text-center">
      {/* Animated Vortex */}
      {showVortex && <NumberVortex />}

      {/* Title */}
      <h2 className="text-2xl font-semibold text-white mb-3">{title}</h2>

      {/* Subtitle */}
      <p className="text-zinc-500 text-sm mb-8 leading-relaxed">{subtitle}</p>

      {/* OTP Inputs */}
      <div className="flex justify-center gap-3 mb-8">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => { inputRefs.current[index] = el; }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            className="w-12 h-14 text-center text-xl font-medium text-white
              bg-transparent border border-zinc-700 rounded-lg
              focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500
              transition-all"
          />
        ))}
      </div>

      {/* Help Link */}
      <p className="text-zinc-500 text-sm">
        Need Help?{" "}
        <a href="#" className="text-white underline hover:text-zinc-300 transition-colors">
          Contact us
        </a>
      </p>
    </div>
  );
}

function OTPInputSimple({
  length = 6,
}: {
  length?: number;
}) {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex gap-2">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => { inputRefs.current[index] = el; }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className="w-12 h-14 text-center text-xl font-semibold
            bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white
            border-2 border-transparent rounded-xl
            focus:outline-none focus:border-violet-500
            transition-all"
        />
      ))}
    </div>
  );
}

export default function OTPInputPage() {
  return (
    <ComponentPageLayout
      componentName="OTP Input"
      description="Elegant one-time password input with animated vortex effect and auto-focus."
      componentItems={featuredComponents}
      activeComponentId="otp-input"
      prevComponent={{ name: "Github Calendar", href: "/featured/github-calendar" }}
      nextComponent={{ name: "Priority Cards", href: "/featured/priority-cards" }}
    >
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">With Animated Vortex</h3>
      <ComponentPreview
        code={`<OTPInput
  length={5}
  title="Enter the code"
  subtitle="We sent you a code to your email..."
  showVortex={true}
  initialValue="1446"
/>`}
      >
        <div
          className="flex items-center justify-center p-8 rounded-xl bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <OTPInput
            length={5}
            title="Enter the code"
            subtitle="We sent you a code to your email, please enter to verify your address."
            showVortex={true}
            initialValue="1446"
          />
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Simple Style</h3>
      <ComponentPreview
        code={`<OTPInputSimple length={6} />`}
      >
        <div
          className="flex items-center justify-center p-8 rounded-xl bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <OTPInputSimple length={6} />
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">4-Digit Code</h3>
      <ComponentPreview
        code={`<OTPInputSimple length={4} />`}
      >
        <div
          className="flex items-center justify-center p-8 rounded-xl bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <OTPInputSimple length={4} />
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="otp-input"
        dependencies={[]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          { name: "length", type: "number", default: "5" },
          { name: "title", type: "string", default: '"Enter the code"' },
          { name: "subtitle", type: "string", default: '"We sent you a code..."' },
          { name: "showVortex", type: "boolean", default: "true" },
          { name: "onComplete", type: "(otp: string) => void", default: "undefined" },
        ]}
      />
    </ComponentPageLayout>
  );
}
