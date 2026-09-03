import Link from "next/link";
import certsData from "@/data/certifications.json";
import type { CertificationItem } from "@/data/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FiExternalLink } from "react-icons/fi";

const featured = (certsData as CertificationItem[]).filter((c) => c.featured);

export function Certifications() {
    return (
        <section id="certifications" className="scroll-mt-20 lg:scroll-mt-24">
            <SectionHeading title="Certifications" />

            <div>
                {featured.map((item, i) => (
                    <div key={item.id} className="py-2">
                        {i > 0 && (
                            <hr className="border-slate-300 dark:border-slate-700/60" />
                        )}
                        <article className="group flex items-baseline justify-between gap-4 p-4 -mx-4 transition-colors hover:bg-teal-500/5 dark:hover:bg-amber-400/5">
                            <div className="min-w-0">
                                <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100">
                                    {item.credentialUrl ? (
                                        <a
                                            href={item.credentialUrl}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="hover:text-teal-700 dark:hover:text-amber-400 transition-colors"
                                        >
                                            {item.name} <FiExternalLink className="inline w-3.5 h-3.5 ml-1" />
                                        </a>
                                    ) : (
                                        item.name
                                    )}
                                </h3>
                                <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                                    {item.issuer}
                                </p>
                            </div>
                            <p className="shrink-0 font-pixel text-sm tracking-wide text-slate-500 dark:text-slate-300">
                                {item.date}
                            </p>
                        </article>
                    </div>
                ))}
            </div>

            <p className="mt-8">
                <Link
                    href="/certifications"
                    className="font-pixel text-base tracking-wide text-teal-700 hover:underline dark:text-amber-400"
                >
                    View All Certifications →
                </Link>
            </p>
        </section>
    );
}