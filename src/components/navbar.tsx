"use client"
import * as React from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
    logo?: React.ReactNode
    menuItems?: { label: string; href: string }[]
    action?: React.ReactNode
}

function ThemeToggle() {
    const { setTheme, theme } = useTheme()

    return (
        <Button
            variant="ghost"
            size="icon"
            className="rounded-full w-8 h-8"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}

export function Navbar({
    className,
    logo = <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Zero</span>,
    menuItems = [
        { label: "Features", href: "#" },
        { label: "Components", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Docs", href: "#" },
    ],
    // We will inject the ThemeToggle into the default action if not overridden
    action,
    ...props
}: NavbarProps) {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isHidden, setIsHidden] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)

        // Intersection Observer to hide navbar when footer is visible
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsHidden(entry.isIntersecting)
            },
            { threshold: 0.1 } // Trigger when 10% of footer is visible
        )

        const footer = document.querySelector("footer")
        if (footer) {
            observer.observe(footer)
        }

        return () => {
            window.removeEventListener("scroll", handleScroll)
            if (footer) observer.unobserve(footer)
        }
    }, [])

    // Default action with toggle if none provided
    const finalAction = action || (
        <div className="flex gap-2 items-center">
            <ThemeToggle />
            <Button variant="ghost" size="sm" className="rounded-full">Sign In</Button>
            <Button size="sm" className="rounded-full">Get Started</Button>
        </div>
    )

    return (
        <nav
            className={cn(
                "fixed top-6 inset-x-0 mx-auto z-50 transition-all duration-700 cubic-bezier(0.25, 0.8, 0.25, 1)",
                isHidden ? "-translate-y-[200%] opacity-0 pointer-events-none" : "translate-y-0 opacity-100",
                isOpen
                    ? "w-[90%] max-w-5xl rounded-3xl"
                    : isScrolled
                        ? "w-[380px] rounded-full top-4" // Fixed width allows smooth transition
                        : "w-[90%] max-w-5xl rounded-full",
                className
            )}
            {...props}
        >
            {/* Glass Container */}
            <div className={cn(
                "relative w-full overflow-hidden bg-background/60 backdrop-blur-xl border border-white/10 dark:border-white/5 shadow-2xl transition-all duration-500 ease-in-out",
                isOpen ? "rounded-3xl h-auto" : "rounded-full h-16",
                isScrolled && !isOpen ? "px-2" : "" // Reduce padding when compact
            )}>

                {/* Main Bar */}
                <div className={cn(
                    "h-16 flex items-center justify-between transition-all duration-500",
                    isOpen ? "px-6" : isScrolled ? "px-4 gap-4" : "px-6"
                )}>
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        {logo}
                    </div>

                    {/* Desktop Menu */}
                    <div className={cn(
                        "hidden md:flex items-center transition-all duration-700 ease-in-out overflow-hidden transform",
                        isScrolled && !isOpen
                            ? "max-w-0 opacity-0 px-0"
                            : "max-w-[500px] opacity-100 gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    )}>
                        {menuItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:bg-muted/50 px-3 py-1.5 rounded-full",
                                    isScrolled && !isOpen ? "px-2" : ""
                                )}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className={cn(
                        "hidden md:flex items-center transition-all duration-300 gap-4",
                    )}>
                        {finalAction}
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center gap-2">
                        {/* Show theme toggle on mobile too? Maybe just inside menu or here. Let's put it inside menu to keep bar clean or here. 
                             Actually, user didn't specify. Putting it in the menu is cleaner for condensed bar.
                             But let's put it here for now so it's accessible.
                         */}
                        <div className={cn("transition-opacity duration-300", isScrolled ? "hidden" : "block")}>
                            {/* Hide toggle on scroll in mobile if space is tight? Or keep it. 
                                 Let's actually keep it simple: Just menu button. The toggle is inside the expanded menu usually.
                             */}
                        </div>
                        <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu Content (Expandable) */}
                <div className={cn(
                    "md:hidden px-6 pb-6 pt-2 space-y-4 flex flex-col transition-opacity duration-300",
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                    {menuItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2 border-b border-white/5 last:border-0"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className="pt-4 flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Theme</span>
                            <ThemeToggle />
                        </div>
                        <Button variant="outline" className="w-full justify-center rounded-full">Sign In</Button>
                        <Button className="w-full justify-center rounded-full shiny">Get Started</Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
