import Link from "next/link";

import { SOCIAL_LINKS } from "./social-links.data";

import type { CSSProperties } from "react";

export function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-4">
      {SOCIAL_LINKS.map((link) => {
        const Icon = link.icon;

        return (
          <Link
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={
              link.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            aria-label={link.label}
            title={link.label}
            className="group rounded-full p-2 transition-all duration-300 hover:bg-muted"
            style={
              {
                "--brand-color": link.brandColor,
              } as CSSProperties
            }
          >
            <Icon className="size-6 text-muted-foreground transition-all duration-300 group-hover:scale-110 group-hover:text-(--brand-color)" />
          </Link>
        );
      })}
    </div>
  );
}
