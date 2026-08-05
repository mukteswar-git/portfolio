import { CheckCircle2 } from "lucide-react";

import { ABOUT } from "./about.data";

export function AboutHighlights() {
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {ABOUT.highlights.map((highlight) => (
        <li
          key={highlight}
          className="flex items-center gap-3 rounded-xl border border-border px-4 py-3"
        >
          <CheckCircle2 className="size-5 shrink-0 text-primary" />

          <span className="text-sm font-medium sm:text-base">{highlight}</span>
        </li>
      ))}
    </ul>
  );
}
