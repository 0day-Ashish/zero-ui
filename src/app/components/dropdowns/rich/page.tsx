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
  DropdownLabel,
  DropdownSeparator,
  DropdownItemRich,
  DropdownUserHeader,
  DropdownItemStatus,
  DropdownItemToggle
} from "@/zeroui/components/dropdowns";
import { Button } from "@/zeroui/components/buttons";
import { 
  ChevronDown, 
  Map, 
  CreditCard, 
  Settings, 
  Sparkles, 
  Shield, 
  Building,
  LogOut,
  Plus,
  SlidersHorizontal,
  Wifi,
  Moon,
  AlertCircle
} from "lucide-react";

// Add "Dropdown Rich" to the sidebar list
const dropdownComponents = [
  { id: "dropdown-basic", name: "Dropdown Basic", href: "/components/dropdowns" },
  { id: "dropdown-rich", name: "Dropdown Rich", href: "/components/dropdowns/rich" },
  { id: "dropdown-search", name: "Dropdown Search", href: "/components/dropdowns/searchable" },
  { id: "dropdown-hover", name: "Dropdown Hover", href: "/components/dropdowns/hover" },
  { id: "cascading-menu", name: "Cascading Menu", href: "/components/dropdowns/cascading" },
  { id: "context-menu", name: "Dropdown Context Menu", href: "/components/dropdowns/context-menu" },
];

export default function DropdownRichPage() {
  const productsCode = `import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItemRich
} from "@/zeroui/components/dropdowns";
import { Button } from "@/zeroui/components/buttons";
import { ChevronDown, Map, Sparkles, Shield } from "lucide-react";

export default function ProductsDropdown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="ghost" className="gap-2 font-medium">
          Products
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu width="w-80" className="p-2">
        <DropdownItemRich
          title="Maps & Navigation"
          description="Real-time routes and traffic updates."
          icon={<Map className="h-5 w-5" />}
        />
        <DropdownItemRich
          title="AI Assistant"
          description="Smart automation for your daily tasks."
          icon={<Sparkles className="h-5 w-5" />}
        />
        <DropdownItemRich
          title="Security Shield"
          description="Enterprise-grade protection."
          icon={<Shield className="h-5 w-5" />}
        />
      </DropdownMenu>
    </Dropdown>
  );
}`;

  const userProfileCode = `import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSeparator,
  DropdownUserHeader,
  DropdownItem
} from "@/zeroui/components/dropdowns";
import { Button } from "@/zeroui/components/buttons";
import { ChevronDown, Settings, CreditCard, LogOut } from "lucide-react";

export default function UserDropdown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="outline" className="gap-2 rounded-full pl-2 pr-4">
          <div className="h-6 w-6 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          <span className="text-sm font-medium">Samuel</span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu width="w-64" align="center" className="p-2">
        <DropdownUserHeader
          name="Samuel"
          email="samuel@zeroui.land"
          initials="SM"
        />
        <DropdownSeparator />
        <DropdownItem icon={<Settings />}>Account Settings</DropdownItem>
        <DropdownItem icon={<CreditCard />}>Billing & Plans</DropdownItem>
        <DropdownSeparator />
        <DropdownItem variant="destructive" icon={<LogOut />}>Log out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}`;

  const teamSwitcherCode = `import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownLabel,
  DropdownSeparator,
  DropdownItemRich,
  DropdownItem
} from "@/zeroui/components/dropdowns";
import { Button } from "@/zeroui/components/buttons";
import { ChevronDown, Building, Plus } from "lucide-react";

export default function TeamSwitcher() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="outline" className="w-[200px] justify-between">
          <span className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            Acme Inc.
          </span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu width="w-[200px]" align="left" className="p-2">
        <DropdownLabel>Switch Team</DropdownLabel>
        <DropdownSeparator />
        <DropdownItemRich
          title="Acme Inc."
          active={true}
          className="mb-1"
        />
        <DropdownItemRich
          title="Skynet Corp."
          active={false}
          className="mb-1"
        />
        <DropdownSeparator />
        <DropdownItem icon={<Plus />}>Create Team</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}`;

  const interactiveCode = `import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownLabel,
  DropdownSeparator,
  DropdownItemStatus,
  DropdownItemToggle
} from "@/zeroui/components/dropdowns";
import { Button } from "@/zeroui/components/buttons";
import { SlidersHorizontal, Moon, Wifi, AlertCircle } from "lucide-react";

export default function PreferencesDropdown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="outline" className="gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          Preferences
        </Button>
      </DropdownTrigger>
      <DropdownMenu width="w-64" className="p-2">
        <DropdownLabel>System Status</DropdownLabel>
        <DropdownItemStatus status="online" active>
          Servers Online
        </DropdownItemStatus>
        <DropdownItemStatus status="busy">
          High Load
        </DropdownItemStatus>
        
        <DropdownSeparator />
        <DropdownLabel>Settings</DropdownLabel>
        
        <DropdownItemToggle 
          icon={<Wifi className="h-4 w-4" />} 
          checked={true}
        >
          Wi-Fi Access
        </DropdownItemToggle>
        
        <DropdownItemToggle 
          icon={<Moon className="h-4 w-4" />} 
          checked={false}
        >
          Dark Mode
        </DropdownItemToggle>
        
        <DropdownItemToggle 
          icon={<AlertCircle className="h-4 w-4" />} 
          checked={true}
        >
          Notifications
        </DropdownItemToggle>
      </DropdownMenu>
    </Dropdown>
  );
}`;

  const manualSteps = [
    {
      title: "Copy the rich component code",
      description: "Create a new file and paste the following code:",
      filename: "components/dropdowns/dropdown-rich.tsx",
      code: `"use client";

import React from "react";
// Assumes you have the base dropdown in the same folder
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSeparator, DropdownLabel } from "./dropdown";

// --- Rich Item Component ---
interface DropdownItemRichProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  active?: boolean;
}

export function DropdownItemRich({
  title,
  description,
  icon,
  active = false,
  className = "",
  onClick,
  ...props
}: DropdownItemRichProps) {
  return (
    <button
      className={\`group flex w-full items-start gap-3 rounded-xl p-3 text-left transition-colors duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none \${
        active ? "bg-zinc-50 dark:bg-zinc-900/50" : ""
      } \${className}\`}
      onClick={onClick}
      {...props}
    >
      {icon && (
        <div className={\`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-500 group-hover:bg-white group-hover:text-zinc-900 dark:bg-zinc-800 dark:text-zinc-400 dark:group-hover:bg-zinc-700 dark:group-hover:text-zinc-100 transition-colors\`}>
          {icon}
        </div>
      )}
      <div className="flex flex-col flex-1 min-w-0">
        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {title}
        </span>
        {description && (
          <span className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
            {description}
          </span>
        )}
      </div>
      {active && (
        <span className="ml-auto flex h-full items-center pt-1 text-zinc-900 dark:text-white">
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </span>
      )}
    </button>
  );
}

// --- Status Item ---
interface DropdownItemStatusProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  status: "online" | "busy" | "offline" | "idle";
  active?: boolean;
}

export function DropdownItemStatus({
  children,
  status,
  active = false,
  className = "",
  onClick,
  ...props
}: DropdownItemStatusProps) {
  const statusColors = {
    online: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]",
    busy: "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]",
    idle: "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]",
    offline: "bg-zinc-400 dark:bg-zinc-500",
  };

  return (
    <button
      className={\`group flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-sm transition-all duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 \${
        active ? "bg-zinc-50 dark:bg-zinc-900/50" : ""
      } \${className}\`}
      onClick={onClick}
      {...props}
    >
      <div className="relative flex h-2.5 w-2.5 items-center justify-center">
        <span
          className={\`h-2.5 w-2.5 rounded-full \${statusColors[status]}\`}
        />
      </div>
      <span className="flex-1 text-left font-medium text-zinc-700 dark:text-zinc-200">
        {children}
      </span>
      {active && (
        <span className="ml-auto text-zinc-900 dark:text-zinc-100">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </span>
      )}
    </button>
  );
}


// --- Toggle Item ---
interface DropdownItemToggleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  icon?: React.ReactNode;
}

export function DropdownItemToggle({
  children,
  checked = false,
  onCheckedChange,
  icon,
  className = "",
  ...props
}: DropdownItemToggleProps) {
  return (
    <div
      className={\`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-sm transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/40 \${className}\`}
      {...props}
    >
      <div className="flex items-center gap-2.5">
        {icon && <span className="text-zinc-400 dark:text-zinc-500">{icon}</span>}
        <span className="font-medium text-zinc-700 dark:text-zinc-200">
          {children}
        </span>
      </div>
      
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onCheckedChange?.(!checked)}
        className={\`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:focus-visible:ring-zinc-800 \${
          checked ? "bg-zinc-900 dark:bg-zinc-100" : "bg-zinc-200 dark:bg-zinc-700"
        }\`}
      >
        <span
          className={\`pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform \${
            checked ? "translate-x-4 dark:bg-zinc-900" : "translate-x-0"
          }\`}
        />
      </button>
    </div>
  );
}

// --- User Profile Header ---
export function DropdownUserHeader({
  name,
  email,
  src,
  initials,
}: {
  name: string;
  email: string;
  src?: string;
  initials?: string;
}) {
  return (
    <div className="flex items-center gap-3 px-3 py-2.5 mb-1 bg-zinc-50/50 dark:bg-zinc-900/50 rounded-xl">
      <div className="h-9 w-9 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-200 dark:border-zinc-700">
        {src ? (
          <img src={src} alt={name} className="h-full w-full object-cover" />
        ) : (
          <span className="text-xs font-semibold text-zinc-500">{initials}</span>
        )}
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 truncate">
          {name}
        </span>
        <span className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
          {email}
        </span>
      </div>
    </div>
  );
}`,
    },
  ];

  return (
    <ComponentPageLayout
      componentName="Dropdown Rich"
      description="Advanced dropdown options with icons, descriptions, and custom headers for rich navigation menus."
      componentItems={dropdownComponents}
      activeComponentId="dropdown-rich"
    >
      <div className="space-y-12">
        {/* Idea 1: Feature Navigation */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            Feature Navigation
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            A rich menu ideal for product features or resources, using icons and descriptions to guide the user.
          </p>
          <ComponentPreview code={productsCode}>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="outline" className="gap-2 font-medium border-2 border-zinc-800/20 dark:border-white/20">
                  Products
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu width="w-80" className="p-2">
                <DropdownItemRich
                  title="Maps & Navigation"
                  description="Real-time routes and traffic updates."
                  icon={<Map className="h-5 w-5" />}
                />
                <DropdownItemRich
                  title="AI Assistant"
                  description="Smart automation for your daily tasks."
                  icon={<Sparkles className="h-5 w-5" />}
                />
                <DropdownItemRich
                  title="Security Shield"
                  description="Enterprise-grade protection."
                  icon={<Shield className="h-5 w-5" />}
                />
              </DropdownMenu>
            </Dropdown>
          </ComponentPreview>
        </section>

        {/* Idea 2: User Profile */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            User Profile
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            A distinctively styled menu for user account actions, featuring a custom header component.
          </p>
          <ComponentPreview code={userProfileCode}>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="outline" className="gap-2 rounded-full pl-2 pr-4 border-2 border-zinc-800/20 dark:border-white/20">
                  <div className="h-6 w-6 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                  <span className="text-sm font-medium">Samuel</span>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu width="w-64" align="center" className="p-2">
                <DropdownUserHeader
                  name="Samuel"
                  email="samuel@zeroui.land"
                  initials="SM"
                />
                <DropdownSeparator />
                <DropdownItem icon={<Settings />}>Account Settings</DropdownItem>
                <DropdownItem icon={<CreditCard />}>Billing & Plans</DropdownItem>
                <DropdownSeparator />
                <DropdownItem variant="destructive" icon={<LogOut />}>Log out</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </ComponentPreview>
        </section>

        {/* Idea 3: Team Switcher */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            Team Switcher
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Utilizes the active state of rich items to show which context is currently selected.
          </p>
          <ComponentPreview code={teamSwitcherCode}>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="outline" className="w-[200px] justify-between border-2 border-zinc-800/20 dark:border-white/20">
                  <span className="flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    Acme Inc.
                  </span>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu width="w-[200px]" align="left" className="p-2">
                <DropdownLabel>Switch Team</DropdownLabel>
                <DropdownSeparator />
                <DropdownItemRich
                  title="Acme Inc."
                  active={true}
                  className="mb-1"
                />
                <DropdownItemRich
                  title="Skynet Corp."
                  active={false}
                  className="mb-1"
                />
                <DropdownSeparator />
                <DropdownItem icon={<Plus />}>Create Team</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </ComponentPreview>
        </section>

        {/* Idea 4: Interactive & Status */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            Interactive & Status
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Components with embedded state controls (toggles) and visual status indicators.
          </p>
          <ComponentPreview code={interactiveCode}>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="outline" className="gap-2 border-2 border-zinc-800/20 dark:border-white/20">
                  <SlidersHorizontal className="h-4 w-4" />
                  Preferences
                </Button>
              </DropdownTrigger>
              <DropdownMenu width="w-64" className="p-2">
                <DropdownLabel>System Status</DropdownLabel>
                <DropdownItemStatus status="online" active>
                  Servers Online
                </DropdownItemStatus>
                <DropdownItemStatus status="busy">
                  High Load
                </DropdownItemStatus>
                
                <DropdownSeparator />
                <DropdownLabel>Settings</DropdownLabel>
                
                <DropdownItemToggle 
                  icon={<Wifi className="h-4 w-4" />} 
                  checked={true}
                >
                  Wi-Fi Access
                </DropdownItemToggle>
                
                <DropdownItemToggle 
                  icon={<Moon className="h-4 w-4" />} 
                  checked={false}
                >
                  Dark Mode
                </DropdownItemToggle>
                
                <DropdownItemToggle 
                  icon={<AlertCircle className="h-4 w-4" />} 
                  checked={true}
                >
                  Notifications
                </DropdownItemToggle>
              </DropdownMenu>
            </Dropdown>
          </ComponentPreview>
        </section>
      </div>

      <InstallationTabs
        componentName="dropdown-rich"
        dependencies={["clsx", "tailwind-merge"]}
        manualSteps={manualSteps}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">DropdownItemRich Props</h3>
        <PropsTable
          props={[
            { name: "title", type: "string", default: "-" },
            { name: "description", type: "string", default: "-" },
            { name: "icon", type: "ReactNode", default: "-" },
            { name: "active", type: "boolean", default: "false" },
          ]}
        />
      </div>
    </ComponentPageLayout>
  );
}
