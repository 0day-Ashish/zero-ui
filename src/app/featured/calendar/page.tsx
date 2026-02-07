"use client";

import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

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
    filename: "components/featured/calendar.tsx",
    code: `"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarProps {
  initialDate?: Date;
  onDateSelect?: (date: Date) => void;
}

export default function Calendar({
  initialDate = new Date(),
  onDateSelect,
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [selectedDate, setSelectedDate] = useState(initialDate.getDate());

  // Component implementation...
}`,
  },
];

const DAYS = ["S", "M", "T", "W", "T", "F", "S"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function Calendar({
  month = 0,
  year = 2025,
  selectedDay = 11,
  onDateSelect,
}: {
  month?: number;
  year?: number;
  selectedDay?: number;
  onDateSelect?: (day: number) => void;
}) {
  const [selected, setSelected] = useState(selectedDay);

  // Get first day of month and total days
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Generate calendar grid
  const calendarDays: (number | null)[] = [];

  // Add empty slots for days before first day of month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const handleSelect = (day: number) => {
    setSelected(day);
    onDateSelect?.(day);
  };

  return (
    <div className="w-[320px] bg-[#0a0a0a] rounded-2xl p-6">
      {/* Month & Year Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white text-lg font-medium">
          {MONTHS[month]} {year}
        </h2>
      </div>

      {/* Week Day Headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAYS.map((day, index) => (
          <div
            key={index}
            className="h-10 flex items-center justify-center text-zinc-500 text-sm font-medium"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((day, index) => (
          <button
            key={index}
            onClick={() => day && handleSelect(day)}
            disabled={!day}
            className={`
              h-10 w-10 flex items-center justify-center rounded-full text-sm font-medium
              transition-all duration-200
              ${!day ? "invisible" : ""}
              ${day === selected
                ? "bg-blue-500 text-white"
                : "text-zinc-300 hover:bg-zinc-800"
              }
            `}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}

function CalendarWithNavigation({
  initialMonth = 0,
  initialYear = 2025,
  selectedDay = 11,
}: {
  initialMonth?: number;
  initialYear?: number;
  selectedDay?: number;
}) {
  const [month, setMonth] = useState(initialMonth);
  const [year, setYear] = useState(initialYear);
  const [selected, setSelected] = useState(selectedDay);

  const goToPrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const goToNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  // Get first day of month and total days
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Generate calendar grid
  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  return (
    <div className="w-[320px] bg-[#0a0a0a] rounded-2xl p-6">
      {/* Month & Year Header with Navigation */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white text-lg font-medium">
          {MONTHS[month]} {year}
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={goToPrevMonth}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={goToNextMonth}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Week Day Headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAYS.map((day, index) => (
          <div
            key={index}
            className="h-10 flex items-center justify-center text-zinc-500 text-sm font-medium"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((day, index) => (
          <button
            key={index}
            onClick={() => day && setSelected(day)}
            disabled={!day}
            className={`
              h-10 w-10 flex items-center justify-center rounded-full text-sm font-medium
              transition-all duration-200
              ${!day ? "invisible" : ""}
              ${day === selected
                ? "bg-blue-500 text-white"
                : "text-zinc-300 hover:bg-zinc-800"
              }
            `}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function CalendarPage() {
  return (
    <ComponentPageLayout
      componentName="Calendar"
      description="Elegant dark-themed calendar component with date selection and navigation."
      componentItems={featuredComponents}
      activeComponentId="calendar"
      prevComponent={{ name: "Music Cards", href: "/featured/music-cards" }}
      nextComponent={{ name: "Wallet", href: "/featured/wallet" }}
    >
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Basic Calendar</h3>
      <ComponentPreview
        code={`<Calendar
  month={0}
  year={2025}
  selectedDay={11}
/>`}
      >
        <div
          className="flex items-center justify-center p-8 rounded-xl bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <Calendar month={0} year={2025} selectedDay={11} />
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">With Navigation</h3>
      <ComponentPreview
        code={`<CalendarWithNavigation
  initialMonth={0}
  initialYear={2025}
  selectedDay={11}
/>`}
      >
        <div
          className="flex items-center justify-center p-8 rounded-xl bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <CalendarWithNavigation initialMonth={0} initialYear={2025} selectedDay={11} />
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Different Months</h3>
      <ComponentPreview
        code={`<Calendar month={1} year={2025} selectedDay={14} />
<Calendar month={11} year={2024} selectedDay={25} />`}
      >
        <div
          className="flex flex-wrap gap-8 items-center justify-center p-8 rounded-xl bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <Calendar month={1} year={2025} selectedDay={14} />
          <Calendar month={11} year={2024} selectedDay={25} />
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="calendar"
        dependencies={["lucide-react"]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          { name: "month", type: "number (0-11)", default: "0" },
          { name: "year", type: "number", default: "2025" },
          { name: "selectedDay", type: "number", default: "11" },
          { name: "onDateSelect", type: "(day: number) => void", default: "undefined" },
        ]}
      />
    </ComponentPageLayout>
  );
}
