"use client";

import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { useMemo } from "react";

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
    filename: "components/featured/github-calendar.tsx",
    code: `"use client";

import React, { useMemo } from "react";

interface GithubCalendarProps {
  contributions?: number;
  year?: number;
  data?: number[][];
}

export default function GithubCalendar({
  contributions = 1124,
  year = 2025,
  data,
}: GithubCalendarProps) {
  // Component implementation...
}`,
  },
];

// Generate random contribution data
function generateContributionData(weeks: number = 20, days: number = 7): number[][] {
  const data: number[][] = [];
  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < days; d++) {
      // Random level 0-4 with some patterns
      const random = Math.random();
      if (random < 0.3) week.push(0);
      else if (random < 0.5) week.push(1);
      else if (random < 0.7) week.push(2);
      else if (random < 0.85) week.push(3);
      else week.push(4);
    }
    data.push(week);
  }
  return data;
}

function GithubCalendar({
  contributions = 1124,
  year = 2025,
  showTopContributions = true,
}: {
  contributions?: number;
  year?: number;
  showTopContributions?: boolean;
}) {
  // Memoize the random data so it doesn't change on re-render
  const contributionData = useMemo(() => generateContributionData(20, 7), []);

  // Color levels for contributions
  const getColor = (level: number) => {
    switch (level) {
      case 0: return "bg-[#1a1f1a]";
      case 1: return "bg-[#0e4429]";
      case 2: return "bg-[#006d32]";
      case 3: return "bg-[#26a641]";
      case 4: return "bg-[#39d353]";
      default: return "bg-[#1a1f1a]";
    }
  };

  return (
    <div className="w-full max-w-xl">
      {/* Main Card */}
      <div className="bg-[#0d1117] rounded-2xl p-6">
        {/* Header */}
        <p className="text-zinc-400 text-sm mb-4">
          <span className="text-emerald-400 font-medium">{contributions}</span> contributions in {year}
        </p>

        {/* Contribution Grid */}
        <div className="flex gap-[3px] overflow-hidden">
          {contributionData.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-[3px]">
              {week.map((level, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`w-[14px] h-[14px] rounded-sm ${getColor(level)} transition-all hover:ring-1 hover:ring-zinc-500`}
                  title={`${level} contributions`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Top Contributions Section */}
      {showTopContributions && (
        <div className="bg-white rounded-2xl mt-3 px-5 py-4 flex items-center justify-between">
          <span className="text-zinc-700 font-medium">Top contributions in:</span>
          <div className="flex items-center gap-2">
            {/* Figma-like icon */}
            <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
                <rect x="4" y="4" width="6" height="6" rx="1" />
                <rect x="14" y="4" width="6" height="6" rx="1" />
                <rect x="4" y="14" width="6" height="6" rx="1" />
                <rect x="14" y="14" width="6" height="6" rx="1" />
              </svg>
            </div>
            {/* Slack-like icon */}
            <div className="w-8 h-8 rounded-lg bg-[#611f69] flex items-center justify-center">
              <div className="grid grid-cols-2 gap-[2px]">
                <div className="w-2 h-2 rounded-full bg-[#e01e5a]" />
                <div className="w-2 h-2 rounded-full bg-[#36c5f0]" />
                <div className="w-2 h-2 rounded-full bg-[#2eb67d]" />
                <div className="w-2 h-2 rounded-full bg-[#ecb22e]" />
              </div>
            </div>
            {/* G icon */}
            <div className="w-8 h-8 rounded-full bg-[#c8ff00] flex items-center justify-center">
              <span className="text-black font-bold text-sm">G</span>
            </div>
            {/* Cursor icon */}
            <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center border border-zinc-200">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 3l14 9-6 2-4 6-4-17z" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function GithubCalendarMinimal({
  contributions = 847,
  year = 2025,
}: {
  contributions?: number;
  year?: number;
}) {
  const contributionData = useMemo(() => generateContributionData(52, 7), []);

  const getColor = (level: number) => {
    switch (level) {
      case 0: return "bg-zinc-800";
      case 1: return "bg-emerald-900";
      case 2: return "bg-emerald-700";
      case 3: return "bg-emerald-500";
      case 4: return "bg-emerald-400";
      default: return "bg-zinc-800";
    }
  };

  return (
    <div className="bg-zinc-900 rounded-xl p-4 overflow-x-auto">
      <p className="text-zinc-400 text-xs mb-3">
        {contributions} contributions in {year}
      </p>
      <div className="flex gap-[2px]">
        {contributionData.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-[2px]">
            {week.map((level, dayIndex) => (
              <div
                key={dayIndex}
                className={`w-[10px] h-[10px] rounded-[2px] ${getColor(level)}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GithubCalendarPage() {
  return (
    <ComponentPageLayout
      componentName="Github Calendar"
      description="GitHub-style contribution graph showing activity over time."
      componentItems={featuredComponents}
      activeComponentId="github-calendar"
      prevComponent={{ name: "AI Input", href: "/featured/ai-input" }}
      nextComponent={{ name: "OTP Input", href: "/featured/otp-input" }}
    >
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">With Top Contributions</h3>
      <ComponentPreview
        code={`<GithubCalendar
  contributions={1124}
  year={2025}
  showTopContributions={true}
/>`}
      >
        <div
          className="flex items-center justify-center p-8 rounded-xl bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <GithubCalendar contributions={1124} year={2025} showTopContributions={true} />
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Calendar Only</h3>
      <ComponentPreview
        code={`<GithubCalendar
  contributions={1124}
  year={2025}
  showTopContributions={false}
/>`}
      >
        <div
          className="flex items-center justify-center p-8 rounded-xl bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <GithubCalendar contributions={1124} year={2025} showTopContributions={false} />
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Full Year View</h3>
      <ComponentPreview
        code={`<GithubCalendarMinimal contributions={847} year={2025} />`}
      >
        <div
          className="flex items-center justify-center p-8 rounded-xl bg-cover bg-center overflow-x-auto"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <GithubCalendarMinimal contributions={847} year={2025} />
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="github-calendar"
        dependencies={[]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          { name: "contributions", type: "number", default: "1124" },
          { name: "year", type: "number", default: "2025" },
          { name: "showTopContributions", type: "boolean", default: "true" },
          { name: "data", type: "number[][]", default: "auto-generated" },
        ]}
      />
    </ComponentPageLayout>
  );
}
