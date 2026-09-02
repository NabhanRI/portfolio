import aboutData from "@/data/about.json";
import type { AboutContent } from "@/data/types";
import { SectionHeading } from "@/components/ui/SectionHeading";

const about = aboutData as AboutContent;

function renderParagraph(text: string, highlights: string[]) {
    if (highlights.length === 0) return text;

    const escaped = highlights.map((h) =>
        h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    );
    const pattern = new RegExp(`(${escaped.join("|")})`, "g");
    const parts = text.split(pattern);

    return parts.map((part, index) =>
        highlights.includes(part) ? (
            <strong
                key={`${part}-${index}`}
                className="font-semibold text-slate-800 dark:text-slate-100"
            >
                {part}
            </strong>
        ) : (
            <span key={`${part}-${index}`}>{part}</span>
        )
    );
}

export function About() {
    return (
        <section id="about" className="scroll-mt-20 lg:scroll-mt-24">
            <SectionHeading title="About" />

            <div className="space-y-4">
                {about.paragraphs.map((paragraph) => (
                    <p
                        key={paragraph.slice(0, 24)}
                        className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400"
                    >
                        {renderParagraph(paragraph, about.highlights)}
                    </p>
                ))}
            </div>
        </section>
    );
}