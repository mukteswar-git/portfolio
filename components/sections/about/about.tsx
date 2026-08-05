import { Section } from "@/components/common/section";

import { ABOUT } from "./about.data";
import { AboutHighlights } from "./about-highlights";
import { Reveal } from "@/components/animations";

export function About() {
  return (
    <Section id="about" className="flex items-center">
      <Reveal>
        <div className="grid gap-12 xl:grid-cols-2 xl:gap-16">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {ABOUT.badge}
            </p>

            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              {ABOUT.title}
            </h2>

            <div className="space-y-4">
              {ABOUT.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-8 text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="flex items-start xl:items-center">
            <AboutHighlights />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
