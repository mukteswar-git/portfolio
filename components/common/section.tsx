import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  padded?: boolean;
};

export function Section({
  id,
  children,
  className,
  padded = true,
}: SectionProps) {
  return (
    <section id={id} className={cn("min-h-screen", className)}>
      <div className={cn("container", padded && "py-20")}>{children}</div>
    </section>
  );
}
