"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuLabel,
} from "@/zeroui/components/dropdowns/context-menu";
import {
  File,
  Folder,
  Trash,
  Copy,
  Edit,
  Share,
  Image as ImageIcon,
  Download,
  ExternalLink
} from "lucide-react";

const dropdownComponents = [
  { id: "dropdown-basic", name: "Dropdown Basic", href: "/components/dropdowns" },
  { id: "dropdown-rich", name: "Dropdown Rich", href: "/components/dropdowns/rich" },
  { id: "dropdown-search", name: "Dropdown Search", href: "/components/dropdowns/searchable" },
  { id: "dropdown-hover", name: "Dropdown Hover", href: "/components/dropdowns/hover" },
  { id: "cascading-menu", name: "Cascading Menu", href: "/components/dropdowns/cascading" },
  { id: "context-menu", name: "Dropdown Context Menu", href: "/components/dropdowns/context-menu" },
];

export default function ContextMenuPage() {
  const exampleCode = `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuLabel
} from "@/zeroui/components/dropdowns/context-menu";
import { File, Copy, Trash, Folder, Share } from "lucide-react";

export function ContextMenuDemo() {
  return (
    <ContextMenu
      content={
        <ContextMenuContent width="w-64">
          <ContextMenuLabel>File Actions</ContextMenuLabel>
          <ContextMenuItem icon={<File className="h-4 w-4" />} shortcut="⌘O">
            Open
          </ContextMenuItem>
          <ContextMenuItem icon={<Copy className="h-4 w-4" />} shortcut="⌘C">
            Copy Path
          </ContextMenuItem>
          <ContextMenuItem icon={<Share className="h-4 w-4" />}>
            Share via...
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem 
            variant="destructive" 
            icon={<Trash className="h-4 w-4" />} 
            shortcut="⌫"
          >
            Delete
          </ContextMenuItem>
        </ContextMenuContent>
      }
    >
      <div className="flex h-[150px] w-[300px] items-center justify-center rounded-xl border-2 border-dashed border-zinc-300 bg-zinc-50 text-sm font-medium text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-400">
        Right-click here
      </div>
    </ContextMenu>
  );
}`;

  return (
    <ComponentPageLayout
      componentName="Dropdown Context Menu"
      description="A menu that appears at the cursor location when you right-click a trigger area."
      componentItems={dropdownComponents}
      activeComponentId="context-menu"
    >
      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
            Basic Usage
          </h2>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            Wrap any component with <code>ContextMenu</code> and pass the menu structure to the <code>content</code> prop. The menu triggers on right-click (<code>contextmenu</code> event).
          </p>
          <ComponentPreview code={exampleCode}>
            <div className="flex justify-center p-8 bg-zinc-50/50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-sm">
              <ContextMenu
                content={
                  <ContextMenuContent width="w-64">
                    <ContextMenuLabel>Image Actions</ContextMenuLabel>
                    <ContextMenuItem icon={<ExternalLink className="h-4 w-4" />}>
                      Open in New Tab
                    </ContextMenuItem>
                    <ContextMenuItem icon={<Download className="h-4 w-4" />} shortcut="⌘S">
                      Save Image As...
                    </ContextMenuItem>
                    <ContextMenuItem icon={<Copy className="h-4 w-4" />} shortcut="⌘C">
                      Copy Image
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem icon={<ImageIcon className="h-4 w-4" />}>
                      Search with Lens
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem variant="destructive" icon={<Trash className="h-4 w-4" />}>
                      Remove from Library
                    </ContextMenuItem>
                  </ContextMenuContent>
                }
              >
                <div className="group relative aspect-video w-64 overflow-hidden rounded-lg border border-zinc-200 shadow-sm transition-all hover:shadow-md dark:border-zinc-800">
                  <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 text-zinc-400 dark:bg-zinc-800">
                    <ImageIcon className="h-10 w-10 opacity-20" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5 dark:group-hover:bg-white/5" />
                  <div className="absolute inset-x-0 bottom-0 bg-white/90 p-2 text-xs font-medium text-zinc-600 backdrop-blur-sm dark:bg-black/80 dark:text-zinc-300">
                    Right-click this card
                  </div>
                </div>
              </ContextMenu>
            </div>
          </ComponentPreview>
        </section>

        <section>
          <InstallationTabs
            componentName="context-menu"
            dependencies={["clsx", "tailwind-merge", "lucide-react"]}
            manualSteps={[
              {
                title: "Copy the component code",
                description: "Create a new file and paste the following code:",
                filename: "components/dropdowns/context-menu.tsx",
                code: `"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";

// ... (Use the full component code here)
`
              }
            ]}
          />
        </section>

        <section>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
            Props
          </h3>
          <PropsTable
            props={[
              {
                name: "content",
                type: "ReactNode",
                default: "-",
                description: "The content of the context menu (usually ContextMenuContent).",
              },
              {
                name: "children",
                type: "ReactNode",
                default: "-",
                description: "The trigger area that listens for the right-click event.",
              },
            ]}
          />
        </section>
      </div>
    </ComponentPageLayout>
  );
}
