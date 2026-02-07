"use client";

import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { Plus, Instagram, Twitter } from "lucide-react";
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
    filename: "components/featured/profile-card.tsx",
    code: `"use client";

import React from "react";
import { Plus, Instagram } from "lucide-react";

interface ProfileCardProps {
  name: string;
  bio: string;
  likes: string;
  posts: string;
  views: string;
  variant?: "default" | "dark";
}

export default function ProfileCard({
  name,
  bio,
  likes,
  posts,
  views,
  variant = "default",
}: ProfileCardProps) {
  // Component implementation...
}`,
  },
];

// Threads Icon Component
function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.88-.73 2.108-1.146 3.456-1.17 1.005-.018 1.92.089 2.744.32-.02-.6-.096-1.14-.229-1.617-.267-.96-.729-1.676-1.18-1.893-.29-.14-.64-.167-1.103-.167h-.076c-1.17.02-2.274.378-2.82.97l-1.407-1.47c.962-.92 2.574-1.5 4.2-1.517l.196.001c.752 0 1.478.098 2.096.399 1.053.513 1.818 1.565 2.208 3.034.204.77.317 1.636.341 2.596l.004.323c1.107.646 1.961 1.495 2.47 2.535.737 1.504.852 4.064-1.266 6.14-1.876 1.838-4.175 2.632-7.451 2.654zm-.07-5.896c-1.052.02-2.063.332-2.63.754-.38.283-.56.646-.535 1.08.025.404.253.78.645 1.058.453.32 1.14.518 1.94.475 1.07-.058 1.9-.445 2.467-1.152.417-.52.713-1.2.876-2.026-.876-.213-1.792-.21-2.763-.189z" />
    </svg>
  );
}

// X (Twitter) Icon
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function ProfileCard({
  name,
  bio,
  likes,
  posts,
  views,
  variant = "default",
}: {
  name: string;
  bio: string;
  likes: string;
  posts: string;
  views: string;
  variant?: "default" | "dark";
}) {
  const isDark = variant === "dark";

  return (
    <div className={`w-[320px] rounded-3xl shadow-lg overflow-hidden ${isDark ? "bg-zinc-900" : "bg-white"}`}>
      {/* Cover Image */}
      <div className={`relative h-28 ${isDark ? "bg-gradient-to-b from-zinc-800 to-zinc-900" : "bg-gradient-to-b from-sky-100 to-sky-50"}`}>
        {/* Cloud-like shapes */}
        {!isDark && (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-4 left-1/4 w-20 h-12 bg-white/80 rounded-full blur-sm" />
            <div className="absolute top-8 left-1/3 w-24 h-14 bg-white/70 rounded-full blur-sm" />
            <div className="absolute top-6 right-1/4 w-16 h-10 bg-white/60 rounded-full blur-sm" />
          </div>
        )}

        {/* Follow Button */}
        <button className={`absolute top-4 right-4 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow ${isDark ? "bg-zinc-800 text-white" : "bg-white text-zinc-800"}`}>
          Follow <Plus size={16} />
        </button>

        {/* Avatar */}
        <div className="absolute -bottom-10 left-6">
          <div className="flex flex-row gap-10 mt-2">
            <div className={`w-20 h-20 rounded-full border-4 shadow-md overflow-hidden relative ${isDark ? "border-zinc-900" : "border-white"}`}>
              <Image src="/profile.jpg" alt={name} fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-14 px-6 pb-4">
        <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-zinc-900"}`}>{name}</h3>
        <p className={`text-sm mt-1 ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>{bio}</p>

        {/* Stats */}
        <div className={`flex justify-between mt-6 px-2 border py-4 rounded-lg ${isDark ? "bg-zinc-800 border-zinc-700" : "bg-zinc-50 border-zinc-200"}`}>
          <div className="text-center">
            <p className={`text-lg font-bold ${isDark ? "text-white" : "text-zinc-900"}`}>{likes}</p>
            <p className={`text-xs ${isDark ? "text-zinc-500" : "text-zinc-400"}`}>Likes</p>
          </div>
          <div className="text-center">
            <p className={`text-lg font-bold ${isDark ? "text-white" : "text-zinc-900"}`}>{posts}</p>
            <p className={`text-xs ${isDark ? "text-zinc-500" : "text-zinc-400"}`}>Posts</p>
          </div>
          <div className="text-center">
            <p className={`text-lg font-bold ${isDark ? "text-white" : "text-zinc-900"}`}>{views}</p>
            <p className={`text-xs ${isDark ? "text-zinc-500" : "text-zinc-400"}`}>Views</p>
          </div>
        </div>

        {/* Social Links */}
        <div className={`flex justify-center gap-8 mt-6 pt-4 border-t ${isDark ? "border-zinc-800" : "border-zinc-100"}`}>
          <button className={`transition-colors ${isDark ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-zinc-900"}`}>
            <Instagram size={22} />
          </button>
          <button className={`transition-colors ${isDark ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-zinc-900"}`}>
            <XIcon className="w-5 h-5" />
          </button>
          <button className={`transition-colors ${isDark ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-zinc-900"}`}>
            <ThreadsIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProfileCardsPage() {
  return (
    <ComponentPageLayout
      componentName="Profile Cards"
      description="Elegant user profile cards with stats, social links, and multiple variants."
      componentItems={featuredComponents}
      activeComponentId="profile-cards"
      nextComponent={{ name: "Music Cards", href: "/featured/music-cards" }}
    >
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Default Variant</h3>
      <ComponentPreview
        code={`<ProfileCard
  name="Noah Thompson"
  bio="Product Designer who focuses on simplicity & usability."
  likes="72.9K"
  posts="828"
  views="342.9K"
  variant="default"
/>`}
      >
        <div
          className="flex flex-wrap gap-8 items-center justify-center p-8 rounded-xl bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <ProfileCard
            name="Noah Thompson"
            bio="Product Designer who focuses on simplicity & usability."
            likes="72.9K"
            posts="828"
            views="342.9K"
            variant="default"
          />
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Dark Variant</h3>
      <ComponentPreview
        code={`<ProfileCard
  name="Noah Thompson"
  bio="Product Designer who focuses on simplicity & usability."
  likes="72.9K"
  posts="828"
  views="342.9K"
  variant="dark"
/>`}
      >
        <div
          className="flex flex-wrap gap-8 items-center justify-center p-8 rounded-xl bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <ProfileCard
            name="Noah Thompson"
            bio="Product Designer who focuses on simplicity & usability."
            likes="72.9K"
            posts="828"
            views="342.9K"
            variant="dark"
          />
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Side by Side</h3>
      <ComponentPreview
        code={`<ProfileCard variant="default" ... />
<ProfileCard variant="dark" ... />`}
      >
        <div
          className="flex flex-wrap gap-8 items-center justify-center p-8 rounded-xl bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <ProfileCard
            name="Noah Thompson"
            bio="Product Designer who focuses on simplicity & usability."
            likes="72.9K"
            posts="828"
            views="342.9K"
            variant="default"
          />
          <ProfileCard
            name="Noah Thompson"
            bio="Product Designer who focuses on simplicity & usability."
            likes="72.9K"
            posts="828"
            views="342.9K"
            variant="dark"
          />
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="profile-card"
        dependencies={["lucide-react"]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          { name: "name", type: "string", default: "-" },
          { name: "bio", type: "string", default: "-" },
          { name: "likes", type: "string", default: "-" },
          { name: "posts", type: "string", default: "-" },
          { name: "views", type: "string", default: "-" },
          { name: "variant", type: '"default" | "dark"', default: '"default"' },
        ]}
      />
    </ComponentPageLayout>
  );
}
