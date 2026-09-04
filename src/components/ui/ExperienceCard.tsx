import type { ExperienceItem } from "@/data/types";

type ExperienceCardProps = {
    item: ExperienceItem;
};

export function ExperienceCard({ item }: ExperienceCardProps) {
    const title = item.companyUrl ? (
        <a
            href={item.companyUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-teal-600 dark:hover:text-amber-400 transition-colors"
        >
            {item.company}
        </a>
    ) : (
        item.company
    );

    return (
        <article className="group border-2 border-transparent p-4 -mx-4 transition-colors hover:border-teal-500/40 hover:bg-teal-500/5 dark:hover:border-amber-400/30 dark:hover:bg-amber-400/5">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {item.role} · <span className="font-medium">{title}</span>
                </h3>
                <p className="shrink-0 font-pixel text-sm tracking-wide text-slate-500 dark:text-slate-300">
                    {item.period}
                </p>
            </div>

            <ul className="mt-3 space-y-2">
                {item.description.map((bullet) => (
                    <li
                        key={bullet.slice(0, 32)}
                        className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 pl-4 relative before:absolute before:left-0 before:content-['▸'] before:text-teal-500 dark:before:text-amber-400"
                    >
                        {bullet}
                    </li>
                ))}
            </ul>

            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Skills">
                {item.skills.map((skill) => (
                    <li
                        key={skill}
                        className="border-2 border-slate-300 dark:border-slate-700 px-2 py-0.5 font-pixel text-sm tracking-wide text-slate-500 dark:text-slate-400 group-hover:border-teal-500/50 dark:group-hover:border-amber-400/45"
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </article>
    );
}