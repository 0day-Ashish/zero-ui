"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import {
  PaginationCyber,
  PaginationCyberContent,
  PaginationCyberEllipsis,
  PaginationCyberItem,
  PaginationCyberLink,
  PaginationCyberNext,
  PaginationCyberPrevious,
} from "@/zeroui/components/pagination";

const paginationComponents = [
  { id: "pagination-base", name: "Pagination Base", href: "/components/pagination" },
  { id: "pagination-glass", name: "Pagination Glass", href: "/components/pagination/glass" },
  { id: "pagination-neon", name: "Pagination Neon", href: "/components/pagination/neon" },
  { id: "pagination-cyber", name: "Pagination Cyber", href: "/components/pagination/cyber" },
];

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Copy the code for the pagination component.",
    filename: "components/pagination/pagination-cyber.tsx",
    code: `// See src/zeroui/components/pagination/pagination-cyber.tsx`,
  },
];

export default function PaginationCyberPage() {
  return (
    <ComponentPageLayout
      componentName="Pagination Cyber"
      description="Tech-inspired pagination with angled edges and terminal font."
      componentItems={paginationComponents}
      activeComponentId="pagination-cyber"
      prevComponent={{ name: "Pagination Neon", href: "/components/pagination/neon" }}
      nextComponent={{ name: "Components", href: "/components" }}
    >
      <div className="space-y-4">
        <ComponentPreview code={`<PaginationCyber>
  <PaginationCyberContent>
    <PaginationCyberItem>
        <PaginationCyberPrevious href="#" />
    </PaginationCyberItem>
    <PaginationCyberItem>
        <PaginationCyberLink href="#" isActive>1</PaginationCyberLink>
    </PaginationCyberItem>
    <PaginationCyberItem>
        <PaginationCyberNext href="#" />
    </PaginationCyberItem>
  </PaginationCyberContent>
</PaginationCyber>`}>
          <div className="flex items-center justify-center p-12 w-full bg-zinc-950 rounded-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(250,204,21,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(250,204,21,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <PaginationCyber className="relative z-10">
              <PaginationCyberContent>
                <PaginationCyberItem>
                  <PaginationCyberPrevious href="#" />
                </PaginationCyberItem>
                <PaginationCyberItem>
                  <PaginationCyberLink href="#" isActive>
                    0x1
                  </PaginationCyberLink>
                </PaginationCyberItem>
                <PaginationCyberItem>
                  <PaginationCyberLink href="#">0x2</PaginationCyberLink>
                </PaginationCyberItem>
                <PaginationCyberItem>
                  <PaginationCyberLink href="#">0x3</PaginationCyberLink>
                </PaginationCyberItem>
                <PaginationCyberItem>
                  <PaginationCyberItem>
                    <PaginationCyberEllipsis />
                  </PaginationCyberItem>
                </PaginationCyberItem>
                <PaginationCyberItem>
                  <PaginationCyberNext href="#" />
                </PaginationCyberItem>
              </PaginationCyberContent>
            </PaginationCyber>
          </div>
        </ComponentPreview>
      </div>

      <InstallationTabs
        componentName="pagination-cyber"
        dependencies={["clsx", "tailwind-merge", "lucide-react"]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          { name: "className", type: "string", default: '""' },
        ]}
      />
    </ComponentPageLayout>
  );
}
