import { buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";

export type HeroAction = {
  label: string;
  href: string;
  variant: VariantProps<typeof buttonVariants>["variant"];
  icon: "arrow-right" | "download";
};

export const HERO = {
  greeting: "Hi, I'm",
  name: "Mukteswar Tripathy",
  title: "Full-Stack Developer",
  description:
    "I develop responsive and performant web applications using React, Next.js, TypeScript, Node.js, and PostgreSQL, with a focus on clean architecture and user-centric design.",

  actions: [
    {
      label: "View Projects",
      href: "#projects",
      variant: "default",
      icon: "arrow-right",
    },
    {
      label: "Download Resume",
      href: "/Mukteswar_Tripathy_Resume.pdf",
      variant: "outline",
      icon: "download",
    },
  ] satisfies readonly HeroAction[],
} as const;
