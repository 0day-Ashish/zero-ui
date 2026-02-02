import Link from "next/link";
import Image from "next/image";

interface ComponentItem {
  name: string;
  href: string;
  description: string;
  count: number;
  image: string;
}

const components: ComponentItem[] = [
  {
    name: "Buttons",
    href: "/components/buttons",
    description: "Interactive click elements",
    count: 12,
    image: "/assets/buttons."
  },
  {
    name: "Inputs",
    href: "/components/inputs",
    description: "Text and data entry fields",
    count: 8,
    image: "/assets/inputs."
  },
  {
    name: "Cards",
    href: "/components/cards",
    description: "Content containers",
    count: 15,
    image: "/assets/cards.png"
  },
  {
    name: "Modals",
    href: "/components/modals",
    description: "Dialog overlays",
    count: 6,
    image: "/assets/modals.png"
  },
  {
    name: "Alerts",
    description: "Feedback messages and notifications.",
    href: "/components/alerts",
    count: 10,
    image: "/assets/alerts.png"
  },
  {
    name: "Badges",
    href: "/components/badges",
    description: "Status indicators",
    count: 8,
    image: "/assets/badges.png"
  },
  {
    name: "Avatars",
    description: "User profile images and fallbacks.",
    href: "/components/avatars",
    count: 5,
    image: "/assets/avatars.png"
  },
  {
    name: "Tooltips",
    href: "/components/tooltips",
    description: "Hover info popups",
    count: 4,
    image: "/assets/tooltips.png"
  },
  {
    name: "Dropdowns",
    href: "/components/dropdowns",
    description: "Selection menus",
    count: 7,
    image: "/assets/dropdowns.png"
  },
  {
    name: "Tabs",
    href: "/components/tabs",
    description: "Content navigation",
    count: 6,
    image: "/assets/tabs.png"
  },
  {
    name: "Accordions",
    href: "/components/accordions",
    description: "Collapsible sections",
    count: 7,
    image: "/assets/accordions.png"
  },
  {
    name: "Progress",
    href: "/components/progress",
    description: "Loading indicators",
    count: 8,
    image: "/assets/progress.png"
  },
  {
    name: "Sliders",
    href: "/components/sliders",
    description: "Range selectors",
    count: 4,
    image: "/assets/sliders.png"
  },
  {
    name: "Switches",
    href: "/components/switches",
    description: "Toggle controls",
    count: 6,
    image: "/assets/switches.png"
  },
  {
    name: "Tables",
    href: "/components/tables",
    description: "Data grids",
    count: 9,
    image: "/assets/tables.png"
  },
  {
    name: "Pagination",
    href: "/components/pagination",
    description: "Page navigation",
    count: 5,
    image: "/assets/pagination.png"
  },
  {
    name: "Breadcrumbs",
    href: "/components/breadcrumbs",
    description: "Path indicators",
    count: 4,
    image: "/assets/breadcrumbs.png"
  },
  {
    name: "Spinners",
    href: "/components/spinners",
    description: "Loading animations",
    count: 10,
    image: "/assets/spinners.png"
  },
];

function ComponentCard({ name, href, description, count, image }: ComponentItem) {
  return (
    <Link href={href} className="group block">
      <div className="relative w-full h-72 rounded-xl overflow-hidden
        bg-zinc-100 dark:bg-zinc-900
        border border-zinc-200 dark:border-zinc-800
        hover:border-zinc-400 dark:hover:border-zinc-500
        transition-all duration-300
        shadow-[inset_0_2px_10px_rgba(0,0,0,0.06)] dark:shadow-[inset_0_2px_10px_rgba(0,0,0,0.4)]
        hover:shadow-lg hover:shadow-zinc-500/10">

        {/* Preview Area */}
        <div className="m-3 h-44 rounded-lg bg-zinc-200 dark:bg-zinc-950 overflow-hidden
          flex items-center justify-center relative group-hover:scale-[1.02] transition-transform duration-500">
          {image ? (
            <Image
              src={image}
              alt={`${name} preview`}
              fill
              className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            />
          ) : (
            <div className="text-zinc-400 dark:text-zinc-600 text-sm tracking-wide">
              Preview
            </div>
          )}
        </div>

        {/* Details */}
        <div className="px-4 pt-2 pb-4">
          <h3 className="text-lg font-medium text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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

export default function ComponentsPage() {
  return (
    <div className="min-h-screen w-full px-5 py-10">
      <div className="leading-tight mb-10 text-center flex flex-col items-center justify-center">
        <h1 className="text-3xl font-medium text-zinc-900 dark:text-white">Components Library</h1>
        <span className="text-lg tracking-tight text-zinc-600 dark:text-zinc-400 mt-1">
          Welcome to the library of sleek and modern UI components that can boost your websites in one click.
        </span>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {components.map((component) => (
            <ComponentCard
              key={component.name}
              {...component}
            />
          ))}
        </div>
      </div>
    </div>
  );
}