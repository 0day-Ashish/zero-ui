import { ArrowUpRight } from "lucide-react"

export function Footer() {
    return (
        <footer className="relative bg-background text-foreground overflow-hidden border-t border-dashed border-foreground/20">
            <div className="container mx-auto px-4 py-20 relative z-10">

                {/* Top Section: CTA */}
                <div className="mb-20">
                    <div className="flex justify-between items-start mb-8">
                        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">New York City<br />40.7128° N, 74.0060° W</span>
                        <div className="flex flex-col text-right font-mono text-xs uppercase tracking-widest text-muted-foreground">
                            <a href="#" className="hover:text-foreground transition-colors">About Us</a>
                            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
                        </div>
                    </div>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight max-w-4xl">
                        Let&apos;s build your next project together.
                    </h2>
                </div>

                {/* Middle Section: Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
                    {/* Column 1: Primary */}
                    <div className="space-y-6">
                        <div className="border-b border-dashed border-foreground/20 pb-2 mb-4">
                            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Primary</span>
                        </div>
                        <ul className="space-y-2 text-lg md:text-xl font-medium">
                            <li><a href="#" className="hover:opacity-50 transition-opacity block">Approach</a></li>
                            <li><a href="#" className="hover:opacity-50 transition-opacity block">Clients</a></li>
                            <li><a href="#" className="hover:opacity-50 transition-opacity block">Awards</a></li>
                            <li><a href="#" className="hover:opacity-50 transition-opacity block">Services</a></li>
                        </ul>
                    </div>

                    {/* Column 2: Go Deeper */}
                    <div className="space-y-6">
                        <div className="border-b border-dashed border-foreground/20 pb-2 mb-4">
                            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Go Deeper</span>
                        </div>
                        <ul className="space-y-2 text-lg md:text-xl font-medium">
                            <li><a href="#" className="hover:opacity-50 transition-opacity block">About</a></li>
                            <li><a href="#" className="hover:opacity-50 transition-opacity block">Journal</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Social */}
                    <div className="space-y-6">
                        <div className="border-b border-dashed border-foreground/20 pb-2 mb-4">
                            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Social</span>
                        </div>
                        <ul className="space-y-2 text-lg md:text-xl font-medium">
                            <li><a href="#" className="hover:opacity-50 transition-opacity block">Instagram</a></li>
                            <li><a href="#" className="hover:opacity-50 transition-opacity block">Twitter / X</a></li>
                            <li><a href="#" className="hover:opacity-50 transition-opacity block">LinkedIn</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="space-y-6">
                        <div className="border-b border-dashed border-foreground/20 pb-2 mb-4">
                            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Want to see our work?</span>
                        </div>
                        <a href="mailto:hey@zeroui.com" className="text-lg md:text-xl font-medium hover:opacity-50 transition-opacity block flex items-center gap-2">
                            hey@zeroui.com <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Bottom Section: Info & Massive Text */}
                <div className="border-t border-dashed border-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-end gap-8 relative">
                    <div className="flex flex-col gap-1 font-mono text-xs uppercase tracking-widest text-muted-foreground z-20">
                        <span>© Copyright 2026 Zero UI</span>
                        <span>All Rights Reserved</span>
                    </div>
                    <div className="flex flex-col gap-1 font-mono text-xs uppercase tracking-widest text-muted-foreground z-20 text-right">
                        <span>We could just eat you up ///////////////////</span>
                        <span className="hidden md:inline">///////////////////////////////////////////</span>
                    </div>

                    {/* Massive Background Text - Cropped */}
                    <h1 className="absolute -bottom-[0.22em] left-1/2 -translate-x-1/2 text-[22vw] leading-none font-bold tracking-tighter select-none z-0 pointer-events-none whitespace-nowrap">
                        {"ZERO UI".split("").map((char, index) => (
                            <span
                                key={index}
                                className="opacity-10 transition-all duration-300 pointer-events-auto hover:opacity-100 hover:text-white dark:hover:text-white hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] inline-block"
                            >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </h1>
                </div>
            </div>
        </footer>
    )
}
