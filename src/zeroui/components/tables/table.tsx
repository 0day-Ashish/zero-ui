"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  variant?: "default" | "striped" | "bordered";
  size?: "sm" | "md" | "lg";
}

interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

interface TableFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  selected?: boolean;
}

interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  sortable?: boolean;
  sortDirection?: "asc" | "desc" | null;
  onSort?: () => void;
}

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {}

interface TableCaptionProps extends React.HTMLAttributes<HTMLTableCaptionElement> {}

const TableContext = React.createContext<{
  variant: "default" | "striped" | "bordered";
  size: "sm" | "md" | "lg";
}>({
  variant: "default",
  size: "md",
});

export function Table({
  variant = "default",
  size = "md",
  className,
  children,
  ...props
}: TableProps) {
  return (
    <TableContext.Provider value={{ variant, size }}>
      <div className="w-full overflow-auto">
        <table
          className={cn(
            "w-full caption-bottom text-sm",
            variant === "bordered" && "border border-zinc-200 dark:border-zinc-800",
            className
          )}
          {...props}
        >
          {children}
        </table>
      </div>
    </TableContext.Provider>
  );
}

export function TableHeader({ className, ...props }: TableHeaderProps) {
  return (
    <thead
      className={cn(
        "border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50",
        className
      )}
      {...props}
    />
  );
}

export function TableBody({ className, ...props }: TableBodyProps) {
  const { variant } = React.useContext(TableContext);
  return (
    <tbody
      className={cn(
        "[&_tr:last-child]:border-0",
        variant === "striped" && "[&_tr:nth-child(even)]:bg-zinc-50 dark:[&_tr:nth-child(even)]:bg-zinc-900/50",
        className
      )}
      {...props}
    />
  );
}

export function TableFooter({ className, ...props }: TableFooterProps) {
  return (
    <tfoot
      className={cn(
        "border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 font-medium",
        className
      )}
      {...props}
    />
  );
}

export function TableRow({ className, selected, ...props }: TableRowProps) {
  const { variant } = React.useContext(TableContext);
  return (
    <tr
      className={cn(
        "border-b border-zinc-200 dark:border-zinc-800 transition-colors",
        "hover:bg-zinc-50 dark:hover:bg-zinc-900/50",
        selected && "bg-zinc-100 dark:bg-zinc-800",
        variant === "bordered" && "border-x",
        className
      )}
      {...props}
    />
  );
}

export function TableHead({
  className,
  sortable,
  sortDirection,
  onSort,
  children,
  ...props
}: TableHeadProps) {
  const { size } = React.useContext(TableContext);

  const sizes = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-sm",
  };

  return (
    <th
      className={cn(
        "text-left align-middle font-medium text-zinc-500 dark:text-zinc-400",
        sizes[size],
        sortable && "cursor-pointer select-none hover:text-zinc-900 dark:hover:text-zinc-100",
        className
      )}
      onClick={sortable ? onSort : undefined}
      {...props}
    >
      <div className="flex items-center gap-2">
        {children}
        {sortable && (
          <span className="inline-flex flex-col">
            <svg
              className={cn(
                "h-3 w-3 -mb-1",
                sortDirection === "asc" ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-300 dark:text-zinc-600"
              )}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 8l-6 6h12z" />
            </svg>
            <svg
              className={cn(
                "h-3 w-3",
                sortDirection === "desc" ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-300 dark:text-zinc-600"
              )}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 16l-6-6h12z" />
            </svg>
          </span>
        )}
      </div>
    </th>
  );
}

export function TableCell({ className, ...props }: TableCellProps) {
  const { size } = React.useContext(TableContext);

  const sizes = {
    sm: "p-3 text-xs",
    md: "p-4 text-sm",
    lg: "p-6 text-sm",
  };

  return (
    <td
      className={cn(
        "align-middle text-zinc-900 dark:text-zinc-100",
        sizes[size],
        className
      )}
      {...props}
    />
  );
}

export function TableCaption({ className, ...props }: TableCaptionProps) {
  return (
    <caption
      className={cn(
        "mt-4 text-sm text-zinc-500 dark:text-zinc-400",
        className
      )}
      {...props}
    />
  );
}
