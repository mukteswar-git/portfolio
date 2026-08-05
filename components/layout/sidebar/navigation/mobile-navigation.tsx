"use client";

import Link from "next/link";

import { NAV_LINKS } from "./navigation.data";

type MobileNavigationProps = {
  onNavigate: () => void;
};

export function MobileNavigation({ onNavigate }: MobileNavigationProps) {
  return (
    <nav className="mt-2">
      <ul className="space-y-2">
        {NAV_LINKS.map((link) => {
          const Icon = link.icon;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onNavigate}
                className="flex items-center gap-4 rounded-xl px-4 py-3 transition-colors hover:bg-accent"
              >
                <Icon className="size-5 text-muted-foreground" />

                <span className="font-medium">{link.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
