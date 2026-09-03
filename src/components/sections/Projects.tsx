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

            <div className="space-y-4">
                {featured.map((item) => (
                    <ProjectCard key={item.id} item={item} />
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