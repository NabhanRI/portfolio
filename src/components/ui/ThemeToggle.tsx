"use client";

import * as React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";

const emptySubscribe = () => () => { };

const controlClass =
   "inline-flex items-center justify-center h-9 min-w-9 px-2.5 border-2 border-slate-300 dark:border-slate-700 bg-transparent text-slate-700 dark:text-slate-300 hover:text-teal-700 dark:hover:text-amber-400 hover:border-teal-500 dark:hover:border-amber-400 transition-colors";

export function ThemeToggle() {
   const { theme, setTheme, resolvedTheme } = useTheme();

   const isMounted = React.useSyncExternalStore(
      emptySubscribe,
      () => true,
      () => false
   );

   if (!isMounted) {
      return <div className={`${controlClass}`} aria-hidden />;
   }

   const currentTheme = resolvedTheme || theme;

   return (
      <button
         onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
         className={`${controlClass} group cursor-pointer`}
         aria-label="Toggle theme"
         title={`Switch to ${currentTheme === "dark" ? "light" : "dark"} mode`}
      >
         {currentTheme === "dark" ? (
            <FiSun className="w-4 h-4 text-amber-400 transition-transform duration-300 group-hover:rotate-45" />
         ) : (
            <FiMoon className="w-4 h-4 text-teal-700 transition-transform duration-300 group-hover:-rotate-12" />
         )}
      </button>
   );
}