"use client";

import React from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import {
  PaginationGlass,
  PaginationGlassContent,
  PaginationGlassEllipsis,
  PaginationGlassItem,
  PaginationGlassLink,
  PaginationGlassNext,
  PaginationGlassPrevious,
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
    filename: "components/pagination/pagination-glass.tsx",
    code: `// See src/zeroui/components/pagination/pagination-glass.tsx`,
  },
];

export default function PaginationGlassPage() {
  return (
    <ComponentPageLayout
      componentName="Pagination Glass"
      description="Frosted glass pagination controls for premium UIs."
      componentItems={paginationComponents}
      activeComponentId="pagination-glass"
      prevComponent={{ name: "Pagination Base", href: "/components/pagination" }}
      nextComponent={{ name: "Pagination Neon", href: "/components/pagination/neon" }}
    >
      <div className="space-y-4">
        <ComponentPreview code={`<PaginationGlass>
  <PaginationGlassContent>
    <PaginationGlassItem>
        <PaginationGlassPrevious href="#" />
    </PaginationGlassItem>
    <PaginationGlassItem>
        <PaginationGlassLink href="#" isActive>1</PaginationGlassLink>
    </PaginationGlassItem>
    <PaginationGlassItem>
        <PaginationGlassLink href="#">2</PaginationGlassLink>
    </PaginationGlassItem>
    <PaginationGlassItem>
        <PaginationGlassNext href="#" />
    </PaginationGlassItem>
  </PaginationGlassContent>
</PaginationGlass>`}>
          <div className="flex items-center justify-center p-12 w-full bg-gradient-to-tr from-pink-500/20 to-violet-500/20 rounded-xl relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/30 rounded-full blur-3xl mix-blend-overlay" />

            <PaginationGlass>
              <PaginationGlassContent>
                <PaginationGlassItem>
                  <PaginationGlassPrevious href="#" />
                </PaginationGlassItem>
                <PaginationGlassItem>
                  <PaginationGlassLink href="#" isActive>
                    1
                  </PaginationGlassLink>
                </PaginationGlassItem>
                <PaginationGlassItem>
                  <PaginationGlassLink href="#">2</PaginationGlassLink>
                </PaginationGlassItem>
                <PaginationGlassItem>
                  <PaginationGlassLink href="#">3</PaginationGlassLink>
                </PaginationGlassItem>
                <PaginationGlassItem>
                  <PaginationGlassEllipsis />
                </PaginationGlassItem>
                <PaginationGlassItem>
                  <PaginationGlassNext href="#" />
                </PaginationGlassItem>
              </PaginationGlassContent>
            </PaginationGlass>
          </div>
        </ComponentPreview>
      </div>

      <InstallationTabs
        componentName="pagination-glass"
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
