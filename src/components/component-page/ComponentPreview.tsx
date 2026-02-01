"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface ComponentPreviewProps {
  children: React.ReactNode;
  code: string;
  className?: string;
}

export default function ComponentPreview({
  children,
  code,
  className = "",
}: ComponentPreviewProps) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Get first 3 lines of code for preview
  const codePreview = code.split("\n").slice(0, 3).join("\n");

  return (
    <div className={`mb-8 ${className}`}>
      <div className="rounded-md border border-zinc-200 dark:border-zinc-800 overflow-hidden">
        {/* Preview Area */}
        <div className="bg-zinc-100 dark:bg-zinc-900 min-h-[200px] flex items-center justify-center p-8 relative">
          {/* Copy button */}
          <button
            onClick={handleCopy}
            className={`absolute top-4 right-4 p-2 rounded-md transition-all duration-200 ${
              copied
                ? "bg-green-500/10 text-green-500"
                : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800"
            }`}
          >
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>

          {children}
        </div>

        {/* Code Preview / Full Code */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              showCode ? "max-h-[600px]" : "max-h-[120px]"
            }`}
          >
            {showCode ? (
              // Full code view
              <div className="relative">
                <pre className="p-4 overflow-x-auto">
                  <code className="text-sm font-mono text-zinc-700 dark:text-zinc-300">
                    {code.split("\n").map((line, i) => (
                      <div key={i} className="flex">
                        <span className="select-none text-zinc-400 dark:text-zinc-600 w-8 text-right pr-4 shrink-0">
                          {i + 1}
                        </span>
                        <span>{renderCodeLine(line)}</span>
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            ) : (
              // Code preview
              <div className="relative">
                <pre className="p-4 overflow-hidden">
                  <code className="text-sm font-mono text-zinc-600 dark:text-zinc-500">
                    {codePreview.split("\n").map((line, i) => (
                      <div key={i} className="flex">
                        <span className="select-none text-zinc-400 dark:text-zinc-700 w-8 text-right pr-4 shrink-0">
                          {i + 1}
                        </span>
                        <span>{renderCodeLine(line)}</span>
                      </div>
                    ))}
                  </code>
                </pre>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-zinc-50/80 dark:from-zinc-950 dark:via-zinc-950/80 to-transparent pointer-events-none" />
              </div>
            )}
          </div>

          {/* Toggle button */}
          <div className="flex justify-center py-2">
            <button
              onClick={() => setShowCode(!showCode)}
              className="px-4 py-1 rounded-md bg-white  dark:bg-zinc-800 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] text-black dark:text-white text-sm font-medium hover:bg-zinc-300 cursor-pointer dark:hover:bg-zinc-700 transition-all duration-200 border border-zinc-800/20 dark:border-white/20"
            >
              {showCode ? "Collapse" : "View Code"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Simple syntax highlighting
function renderCodeLine(line: string) {
  const keywords = ["import", "export", "default", "function", "return", "const", "from"];

  return (
    <span>
      {line.split(/(\s+)/).map((part, i) => {
        if (keywords.includes(part)) {
          return <span key={i} className="text-purple-400">{part}</span>;
        }
        if (part.startsWith('"') || part.startsWith("'") || part.startsWith("`")) {
          return <span key={i} className="text-green-400">{part}</span>;
        }
        if (part.startsWith("<") || part.startsWith("</") || part === "/>") {
          return <span key={i} className="text-blue-400">{part}</span>;
        }
        if (part.match(/^[A-Z][a-zA-Z]*$/)) {
          return <span key={i} className="text-yellow-400">{part}</span>;
        }
        return <span key={i} className="text-zinc-700 dark:text-zinc-300">{part}</span>;
      })}
    </span>
  );
}
