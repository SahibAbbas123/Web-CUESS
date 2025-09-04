"use client";

import { useTheme } from "../hooks/useTheme";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { isDark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="
        fixed z-50 bottom-6 right-6
        rounded-full bg-white/85 dark:bg-white/10
        backdrop-blur border border-black/10 dark:border-white/10
        shadow-lg hover:shadow-xl transition
        p-3
      "
      title={isDark ? "Switch to light" : "Switch to dark"}
    >
      {isDark ? <Sun className="h-5 w-5 text-yellow-300" /> : <Moon className="h-5 w-5 text-zinc-700" />}
    </button>
  );
}