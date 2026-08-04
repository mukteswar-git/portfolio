import { Home, User, Briefcase, FolderGit2, Code2, Mail } from "lucide-react";

export const NAV_LINKS = [
  {
    label: "Home",
    href: "#home",
    icon: Home,
  },
  {
    label: "About",
    href: "#about",
    icon: User,
  },
  {
    label: "Experience",
    href: "#experience",
    icon: Briefcase,
  },
  {
    label: "Projects",
    href: "#projects",
    icon: FolderGit2,
  },
  {
    label: "Skills",
    href: "#skills",
    icon: Code2,
  },
  {
    label: "Contact",
    href: "#contact",
    icon: Mail,
  },
] as const;
