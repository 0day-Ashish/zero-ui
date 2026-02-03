import Link from "next/link";
import Image from "next/image";

interface TemplateItem {
  name: string;
  href: string;
  description: string;
  count: number;
  image: string;
}

const templates: TemplateItem[] = [
  {
    name: "E-commerce",
    href: "/templates/ecommerce",
    description: "Online store templates",
    count: 3,
    image: "/assets/templates/ecommerce.png"
  },
  {
    name: "Landing Pages",
    href: "/templates/landing",
    description: "Marketing page templates",
    count: 5,
    image: "/assets/templates/landing.png"
  },
  {
    name: "Dashboards",
    href: "/templates/dashboard",
    description: "Admin panel templates",
    count: 4,
    image: "/assets/templates/dashboard.png"
  },
  {
    name: "Portfolios",
    href: "/templates/portfolios",
    description: "Personal portfolio sites",
    count: 3,
    image: "/assets/templates/portfolios.png"
  },
  {
    name: "Blogs",
    href: "/templates/blogs",
    description: "Content focused layouts",
    count: 2,
    image: "/assets/templates/blogs.png"
  },
  {
    name: "SaaS",
    href: "/templates/saas",
    description: "SaaS application layouts",
    count: 4,
    image: "/assets/templates/saas.png"
  },
];

function TemplateCard({ name, href, description, count, image }: TemplateItem) {
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
          <div className="text-zinc-400 dark:text-zinc-600 text-sm tracking-wide">
              {name} Preview
          </div>
          {/* 
            TODO: Uncomment and use actual images when available
            <Image
              src={image}
              alt={`${name} preview`}
              fill
              className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            /> 
          */}
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

export default function TemplatesPage() {
  return (
    <div className="min-h-screen w-full px-5 py-10">
      <div className="leading-tight mb-10 text-center flex flex-col items-center justify-center">
        <h1 className="text-3xl font-medium text-zinc-900 dark:text-white">Templates Library</h1>
        <span className="text-lg tracking-tight text-zinc-600 dark:text-zinc-400 mt-1">
          Explore our collection of professionally designed templates to kickstart your next project.
        </span>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {templates.map((template) => (
            <TemplateCard
              key={template.name}
              {...template}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
