import { Section } from "@/components/common/section";

import { ABOUT } from "./about.data";
import { AboutHighlights } from "./about-highlights";

export function About() {
  return (
    <Section id="about" className="flex items-center">
      <div className="grid gap-16 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            {ABOUT.badge}
          </p>

          <h2 className="font-heading text-4xl font-bold tracking-tight">
            {ABOUT.title}
          </h2>

          <div className="space-y-4">
            {ABOUT.paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8 text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <AboutHighlights />
        </div>
      </div>
    </Section>
  );
}
