"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import WaitlistModal from "@/components/ui/WaitlistModal";

export default function NotFound() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Back to home */}
      <Link
        href="/"
        className="absolute top-2 hover:underline left-4 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 text-sm font-medium transition-colors z-10"
      >
        <ArrowLeft className="inline-block" size={14} /> Back to home
      </Link>

      {/* Main content container */}
      <div className="min-h-screen flex flex-col">
        {/* Waitlist CTA - Middle */}
        <div className="flex-1 flex items-center justify-center px-6 pt-20">
          <div className="text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md border-zinc-800/20 dark:border-white/20 border-2 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] mb-4">
              Coming Soon
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold text-zinc-900 dark:text-white mb-3">
              We&apos;re launching soon
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-md">
              Be the first to know when we go live and get early access to all components.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors inline-flex items-center gap-2"
            >
              Join the waitlist
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Bottom 404 section */}
        <div className="px-6 pb-20 flex items-end gap-6">
          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-bold text-zinc-900 dark:text-white leading-none select-none">
            404
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xs pb-2">
            indicates that the browser was able to communicate with the server, but the server could not find the requested resource.
          </p>
        </div>
      </div>

      {/* Modal */}
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
