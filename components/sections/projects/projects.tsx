import { Section } from "@/components/common/section";

import { FeaturedProject } from "./featured-project";
import { MoreProjects } from "./more-projects";
import { PROJECTS } from "./projects.data";
import { Reveal } from "@/components/animations";

export function Projects() {
  return (
    <Section id="projects">
      <Reveal>
        <div className="space-y-12">
          <header className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {PROJECTS.badge}
            </p>

            <h2 className="font-heading max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
              {PROJECTS.title}
            </h2>
          </header>

          <FeaturedProject project={PROJECTS.featured} />

          <FeaturedProject project={PROJECTS.teamAccessControl} />

          <Reveal>
            <MoreProjects />
          </Reveal>
        </div>
      </Reveal>
    </Section>
  );
}
