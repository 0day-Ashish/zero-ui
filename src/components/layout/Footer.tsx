import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Components", href: "/Components" },
  { label: "Blocks", href: "/Blocks" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Documentation", href: "/docs" },
  { label: "Showcase", href: "/Showcase" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="border-t border-zinc-200 dark:border-zinc-800 overflow-hidden">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-zinc-200 dark:border-zinc-800">
          {/* Left - Tagline */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800">
            <div className="flex -space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-zinc-300 dark:bg-zinc-700 border-2 border-zinc-100 dark:border-zinc-900" />
              <div className="w-10 h-10 rounded-full bg-zinc-400 dark:bg-zinc-600 border-2 border-zinc-100 dark:border-zinc-900" />
              <div className="w-10 h-10 rounded-full bg-zinc-500 border-2 border-zinc-100 dark:border-zinc-900" />
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-zinc-800 dark:text-gray-200">
              Components that
              <br />
              don&apos;t <span className="italic text-emerald-500 dark:text-emerald-400">get in the way.</span>
            </h2>
          </div>

          {/* Right - Links */}
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between py-2 text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-gray-200 transition-colors border-b border-zinc-200 dark:border-zinc-800 group"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative p-8 md:p-12 min-h-[300px] flex flex-col justify-between">
          {/* Large Brand Name */}
          <div className="font-nuqun text-[120px] md:text-[200px] lg:text-[300px] leading-none text-zinc-800 dark:text-zinc-200 select-none">
            ZeroUI
          </div>

          {/* Social Icons */}
          <div className="absolute top-8 right-8 flex items-center gap-3">
            <Link
              href="https://x.com"
              target="_blank"
              className="p-2 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-gray-200 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="p-2 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-gray-200 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
            <Link
              href="https://discord.gg"
              target="_blank"
              className="p-2 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-gray-200 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </Link>
          </div>

          {/* Copyright */}
          <div className="absolute bottom-8 right-8 text-right text-xs text-zinc-500 dark:text-gray-500 uppercase tracking-wider">
            <p>All rights reserved.</p>
            <p>&copy; {new Date().getFullYear()} ZeroUI Team.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
