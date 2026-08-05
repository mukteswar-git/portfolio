import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { PROJECTS } from "./projects.data";

export function MoreProjects() {
  return (
    <div className="rounded-2xl border bg-card p-6 sm:p-8">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
        <div className="space-y-3">
          <h3 className="font-heading text-xl font-semibold sm:text-2xl">
            More Projects
          </h3>

          <p className="max-w-3xl text-base leading-8 text-muted-foreground">
            While ClashLens is my flagship project, I continuously build smaller
            applications, UI experiments, and learning projects. Explore my
            GitHub to see my development journey and ongoing work.
          </p>
        </div>

        <Link
          href={PROJECTS.github}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "lg",
            }),
            "self-start xl:self-auto",
          )}
        >
          Visit GitHub
          <ArrowUpRight className="ml-2 size-4" />
        </Link>
      </div>
    </div>
  );
}
