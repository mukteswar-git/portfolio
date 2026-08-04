import { CheckCircle2 } from "lucide-react";

import { ABOUT } from "./about.data";

export function AboutHighlights() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {ABOUT.highlights.map((highlight) => (
        <li
          key={highlight}
          className="flex items-center gap-3 rounded-lg border border-border p-4"
        >
          <CheckCircle2 className="size-5 text-primary" />

          <span className="font-medium">{highlight}</span>
        </li>
      ))}
    </ul>
  );
}
