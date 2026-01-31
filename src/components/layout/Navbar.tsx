"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Command, Github, MoonIcon, SunIcon, ChevronDown, Menu, X, Star } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const GITHUB_REPO = "0day-Ashish/zero-ui";

const navLinks = [

  {
    href: "/docs",
    label: "Docs",
    subLinks: [
      { href: "/docs", label: "Getting Started", description: "Setup and installation" },
      { href: "/docs", label: "Customization", description: "Theming and styling" },
      { href: "/docs", label: "Advanced Guides", description: "In-depth tutorials" },
      { href: "/docs", label: "Changelogs", description: "Update logs" },
    ],
  },


  {
    href: "/components",
    label: "Components",
    subLinks: [
      { href: "/components/buttons", label: "Buttons", description: "Interactive button styles" },
      { href: "/components/inputs", label: "Inputs", description: "Form input elements" },
      { href: "/components/cards", label: "Cards", description: "Content containers" },
      { href: "/components/modals", label: "Modals", description: "Dialog overlays" },
      { href: "/components/alerts", label: "Alerts", description: "Notification banners" },
      { href: "/components/badges", label: "Badges", description: "Status indicators" },
      { href: "/components/avatars", label: "Avatars", description: "User profile images" },
      { href: "/components/tooltips", label: "Tooltips", description: "Contextual hints" },
      { href: "/components/dropdowns", label: "Dropdowns", description: "Selection menus" },
      { href: "/components/tabs", label: "Tabs", description: "Content navigation" },
      { href: "/components/accordions", label: "Accordions", description: "Collapsible sections" },
      { href: "/components/progress", label: "Progress", description: "Loading indicators" },
      { href: "/components/sliders", label: "Sliders", description: "Range selectors" },
      { href: "/components/switches", label: "Switches", description: "Toggle controls" },
      { href: "/components/tables", label: "Tables", description: "Data display grids" },
      { href: "/components/pagination", label: "Pagination", description: "Page navigation" },
      { href: "/components/breadcrumbs", label: "Breadcrumbs", description: "Path indicators" },
      { href: "/components/spinners", label: "Spinners", description: "Loading animations" },
    ],
  },
  {
    href: "/blocks",
    label: "Blocks",
    subLinks: [
      { href: "/blocks/hero", label: "Hero Sections", description: "Landing page headers" },
      { href: "/blocks/features", label: "Features", description: "Feature showcases" },
      { href: "/blocks/pricing", label: "Pricing", description: "Pricing tables" },
      { href: "/blocks/testimonials", label: "Testimonials", description: "Customer reviews" },
      { href: "/blocks/cta", label: "Call to Action", description: "Conversion sections" },
      { href: "/blocks/faq", label: "FAQ", description: "Question answers" },
      { href: "/blocks/team", label: "Team", description: "Member profiles" },
      { href: "/blocks/stats", label: "Statistics", description: "Number highlights" },
      { href: "/blocks/newsletter", label: "Newsletter", description: "Email signups" },
      { href: "/blocks/contact", label: "Contact", description: "Contact forms" },
      { href: "/blocks/footers", label: "Footers", description: "Page footers" },
      { href: "/blocks/headers", label: "Headers", description: "Navigation bars" },
    ],
  },
  {
    href: "/mobile",
    label: "Mobile",
    subLinks: [
      { href: "/mobile/navigation", label: "Navigation", description: "Mobile nav patterns" },
      { href: "/mobile/bottom-sheets", label: "Bottom Sheets", description: "Slide-up panels" },
      { href: "/mobile/gestures", label: "Gestures", description: "Touch interactions" },
      { href: "/mobile/tab-bars", label: "Tab Bars", description: "Bottom navigation" },
      { href: "/mobile/action-sheets", label: "Action Sheets", description: "Option menus" },
      { href: "/mobile/pull-refresh", label: "Pull to Refresh", description: "Content refresh" },
      { href: "/mobile/swipe-actions", label: "Swipe Actions", description: "Swipe gestures" },
      { href: "/mobile/floating-buttons", label: "FAB", description: "Floating actions" },
      { href: "/mobile/onboarding", label: "Onboarding", description: "App intros" },
    ],
  },
  {
    href: "/showcase",
    label: "Showcase",
    subLinks: [
      { href: "/showcase/websites", label: "Websites", description: "Built with ZeroUI" },
      { href: "/showcase/apps", label: "Apps", description: "Mobile applications" },
      { href: "/showcase/dashboards", label: "Dashboards", description: "Admin panels" },
      { href: "/showcase/ecommerce", label: "E-commerce", description: "Online stores" },
      { href: "/showcase/saas", label: "SaaS", description: "Software products" },
      { href: "/showcase/portfolios", label: "Portfolios", description: "Personal sites" },
      { href: "/showcase/submit", label: "Submit Yours", description: "Share your project" },
    ],
  },
    {
    href: "/templates",
    label: "Templates",
    subLinks: [
      { href: "/templates/ecommerce", label: "E-commerce", description: "Online store templates" },
      { href: "/templates/landing", label: "Landing Pages", description: "Marketing page templates" },
      { href: "/templates/dashboard", label: "Dashboards", description: "Admin panel templates" },
      { href: "/templates/portfolio", label: "Portfolios", description: "Personal portfolio templates" },
      { href: "/templates/blog", label: "Blogs", description: "Blog and magazine templates" },
      { href: "/templates/saas", label: "SaaS", description: "Software product templates" },
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
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    async function fetchStars() {
      try {
        const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}`);
        if (res.ok) {
          const data = await res.json();
          setStars(data.stargazers_count);
        }
      } catch (error) {
        console.error("Failed to fetch GitHub stars:", error);
      }
    }
    fetchStars();
  }, []);

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
            <Github size={16} /> 
            <Star size={14} className="fill-current text-amber-300" />
            {stars !== null ? stars.toLocaleString() : "—"}
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
