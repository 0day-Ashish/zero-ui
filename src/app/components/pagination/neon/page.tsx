"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import {
  PaginationNeon,
  PaginationNeonContent,
  PaginationNeonEllipsis,
  PaginationNeonItem,
  PaginationNeonLink,
  PaginationNeonNext,
  PaginationNeonPrevious,
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
    filename: "components/pagination/pagination-neon.tsx",
    code: `// See src/zeroui/components/pagination/pagination-neon.tsx`,
  },
];

export default function PaginationNeonPage() {
  return (
    <ComponentPageLayout
      componentName="Pagination Neon"
      description="High-contrast glowing controls for dark mode interfaces."
      componentItems={paginationComponents}
      activeComponentId="pagination-neon"
      prevComponent={{ name: "Pagination Glass", href: "/components/pagination/glass" }}
      nextComponent={{ name: "Pagination Cyber", href: "/components/pagination/cyber" }}
    >
      <div className="space-y-4">
        <ComponentPreview code={`<PaginationNeon>
  <PaginationNeonContent>
    <PaginationNeonItem>
        <PaginationNeonPrevious href="#" />
    </PaginationNeonItem>
    <PaginationNeonItem>
        <PaginationNeonLink href="#" isActive>1</PaginationNeonLink>
    </PaginationNeonItem>
    <PaginationNeonItem>
        <PaginationNeonNext href="#" />
    </PaginationNeonItem>
  </PaginationNeonContent>
</PaginationNeon>`}>
          <div className="flex items-center justify-center p-12 w-full bg-zinc-950 rounded-xl relative">
            <div className="absolute inset-0 bg-cyan-500/5 blur-3xl rounded-xl" />

            <PaginationNeon className="relative z-10">
              <PaginationNeonContent>
                <PaginationNeonItem>
                  <PaginationNeonPrevious href="#" />
                </PaginationNeonItem>
                <PaginationNeonItem>
                  <PaginationNeonLink href="#" isActive>
                    01
                  </PaginationNeonLink>
                </PaginationNeonItem>
                <PaginationNeonItem>
                  <PaginationNeonLink href="#">02</PaginationNeonLink>
                </PaginationNeonItem>
                <PaginationNeonItem>
                  <PaginationNeonLink href="#">03</PaginationNeonLink>
                </PaginationNeonItem>
                <PaginationNeonItem>
                  <PaginationNeonEllipsis />
                </PaginationNeonItem>
                <PaginationNeonItem>
                  <PaginationNeonNext href="#" />
                </PaginationNeonItem>
              </PaginationNeonContent>
            </PaginationNeon>
          </div>
        </ComponentPreview>
      </div>

      <InstallationTabs
        componentName="pagination-neon"
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
