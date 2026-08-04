import Link from "next/link";
import { NAV_LINKS } from "./navigation.data";

export function Navigation() {
  return (
    <nav aria-label="Primary Navigation" className="space-y-2">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="group flex items-center rounded-lg transition-all duration-300"
        >
          <div className="h-8 w-1 rounded-full bg-primary opacity-0 transition-all duration-300 group-hover:opacity-100" />

          <span className="px-4 py-3 text-sm font-medium uppercase tracking-widest transition-colors duration-300 group-hover:text-primary">
            {link.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
