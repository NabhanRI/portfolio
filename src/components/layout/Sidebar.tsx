"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaDribbble, FaGithub, FaLinkedin } from "react-icons/fa6";
import { TypewriterText } from "@/components/ui/TypewriterText";
import socialsData from "@/data/socials.json";
import { SocialLink, NavItem } from "@/data/types";

const navItems: NavItem[] = [
   { name: "About", href: "#about" },
   { name: "Experience", href: "#experience" },
   { name: "Projects", href: "#projects" },
   { name: "Certifications", href: "#certifications" }
];

export function Sidebar() {
   const [activeSection, setActiveSection] = useState<string>("about");
   const socials = socialsData as SocialLink[];

   useEffect(() => {
      const handleScroll = () => {
         const sections = navItems.map((item) => item.href.substring(1));
         const scrollPosition = window.scrollY + 250;

         for (const sectionId of sections) {
            const element = document.getElementById(sectionId);
            if (element) {
               const top = element.offsetTop;
               const height = element.offsetHeight;
               if (scrollPosition >= top && scrollPosition < top + height) {
                  setActiveSection(sectionId);
                  break;
               }
            }
         }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();

      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const renderIcon = (iconName: SocialLink["icon"]) => {
      const props = { className: "w-4 h-4" };
      switch (iconName) {
         case "github":
            return <FaGithub {...props} />;
         case "linkedin":
            return <FaLinkedin {...props} />;
         case "dribbble":
            return <FaDribbble {...props} />;
         default:
            return <FaGithub {...props} />;
      }
   };

   return (
      <header className="pt-6 pb-8 lg:sticky lg:top-14 lg:self-start lg:flex lg:h-[calc(100vh-3.5rem)] lg:w-5/12 lg:flex-col lg:justify-between lg:pt-12 lg:pb-20">
         <div>
            <div className="relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden border-2 border-teal-500/70 dark:border-amber-400/60 mb-5">
               <Image
                  src="/asset/Frieren.jpg"
                  alt="Profile Photo"
                  fill
                  sizes="(max-width: 640px) 80px, 96px"
                  className="object-cover"
                  priority
               />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
               <Link
                  href="/"
                  className="hover:text-teal-600 dark:hover:text-amber-400 transition-colors"
               >
                  <TypewriterText text={"Muhammad\nNabhan Rifa'i"} />
               </Link>
            </h1>

            <h2 className="mt-2 font-pixel text-xl sm:text-2xl tracking-wide text-teal-600 dark:text-amber-400">
               Full Stack Web Developer
            </h2>

            <p className="mt-3 max-w-sm text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400">
               Building thoughtful, performant, and accessible digital web products
               with modern architecture.
            </p>
         </div>

         <nav className="nav hidden lg:block my-4" aria-label="In-page jump links">
            <ul className="w-max space-y-1.5">
               {navItems.map((item) => {
                  const sectionId = item.href.substring(1);
                  const isActive = activeSection === sectionId;

                  return (
                     <li key={item.name}>
                        <a
                           href={item.href}
                           className={`group inline-flex items-center gap-1 py-1 font-pixel text-lg tracking-wide transition-colors ${isActive
                              ? "text-teal-600 dark:text-amber-400"
                              : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                              }`}
                        >
                           <span
                              className={
                                 isActive
                                    ? "text-teal-600 dark:text-amber-400"
                                    : "text-slate-400 dark:text-slate-600 group-hover:text-slate-500"
                              }
                           >
                              [
                           </span>
                           <span className="uppercase">{item.name}</span>
                           <span
                              className={
                                 isActive
                                    ? "text-teal-600 dark:text-amber-400"
                                    : "text-slate-400 dark:text-slate-600 group-hover:text-slate-500"
                              }
                           >
                              ]
                           </span>
                           {isActive && (
                              <span
                                 className="ml-2 h-2 w-2 bg-teal-500 dark:bg-amber-400"
                                 aria-hidden
                              />
                           )}
                        </a>
                     </li>
                  );
               })}
            </ul>
         </nav>

         <div className="mt-6 lg:mt-0 pt-4 lg:pt-0 border-t-2 border-slate-300 dark:border-slate-800 lg:border-none">
            <ul className="flex items-center gap-2" aria-label="Social media">
               {socials.map((social) => (
                  <li key={social.name}>
                     <a
                        href={social.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group flex items-center justify-center h-10 w-10 border-2 border-slate-300 dark:border-slate-700 bg-transparent text-slate-500 hover:text-teal-600 dark:text-slate-400 dark:hover:text-amber-400 hover:border-teal-500 dark:hover:border-amber-400 transition-colors"
                        aria-label={`${social.name} (opens in a new tab)`}
                        title={social.name}
                     >
                        {renderIcon(social.icon)}
                     </a>
                  </li>
               ))}
            </ul>
         </div>
      </header>
   );
}