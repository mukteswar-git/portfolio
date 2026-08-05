type SkillChipProps = {
  skill: string;
};

export function SkillChip({ skill }: SkillChipProps) {
  return (
    <span className="rounded-full border px-3 py-1.5 text-xs font-medium sm:text-sm">
      {skill}
    </span>
  );
}
