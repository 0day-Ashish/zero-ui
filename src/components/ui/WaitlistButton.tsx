"use client";

import { useState } from "react";
import WaitlistModal from "./WaitlistModal";

export default function WaitlistButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="group flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-900 rounded-md border-2 border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all cursor-pointer"
      >
        <span className="text-sm text-zinc-700 dark:text-zinc-300">Join the waitlist!</span>
        <svg
          className="w-4 h-4 text-zinc-500 group-hover:translate-x-0.5 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
