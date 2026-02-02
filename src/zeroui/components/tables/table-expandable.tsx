"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Column<T> {
  key: keyof T | string;
  header: string;
  render?: (value: unknown, row: T) => React.ReactNode;
  width?: string;
}

interface TableExpandableProps<T extends { id: string | number; children?: T[] }> {
  columns: Column<T>[];
  data: T[];
  className?: string;
  size?: "sm" | "md" | "lg";
  defaultExpanded?: (string | number)[];
}

export default function TableExpandable<T extends { id: string | number; children?: T[] }>({
  columns,
  data,
  className,
  size = "md",
  defaultExpanded = [],
}: TableExpandableProps<T>) {
  const [expandedRows, setExpandedRows] = useState<Set<string | number>>(
    new Set(defaultExpanded)
  );

  const sizes = {
    sm: { head: "h-8 px-3 text-xs", cell: "p-3 text-xs" },
    md: { head: "h-10 px-4 text-sm", cell: "p-4 text-sm" },
    lg: { head: "h-12 px-6 text-sm", cell: "p-6 text-sm" },
  };

  const config = sizes[size];

  const toggleRow = (id: string | number) => {
    setExpandedRows((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const getValue = (row: T, key: keyof T | string): unknown => {
    return row[key as keyof T];
  };

  const renderRows = (rows: T[], depth = 0): React.ReactNode => {
    return rows.map((row) => {
      const hasChildren = row.children && row.children.length > 0;
      const isExpanded = expandedRows.has(row.id);

      return (
        <React.Fragment key={row.id}>
          <tr
            className={cn(
              "border-b border-zinc-200 dark:border-zinc-800 transition-colors",
              "hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
            )}
          >
            {columns.map((column, colIndex) => (
              <td
                key={String(column.key)}
                className={cn(
                  "align-middle text-zinc-900 dark:text-zinc-100",
                  config.cell
                )}
                style={{ width: column.width }}
              >
                <div
                  className="flex items-center gap-2"
                  style={{ paddingLeft: colIndex === 0 ? `${depth * 24}px` : undefined }}
                >
                  {colIndex === 0 && hasChildren && (
                    <button
                      onClick={() => toggleRow(row.id)}
                      className="p-0.5 -ml-1 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                    >
                      <ChevronRight
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          isExpanded && "rotate-90"
                        )}
                      />
                    </button>
                  )}
                  {colIndex === 0 && !hasChildren && depth > 0 && (
                    <span className="w-5" />
                  )}
                  {column.render
                    ? column.render(getValue(row, column.key), row)
                    : String(getValue(row, column.key) ?? "")}
                </div>
              </td>
            ))}
          </tr>
          {hasChildren && isExpanded && renderRows(row.children!, depth + 1)}
        </React.Fragment>
      );
    });
  };

  return (
    <div className={cn("w-full overflow-auto", className)}>
      <table className="w-full caption-bottom text-sm">
        <thead className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className={cn(
                  "text-left align-middle font-medium text-zinc-500 dark:text-zinc-400",
                  config.head
                )}
                style={{ width: column.width }}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="[&_tr:last-child]:border-0">
          {renderRows(data)}
        </tbody>
      </table>
    </div>
  );
}
