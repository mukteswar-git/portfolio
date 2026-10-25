import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import GithubIcon from "@/app/assets/icons/tools/github.svg";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { PROJECTS } from "./projects.data";

type FeaturedProjectProps = {
  project: typeof PROJECTS.featured | typeof PROJECTS.teamAccessControl;
};

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <article className="overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-300 hover:shadow-lg sm:p-8">
      <div className="grid gap-8 xl:grid-cols-[1.2fr_1fr] xl:items-center xl:gap-10">
        <div className="overflow-hidden rounded-xl shadow-lg ring-1 ring-border/50">
          <Image
            src={project.image}
            alt={project.title}
            className="h-auto w-full scale-[1.02] object-cover transition-transform duration-300 hover:scale-[1.01]"
            priority
          />
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground">
              {project.subtitle}
            </p>

            <h3 className="font-heading text-2xl font-bold sm:text-3xl">
              {project.title}
            </h3>

            <p className="text-base leading-8 text-muted-foreground">
              {project.description}
            </p>
          </div>

          <ul className="space-y-3">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <Check className="size-4 shrink-0 text-primary" />

                <span className="text-sm sm:text-base">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border px-3 py-1 text-xs sm:text-sm"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "justify-center")}
            >
              Live Demo
              <ArrowUpRight className="ml-2 size-4" />
            </Link>

            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                }),
                "justify-center",
              )}
            >
              Source Code
              <GithubIcon className="ml-2 size-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
