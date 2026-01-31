"use client";

import { createContext, useContext, ReactNode, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Simple theme store
let listeners: Array<() => void> = [];
let currentTheme: Theme = "dark";

function getTheme(): Theme {
  if (typeof document !== "undefined") {
    return document.documentElement.classList.contains("light") ? "light" : "dark";
  }
  return currentTheme;
}

function subscribe(listener: () => void) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter(l => l !== listener);
  };
}

function notifyListeners() {
  listeners.forEach(listener => listener());
}

function setTheme(newTheme: Theme) {
  // Add blur transition effect
  document.body.classList.add("theme-transitioning");

  currentTheme = newTheme;
  document.documentElement.classList.remove("dark", "light");
  document.documentElement.classList.add(newTheme);
  localStorage.setItem("theme", newTheme);
  notifyListeners();

  // Remove blur after transition
  setTimeout(() => {
    document.body.classList.remove("theme-transitioning");
  }, 300);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "dark" as Theme);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
