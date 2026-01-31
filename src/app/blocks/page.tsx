import Link from "next/link";

interface BlockItem {
  name: string;
  href: string;
  description: string;
  count: number;
  colSpan: 1 | 2;
}

// Ordered for proper bento grid layout (3 columns)
// Row pattern: 2+1, 1+1+1, 2+1, 1+1+1, 2+1
const blocks: BlockItem[] = [
  // Row 1: 2 + 1
  { name: "Hero Sections", href: "/blocks/hero", description: "Eye-catching landing headers", count: 24, colSpan: 2 },
  { name: "Features", href: "/blocks/features", description: "Showcase product highlights", count: 18, colSpan: 1 },
  // Row 2: 1 + 1 + 1
  { name: "Pricing", href: "/blocks/pricing", description: "Plans and pricing tables", count: 12, colSpan: 1 },
  { name: "Testimonials", href: "/blocks/testimonials", description: "Customer reviews and quotes", count: 15, colSpan: 1 },
  { name: "FAQ", href: "/blocks/faq", description: "Questions and answers", count: 8, colSpan: 1 },
  // Row 3: 2 + 1
  { name: "Call to Action", href: "/blocks/cta", description: "Conversion focused sections", count: 20, colSpan: 2 },
  { name: "Team", href: "/blocks/team", description: "Team member showcases", count: 10, colSpan: 1 },
  // Row 4: 1 + 1 + 1
  { name: "Statistics", href: "/blocks/statistics", description: "Numbers and metrics", count: 14, colSpan: 1 },
  { name: "Newsletter", href: "/blocks/newsletter", description: "Email signup forms", count: 9, colSpan: 1 },
  { name: "Contact", href: "/blocks/contact", description: "Contact forms and info", count: 16, colSpan: 1 },
  // Row 5: 2 + 1
  { name: "Footers", href: "/blocks/footers", description: "Page footer layouts", count: 22, colSpan: 2 },
  { name: "Headers", href: "/blocks/headers", description: "Navigation and headers", count: 18, colSpan: 1 },
];

function BlockCard({ name, href, description, count, colSpan }: BlockItem) {
  return (
    <Link
      href={href}
      className={`group block h-80 ${colSpan === 2 ? "lg:col-span-2" : "col-span-1"}`}
    >
      <div className="relative w-full h-full rounded-xl overflow-hidden
        bg-zinc-100 dark:bg-zinc-900
        border border-zinc-200 dark:border-zinc-800
        hover:border-zinc-400 dark:hover:border-zinc-500
        transition-all duration-300
        shadow-[inset_0_2px_10px_rgba(0,0,0,0.06)] dark:shadow-[inset_0_2px_10px_rgba(0,0,0,0.4)]
        hover:shadow-lg hover:shadow-zinc-500/10">

        {/* Preview Area */}
        <div className="m-3 h-[calc(100%-6.5rem)] rounded-lg bg-zinc-200 dark:bg-zinc-950 overflow-hidden
          flex items-center justify-center">
          <div className="text-zinc-400 dark:text-zinc-600 text-sm tracking-wide">
            Preview
          </div>
        </div>

        {/* Details */}
        <div className="px-4 pt-3 pb-6">
          <h3 className="text-lg font-medium text-zinc-900 dark:text-white">
            {name}
          </h3>
          <span className="text-sm text-zinc-600 dark:text-zinc-400">
            {description} | <strong>{count}+</strong> variations
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function BlocksPage() {
  return (
    <div className="min-h-screen w-full px-5 pt-10 pb-20">
      <div className="leading-tight mb-10 text-center flex flex-col items-center justify-center">
        <h1 className="text-3xl font-medium text-zinc-900 dark:text-white">Blocks Library</h1>
        <span className="text-lg tracking-tight text-zinc-600 dark:text-zinc-400 mt-1">
          Ready-to-use sections to build complete pages in minutes.
        </span>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blocks.map((block) => (
            <BlockCard
              key={block.name}
              name={block.name}
              href={block.href}
              description={block.description}
              count={block.count}
              colSpan={block.colSpan}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
