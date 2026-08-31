"use client";

import * as React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";

const emptySubscribe = () => () => { };

export function ThemeToggle() {
   const { theme, setTheme, resolvedTheme } = useTheme();

   const isMounted = React.useSyncExternalStore(
      emptySubscribe,
      () => true,
      () => false
   );

   if (!isMounted) {
      return (
         <div className="w-9 h-9 border-2 border-slate-300 dark:border-slate-700 bg-transparent" />
      );
   }

   const currentTheme = resolvedTheme || theme;

   return (
      <button
         onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
         className="group flex items-center justify-center w-9 h-9 border-2 border-slate-300 dark:border-slate-700 bg-transparent text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-amber-400 hover:border-teal-500 dark:hover:border-amber-400 transition-colors cursor-pointer"
         aria-label="Toggle theme"
         title={`Switch to ${currentTheme === "dark" ? "light" : "dark"} mode`}
      >
         {currentTheme === "dark" ? (
            <FiSun className="w-4 h-4 text-amber-400" />
         ) : (
            <FiMoon className="w-4 h-4 text-teal-600" />
         )}
      </button>
   );
}