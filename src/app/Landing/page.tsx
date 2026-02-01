import Image from "next/image";
import BrowserMockup from "@/components/ui/windowmockup";
import MockupContent from "@/components/ui/MockupContent";
import ComponentShowcase from "@/components/ui/ComponentShowcase";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import TemplateShowcase from "@/components/ui/TemplateShowcase";
import FAQSection from "@/components/ui/FAQSection";
import WaitlistButton from "@/components/ui/WaitlistButton";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen px-4 w-full overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20 pb-16">
        {/* Left - Hero Content */}
        <div className="flex flex-col justify-start gap-8 text-start max-w-3xl">
          {/* Announcement Pill */}
          <div className="flex">
            <WaitlistButton />
          </div>

          <h1 className="text-4xl lg:text-6xl font-medium tracking-tighter ">
            Ship faster with <span className="text-violet-500">zero</span> friction.
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 space-y-4 leading-loose">
            <span className="font-nuqun text-2xl font-medium">ZEROUI</span> is a <span className="italic underline">React</span> component library that empowers developers to build beautiful, modern websites quickly and easily. With a focus on <span className="underline">simplicity</span> and <span className="underline">reusability</span>, <span className="font-nuqun text-2xl font-medium">ZeroUI</span> provides a comprehensive set of pre-designed components that can be seamlessly integrated into any project.
          </p>

          {/* Technology Logos */}
          <div className="flex items-center gap-4">
            <Image src="/icons/react.svg" alt="React" width={40} height={40} />
            <Image src="/icons/typescript.png" alt="TypeScript" width={40} height={40} />
            <Image src="/icons/nextjs.svg" alt="Next.js" width={40} height={40} />
            <Image src="/icons/tailwind.svg" alt="Tailwind CSS" width={40} height={40} />
            <Image src="/icons/motion.svg" alt="Motion" width={40} height={40} />

          </div>

          <div className="flex gap-4">
            <Link href="/components" className="px-4 py-2 border-2 border-zinc-300 dark:border-white/10 rounded-md cursor-pointer active:scale-95 bg-zinc-900 dark:bg-zinc-900 text-white hover:bg-zinc-800 dark:hover:bg-zinc-800 transition-colors shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
              Browse Components
            </Link>
            <Link href="/docs" className="px-4 py-2 border-2 border-zinc-300 dark:border-white/10 rounded-md cursor-pointer active:scale-95 shadow-[inset_0_0_5px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_5px_rgba(255,255,255,0.1)] hover:bg-zinc-100 dark:hover:bg-zinc-900/50 transition-colors text-foreground">
              Documentation
            </Link>
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
            Made with ❤️ for devs by devs.
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {/* Dev 1 */}
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 border-2 border-zinc-300 dark:border-zinc-800 shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-zinc-900 dark:text-white">Ashish Ranjan Das</h3>
              <p className="text-sm text-zinc-500 mb-2">Full Stack Web3 Developer</p>
              <div className="flex items-center gap-3">
                <a href="https://github.com/0day-Ashish" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <Github className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com/in/arddev" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://twitter.com/Ashish_06" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <Twitter className="w-4 h-4" />
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
                <a href="https://github.com/subham12r" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <Github className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com/in/subham12r" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://twitter.com/subham12r" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Dev 3 */}
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 border-2 border-zinc-300 dark:border-zinc-800 shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-zinc-900 dark:text-white">Aryadeep Roy</h3>
              <p className="text-sm text-zinc-500 mb-2">Full-Stack Developer</p>
              <div className="flex items-center gap-3">
                <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <Github className="w-4 h-4" />
                </a>
                <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
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
