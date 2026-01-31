"use client";

import { useState } from "react";
import { ArrowRight, X } from "lucide-react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  const handleClose = () => {
    onClose();
    setSubmitted(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={handleClose}
      />

      {/* Modal content */}
      <div className="relative p-8 w-full max-w-md mx-4">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Logo */}
        <h2 className="text-3xl font-bold font-nuqun text-white mb-8 text-center">
          ZeroUI
        </h2>

        <div className="mb-6 text-center">
          <h3 className="text-xl font-semibold text-white mb-2">
            Join the waitlist
          </h3>
          <p className="text-zinc-400 text-sm">
            Enter your email to get notified when we launch.
          </p>
        </div>

        {submitted ? (
          <div className="text-center">
            <p className="text-emerald-400 font-medium">
              You&apos;re on the list! We&apos;ll notify you when we launch.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                autoFocus
                className="w-full px-4 py-3 bg-transparent border-b border-zinc-600 text-white placeholder:text-zinc-500 focus:outline-none focus:border-zinc-400 transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-white text-zinc-900 font-medium rounded-lg hover:bg-zinc-100 transition-colors flex items-center justify-center gap-2"
            >
              Join Waitlist
              <ArrowRight size={16} />
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-zinc-500 text-center">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
