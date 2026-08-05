import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Section } from "@/components/common/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { ContactCard } from "./contact-card";
import { CONTACT } from "./contact.data";

export function Contact() {
  return (
    <Section id="contact">
      <div className="space-y-12">
        <header className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            {CONTACT.badge}
          </p>

          <h2 className="font-heading max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            {CONTACT.title}
          </h2>

          <p className="max-w-2xl text-base leading-8 text-muted-foreground">
            {CONTACT.description}
          </p>
        </header>

        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          <ContactCard
            title="Email"
            value={CONTACT.email}
            href={`mailto:${CONTACT.email}`}
          />

          <ContactCard
            title="Phone"
            value={CONTACT.phone}
            href="tel:+918457043451"
          />

          <ContactCard title="Location" value={CONTACT.location} />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <Link
            href={`mailto:${CONTACT.email}`}
            className={cn(buttonVariants({ size: "lg" }), "justify-center")}
          >
            Send Email
            <ArrowUpRight className="ml-2 size-4" />
          </Link>

          <Link
            href={CONTACT.socials[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "lg",
              }),
              "justify-center",
            )}
          >
            GitHub
          </Link>

          <Link
            href={CONTACT.socials[1].href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "lg",
              }),
              "justify-center",
            )}
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </Section>
  );
}
