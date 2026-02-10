"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Check, Star } from "lucide-react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import Button from "@/zeroui/components/buttons/button";

const sidebarSections = [
    {
      title: "Overview",
      items: [
        { name: "Introduction", href: "/templates" },
        { name: "Installation", href: "/docs/installation" },
      ],
    },
    {
      title: "Categories",
      items: [
        { name: "E-commerce", href: "/templates/ecommerce" },
        { name: "Landing Pages", href: "/templates/landing" },
        { name: "Dashboards", href: "/templates/dashboard" },
        { name: "Portfolios", href: "/templates/portfolios" },
        { name: "SaaS", href: "/templates/saas" },
        { name: "Blogs", href: "/templates/blogs" },
      ],
    },
  ];

const templateVariations = [
  { id: "saas-hero", name: "SaaS Hero", href: "#saas-hero" },
  { id: "app-showcase", name: "App Showcase", href: "#app-showcase" },
];

export default function LandingTemplatesPage() {
  const saasCode = `import { Button } from "@/zeroui/components/buttons";
import { ChevronRight, Check, Star } from "lucide-react";

export default function SaaSLanding() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-zinc-950">
       {/* Background Grid */}
       <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-zinc-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] mask-image:linear-gradient(to_bottom,black,transparent)"></div>
       
       <div className="container mx-auto px-4 py-24 sm:py-32 lg:py-40">
        <div className="text-center max-w-4xl mx-auto space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white/50 px-3 py-1 text-sm font-medium text-zinc-800 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-200 transition-colors hover:bg-white hover:dark:bg-zinc-900">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                <span className="mr-2">New features available</span>
                <span className="text-zinc-400">|</span>
                <Link href="#" className="ml-2 inline-flex items-center hover:text-blue-600 transition-colors">
                  Explore <ChevronRight className="ml-1 h-3 w-3" />
                </Link>
            </div>
            
            {/* Hero Title */}
            <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-7xl">
                Build your next idea <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
                  lightning fast
                </span>
            </h1>
            
            {/* Hero Description */}
            <p className="mt-6 text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Beautifully designed components that you can copy and paste into your apps. 
                Accessible. Customizable. Open Source.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-lg shadow-blue-500/20">
                    Get Started <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base bg-white/50 backdrop-blur-sm dark:bg-zinc-900/50">
                    View on GitHub
                </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-12 flex flex-col items-center gap-4">
                <div className="flex -space-x-2">
                   {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-white dark:border-zinc-950 bg-zinc-200 dark:bg-zinc-800" />
                   ))}
                   <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white dark:border-zinc-950 bg-zinc-100 text-xs font-medium text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
                     +2k
                   </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <div className="flex text-yellow-500">
                    {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <span className="font-medium">5.0</span>
                  <span className="text-zinc-400 px-1">•</span>
                  <span>Trusted by 2000+ developers</span>
                </div>
            </div>

            {/* Features List */}
            <div className="pt-8 text-sm text-zinc-500 flex flex-wrap justify-center gap-x-8 gap-y-4">
                <span className="flex items-center"><Check className="h-4 w-4 mr-2 text-blue-500 bg-blue-500/10 rounded-full p-0.5" /> Free to use</span>
                <span className="flex items-center"><Check className="h-4 w-4 mr-2 text-blue-500 bg-blue-500/10 rounded-full p-0.5" /> No attribution</span>
                <span className="flex items-center"><Check className="h-4 w-4 mr-2 text-blue-500 bg-blue-500/10 rounded-full p-0.5" /> TypeScript Ready</span>
            </div>
        </div>
       </div>
    </div>
  );
}`;

  return (
    <ComponentPageLayout
      componentName="Landing Pages"
      description="High-conversion landing page layouts for SaaS, Apps, and Portfolios. Designed to tell your product's story effectively."
      componentItems={templateVariations}
      activeComponentId="saas-hero"
      sidebarSections={sidebarSections}
    >
      <div className="space-y-20">
        <section id="saas-hero" className="scroll-mt-24">
          <div className="mb-8 p-1">
             <div className="flex items-center gap-2 mb-2">
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                SaaS Startup Hero
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-xs font-medium">
                    Popular
                </span>
             </div>
             <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
               A classic centered hero section optimized for SaaS products. Features a gradient headline, trust signals, and clear call-to-actions.
             </p>
          </div>
          
          <ComponentPreview code={saasCode}>
            <div className="w-full h-full overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                 <div className="relative bg-white dark:bg-zinc-950">
                    <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-zinc-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] opacity-50"></div>
                    
                    <div className="py-20 px-4">
                        <div className="text-center max-w-4xl mx-auto space-y-8">
                            {/* Preview Badge */}
                            <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white/50 px-3 py-1 text-sm font-medium text-zinc-800 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-200">
                                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                                <span className="mr-2">New features available</span>
                                <span className="text-zinc-400">|</span>
                                <span className="ml-2 inline-flex items-center hover:text-blue-600 cursor-pointer">
                                Explore <ChevronRight className="ml-1 h-3 w-3" />
                                </span>
                            </div>
                            
                            {/* Preview Title */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                                Build your next idea <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
                                lightning fast
                                </span>
                            </h1>
                            
                            {/* Preview Description */}
                            <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                                Beautifully designed components that you can copy and paste into your apps. 
                                Accessible. Customizable. Open Source.
                            </p>
                            
                            {/* Preview Buttons */}
                             <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                                <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-lg shadow-blue-500/20">
                                    Get Started <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base bg-white/50 backdrop-blur-sm dark:bg-zinc-900/50">
                                    View on GitHub
                                </Button>
                            </div>

                             {/* Preview Social Proof */}
                             <div className="pt-10 flex flex-col items-center gap-4">
                                <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="h-8 w-8 rounded-full border-2 border-white dark:border-zinc-950 bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center overflow-hidden">
                                        <div className="w-full h-full bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800"></div>
                                    </div>
                                ))}
                                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white dark:border-zinc-950 bg-zinc-100 text-xs font-medium text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
                                    +2k
                                </div>
                                </div>
                                <div className="flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400">
                                <div className="flex text-yellow-500">
                                    {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                                </div>
                                <span className="font-medium">5.0</span>
                                <span className="text-zinc-400 px-1">•</span>
                                <span>Trusted by 2000+ developers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
          </ComponentPreview>

          <InstallationTabs
            componentName="landing-hero"
            dependencies={["lucide-react", "clsx", "tailwind-merge"]}
            manualSteps={[
              {
                title: "Copy the code",
                description: "Create a new file (e.g., `components/landing-hero.tsx`) and paste the code below.",
                filename: "components/landing-hero.tsx",
                code: saasCode,
              }
            ]}
          />

          <div className="mt-12">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">Props</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                This template is designed to be copy-pasted, but if you componentize it, here are recommended props.
            </p>
            <PropsTable
                props={[
                {
                    name: "badge",
                    type: "ReactNode",
                    default: "-",
                    description: "The top badge element indicating status or news.",
                },
                {
                    name: "title",
                    type: "ReactNode | string",
                    default: "-",
                    description: "The main hero headline.",
                },
                {
                    name: "description",
                    type: "string",
                    default: "-",
                    description: "Supporting text below the headline.",
                },
                {
                    name: "onGetStarted",
                    type: "() => void",
                    default: "-",
                    description: "Callback for the primary CTA button.",
                },
                {
                    name: "onGithub",
                    type: "() => void",
                    default: "-",
                    description: "Callback for the secondary action button.",
                },
                ]}
            />
          </div>
        </section>
      </div>
    </ComponentPageLayout>
  );
}
