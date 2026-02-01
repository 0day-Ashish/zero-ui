"use client";

import { useState, useRef, useEffect } from "react";
import { Check, Copy, Terminal } from "lucide-react";

type PackageManager = "pnpm" | "npm" | "yarn" | "bun";
type InstallMethod = "command" | "manual";

interface ManualStep {
  title: string;
  description?: string;
  code: string;
  filename?: string;
}

interface InstallationTabsProps {
  componentName: string;
  dependencies?: string[];
  manualSteps?: ManualStep[];
}

const packageManagerCommands: Record<PackageManager, string> = {
  pnpm: "pnpm dlx",
  npm: "npx",
  yarn: "yarn dlx",
  bun: "bunx",
};

// Package manager tabs with sliding indicator
function PackageManagerTabs({
  activePackageManager,
  setActivePackageManager,
  packageManagers,
}: {
  activePackageManager: PackageManager;
  setActivePackageManager: (pm: PackageManager) => void;
  packageManagers: PackageManager[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeIndex = packageManagers.indexOf(activePackageManager);
    const buttons = container.querySelectorAll("button");
    const activeButton = buttons[activeIndex] as HTMLButtonElement;

    if (activeButton) {
      setIndicatorStyle({
        left: activeButton.offsetLeft,
        width: activeButton.offsetWidth,
      });
    }
  }, [activePackageManager, packageManagers]);

  return (
    <div ref={containerRef} className="relative flex items-center">
      {/* Sliding indicator with outside curves */}
      <div
        className="absolute bg-white dark:bg-zinc-950 rounded-t-lg transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          left: indicatorStyle.left,
          width: indicatorStyle.width,
          bottom: "-1px",
          top: 0,
        }}
      >
        {/* Left outside curve - light mode */}
        <span
          className="absolute -left-2 bottom-0 w-2 h-2 dark:hidden"
          style={{
            background: "radial-gradient(circle at 0 0, transparent 8px, #ffffff 8px)",
          }}
        />
        {/* Left outside curve - dark mode */}
        <span
          className="absolute -left-2 bottom-0 w-2 h-2 hidden dark:block"
          style={{
            background: "radial-gradient(circle at 0 0, transparent 8px, #09090b 8px)",
          }}
        />
        {/* Right outside curve - light mode */}
        <span
          className="absolute -right-2 bottom-0 w-2 h-2 dark:hidden"
          style={{
            background: "radial-gradient(circle at 100% 0, transparent 8px, #ffffff 8px)",
          }}
        />
        {/* Right outside curve - dark mode */}
        <span
          className="absolute -right-2 bottom-0 w-2 h-2 hidden dark:block"
          style={{
            background: "radial-gradient(circle at 100% 0, transparent 8px, #09090b 8px)",
          }}
        />
      </div>

      {/* Tab buttons */}
      {packageManagers.map((pm) => (
        <button
          key={pm}
          onClick={() => setActivePackageManager(pm)}
          className={`relative z-10 px-4 py-2.5 text-xs font-medium transition-colors duration-200 ${
            activePackageManager === pm
              ? "text-zinc-900 dark:text-white"
              : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
          }`}
        >
          {pm}
        </button>
      ))}
    </div>
  );
}

export default function InstallationTabs({
  componentName,
  dependencies = [],
  manualSteps = [],
}: InstallationTabsProps) {
  const [activeMethod, setActiveMethod] = useState<InstallMethod>("command");
  const [activePackageManager, setActivePackageManager] = useState<PackageManager>("npm");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const methodTabsRef = useRef<HTMLDivElement>(null);
  const [methodIndicatorStyle, setMethodIndicatorStyle] = useState({ left: 4, width: 0 });

  useEffect(() => {
    const container = methodTabsRef.current;
    if (!container) return;

    const buttons = container.querySelectorAll("button");
    const activeIndex = activeMethod === "command" ? 0 : 1;
    const activeButton = buttons[activeIndex] as HTMLButtonElement;

    if (activeButton) {
      setMethodIndicatorStyle({
        left: activeButton.offsetLeft,
        width: activeButton.offsetWidth,
      });
    }
  }, [activeMethod]);

  const handleCopy = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const cliCommand = `${packageManagerCommands[activePackageManager]} zeroui@latest add ${componentName.toLowerCase()}`;

  const packageManagers: PackageManager[] = ["pnpm", "npm", "yarn", "bun"];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-6">Installation</h2>

      {/* Method Tabs with sliding indicator */}
      <div ref={methodTabsRef} className="relative inline-flex p-1 bg-zinc-100 dark:bg-zinc-900 rounded-lg mb-6">
        {/* Sliding background */}
        <div
          className="absolute top-1 bottom-1 bg-white dark:bg-zinc-800 rounded-md transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-sm"
          style={{
            left: methodIndicatorStyle.left,
            width: methodIndicatorStyle.width,
          }}
        />
        <button
          onClick={() => setActiveMethod("command")}
          className={`relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-200 ${
            activeMethod === "command" ? "text-zinc-900 dark:text-white" : "text-zinc-500 hover:text-zinc-700 dark:hover:text-white"
          }`}
        >
          Command
        </button>
        <button
          onClick={() => setActiveMethod("manual")}
          className={`relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-200 ${
            activeMethod === "manual" ? "text-zinc-900 dark:text-white" : "text-zinc-500 hover:text-zinc-700 dark:hover:text-white"
          }`}
        >
          Manual
        </button>
      </div>

      {/* Command Installation */}
      <div
        className={`transition-all duration-300 ease-out ${
          activeMethod === "command"
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 hidden"
        }`}
      >
        <div className="rounded-lg overflow-visible border border-zinc-200 dark:border-zinc-800">
          {/* Package Manager Tabs */}
          <div className="flex items-center justify-between bg-zinc-100 dark:bg-zinc-900 rounded-t-lg pt-2 pl-2 pr-2">
            <PackageManagerTabs
              activePackageManager={activePackageManager}
              setActivePackageManager={setActivePackageManager}
              packageManagers={packageManagers}
            />
            <button
              onClick={() => handleCopy(cliCommand, 0)}
              className={`p-2 rounded-md transition-all duration-300 ease-out ${
                copiedIndex === 0
                  ? "bg-green-500/10 text-green-500"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800"
              }`}
            >
              {copiedIndex === 0 ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Command */}
          <div className="p-4 bg-white dark:bg-zinc-950 flex items-center gap-3 rounded-b-lg">
            <Terminal className="w-4 h-4 text-zinc-400 dark:text-zinc-500 shrink-0" />
            <code className="text-sm font-mono text-zinc-700 dark:text-zinc-300 transition-all duration-300">
              {cliCommand}
            </code>
          </div>
        </div>
      </div>

      {/* Manual Installation */}
      <div
        className={`transition-all duration-300 ease-out ${
          activeMethod === "manual"
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 hidden"
        }`}
      >
        <div className="space-y-6">
          {/* Dependencies */}
          {dependencies.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-zinc-900 dark:text-white mb-3">
                Install dependencies
              </h3>
              <div className="rounded-lg overflow-visible border border-zinc-200 dark:border-zinc-800">
                {/* Package Manager Tabs */}
                <div className="flex items-center bg-zinc-100 dark:bg-zinc-900 rounded-t-lg pt-2 pl-2 pr-2">
                  <PackageManagerTabs
                    activePackageManager={activePackageManager}
                    setActivePackageManager={setActivePackageManager}
                    packageManagers={packageManagers}
                  />
                </div>
                <div className="p-4 bg-white dark:bg-zinc-950 rounded-b-lg">
                  <code className="text-sm font-mono text-zinc-700 dark:text-zinc-300">
                    {activePackageManager === "npm" && `npm install ${dependencies.join(" ")}`}
                    {activePackageManager === "pnpm" && `pnpm add ${dependencies.join(" ")}`}
                    {activePackageManager === "yarn" && `yarn add ${dependencies.join(" ")}`}
                    {activePackageManager === "bun" && `bun add ${dependencies.join(" ")}`}
                  </code>
                </div>
              </div>
            </div>
          )}

          {/* Manual Steps */}
          {manualSteps.map((step, index) => (
            <div key={index}>
              <h3 className="text-sm font-medium text-zinc-900 dark:text-white mb-3">
                {step.title}
              </h3>
              {step.description && (
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">{step.description}</p>
              )}
              <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden">
                {step.filename && (
                  <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                      {step.filename}
                    </span>
                    <button
                      onClick={() => handleCopy(step.code, index + 10)}
                      className={`p-1.5 rounded-md transition-all duration-300 ease-out ${
                        copiedIndex === index + 10
                          ? "bg-green-500/10 text-green-500"
                          : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800"
                      }`}
                    >
                      {copiedIndex === index + 10 ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                )}
                <div className="p-4 bg-zinc-50 dark:bg-zinc-950 overflow-x-auto">
                  <pre className="text-sm font-mono text-zinc-700 dark:text-zinc-300 whitespace-pre">
                    {step.code}
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
