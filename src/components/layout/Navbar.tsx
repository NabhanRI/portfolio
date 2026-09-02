"use client";

import React from "react";
import Link from "next/link";
import { FiDownload, FiMail } from "react-icons/fi";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
   return (
      <nav className="fixed top-0 left-0 right-0 z-50 border-b-2 border-slate-300 dark:border-slate-700 bg-slate-200/90 dark:bg-[#0a192f]/90 backdrop-blur-md transition-colors duration-300">
         <div className="mx-auto max-w-screen-xl flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-24 h-14">
            <Link
               href="/"
               className="font-pixel text-2xl tracking-wide text-slate-900 dark:text-slate-100 hover:text-teal-600 dark:hover:text-amber-400 transition-colors"
            >
               nabhanri
            </Link>

            <div className="flex items-center gap-2 sm:gap-3">
               <a
                  href="/asset/Muhammad_Nabhan_Rifa'i_CV.pdf"
                  download
                  className="group inline-flex items-center justify-center gap-1.5 h-9 px-2.5 border-2 border-slate-300 dark:border-slate-700 bg-transparent text-sm font-pixel uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:text-teal-700 dark:hover:text-amber-400 hover:border-teal-500 dark:hover:border-amber-400 transition-colors"
                  title="Download CV"
               >
                  <span className="hidden sm:inline">Download</span>
                  <span>CV</span>
                  <FiDownload className="w-3.5 h-3.5" />
               </a>

               <a
                  href="mailto:nabhanrifai@gmail.com"
                  className="group inline-flex items-center justify-center gap-1.5 h-9 px-2.5 border-2 border-slate-300 dark:border-slate-700 bg-transparent text-sm font-pixel uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:text-teal-700 dark:hover:text-amber-400 hover:border-teal-500 dark:hover:border-amber-400 transition-colors"
                  title="Send Email"
               >
                  <span className="hidden sm:inline">Email</span>
                  <FiMail className="w-3.5 h-3.5" />
               </a>

               <ThemeToggle />
            </div>
         </div>
      </nav>
   );
}