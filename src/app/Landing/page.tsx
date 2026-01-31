import Image from "next/image";
import BrowserMockup from "@/components/ui/windowmockup";
import MockupContent from "@/components/ui/MockupContent";
import ComponentShowcase from "@/components/ui/ComponentShowcase";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import TemplateShowcase from "@/components/ui/TemplateShowcase";
import FAQSection from "@/components/ui/FAQSection";

export default function Landing() {
  return (
    <main className="min-h-screen px-4 w-full overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20 pb-16">
        {/* Left - Hero Content */}
        <div className="flex flex-col justify-start gap-8 text-start max-w-3xl">
          {/* Announcement Pill */}
          <div className="flex">
            <a href="#" className="group flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-900 rounded-full border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all cursor-pointer">
              <span className="text-sm text-zinc-700 dark:text-zinc-300">Version 1 Launching</span>
              <svg className="w-4 h-4 text-zinc-500 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <h1 className="text-4xl lg:text-6xl font-medium tracking-tighter ">
            Ship faster with <span className="text-violet-500">zero</span> friction.
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 space-y-4 leading-loose">
            <span className="font-nuqun text-2xl font-medium">ZEROUI</span> is a <span className="italic underline">React</span> component library that empowers developers to build beautiful, modern websites quickly and easily. With a focus on <span className="underline">simplicity</span> and <span className="underline">reusability</span>, <span className="font-nuqun text-2xl font-medium">ZeroUI</span> provides a comprehensive set of pre-designed components that can be seamlessly integrated into any project.
          </p>

          {/* Technology Logos */}
          <div className="flex items-center gap-4">
            <div className="transition-all duration-300 cursor-pointer">
              <Image src="/icons/react.png" alt="React" width={40} height={40} className="rounded object-cover border-2 border-zinc-300 dark:border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]" />
            </div>
            <div className="transition-all duration-300 cursor-pointer">
              <Image src="/icons/typescript.png" alt="TypeScript" width={40} height={40} className="rounded object-cover border-2 border-zinc-300 dark:border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]" />
            </div>
            <div className="rounded-lg transition-all duration-300 cursor-pointer">
              <Image src="/icons/nextjs.jpeg" alt="Next.js" width={40} height={40} className="rounded object-cover border-2 border-zinc-300 dark:border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]" />
            </div>
            <div className="transition-all duration-300 cursor-pointer">
              <Image src="/icons/tailwindcss.jpeg" alt="Tailwind CSS" width={40} height={40} className="rounded object-cover border-2 border-zinc-300 dark:border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]" />
            </div>
            <div className="transition-all duration-300 cursor-pointer">
              <Image src="/icons/framer.jpeg" alt="Framer Motion" width={40} height={40} className="rounded object-cover border-2 border-zinc-300 dark:border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]" />
            </div>
            <div className="transition-all duration-300 cursor-pointer">
              <Image src="/icons/gsap.svg" alt="GSAP" width={40} height={40} className="rounded object-cover border-2 border-zinc-300 dark:border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]" />
            </div>
          </div>

          <div className="flex gap-4">
            <button className="px-4 py-2 border-2 border-zinc-300 dark:border-white/10 rounded-md cursor-pointer active:scale-95 bg-zinc-900 dark:bg-zinc-900 text-white hover:bg-zinc-800 dark:hover:bg-zinc-800 transition-colors shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
              Browse Components
            </button>
            <button className="px-4 py-2 border-2 border-zinc-300 dark:border-white/10 rounded-md cursor-pointer active:scale-95 shadow-[inset_0_0_5px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_5px_rgba(255,255,255,0.1)] hover:bg-zinc-100 dark:hover:bg-zinc-900/50 transition-colors text-foreground">
              Documentation
            </button>
          </div>
        </div>

        {/* Right - Browser Mockup */}
        <div className="hidden lg:block relative">
          <div className="translate-x-[20%]">
            <BrowserMockup url="zeroui.dev/components" className="w-full min-h-[650px]">
              <MockupContent />
            </BrowserMockup>
          </div>
        </div>
      </div>

      {/* Component Showcase Section */}
      <div className="w-full flex flex-col justify-center items-center pt-20 mb-20 -mx-4">
        <div className="w-full flex flex-col justify-center items-center gap-2 max-w-2xl text-center mb-10 px-4">
          <h1 className="text-4xl tracking-tighter font-medium text-foreground">Components to Make your Life Easier</h1>
          <span className="text-zinc-600 dark:text-zinc-400">
            Explore our extensive library of pre-designed, customizable components that can be easily integrated into your projects, saving you time and effort.
          </span>
        </div>

        <div className="w-screen overflow-hidden flex justify-center items-center">
          <ComponentShowcase />
        </div>
      </div>
  {/* Templates Section */}
      <TemplateShowcase />
     
          <FAQSection />
      {/* Testimonials Section */}
      <div className="w-full flex flex-col justify-center items-center pt-10 mb-20">
        <div className="w-full flex flex-col justify-center items-center gap-2 max-w-2xl text-center mb-12">
          <h1 className="text-3xl tracking-tighter font-medium text-zinc-700 dark:text-zinc-300">
            See what developers are saying about <span className="text-zinc-900 dark:text-white font-semibold font-nuqun text-4xl">ZeroUI</span>
          </h1>
        </div>

        <TestimonialCarousel />
      </div>

      {/* Meet the Devs Section */}
      <div className="w-full flex flex-col justify-center items-center pt-10 mb-20">
        <div className="w-full flex flex-col justify-center items-center gap-2 max-w-2xl text-center mb-12">
          <h1 className="text-3xl tracking-tighter font-medium text-zinc-700 dark:text-zinc-300">
            Meet the <span className="text-zinc-900 dark:text-white font-semibold">Devs</span>
          </h1>
          <span className="text-zinc-500 dark:text-zinc-400">
                We build ZeroUI with ❤️ from India.
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {/* Dev 1 */}
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 border-2 border-zinc-300 dark:border-zinc-800 shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-zinc-900 dark:text-white">Ashish Ranjan Das</h3>
              <p className="text-sm text-zinc-500 mb-2">Full Stack Developer</p>
              <div className="flex items-center gap-3">
                <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Dev 2 */}
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 border-2 border-zinc-300 dark:border-zinc-800 shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-zinc-900 dark:text-white">Subham Karmakar</h3>
              <p className="text-sm text-zinc-500 mb-2">Full Stack Developer</p>
              <div className="flex items-center gap-3">
                <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Dev 3
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 border-2 border-zinc-800 shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-white">Alex Chen</h3>
              <p className="text-sm text-zinc-500 mb-2">Full Stack Dev</p>
              <div className="flex items-center gap-3">
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="flex justify-center items-center w-full mb-20 pt-10 flex-col">
        <div className="w-full flex flex-col justify-center items-center gap-2 max-w-2xl text-center mb-12">
          <h1 className="text-3xl tracking-tighter font-medium text-zinc-700 dark:text-zinc-300">
            Newsletter
                  </h1>
                  <span className="text-zinc-500 dark:text-zinc-400">
            Stay updated with the latest news, updates, and exclusive offers from ZeroUI. Join our newsletter and never miss out!
          </span>
              </div>

              <div className="flex gap-4 justify-center items-center ">
                  <input type="email" placeholder="zeroui@email.com" className="px-4 py-2 transition-all duration-300 ease-in bg-zinc-100 dark:bg-zinc-700 text-foreground rounded-2xl w-[500px] border-2 border-zinc-300 dark:border-white/10 shadow-[inset_0_0_10px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] focus:outline-none focus:border-zinc-400 dark:focus:border-white/40 focus:bg-zinc-200 dark:focus:bg-zinc-500" />
                  <button className="bg-blue-500 px-4 py-2 rounded-2xl shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] active:scale-95 transform transition-all duration-150 ease-linear text-white dark:text-blue-200 font-medium cursor-pointer border-blue-400 dark:border-white/10 border-2">Join Now</button>
              </div>
    </div>
    
    </main>
  );
}
