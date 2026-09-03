import Link from "next/link";
import projectsData from "@/data/projects.json";
import type { ProjectItem } from "@/data/types";
import { Navbar } from "@/components/layout/Navbar";
import { ProjectCard } from "@/components/ui/ProjectCard";

const projects = [...(projectsData as ProjectItem[])].sort((a, b) => {
    const byYear = Number(b.year) - Number(a.year);
    if (byYear !== 0) return byYear;
    return b.month - a.month;
});

export default function ArchivePage() {
    return (
        <div className="relative min-h-screen">
            <Navbar />

            <main className="mx-auto max-w-screen-md px-5 sm:px-8 md:px-12 pt-20 pb-16">
                <Link
                    href="/#projects"
                    className="font-pixel text-sm tracking-wide text-teal-700 hover:underline dark:text-amber-400"
                >
                    ← Back to portfolio
                </Link>

                <h1 className="mt-6 font-pixel text-2xl tracking-wide text-teal-700 dark:text-amber-400">
                    {"// Project Archive"}
                </h1>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    All projects, sorted by month and year (newest first).
                </p>

                <div className="mt-10">
                    {projects.map((item, i) => (
                        <div key={item.id} className="py-2">
                            {i > 0 && (
                                <hr className="border-slate-200 dark:border-slate-700/60 pb-2" />
                            )}
                            <ProjectCard item={item} />
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}