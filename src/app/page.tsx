import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-pixel-grid">
      <Navbar />

      <div className="mx-auto min-h-screen max-w-screen-xl px-5 sm:px-8 md:px-12 lg:px-24 pt-14">
        <div className="lg:flex lg:justify-between lg:gap-12">
          <Sidebar />

          <main
            id="content"
            className="pb-16 lg:w-7/12 lg:py-12 space-y-20 sm:space-y-28"
          >
            <section id="about" className="scroll-mt-20 lg:scroll-mt-24">
              <div className="sticky top-14 z-20 -mx-5 mb-4 w-screen bg-slate-200/90 dark:bg-[#0a192f]/80 px-5 py-4 backdrop-blur-md sm:-mx-8 sm:px-8 lg:sr-only">
                <h2 className="font-pixel text-lg uppercase tracking-wide text-teal-600 dark:text-amber-400">
                  {"// About"}
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                Loading About section...
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}