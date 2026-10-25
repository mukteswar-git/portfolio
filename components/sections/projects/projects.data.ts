import ClashLensDashboard from "@/app/assets/images/projects/clashlens-dashboard.png";
import TeamAccessControlApi from "@/app/assets/images/projects/team-access-control-api.png";

export const PROJECTS = {
  badge: "Projects",

  title: "Featured work demonstrating practical full-stack development.",

  featured: {
    title: "ClashLens",

    subtitle: "Clash of Clans Analytics Platform",

    description:
      "A full-stack analytics platform that provides clan leaders with live player insights, donation tracking, Town Hall distribution, and war analytics using the official Clash of Clans API.",

    image: ClashLensDashboard,

    features: [
      "Live clan analytics",
      "Player performance insights",
      "Town Hall & league distribution",
      "Current war snapshot",
      "Official Clash of Clans API integration",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],

    github: "https://github.com/mukteswar-git/clashlens",

    live: "https://clashlens.app",
  },

  teamAccessControl: {
    title: "Team Access Control API",
    subtitle: "Multi-Tenant Identity & Access Management",

    description:
      "A backend-only IAM API built with Node.js, TypeScript, Express, PostgreSQL, and Prisma. Implements secure authentication, organization-scoped authorization, team memberships, invitations, and audit logging.",

    image: TeamAccessControlApi,

    features: [
      "Secure authentication and session management",
      "Multi-tenant organization and membership management",
      "Role- and permission-based access control",
      "Organization-scoped audit logging",
      "Automated testing with Jest and Supertest",
    ],

    technologies: [
      "Node.js",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Zod",
      "Jest",
      "Supertest",
    ],

    github: "https://github.com/mukteswar-git/team-access-control-api",

    live: "https://team-access-control-api-o2cn.onrender.com/api-docs",
  },

  github: "https://github.com/mukteswar-git",
} as const;
