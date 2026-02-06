"use client";

import React, { useState, useMemo } from "react";
import { ChevronUp, ChevronDown, MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";

type SortDirection = "asc" | "desc" | null;

interface Column<T> {
  key: keyof T | string;
  header: string;
  sortable?: boolean;
  render?: (value: unknown, row: T) => React.ReactNode;
  width?: string;
  align?: "left" | "center" | "right";
}

interface TableDataProps<T extends { id: string | number }> {
  columns: Column<T>[];
  data: T[];
  className?: string;
  size?: "sm" | "md" | "lg";
  selectable?: boolean;
  selectedRows?: (string | number)[];
  onSelectionChange?: (selectedIds: (string | number)[]) => void;
  onRowClick?: (row: T) => void;
  actions?: (row: T) => React.ReactNode;
  stickyHeader?: boolean;
  striped?: boolean;
}

export default function TableData<T extends { id: string | number }>({
  columns,
  data,
  className,
  size = "md",
  selectable = false,
  selectedRows = [],
  onSelectionChange,
  onRowClick,
  actions,
  stickyHeader = false,
  striped = false,
}: TableDataProps<T>) {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: SortDirection;
  }>({ key: "", direction: null });

  const sizes = {
    sm: { head: "h-8 px-3 text-xs", cell: "px-3 py-2 text-xs" },
    md: { head: "h-10 px-4 text-sm", cell: "px-4 py-3 text-sm" },
    lg: { head: "h-12 px-6 text-sm", cell: "px-6 py-4 text-sm" },
  };

  const config = sizes[size];

  const getValue = (row: T, key: keyof T | string): unknown => {
    return row[key as keyof T];
  };

  const handleSort = (key: string) => {
    setSortConfig((prev) => {
      if (prev.key !== key) {
        return { key, direction: "asc" };
      }
      if (prev.direction === "asc") {
        return { key, direction: "desc" };
      }
      return { key: "", direction: null };
    });
  };

  const sortedData = useMemo(() => {
    if (!sortConfig.key || !sortConfig.direction) {
      return data;
    }

    return [...data].sort((a, b) => {
      const aVal = getValue(a, sortConfig.key);
      const bVal = getValue(b, sortConfig.key);

      if (aVal === bVal) return 0;
      if (aVal == null) return 1;
      if (bVal == null) return -1;

      const comparison = aVal < bVal ? -1 : 1;
      return sortConfig.direction === "asc" ? comparison : -comparison;
    });
  }, [data, sortConfig]);

  const allSelected = data.length > 0 && selectedRows.length === data.length;
  const someSelected = selectedRows.length > 0 && selectedRows.length < data.length;

  const handleSelectAll = () => {
    if (allSelected) {
      onSelectionChange?.([]);
    } else {
      onSelectionChange?.(data.map((row) => row.id));
    }
  };

  const handleSelectRow = (id: string | number) => {
    const newSelection = selectedRows.includes(id)
      ? selectedRows.filter((rowId) => rowId !== id)
      : [...selectedRows, id];
    onSelectionChange?.(newSelection);
  };

  return (
    <div className={cn("w-full overflow-auto", className)}>
      <table className="w-full caption-bottom text-sm">
        <thead
          className={cn(
            "border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50",
            stickyHeader && "sticky top-0 z-10"
          )}
        >
          <tr>
            {selectable && (
              <th className={cn("w-12 text-center", config.head)}>
                <input
                  type="checkbox"
                  checked={allSelected}
                  ref={(el) => {
                    if (el) el.indeterminate = someSelected;
                  }}
                  onChange={handleSelectAll}
                  className="h-4 w-4 rounded border-zinc-300 dark:border-zinc-600 text-zinc-900 focus:ring-zinc-500"
                />
              </th>
            )}
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className={cn(
                  "align-middle font-medium text-zinc-500 dark:text-zinc-400",
                  column.align === "center" && "text-center",
                  column.align === "right" && "text-right",
                  column.align !== "center" && column.align !== "right" && "text-left",
                  column.sortable && "cursor-pointer select-none hover:text-zinc-900 dark:hover:text-zinc-100",
                  config.head
                )}
                style={{ width: column.width }}
                onClick={column.sortable ? () => handleSort(String(column.key)) : undefined}
              >
                <div
                  className={cn(
                    "flex items-center gap-1",
                    column.align === "center" && "justify-center",
                    column.align === "right" && "justify-end"
                  )}
                >
                  {column.header}
                  {column.sortable && (
                    <span className="inline-flex flex-col -space-y-1">
                      <ChevronUp
                        className={cn(
                          "h-3 w-3",
                          sortConfig.key === String(column.key) && sortConfig.direction === "asc"
                            ? "text-zinc-900 dark:text-zinc-100"
                            : "text-zinc-300 dark:text-zinc-600"
                        )}
                      />
                      <ChevronDown
                        className={cn(
                          "h-3 w-3",
                          sortConfig.key === String(column.key) && sortConfig.direction === "desc"
                            ? "text-zinc-900 dark:text-zinc-100"
                            : "text-zinc-300 dark:text-zinc-600"
                        )}
                      />
                    </span>
                  )}
                </div>
              </th>
            ))}
            {actions && (
              <th className={cn("w-16 text-center", config.head)}>
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody
          className={cn(
            "[&_tr:last-child]:border-0",
            striped && "[&_tr:nth-child(even)]:bg-zinc-50 dark:[&_tr:nth-child(even)]:bg-zinc-900/50"
          )}
        >
          {sortedData.map((row) => {
            const isSelected = selectedRows.includes(row.id);
            return (
              <tr
                key={row.id}
                className={cn(
                  "border-b border-zinc-200 dark:border-zinc-800 transition-colors",
                  "hover:bg-zinc-50 dark:hover:bg-zinc-900/50",
                  isSelected && "bg-zinc-100 dark:bg-zinc-800/50",
                  onRowClick && "cursor-pointer"
                )}
                onClick={onRowClick ? () => onRowClick(row) : undefined}
              >
                {selectable && (
                  <td
                    className={cn("text-center", config.cell)}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleSelectRow(row.id)}
                      className="h-4 w-4 rounded border-zinc-300 dark:border-zinc-600 text-zinc-900 focus:ring-zinc-500"
                    />
                  </td>
                )}
                {columns.map((column) => (
                  <td
                    key={String(column.key)}
                    className={cn(
                      "align-middle text-zinc-900 dark:text-zinc-100",
                      column.align === "center" && "text-center",
                      column.align === "right" && "text-right",
                      config.cell
                    )}
                  >
                    {column.render
                      ? column.render(getValue(row, column.key), row)
                      : String(getValue(row, column.key) ?? "")}
                  </td>
                ))}
                {actions && (
                  <td
                    className={cn("text-center", config.cell)}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {actions(row)}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      {sortedData.length === 0 && (
        <div className="py-12 text-center text-zinc-500 dark:text-zinc-400">
          No data available
        </div>
      )}
    </div>
  );
}
