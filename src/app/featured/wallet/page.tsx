"use client";

import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { Plus, Apple } from "lucide-react";

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
    filename: "components/featured/wallet-card.tsx",
    code: `"use client";

import React from "react";
import { Plus } from "lucide-react";

interface WalletCardProps {
  balance: string;
  cards?: { name: string; color: string; textColor?: string }[];
}

export default function WalletCard({
  balance = "$220,784",
  cards = [],
}: WalletCardProps) {
  // Component implementation...
}`,
  },
];

// Apple Logo SVG
function AppleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );
}

// Chart Icon
function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </svg>
  );
}

// Wallet Info Card
function WalletInfoCard() {
  return (
    <div className="w-[280px] bg-white rounded-3xl p-6 shadow-lg">
      <p className="text-2xl font-medium text-zinc-900 leading-snug">
        Manage your{" "}
        <span className="inline-flex items-center align-middle">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-400 to-red-500 flex items-center justify-center mx-1">
            <ChartIcon className="w-4 h-4 text-white" />
          </span>
        </span>{" "}
        cards effortlessly with Apple Wallet. Track spending trends with detailed{" "}
        <span className="inline-flex items-center align-middle">
          <span className="text-2xl mx-1">📊</span>
        </span>{" "}
        charts.
      </p>

      <button className="mt-6 w-full py-3 px-6 bg-zinc-900 text-white rounded-full font-medium flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors">
        <Plus size={18} />
        Add Card
      </button>
    </div>
  );
}

// Main Wallet Card with stacked cards
function WalletCard({
  balance = "$220,784",
}: {
  balance?: string;
}) {
  return (
    <div className="w-[320px]">
      {/* Wallet Container */}
      <div className="relative bg-[#1c1c1e] rounded-3xl overflow-hidden">
        {/* Cards Section with pocket effect */}
        <div className="relative h-40">
          {/* Stacked Cards - Full width, different sizes */}
          <div className="absolute inset-x-0 top-0 pt-4 px-0">
            {/* Wise Card - Top, slightly smaller */}
            <div className="mx-4 h-30 w-73 bg-[#9fe870] rounded-xl flex items-start justify-start py-2 px-5 shadow-lg">
              <span className="text-zinc-800 font-bold text-lg">
                <span className="font-normal text-sm mr-1">₮</span>WISE
              </span>
            </div>

            {/* Monzo Card - Below, full width */}
            <div className="absolute top-15 w-75 py-2 mx-3 -mt-2 h-30 bg-[#2a2a2a] rounded-xl flex items-start justify-start px-5 shadow-lg border border-zinc-700">
              <span className="text-white font-bold text-lg tracking-wide">monzo</span>
            </div>
          </div>

          {/* Front pocket panel - full width, creates the 3D pop effect */}
          <div className="absolute bottom-0 inset-x-0 h-12 bg-[#1c1c1e] rounded-t-3xl z-20 shadow-[0_-8px_20px_rgba(0,0,0,0.5)]" />
        </div>

        {/* Apple Cash Section - In front of overlay (z-30) */}
        <div className="relative z-30 bg-[#1c1c1e] px-6 pb-6">
          {/* Apple Cash Label */}
          <div className="flex items-center gap-1.5 mb-2">
            <AppleLogo className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">Cash</span>
          </div>

          {/* Balance */}
          <h2 className="text-4xl font-semibold text-white tracking-tight mb-1">
            {balance}
          </h2>

          {/* Total Balance Label */}
          <p className="text-zinc-500 text-sm">Total Balance</p>
        </div>
      </div>
    </div>
  );
}

// Alternative Wallet with more cards
function WalletCardExpanded({
  balance = "$45,230",
}: {
  balance?: string;
}) {
  return (
    <div className="w-[320px]">
      {/* Wallet Container */}
      <div className="relative bg-[#1c1c1e] rounded-3xl overflow-hidden">
        {/* Cards Section with pocket effect */}
        <div className="relative h-40">
          {/* Stacked Cards - Full width, different sizes */}
          <div className="absolute inset-x-0 top-0 pt-4 px-0">
            {/* Wise Card - Top, slightly smaller */}
            <div className="mx-4 h-30 w-73 bg-[#9fe870] rounded-xl flex items-start justify-start py-2 px-5 shadow-lg">
              <span className="text-zinc-800 font-bold text-lg">
                <span className="font-normal text-sm mr-1">₮</span>WISE
              </span>
            </div>

            {/* Monzo Card - Below, full width */}
            <div className="absolute top-15 w-75 py-2 mx-3 -mt-2 h-30 bg-[#2a2a2a] rounded-xl flex items-start justify-start px-5 shadow-lg border border-zinc-700">
              <span className="text-white font-bold text-lg tracking-wide">monzo</span>
            </div>
              <div className="absolute top-25 w-75 py-2 mx-3 -mt-2 h-30 bg-[#0346ff] rounded-xl flex items-start justify-start px-5 shadow-lg border border-zinc-700">
              <span className="text-white font-bold text-lg tracking-wide">monzo</span>
            </div>
          </div>

          {/* Front pocket panel - full width, creates the 3D pop effect */}
          <div className="absolute bottom-0 inset-x-0 h-12 bg-[#1c1c1e] rounded-t-3xl z-20 shadow-[0_-8px_20px_rgba(0,0,0,0.5)]" />
        </div>

        {/* Apple Cash Section - In front of overlay (z-30) */}
        <div className="relative z-30 bg-[#1c1c1e] px-6 pb-6">
          {/* Apple Cash Label */}
          <div className="flex items-center gap-1.5 mb-2">
            <AppleLogo className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">Cash</span>
          </div>

          {/* Balance */}
          <h2 className="text-4xl font-semibold text-white tracking-tight mb-1">
            {balance}
          </h2>

          {/* Total Balance Label */}
          <p className="text-zinc-500 text-sm">Total Balance</p>
        </div>
      </div>
    </div>
  );
}

export default function WalletPage() {
  return (
    <ComponentPageLayout
      componentName="Wallet"
      description="Apple Wallet-inspired card holder with stacked cards and balance display."
      componentItems={featuredComponents}
      activeComponentId="wallet"
      prevComponent={{ name: "Calendar", href: "/featured/calendar" }}
      nextComponent={{ name: "AI Input", href: "/featured/ai-input" }}
    >
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Wallet with Info Card</h3>
      <ComponentPreview
        code={`<WalletInfoCard />
<WalletCard balance="$220,784" />`}
      >
        <div
          className="flex flex-wrap gap-6 items-center justify-center p-8 rounded-xl bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <WalletInfoCard />
          <WalletCard balance="$220,784" />
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Wallet Card Only</h3>
      <ComponentPreview
        code={`<WalletCard balance="$220,784" />`}
      >
        <div
          className="flex items-center justify-center p-8 rounded-xl bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <WalletCard balance="$220,784" />
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Expanded with Multiple Cards</h3>
      <ComponentPreview
        code={`<WalletCardExpanded balance="$45,230" />`}
      >
        <div
          className="flex items-center justify-center p-8 rounded-xl bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <WalletCardExpanded balance="$45,230" />
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Side by Side</h3>
      <ComponentPreview
        code={`<WalletCard balance="$12,500" />
<WalletCardExpanded balance="$85,000" />`}
      >
        <div
          className="flex flex-wrap gap-6 items-start justify-center p-8 rounded-xl bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <WalletCard balance="$12,500" />
          <WalletCardExpanded balance="$85,000" />
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="wallet-card"
        dependencies={["lucide-react"]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          { name: "balance", type: "string", default: '"$220,784"' },
          { name: "cards", type: "Card[]", default: "[Wise, Monzo]" },
          { name: "showAppleCash", type: "boolean", default: "true" },
        ]}
      />
    </ComponentPageLayout>
  );
}
