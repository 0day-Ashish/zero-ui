"use client";

import React, { useState } from "react";
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
  DropdownSearchInput,
  DropdownItemRich
} from "@/zeroui/components/dropdowns";
import { Button } from "@/zeroui/components/buttons";
import { ChevronDown, Check, Globe, Flag, Search, User } from "lucide-react";

const dropdownComponents = [
  { id: "dropdown-basic", name: "Dropdown Basic", href: "/components/dropdowns" },
  { id: "dropdown-rich", name: "Dropdown Rich", href: "/components/dropdowns/rich" },
  { id: "dropdown-search", name: "Dropdown Search", href: "/components/dropdowns/searchable" },
  { id: "dropdown-hover", name: "Dropdown Hover", href: "/components/dropdowns/hover" },
  { id: "cascading-menu", name: "Cascading Menu", href: "/components/dropdowns/cascading" },
  { id: "context-menu", name: "Dropdown Context Menu", href: "/components/dropdowns/context-menu" },
];

export default function DropdownSearchablePage() {
  const searchableCode = `import { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSearchInput,
  DropdownSeparator
} from "@/zeroui/components/dropdowns";
import { Button } from "@/zeroui/components/buttons";
import { ChevronDown, Check } from "lucide-react";

const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Chinese", value: "zh" },
];

export default function LanguageSelector() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("en");

  const filteredLanguages = languages.filter((lang) =>
    lang.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="outline" className="w-56 justify-between">
          {languages.find((l) => l.value === selected)?.label || "Select Language"}
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu width="w-56">
        <DropdownSearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search language..."
          autoFocus
        />
        <DropdownSeparator />
        <div className="max-h-[200px] overflow-y-auto p-1 custom-scrollbar">
          {filteredLanguages.length === 0 ? (
             <div className="py-2.5 text-center text-sm text-zinc-500 dark:text-zinc-400">
               No results found.
             </div>
          ) : (
            filteredLanguages.map((lang) => (
              <DropdownItem
                key={lang.value}
                onClick={() => setSelected(lang.value)}
              >
                <div className="flex w-full items-center justify-between">
                  {lang.label}
                  {selected === lang.value && (
                    <Check className="h-4 w-4 text-emerald-500" />
                  )}
                </div>
              </DropdownItem>
            ))
          )}
        </div>
      </DropdownMenu>
    </Dropdown>
  );
}`;

  const commandMenuCode = `import { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSearchInput,
  DropdownLabel,
  DropdownSeparator,
  DropdownItemRich
} from "@/zeroui/components/dropdowns";
import { Button } from "@/zeroui/components/buttons";
import { Command, ChevronDown } from "lucide-react";

export default function CommandMenu() {
  const [search, setSearch] = useState("");
  
  const teams = [
    { id: "1", name: "Acme Inc.", type: "Organization", icon: "🏢" },
    { id: "2", name: "Marketing", type: "Department", icon: "📈" },
    { id: "3", name: "Engineering", type: "Department", icon: "⚙️" },
    { id: "4", name: "Personal", type: "Personal", icon: "👤" },
  ].filter(t => t.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="outline" className="w-[280px] justify-between text-zinc-600 dark:text-zinc-400">
          <span className="flex items-center gap-2">
            <Command className="h-4 w-4" />
            Switch Workspace...
          </span>
          <span className="text-xs text-zinc-400">⌘K</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu width="w-[280px]">
        <DropdownSearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search workspace..."
        />
        <DropdownSeparator />
        {teams.length > 0 ? (
           <div className="p-1">
             <DropdownLabel>Suggestions</DropdownLabel>
             {teams.map(team => (
               <DropdownItemRich
                 key={team.id}
                 title={team.name}
                 description={team.type}
                 icon={<span className="text-lg">{team.icon}</span>}
                 className="mb-1"
               />
             ))}
           </div>
        ) : (
          <div className="p-4 text-center text-sm text-zinc-500">
            No workspaces found.
          </div>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}`;

  const userPickerCode = `import { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSearchInput,
  DropdownItem
} from "@/zeroui/components/dropdowns";
import { Button } from "@/zeroui/components/buttons";
import { UserPlus, ChevronDown } from "lucide-react";

export default function UserPicker() {
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  const users = [
    { id: "1", name: "Alex Morgan", email: "alex@example.com", initials: "AM" },
    { id: "2", name: "Sarah Connor", email: "sarah@example.com", initials: "SC" },
    { id: "3", name: "James Bond", email: "007@mi6.gov", initials: "JB" },
  ].filter(u => u.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="outline" className="gap-2">
          <UserPlus className="h-4 w-4" />
          {selectedUser ? "User Selected" : "Assign User"}
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu width="w-72">
        <DropdownSearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Find user..."
        />
        <div className="max-h-[240px] overflow-y-auto p-1 custom-scrollbar">
          {users.map(user => (
            <DropdownItem 
              key={user.id} 
              onClick={() => setSelectedUser(user.name)}
              className="gap-3"
            >
              <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                {user.initials}
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-zinc-900 dark:text-zinc-100">{user.name}</span>
                <span className="text-xs text-zinc-500">{user.email}</span>
              </div>
            </DropdownItem>
          ))}
        </div>
      </DropdownMenu>
    </Dropdown>
  );
}`;

  const manualSteps = [
    {
      title: "Copy the searchable component code",
      description: "Create a new file and paste the following code:",
      filename: "components/dropdowns/dropdown-searchable.tsx",
      code: `"use client";

import React from "react";
import { Search } from "lucide-react";

interface DropdownSearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function DropdownSearchInput({ className = "", ...props }: DropdownSearchInputProps) {
  return (
    <div className="relative p-2 pb-1">
      <Search className="absolute left-5 top-1/2 h-4 w-4 -translate-y-[60%] text-zinc-400 dark:text-zinc-500" />
      <input
        className={\`w-full rounded-lg border border-zinc-200 bg-zinc-50 py-2 pl-9 pr-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-300 focus:ring-2 focus:ring-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-zinc-700 dark:focus:ring-zinc-800 \${className}\`}
        placeholder="Search..."
        onClick={(e) => e.stopPropagation()}
        {...props}
      />
    </div>
  );
}`,
    },
  ];

  // Live Preview Logic
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("en");

  // Logic for Command Menu
  const [cmdSearch, setCmdSearch] = useState("");
  const initialTeams = [
    { id: "1", name: "Acme Inc.", type: "Organization", icon: "🏢" },
    { id: "2", name: "Marketing", type: "Department", icon: "📈" },
    { id: "3", name: "Engineering", type: "Department", icon: "⚙️" },
    { id: "4", name: "Personal", type: "Personal", icon: "👤" },
  ];
  const filteredTeams = initialTeams.filter(t => t.name.toLowerCase().includes(cmdSearch.toLowerCase()));

  // Logic for User Picker
  const [userSearch, setUserSearch] = useState("");
  const users = [
    { id: "1", name: "Alex Morgan", email: "alex@example.com", initials: "AM" },
    { id: "2", name: "Sarah Connor", email: "sarah@example.com", initials: "SC" },
    { id: "3", name: "James Bond", email: "007@mi6.gov", initials: "JB" },
    { id: "4", name: "Ellen Ripley", email: "ripley@nostromo.com", initials: "ER" },
  ];
  const filteredUsers = users.filter(u => 
    u.name.toLowerCase().includes(userSearch.toLowerCase()) || 
    u.email.toLowerCase().includes(userSearch.toLowerCase())
  );
  
  const languages = [
    { label: "English", value: "en" },
    { label: "French", value: "fr" },
    { label: "German", value: "de" },
    { label: "Spanish", value: "es" },
    { label: "Portuguese", value: "pt" },
    { label: "Russian", value: "ru" },
    { label: "Japanese", value: "ja" },
    { label: "Chinese", value: "zh" },
  ];
  
  const filteredLanguages = languages.filter((lang) =>
    lang.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ComponentPageLayout
      componentName="Dropdown Search"
      description="A searchable dropdown for handling long lists of options with local filtering."
      componentItems={dropdownComponents}
      activeComponentId="dropdown-search"
    >
      <div className="space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            Searchable List
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Includes a sticky search input, empty states, and scrollable content area.
          </p>
          <ComponentPreview code={searchableCode}>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="outline" className="w-56 justify-between text-zinc-700 dark:text-zinc-300 border-2 border-zinc-800/20 dark:border-white/20">
                  {languages.find((l) => l.value === selected)?.label || "Select Language"}
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu width="w-56">
                <DropdownSearchInput
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search language..."
                  autoFocus
                />
                <DropdownSeparator />
                <div className="max-h-[200px] overflow-y-auto p-1 custom-scrollbar">
                  {filteredLanguages.length === 0 ? (
                     <div className="py-2.5 text-center text-sm text-zinc-500 dark:text-zinc-400">
                       No results found.
                     </div>
                  ) : (
                    filteredLanguages.map((lang) => (
                      <DropdownItem
                        key={lang.value}
                        onClick={() => setSelected(lang.value)}
                      >
                        <div className="flex w-full items-center justify-between">
                          <span>{lang.label}</span>
                          {selected === lang.value && (
                            <Check className="h-4 w-4 text-emerald-500" />
                          )}
                        </div>
                      </DropdownItem>
                    ))
                  )}
                </div>
              </DropdownMenu>
            </Dropdown>
          </ComponentPreview>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            Command Menu Style
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            A rich command palette interface with groupings and keyboard shortcuts, ideal for workspace switchers.
          </p>
          <ComponentPreview code={commandMenuCode}>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="outline" className="w-[280px] justify-between text-zinc-600 dark:text-zinc-400 border-2 border-zinc-800/20 dark:border-white/20">
                  <span className="flex items-center gap-2">
                    <Search className="h-4 w-4" />
                    Switch Workspace...
                  </span>
                  <span className="text-xs text-zinc-400">⌘K</span>
                </Button>
              </DropdownTrigger>
              <DropdownMenu width="w-[280px]">
                <DropdownSearchInput
                  value={cmdSearch}
                  onChange={(e) => setCmdSearch(e.target.value)}
                  placeholder="Search workspace..."
                />
                <DropdownSeparator />
                {filteredTeams.length > 0 ? (
                   <div className="p-1">
                     <DropdownLabel>Suggestions</DropdownLabel>
                     {filteredTeams.map(team => (
                       <DropdownItemRich
                         key={team.id}
                         title={team.name}
                         description={team.type}
                         icon={<span className="text-lg flex items-center justify-center">{team.icon}</span>}
                         className="mb-1"
                       />
                     ))}
                   </div>
                ) : (
                  <div className="p-4 text-center text-sm text-zinc-500">
                    No workspaces found.
                  </div>
                )}
              </DropdownMenu>
            </Dropdown>
          </ComponentPreview>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            User Assignment Picking
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            A specialized list for filtering users with avatar support and detailed metadata.
          </p>
          <ComponentPreview code={userPickerCode}>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="outline" className="gap-2 border-2 border-zinc-800/20 dark:border-white/20">
                  <User className="h-4 w-4" />
                  Assign User
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu width="w-72">
                <DropdownSearchInput
                  value={userSearch}
                  onChange={(e) => setUserSearch(e.target.value)}
                  placeholder="Find user..."
                />
                <div className="max-h-[240px] overflow-y-auto p-1 custom-scrollbar">
                  {filteredUsers.length === 0 ? (
                    <div className="py-4 text-center text-sm text-zinc-500">User not found</div>
                  ) : (
                    filteredUsers.map(user => (
                      <DropdownItem 
                        key={user.id} 
                        className="gap-3"
                      >
                        <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                          {user.initials}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-medium text-zinc-900 dark:text-zinc-100">{user.name}</span>
                          <span className="text-xs text-zinc-500">{user.email}</span>
                        </div>
                      </DropdownItem>
                    ))
                  )}
                </div>
              </DropdownMenu>
            </Dropdown>
          </ComponentPreview>
        </section>
      </div>

      <InstallationTabs
        componentName="dropdown-searchable"
        dependencies={["lucide-react"]}
        manualSteps={manualSteps}
      />

       <div className="space-y-4">
        <h3 className="text-xl font-semibold">DropdownSearchInput Props</h3>
        <PropsTable
          props={[
            { name: "value", type: "string", default: "undefined" },
            { name: "onChange", type: "(e) => void", default: "undefined" },
            { name: "placeholder", type: "string", default: '"Search..."' },
            { name: "autoFocus", type: "boolean", default: "false" },
            { name: "className", type: "string", default: "-" },
          ]}
        />
      </div>
    </ComponentPageLayout>
  );
}
