"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

/**
 * Re-using the clip-path utility we added to globals.css
 * .clip-path-slant { clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px); }
 */

const PaginationCyber = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);

const PaginationCyberContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1 bg-black/40 p-1 border border-zinc-800 backdrop-blur-sm", className)}
    style={{ clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)" }}
    {...props}
  />
));

const PaginationCyberItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));

interface PaginationCyberLinkProps extends React.ComponentProps<"a"> {
  isActive?: boolean;
}

const PaginationCyberLink = ({
  className,
  isActive,
  children,
  ...props
}: PaginationCyberLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      "flex items-center justify-center min-w-[40px] h-10 px-3 text-sm font-mono border-b-2 transition-all duration-150 cursor-pointer select-none",
      isActive
        ? "border-yellow-500 bg-yellow-500/10 text-yellow-500 font-bold"
        : "border-transparent text-zinc-500 hover:text-yellow-400 hover:bg-yellow-500/5",
      className
    )}
    {...props}
  >
    {children}
  </a>
);

const PaginationCyberPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationCyberLink>) => (
  <PaginationCyberLink
    aria-label="Go to previous page"
    className={cn("border-r border-zinc-800", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span className="sr-only">Previous</span>
  </PaginationCyberLink>
);

const PaginationCyberNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationCyberLink>) => (
  <PaginationCyberLink
    aria-label="Go to next page"
    className={cn("border-l border-zinc-800", className)}
    {...props}
  >
    <span className="sr-only">Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationCyberLink>
);

const PaginationCyberEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-10 w-10 items-center justify-center text-zinc-600 font-mono", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);

export {
  PaginationCyber,
  PaginationCyberContent,
  PaginationCyberEllipsis,
  PaginationCyberItem,
  PaginationCyberLink,
  PaginationCyberNext,
  PaginationCyberPrevious,
};
