import Link from "next/link";
import Image from "next/image";

interface FeaturedComponent {
  name: string;
  slug: string;
  description: string;
  tag: string;
  image: string;
}

const featuredComponents: FeaturedComponent[] = [
  {
    name: "Profile Cards",
    slug: "profile-cards",
    description: "Elegant user profile cards with hover effects",
    tag: "Popular",
    image: "/assets/featured/profile-cards.png"
  },
  {
    name: "Music Cards",
    slug: "music-cards",
    description: "Interactive music player card components",
    tag: "New",
    image: "/assets/featured/music-cards.png"
  },
  {
    name: "Calendar",
    slug: "calendar",
    description: "Beautiful date picker and calendar component",
    tag: "Featured",
    image: "/assets/featured/calendar.png"
  },
  {
    name: "Wallet",
    slug: "wallet",
    description: "Crypto wallet card with balance display",
    tag: "Trending",
    image: "/assets/featured/wallet.png"
  },
  {
    name: "AI Input",
    slug: "ai-input",
    description: "Modern AI chat input with suggestions",
    tag: "Popular",
    image: "/assets/featured/ai-input.png"
  },
  {
    name: "Github Calendar",
    slug: "github-calendar",
    description: "Contribution graph like GitHub activity",
    tag: "New",
    image: "/assets/featured/github-calendar.png"
  },
  {
    name: "OTP Input",
    slug: "otp-input",
    description: "One-time password input with validation",
    tag: "Featured",
    image: "/assets/featured/otp-input.png"
  },
  {
    name: "Priority Cards",
    slug: "priority-cards",
    description: "Task priority cards with status indicators",
    tag: "Trending",
    image: "/assets/featured/priority-cards.png"
  },
  {
    name: "Upload Card",
    slug: "upload-card",
    description: "Drag and drop file upload component",
    tag: "Popular",
    image: "/assets/featured/upload-card.png"
  },
];

function getTagStyles(tag: string): string {
  switch (tag) {
    case "Popular":
      return "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20";
    case "New":
      return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
    case "Trending":
      return "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20";
    case "Featured":
      return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
    default:
      return "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20";
  }
}

function FeaturedCard({ name, slug, description, tag, image }: FeaturedComponent) {
  return (
    <Link href={`/featured/${slug}`} className="group block">
      <div className="relative w-full h-72 rounded-xl overflow-hidden
        bg-zinc-100 dark:bg-zinc-900
        border border-zinc-200 dark:border-zinc-800
        hover:border-zinc-400 dark:hover:border-zinc-500
        transition-all duration-300
        shadow-[inset_0_2px_10px_rgba(0,0,0,0.06)] dark:shadow-[inset_0_2px_10px_rgba(0,0,0,0.4)]
        hover:shadow-lg hover:shadow-zinc-500/10">

        {/* Tag Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className={`px-2.5 py-1 text-xs font-medium rounded-full border ${getTagStyles(tag)}`}>
            {tag}
          </span>
        </div>

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
          <span className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-1">
            {description}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function FeaturedPage() {
  return (
    <div className="min-h-screen w-full px-5 py-10">
      <div className="leading-tight mb-10 text-center flex flex-col items-center justify-center">
        <h1 className="text-3xl font-medium text-zinc-900 dark:text-white">Featured Components</h1>
        <span className="text-lg tracking-tight text-zinc-600 dark:text-zinc-400 mt-1">
          Handpicked collection of unique, standalone components with stunning effects.
        </span>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {featuredComponents.map((component) => (
            <FeaturedCard
              key={component.slug}
              {...component}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
