import { CSSProperties } from "react";

import { Stagger, StaggerItem } from "@/components/animations";

import { TECH_STACK } from "./tech-stack.data";

export function TechStack() {
  return (
    <Stagger>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {TECH_STACK.map((tech) => {
          const Icon = tech.icon;

          return (
            <StaggerItem key={tech.name}>
              <div
                className="group flex items-center gap-2 rounded-full border border-border px-3 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary"
                style={
                  {
                    "--hover-color": tech.brandColor,
                  } as CSSProperties
                }
              >
                <Icon className="size-4 text-muted-foreground transition-colors duration-300 group-hover:text-(--hover-color) sm:size-5" />

                <span className="text-xs font-medium sm:text-sm">
                  {tech.name}
                </span>
              </div>
            </StaggerItem>
          );
        })}
      </div>
    </Stagger>
  );
}
