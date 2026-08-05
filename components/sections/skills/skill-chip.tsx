type SkillChipProps = {
  skill: string;
};

export function SkillChip({ skill }: SkillChipProps) {
  return (
    <span
      className="
        rounded-full
        border
        px-3
        py-1.5
        text-xs
        font-medium
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-primary
        sm:text-sm
      "
    >
      {skill}
    </span>
  );
}
