import educationData from "@/data/education.json";
import type { EducationItem } from "@/data/types";
import { SectionHeading } from "@/components/ui/SectionHeading";

const education = educationData as EducationItem[];

export function Education() {
    return (
        <section id="education" className="scroll-mt-20 lg:scroll-mt-24">
            <SectionHeading title="Education" />

            <div>
                {education.map((item, i) => (
                    <div key={item.id} className="py-2">
                        {i > 0 && (
                            <hr className="border-slate-300 dark:border-slate-700/60" />
                        )}
                        <article className="group flex flex-col gap-1 p-4 -mx-4 transition-colors hover:bg-teal-500/5 dark:hover:bg-amber-400/5 sm:flex-row sm:gap-8">
                            <p className="shrink-0 font-pixel text-sm tracking-wide text-slate-500 dark:text-slate-300 sm:w-36 sm:pt-0.5">
                                {item.period}
                            </p>
                            <div className="min-w-0">
                                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                                    {item.institution}
                                </h3>
                                <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">
                                    {item.degree}
                                </p>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </section>
    );
}