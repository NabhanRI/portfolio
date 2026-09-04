import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";

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
            <FadeInSection>
              <About />
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <Experience />
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <Projects />
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <Skills />
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <Education />
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <Certifications />
            </FadeInSection>
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}