"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ComponentItem {
  id: string;
  name: string;
  href: string;
}

interface SidebarSection {
  title: string;
  items: { name: string; href: string; isNew?: boolean }[];
}

interface ComponentPageLayoutProps {
  componentName: string;
  description: string;
  componentItems?: ComponentItem[];
  activeComponentId?: string;
  sidebarSections?: SidebarSection[];
  prevComponent?: { name: string; href: string };
  nextComponent?: { name: string; href: string };
  children: React.ReactNode;
}

const defaultSidebarSections: SidebarSection[] = [
  {
    title: "Sections",
    items: [
      { name: "Introduction", href: "/docs" },
      { name: "Components", href: "/components" },
      { name: "Installation", href: "/docs/installation" },
      { name: "Directory", href: "/docs/directory" },
      { name: "Changelog", href: "/docs/changelog", isNew: true },
    ],
  },
];

export default function ComponentPageLayout({
  componentName,
  description,
  componentItems = [],
  activeComponentId,
  sidebarSections = defaultSidebarSections,
  prevComponent,
  nextComponent,
  children,
}: ComponentPageLayoutProps) {

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="flex">
        {/* Left Sidebar */}
        <aside className="hidden lg:block w-56 shrink-0 border-r border-zinc-200 dark:border-zinc-800 min-h-screen">
          <div className="sticky top-0 p-6 space-y-8">
            {/* Sidebar Sections */}
            {sidebarSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm text-zinc-500 dark:text-zinc-500 mb-3">{section.title}</h3>
                <nav className="relative pl-3">
                  {/* Vertical connecting line */}
                  <div className="absolute left-0 top-3 bottom-3 w-px bg-zinc-200 dark:bg-zinc-800" />

                  <div className="space-y-0">
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="relative flex items-center gap-2 pl-4 pr-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors group"
                      >
                        {item.name}
                        {item.isNew && (
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        )}
                      </Link>
                    ))}
                  </div>
                </nav>
              </div>
            ))}

            {/* Component Items */}
            {componentItems.length > 0 && (() => {
              const activeIndex = componentItems.findIndex(item => item.id === activeComponentId);
              return (
                <div>
                  <h3 className="text-sm text-zinc-500 dark:text-zinc-500 mb-3">Components</h3>
                  <nav className="relative pl-3">
                    {/* Base vertical line (gray) */}
                    <div className="absolute left-0 top-3 bottom-3 w-px bg-zinc-200 dark:bg-zinc-800" />

                    <div className="space-y-0">
                      {componentItems.map((item, index) => {
                        const isActive = item.id === activeComponentId;
                        const isBeforeActive = activeIndex >= 0 && index < activeIndex;
                        const isFirst = index === 0;
                        return (
                          <Link
                            key={item.id}
                            href={item.href}
                            className={`relative flex items-center pl-4 pr-3 py-2 text-sm transition-colors group ${
                              isActive
                                ? "text-zinc-900 dark:text-white font-medium"
                                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                            }`}
                          >
                            {/* Highlighted vertical segment for items before active */}
                            {isBeforeActive && (
                              <span
                                className={`absolute -left-3 w-px bg-zinc-900 dark:bg-white ${
                                  isFirst ? "-top-3" : "top-0"
                                } bottom-0`}
                              />
                            )}
                            {/* Curved branch - only for active item */}
                            {isActive && (
                              <span className="absolute -left-3 top-0 w-3 h-1/2 border-l border-b rounded-bl-lg border-zinc-900 dark:border-white" />
                            )}
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                  </nav>
                </div>
              );
            })()}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-6 py-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-3xl font-semibold text-zinc-900 dark:text-white mb-2">
                  {componentName}
                </h1>
                <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                {prevComponent && (
                  <Link
                    href={prevComponent.href}
                    className="p-2 rounded-md bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors border border-zinc-200 dark:border-zinc-700 shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Link>
                )}
                {nextComponent && (
                  <Link
                    href={nextComponent.href}
                    className="p-2 rounded-md bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors border border-zinc-200 dark:border-zinc-700 shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>

            {/* Content */}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
