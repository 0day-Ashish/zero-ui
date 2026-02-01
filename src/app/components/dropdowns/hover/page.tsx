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
  DropdownItemRich,
  DropdownSeparator,
  DropdownLabel
} from "@/zeroui/components/dropdowns";
import { Button } from "@/zeroui/components/buttons";
import { ChevronDown, BarChart, Users, Settings, Mail, Bell, Shield, LogOut } from "lucide-react";

const dropdownComponents = [
  { id: "dropdown-basic", name: "Dropdown Basic", href: "/components/dropdowns" },
  { id: "dropdown-rich", name: "Dropdown Rich", href: "/components/dropdowns/rich" },
  { id: "dropdown-search", name: "Dropdown Search", href: "/components/dropdowns/searchable" },
  { id: "dropdown-hover", name: "Dropdown Hover", href: "/components/dropdowns/hover" },
  { id: "cascading-menu", name: "Cascading Menu", href: "/components/dropdowns/cascading" },
  { id: "context-menu", name: "Dropdown Context Menu", href: "/components/dropdowns/context-menu" },
];

export default function DropdownHoverPage() {
  const hoverCode = `import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownItemRich,
  DropdownSeparator
} from "@/zeroui/components/dropdowns";
import { Button } from "@/zeroui/components/buttons";
import { ChevronDown, BarChart, Users, Settings, Mail, Bell } from "lucide-react";

export function HoverDropdown() {
  return (
    <div className="flex gap-4">
      {/* Simple Hover */}
      <Dropdown trigger="hover">
        <DropdownTrigger asChild>
          <Button variant="secondary" className="gap-2">
            Products <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu width="w-48">
          <DropdownItem>Analytics</DropdownItem>
          <DropdownItem>Engagement</DropdownItem>
          <DropdownItem>Security</DropdownItem>
          <DropdownItem>Integrations</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      {/* Rich Hover */}
      <Dropdown trigger="hover">
        <DropdownTrigger asChild>
          <Button className="gap-2">
            My Dashboard <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu width="w-64">
           <div className="px-2 py-1.5 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
            Overview
          </div>
          <DropdownItemRich
            icon={<BarChart className="h-4 w-4" />}
            title="Analytics"
            description="Real-time data insights"
          />
          <DropdownItemRich
            icon={<Users className="h-4 w-4" />}
            title="Customers"
            description="Manage your user base"
          />
          <DropdownSeparator />
          <DropdownItemRich
            icon={<Settings className="h-4 w-4" />}
            title="Settings"
            description="Configure your dashboard"
          />
        </DropdownMenu>
      </Dropdown>

      {/* Staggered Animation */}
      <Dropdown trigger="hover">
        <DropdownTrigger asChild>
          <Button variant="outline" className="gap-2">
            Staggered <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu width="w-56" animation="staggered">
          <DropdownItem icon={<Bell className="h-4 w-4"/>}>Updates</DropdownItem>
          <DropdownItem icon={<Mail className="h-4 w-4"/>}>Messages</DropdownItem>
          <DropdownItem icon={<Users className="h-4 w-4"/>}>Team</DropdownItem>
          <DropdownSeparator />
          <DropdownItem icon={<Settings className="h-4 w-4"/>}>Settings</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}`;

  const bounceCode = `// 1. Add keyframes to globals.css
@keyframes dropdown-bounce {
  0% { transform: scaleY(0.6); opacity: 0; }
  50% { transform: scaleY(1.1); opacity: 1; }
  70% { transform: scaleY(0.95); }
  85% { transform: scaleY(1.03); }
  100% { transform: scaleY(1); opacity: 1; }
}

.animate-dropdown-bounce {
  transform-origin: top;
  animation: dropdown-bounce 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

// 2. Use the animation prop
<Dropdown trigger="hover">
  <DropdownTrigger asChild>
    <Button variant="outline">
      Bounce <ChevronDown />
    </Button>
  </DropdownTrigger>
  <DropdownMenu animation="bounce">
    <DropdownItem>Item 1</DropdownItem>
    <DropdownItem>Item 2</DropdownItem>
  </DropdownMenu>
</Dropdown>`;

  return (
    <ComponentPageLayout
      componentName="Hover Dropdown"
      description="A dropdown menu that opens automatically when the user hovers over the trigger."
      componentItems={dropdownComponents}
      activeComponentId="dropdown-hover"
    >
      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
            Trigger on Hover
          </h2>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            Set the <code>trigger</code> prop to <code>"hover"</code> to enable open-on-hover behavior. 
            Includes a small delay before closing to prevent accidental closures when moving the mouse.
          </p>
          <ComponentPreview code={hoverCode}>
            <div className="flex flex-wrap gap-8 justify-center p-8 bg-zinc-50/50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-sm">
              <Dropdown trigger="hover">
                <DropdownTrigger asChild>
                  <Button variant="secondary" className="gap-2 border-2 border-zinc-800/20 dark:border-white/20">
                    Products <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu width="w-48">
                  <DropdownItem>Analytics</DropdownItem>
                  <DropdownItem>Engagement</DropdownItem>
                  <DropdownItem>Security</DropdownItem>
                  <DropdownItem>Integrations</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Dropdown trigger="hover">
                <DropdownTrigger asChild>
                  <Button className="gap-2 border-2 border-zinc-800/20 dark:border-white/20">
                    My Dashboard <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu width="w-64" align="center">
                  <DropdownLabel>Overview</DropdownLabel>
                  <DropdownItemRich
                    icon={<BarChart className="h-4 w-4" />}
                    title="Analytics"
                    description="Real-time data insights"
                  />
                  <DropdownItemRich
                    icon={<Users className="h-4 w-4" />}
                    title="Customers"
                    description="Manage your user base"
                  />
                  <DropdownSeparator />
                  <DropdownItemRich
                    icon={<Settings className="h-4 w-4" />}
                    title="Settings"
                    description="Configure your dashboard"
                  />
                </DropdownMenu>
              </Dropdown>
            </div>
          </ComponentPreview>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
            Bounce Animation
          </h2>
           <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            Use <code>animation="bounce"</code> for a playful, physics-based opening animation. Perfect for more casual or creative interfaces.
          </p>
          <ComponentPreview code={bounceCode}>
             <div className="flex flex-wrap gap-8 justify-center p-8 bg-zinc-50/50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-sm">
              <Dropdown trigger="hover">
                <DropdownTrigger asChild>
                  <Button variant="outline" className="gap-2 border-2 border-zinc-800/20 dark:border-white/20">
                    Bounce <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownTrigger>
                 <DropdownMenu width="w-48" animation="bounce">
                  <DropdownItem>New File</DropdownItem>
                  <DropdownItem>Open Folder</DropdownItem>
                  <DropdownItem>Save Workspace</DropdownItem>
                </DropdownMenu>
              </Dropdown>
             </div>
          </ComponentPreview>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
            Staggered Entrance
          </h2>
           <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            Use <code>animation="staggered"</code> to make menu items slide in one by one. This adds a premium feel to larger menus.
          </p>
          <ComponentPreview code={`// 1. Add keyframes to CSS
@keyframes menu-item-slide-in {
  0% { opacity: 0; transform: translateX(-8px); }
  100% { opacity: 1; transform: translateX(0); }
}

.animate-menu-item-slide-in {
  opacity: 0;
  animation: menu-item-slide-in 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

// 2. Use the animation prop
<Dropdown trigger="hover">
  <DropdownTrigger asChild>
    <Button variant="outline">Staggered</Button>
  </DropdownTrigger>
  <DropdownMenu animation="staggered">
    <DropdownItem>Item 1</DropdownItem>
    <DropdownItem>Item 2</DropdownItem>
    <DropdownItem>Item 3</DropdownItem>
  </DropdownMenu>
</Dropdown>`}>
             <div className="flex justify-center p-8 bg-zinc-50/50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-sm">
              <Dropdown trigger="hover">
                <DropdownTrigger asChild>
                  <Button variant="outline" className="gap-2 border-2 border-zinc-800/20 dark:border-white/20">
                    Staggered <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu width="w-56" animation="staggered">
                  <DropdownItem icon={<Bell className="h-4 w-4"/>}>Updates</DropdownItem>
                  <DropdownItem icon={<Mail className="h-4 w-4"/>}>Messages</DropdownItem>
                  <DropdownItem icon={<Users className="h-4 w-4"/>}>Team</DropdownItem>
                  <DropdownSeparator />
                  <DropdownItem icon={<Settings className="h-4 w-4"/>}>Settings</DropdownItem>
                </DropdownMenu>
              </Dropdown>
             </div>
          </ComponentPreview>
        </section>

        <section>
          <InstallationTabs
            componentName="dropdown-hover"
            dependencies={["clsx", "tailwind-merge", "lucide-react"]}
            manualSteps={[
              {
                title: "Copy the component code",
                description: "Create a new file and paste the following code:",
                filename: "components/dropdowns/dropdown.tsx",
                code: `"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

// --- Types ---
interface DropdownProps {
  children: React.ReactNode;
  className?: string;
  trigger?: "click" | "hover";
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
  trigger: "click" | "hover";
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
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

export function Dropdown({ children, className = "", trigger = "click" }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (trigger === "hover") {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === "hover") {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 150); // 150ms delay to prevent flickering when moving between trigger and menu
    }
  };

  // Handle outside click to close (keep existing behavior for click mode, and backup for hover)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen, trigger, handleMouseEnter, handleMouseLeave }}>
      <div 
        ref={dropdownRef} 
        className={\`relative inline-block text-left \${className}\`}
        onMouseLeave={handleMouseLeave} // Handle leaving both trigger and menu container
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

export function DropdownTrigger({ children, className = "", asChild = false, ...props }: DropdownTriggerProps) {
  const { isOpen, setIsOpen, trigger, handleMouseEnter } = useDropdown();

  const handleClick = (e: React.MouseEvent) => {
    if (trigger === "click") {
      setIsOpen(!isOpen);
    }
    if (props.onClick) props.onClick(e as any);
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      ...props,
      onClick: (e: React.MouseEvent) => {
        children.props.onClick?.(e);
        handleClick(e);
      },
      onMouseEnter: (e: React.MouseEvent) => {
        children.props.onMouseEnter?.(e);
        handleMouseEnter();
        props.onMouseEnter?.(e as any);
      },
      className: cn(children.props.className, className),
      "aria-expanded": isOpen,
    });
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={(e) => {
        handleMouseEnter();
        props.onMouseEnter?.(e);
      }}
      className={cn("cursor-pointer inline-flex items-center justify-center transition-all duration-200 focus:outline-none", className)}
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
  const { isOpen, handleMouseEnter } = useDropdown();

  if (!isOpen) return null;

  const alignments = {
    left: "left-0",
    right: "right-0",
    center: "left-1/2 -translate-x-1/2",
  };

  return (
    <div
      onMouseEnter={handleMouseEnter} // Keep open when hovering menu
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
                name: "trigger",
                type: '"click" | "hover"',
                defaultValue: '"click"',
                description: "Determines the event that opens the dropdown.",
              },
               {
                name: "animation",
                type: '"default" | "bounce" | "staggered"',
                defaultValue: '"default"',
                description: "The animation style for the dropdown opening. 'staggered' animates items individually.",
              },
            ]}
          />
        </section>
      </div>
    </ComponentPageLayout>
  );
}
