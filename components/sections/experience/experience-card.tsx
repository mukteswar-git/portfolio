import { EXPERIENCE } from "./experience.data";

type ExperienceCardProps = {
  experience: (typeof EXPERIENCE.items)[number];
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article
      className="
        rounded-xl
        border
        bg-card
        p-8
        transition-all
        duration-300
        hover:border-primary/30
        hover:shadow-lg
      "
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-medium text-primary">
            {experience.duration}
          </p>

          <div>
            <h3 className="text-xl font-semibold">{experience.role}</h3>

            <p className="text-sm text-muted-foreground">
              {experience.company}
            </p>
          </div>
        </div>

        <ul className="space-y-3">
          {experience.description.map((item) => (
            <li key={item} className="flex gap-3 text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span key={tech} className="rounded-full border px-3 py-1 text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
