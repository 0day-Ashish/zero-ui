"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, FileText, Box, Layers, Smartphone, Layout, Star } from "lucide-react";

interface SearchItem {
  name: string;
  href: string;
  category: string;
  icon: React.ReactNode;
}

const searchItems: SearchItem[] = [
  // Docs
  { name: "Getting Started", href: "/docs", category: "Docs", icon: <FileText size={16} /> },
  { name: "Customization", href: "/docs", category: "Docs", icon: <FileText size={16} /> },
  { name: "Advanced Guides", href: "/docs", category: "Docs", icon: <FileText size={16} /> },
  { name: "Changelogs", href: "/docs", category: "Docs", icon: <FileText size={16} /> },

  // Components
  { name: "Buttons", href: "/components/buttons", category: "Components", icon: <Box size={16} /> },
  { name: "Inputs", href: "/components/inputs", category: "Components", icon: <Box size={16} /> },
  { name: "Cards", href: "/components/cards", category: "Components", icon: <Box size={16} /> },
  { name: "Modals", href: "/components/modals", category: "Components", icon: <Box size={16} /> },
  { name: "Alerts", href: "/components/alerts", category: "Components", icon: <Box size={16} /> },
  { name: "Badges", href: "/components/badges", category: "Components", icon: <Box size={16} /> },
  { name: "Avatars", href: "/components/avatars", category: "Components", icon: <Box size={16} /> },
  { name: "Tooltips", href: "/components/tooltips", category: "Components", icon: <Box size={16} /> },
  { name: "Dropdowns", href: "/components/dropdowns", category: "Components", icon: <Box size={16} /> },
  { name: "Tabs", href: "/components/tabs", category: "Components", icon: <Box size={16} /> },
  { name: "Accordions", href: "/components/accordions", category: "Components", icon: <Box size={16} /> },
  { name: "Progress", href: "/components/progress", category: "Components", icon: <Box size={16} /> },
  { name: "Sliders", href: "/components/sliders", category: "Components", icon: <Box size={16} /> },
  { name: "Switches", href: "/components/switches", category: "Components", icon: <Box size={16} /> },
  { name: "Tables", href: "/components/tables", category: "Components", icon: <Box size={16} /> },
  { name: "Pagination", href: "/components/pagination", category: "Components", icon: <Box size={16} /> },
  { name: "Breadcrumbs", href: "/components/breadcrumbs", category: "Components", icon: <Box size={16} /> },
  { name: "Spinners", href: "/components/spinners", category: "Components", icon: <Box size={16} /> },

  // Blocks
  { name: "Hero Sections", href: "/blocks/hero", category: "Blocks", icon: <Layers size={16} /> },
  { name: "Features", href: "/blocks/features", category: "Blocks", icon: <Layers size={16} /> },
  { name: "Pricing", href: "/blocks/pricing", category: "Blocks", icon: <Layers size={16} /> },
  { name: "Testimonials", href: "/blocks/testimonials", category: "Blocks", icon: <Layers size={16} /> },
  { name: "Call to Action", href: "/blocks/cta", category: "Blocks", icon: <Layers size={16} /> },
  { name: "FAQ", href: "/blocks/faq", category: "Blocks", icon: <Layers size={16} /> },
  { name: "Team", href: "/blocks/team", category: "Blocks", icon: <Layers size={16} /> },
  { name: "Statistics", href: "/blocks/stats", category: "Blocks", icon: <Layers size={16} /> },
  { name: "Newsletter", href: "/blocks/newsletter", category: "Blocks", icon: <Layers size={16} /> },
  { name: "Contact", href: "/blocks/contact", category: "Blocks", icon: <Layers size={16} /> },
  { name: "Footers", href: "/blocks/footers", category: "Blocks", icon: <Layers size={16} /> },
  { name: "Headers", href: "/blocks/headers", category: "Blocks", icon: <Layers size={16} /> },

  // Mobile
  { name: "Navigation", href: "/mobile/navigation", category: "Mobile", icon: <Smartphone size={16} /> },
  { name: "Bottom Sheets", href: "/mobile/bottom-sheets", category: "Mobile", icon: <Smartphone size={16} /> },
  { name: "Gestures", href: "/mobile/gestures", category: "Mobile", icon: <Smartphone size={16} /> },
  { name: "Tab Bars", href: "/mobile/tab-bars", category: "Mobile", icon: <Smartphone size={16} /> },
  { name: "Action Sheets", href: "/mobile/action-sheets", category: "Mobile", icon: <Smartphone size={16} /> },

  // Templates
  { name: "E-commerce Template", href: "/templates/ecommerce", category: "Templates", icon: <Layout size={16} /> },
  { name: "Landing Pages", href: "/templates/landing", category: "Templates", icon: <Layout size={16} /> },
  { name: "Dashboards", href: "/templates/dashboard", category: "Templates", icon: <Layout size={16} /> },
  { name: "Portfolios", href: "/templates/portfolio", category: "Templates", icon: <Layout size={16} /> },
  { name: "Blogs", href: "/templates/blog", category: "Templates", icon: <Layout size={16} /> },
  { name: "SaaS", href: "/templates/saas", category: "Templates", icon: <Layout size={16} /> },

  // Showcase
  { name: "Showcase", href: "/showcase", category: "Pages", icon: <Star size={16} /> },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const filteredItems = query
    ? searchItems.filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : searchItems.slice(0, 8);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
        e.preventDefault();
        router.push(filteredItems[selectedIndex].href);
        onClose();
        setQuery("");
      } else if (e.key === "Escape") {
        onClose();
        setQuery("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, router, onClose]);

  if (!isOpen) return null;

  const handleItemClick = (href: string) => {
    router.push(href);
    onClose();
    setQuery("");
  };

  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, SearchItem[]>);

  let flatIndex = 0;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={() => {
          onClose();
          setQuery("");
        }}
      />

      {/* Modal - Glass Design */}
      <div className="relative w-full max-w-xl mx-4 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        {/* Glass background */}
        <div className="absolute inset-0 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 dark:from-white/5 to-transparent pointer-events-none" />
        <div className="absolute inset-0 border border-white/20 dark:border-white/10 rounded-2xl pointer-events-none" />

        {/* Content */}
        <div className="relative">
          {/* Search Input */}
          <div className="flex items-center gap-3 px-4 py-4 border-b border-zinc-200/50 dark:border-white/10">
            <Search size={20} className="text-zinc-500 dark:text-zinc-400" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search components, blocks, templates..."
              className="flex-1 bg-transparent text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none text-sm"
            />
            <button
              onClick={() => {
                onClose();
                setQuery("");
              }}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-200/50 dark:hover:bg-white/10 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-[60vh] overflow-y-auto py-2">
            {filteredItems.length === 0 ? (
              <div className="px-4 py-8 text-center text-zinc-500 dark:text-zinc-400">
                No results found for &quot;{query}&quot;
              </div>
            ) : (
              Object.entries(groupedItems).map(([category, items]) => (
                <div key={category}>
                  <div className="px-4 py-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    {category}
                  </div>
                  {items.map((item) => {
                    const currentIndex = flatIndex++;
                    return (
                      <button
                        key={item.href + item.name}
                        onClick={() => handleItemClick(item.href)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-all ${
                          selectedIndex === currentIndex
                            ? "bg-zinc-200/60 dark:bg-white/10 backdrop-blur-sm"
                            : "hover:bg-zinc-100/50 dark:hover:bg-white/5"
                        }`}
                      >
                        <span className="text-zinc-500 dark:text-zinc-400">{item.icon}</span>
                        <span className="text-sm text-zinc-800 dark:text-white">{item.name}</span>
                      </button>
                    );
                  })}
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-3 border-t border-zinc-200/50 dark:border-white/10 flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-zinc-200/50 dark:bg-white/10 rounded text-[10px] backdrop-blur-sm">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-zinc-200/50 dark:bg-white/10 rounded text-[10px] backdrop-blur-sm">↓</kbd>
              to navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-zinc-200/50 dark:bg-white/10 rounded text-[10px] backdrop-blur-sm">↵</kbd>
              to select
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-zinc-200/50 dark:bg-white/10 rounded text-[10px] backdrop-blur-sm">esc</kbd>
              to close
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
