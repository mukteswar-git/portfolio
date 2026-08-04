import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import GithubIcon from "@/app/assets/icons/tools/github.svg";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { PROJECTS } from "./projects.data";

type FeaturedProjectProps = {
  project: typeof PROJECTS.featured;
};

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <article className="overflow-hidden rounded-2xl border bg-card p-8 hover:shadow-lg transition-all duration-300">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
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
            <p
              className="text-sm font-medium text-muted-foreground"
            >
              {project.subtitle}
            </p>

            <h3 className="font-heading text-3xl font-bold">{project.title}</h3>

            <p className="leading-8 text-muted-foreground">
              {project.description}
            </p>
          </div>

          <ul className="space-y-3">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <Check className="size-4 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border px-3 py-1 text-sm"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }))}
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
