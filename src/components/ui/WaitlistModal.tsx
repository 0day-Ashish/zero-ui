"use client";

import { useState } from "react";
import { ArrowRight, X } from "lucide-react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setEmail("");
    } catch (error: any) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error.message);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset state after a delay or immediately if desired
    if (status === "success") {
      setTimeout(() => setStatus("idle"), 500);
    } else {
      setStatus("idle");
      setErrorMessage("");
    }
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
      <div className="relative p-8 w-full max-w-md mx-4 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl">
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

        {status === "success" ? (
          <div className="text-center animate-in fade-in zoom-in duration-300">
            <p className="text-emerald-400 font-medium text-lg mb-2">
              You&apos;re on the list!
            </p>
            <p className="text-zinc-400 text-sm">
              We&apos;ll notify you when we launch.
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
                disabled={status === "loading"}
                className="w-full px-4 py-3 bg-zinc-800/50 border-b border-zinc-600 text-white placeholder:text-zinc-500 focus:outline-none focus:border-zinc-400 transition-all rounded-t-lg disabled:opacity-50"
              />
            </div>
            {status === "error" && (
              <p className="text-red-400 text-sm">{errorMessage || "Something went wrong"}</p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full px-4 py-3 bg-white text-zinc-900 font-medium rounded-lg hover:bg-zinc-100 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Joining..." : "Join Waitlist"}
              {!status && <ArrowRight size={16} />}
            </button>
          </form>
        )}

        <p className="mt-6 text-xs text-zinc-500 text-center">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
