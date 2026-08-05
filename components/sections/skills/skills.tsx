import { Section } from "@/components/common/section";

import { SkillCategory } from "./skill-category";
import { SKILLS } from "./skills.data";

export function Skills() {
  return (
    <Section id="skills">
      <div className="space-y-12">
        <header className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            {SKILLS.badge}
          </p>

          <h2 className="font-heading max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            {SKILLS.title}
          </h2>
        </header>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SKILLS.categories.map((category) => (
            <SkillCategory key={category.title} category={category} />
          ))}
        </div>
      </div>
    </Section>
  );
}
