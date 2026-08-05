"use client";

import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

import { NAV_LINKS } from "./navigation.data";

export function Navigation() {
  const activeSection = useScrollSpy();

  return (
    <nav aria-label="Primary Navigation" className="space-y-2">
      {NAV_LINKS.map((link) => {
        const isActive = activeSection === link.href.slice(1);

        return (
          <a
            key={link.href}
            href={link.href}
            className="group flex items-center rounded-lg transition-all duration-300"
          >
            <div
              className={cn(
                "h-8 w-1 rounded-full bg-primary transition-all duration-300",
                isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100",
              )}
            />

            <span
              className={cn(
                "px-4 py-3 text-sm font-medium uppercase tracking-widest transition-colors duration-300",
                isActive ? "text-primary" : "group-hover:text-primary",
              )}
            >
              {link.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
