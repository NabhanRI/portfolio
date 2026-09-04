type SectionHeadingProps = {
    title: string;
};

export function SectionHeading({ title }: SectionHeadingProps) {
    return (
        <>
            {/* Mobile sticky label */}
            <div className="sticky top-14 z-20 -mx-5 mb-4 w-screen bg-slate-200/90 dark:bg-[#0a192f]/80 px-5 py-4 backdrop-blur-md sm:-mx-8 sm:px-8 lg:hidden">
                <h2 className="font-pixel text-lg uppercase tracking-wide text-teal-600 dark:text-amber-400">
                    {`// ${title}`}
                </h2>
            </div>

            {/* Desktop label */}
            <h2 className="mb-6 hidden font-pixel text-xl uppercase tracking-wide text-teal-600 dark:text-amber-400 lg:block">
                {`// ${title}`}
            </h2>
        </>
    );
}