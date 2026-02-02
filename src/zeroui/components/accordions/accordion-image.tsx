"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface AccordionImageProps {
  items: {
    id: string | number;
    title: string;
    description: string;
    image: string; // URL or path
  }[];
  className?: string;
}

export function AccordionImage({ items, className }: AccordionImageProps) {
  const [activeItem, setActiveItem] = useState<string | number | null>(items[0]?.id || null);

  return (
    <div className={cn("flex flex-col md:flex-row gap-2 w-full h-[500px]", className)}>
      {items.map((item) => {
        const isActive = activeItem === item.id;
        return (
          <div
            key={item.id}
            role="button"
            onClick={() => setActiveItem(item.id)}
            className={cn(
              "relative flex-1 rounded-2xl overflow-hidden cursor-pointer transition-[flex-grow] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group",
              isActive ? "flex-[3] cursor-default" : "hover:flex-[1.2]"
            )}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ backgroundImage: `url(${item.image})` }}
            />

            {/* Overlay Gradient */}
            <div className={cn("absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500", isActive ? "opacity-80" : "opacity-40 group-hover:opacity-60")} />

            {/* Content Labels */}
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
              {/* Vertical Title for inactive state (Desktop only) */}
              <div className={cn("absolute bottom-6 left-6 origin-bottom-left -rotate-90 md:block hidden transition-opacity duration-300", isActive ? "opacity-0 invisible" : "opacity-100 visible")}>
                <p className="text-white font-bold text-2xl whitespace-nowrap tracking-wider">{item.title}</p>
              </div>

              {/* Full Content for active state */}
              <div className={cn("transition-all duration-500 delay-100", isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 hidden md:block")}>
                {/* Mobile fallback: always show title if active, but also show if inactive on mobile... actually better to just hide desc on inactive */}
                <h3 className={cn("text-white font-bold text-2xl mb-2", !isActive && "md:hidden")}>{item.title}</h3>
                <p className="text-white/80 text-sm md:text-base line-clamp-2 md:line-clamp-none">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
