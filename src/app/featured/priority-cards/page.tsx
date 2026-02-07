"use client";

import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { MessageCircle, Link2, Copy, Calendar } from "lucide-react";

const featuredComponents = [
  { id: "profile-cards", name: "Profile Cards", href: "/featured/profile-cards" },
  { id: "music-cards", name: "Music Cards", href: "/featured/music-cards" },
  { id: "calendar", name: "Calendar", href: "/featured/calendar" },
  { id: "wallet", name: "Wallet", href: "/featured/wallet" },
  { id: "ai-input", name: "AI Input", href: "/featured/ai-input" },
  { id: "github-calendar", name: "Github Calendar", href: "/featured/github-calendar" },
  { id: "otp-input", name: "OTP Input", href: "/featured/otp-input" },
  { id: "priority-cards", name: "Priority Cards", href: "/featured/priority-cards" },
  { id: "upload-card", name: "Upload Card", href: "/featured/upload-card" },
  { id: "navbars", name: "Navbars", href: "/featured/navbars" },
];

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/featured/priority-card.tsx",
    code: `"use client";

import React from "react";
import { MessageCircle, Link2, Copy, Calendar } from "lucide-react";

interface PriorityCardProps {
  title: string;
  description: string;
  priority: "urgent" | "high" | "medium" | "low";
  status: "In Progress" | "Completed" | "Pending" | "Review";
  comments: number;
  links: number;
  attachments: number;
  date: string;
  assignees?: string[];
}

export default function PriorityCard({
  title,
  description,
  priority,
  status,
  comments,
  links,
  attachments,
  date,
  assignees = [],
}: PriorityCardProps) {
  // Component implementation...
}`,
  },
];

const priorityColors = {
  urgent: {
    bg: "bg-red-500",
    text: "text-white",
    label: "URGENT",
  },
  high: {
    bg: "bg-orange-500",
    text: "text-white",
    label: "HIGH",
  },
  medium: {
    bg: "bg-yellow-500",
    text: "text-black",
    label: "MEDIUM",
  },
  low: {
    bg: "bg-green-500",
    text: "text-white",
    label: "LOW",
  },
};

const statusStyles = {
  "In Progress": "bg-zinc-100 text-zinc-700 border-zinc-200",
  "Completed": "bg-green-50 text-green-700 border-green-200",
  "Pending": "bg-yellow-50 text-yellow-700 border-yellow-200",
  "Review": "bg-blue-50 text-blue-700 border-blue-200",
};

function PriorityCard({
  title,
  description,
  priority = "urgent",
  status = "In Progress",
  comments = 8,
  links = 4,
  attachments = 12,
  date = "September, 17",
  assignees = [],
}: {
  title: string;
  description: string;
  priority?: "urgent" | "high" | "medium" | "low";
  status?: "In Progress" | "Completed" | "Pending" | "Review";
  comments?: number;
  links?: number;
  attachments?: number;
  date?: string;
  assignees?: string[];
}) {
  const priorityStyle = priorityColors[priority];
  const statusStyle = statusStyles[status];

  // Default assignees if not provided
  const displayAssignees = assignees.length > 0 ? assignees : [
    "bg-gradient-to-br from-pink-400 to-rose-500",
    "bg-gradient-to-br from-blue-400 to-indigo-500",
    "bg-gradient-to-br from-amber-400 to-orange-500",
  ];

  return (
    <div className="w-[300px] bg-white rounded-2xl shadow-lg overflow-hidden p-2 border border-zinc-200">
      {/* Priority Header */}
      <div className={`${priorityStyle.bg} py-2 px-4 rounded-xl flex items-center justify-center border border-dashed`}>
        <span className={`text-xs font-bold tracking-wider ${priorityStyle.text}`}>
          {priorityStyle.label}
        </span>
      </div>

      {/* Content */}
      <div className="pt-4">
        {/* Inner card with dashed border */}
        <div className="border-2 border-dashed border-zinc-200 rounded-xl p-2 mb-4">
          <h3 className="text-lg font-semibold text-zinc-900 mb-2">{title}</h3>
          <p className="text-sm text-zinc-500 leading-relaxed line-clamp-2">{description}</p>

          {/* Assignees and Status */}
          <div className="flex items-center justify-between mt-4">
            {/* Stacked Avatars */}
            <div className="flex -space-x-2">
              {displayAssignees.slice(0, 4).map((gradient, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full ${gradient} border-2 border-white`}
                />
              ))}
              {displayAssignees.length > 4 && (
                <div className="w-8 h-8 rounded-full bg-zinc-200 border-2 border-white flex items-center justify-center text-xs font-medium text-zinc-600">
                  +{displayAssignees.length - 4}
                </div>
              )}
            </div>

            {/* Status Badge */}
            <span className={`px-3 py-1 text-xs font-medium rounded-full border ${statusStyle}`}>
              {status}
            </span>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="flex items-center justify-between text-zinc-400">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <MessageCircle size={16} />
              <span className="text-sm">{comments}</span>
            </div>
            <div className="flex items-center gap-1">
              <Link2 size={16} />
              <span className="text-sm">{links}</span>
            </div>
            <div className="flex items-center gap-1">
              <Copy size={16} />
              <span className="text-sm">{attachments}</span>
            </div>
          </div>
          <span className="text-sm text-zinc-500">{date}</span>
        </div>
      </div>
    </div>
  );
}

export default function PriorityCardsPage() {
  return (
    <ComponentPageLayout
      componentName="Priority Cards"
      description="Task priority cards with status indicators, assignees, and activity stats."
      componentItems={featuredComponents}
      activeComponentId="priority-cards"
      prevComponent={{ name: "OTP Input", href: "/featured/otp-input" }}
      nextComponent={{ name: "Upload Card", href: "/featured/upload-card" }}
    >
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Urgent Priority</h3>
      <ComponentPreview
        code={`<PriorityCard
  title="CRM Layout Draft"
  description="Designing the basic structure of the CRM dashboard. Focus on organizing customer data..."
  priority="urgent"
  status="In Progress"
  comments={8}
  links={4}
  attachments={12}
  date="September, 17"
/>`}
      >
        <div
          className="flex items-center justify-center p-8 rounded-xl bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <PriorityCard
            title="CRM Layout Draft"
            description="Designing the basic structure of the CRM dashboard. Focus on organizing customer data..."
            priority="urgent"
            status="In Progress"
            comments={8}
            links={4}
            attachments={12}
            date="September, 17"
          />
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">All Priority Levels</h3>
      <ComponentPreview
        code={`<PriorityCard priority="urgent" ... />
<PriorityCard priority="high" ... />
<PriorityCard priority="medium" ... />
<PriorityCard priority="low" ... />`}
      >
        <div
          className="flex flex-wrap gap-6 items-start justify-center p-8 rounded-xl bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <PriorityCard
            title="Server Migration"
            description="Critical migration to new infrastructure before deadline..."
            priority="urgent"
            status="In Progress"
            comments={12}
            links={3}
            attachments={8}
            date="Oct, 5"
          />
          <PriorityCard
            title="API Integration"
            description="Connect third-party payment gateway for checkout flow..."
            priority="high"
            status="Review"
            comments={6}
            links={2}
            attachments={4}
            date="Oct, 12"
          />
          <PriorityCard
            title="UI Polish"
            description="Fine-tune animations and micro-interactions..."
            priority="medium"
            status="Pending"
            comments={4}
            links={1}
            attachments={6}
            date="Oct, 20"
          />
          <PriorityCard
            title="Documentation"
            description="Update API docs with new endpoints..."
            priority="low"
            status="Completed"
            comments={2}
            links={5}
            attachments={3}
            date="Oct, 25"
          />
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="priority-card"
        dependencies={["lucide-react"]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          { name: "title", type: "string", default: "-" },
          { name: "description", type: "string", default: "-" },
          { name: "priority", type: '"urgent" | "high" | "medium" | "low"', default: '"urgent"' },
          { name: "status", type: '"In Progress" | "Completed" | "Pending" | "Review"', default: '"In Progress"' },
          { name: "comments", type: "number", default: "0" },
          { name: "links", type: "number", default: "0" },
          { name: "attachments", type: "number", default: "0" },
          { name: "date", type: "string", default: "-" },
          { name: "assignees", type: "string[]", default: "[]" },
        ]}
      />
    </ComponentPageLayout>
  );
}
