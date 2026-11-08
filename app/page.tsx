import { Sidebar } from "@/components/layout/sidebar/sidebar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { MobileHeader } from "@/components/layout/mobile-header";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <>
      <MobileHeader />
      <div className="min-h-screen lg:flex">
        <Sidebar />

        <main className="flex-1 px-6 pt-20 lg:px-16 lg:pt-0 xl:px-24">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}
