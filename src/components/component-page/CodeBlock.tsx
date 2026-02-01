"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({
  code,
  filename,
  showLineNumbers = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  return (
    <div className="mb-8">
      <div className="rounded-md border border-zinc-200 dark:border-zinc-800 overflow-hidden">
        {/* Header */}
        {filename && (
          <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
            <span className="text-sm font-mono text-zinc-500 dark:text-zinc-400">{filename}</span>
            <button
              onClick={handleCopy}
              className={`p-1.5 rounded-md transition-all duration-200 ${
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
          </div>
        )}

        {/* Code Area */}
        <div className="bg-zinc-50 dark:bg-zinc-950 overflow-x-auto relative">
          {!filename && (
            <button
              onClick={handleCopy}
              className={`absolute top-3 right-3 p-1.5 rounded-md transition-all duration-200 ${
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
          )}
          <pre className="p-4 text-sm">
            <code className="font-mono">
              {lines.map((line, index) => (
                <div key={index} className="flex">
                  {showLineNumbers && (
                    <span className="select-none text-zinc-400 dark:text-zinc-600 w-8 shrink-0 text-right pr-4">
                      {index + 1}
                    </span>
                  )}
                  <span className="text-zinc-700 dark:text-zinc-300">{line || " "}</span>
                </div>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
