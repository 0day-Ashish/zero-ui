import Link from "next/link";

// Side navigation structure
const sideNavItems = [
  {
    title: "Getting Started",
    items: [
      { name: "Introduction", href: "/docs/introduction", active: true },
      { name: "Installation", href: "/docs/installation" },
      { name: "Project Structure", href: "/docs/structure" },
      { name: "Styling", href: "/docs/styling" },
    ],
  },
  {
    title: "Components",
    items: [
      { name: "Buttons", href: "/docs/components/buttons" },
      { name: "Inputs", href: "/docs/components/inputs" },
      { name: "Cards", href: "/docs/components/cards" },
      { name: "Modals", href: "/docs/components/modals" },
      { name: "Alerts", href: "/docs/components/alerts" },
    ],
  },
  {
    title: "Blocks",
    items: [
      { name: "Hero Sections", href: "/docs/blocks/hero" },
      { name: "Features", href: "/docs/blocks/features" },
      { name: "Pricing", href: "/docs/blocks/pricing" },
      { name: "Testimonials", href: "/docs/blocks/testimonials" },
    ],
  },
  {
    title: "Customization",
    items: [
      { name: "Theming", href: "/docs/theming" },
      { name: "Dark Mode", href: "/docs/dark-mode" },
      { name: "Typography", href: "/docs/typography" },
      { name: "Colors", href: "/docs/colors" },
    ],
  },
];

// Quick navigation (table of contents)
const quickNavItems = [
  { name: "Overview", href: "#overview" },
  { name: "Features", href: "#features" },
  { name: "Quick Start", href: "#quick-start" },
  { name: "Installation", href: "#installation" },
  { name: "Usage", href: "#usage" },
  { name: "Next Steps", href: "#next-steps" },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen w-full">
      <div className="max-w-[90rem] mx-auto flex">
        {/* Side Navigation */}
        <aside className="hidden lg:block w-64 shrink-0 border-r border-zinc-200 dark:border-zinc-800 relative">
          <div className="sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto py-8 px-4">
            <nav className="space-y-6">
              {sideNavItems.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                    {section.title}
                  </h3>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={`block px-3 py-1.5 text-sm rounded-md transition-colors
                            ${item.active
                              ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-medium"
                              : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                            }`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 px-6 lg:px-12 py-8">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-6">
              <Link href="/docs" className="hover:text-zinc-900 dark:hover:text-white">
                Docs
              </Link>
              <span>/</span>
              <span className="text-zinc-900 dark:text-white">Introduction</span>
            </div>

            {/* Title */}
            <h1 id="overview" className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Introduction
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              Welcome to ZeroUI - a modern, beautiful component library for building stunning web applications.
            </p>

            {/* Content Sections */}
            <section id="features" className="mb-12">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                Features
              </h2>
              <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span><strong className="text-zinc-900 dark:text-white">Beautiful by default</strong> - Carefully crafted components that look great out of the box</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span><strong className="text-zinc-900 dark:text-white">Dark mode ready</strong> - Full dark mode support with smooth transitions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span><strong className="text-zinc-900 dark:text-white">Fully customizable</strong> - Easy to customize with Tailwind CSS</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span><strong className="text-zinc-900 dark:text-white">TypeScript first</strong> - Built with TypeScript for better developer experience</span>
                </li>
              </ul>
            </section>

            <section id="quick-start" className="mb-12">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                Quick Start
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Get started with ZeroUI in minutes. Follow the steps below to install and use components in your project.
              </p>
            </section>

            <section id="installation" className="mb-12">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                Installation
              </h2>
              <div className="bg-zinc-900 dark:bg-zinc-950 rounded-lg p-4 mb-4">
                <code className="text-sm text-zinc-100">
                  npm install zeroui
                </code>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">
                Or use your preferred package manager:
              </p>
              <div className="bg-zinc-900 dark:bg-zinc-950 rounded-lg p-4 mt-4 space-y-2">
                <code className="block text-sm text-zinc-100">yarn add zeroui</code>
                <code className="block text-sm text-zinc-100">pnpm add zeroui</code>
              </div>
            </section>

            <section id="usage" className="mb-12">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                Usage
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Import and use components in your React application:
              </p>
              <div className="bg-zinc-900 dark:bg-zinc-950 rounded-lg p-4">
                <pre className="text-sm text-zinc-100 overflow-x-auto">
{`import { Button } from 'zeroui'

export default function App() {
  return (
    <Button variant="primary">
      Click me
    </Button>
  )
}`}
                </pre>
              </div>
            </section>

            <section id="next-steps" className="mb-12">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                Next Steps
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/docs/components/buttons"
                  className="block p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                >
                  <h3 className="font-medium text-zinc-900 dark:text-white mb-1">Components</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Explore all available components</p>
                </Link>
                <Link
                  href="/docs/theming"
                  className="block p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                >
                  <h3 className="font-medium text-zinc-900 dark:text-white mb-1">Theming</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Customize the look and feel</p>
                </Link>
              </div>
            </section>

            {/* Pagination */}
            <div className="flex items-center justify-between pt-8 border-t border-zinc-200 dark:border-zinc-800">
              <div></div>
              <Link
                href="/docs/installation"
                className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              >
                Installation
                <span>→</span>
              </Link>
            </div>
          </div>
        </main>

        {/* Quick Navigation (Table of Contents) */}
        <aside className="hidden xl:block w-56 shrink-0 relative">
          <div className="sticky top-20 py-8 px-4">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-3">
              On this page
            </h3>
            <nav>
              <ul className="space-y-2">
                {quickNavItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="block text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
}
