"use client";

import { ArrowRight } from "lucide-react";

// Individual component cards with light/dark theme support
const WebComponents = [
  // User Profile Card
  <div key="profile" className="bg-white dark:bg-transparent p-5 border border-zinc-300 dark:border-zinc-800/30 w-52">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-600" />
      <div>
        <h4 className="font-semibold text-zinc-900 dark:text-white text-sm">Sarah Anderson</h4>
        <p className="text-xs text-zinc-500">Product Designer</p>
      </div>
    </div>
    <div className="flex gap-4 text-center">
      <div><p className="font-semibold text-zinc-900 dark:text-white">248</p><p className="text-[10px] text-zinc-500">Posts</p></div>
      <div><p className="font-semibold text-zinc-900 dark:text-white">14.2k</p><p className="text-[10px] text-zinc-500">Followers</p></div>
      <div><p className="font-semibold text-zinc-900 dark:text-white">892</p><p className="text-[10px] text-zinc-500">Following</p></div>
    </div>
  </div>,

  // Pricing Card
  <div key="pricing" className="bg-white dark:bg-transparent p-5 border border-zinc-300 dark:border-zinc-800/30 w-52">
    <div className="text-xs font-medium text-violet-600 dark:text-violet-400 mb-1">PRO PLAN</div>
    <div className="flex items-baseline gap-1 mb-3">
      <span className="text-3xl font-bold text-zinc-900 dark:text-white">$29</span>
      <span className="text-zinc-500 text-sm">/month</span>
    </div>
    <ul className="space-y-2 mb-4">
      <li className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
        <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
          <svg className="w-2.5 h-2.5 text-emerald-500 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        Unlimited projects
      </li>
      <li className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
        <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
          <svg className="w-2.5 h-2.5 text-emerald-500 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        Priority support
      </li>
    </ul>
    <button className="w-full py-2 bg-zinc-900 dark:bg-white text-white dark:text-black text-xs font-medium rounded-lg">Get Started</button>
  </div>,

  // Stats Card
  <div key="stats" className="bg-white dark:bg-transparent p-5 border border-zinc-300 dark:border-zinc-800/30 w-52">
    <div className="flex items-center justify-between mb-4">
      <span className="text-xs text-zinc-500">Revenue</span>
      <span className="text-[10px] px-2 py-0.5 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-full">+12.5%</span>
    </div>
    <p className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">$48,294</p>
    <div className="flex gap-1 h-12 items-end">
      {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
        <div key={i} className="flex-1 bg-violet-500/30 rounded-t" style={{ height: `${h}%` }} />
      ))}
    </div>
  </div>,

  // Toggle Settings
  <div key="toggles" className="bg-white dark:bg-transparent p-5 border border-zinc-300 dark:border-zinc-800/30 w-52 space-y-3">
    <div className="flex items-center justify-between">
      <span className="text-sm text-zinc-700 dark:text-zinc-300">Dark Mode</span>
      <div className="w-10 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full p-0.5">
        <div className="w-5 h-5 bg-zinc-500 dark:bg-zinc-400 rounded-full shadow" />
      </div>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-sm text-zinc-700 dark:text-zinc-300">Notifications</span>
      <div className="w-10 h-6 bg-violet-600 rounded-full p-0.5 flex justify-end">
        <div className="w-5 h-5 bg-white rounded-full shadow" />
      </div>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-sm text-zinc-700 dark:text-zinc-300">Auto-save</span>
      <div className="w-10 h-6 bg-violet-600 rounded-full p-0.5 flex justify-end">
        <div className="w-5 h-5 bg-white rounded-full shadow" />
      </div>
    </div>
  </div>,

  // Search Input
  <div key="search" className="bg-white dark:bg-transparent p-5 border border-zinc-300 dark:border-zinc-800/30 w-52">
    <div className="flex items-center gap-2 px-3 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg border border-zinc-300 dark:border-zinc-700">
      <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <span className="text-sm text-zinc-500">Search components...</span>
      <kbd className="ml-auto px-1.5 py-0.5 text-[10px] bg-zinc-200 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 rounded text-zinc-500 dark:text-zinc-400">⌘K</kbd>
    </div>
    <div className="mt-3 space-y-2">
      <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800">
        <div className="w-6 h-6 rounded bg-violet-500/20 flex items-center justify-center">
          <span className="text-violet-600 dark:text-violet-400 text-xs">B</span>
        </div>
        <span className="text-sm text-zinc-700 dark:text-zinc-300">Buttons</span>
      </div>
      <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-violet-500/20">
        <div className="w-6 h-6 rounded bg-violet-500/30 flex items-center justify-center">
          <span className="text-violet-600 dark:text-violet-400 text-xs">C</span>
        </div>
        <span className="text-sm text-violet-700 dark:text-violet-300">Cards</span>
      </div>
    </div>
  </div>,

  // Avatar Group
  <div key="avatars" className="bg-white dark:bg-transparent p-5 border border-zinc-300 dark:border-zinc-800/30 w-52">
    <p className="text-xs text-zinc-500 mb-3">Team Members</p>
    <div className="flex -space-x-2 mb-3">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 border-2 border-white dark:border-zinc-900" />
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 border-2 border-white dark:border-zinc-900" />
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border-2 border-white dark:border-zinc-900" />
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 border-2 border-white dark:border-zinc-900" />
      <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 border-2 border-white dark:border-zinc-900 flex items-center justify-center">
        <span className="text-xs text-zinc-600 dark:text-zinc-400">+5</span>
      </div>
    </div>
    <button className="w-full py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 text-xs font-medium rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
      Invite Member
    </button>
  </div>,
];

const MobileComponents = [
  // Mobile Music Player
  <div key="music" className="bg-white dark:bg-transparent p-4 border border-zinc-300 dark:border-zinc-800/30 w-52">
    <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-rose-400 to-pink-600 mb-3" />
    <h4 className="font-semibold text-zinc-900 dark:text-white text-sm truncate">Midnight Dreams</h4>
    <p className="text-xs text-zinc-500 mb-3">The Weeknd</p>
    <div className="w-full h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full mb-2">
      <div className="w-1/3 h-full bg-pink-500 rounded-full" />
    </div>
    <div className="flex items-center justify-between">
      <span className="text-[10px] text-zinc-500">1:24</span>
      <div className="flex items-center gap-3">
        <svg className="w-4 h-4 text-zinc-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19 12L5 21V3l14 9z" /></svg>
        <div className="w-8 h-8 rounded-full bg-zinc-900 dark:bg-white flex items-center justify-center">
          <svg className="w-4 h-4 text-white dark:text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" /></svg>
        </div>
        <svg className="w-4 h-4 text-zinc-500" fill="currentColor" viewBox="0 0 24 24"><path d="M5 12l14-9v18L5 12z" /></svg>
      </div>
      <span className="text-[10px] text-zinc-500">3:45</span>
    </div>
  </div>,

  // Mobile Notification
  <div key="notification" className="bg-white dark:bg-transparent p-4 border border-zinc-300 dark:border-zinc-800/30 w-52">
    <div className="flex items-start gap-2">
      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
        <svg className="w-4 h-4 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </div>
      <div>
        <p className="text-xs font-medium text-zinc-900 dark:text-white">New message</p>
        <p className="text-[10px] text-zinc-500">Alex sent you a photo</p>
      </div>
    </div>
    <div className="flex gap-2 mt-3">
      <button className="flex-1 py-1.5 text-[10px] text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded-lg">Dismiss</button>
      <button className="flex-1 py-1.5 text-[10px] text-white bg-blue-600 rounded-lg">View</button>
    </div>
  </div>,

  // Mobile Bottom Nav
  <div key="bottomnav" className="bg-white dark:bg-transparent p-3 border border-zinc-300 dark:border-zinc-800/30 w-52">
    <div className="flex items-center justify-around">
      <div className="flex flex-col items-center gap-0.5">
        <svg className="w-5 h-5 text-violet-600 dark:text-violet-400" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
        <span className="text-[9px] text-violet-600 dark:text-violet-400">Home</span>
      </div>
      <div className="flex flex-col items-center gap-0.5">
        <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        <span className="text-[9px] text-zinc-500">Search</span>
      </div>
      <div className="flex flex-col items-center gap-0.5">
        <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
        <span className="text-[9px] text-zinc-500">Saved</span>
      </div>
      <div className="flex flex-col items-center gap-0.5">
        <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        <span className="text-[9px] text-zinc-500">Profile</span>
      </div>
    </div>
  </div>,

  // Mobile Action Sheet
  <div key="actionsheet" className="bg-white dark:bg-transparent border border-zinc-300 dark:border-zinc-800/30 w-52 overflow-hidden">
    <div className="p-3 border-b border-zinc-200 dark:border-zinc-800">
      <div className="w-8 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full mx-auto mb-2" />
      <p className="text-xs font-medium text-zinc-900 dark:text-white text-center">Share to</p>
    </div>
    <div className="p-3 grid grid-cols-4 gap-2">
      {[
        { color: "from-blue-400 to-blue-600", label: "Twitter" },
        { color: "from-pink-400 to-rose-600", label: "Insta" },
        { color: "from-blue-500 to-indigo-600", label: "FB" },
        { color: "from-green-400 to-emerald-600", label: "WhatsA" },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.color}`} />
          <span className="text-[8px] text-zinc-500 truncate w-full text-center">{item.label}</span>
        </div>
      ))}
    </div>
  </div>,

  // Mobile Chat Bubble
  <div key="chat" className="bg-white dark:bg-transparent p-4 border border-zinc-300 dark:border-zinc-800/30 w-52">
    <div className="space-y-2">
      <div className="flex justify-start">
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl rounded-bl-sm px-3 py-2 max-w-[80%]">
          <p className="text-xs text-zinc-700 dark:text-zinc-300">Hey! How are you?</p>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="bg-violet-600 rounded-2xl rounded-br-sm px-3 py-2 max-w-[80%]">
          <p className="text-xs text-white">I&apos;m good, thanks!</p>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl rounded-bl-sm px-3 py-2 max-w-[80%]">
          <p className="text-xs text-zinc-700 dark:text-zinc-300">Great to hear 😊</p>
        </div>
      </div>
    </div>
    <div className="flex items-center gap-2 mt-3 px-2 py-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full">
      <span className="text-[10px] text-zinc-500 flex-1">Type a message...</span>
      <div className="w-5 h-5 rounded-full bg-violet-600 flex items-center justify-center">
        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
      </div>
    </div>
  </div>,

  // Mobile Progress Card
  <div key="progress" className="bg-white dark:bg-transparent p-4 border border-zinc-300 dark:border-zinc-800/30 w-52">
    <div className="flex items-center justify-between mb-3">
      <span className="text-xs font-medium text-zinc-900 dark:text-white">Daily Goal</span>
      <span className="text-xs text-violet-600 dark:text-violet-400">75%</span>
    </div>
    <div className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full mb-3">
      <div className="w-3/4 h-full bg-gradient-to-r from-violet-500 to-purple-600 rounded-full" />
    </div>
    <div className="flex items-center justify-between text-[10px] text-zinc-500">
      <span>7,500 steps</span>
      <span>/ 10,000</span>
    </div>
  </div>,
];

const ExtraComponents = [
  // Dropdown Menu
  <div key="dropdown" className="bg-white dark:bg-transparent p-4 border border-zinc-300 dark:border-zinc-800/30 w-52">
    <div className="space-y-1">
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-violet-500/20">
        <svg className="w-4 h-4 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        <span className="text-xs text-violet-700 dark:text-violet-300">Profile</span>
      </div>
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
        <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        <span className="text-xs text-zinc-600 dark:text-zinc-400">Settings</span>
      </div>
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
        <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
        <span className="text-xs text-zinc-600 dark:text-zinc-400">Logout</span>
      </div>
    </div>
  </div>,

  // Task Item
  <div key="task" className="bg-white dark:bg-transparent p-4 border border-zinc-300 dark:border-zinc-800/30 w-52">
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded border-2 border-violet-500 bg-violet-500 flex items-center justify-center">
          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
        </div>
        <span className="text-xs text-zinc-400 line-through">Design mockups</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded border-2 border-violet-500 bg-violet-500 flex items-center justify-center">
          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
        </div>
        <span className="text-xs text-zinc-400 line-through">Review code</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded border-2 border-zinc-400 dark:border-zinc-600" />
        <span className="text-xs text-zinc-700 dark:text-zinc-300">Write documentation</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded border-2 border-zinc-400 dark:border-zinc-600" />
        <span className="text-xs text-zinc-700 dark:text-zinc-300">Deploy to production</span>
      </div>
    </div>
  </div>,

  // Mini Weather
  <div key="weather" className="bg-gradient-to-br from-blue-500 to-blue-700 p-4 w-52 border border-zinc-800/30">
    <div className="flex items-center justify-between mb-2">
      <span className="text-white/80 text-xs">San Francisco</span>
      <span className="text-white/60 text-[10px]">Today</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-3xl text-white font-light">72°</span>
      <svg className="w-10 h-10 text-yellow-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 7a5 5 0 100 10 5 5 0 000-10zM2 13h2a1 1 0 100-2H2a1 1 0 100 2zm18 0h2a1 1 0 100-2h-2a1 1 0 100 2zM11 2v2a1 1 0 102 0V2a1 1 0 10-2 0zm0 18v2a1 1 0 102 0v-2a1 1 0 10-2 0z" /></svg>
    </div>
    <p className="text-white/70 text-xs mt-1">Sunny</p>
  </div>,

  // Tabs
  <div key="tabs" className="bg-white dark:bg-transparent p-4 border border-zinc-300 dark:border-zinc-800/30 w-52">
    <div className="flex gap-1 p-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg mb-3">
      <button className="flex-1 py-1.5 text-[10px] font-medium bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white rounded-md shadow-sm">Overview</button>
      <button className="flex-1 py-1.5 text-[10px] font-medium text-zinc-500">Analytics</button>
    </div>
    <div className="h-16 flex items-center justify-center border border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg">
      <span className="text-[10px] text-zinc-500">Tab content</span>
    </div>
  </div>,

  // Quick Actions
  <div key="quickactions" className="bg-white dark:bg-transparent p-4 border border-zinc-300 dark:border-zinc-800/30 w-52">
    <p className="text-xs text-zinc-500 mb-3">Quick Actions</p>
    <div className="grid grid-cols-3 gap-2">
      <div className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
          <svg className="w-4 h-4 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
        </div>
        <span className="text-[9px] text-zinc-600 dark:text-zinc-400">New</span>
      </div>
      <div className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
          <svg className="w-4 h-4 text-emerald-500 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
        </div>
        <span className="text-[9px] text-zinc-600 dark:text-zinc-400">Upload</span>
      </div>
      <div className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
        <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
          <svg className="w-4 h-4 text-violet-500 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
        </div>
        <span className="text-[9px] text-zinc-600 dark:text-zinc-400">Share</span>
      </div>
    </div>
  </div>,

  // Tooltip Demo
  <div key="tooltip" className="bg-white dark:bg-transparent p-4 border border-zinc-300 dark:border-zinc-800/30 w-52">
    <div className="flex flex-col items-center">
      <div className="px-3 py-1.5 bg-zinc-900 dark:bg-white text-white dark:text-black text-[10px] rounded-lg mb-2 relative">
        Click to copy
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 dark:bg-white rotate-45" />
      </div>
      <button className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs rounded-lg">
        Copy Link
      </button>
    </div>
  </div>,
];

const MoreWebComponents = [
  // Calendar Card
  <div key="calendar" className="bg-white dark:bg-transparent p-5 border border-zinc-300 dark:border-zinc-800/30 w-52">
    <div className="flex items-center justify-between mb-3">
      <span className="text-sm font-semibold text-zinc-900 dark:text-white">January 2024</span>
      <div className="flex gap-1">
        <button className="w-6 h-6 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-center">
          <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button className="w-6 h-6 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-center">
          <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
    <div className="grid grid-cols-7 gap-1 text-center text-[10px]">
      {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
        <div key={d} className="text-zinc-500 py-1">{d}</div>
      ))}
      {[...Array(31)].map((_, i) => (
        <div key={i} className={`py-1 rounded ${i === 14 ? "bg-violet-600 text-white" : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"}`}>
          {i + 1}
        </div>
      ))}
    </div>
  </div>,

  // File Upload
  <div key="upload" className="bg-white dark:bg-transparent p-5 border border-zinc-300 dark:border-zinc-800/30 w-52">
    <div className="border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl p-4 text-center">
      <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-violet-500/20 flex items-center justify-center">
        <svg className="w-5 h-5 text-violet-500 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      </div>
      <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-1">Drop files here or click to upload</p>
      <p className="text-[10px] text-zinc-500">PNG, JPG up to 10MB</p>
    </div>
  </div>,

  // Testimonial
  <div key="testimonial" className="bg-white dark:bg-transparent p-5 border border-zinc-300 dark:border-zinc-800/30 w-52">
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-3">&quot;ZeroUI has completely transformed how we build interfaces. Highly recommended!&quot;</p>
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500" />
      <div>
        <p className="text-xs font-medium text-zinc-900 dark:text-white">Emma Wilson</p>
        <p className="text-[10px] text-zinc-500">CEO at TechCorp</p>
      </div>
    </div>
  </div>,

  // Alert/Toast
  <div key="alert" className="bg-white dark:bg-transparent p-4 border border-zinc-300 dark:border-zinc-800/30 w-52 space-y-2">
    <div className="flex items-center gap-2 p-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
        <svg className="w-3 h-3 text-emerald-500 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-xs text-emerald-600 dark:text-emerald-400">Successfully saved!</span>
    </div>
    <div className="flex items-center gap-2 p-2 bg-red-500/10 border border-red-500/30 rounded-lg">
      <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center">
        <svg className="w-3 h-3 text-red-500 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <span className="text-xs text-red-600 dark:text-red-400">Error occurred</span>
    </div>
  </div>,

  // Slider
  <div key="slider" className="bg-white dark:bg-transparent p-5 border border-zinc-300 dark:border-zinc-800/30 w-52">
    <div className="flex items-center justify-between mb-3">
      <span className="text-xs text-zinc-600 dark:text-zinc-400">Volume</span>
      <span className="text-xs font-medium text-zinc-900 dark:text-white">75%</span>
    </div>
    <div className="relative h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full">
      <div className="absolute left-0 top-0 h-full w-3/4 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full" />
      <div className="absolute top-1/2 -translate-y-1/2 left-[75%] -translate-x-1/2 w-4 h-4 bg-white border-2 border-violet-500 rounded-full shadow" />
    </div>
  </div>,

  // Badge Collection
  <div key="badges" className="bg-white dark:bg-transparent p-5 border border-zinc-300 dark:border-zinc-800/30 w-52">
    <p className="text-xs text-zinc-500 mb-3">Status Badges</p>
    <div className="flex flex-wrap gap-2">
      <span className="px-2 py-1 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-medium">Active</span>
      <span className="px-2 py-1 bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded-full text-[10px] font-medium">Pending</span>
      <span className="px-2 py-1 bg-red-500/20 text-red-600 dark:text-red-400 rounded-full text-[10px] font-medium">Inactive</span>
      <span className="px-2 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-[10px] font-medium">New</span>
      <span className="px-2 py-1 bg-violet-500/20 text-violet-600 dark:text-violet-400 rounded-full text-[10px] font-medium">Featured</span>
    </div>
  </div>,
];

function MarqueeColumn({ children, reverse = false, speed = 25 }: { children: React.ReactNode; reverse?: boolean; speed?: number }) {
  return (
    <div className="flex flex-col overflow-hidden h-[600px] relative">
      <div
        className={`flex flex-col ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

export default function ComponentShowcase() {
  return (
    <div className="relative">
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

      <div className="flex">
        {/* Column 1 - Web components scrolling up */}
        <MarqueeColumn speed={30}>
          {WebComponents.map((component, i) => (
            <div key={i}>{component}</div>
          ))}
        </MarqueeColumn>

        {/* Column 2 - Mobile components scrolling down */}
        <MarqueeColumn reverse speed={35}>
          {MobileComponents.map((component, i) => (
            <div key={i} className="flex justify-center">{component}</div>
          ))}
        </MarqueeColumn>

        {/* Column 3 - Extra components scrolling up */}
        <MarqueeColumn speed={26}>
          {ExtraComponents.map((component, i) => (
            <div key={i} className="flex justify-center">{component}</div>
          ))}
        </MarqueeColumn>

        {/* Column 4 - More web components scrolling down */}
        <MarqueeColumn reverse speed={28}>
          {MoreWebComponents.map((component, i) => (
            <div key={i}>{component}</div>
          ))}
        </MarqueeColumn>

        {/* Column 5 - Mixed scrolling up */}
        <MarqueeColumn speed={32}>
          {[...MobileComponents.slice(0, 3), ...WebComponents.slice(0, 3)].map((component, i) => (
            <div key={i} className="flex justify-center">{component}</div>
          ))}
        </MarqueeColumn>

        {/* Column 6 - Extra + Web scrolling down */}
        <MarqueeColumn reverse speed={29}>
          {[...ExtraComponents.slice(0, 4), ...MoreWebComponents.slice(0, 3)].map((component, i) => (
            <div key={i} className="flex justify-center">{component}</div>
          ))}
        </MarqueeColumn>
      </div>

      {/* Explore button */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <button className="group flex items-center gap-2 px-6 py-3 bg-zinc-100 text-black dark:text-white dark:bg-gray-950 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] rounded-md border-2 border-zinc-300 dark:border-white/10 text-sm font-medium hover:bg-zinc-200 dark:hover:bg-gray-800 transition-all hover:shadow-[inset_0_0_15px_rgba(0,0,0,0.7)] cursor-pointer">
          Explore All Components
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
