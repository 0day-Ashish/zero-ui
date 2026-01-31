import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle2, Code2, Layers, Zap, Terminal, Copy } from "lucide-react"
import { SpotlightCard } from "@/components/ui/spotlight-card"

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20 overflow-hidden font-sans">
      {/* Noise Overlay */}
      <div className="fixed inset-0 z-[100] w-full h-full bg-noise pointer-events-none mix-blend-overlay"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 h-full w-full bg-background bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2] flex items-center justify-center overflow-hidden pointer-events-none">
        {/* Animated Blobs */}
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob dark:bg-purple-800 dark:mix-blend-normal"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 dark:bg-yellow-800 dark:mix-blend-normal"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 dark:bg-pink-800 dark:mix-blend-normal"></div>

        {/* Radial gradient for the spotlight effect */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background/80 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <Navbar className="z-50" />

      <main className="relative z-10 pt-32 pb-0">

        {/* Hero Section */}
        <section className="container mx-auto px-4 text-center space-y-8 mb-32 relative animate-fade-in-up">
          <div className="animate-fade-in fade-in-0 duration-1000 inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/5 text-primary hover:bg-primary/10 mb-4 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            v1.0.0 Public Beta
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter sm:text-6xl xl:text-8xl/none bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50 pb-4">
            Build beautiful interfaces. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              In record time.
            </span>
          </h1>

          <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl font-light leading-relaxed">
            Zero UI is a collection of re-usable components built using Radix UI and Tailwind CSS.
            Designed for speed, accessibility, and a premium aesthetic.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="shiny h-12 px-8 text-base rounded-full group">
              Start Building <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base backdrop-blur-sm bg-background/50 rounded-full">
              Documentation
            </Button>
          </div>

          {/* Terminal Code Preview */}
          <div className="mt-20 mx-auto max-w-4xl relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative rounded-2xl border bg-black/90 shadow-2xl overflow-hidden text-left font-mono text-sm leading-relaxed text-slate-400">
              <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs text-slate-400 font-medium">zero-ui-terminal — -zsh — 80x24</div>
                <div className="w-10"></div> {/* Spacer for centering */}
              </div>
              <div className="p-6 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">➜</span>
                  <span className="text-blue-500">~</span>
                  <span>npm install zero-ui</span>
                </div>
                <div className="text-slate-500 pb-2">
                  Installing dependencies... <br />
                  <span className="text-green-500">✔</span> Added 14 packages in 500ms
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">➜</span>
                  <span className="text-blue-500">~</span>
                  <span className="text-white">npx zero-ui add navbar</span>
                  <span className="w-2.5 h-5 bg-slate-400 animate-blink block ml-1"></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Marquee */}
        <section className="width-full overflow-hidden mb-32 border-y bg-background/50 backdrop-blur-sm py-12">
          <div className="relative flex overflow-x-hidden group">
            <div className="animate-marquee whitespace-nowrap flex gap-16 text-3xl font-bold text-muted-foreground/20 px-4 select-none">
              <span>NEXT.JS</span>
              <span>REACT</span>
              <span>TAILWIND</span>
              <span>TYPESCRIPT</span>
              <span>RADIX UI</span>
              <span>FRAMER MOTION</span>
              <span>LUCIDE</span>
              <span>VERCEL</span>
              <span>NEXT.JS</span>
              <span>REACT</span>
              <span>TAILWIND</span>
              <span>TYPESCRIPT</span>
              <span>RADIX UI</span>
              <span>FRAMER MOTION</span>
              <span>LUCIDE</span>
              <span>VERCEL</span>
            </div>
            {/* Duplicate for seamless loop */}
            <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16 text-3xl font-bold text-muted-foreground/20 px-4 select-none left-full">
              <span>NEXT.JS</span>
              <span>REACT</span>
              <span>TAILWIND</span>
              <span>TYPESCRIPT</span>
              <span>RADIX UI</span>
              <span>FRAMER MOTION</span>
              <span>LUCIDE</span>
              <span>VERCEL</span>
              <span>NEXT.JS</span>
              <span>REACT</span>
              <span>TAILWIND</span>
              <span>TYPESCRIPT</span>
              <span>RADIX UI</span>
              <span>FRAMER MOTION</span>
              <span>LUCIDE</span>
              <span>VERCEL</span>
            </div>
          </div>
        </section>

        {/* Bento Grid Showcase */}
        <section className="container mx-auto px-4 mb-32">
          <div className="flex flex-col items-center justify-center text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Crafted for Excellence
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Every component is polished to perfection, accessible by default, and easy to customize.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

            {/* Feature 1: Modern Stack (Large Card) */}
            <SpotlightCard className="md:col-span-2 row-span-1 p-8 flex flex-col justify-between">
              <div className="relative z-10">
                <div className="p-3 w-fit rounded-xl bg-blue-500/10 mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Layers className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Modern Stack</h3>
                <p className="text-muted-foreground text-lg">Built with Next.js 15, React 19, and Tailwind CSS v4. The bleeding edge of web development, ready for production.</p>
              </div>
            </SpotlightCard>

            {/* Feature 2: High Performance (Small Card) */}
            <SpotlightCard className="md:col-span-1 row-span-1 p-8 flex flex-col justify-between">
              <div className="relative z-10">
                <div className="p-3 w-fit rounded-xl bg-purple-500/10 mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Zap className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Lightning Fast</h3>
                <p className="text-muted-foreground text-lg">Zero runtime overhead options.</p>
              </div>
            </SpotlightCard>

            {/* Feature 3: Interactive Components (Tall Card) */}
            <SpotlightCard className="md:col-span-1 row-span-2 p-8 flex flex-col items-center justify-center text-center overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
              <Card className="glass-card w-full max-w-[250px] rotate-6 group-hover:rotate-0 transition-all duration-500 mb-8 shadow-2xl border-white/20">
                <CardHeader>
                  <CardTitle className="text-sm">Sign In</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="h-8 bg-muted rounded animate-pulse" />
                  <div className="h-8 bg-black/10 dark:bg-white/10 rounded" />
                  <Button className="w-full h-8 text-xs">Submit</Button>
                </CardContent>
              </Card>
              <h3 className="text-2xl font-bold mb-2 relative z-10">Glassmorphism</h3>
              <p className="text-muted-foreground relative z-10">Premium blur effects out of the box.</p>
            </SpotlightCard>

            {/* Feature 4: Code Quality (Medium Card) */}
            <SpotlightCard className="md:col-span-2 row-span-1 p-8 flex items-center justify-between overflow-hidden">
              <div className="max-w-md relative z-10">
                <div className="p-3 w-fit rounded-xl bg-green-500/10 mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Code2 className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Type-Safe & Accessible</h3>
                <p className="text-muted-foreground text-lg">Written in TypeScript. Follows WAI-ARIA guidelines for maximum reach.</p>
              </div>
              {/* Visual flourish */}
              <div className="hidden sm:flex flex-col gap-3 opacity-50 group-hover:opacity-100 transition-opacity translate-x-10 group-hover:translate-x-0 duration-500">
                <div className="bg-background/80 p-3 rounded-lg border text-xs font-mono shadow-sm">
                  &lt;Button variant="ghost" /&gt;
                </div>
                <div className="bg-background/80 p-3 rounded-lg border text-xs font-mono shadow-sm ml-4">
                  &lt;Navbar sticky /&gt;
                </div>
              </div>
            </SpotlightCard>

            {/* Feature 5: Component Playground (Medium Card) */}
            <SpotlightCard className="md:col-span-2 row-span-1 p-8 flex flex-col">
              <h3 className="text-2xl font-bold mb-6">Component Playground</h3>
              <div className="flex flex-wrap gap-4 items-center justify-center p-12 bg-muted/30 rounded-2xl border border-dashed border-white/20 group-hover:border-white/40 transition-colors">
                <Button>Interactive</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="outline" size="icon"><Terminal className="w-4 h-4" /></Button>
              </div>
            </SpotlightCard>

          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-slate-900 to-black p-16 text-center group hover:border-white/20 transition-colors">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 group-hover:opacity-80 transition-opacity" />

            <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                Ready to build something amazing?
              </h2>
              <p className="text-slate-400 text-xl">
                Join thousands of developers building the future with Zero UI.
                Open source, free to use, and beautiful.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="shiny h-14 px-8 text-lg rounded-full w-full sm:w-auto">
                  Get Started Now
                </Button>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <div className="h-px bg-white/20 flex-1 sm:hidden"></div>
                  <span className="text-slate-500 text-sm sm:hidden">OR</span>
                  <div className="h-px bg-white/20 flex-1 sm:hidden"></div>
                  <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full w-full sm:w-auto border-white/10 hover:bg-white/5 text-white bg-transparent">
                    <span className="mr-2">npm i zero-ui</span>
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-12 text-center text-muted-foreground bg-background/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-primary">Zero UI</span>
              <span className="text-sm">© 2026</span>
            </div>
            <div className="flex gap-8 text-sm font-medium">
              <a href="#" className="hover:text-foreground transition-colors">License</a>
              <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
              <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
            </div>
          </div>
        </footer>

      </main>
    </div>
  )
}
