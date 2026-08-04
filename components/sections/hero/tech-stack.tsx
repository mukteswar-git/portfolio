import { CSSProperties } from "react";

import { TECH_STACK } from "./tech-stack.data";

export function TechStack() {
  return (
    <div className="flex flex-wrap gap-3">
      {TECH_STACK.map((tech) => {
        const Icon = tech.icon;

        return (
          <div
            key={tech.name}
            className="group flex items-center gap-2 rounded-full border border-border px-3 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary"
            style={
              {
                "--hover-color": tech.brandColor,
              } as CSSProperties
            }
          >
            <Icon className="size-5 text-muted-foreground transition-colors duration-300 group-hover:text-(--hover-color)" />

            <span className="text-sm font-medium">
              {tech.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}