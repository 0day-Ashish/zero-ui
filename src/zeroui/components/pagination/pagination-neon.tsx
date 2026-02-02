"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

const PaginationNeon = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);

const PaginationNeonContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-2", className)}
    {...props}
  />
));

const PaginationNeonItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));

interface PaginationNeonLinkProps extends React.ComponentProps<"a"> {
  isActive?: boolean;
}

const PaginationNeonLink = ({
  className,
  isActive,
  children,
  ...props
}: PaginationNeonLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      "relative flex items-center justify-center min-w-[40px] h-10 px-3 text-sm font-bold border-2 transition-all duration-300 cursor-pointer select-none overflow-hidden group",
      isActive
        ? "border-cyan-400 text-cyan-400 bg-cyan-950/30 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
        : "border-zinc-800 text-zinc-500 hover:border-cyan-700 hover:text-cyan-200 hover:bg-cyan-950/10",
      className
    )}
    {...props}
  >
    {isActive && (
      <div className="absolute inset-0 bg-cyan-400/10 animate-pulse" />
    )}
    <span className="relative z-10">{children}</span>
  </a>
);

const PaginationNeonPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationNeonLink>) => (
  <PaginationNeonLink
    aria-label="Go to previous page"
    className={cn("", className)}
    {...props}
  >
    <ChevronLeft className="h-5 w-5" />
  </PaginationNeonLink>
);

const PaginationNeonNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationNeonLink>) => (
  <PaginationNeonLink
    aria-label="Go to next page"
    className={cn("", className)}
    {...props}
  >
    <ChevronRight className="h-5 w-5" />
  </PaginationNeonLink>
);

const PaginationNeonEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-10 w-10 items-center justify-center text-zinc-600", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);

export {
  PaginationNeon,
  PaginationNeonContent,
  PaginationNeonEllipsis,
  PaginationNeonItem,
  PaginationNeonLink,
  PaginationNeonNext,
  PaginationNeonPrevious,
};
