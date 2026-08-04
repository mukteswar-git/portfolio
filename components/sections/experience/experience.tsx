import { Section } from "@/components/common/section";

import { ExperienceCard } from "./experience-card";
import { EXPERIENCE } from "./experience.data";

export function Experience() {
  return (
    <Section
      id="experience"
      className="flex items-center"
    >
      <div className="space-y-12">
        <header className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            {EXPERIENCE.badge}
          </p>

          <h2 className="font-heading max-w-3xl text-3xl font-bold tracking-tight lg:text-4xl">
            {EXPERIENCE.title}
          </h2>
        </header>

        <div className="max-w-5xl space-y-6">
          {EXPERIENCE.items.map((experience) => (
            <ExperienceCard
              key={`${experience.company}-${experience.role}`}
              experience={experience}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}