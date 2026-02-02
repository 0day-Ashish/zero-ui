"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
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
    filename: "components/pagination/pagination-base.tsx",
    code: `// See src/zeroui/components/pagination/pagination-base.tsx`,
  },
];

export default function PaginationPage() {
  return (
    <ComponentPageLayout
      componentName="Pagination Base"
      description="A flexible pagination component for navigating lists of content."
      componentItems={paginationComponents}
      activeComponentId="pagination-base"
      prevComponent={{ name: "Tabs Cyber", href: "/components/tabs/cyber" }}
      nextComponent={{ name: "Pagination Glass", href: "/components/pagination/glass" }}
    >
      <div className="space-y-4">
        <ComponentPreview code={`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}>
          <div className="flex items-center justify-center p-8 w-full">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </ComponentPreview>
      </div>

      <InstallationTabs
        componentName="pagination-base"
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
