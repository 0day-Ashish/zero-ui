"use client";

interface Prop {
  name: string;
  type: string;
  default: string;
}

interface PropsTableProps {
  props: Prop[];
}

export default function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-6">Props</h2>
      <div className="rounded-md border border-zinc-200 dark:border-zinc-800 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
              <th className="text-left px-6 py-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                name
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                type
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                default
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-zinc-950">
            {props.map((prop, index) => (
              <tr
                key={prop.name}
                className={
                  index !== props.length - 1
                    ? "border-b border-zinc-200 dark:border-zinc-800"
                    : ""
                }
              >
                <td className="px-6 py-4">
                  <span className="inline-block px-2.5 py-1 text-sm font-mono bg-red-500/10 text-red-500 dark:text-red-400 rounded-md">
                    {prop.name}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-mono text-zinc-600 dark:text-zinc-400 italic">
                  {prop.type}
                </td>
                <td className="px-6 py-4 text-sm font-mono text-zinc-700 dark:text-zinc-300">
                  {prop.default}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
