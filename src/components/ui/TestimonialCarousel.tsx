"use client";

const testimonials = [
  // Row 1
  {
    username: "anadeepam",
    avatar: "from-violet-500 to-purple-600",
    content: "Just discovered ZeroUI — Check out the Cursor effect is amazing.",
  },
  {
    username: "syskey_dmg",
    avatar: "from-pink-500 to-rose-500",
    content: "Just discovered zeroui.dev — a sleek, minimal, and super dev-friendly React component library. Clean UI, easy to use, and perfect for modern projects.",
  },
  {
    username: "shadcn",
    avatar: "from-amber-500 to-orange-500",
    content: "Everything about this is next level: the components, the registry, dynamic items.",
  },
  {
    username: "gregnance",
    avatar: "from-emerald-500 to-teal-500",
    content: "ZeroUI: A complete set of components that just works ✨",
  },
  // Row 2
  {
    username: "Logreg_n_coffee",
    avatar: "from-blue-500 to-cyan-500",
    content: "Literally the coolest react library in react —",
  },
  {
    username: "DIYDevs",
    avatar: "from-indigo-500 to-blue-500",
    content: "Have you heard of ZeroUI? David has lovingly put together a collection of animated and fully customizable React components.",
  },
  {
    username: "GibsonSMurray",
    avatar: "from-rose-500 to-pink-500",
    content: "ZeroUI has got to be the most artistic UI component lib I have seen in a while 🔥",
  },
  {
    username: "dan_abramov",
    avatar: "from-cyan-500 to-blue-500",
    content: "This is genuinely impressive work. The attention to detail shows.",
  },
  // Row 3
  {
    username: "devwithemma",
    avatar: "from-violet-400 to-indigo-500",
    content: "Saw about ZeroUI and its just wow, components are incredibly well designed! Love the overall feel and quality.",
  },
  {
    username: "sarah_edo",
    avatar: "from-teal-500 to-emerald-500",
    content: "ZeroUI has become the ultimate visual animation library for React. This level of flexibility doesn't exist anywhere else.",
  },
  {
    username: "kentcdodds",
    avatar: "from-amber-400 to-yellow-500",
    content: "The next shadcn is emerging this year 👀",
  },
  {
    username: "rauchg",
    avatar: "from-gray-400 to-gray-600",
    content: "Got to know about ZeroUI and the components are so clean. Really love it.",
  },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="w-[320px] h-[160px] bg-transparent p-5 border border-zinc-200 dark:border-zinc-800/30 flex flex-col justify-between">
      <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed line-clamp-3">
        {testimonial.content}
      </p>
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${testimonial.avatar}`} />
        <span className="text-zinc-500 dark:text-zinc-400 text-sm">@{testimonial.username}</span>
      </div>
    </div>
  );
}

export default function TestimonialCarousel() {
  // Split testimonials into rows
  const row1 = testimonials.slice(0, 4);
  const row2 = testimonials.slice(4, 8);
  const row3 = testimonials.slice(8, 12);

  return (
    <div className="w-full overflow-hidden relative">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Testimonial Grid */}
      <div className="flex flex-col">
        {/* Row 1 - Scrolling left */}
        <div className="flex animate-marquee-horizontal" style={{ animationDuration: "40s" }}>
          {[...row1, ...row1, ...row1].map((testimonial, index) => (
            <div key={index} className="shrink-0">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* Row 2 - Scrolling right */}
        <div className="flex animate-marquee-horizontal-reverse" style={{ animationDuration: "45s" }}>
          {[...row2, ...row2, ...row2].map((testimonial, index) => (
            <div key={index} className="shrink-0">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* Row 3 - Scrolling left */}
        <div className="flex animate-marquee-horizontal" style={{ animationDuration: "35s" }}>
          {[...row3, ...row3, ...row3].map((testimonial, index) => (
            <div key={index} className="shrink-0">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
