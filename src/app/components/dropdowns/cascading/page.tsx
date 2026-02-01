"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSeparator,
  DropdownSub,
  DropdownSubTrigger,
  DropdownSubContent
} from "@/zeroui/components/dropdowns";
import { Button } from "@/zeroui/components/buttons";
import { ChevronDown, File, Folder, Users, Settings, Mail, Plus, UserPlus } from "lucide-react";

const dropdownComponents = [
  { id: "dropdown-basic", name: "Dropdown Basic", href: "/components/dropdowns" },
  { id: "dropdown-rich", name: "Dropdown Rich", href: "/components/dropdowns/rich" },
  { id: "dropdown-search", name: "Dropdown Search", href: "/components/dropdowns/searchable" },
  { id: "dropdown-hover", name: "Dropdown Hover", href: "/components/dropdowns/hover" },
  { id: "cascading-menu", name: "Cascading Menu", href: "/components/dropdowns/cascading" },
  { id: "context-menu", name: "Dropdown Context Menu", href: "/components/dropdowns/context-menu" },
];

export default function CascadingMenuPage() {
  const cascadingCode = `import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSub,
  DropdownSubTrigger,
  DropdownSubContent,
  DropdownSeparator
} from "@/zeroui/components/dropdowns";
import { Button } from "@/zeroui/components/buttons";
import { ChevronDown, File, Mail, Plus, Users, UserPlus } from "lucide-react";

export function CascadingMenu() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="outline" className="gap-2">
          File Options <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu width="w-56">
        {/* Submenu */}
        <DropdownSub>
            <DropdownSubTrigger icon={<Users className="h-4 w-4" />}>
                Invite Users
            </DropdownSubTrigger>
            <DropdownSubContent>
                <DropdownItem icon={<Mail className="h-4 w-4" />}>
                    Email
                </DropdownItem>
                <DropdownItem icon={<UserPlus className="h-4 w-4" />}>
                    Connect Contact
                </DropdownItem>
                <DropdownSeparator />
                <DropdownSub>
                    <DropdownSubTrigger icon={<Plus className="h-4 w-4" />}>
                        More Options
                    </DropdownSubTrigger>
                    <DropdownSubContent>
                        <DropdownItem>Import from CSV</DropdownItem>
                        <DropdownItem>Sync with Cloud</DropdownItem>
                    </DropdownSubContent>
                </DropdownSub>
            </DropdownSubContent>
        </DropdownSub>
        <DropdownSeparator />
        
        <DropdownItem icon={<File className="h-4 w-4" />}>New File</DropdownItem>
        <DropdownItem icon={<Folder className="h-4 w-4" />}>Open Folder...</DropdownItem>
        
        <DropdownSeparator />
        <DropdownItem>Properties</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}`;

  return (
    <ComponentPageLayout
      componentName="Cascading Menu"
      description="Organize complex actions into nested levels. Hover over an item to reveal a submenu of related options. Useful for keeping your main menu clean while offering deep functionality."
      componentItems={dropdownComponents}
      activeComponentId="cascading-menu"
    >
      <div className="space-y-12">
        <section>
          <div className="mb-6 p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-lg text-sm text-zinc-600 dark:text-zinc-400">
            <strong>Concept:</strong> A Cascading (or Nested) Menu allows you to tuck away secondary options under a parent item. 
            This is similar to the "Share" or "Open With" menus you see in desktop applications. 
            It keeps the primary menu short and easy to scan.
          </div>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
            Nested Submenus
          </h2>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            Use <code>DropdownSub</code>, <code>DropdownSubTrigger</code>, and <code>DropdownSubContent</code> to create nested levels of navigation. Can be nested recursively.
          </p>
          <ComponentPreview code={cascadingCode}>
            <div className="flex justify-center p-8 bg-zinc-50/50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-sm">
                <Dropdown>
                    <DropdownTrigger>
                        <Button variant="outline" className="gap-2">
                        File Options <ChevronDown className="h-4 w-4" />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu width="w-56">
                        <DropdownSub>
                            <DropdownSubTrigger icon={<Users className="h-4 w-4" />}>
                                Invite Users
                            </DropdownSubTrigger>
                            <DropdownSubContent>
                                <DropdownItem icon={<Mail className="h-4 w-4" />}>
                                    Email
                                </DropdownItem>
                                <DropdownItem icon={<UserPlus className="h-4 w-4" />}>
                                    Connect Contact
                                </DropdownItem>
                                <DropdownSeparator />
                                <DropdownSub>
                                    <DropdownSubTrigger icon={<Plus className="h-4 w-4" />}>
                                        More Options
                                    </DropdownSubTrigger>
                                    <DropdownSubContent>
                                        <DropdownItem>Import from CSV</DropdownItem>
                                        <DropdownItem>Sync with Cloud</DropdownItem>
                                    </DropdownSubContent>
                                </DropdownSub>
                            </DropdownSubContent>
                        </DropdownSub>
                        <DropdownSeparator />
                        
                        <DropdownItem icon={<File className="h-4 w-4" />}>New File</DropdownItem>
                        <DropdownItem icon={<Folder className="h-4 w-4" />}>Open Folder...</DropdownItem>
                        
                        <DropdownSeparator />
                        <DropdownItem>Properties</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
          </ComponentPreview>
        </section>

        <section>
          <InstallationTabs
            componentName="dropdown-cascading"
            dependencies={["clsx", "tailwind-merge", "lucide-react"]}
            manualSteps={[
              {
                title: "Update dropdown.tsx",
                description: "Add the Submenu components to your existing dropdown file.",
                filename: "components/dropdowns/dropdown.tsx",
                code: `// Add these imports
import { ChevronRight } from "lucide-react";

// Add these components at the end
export function DropdownSub({ children }) { ... }
export function DropdownSubTrigger({ children, ...props }) { ... }
export function DropdownSubContent({ children }) { ... }`
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
                name: "DropdownSub",
                type: "Component",
                defaultValue: "-",
                description: "Wrapper for the submenu specific state.",
              },
               {
                name: "DropdownSubTrigger",
                type: "Component",
                defaultValue: "-",
                description: "The item that toggles the submenu. Includes an automatic chevron icon.",
              },
               {
                name: "DropdownSubContent",
                type: "Component",
                defaultValue: "-",
                description: "The container for submenu items, automatically positioned to the right.",
              },
            ]}
          />
        </section>
      </div>
    </ComponentPageLayout>
  );
}
