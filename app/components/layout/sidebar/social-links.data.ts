import type { ComponentType, SVGProps } from "react";

import GitHubIcon from "@/app/assets/icons/social/github.svg";
import LinkedInIcon from "@/app/assets/icons/social/linkedin.svg";
import ResumeIcon from "@/app/assets/icons/social/file-text.svg";
import MailIcon from "@/app/assets/icons/social/mail.svg";

export type SocialLink = {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  brandColor: string;
};

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/mukteswar-git",
    icon: GitHubIcon,
    brandColor: "#181717",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mukteswar-dev",
    icon: LinkedInIcon,
    brandColor: "#0A66C2",
  },
  {
    label: "Resume",
    href: "/Mukteswar_Tripathy_Resume.pdf",
    icon: ResumeIcon,
    brandColor: "#2563EB",
  },
  {
    label: "Email",
    href: "mailto:mukteswart5@gmail.com",
    icon: MailIcon,
    brandColor: "#EA4335",
  },
] as const;
