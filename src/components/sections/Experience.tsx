import experienceData from "@/data/experience.json";
import type { ExperienceItem } from "@/data/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceCard } from "@/components/ui/ExperienceCard";

const experience = experienceData as ExperienceItem[];

export function Experience() {
    return (
        <section id="experience" className="scroll-mt-20 lg:scroll-mt-24">
            <SectionHeading title="Experience" />

            <div className="space-y-4">
                {experience.map((item) => (
                    <ExperienceCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
}