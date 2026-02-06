"use client";

import React, { useEffect, useState } from "react";

interface MeteorCardProps extends React.HTMLAttributes<HTMLDivElement> {
  meteorCount?: number;
  meteorColor?: string; // e.g. "from-slate-500"
  children: React.ReactNode;
}

export default function MeteorCard({
  meteorCount = 20,
  meteorColor = "bg-slate-500",
  children,
  className = "",
  ...props
}: MeteorCardProps) {
  const [meteors, setMeteors] = useState<number[]>([]);

  useEffect(() => {
    const meteorStyles = new Array(meteorCount).fill(0).map(() => Math.random());
    setMeteors(meteorStyles);
  }, [meteorCount]);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/90 shadow-xl ${className}`}
      {...props}
    >
      {/* Meteor Container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {meteors.map((el, idx) => (
          <span
            key={idx}
            className={`absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] ${meteorColor} shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] opacity-0 animate-meteor`}
            style={{
              top: 0,
              left: Math.floor(Math.random() * 400 - 150) + "px",
              animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
              animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
            }}
          >
            {/* Trail */}
            <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
          </span>
        ))}
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
