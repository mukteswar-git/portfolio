import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

import { Section } from "@/components/common/section";
import { Reveal } from "@/components/animations";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { HERO } from "./hero.data";
import { TechStack } from "./tech-stack";

import { ProfilePhoto } from "@/components/layout/sidebar/profile-photo";
import { AvailabilityBadge } from "@/components/common/availability-badge";

const ACTION_ICONS = {
  "arrow-right": ArrowRight,
  download: Download,
} as const;

export function Hero() {
  return (
    <Section id="home" className="flex items-center" padded={false}>
      <Reveal>
        <div className="mb-8 flex flex-col items-center gap-4 lg:hidden">
          <ProfilePhoto />

          <AvailabilityBadge />
        </div>
        <div className="max-w-3xl space-y-8">
          <div className="space-y-6">
            <p className="text-sm font-medium text-primary sm:text-base">
              {HERO.greeting}
            </p>

            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
              {HERO.name}
            </h1>

            <h2 className="text-2xl font-medium text-muted-foreground sm:text-3xl">
              {HERO.title}
            </h2>

            <p className="max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              {HERO.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            {HERO.actions.map((action) => {
              const Icon = ACTION_ICONS[action.icon];

              return (
                <Link
                  key={action.label}
                  href={action.href}
                  target={action.href.endsWith(".pdf") ? "_blank" : undefined}
                  rel={
                    action.href.endsWith(".pdf")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={cn(
                    buttonVariants({
                      variant: action.variant,
                      size: "lg",
                    }),
                    "justify-center",
                  )}
                >
                  {action.label}

                  <Icon className="ml-2 size-4" />
                </Link>
              );
            })}
          </div>

          <div className="space-y-3 pt-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Tech Stack
            </p>

            <TechStack />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
