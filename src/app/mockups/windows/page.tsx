"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  PropsTable,
} from "@/components/component-page";
import { BrowserMockup, WindowMockup, TerminalMockup } from "@/zeroui/components/mockups";

const mockupComponents = [
  { id: "iphone", name: "iPhone", href: "/mockups/iphone" },
  { id: "ipad", name: "iPad", href: "/mockups/ipad" },
  { id: "macbook", name: "MacBook", href: "/mockups/macbook" },
  { id: "imac", name: "iMac", href: "/mockups/imac" },
  { id: "apple-watch", name: "Apple Watch", href: "/mockups/apple-watch" },
  { id: "windows", name: "Windows", href: "/mockups/windows" },
];

const browserPreviewCode = `import { BrowserMockup } from "@/zeroui/components/mockups";

export default function Example() {
  return (
    <BrowserMockup style="chrome" url="https://zeroui.dev">
      <div className="w-full h-64 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
        <span className="text-white text-xl font-bold">Your Website</span>
      </div>
    </BrowserMockup>
  );
}`;

const windowPreviewCode = `import { WindowMockup } from "@/zeroui/components/mockups";

export default function Example() {
  return (
    <WindowMockup style="macos" title="My App">
      <div className="w-full h-48 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
        <span className="text-zinc-600 dark:text-zinc-300">App Content</span>
      </div>
    </WindowMockup>
  );
}`;

const terminalPreviewCode = `import { TerminalMockup } from "@/zeroui/components/mockups";

export default function Example() {
  return (
    <TerminalMockup style="macos" color="dark" title="Terminal">
      <div>
        <span className="text-green-500">$</span> npm install zeroui
      </div>
    </TerminalMockup>
  );
}`;

export default function WindowMockupsPage() {
  return (
    <ComponentPageLayout
      componentName="Window Mockups"
      description="CSS-only browser, desktop, and terminal window frames for showcasing apps, websites, and code."
      componentItems={mockupComponents}
      activeComponentId="windows"
      prevComponent={{ name: "Apple Watch", href: "/mockups/apple-watch" }}
    >
      {/* Browser Mockup */}
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Browser Window</h2>
      <ComponentPreview code={browserPreviewCode}>
        <div className="flex items-center justify-center p-6">
          <BrowserMockup style="chrome" url="https://zeroui.dev" scale={0.8}>
            <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <span className="text-white text-xl font-bold">Your Website</span>
            </div>
          </BrowserMockup>
        </div>
      </ComponentPreview>

      {/* Browser Styles */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4 mt-8">Browser Styles</h3>
      <ComponentPreview
        code={`<BrowserMockup style="chrome" />
<BrowserMockup style="safari" />
<BrowserMockup style="arc" />
<BrowserMockup style="firefox" />`}
      >
        <div className="flex flex-row flex-wrap justify-center gap-6 p-6">
          <div className="flex flex-col items-center gap-2">
            <BrowserMockup style="chrome" url="chrome://newtab" scale={0.4}>
              <div className="w-full h-32 bg-white dark:bg-zinc-800 flex items-center justify-center">
                <span className="text-zinc-400 text-xs">Chrome</span>
              </div>
            </BrowserMockup>
            <span className="text-xs text-zinc-500">Chrome</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <BrowserMockup style="safari" url="https://apple.com" scale={0.4}>
              <div className="w-full h-32 bg-white dark:bg-zinc-800 flex items-center justify-center">
                <span className="text-zinc-400 text-xs">Safari</span>
              </div>
            </BrowserMockup>
            <span className="text-xs text-zinc-500">Safari</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <BrowserMockup style="arc" url="https://arc.net" scale={0.4}>
              <div className="w-full h-32 bg-white dark:bg-zinc-800 flex items-center justify-center">
                <span className="text-zinc-400 text-xs">Arc</span>
              </div>
            </BrowserMockup>
            <span className="text-xs text-zinc-500">Arc</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <BrowserMockup style="firefox" url="about:newtab" scale={0.4}>
              <div className="w-full h-32 bg-white dark:bg-zinc-800 flex items-center justify-center">
                <span className="text-zinc-400 text-xs">Firefox</span>
              </div>
            </BrowserMockup>
            <span className="text-xs text-zinc-500">Firefox</span>
          </div>
        </div>
      </ComponentPreview>

      {/* Browser Props */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4 mt-8">Browser Props</h3>
      <PropsTable
        props={[
          { name: "children", type: "ReactNode", default: "-" },
          { name: "style", type: '"chrome" | "safari" | "arc" | "firefox"', default: '"chrome"' },
          { name: "url", type: "string", default: '"https://example.com"' },
          { name: "scale", type: "number", default: "1" },
          { name: "className", type: "string", default: '""' },
          { name: "contentClassName", type: "string", default: '""' },
          { name: "showControls", type: "boolean", default: "true" },
        ]}
      />

      {/* Desktop Window Mockup */}
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4 mt-12">Desktop Window</h2>
      <ComponentPreview code={windowPreviewCode}>
        <div className="flex items-center justify-center p-6">
          <WindowMockup style="macos" title="My App" scale={0.8}>
            <div className="w-full h-48 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
              <span className="text-zinc-600 dark:text-zinc-300">App Content</span>
            </div>
          </WindowMockup>
        </div>
      </ComponentPreview>

      {/* Window Styles */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4 mt-8">Window Styles</h3>
      <ComponentPreview
        code={`<WindowMockup style="macos" />
<WindowMockup style="windows" />
<WindowMockup style="linux" />`}
      >
        <div className="flex flex-row flex-wrap justify-center gap-6 p-6">
          <div className="flex flex-col items-center gap-2">
            <WindowMockup style="macos" title="Finder" scale={0.45}>
              <div className="w-full h-32 bg-white dark:bg-zinc-800 flex items-center justify-center">
                <span className="text-zinc-400 text-xs">macOS</span>
              </div>
            </WindowMockup>
            <span className="text-xs text-zinc-500">macOS</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <WindowMockup style="windows" title="Explorer" scale={0.45}>
              <div className="w-full h-32 bg-white dark:bg-zinc-800 flex items-center justify-center">
                <span className="text-zinc-400 text-xs">Windows</span>
              </div>
            </WindowMockup>
            <span className="text-xs text-zinc-500">Windows</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <WindowMockup style="linux" title="Files" scale={0.45}>
              <div className="w-full h-32 bg-white dark:bg-zinc-800 flex items-center justify-center">
                <span className="text-zinc-400 text-xs">Linux</span>
              </div>
            </WindowMockup>
            <span className="text-xs text-zinc-500">Linux (GNOME)</span>
          </div>
        </div>
      </ComponentPreview>

      {/* Window Props */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4 mt-8">Window Props</h3>
      <PropsTable
        props={[
          { name: "children", type: "ReactNode", default: "-" },
          { name: "style", type: '"macos" | "windows" | "linux"', default: '"macos"' },
          { name: "title", type: "string", default: '"Untitled"' },
          { name: "scale", type: "number", default: "1" },
          { name: "className", type: "string", default: '""' },
          { name: "contentClassName", type: "string", default: '""' },
          { name: "showControls", type: "boolean", default: "true" },
        ]}
      />

      {/* Terminal Mockup */}
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4 mt-12">Terminal Window</h2>
      <ComponentPreview code={terminalPreviewCode}>
        <div className="flex items-center justify-center p-6">
          <TerminalMockup style="macos" color="dark" title="Terminal" scale={0.8}>
            <div className="space-y-1">
              <div><span className="text-green-500">$</span> npm install zeroui</div>
              <div className="text-zinc-500">added 42 packages in 2.3s</div>
              <div><span className="text-green-500">$</span> <span className="animate-pulse">_</span></div>
            </div>
          </TerminalMockup>
        </div>
      </ComponentPreview>

      {/* Terminal Styles */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4 mt-8">Terminal Styles</h3>
      <ComponentPreview
        code={`<TerminalMockup style="macos" />
<TerminalMockup style="ubuntu" />
<TerminalMockup style="powershell" />
<TerminalMockup style="vscode" />`}
      >
        <div className="flex flex-row flex-wrap justify-center gap-6 p-6">
          <div className="flex flex-col items-center gap-2">
            <TerminalMockup style="macos" title="Terminal" scale={0.45}>
              <div><span className="text-green-500">$</span> echo "Hello"</div>
            </TerminalMockup>
            <span className="text-xs text-zinc-500">macOS Terminal</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <TerminalMockup style="ubuntu" title="Terminal" scale={0.45}>
              <div><span className="text-green-400">user@ubuntu:~$</span> ls -la</div>
            </TerminalMockup>
            <span className="text-xs text-zinc-500">Ubuntu</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <TerminalMockup style="powershell" title="PowerShell" scale={0.45}>
              <div><span className="text-blue-400">PS C:\&gt;</span> Get-Process</div>
            </TerminalMockup>
            <span className="text-xs text-zinc-500">PowerShell</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <TerminalMockup style="vscode" title="Terminal" scale={0.45}>
              <div><span className="text-cyan-400">~</span> npm run dev</div>
            </TerminalMockup>
            <span className="text-xs text-zinc-500">VS Code</span>
          </div>
        </div>
      </ComponentPreview>

      {/* Terminal Color Themes */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4 mt-8">Color Themes</h3>
      <ComponentPreview
        code={`<TerminalMockup color="dark" />
<TerminalMockup color="dracula" />
<TerminalMockup color="monokai" />
<TerminalMockup color="nord" />`}
      >
        <div className="flex flex-row flex-wrap justify-center gap-6 p-6">
          <div className="flex flex-col items-center gap-2">
            <TerminalMockup style="macos" color="dark" title="Dark" scale={0.45}>
              <div><span className="text-green-500">$</span> vim config.js</div>
            </TerminalMockup>
            <span className="text-xs text-zinc-500">Dark</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <TerminalMockup style="macos" color="dracula" title="Dracula" scale={0.45}>
              <div><span className="text-green-400">$</span> vim config.js</div>
            </TerminalMockup>
            <span className="text-xs text-zinc-500">Dracula</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <TerminalMockup style="macos" color="monokai" title="Monokai" scale={0.45}>
              <div><span className="text-green-400">$</span> vim config.js</div>
            </TerminalMockup>
            <span className="text-xs text-zinc-500">Monokai</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <TerminalMockup style="macos" color="nord" title="Nord" scale={0.45}>
              <div><span className="text-green-400">$</span> vim config.js</div>
            </TerminalMockup>
            <span className="text-xs text-zinc-500">Nord</span>
          </div>
        </div>
      </ComponentPreview>

      {/* Terminal Props */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4 mt-8">Terminal Props</h3>
      <PropsTable
        props={[
          { name: "children", type: "ReactNode", default: "-" },
          { name: "style", type: '"macos" | "ubuntu" | "powershell" | "vscode"', default: '"macos"' },
          { name: "color", type: '"dark" | "light" | "dracula" | "monokai" | "nord"', default: '"dark"' },
          { name: "title", type: "string", default: '"Terminal"' },
          { name: "scale", type: "number", default: "1" },
          { name: "className", type: "string", default: '""' },
          { name: "contentClassName", type: "string", default: '""' },
          { name: "showControls", type: "boolean", default: "true" },
        ]}
      />
    </ComponentPageLayout>
  );
}
