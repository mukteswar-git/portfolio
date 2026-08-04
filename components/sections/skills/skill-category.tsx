import { SKILLS } from "./skills.data";
import { SkillChip } from "./skill-chip";

type SkillCategoryProps = {
  category: (typeof SKILLS.categories)[number];
};

export function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <article className="h-full rounded-xl border bg-card p-6">
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">{category.title}</h3>

        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <SkillChip key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </article>
  );
}
