import Link from "next/link";

interface MobileItem {
  name: string;
  href: string;
  description: string;
  count: number;
  position: "top" | "center" | "bottom";
}

const mobileComponents: MobileItem[] = [
  { name: "App Screens", href: "/mobile/app-screens", description: "Full mobile layouts", count: 32, position: "center" },
  { name: "Bottom Navigation", href: "/mobile/bottom-nav", description: "Tab bar components", count: 12, position: "bottom" },
  { name: "Mobile Cards", href: "/mobile/cards", description: "Swipeable card designs", count: 18, position: "center" },
  { name: "Onboarding", href: "/mobile/onboarding", description: "Welcome flow screens", count: 14, position: "top" },
  { name: "Login Screens", href: "/mobile/login", description: "Auth screen designs", count: 16, position: "top" },
  { name: "Profile Pages", href: "/mobile/profile", description: "User profile layouts", count: 10, position: "top" },
  { name: "Settings", href: "/mobile/settings", description: "App settings screens", count: 8, position: "top" },
  { name: "Chat UI", href: "/mobile/chat", description: "Messaging interfaces", count: 15, position: "bottom" },
  { name: "Feed Layouts", href: "/mobile/feed", description: "Social feed designs", count: 20, position: "center" },
  { name: "E-commerce", href: "/mobile/ecommerce", description: "Shopping app screens", count: 24, position: "center" },
  { name: "Notifications", href: "/mobile/notifications", description: "Alert and toast designs", count: 12, position: "top" },
  { name: "Empty States", href: "/mobile/empty-states", description: "Placeholder screens", count: 10, position: "center" },
];

function MobileCard({ name, href, description, count, position }: MobileItem) {
  const positionClasses = {
    top: "items-start",
    center: "items-center",
    bottom: "items-end",
  };

  return (
    <Link href={href} className="group block">
      <div className="relative w-full rounded-xl overflow-hidden
        bg-zinc-100 dark:bg-zinc-900
        border border-zinc-200 dark:border-zinc-800
        hover:border-zinc-400 dark:hover:border-zinc-500
        transition-all duration-300
        shadow-[inset_0_2px_10px_rgba(0,0,0,0.06)] dark:shadow-[inset_0_2px_10px_rgba(0,0,0,0.3)]
        hover:shadow-lg hover:shadow-zinc-500/10">

        {/* Preview Area with Phone */}
        <div className={`m-3 h-72 rounded-lg bg-zinc-200 dark:bg-zinc-950 overflow-hidden flex justify-center ${positionClasses[position]}`}>

          {/* iPhone 15 Pro Mockup - Larger and positioned */}
          <div className="relative w-52 h-[26rem]
            rounded-[2.5rem]
            bg-gradient-to-b from-zinc-500 via-zinc-600 to-zinc-500
            p-[2px]
            shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)]
            group-hover:shadow-[0_25px_50px_-8px_rgba(0,0,0,0.4)]
            group-hover:scale-[1.02]
            transition-all duration-300 m-4">

            {/* Titanium Frame */}
            <div className="relative w-full h-full rounded-[2.4rem] bg-zinc-700 p-[2px]">

              {/* Side Buttons - Left */}
              <div className="absolute -left-[2px] top-20 w-[3px] h-6 bg-zinc-500 rounded-l-sm" />
              <div className="absolute -left-[2px] top-32 w-[3px] h-10 bg-zinc-500 rounded-l-sm" />
              <div className="absolute -left-[2px] top-48 w-[3px] h-10 bg-zinc-500 rounded-l-sm" />

              {/* Side Button - Right */}
              <div className="absolute -right-[2px] top-28 w-[3px] h-14 bg-zinc-500 rounded-r-sm" />

              {/* Inner Bezel */}
              <div className="relative w-full h-full rounded-[2.2rem] bg-zinc-900 overflow-hidden">

                {/* Screen */}
                <div className="absolute inset-[2px] rounded-[2rem] bg-white dark:bg-zinc-100 overflow-hidden">

                  {/* Dynamic Island */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full z-10 flex items-center justify-end pr-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                  </div>

                  {/* Screen Content */}
                  <div className="absolute inset-0 top-9 bottom-0 overflow-hidden
                    flex items-center justify-center bg-white dark:bg-zinc-100">
                    <div className="text-zinc-300 dark:text-zinc-400 text-xs tracking-wide">
                      Preview
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-black/20 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="px-4 pt-3 pb-4">
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

export default function MobilePage() {
  return (
    <div className="min-h-screen w-full px-5 pt-10 pb-20">
      <div className="leading-tight mb-14 text-center flex flex-col items-center justify-center">
        <h1 className="text-3xl font-medium text-zinc-900 dark:text-white">Mobile Components</h1>
        <span className="text-lg tracking-tight text-zinc-600 dark:text-zinc-400 mt-1">
          Beautiful mobile UI components designed for iOS and Android apps.
        </span>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {mobileComponents.map((component) => (
            <MobileCard
              key={component.name}
              name={component.name}
              href={component.href}
              description={component.description}
              count={component.count}
              position={component.position}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
