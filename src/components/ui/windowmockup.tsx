import { ReactNode } from "react";

interface BrowserMockupProps {
  url?: string;
  children?: ReactNode;
  className?: string;
}

export default function BrowserMockup({
  url = "zeroui.dev",
  children,
  className = "",
}: BrowserMockupProps) {
  return (
    <div
      className={`rounded-2xl overflow-hidden border border-zinc-300 dark:border-zinc-800/50 bg-zinc-100 dark:bg-zinc-900 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] ${className}`}
    >
      {/* Title Bar */}
      <div className="flex items-center gap-3 px-4 py-2.5 bg-zinc-200/80 dark:bg-zinc-900/80 backdrop-blur-sm">
        {/* Traffic Lights */}
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>

        {/* URL Bar */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-2 px-3 py-1 bg-zinc-300/60 dark:bg-zinc-800/60 rounded-md">
            <svg
              className="w-3 h-3 text-zinc-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs text-zinc-600 dark:text-zinc-400">{url}</span>
          </div>
        </div>

        {/* Spacer for symmetry */}
        <div className="w-12" />
      </div>

      {/* Content Area */}
      <div className="bg-zinc-100 dark:bg-zinc-950 m-1.5 rounded-xl overflow-hidden">{children}</div>
    </div>
  );
}

// Safari-style variant
export function SafariMockup({
  url = "zeroui.dev",
  children,
  className = "",
}: BrowserMockupProps) {
  return (
    <div
      className={`rounded-xl overflow-hidden border border-zinc-700/50 bg-zinc-900 shadow-2xl ${className}`}
    >
      {/* Title Bar */}
      <div className="flex items-center px-4 py-2.5 bg-gradient-to-b from-zinc-800 to-zinc-850 border-b border-zinc-700/50">
        {/* Traffic Lights */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-inner" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-inner" />
          <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-inner" />
        </div>

        {/* URL Bar - Centered */}
        <div className="flex-1 flex justify-center px-4">
          <div className="flex items-center justify-center gap-2 px-4 py-1 bg-zinc-900/80 rounded-md border border-zinc-700/50 w-full max-w-lg">
            <svg
              className="w-3 h-3 text-zinc-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs text-zinc-400">{url}</span>
          </div>
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-zinc-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-zinc-950">{children}</div>
    </div>
  );
}

// Minimal variant
export function MinimalBrowserMockup({
  children,
  className = "",
}: Omit<BrowserMockupProps, "url">) {
  return (
    <div
      className={`rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl ${className}`}
    >
      {/* Title Bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900/50 border-b border-zinc-800">
        <div className="w-3 h-2 rounded-full bg-zinc-700" />
        <div className="w-3 h-2 rounded-full bg-zinc-700" />
        <div className="w-3 h-2 rounded-full bg-zinc-700" />
      </div>

      {/* Content Area */}
      <div>{children}</div>
    </div>
  );
}
