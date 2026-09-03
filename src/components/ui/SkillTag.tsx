type SkillTagProps = {
    label: string;
};

export function SkillTag({ label }: SkillTagProps) {
    return (
        <span className="inline-block border-2 border-slate-300 dark:border-slate-700 px-2.5 py-1 font-pixel text-sm tracking-wide text-slate-600 dark:text-slate-400 transition-colors hover:border-teal-500/50 hover:text-teal-700 dark:hover:border-amber-400/45 dark:hover:text-amber-400">
            {label}
        </span>
    );
}