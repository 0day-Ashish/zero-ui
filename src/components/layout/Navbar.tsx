"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Command, Github, MoonIcon, SunIcon, ChevronDown, Menu, X } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  {
    href: "/",
    label: "Home",
    subLinks: [],
  },
  {
    href: "/Components",
    label: "Components",
    subLinks: [
      { href: "/Components/buttons", label: "Buttons", description: "Interactive button styles" },
      { href: "/Components/inputs", label: "Inputs", description: "Form input elements" },
      { href: "/Components/cards", label: "Cards", description: "Content containers" },
      { href: "/Components/modals", label: "Modals", description: "Dialog overlays" },
      { href: "/Components/alerts", label: "Alerts", description: "Notification banners" },
      { href: "/Components/badges", label: "Badges", description: "Status indicators" },
      { href: "/Components/avatars", label: "Avatars", description: "User profile images" },
      { href: "/Components/tooltips", label: "Tooltips", description: "Contextual hints" },
      { href: "/Components/dropdowns", label: "Dropdowns", description: "Selection menus" },
      { href: "/Components/tabs", label: "Tabs", description: "Content navigation" },
      { href: "/Components/accordions", label: "Accordions", description: "Collapsible sections" },
      { href: "/Components/progress", label: "Progress", description: "Loading indicators" },
      { href: "/Components/sliders", label: "Sliders", description: "Range selectors" },
      { href: "/Components/switches", label: "Switches", description: "Toggle controls" },
      { href: "/Components/tables", label: "Tables", description: "Data display grids" },
      { href: "/Components/pagination", label: "Pagination", description: "Page navigation" },
      { href: "/Components/breadcrumbs", label: "Breadcrumbs", description: "Path indicators" },
      { href: "/Components/spinners", label: "Spinners", description: "Loading animations" },
    ],
  },
  {
    href: "/Blocks",
    label: "Blocks",
    subLinks: [
      { href: "/Blocks/hero", label: "Hero Sections", description: "Landing page headers" },
      { href: "/Blocks/features", label: "Features", description: "Feature showcases" },
      { href: "/Blocks/pricing", label: "Pricing", description: "Pricing tables" },
      { href: "/Blocks/testimonials", label: "Testimonials", description: "Customer reviews" },
      { href: "/Blocks/cta", label: "Call to Action", description: "Conversion sections" },
      { href: "/Blocks/faq", label: "FAQ", description: "Question answers" },
      { href: "/Blocks/team", label: "Team", description: "Member profiles" },
      { href: "/Blocks/stats", label: "Statistics", description: "Number highlights" },
      { href: "/Blocks/newsletter", label: "Newsletter", description: "Email signups" },
      { href: "/Blocks/contact", label: "Contact", description: "Contact forms" },
      { href: "/Blocks/footers", label: "Footers", description: "Page footers" },
      { href: "/Blocks/headers", label: "Headers", description: "Navigation bars" },
    ],
  },
  {
    href: "/Mobile",
    label: "Mobile",
    subLinks: [
      { href: "/Mobile/navigation", label: "Navigation", description: "Mobile nav patterns" },
      { href: "/Mobile/bottom-sheets", label: "Bottom Sheets", description: "Slide-up panels" },
      { href: "/Mobile/gestures", label: "Gestures", description: "Touch interactions" },
      { href: "/Mobile/tab-bars", label: "Tab Bars", description: "Bottom navigation" },
      { href: "/Mobile/action-sheets", label: "Action Sheets", description: "Option menus" },
      { href: "/Mobile/pull-refresh", label: "Pull to Refresh", description: "Content refresh" },
      { href: "/Mobile/swipe-actions", label: "Swipe Actions", description: "Swipe gestures" },
      { href: "/Mobile/floating-buttons", label: "FAB", description: "Floating actions" },
      { href: "/Mobile/onboarding", label: "Onboarding", description: "App intros" },
    ],
  },
  {
    href: "/Showcase",
    label: "Showcase",
    subLinks: [
      { href: "/Showcase/websites", label: "Websites", description: "Built with ZeroUI" },
      { href: "/Showcase/apps", label: "Apps", description: "Mobile applications" },
      { href: "/Showcase/dashboards", label: "Dashboards", description: "Admin panels" },
      { href: "/Showcase/ecommerce", label: "E-commerce", description: "Online stores" },
      { href: "/Showcase/saas", label: "SaaS", description: "Software products" },
      { href: "/Showcase/portfolios", label: "Portfolios", description: "Personal sites" },
      { href: "/Showcase/submit", label: "Submit Yours", description: "Share your project" },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMac] = useState(() =>
    typeof navigator !== "undefined" &&
    navigator.platform.toUpperCase().indexOf("MAC") >= 0
  );
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);

  return (
    <nav
      className="w-full fixed top-0 left-0 right-0 z-50"
      onMouseLeave={() => setActiveDropdown(null)}
    >
      {/* Main navbar row */}
      <div className="px-6 py-4 flex items-center justify-start backdrop-blur-md bg-background/80">
        <Link href="/" className="text-3xl font-bold font-nuqun text-foreground">
          ZeroUI
        </Link>

        <ul className="hidden md:flex items-center gap-6 ml-10">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="relative"
              onMouseEnter={() =>
                link.subLinks.length > 0 && setActiveDropdown(link.label)
              }
            >
              <Link
                href={link.href}
                className={`flex items-center gap-1 transition-colors hover:text-zinc-900 dark:hover:text-gray-200 ${
                  pathname === link.href || activeDropdown === link.label
                    ? "text-foreground font-medium"
                    : "text-zinc-500 dark:text-gray-500"
                }`}
              >
                {link.label}
                {link.subLinks.length > 0 && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      activeDropdown === link.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex-1 flex justify-end items-center">
          <div className="hidden md:flex relative items-center">
            <input
              placeholder="Search components..."
              className="bg-zinc-100 dark:bg-zinc-900 text-foreground px-3 py-1.5 pr-16 rounded-md text-sm w-64 focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-700"
            />
            <kbd className="absolute right-2 px-1.5 py-0.5 text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded border border-zinc-300 dark:border-zinc-700 inline-flex items-center gap-0.5">
              {isMac ? <Command size={12} /> : "Ctrl"} K
            </kbd>
          </div>

          <div className="hidden md:inline-flex ml-4 items-center gap-2 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 rounded-md text-sm text-zinc-700 dark:text-gray-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 cursor-pointer">
            <Github size={16} /> Stars on Github
          </div>

          <button
            onClick={toggleTheme}
            className="relative rounded-full ml-2 p-2 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 cursor-pointer overflow-hidden"
          >
            <MoonIcon
              size={20}
              className={`absolute text-zinc-700 dark:text-gray-300 transition-all duration-300 ${
                isDark ? "rotate-0 opacity-100 scale-100" : "rotate-90 opacity-0 scale-0"
              }`}
            />
            <SunIcon
              size={20}
              className={`text-zinc-700 dark:text-gray-300 transition-all duration-300 ${
                isDark ? "-rotate-90 opacity-0 scale-0" : "rotate-0 opacity-100 scale-100"
              }`}
            />
          </button>

          {/* Hamburger menu button - mobile only */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden ml-2 p-2 rounded-md bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Dropdown panel - desktop only */}
      <div
        className={`hidden md:block overflow-auto transition-all duration-300 ease-in-out backdrop-blur-md bg-background/80 ${
          activeDropdown ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex">
          <div className="grid grid-flow-col grid-rows-6 gap-x-12 gap-y-1 auto-cols-max">
            {navLinks
              .find((link) => link.label === activeDropdown)
              ?.subLinks.map((subLink) => (
                <Link
                  key={subLink.href}
                  href={subLink.href}
                  className="group py-2 px-3 relative"
                >
                  <span className="text-zinc-700 dark:text-gray-300 text-sm group-hover:text-black dark:group-hover:text-white transition-colors">
                    {subLink.label}
                  </span>
                  <span className="absolute bottom-1 left-3 right-3 h-px bg-black dark:bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 top-18 z-40 transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-background shadow-xl transform transition-transform duration-300 overflow-y-auto ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            {/* Search */}
            <div className="relative mb-6">
              <input
                placeholder="Search components..."
                className="w-full bg-zinc-100 dark:bg-zinc-900 text-foreground px-3 py-2 pr-16 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-700"
              />
              <kbd className="absolute right-2 top-1/2 -translate-y-1/2 px-1.5 py-0.5 text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded border border-zinc-300 dark:border-zinc-700 inline-flex items-center gap-0.5">
                {isMac ? <Command size={12} /> : "Ctrl"} K
              </kbd>
            </div>

            {/* Navigation links */}
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.subLinks.length > 0 ? (
                    <div>
                      <button
                        onClick={() =>
                          setMobileActiveDropdown(
                            mobileActiveDropdown === link.label ? null : link.label
                          )
                        }
                        className={`w-full flex items-center justify-between py-2 px-3 rounded-md transition-colors ${
                          pathname === link.href
                            ? "text-foreground font-medium bg-zinc-100 dark:bg-zinc-900"
                            : "text-zinc-500 dark:text-gray-500 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            mobileActiveDropdown === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          mobileActiveDropdown === link.label
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <ul className="pl-4 py-2 space-y-1">
                          {link.subLinks.map((subLink) => (
                            <li key={subLink.href}>
                              <Link
                                href={subLink.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-2 px-3 text-sm text-zinc-600 dark:text-gray-400 hover:text-foreground rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                              >
                                {subLink.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-2 px-3 rounded-md transition-colors ${
                        pathname === link.href
                          ? "text-foreground font-medium bg-zinc-100 dark:bg-zinc-900"
                          : "text-zinc-500 dark:text-gray-500 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* GitHub button */}
            <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <a
                href="https://github.com"
                className="inline-flex items-center gap-2 px-3 py-2 bg-zinc-100 dark:bg-zinc-900 rounded-md text-sm text-zinc-700 dark:text-gray-300 hover:bg-zinc-200 dark:hover:bg-zinc-800"
              >
                <Github size={16} /> Stars on Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
