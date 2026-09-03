import skillsData from "@/data/skills.json";
import type { SkillCategory } from "@/data/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillTag } from "@/components/ui/SkillTag";

const skills = skillsData as SkillCategory[];

export function Skills() {
    return (
        <section id="skills" className="scroll-mt-20 lg:scroll-mt-24">
            <SectionHeading title="Skills" />

            <div className="space-y-8">
                {skills.map((group) => (
                    <div key={group.id}>
                        <h3 className="mb-3 font-pixel text-base tracking-wide text-teal-600 dark:text-amber-400/80">
                            {group.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {group.items.map((skill) => (
                                <SkillTag key={skill} label={skill} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}