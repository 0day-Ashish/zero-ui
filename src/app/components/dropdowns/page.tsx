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
} from "@/zeroui/components/dropdowns";
import { Button } from "@/zeroui/components/buttons";
import { ChevronDown, User, Settings, LogOut, CreditCard, Mail } from "lucide-react";

const dropdownComponents = [
  { id: "dropdown-basic", name: "Dropdown Basic", href: "/components/dropdowns" },
  { id: "dropdown-rich", name: "Dropdown Rich", href: "/components/dropdowns/rich" },
  { id: "dropdown-search", name: "Dropdown Search", href: "/components/dropdowns/searchable" },
  { id: "dropdown-hover", name: "Dropdown Hover", href: "/components/dropdowns/hover" },
  { id: "cascading-menu", name: "Cascading Menu", href: "/components/dropdowns/cascading" },
  { id: "context-menu", name: "Dropdown Context Menu", href: "/components/dropdowns/context-menu" },
];

export default function DropdownPage() {
  const basicCode = `import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
} from "@/zeroui/components/dropdowns";
import { Button } from "@/zeroui/components/buttons";
import { ChevronDown, User, Settings, LogOut, CreditCard } from "lucide-react";

export default function Example() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="outline" className="gap-2">
          My Account
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownLabel>My Account</DropdownLabel>
        <DropdownSeparator />
        <DropdownItem icon={<User />} shortcut="⇧⌘P">Profile</DropdownItem>
        <DropdownItem icon={<Settings />} shortcut="⌘S">Settings</DropdownItem>
        <DropdownItem icon={<CreditCard />} shortcut="⌘B">Billing</DropdownItem>
        <DropdownSeparator />
        <DropdownItem variant="destructive" icon={<LogOut />} shortcut="⇧⌘Q">
          Log out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}`;

  const alignmentCode = `import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@/zeroui/components/dropdowns";
import { Button } from "@/zeroui/components/buttons";
import { User, Settings } from "lucide-react";

export default function Example() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
      {/* Left Align */}
      <Dropdown>
        <DropdownTrigger>
          <Button variant="outline">Left Align</Button>
        </DropdownTrigger>
        <DropdownMenu align="left">
          <DropdownItem icon={<User />}>Profile</DropdownItem>
          <DropdownItem icon={<Settings />}>Settings</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      {/* Center Align */}
      <Dropdown>
        <DropdownTrigger>
          <Button variant="outline">Center Align</Button>
        </DropdownTrigger>
        <DropdownMenu align="center">
          <DropdownItem icon={<User />}>Profile</DropdownItem>
          <DropdownItem icon={<Settings />}>Settings</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      {/* Right Align */}
      <Dropdown>
        <DropdownTrigger>
          <Button variant="outline">Right Aligned</Button>
        </DropdownTrigger>
        <DropdownMenu align="right">
          <DropdownItem icon={<User />}>Profile</DropdownItem>
          <DropdownItem icon={<Settings />}>Settings</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}`;

  const manualSteps = [
    {
      title: "Copy the component code",
      description: "Create a new file and paste the following code:",
      filename: "components/dropdowns/dropdown.tsx",
      code: `"use client";

import React, { useState, useRef, useEffect } from "react";

// --- Types ---
interface DropdownProps {
  children: React.ReactNode;
  className?: string;
}

interface DropdownTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean;
}

interface DropdownMenuProps {
  children: React.ReactNode;
  align?: "left" | "right" | "center";
  width?: string;
  className?: string;
}

interface DropdownItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "destructive";
  icon?: React.ReactNode;
  shortcut?: string;
}

// --- Context ---
interface DropdownContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownContext = React.createContext<DropdownContextType | undefined>(undefined);

const useDropdown = () => {
  const context = React.useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdown must be used within a Dropdown component");
  }
  return context;
};

// --- Components ---

export function Dropdown({ children, className = "" }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle outside click to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      <div ref={dropdownRef} className={\`relative inline-block text-left \${className}\`}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

export function DropdownTrigger({ children, className = "", ...props }: DropdownTriggerProps) {
  const { isOpen, setIsOpen } = useDropdown();

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={\`cursor-pointer inline-flex items-center justify-center transition-all duration-200 focus:outline-none \${className}\`}
      aria-expanded={isOpen}
      {...props}
    >
      {children}
    </button>
  );
}

export function DropdownMenu({
  children,
  align = "left",
  width = "w-56",
  className = "",
}: DropdownMenuProps) {
  const { isOpen } = useDropdown();

  if (!isOpen) return null;

  const alignments = {
    left: "left-0",
    right: "right-0",
    center: "left-1/2 -translate-x-1/2",
  };

  return (
    <div
      className={\`absolute z-50 mt-2 \${width} origin-top-right rounded-2xl border border-zinc-200/60 bg-white/95 p-1.5 shadow-2xl ring-1 ring-black/5 backdrop-blur-xl focus:outline-none dark:border-zinc-800/80 dark:bg-zinc-950/95 dark:ring-white/5 \${alignments[align]} \${className} animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-200\`}
    >
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
}

export function DropdownItem({
  children,
  className = "",
  variant = "default",
  icon,
  shortcut,
  onClick,
  ...props
}: DropdownItemProps) {
  const { setIsOpen } = useDropdown();

  const handleItemClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(false);
    if (onClick) onClick(e);
  };

  const variants = {
    default:
      "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800",
    destructive:
      "text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/20",
  };

  return (
    <button
      onClick={handleItemClick}
      className={\`group flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-sm transition-all duration-200 \${variants[variant]} \${className}\`}
      {...props}
    >
      <span className="flex items-center gap-2.5">
        {icon && (
          <span className="h-4 w-4 shrink-0 opacity-60 transition-opacity group-hover:opacity-100">
            {icon}
          </span>
        )}
        <span className="font-medium opacity-90">{children}</span>
      </span>
      {shortcut && (
        <span className="ml-auto text-xs font-mono tracking-tighter text-zinc-400 opacity-60 group-hover:opacity-100 transition-opacity dark:text-zinc-500">
          {shortcut}
        </span>
      )}
    </button>
  );
}

export function DropdownLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={\`px-2 py-1.5 text-xs font-medium text-zinc-500/80 dark:text-zinc-400/80 \${className}\`}>
      {children}
    </div>
  );
}

export function DropdownSeparator({ className = "" }: { className?: string }) {
  return <div className={\`-mx-1 my-1 h-px bg-zinc-200/50 dark:bg-zinc-800/50 \${className}\`} />;
}
`,
    },
  ];

  return (
    <ComponentPageLayout
      componentName="Dropdown"
      description="Displays a menu to the user — such as a set of actions or functions — triggered by a button."
      componentItems={dropdownComponents}
      activeComponentId="dropdown-basic"
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
            Basic Usage
          </h2>
          <ComponentPreview code={basicCode}>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="outline" className="gap-2 border-2 border-zinc-800/20 dark:border-white/20">
                  My Account
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownLabel>My Account</DropdownLabel>
                <DropdownSeparator />
                <DropdownItem icon={<User />} shortcut="⇧⌘P">
                  Profile
                </DropdownItem>
                <DropdownItem icon={<Settings />} shortcut="⌘S">
                  Settings
                </DropdownItem>
                <DropdownItem icon={<CreditCard />} shortcut="⌘B">
                  Billing
                </DropdownItem>
                <DropdownSeparator />
                <DropdownItem
                  variant="destructive"
                  icon={<LogOut />}
                  shortcut="⇧⌘Q"
                >
                  Log out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </ComponentPreview>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
            Alignment
          </h2>
          <p className="mb-4 text-zinc-600 dark:text-zinc-400">
            The dropdown can be aligned to the left (default), right, or center of the trigger.
          </p>
          <ComponentPreview code={alignmentCode}>
            <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="outline" className="border-2 border-zinc-800/20 dark:border-white/20">Left Align</Button>
                </DropdownTrigger>
                <DropdownMenu align="left">
                  <DropdownItem icon={<User />}>Profile</DropdownItem>
                  <DropdownItem icon={<Settings />}>Settings</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Dropdown>
                <DropdownTrigger>
                  <Button variant="outline" className="border-2 border-zinc-800/20 dark:border-white/20">Center Align</Button>
                </DropdownTrigger>
                <DropdownMenu align="center">
                  <DropdownItem icon={<User />}>Profile</DropdownItem>
                  <DropdownItem icon={<Settings />}>Settings</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Dropdown>
                <DropdownTrigger>
                  <Button variant="outline" className="border-2 border-zinc-800/20 dark:border-white/20">Right Align</Button>
                </DropdownTrigger>
                <DropdownMenu align="right">
                  <DropdownItem icon={<User />}>Profile</DropdownItem>
                  <DropdownItem icon={<Settings />}>Settings</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </ComponentPreview>
        </div>
      </div>

      <InstallationTabs
        componentName="dropdown"
        dependencies={["clsx", "tailwind-merge"]}
        manualSteps={manualSteps}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">DropdownMenu Props</h3>
        <PropsTable
          props={[
            { name: "align", type: '"left" | "right" | "center"', default: '"left"' },
            { name: "width", type: "string", default: '"w-56"' },
            { name: "children", type: "ReactNode", default: "-" },
          ]}
        />
        
        <h3 className="text-xl font-semibold pt-4">DropdownItem Props</h3>
        <PropsTable
          props={[
            { name: "variant", type: '"default" | "destructive"', default: '"default"' },
            { name: "icon", type: "ReactNode", default: "-" },
            { name: "shortcut", type: "string", default: "-" },
            { name: "onClick", type: "(e: MouseEvent) => void", default: "-" },
            { name: "children", type: "ReactNode", default: "-" },
          ]}
        />
      </div>
    </ComponentPageLayout>
  );
}
