import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import type { ProjectItem } from "@/data/types";

type ProjectCardProps = {
    item: ProjectItem;
};

export function ProjectCard({ item }: ProjectCardProps) {
    return (
        <article className="group border-2 border-transparent p-4 -mx-4 transition-colors hover:border-teal-500/40 hover:bg-teal-500/5 dark:hover:border-amber-400/30 dark:hover:bg-amber-400/5">
            <div className={`flex flex-col gap-4 ${item.image ? "sm:flex-row sm:gap-5" : ""}`}>
                {item.image ? (
                    <div className="relative aspect-video w-full shrink-0 overflow-hidden border-2 border-slate-300 dark:border-slate-700 sm:aspect-auto sm:h-24 sm:w-40">
                        <Image
                            src={item.image}
                            alt={`${item.title} preview`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 160px"
                        />
                    </div>
                ) : null}

                <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                        <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100">
                            {item.title}
                            {item.madeAt ? (
                                <span className="font-medium text-slate-600 dark:text-slate-300">
                                    {" "}
                                    · {item.madeAt}
                                </span>
                            ) : null}
                        </h3>
                        <p className="shrink-0 font-pixel text-sm tracking-wide text-slate-500 dark:text-slate-300">
                            {item.period}
                        </p>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {item.description}
                    </p>

                    <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
                        {item.technologies.map((tech) => (
                            <li
                                key={tech}
                                className="border-2 border-slate-300 dark:border-slate-700 px-2 py-0.5 font-pixel text-sm tracking-wide text-slate-500 dark:text-slate-400 group-hover:border-teal-500/50 dark:group-hover:border-amber-400/45"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>

                    {(item.githubUrl || item.liveUrl) && (
                        <div className="mt-5 flex flex-wrap items-center gap-2">
                            {item.githubUrl ? (
                                <a
                                    href={item.githubUrl}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="inline-flex items-center gap-1.5 border-2 border-slate-300 dark:border-slate-700 px-2.5 py-1 text-sm text-slate-700 hover:border-teal-600 hover:text-teal-700 dark:text-slate-300 dark:hover:border-amber-400 dark:hover:text-amber-400 transition-colors"
                                >
                                    <FiGithub className="w-4 h-4" />
                                    <span className="font-pixel text-sm tracking-wide">Code</span>
                                </a>
                            ) : null}
                            {item.liveUrl ? (
                                <a
                                    href={item.liveUrl}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="inline-flex items-center gap-1.5 border-2 border-slate-300 dark:border-slate-700 px-2.5 py-1 text-sm text-slate-700 hover:border-teal-600 hover:text-teal-700 dark:text-slate-300 dark:hover:border-amber-400 dark:hover:text-amber-400 transition-colors"
                                >
                                    <FiExternalLink className="w-4 h-4" />
                                    <span className="font-pixel text-sm tracking-wide">Live</span>
                                </a>
                            ) : null}
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}