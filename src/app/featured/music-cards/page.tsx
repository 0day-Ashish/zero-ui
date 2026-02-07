"use client";

import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { Play, Pause, SkipBack, SkipForward, Heart, Share, Upload } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const featuredComponents = [
  { id: "profile-cards", name: "Profile Cards", href: "/featured/profile-cards" },
  { id: "music-cards", name: "Music Cards", href: "/featured/music-cards" },
  { id: "calendar", name: "Calendar", href: "/featured/calendar" },
  { id: "wallet", name: "Wallet", href: "/featured/wallet" },
  { id: "ai-input", name: "AI Input", href: "/featured/ai-input" },
  { id: "github-calendar", name: "Github Calendar", href: "/featured/github-calendar" },
  { id: "otp-input", name: "OTP Input", href: "/featured/otp-input" },
  { id: "priority-cards", name: "Priority Cards", href: "/featured/priority-cards" },
  { id: "upload-card", name: "Upload Card", href: "/featured/upload-card" },
  { id: "navbars", name: "Navbars", href: "/featured/navbars" },
];

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/featured/music-card.tsx",
    code: `"use client";

import React, { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Heart, Upload } from "lucide-react";

interface MusicCardProps {
  artistName: string;
  artistHandle: string;
  currentTime?: string;
  remainingTime?: string;
  progress?: number;
}

export default function MusicCard({
  artistName,
  artistHandle,
  currentTime = "0:52",
  remainingTime = "-1:21",
  progress = 40,
}: MusicCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(true);

  return (
    // Component implementation...
  );
}`,
  },
];

function MusicCard({
  artistName,
  artistHandle,
  initialProgress = 40,
  duration = 133, // Total duration in seconds (2:13)
}: {
  artistName: string;
  artistHandle: string;
  initialProgress?: number;
  duration?: number;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(true);
  const [progress, setProgress] = useState(initialProgress);

  // Format seconds to mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const currentSeconds = (progress / 100) * duration;
  const remainingSeconds = duration - currentSeconds;
  const currentTime = formatTime(currentSeconds);
  const remainingTime = `-${formatTime(remainingSeconds)}`;

  // Animate progress when playing
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsPlaying(false);
          return 0;
        }
        return prev + 0.5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="relative w-[320px] aspect-square rounded-[32px] overflow-hidden bg-[#393939] shadow-2xl">
      {/* 3D Border Effect */}
      <div
        className="absolute inset-0 rounded-[32px]"
        style={{
          boxShadow: "inset 0 0 0 8px rgba(255, 255, 255, 0.8), inset 0 0 0 10px rgba(80, 75, 70, 0.5)",
        }}
      />

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5a5550]/80 to-[#3a3530]/90" />

      {/* Artist Image Background */}
      <div className="absolute inset-0 opacity-60">
        <Image src="/singer.webp" alt="Background" fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col p-5">
        {/* Top Bar */}
        <div className="flex items-center justify-between">
          {/* Artist Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden relative">
              <Image src="/singer.webp" alt={artistName} fill className="object-cover" />
            </div>
            <div>
              <p className="text-white font-medium text-sm">{artistName}</p>
              <p className="text-zinc-400 text-xs">{artistHandle}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full bg-zinc-700/60 flex items-center justify-center hover:bg-zinc-600/60 transition-colors">
              <Upload size={18} className="text-zinc-300" />
            </button>
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="w-10 h-10 rounded-full bg-zinc-700/60 flex items-center justify-center hover:bg-zinc-600/60 transition-colors"
            >
              <Heart
                size={18}
                className={isLiked ? "fill-red-400 text-red-400" : "text-zinc-300"}
              />
            </button>
          </div>
        </div>

        {/* Spacer for album art area */}
        <div className="flex-1" />

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-zinc-400 mb-2">
            <span>{currentTime}</span>
            <span>{remainingTime}</span>
          </div>
          <div className="h-1 bg-zinc-600/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-zinc-300 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center justify-center gap-6">
          <button className="text-zinc-400 hover:text-white transition-colors">
            <SkipBack size={24} fill="currentColor" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-12 h-12 rounded-full bg-zinc-600/40 flex items-center justify-center hover:bg-zinc-500/40 transition-colors border border-zinc-500/30"
          >
            {isPlaying ? (
              <Pause size={24} className="text-white" fill="white" />
            ) : (
              <Play size={24} className="text-white ml-1" fill="white" />
            )}
          </button>
          <button className="text-zinc-400 hover:text-white transition-colors">
            <SkipForward size={24} fill="currentColor" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MusicCardsPage() {
  return (
    <ComponentPageLayout
      componentName="Music Cards"
      description="Sleek music player card with playback controls, progress bar, and social actions."
      componentItems={featuredComponents}
      activeComponentId="music-cards"
      prevComponent={{ name: "Profile Cards", href: "/featured/profile-cards" }}
      nextComponent={{ name: "Calendar", href: "/featured/calendar" }}
    >
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Music Player</h3>
      <ComponentPreview
        code={`<MusicCard
  artistName="Terence Howard"
  artistHandle="@terenceh"
  initialProgress={40}
/>`}
      >
        <div
          className="relative flex flex-wrap gap-8 items-center justify-center p-12 rounded-xl overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <MusicCard
            artistName="Terence Howard"
            artistHandle="@terenceh"
            initialProgress={40}
          />
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Different States</h3>
      <ComponentPreview
        code={`<MusicCard artistName="Artist Name" initialProgress={10} />
<MusicCard artistName="Artist Name" initialProgress={75} />`}
      >
        <div
          className="relative flex flex-wrap gap-8 items-center justify-center p-12 rounded-xl overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <MusicCard
            artistName="Luna Martinez"
            artistHandle="@lunabeats"
            initialProgress={10}
          />
          <MusicCard
            artistName="Alex Chen"
            artistHandle="@alexmusic"
            initialProgress={75}
          />
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="music-card"
        dependencies={["lucide-react"]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          { name: "artistName", type: "string", default: "-" },
          { name: "artistHandle", type: "string", default: "-" },
          { name: "initialProgress", type: "number", default: "40" },
          { name: "duration", type: "number", default: "133" },
        ]}
      />
    </ComponentPageLayout>
  );
}
