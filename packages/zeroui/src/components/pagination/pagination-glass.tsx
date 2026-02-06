"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

const PaginationGlass = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);

const PaginationGlassContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(
      "flex flex-row items-center gap-1 p-2 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg",
      className
    )}
    {...props}
  />
));

const PaginationGlassItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));

interface PaginationGlassLinkProps extends React.ComponentProps<"a"> {
  isActive?: boolean;
}

const PaginationGlassLink = ({
  className,
  isActive,
  children,
  ...props
}: PaginationGlassLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      "flex items-center justify-center min-w-[36px] h-9 px-3 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer select-none",
      isActive
        ? "bg-white/90 text-zinc-900 shadow-sm"
        : "text-zinc-600 dark:text-zinc-300 hover:bg-white/40 dark:hover:bg-white/10 hover:text-zinc-900 dark:hover:text-white",
      className
    )}
    {...props}
  >
    {children}
  </a>
);

const PaginationGlassPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationGlassLink>) => (
  <PaginationGlassLink
    aria-label="Go to previous page"
    className={cn("pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span className="sr-only">Previous</span>
  </PaginationGlassLink>
);

const PaginationGlassNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationGlassLink>) => (
  <PaginationGlassLink
    aria-label="Go to next page"
    className={cn("pr-2.5", className)}
    {...props}
  >
    <span className="sr-only">Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationGlassLink>
);

const PaginationGlassEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center text-zinc-500", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);

export {
  PaginationGlass,
  PaginationGlassContent,
  PaginationGlassEllipsis,
  PaginationGlassItem,
  PaginationGlassLink,
  PaginationGlassNext,
  PaginationGlassPrevious,
};
