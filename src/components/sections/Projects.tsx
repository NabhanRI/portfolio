import Link from "next/link";
import projectsData from "@/data/projects.json";
import type { ProjectItem } from "@/data/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";

const featured = (projectsData as ProjectItem[]).filter((p) => p.featured);

export function Projects() {
    return (
        <section id="projects" className="scroll-mt-20 lg:scroll-mt-24">
            <SectionHeading title="Projects" />

            <div>
                {featured.map((item, i) => (
                    <div key={item.id} className="py-2">
                        {i > 0 && (
                            <hr className="border-slate-200 dark:border-slate-700/60 pb-2" />
                        )}
                        <ProjectCard item={item} />
                    </div>
                ))}
            </div>

            <p className="mt-8">
                <Link
                    href="/archive"
                    className="font-pixel text-base tracking-wide text-teal-700 hover:underline dark:text-amber-400"
                >
                    View Full Project Archive →
                </Link>
            </p>
        </section>
    );
}