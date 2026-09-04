export function Footer() {
    return (
        <footer className="pt-10 pb-8">
            <div className="font-pixel text-center text-xs tracking-wide text-slate-400 dark:text-slate-500">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    ⌐■-■ crafted by{" "}
                    <span className="text-teal-600 dark:text-amber-400">
                        nabhanri
                    </span>
                </p>
                <p className="mt-2">
                    {"< built with Next.js, coffee, and too many tabs. />"}
                </p>
                <p className="mt-1">
                    © {new Date().getFullYear()} — Jakarta, Indonesia
                </p>
            </div>
        </footer>
    );
}