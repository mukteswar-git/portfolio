"use client";

import { ArrowUp } from "lucide-react";

import { FOOTER } from "./footer.data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border">
      <div className="container flex flex-col items-center justify-between gap-6 py-8 text-center md:flex-row md:text-left">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            © {year} Mukteswar Tripathy
          </p>

          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            Built with {FOOTER.builtWith.join(" • ")}
          </p>
        </div>

        <button
          type="button"
          aria-label="Scroll back to top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-primary"
        >
          Back to Top
          <ArrowUp className="size-4 transition-transform duration-300 group-hover:-translate-y-1" />
        </button>
      </div>
    </footer>
  );
}
