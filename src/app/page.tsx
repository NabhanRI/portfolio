import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <div className="mx-auto min-h-screen max-w-screen-xl px-5 sm:px-8 md:px-12 lg:px-24 pt-14">
        <div className="lg:flex lg:justify-between lg:gap-12">
          <Sidebar />

          <main
            id="content"
            className="pb-16 lg:w-7/12 lg:py-12 space-y-12 sm:space-y-16"
          >
            <About />
            <Experience />
            <Projects />
            <Skills />
          </main>
        </div>
      </div>
    </div>
  );
}