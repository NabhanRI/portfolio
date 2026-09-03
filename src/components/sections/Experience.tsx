import experienceData from "@/data/experience.json";
import type { ExperienceItem } from "@/data/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceCard } from "@/components/ui/ExperienceCard";

const experience = experienceData as ExperienceItem[];

export function Experience() {
    return (
        <section id="experience" className="scroll-mt-20 lg:scroll-mt-24">
            <SectionHeading title="Experience" />

            <div>
                {experience.map((item, i) => (
                    <div key={item.id} className="py-2">
                        {i > 0 && (
                            <hr className="border-slate-200 dark:border-slate-700/60 pb-2" />
                        )}
                        <ExperienceCard item={item} />
                    </div>
                ))}
            </div>
        </section>
    );
}