"use client";
import { useEffect, useState } from "react";

export function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cuess-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const activeDark = saved ? saved === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", activeDark);
    setIsDark(activeDark);
  }, []);

  const toggle = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("cuess-theme", next ? "dark" : "light");
      return next;
    });
  };

  return { isDark, toggle };
}