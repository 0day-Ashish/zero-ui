"use client";

import Link from "next/link";
import {
  iPhoneMockup as IPhoneMockup,
  iPadMockup as IPadMockup,
  MacBookMockup,
  iMacMockup as IMacMockup,
  AppleWatchMockup,
  BrowserMockup,
} from "@/zeroui/components/mockups";

interface MockupItem {
  id: string;
  name: string;
  href: string;
  description: string;
  count: number;
}

const mockups: MockupItem[] = [
  {
    id: "iphone",
    name: "iPhone",
    href: "/mockups/iphone",
    description: "iPhone device frames for app showcases",
    count: 8,
  },
  {
    id: "ipad",
    name: "iPad",
    href: "/mockups/ipad",
    description: "iPad device frames for tablet displays",
    count: 6,
  },
  {
    id: "macbook",
    name: "MacBook",
    href: "/mockups/macbook",
    description: "MacBook device frames for web displays",
    count: 5,
  },
  {
    id: "imac",
    name: "iMac",
    href: "/mockups/imac",
    description: "iMac device frames for desktop showcases",
    count: 4,
  },
  {
    id: "apple-watch",
    name: "Apple Watch",
    href: "/mockups/apple-watch",
    description: "Apple Watch device frames for wearables",
    count: 4,
  },
  {
    id: "windows",
    name: "Windows",
    href: "/mockups/windows",
    description: "Browser, desktop & terminal window frames",
    count: 11,
  },
];

function MockupPreview({ id }: { id: string }) {
  switch (id) {
    case "iphone":
      return (
        <div className="scale-[0.32] origin-center">
          <IPhoneMockup model="15-pro" color="black">
            <div className="w-full h-full bg-white dark:bg-zinc-900 flex items-center justify-center">
              <span className="text-2xl font-bold text-zinc-900 dark:text-white">zeroui</span>
            </div>
          </IPhoneMockup>
        </div>
      );
    case "ipad":
      return (
        <div className="scale-[0.22] origin-center">
          <IPadMockup model="pro-11" color="space-gray">
            <div className="w-full h-full bg-white dark:bg-zinc-900 flex items-center justify-center">
              <span className="text-4xl font-bold text-zinc-900 dark:text-white">zeroui</span>
            </div>
          </IPadMockup>
        </div>
      );
    case "macbook":
      return (
        <div className="scale-[0.24] origin-center">
          <MacBookMockup model="pro-14" color="space-gray">
            <div className="w-full h-full bg-white dark:bg-zinc-900 flex items-center justify-center">
              <span className="text-4xl font-bold text-zinc-900 dark:text-white">zeroui</span>
            </div>
          </MacBookMockup>
        </div>
      );
    case "imac":
      return (
        <div className="scale-[0.18] origin-center">
          <IMacMockup model="24" color="blue">
            <div className="w-full h-full bg-white dark:bg-zinc-900 flex items-center justify-center">
              <span className="text-5xl font-bold text-zinc-900 dark:text-white">zeroui</span>
            </div>
          </IMacMockup>
        </div>
      );
    case "apple-watch":
      return (
        <div className="scale-[0.5] origin-center">
          <AppleWatchMockup model="series-9" size="45mm" color="midnight">
            <div className="w-full h-full bg-white dark:bg-zinc-900 flex items-center justify-center">
              <span className="text-sm font-bold text-zinc-900 dark:text-white">zeroui</span>
            </div>
          </AppleWatchMockup>
        </div>
      );
    case "windows":
      return (
        <div className="scale-[0.5] origin-center">
          <BrowserMockup style="chrome" url="zeroui.dev" className="w-64">
            <div className="w-full h-64 bg-white dark:bg-zinc-900 flex items-center justify-center">
              <span className="text-3xl font-bold text-zinc-900 dark:text-white">zeroui</span>
            </div>
          </BrowserMockup>
        </div>
      );
    default:
      return null;
  }
}

const previewBgColors: Record<string, string> = {
  iphone: "bg-white dark:bg-black",
  ipad: "bg-white dark:bg-black",
  macbook: "bg-white dark:bg-black",
  imac: "bg-white dark:bg-black",
  "apple-watch": "bg-white dark:bg-black",
  windows: "bg-white dark:bg-black",
};

function MockupCard({ id, name, href, description, count }: MockupItem) {
  return (
    <Link href={href} className="group block">
      <div
        className="relative w-full h-80 rounded-xl overflow-hidden
        bg-zinc-100 dark:bg-zinc-900
        border border-zinc-200 dark:border-zinc-800
        hover:border-zinc-400 dark:hover:border-zinc-500
        transition-all duration-300
        shadow-[inset_0_2px_10px_rgba(0,0,0,0.06)] dark:shadow-[inset_0_2px_10px_rgba(0,0,0,0.4)]
        hover:shadow-lg hover:shadow-zinc-500/10"
      >
        {/* Preview Area */}
        <div
          className={`m-3 h-52 rounded-lg overflow-hidden flex items-center justify-center ${previewBgColors[id] || "bg-black"}`}
        >
          <div className="group-hover:scale-110 transition-transform duration-300">
            <MockupPreview id={id} />
          </div>
        </div>

        {/* Details */}
        <div className="px-4 pt-2 pb-4">
          <h3 className="text-lg font-medium text-zinc-900 dark:text-white">{name}</h3>
          <span className="text-sm text-zinc-600 dark:text-zinc-400">
            {description} | <strong>{count}+</strong> variations
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function MockupsPage() {
  return (
    <div className="min-h-screen w-full px-5 pt-10 pb-20">
      <div className="leading-tight mb-10 text-center flex flex-col items-center justify-center">
        <h1 className="text-3xl font-medium text-zinc-900 dark:text-white">Device Mockups</h1>
        <span className="text-lg tracking-tight text-zinc-600 dark:text-zinc-400 mt-1">
          Beautiful CSS device frames to showcase your apps and designs.
        </span>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {mockups.map((mockup) => (
            <MockupCard
              key={mockup.id}
              id={mockup.id}
              name={mockup.name}
              href={mockup.href}
              description={mockup.description}
              count={mockup.count}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
