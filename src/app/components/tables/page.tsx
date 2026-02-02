"use client";

import React, { useState } from "react";
import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableExpandable,
  TableData,
} from "@/zeroui/components/tables";
import { Badge } from "@/zeroui/components/badges";
import { MoreVertical } from "lucide-react";

const tableComponents = [
  { id: "table", name: "Table", href: "/components/tables" },
];

const previewCode = `import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/zeroui/components/tables";

const data = [
  { name: "John Brown", age: 32, address: "New York No. 1 Lake Park" },
  { name: "Jim Green", age: 42, address: "London No. 1 Lake Park" },
  { name: "Joe Black", age: 32, address: "Sydney No. 1 Lake Park" },
];

export default function Example() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Address</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.name}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.age}</TableCell>
            <TableCell>{row.address}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}`;

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/tables/table.tsx",
    code: `"use client";

import React from "react";
import { cn } from "@/lib/utils";

// Table components with composition pattern
export function Table({ className, children, ...props }) {
  return (
    <div className="w-full overflow-auto">
      <table className={cn("w-full caption-bottom text-sm", className)} {...props}>
        {children}
      </table>
    </div>
  );
}

export function TableHeader({ className, ...props }) {
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

export function TableBody({ className, ...props }) {
  return <tbody className={cn("[&_tr:last-child]:border-0", className)} {...props} />;
}

export function TableRow({ className, ...props }) {
  return (
    <tr
      className={cn(
        "border-b border-zinc-200 dark:border-zinc-800 transition-colors",
        "hover:bg-zinc-50 dark:hover:bg-zinc-900/50",
        className
      )}
      {...props}
    />
  );
}

export function TableHead({ className, children, ...props }) {
  return (
    <th
      className={cn(
        "h-10 px-4 text-left align-middle font-medium text-zinc-500 dark:text-zinc-400 text-sm",
        className
      )}
      {...props}
    >
      {children}
    </th>
  );
}

export function TableCell({ className, ...props }) {
  return (
    <td
      className={cn("p-4 align-middle text-zinc-900 dark:text-zinc-100 text-sm", className)}
      {...props}
    />
  );
}`,
  },
];

// Sample data
const basicData = [
  { name: "John Brown", age: 32, address: "New York No. 1 Lake Park" },
  { name: "Jim Green", age: 42, address: "London No. 1 Lake Park" },
  { name: "Joe Black", age: 32, address: "Sydney No. 1 Lake Park" },
];

const taggedData = [
  {
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const expandableData = [
  {
    id: "1",
    title: "Item 1",
    description: "First top-level item",
  },
  {
    id: "2",
    title: "Item 2",
    description: "Second top-level item",
    children: [
      {
        id: "2-1",
        title: "Item 2.1",
        description: "Child of Item 2",
      },
      {
        id: "2-2",
        title: "Item 2.2",
        description: "Another child of Item 2",
        children: [
          {
            id: "2-2-1",
            title: "Item 2.2.1",
            description: "Nested child",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Item 3",
    description: "Third top-level item",
  },
];

const productData = [
  {
    id: "1",
    item: "55 Inches Smart TV Class D-Series",
    sku: "A43BTR5678",
    quantity: 1,
    price: 674.99,
    condition: "New with box",
    watchers: 24,
    image: "📺",
  },
  {
    id: "2",
    item: "40 Inches Smart TV Class D-Series",
    sku: "A43BTR5678",
    quantity: 1,
    price: 674.99,
    condition: "New with box",
    watchers: 43,
    image: "📺",
  },
  {
    id: "3",
    item: '43" Class 4K UHD 2160P webOS',
    sku: "A43BTR5678",
    quantity: 1,
    price: 574.99,
    condition: "New without box",
    watchers: 17,
    image: "🖥️",
  },
  {
    id: "4",
    item: '32" inch 1080p Full HD 60Hz LED',
    sku: "A43BTR5678",
    quantity: 1,
    price: 324.99,
    condition: "New with box",
    watchers: 9,
    image: "🖥️",
  },
];

export default function TablesPage() {
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);

  return (
    <ComponentPageLayout
      componentName="Table"
      description="Flexible table components for displaying structured data with sorting, selection, and expansion."
      componentItems={tableComponents}
      activeComponentId="table"
      prevComponent={{ name: "Progress", href: "/components/progress" }}
      nextComponent={{ name: "Card", href: "/components/cards" }}
    >
      {/* Basic Table */}
      <ComponentPreview code={previewCode}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Address</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {basicData.map((row) => (
              <TableRow key={row.name}>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ComponentPreview>

      {/* With Tags and Actions */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">With Tags & Actions</h3>
      <ComponentPreview
        code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Age</TableHead>
      <TableHead>Address</TableHead>
      <TableHead>Tags</TableHead>
      <TableHead>Action</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {data.map((row) => (
      <TableRow key={row.name}>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.age}</TableCell>
        <TableCell>{row.address}</TableCell>
        <TableCell>
          {row.tags.map((tag) => (
            <Badge key={tag} variant="outline" size="sm">{tag}</Badge>
          ))}
        </TableCell>
        <TableCell>
          <button>Invite</button>
          <button>Delete</button>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {taggedData.map((row) => (
              <TableRow key={row.name}>
                <TableCell className="text-blue-600 dark:text-blue-400">{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>
                  <div className="flex gap-1.5">
                    {row.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant={tag === "loser" ? "destructive" : "outline"}
                        size="sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-3">
                    <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                      Invite {row.name.split(" ")[0]}
                    </button>
                    <button className="text-red-500 hover:underline text-sm">Delete</button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ComponentPreview>

      {/* Striped */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Striped</h3>
      <ComponentPreview
        code={`<Table variant="striped">...</Table>`}
      >
        <Table variant="striped">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Address</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {basicData.map((row) => (
              <TableRow key={row.name}>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ComponentPreview>

      {/* With Footer */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">With Row Headers & Footer</h3>
      <ComponentPreview
        code={`<Table variant="bordered">
  <TableHeader>
    <TableRow>
      <TableHead></TableHead>
      <TableHead>Column 1</TableHead>
      <TableHead>Column 2</TableHead>
      <TableHead>Column 3</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableHead>Row 1</TableHead>
      <TableCell>R1C1</TableCell>
      <TableCell>R1C2</TableCell>
      <TableCell>R1C3</TableCell>
    </TableRow>
    ...
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableHead>Footer</TableHead>
      <TableCell>FC1</TableCell>
      <TableCell>FC2</TableCell>
      <TableCell>FC3</TableCell>
    </TableRow>
  </TableFooter>
</Table>`}
      >
        <Table variant="bordered">
          <TableHeader>
            <TableRow>
              <TableHead className="w-24"></TableHead>
              <TableHead>Column 1</TableHead>
              <TableHead>Column 2</TableHead>
              <TableHead>Column 3</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2, 3].map((row) => (
              <TableRow key={row}>
                <TableHead className="bg-zinc-50/50 dark:bg-zinc-900/50 text-blue-700 dark:text-blue-400">
                  Row {row}
                </TableHead>
                <TableCell>R{row}C1</TableCell>
                <TableCell>R{row}C2</TableCell>
                <TableCell>R{row}C3</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableHead className="text-blue-700 dark:text-blue-400">Footer</TableHead>
              <TableCell className="font-medium">FC1</TableCell>
              <TableCell className="font-medium">FC2</TableCell>
              <TableCell className="font-medium">FC3</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </ComponentPreview>

      {/* Expandable Rows */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Expandable Rows</h3>
      <ComponentPreview
        code={`import { TableExpandable } from "@/zeroui/components/tables";

const columns = [
  { key: "title", header: "Title" },
  { key: "description", header: "Description" },
];

const data = [
  { id: "1", title: "Item 1", description: "First item" },
  {
    id: "2",
    title: "Item 2",
    description: "Second item",
    children: [
      { id: "2-1", title: "Item 2.1", description: "Child item" },
    ],
  },
];

<TableExpandable columns={columns} data={data} />`}
      >
        <TableExpandable
          columns={[
            { key: "title", header: "Title", width: "200px" },
            { key: "description", header: "Description" },
          ]}
          data={expandableData}
          defaultExpanded={["2"]}
        />
      </ComponentPreview>

      {/* Data Table with Selection & Sorting */}
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">
        Data Table with Selection & Sorting
      </h3>
      <ComponentPreview
        code={`import { TableData } from "@/zeroui/components/tables";

const columns = [
  {
    key: "item",
    header: "Item",
    sortable: true,
    render: (_, row) => (
      <div className="flex items-center gap-3">
        <span>{row.image}</span>
        <div>
          <p className="font-medium">{row.item}</p>
          <p className="text-xs text-zinc-500">SKU: {row.sku}</p>
        </div>
      </div>
    ),
  },
  { key: "price", header: "Price", sortable: true },
  { key: "condition", header: "Condition" },
  { key: "watchers", header: "Watchers", sortable: true, align: "center" },
];

<TableData
  columns={columns}
  data={productData}
  selectable
  selectedRows={selectedRows}
  onSelectionChange={setSelectedRows}
  actions={(row) => <MoreVertical className="h-4 w-4" />}
/>`}
      >
        <TableData
          columns={[
            {
              key: "item",
              header: "Item",
              sortable: true,
              render: (_, row: typeof productData[0]) => (
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-2xl">
                    {row.image}
                  </div>
                  <div>
                    <p className="font-medium">{row.item}</p>
                    <p className="text-xs text-zinc-500">
                      SKU: {row.sku} · Quantity: {row.quantity}
                    </p>
                  </div>
                </div>
              ),
            },
            {
              key: "price",
              header: "Price",
              sortable: true,
              render: (value) => `$${(value as number).toFixed(2)}`,
            },
            {
              key: "condition",
              header: "Condition",
              render: (value) => (
                <span className="text-zinc-600 dark:text-zinc-400">{value as string} ▾</span>
              ),
            },
            {
              key: "watchers",
              header: "Watchers",
              sortable: true,
              align: "center",
            },
          ]}
          data={productData}
          selectable
          selectedRows={selectedRows}
          onSelectionChange={setSelectedRows}
          actions={() => (
            <button className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded">
              <MoreVertical className="h-4 w-4 text-zinc-500" />
            </button>
          )}
        />
      </ComponentPreview>

      {/* Installation */}
      <InstallationTabs
        componentName="table"
        dependencies={["lucide-react"]}
        manualSteps={manualSteps}
      />

      {/* Props */}
      <PropsTable
        props={[
          { name: "variant", type: '"default" | "striped" | "bordered"', default: '"default"' },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
          { name: "selectable", type: "boolean", default: "false" },
          { name: "selectedRows", type: "(string | number)[]", default: "[]" },
          { name: "onSelectionChange", type: "(ids: (string | number)[]) => void", default: "-" },
          { name: "stickyHeader", type: "boolean", default: "false" },
          { name: "striped", type: "boolean", default: "false" },
        ]}
      />
    </ComponentPageLayout>
  );
}
