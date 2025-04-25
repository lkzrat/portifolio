"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");

      // Safari compatibility: Force repaint for background color change
      document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-color-dark');
      document.body.style.display = "none";
      document.body.offsetHeight; // Trigger reflow
      document.body.style.display = "";
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");

      // Safari compatibility: Force repaint for background color change
      document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-color-light');
      document.body.style.display = "none";
      document.body.offsetHeight; // Trigger reflow
      document.body.style.display = "";
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
        document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-color-dark');
      } else {
        document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-color-light');
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-color-dark');
    } else {
      document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-color-light');
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
