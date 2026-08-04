import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { PROJECTS } from "./projects.data";

export function MoreProjects() {
  return (
    <div className="rounded-2xl border bg-card p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <h3 className="font-heading text-2xl font-semibold">More Projects</h3>

          <p className="max-w-3xl leading-8 text-muted-foreground">
            While ClashLens is my flagship project, I continuously build smaller
            applications, UI experiments, and learning projects. Explore my
            GitHub to see my development journey and ongoing work.
          </p>
        </div>

        <Link
          href={PROJECTS.github}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          Visit GitHub
          <ArrowUpRight className="ml-2 size-4" />
        </Link>
      </div>
    </div>
  );
}
