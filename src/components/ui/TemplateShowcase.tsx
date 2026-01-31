"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import BrowserMockup from "@/components/ui/windowmockup";

const templates = [
  {
    id: "ecommerce",
    title: "E-commerce",
    color: "from-yellow-300 to-yellow-400",
    content: (
      <div className="p-6 h-full flex flex-col bg-gradient-to-br from-yellow-300 to-yellow-400">
        <div className="flex items-center justify-between mb-4">
          <span className="text-black font-medium text-lg">ShopUI</span>
          <div className="flex gap-2">
            <div className="w-16 h-2 bg-black/20 rounded" />
            <div className="w-16 h-2 bg-black/20 rounded" />
            <div className="w-16 h-2 bg-black/20 rounded" />
          </div>
        </div>
        <div className="flex-1 flex gap-4">
          <div className="w-1/2 bg-black/10 rounded-xl" />
          <div className="w-1/2 flex flex-col gap-2">
            <div className="h-4 w-3/4 bg-black/20 rounded" />
            <div className="h-3 w-1/2 bg-black/10 rounded" />
            <div className="h-8 w-24 bg-black rounded-lg mt-auto" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "landing",
    title: "Landing Page",
    color: "from-blue-400 to-blue-500",
    content: (
      <div className="p-6 h-full flex flex-col bg-gradient-to-br from-blue-400 to-blue-500">
        <div className="flex items-center justify-between mb-6">
          <span className="text-white font-medium text-lg">LaunchUI</span>
          <div className="flex gap-3">
            <div className="w-12 h-2 bg-white/30 rounded" />
            <div className="w-12 h-2 bg-white/30 rounded" />
            <div className="w-16 h-6 bg-white rounded-md" />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="h-6 w-48 bg-white/30 rounded mb-3" />
          <div className="h-3 w-64 bg-white/20 rounded mb-2" />
          <div className="h-3 w-56 bg-white/20 rounded mb-6" />
          <div className="flex gap-3">
            <div className="h-10 w-28 bg-white rounded-lg" />
            <div className="h-10 w-28 border-2 border-white/50 rounded-lg" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "dashboard",
    title: "Dashboard",
    color: "from-gray-100 to-white",
    content: (
      <div className="p-4 h-full flex bg-gradient-to-br from-gray-100 to-white">
        <div className="w-16 bg-gray-200 rounded-lg mr-3 flex flex-col items-center py-4 gap-3">
          <div className="w-8 h-8 bg-gray-400 rounded-lg" />
          <div className="w-6 h-6 bg-gray-300 rounded" />
          <div className="w-6 h-6 bg-gray-300 rounded" />
          <div className="w-6 h-6 bg-gray-300 rounded" />
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex gap-3">
            <div className="flex-1 h-20 bg-gray-100 rounded-lg p-3">
              <div className="h-2 w-12 bg-gray-300 rounded mb-2" />
              <div className="h-6 w-16 bg-gray-400 rounded" />
            </div>
            <div className="flex-1 h-20 bg-gray-100 rounded-lg p-3">
              <div className="h-2 w-12 bg-gray-300 rounded mb-2" />
              <div className="h-6 w-16 bg-gray-400 rounded" />
            </div>
          </div>
          <div className="flex-1 bg-gray-100 rounded-lg p-3">
            <div className="h-2 w-20 bg-gray-300 rounded mb-3" />
            <div className="flex gap-1 h-16 items-end">
              {[60, 40, 80, 50, 70, 45, 90].map((h, i) => (
                <div key={i} className="flex-1 bg-gray-400 rounded-t" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function TemplateShowcase() {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle through templates
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setFocusedIndex((prev) => (prev + 1) % templates.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const getCardStyle = (index: number) => {
    const diff = index - focusedIndex;

    // Stacked vertically - cards behind go up and back
    let translateY = 0;
    let translateZ = 0;
    let scale = 1;
    let zIndex = templates.length - Math.abs(diff);

    if (diff === 0) {
      // Front card
      translateY = 0;
      translateZ = 0;
      scale = 1;
      zIndex = 30;
    } else if (diff > 0) {
      // Cards behind (stacked above visually)
      translateY = -40 * diff;
      translateZ = -100 * diff;
      scale = 1 - (0.05 * diff);
      zIndex = 20 - diff;
    } else {
      // Cards that went back
      translateY = 40 * Math.abs(diff);
      translateZ = -100 * Math.abs(diff);
      scale = 1 - (0.05 * Math.abs(diff));
      zIndex = 20 - Math.abs(diff);
    }

    return {
      transform: `translateY(${translateY}px) translateZ(${translateZ}px) scale(${scale})`,
      zIndex,
    };
  };

  const handleNext = () => {
    setFocusedIndex((prev) => (prev + 1) % templates.length);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center pt-10 mb-20">
      <div className="w-full flex flex-col justify-center items-center gap-2 max-w-3xl text-center mb-12">
        <h1 className="text-4xl tracking-tighter font-medium text-foreground">Premium Website Templates</h1>
        <span className="text-zinc-600 dark:text-zinc-400">
          Beautifully designed, fully responsive templates for e-commerce, landing pages, and dashboards. Coming soon.
        </span>
      </div>

      {/* Stacked Cards Container */}
      <div
        className="relative w-full max-w-6xl h-[600px] flex items-end justify-center overflow-hidden"
        style={{ perspective: "1500px" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent z-40 pointer-events-none" />

        {templates.map((template, index) => (
          <div
            key={template.id}
            className="absolute w-[1000px] cursor-pointer transition-all duration-700 ease-out"
            style={getCardStyle(index)}
            onClick={handleNext}
          >
            <BrowserMockup url={`zeroui.dev/templates/${template.id}`}>
              <div className="h-[500px]">
                {template.content}
              </div>
            </BrowserMockup>
          </div>
        ))}
      </div>

      {/* Template Title */}
      <div className="text-center -mt-24 z-50 relative">
        <p className="text-zinc-900 dark:text-white font-medium text-lg mb-4">
          {templates[focusedIndex].title}
        </p>

        {/* CTA Button */}
        <button
          onClick={handleNext}
          className="group flex items-center gap-2 px-6 py-3 bg-zinc-100 dark:bg-gray-950 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] text-black dark:text-white rounded-md border-2 border-zinc-300 dark:border-white/10 text-sm font-medium hover:bg-zinc-200 dark:hover:bg-gray-800 transition-all cursor-pointer"
        >
          Explore Templates
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Dots indicator */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {templates.map((_, index) => (
            <button
              key={index}
              onClick={() => setFocusedIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                focusedIndex === index ? 'bg-zinc-900 dark:bg-white w-4' : 'bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
